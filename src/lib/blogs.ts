import initialBlogsData from './blogs.json';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: string;
  authorRole: string;
  readTime: string;
  publishedAt: string;
  inArticleImage?: string;
  inArticleCaption?: string;
  article: {
    intro: string;
    body: string[];
    quote: string;
    quoteAuthor: string;
  };
}

const GIST_ID = 'f283d92f3a86e50b21a9f40304180407';
const GIST_TOKEN = process.env.GITHUB_GIST_TOKEN || '';

// Persistent in-memory storage for custom user-created posts
let cachedCustomBlogs: BlogPost[] = [];
let lastCloudFetchTime = 0;

export async function syncCloudBlogs(): Promise<BlogPost[]> {
  const now = Date.now();
  // Cache for 5 seconds to keep requests ultra-fast while staying fresh
  if (now - lastCloudFetchTime < 5000 && cachedCustomBlogs.length > 0) {
    return cachedCustomBlogs;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Sobhavi-Travels-App',
        'Accept': 'application/vnd.github+json',
        ...(GIST_TOKEN ? { 'Authorization': `Bearer ${GIST_TOKEN}` } : {})
      },
      cache: 'no-store'
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const content = data.files?.['sobhavi_blogs.json']?.content;
      if (content) {
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed.posts)) {
          cachedCustomBlogs = parsed.posts;
          lastCloudFetchTime = now;
        }
      }
    }
  } catch (error) {
    console.warn('Could not sync with GitHub Gist, using cached blogs:', error);
  }
  return cachedCustomBlogs;
}

export function getAllBlogs(): BlogPost[] {
  const custom = cachedCustomBlogs || [];
  const base = initialBlogsData as BlogPost[];
  
  // Merge custom posts at the top, avoiding duplicate IDs/slugs or duplicate cover images
  const seenSlugs = new Set<string>();
  const seenImages = new Set<string>();
  const merged: BlogPost[] = [];

  for (const post of custom) {
    if (post && post.slug && !seenSlugs.has(post.slug.toLowerCase())) {
      const normalized = { ...post };
      // If this is the custom Haveli post that previously shared Amber Fort's photo, give it an authentic Haveli image
      if (normalized.title.toLowerCase().includes('haveli') || normalized.slug.includes('haveli')) {
        normalized.coverImage = 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop';
        normalized.category = 'Culture & Heritage';
      }
      
      const imgKey = normalized.coverImage.match(/photo-[a-zA-Z0-9_-]+/)?.[0] || normalized.coverImage;
      seenSlugs.add(normalized.slug.toLowerCase());
      seenImages.add(imgKey);
      merged.push(normalized);
    }
  }

  for (const post of base) {
    if (post && post.slug && !seenSlugs.has(post.slug.toLowerCase())) {
      const imgKey = post.coverImage.match(/photo-[a-zA-Z0-9_-]+/)?.[0] || post.coverImage;
      // If a post with the exact same cover image was already added, skip duplicate
      if (seenImages.has(imgKey)) {
        continue;
      }
      seenSlugs.add(post.slug.toLowerCase());
      seenImages.add(imgKey);
      merged.push(post);
    }
  }

  return merged;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  const all = getAllBlogs();
  return all.find(b => b.slug.toLowerCase() === slug.toLowerCase());
}

export async function saveBlog(newPost: Omit<BlogPost, 'id' | 'publishedAt'>): Promise<BlogPost> {
  const createdPost: BlogPost = {
    id: `blog-${Date.now()}`,
    slug: newPost.slug || newPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
    title: newPost.title,
    excerpt: newPost.excerpt,
    coverImage: newPost.coverImage,
    category: newPost.category || 'Luxury Travel',
    author: newPost.author || 'Sobhavi Travel Specialist',
    authorRole: newPost.authorRole || 'Senior Editorial Curator',
    readTime: newPost.readTime || '5 min read',
    publishedAt: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    inArticleImage: newPost.inArticleImage,
    inArticleCaption: newPost.inArticleCaption,
    article: newPost.article
  };

  // Add to top of custom blogs
  cachedCustomBlogs = [createdPost, ...cachedCustomBlogs.filter(b => b.id !== createdPost.id && b.slug !== createdPost.slug)];
  lastCloudFetchTime = Date.now();

  // 1. Sync to GitHub Gist for global multi-device persistent storage
  try {
    await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${GIST_TOKEN}`,
        'User-Agent': 'Sobhavi-Travels-App',
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        files: {
          'sobhavi_blogs.json': {
            content: JSON.stringify({ posts: cachedCustomBlogs }, null, 2)
          }
        }
      })
    });
  } catch (error) {
    console.error('Failed to persist blog to GitHub Gist:', error);
  }

  // 2. Also try writing to local disk if running locally
  if (typeof window === 'undefined') {
    try {
      const reqFs = eval("require('fs')");
      const reqPath = eval("require('path')");
      const blogsFile = reqPath.join(process.cwd(), 'src/lib/blogs.json');
      const allCurrent = getAllBlogs();
      reqFs.writeFileSync(blogsFile, JSON.stringify(allCurrent, null, 2), 'utf-8');
    } catch (e) {
      // Ignored in read-only serverless
    }
  }

  return createdPost;
}

export async function deleteBlog(id: string): Promise<boolean> {
  cachedCustomBlogs = cachedCustomBlogs.filter(b => b.id !== id);
  lastCloudFetchTime = Date.now();

  try {
    await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${GIST_TOKEN}`,
        'User-Agent': 'Sobhavi-Travels-App',
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        files: {
          'sobhavi_blogs.json': {
            content: JSON.stringify({ posts: cachedCustomBlogs }, null, 2)
          }
        }
      })
    });
    return true;
  } catch (error) {
    console.error('Failed to sync deletion to GitHub Gist:', error);
    return false;
  }
}
