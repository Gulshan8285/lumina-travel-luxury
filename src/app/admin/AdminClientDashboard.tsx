"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blogs';
import { SiteConfig, DestinationPackage } from '@/lib/siteConfig';
import ImageUploader, { CURATED_PHOTOS } from './ImageUploader';
import styles from './page.module.css';

interface EnquiryItem {
  id: string;
  name: string;
  email?: string | null;
  whatsapp: string;
  destination?: string | null;
  journey?: string | null;
  travelDate?: string | null;
  duration?: string | null;
  travellers?: string | null;
  budget?: string | null;
  comments?: string | null;
  status: string;
  createdAt: string | Date;
}

interface AdminDashboardProps {
  initialEnquiries: EnquiryItem[];
  initialBlogs: BlogPost[];
  initialConfig: SiteConfig;
}

export default function AdminClientDashboard({ initialEnquiries, initialBlogs, initialConfig }: AdminDashboardProps) {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Active Tab
  const [activeTab, setActiveTab] = useState<'contact' | 'hero' | 'domestic' | 'international' | 'blogs' | 'enquiries'>('contact');

  // Site Configuration State
  const [config, setConfig] = useState<SiteConfig>(initialConfig);
  const [savingSection, setSavingSection] = useState<string | null>(null);

  // Blogs and Enquiries State
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>(initialEnquiries);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Blog creation form
  const [blogForm, setBlogForm] = useState({
    title: '',
    category: 'Spiritual & Pilgrimage',
    coverImage: CURATED_PHOTOS[0].url,
    excerpt: '',
    paragraphs: '',
    quote: '',
    quoteAuthor: '',
    author: 'Sobhavi Travel Specialist',
    authorRole: 'Senior Itinerary Curator',
    readTime: '5 min read'
  });
  const [isPublishingBlog, setIsPublishingBlog] = useState(false);

  // Check login on mount
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('sobhavi_admin_auth');
    const localAuth = localStorage.getItem('sobhavi_admin_auth');
    if (sessionAuth === 'true' || localAuth === 'true') {
      setIsAuthenticated(true);
    }

    // Load any locally cached edits
    const cachedConfig = localStorage.getItem('sobhavi_site_config');
    if (cachedConfig) {
      try {
        const parsed = JSON.parse(cachedConfig);
        setConfig(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error(e);
      }
    }

    // Sync latest blogs from cloud/API
    fetch('/api/blogs')
      .then(r => r.json())
      .then(d => {
        if (d.success && Array.isArray(d.blogs) && d.blogs.length > 0) {
          setBlogs(d.blogs);
        }
      })
      .catch(console.error);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPass = passcode.trim();
    // Accept master passcodes
    if (cleanPass === 'sobhavi2026' || cleanPass === 'admin123' || cleanPass === 'admin') {
      setIsAuthenticated(true);
      setLoginError(false);
      sessionStorage.setItem('sobhavi_admin_auth', 'true');
      if (rememberMe) {
        localStorage.setItem('sobhavi_admin_auth', 'true');
      }
      showToast('✓ Welcome to Sobhavi Travels Admin Portal');
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('sobhavi_admin_auth');
    localStorage.removeItem('sobhavi_admin_auth');
    setIsAuthenticated(false);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Save Config Section to Server and Local Storage
  const handleSaveConfig = async (sectionName: string) => {
    setSavingSection(sectionName);
    try {
      // 1. Save to localStorage for instant client reactivity
      localStorage.setItem('sobhavi_site_config', JSON.stringify(config));
      window.dispatchEvent(new Event('storage'));

      // 2. Save to server backend
      const res = await fetch('/api/site-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });
      const data = await res.json();
      if (data.success) {
        showToast(`✓ ${sectionName} saved successfully! Changes are live.`);
      } else {
        showToast(`✓ ${sectionName} saved locally!`);
      }
    } catch (err) {
      console.error(err);
      showToast(`✓ ${sectionName} saved locally!`);
    } finally {
      setSavingSection(null);
    }
  };

  // Handle Domestic Destination Change
  const handleDomesticChange = (index: number, field: keyof DestinationPackage, value: any) => {
    const updated = [...config.domesticDestinations];
    updated[index] = { ...updated[index], [field]: value };
    setConfig({ ...config, domesticDestinations: updated });
  };

  // Handle International Destination Change
  const handleInternationalChange = (index: number, field: keyof DestinationPackage, value: any) => {
    const updated = [...config.internationalDestinations];
    updated[index] = { ...updated[index], [field]: value };
    setConfig({ ...config, internationalDestinations: updated });
  };

  // Publish Blog Post
  const handlePublishBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title || !blogForm.excerpt) {
      alert("Please enter a title and excerpt for your blog post.");
      return;
    }

    setIsPublishingBlog(true);
    try {
      const res = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: blogForm.title,
          category: blogForm.category,
          coverImage: blogForm.coverImage,
          excerpt: blogForm.excerpt,
          intro: blogForm.excerpt,
          bodyParagraphs: blogForm.paragraphs.split('\n\n').filter(p => p.trim()),
          quote: blogForm.quote || "Every journey is a story waiting to be told.",
          quoteAuthor: blogForm.quoteAuthor || blogForm.author,
          author: blogForm.author,
          authorRole: blogForm.authorRole,
          readTime: blogForm.readTime
        })
      });

      const data = await res.json();
      if (data.success && data.blog) {
        const updatedBlogs = [data.blog, ...blogs];
        setBlogs(updatedBlogs);

        // Store custom post locally for instantaneous zero-latency client display
        try {
          const localStored = JSON.parse(localStorage.getItem('sobhavi_custom_blogs') || '[]');
          const filtered = localStored.filter((b: any) => b.id !== data.blog.id && b.slug !== data.blog.slug);
          localStorage.setItem('sobhavi_custom_blogs', JSON.stringify([data.blog, ...filtered]));
          window.dispatchEvent(new Event('sobhavi_blogs_updated'));
          window.dispatchEvent(new Event('storage'));
        } catch (e) {
          console.error('Error caching blog locally:', e);
        }

        showToast("✓ New Blog Article Published Successfully! Live on website.");
        setBlogForm({
          title: '',
          category: 'Spiritual & Pilgrimage',
          coverImage: CURATED_PHOTOS[0].url,
          excerpt: '',
          paragraphs: '',
          quote: '',
          quoteAuthor: '',
          author: 'Sobhavi Travel Specialist',
          authorRole: 'Senior Itinerary Curator',
          readTime: '5 min read'
        });
      } else {
        alert("Could not publish blog. Please check your inputs.");
      }
    } catch (err) {
      console.error(err);
      alert("Error publishing blog.");
    } finally {
      setIsPublishingBlog(false);
    }
  };

  // Delete Blog
  const handleDeleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this article?")) return;
    try {
      const res = await fetch(`/api/blogs?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setBlogs(blogs.filter(b => b.id !== id));
        try {
          const localStored = JSON.parse(localStorage.getItem('sobhavi_custom_blogs') || '[]');
          localStorage.setItem('sobhavi_custom_blogs', JSON.stringify(localStored.filter((b: any) => b.id !== id)));
          window.dispatchEvent(new Event('sobhavi_blogs_updated'));
          window.dispatchEvent(new Event('storage'));
        } catch (e) {
          console.error(e);
        }
        showToast("✓ Article deleted successfully.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // -------------------------------------------------------------
  // RENDER LOGIN SCREEN (IF NOT AUTHENTICATED)
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className={styles.loginWrapper}>
        <div className={styles.loginCard}>
          <div className={styles.loginLogo}>SOBHAVI TRAVELS</div>
          <span className={styles.loginBadge}>OFFICIAL MANAGEMENT PORTAL</span>
          <h1 className={styles.loginTitle}>Admin Sign In</h1>
          <p className={styles.loginSubtitle}>
            Welcome! Enter your master passcode to edit contact numbers, destinations, hero text, and publish blogs.
          </p>

          {loginError && (
            <div className={styles.loginError}>
              ⚠️ Incorrect passcode. Please try again or check the hint below.
            </div>
          )}

          <form onSubmit={handleLogin} className={styles.loginForm}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Admin Passcode</label>
              <input 
                type="password"
                placeholder="Enter passcode..."
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className={styles.formInput}
                autoFocus
                required
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <input 
                type="checkbox" 
                id="remember" 
                checked={rememberMe} 
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Remember login on this browser</label>
            </div>

            <button type="submit" className={styles.loginSubmitBtn}>
              Log In to Admin Portal &rarr;
            </button>
          </form>

          <div className={styles.loginHint}>
            🔑 Passcode: <strong>sobhavi2026</strong>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER AUTHENTICATED ADMIN DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className={styles.adminWrapper}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className={styles.toastNotification}>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Admin Top Header */}
      <header className={styles.adminHeader}>
        <div className={styles.headerBrand}>
          <span className={styles.brandBadge}>CONTENT & BOOKINGS CONTROL DESK</span>
          <h1 className={styles.pageTitle}>Sobhavi Travels Admin Panel</h1>
        </div>

        <div className={styles.headerActions}>
          <Link href="/" target="_blank" className={styles.previewSiteBtn}>
            <span>View Live Website</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </Link>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Log Out
          </button>
        </div>
      </header>

      {/* Easy Navigation Tabs */}
      <nav className={styles.tabBar} aria-label="Admin Navigation">
        <button 
          onClick={() => setActiveTab('contact')} 
          className={`${styles.tabBtn} ${activeTab === 'contact' ? styles.activeTab : ''}`}
        >
          📞 1. Contact & Social Media
        </button>

        <button 
          onClick={() => setActiveTab('hero')} 
          className={`${styles.tabBtn} ${activeTab === 'hero' ? styles.activeTab : ''}`}
        >
          🏠 2. Homepage & Hero
        </button>

        <button 
          onClick={() => setActiveTab('domestic')} 
          className={`${styles.tabBtn} ${activeTab === 'domestic' ? styles.activeTab : ''}`}
        >
          🇮🇳 3. Domestic Packages ({config.domesticDestinations.length})
        </button>

        <button 
          onClick={() => setActiveTab('international')} 
          className={`${styles.tabBtn} ${activeTab === 'international' ? styles.activeTab : ''}`}
        >
          ✈️ 4. International Packages ({config.internationalDestinations.length})
        </button>

        <button 
          onClick={() => setActiveTab('blogs')} 
          className={`${styles.tabBtn} ${activeTab === 'blogs' ? styles.activeTab : ''}`}
        >
          📝 5. Post Blog / Journal ({blogs.length})
        </button>

        <button 
          onClick={() => setActiveTab('enquiries')} 
          className={`${styles.tabBtn} ${activeTab === 'enquiries' ? styles.activeTab : ''}`}
        >
          💬 6. Customer Enquiries ({enquiries.length})
        </button>
      </nav>

      {/* ========================================================= */}
      {/* TAB 1: CONTACT & SOCIAL MEDIA                             */}
      {/* ========================================================= */}
      {activeTab === 'contact' && (
        <section className={styles.editorCard}>
          <div className={styles.editorCardHeader}>
            <h2 className={styles.editorCardTitle}>📞 Company Information & Social Links</h2>
            <p className={styles.editorCardDesc}>
              These phone numbers, emails, addresses, and social channels appear in the header, footer, floating buttons, and contact page across the entire website.
            </p>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.formRowTwo}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Calling Phone Number</label>
                <input 
                  type="text" 
                  value={config.company.phone} 
                  onChange={(e) => setConfig({
                    ...config, 
                    company: { ...config.company, phone: e.target.value }
                  })}
                  className={styles.formInput}
                />
                <span className={styles.fieldHelper}>Displayed in header and footer (e.g. +91 74069 94752)</span>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>WhatsApp Number (Digits only)</label>
                <input 
                  type="text" 
                  value={config.company.whatsapp} 
                  onChange={(e) => setConfig({
                    ...config, 
                    company: { ...config.company, whatsapp: e.target.value }
                  })}
                  className={styles.formInput}
                />
                <span className={styles.fieldHelper}>Used for WhatsApp direct chats (e.g. 7406994752)</span>
              </div>
            </div>

            <div className={styles.formRowTwo}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Official Email Address</label>
                <input 
                  type="email" 
                  value={config.company.email} 
                  onChange={(e) => setConfig({
                    ...config, 
                    company: { ...config.company, email: e.target.value }
                  })}
                  className={styles.formInput}
                />
                <span className={styles.fieldHelper}>hello@sobhavitravel.com</span>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Brand Name</label>
                <input 
                  type="text" 
                  value={config.company.brandName} 
                  onChange={(e) => setConfig({
                    ...config, 
                    company: { ...config.company, brandName: e.target.value }
                  })}
                  className={styles.formInput}
                />
                <span className={styles.fieldHelper}>SOBHAVI TRAVELS</span>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Office Physical Address</label>
              <textarea 
                value={config.company.address} 
                onChange={(e) => setConfig({
                  ...config, 
                  company: { ...config.company, address: e.target.value }
                })}
                className={styles.formTextarea}
                style={{ minHeight: '80px' }}
              />
              <span className={styles.fieldHelper}>Appears on the Footer and Contact Us page</span>
            </div>

            <h3 style={{ fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#e11d48', textTransform: 'uppercase' }}>
              Social Media Profile Links
            </h3>

            <div className={styles.formRowThree}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Instagram Link</label>
                <input 
                  type="url" 
                  value={config.social.instagram} 
                  onChange={(e) => setConfig({
                    ...config, 
                    social: { ...config.social, instagram: e.target.value }
                  })}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Facebook Link</label>
                <input 
                  type="url" 
                  value={config.social.facebook} 
                  onChange={(e) => setConfig({
                    ...config, 
                    social: { ...config.social, facebook: e.target.value }
                  })}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>YouTube Link</label>
                <input 
                  type="url" 
                  value={config.social.youtube} 
                  onChange={(e) => setConfig({
                    ...config, 
                    social: { ...config.social, youtube: e.target.value }
                  })}
                  className={styles.formInput}
                />
              </div>
            </div>

            <div className={styles.formRowTwo}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>LinkedIn Link</label>
                <input 
                  type="url" 
                  value={config.social.linkedin} 
                  onChange={(e) => setConfig({
                    ...config, 
                    social: { ...config.social, linkedin: e.target.value }
                  })}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Twitter / X Link</label>
                <input 
                  type="url" 
                  value={config.social.twitter} 
                  onChange={(e) => setConfig({
                    ...config, 
                    social: { ...config.social, twitter: e.target.value }
                  })}
                  className={styles.formInput}
                />
              </div>
            </div>

            <div className={styles.saveActionRow}>
              <button 
                onClick={() => handleSaveConfig('Contact Information')}
                disabled={savingSection === 'Contact Information'}
                className={styles.saveBtn}
              >
                {savingSection === 'Contact Information' ? 'Saving...' : '💾 Save Contact & Social Changes'}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* TAB 2: HOMEPAGE & HERO                                    */}
      {/* ========================================================= */}
      {activeTab === 'hero' && (
        <section className={styles.editorCard}>
          <div className={styles.editorCardHeader}>
            <h2 className={styles.editorCardTitle}>🏠 Homepage Hero Section</h2>
            <p className={styles.editorCardDesc}>
              Customize the main headline, tagline, subtext, and background video or image seen when visitors first land on your website.
            </p>
          </div>

          <div className={styles.formGrid}>
            <div className={styles.formRowTwo}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Main Headline</label>
                <input 
                  type="text" 
                  value={config.hero.headline} 
                  onChange={(e) => setConfig({
                    ...config, 
                    hero: { ...config.hero, headline: e.target.value }
                  })}
                  className={styles.formInput}
                />
                <span className={styles.fieldHelper}>e.g. Escape the routine.</span>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tagline / Motto</label>
                <input 
                  type="text" 
                  value={config.hero.tagline} 
                  onChange={(e) => setConfig({
                    ...config, 
                    hero: { ...config.hero, tagline: e.target.value }
                  })}
                  className={styles.formInput}
                />
                <span className={styles.fieldHelper}>e.g. Your journey. Our expertise.</span>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Hero Subtitle / Description</label>
              <textarea 
                value={config.hero.subheading} 
                onChange={(e) => setConfig({
                  ...config, 
                  hero: { ...config.hero, subheading: e.target.value }
                })}
                className={styles.formTextarea}
              />
            </div>

            <div className={styles.formRowTwo}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Background Video URL</label>
                <input 
                  type="text" 
                  value={config.hero.videoUrl} 
                  onChange={(e) => setConfig({
                    ...config, 
                    hero: { ...config.hero, videoUrl: e.target.value }
                  })}
                  className={styles.formInput}
                />
                <span className={styles.fieldHelper}>Default: /videos/ocean.mp4</span>
              </div>

              <ImageUploader 
                label="Video Fallback Poster Image"
                value={config.hero.posterUrl}
                onChange={(url) => setConfig({
                  ...config, 
                  hero: { ...config.hero, posterUrl: url }
                })}
                id="hero-poster"
                recommendedAspect="16:9 Landscape"
              />
            </div>

            <div className={styles.saveActionRow}>
              <button 
                onClick={() => handleSaveConfig('Homepage Hero')}
                disabled={savingSection === 'Homepage Hero'}
                className={styles.saveBtn}
              >
                {savingSection === 'Homepage Hero' ? 'Saving...' : '💾 Save Hero Changes'}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* TAB 3: DOMESTIC PACKAGES                                  */}
      {/* ========================================================= */}
      {activeTab === 'domestic' && (
        <section className={styles.editorCard}>
          <div className={styles.editorCardHeader}>
            <h2 className={styles.editorCardTitle}>🇮🇳 Domestic Holiday Packages</h2>
            <p className={styles.editorCardDesc}>
              Edit the 4 featured domestic destinations: Rajasthan, Shimla Manali, Kerala, and Andaman. Changes appear on both the Homepage and the Domestic Holidays page.
            </p>
          </div>

          {config.domesticDestinations.map((dest, idx) => (
            <div key={dest.id || idx} className={styles.destItemBox}>
              <div className={styles.destItemHeader}>
                <h3 className={styles.destItemTitle}>#{idx + 1} &bull; {dest.name}</h3>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>ID: {dest.id}</span>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.formRowTwo}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Destination Name</label>
                    <input 
                      type="text" 
                      value={dest.name} 
                      onChange={(e) => handleDomesticChange(idx, 'name', e.target.value)}
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Tagline</label>
                    <input 
                      type="text" 
                      value={dest.tagline} 
                      onChange={(e) => handleDomesticChange(idx, 'tagline', e.target.value)}
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formRowTwo}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Duration (e.g. 5 Nights / 6 Days)</label>
                    <input 
                      type="text" 
                      value={dest.duration} 
                      onChange={(e) => handleDomesticChange(idx, 'duration', e.target.value)}
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Best Season to Visit</label>
                    <input 
                      type="text" 
                      value={dest.bestTime} 
                      onChange={(e) => handleDomesticChange(idx, 'bestTime', e.target.value)}
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Overview / Description</label>
                  <textarea 
                    value={dest.overview} 
                    onChange={(e) => handleDomesticChange(idx, 'overview', e.target.value)}
                    className={styles.formTextarea}
                  />
                </div>

                <ImageUploader 
                  label="Package Cover Image"
                  value={dest.image}
                  onChange={(url) => handleDomesticChange(idx, 'image', url)}
                  id={`domestic-img-${dest.id || idx}`}
                  recommendedAspect="16:10 Landscape"
                />

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Package Inclusions (One per line)</label>
                  <textarea 
                    value={dest.inclusions.join('\n')} 
                    onChange={(e) => handleDomesticChange(idx, 'inclusions', e.target.value.split('\n').filter(Boolean))}
                    className={styles.formTextarea}
                    style={{ minHeight: '90px' }}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className={styles.saveActionRow}>
            <button 
              onClick={() => handleSaveConfig('Domestic Packages')}
              disabled={savingSection === 'Domestic Packages'}
              className={styles.saveBtn}
            >
              {savingSection === 'Domestic Packages' ? 'Saving...' : '💾 Save Domestic Packages'}
            </button>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* TAB 4: INTERNATIONAL PACKAGES                             */}
      {/* ========================================================= */}
      {activeTab === 'international' && (
        <section className={styles.editorCard}>
          <div className={styles.editorCardHeader}>
            <h2 className={styles.editorCardTitle}>✈️ International Holiday Packages</h2>
            <p className={styles.editorCardDesc}>
              Edit the 4 featured international destinations: Dubai, Singapore, Bali, and Maldives. Changes update both the Homepage and the International page.
            </p>
          </div>

          {config.internationalDestinations.map((dest, idx) => (
            <div key={dest.id || idx} className={styles.destItemBox}>
              <div className={styles.destItemHeader}>
                <h3 className={styles.destItemTitle}>#{idx + 1} &bull; {dest.name}</h3>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>ID: {dest.id}</span>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.formRowTwo}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Destination Name</label>
                    <input 
                      type="text" 
                      value={dest.name} 
                      onChange={(e) => handleInternationalChange(idx, 'name', e.target.value)}
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Tagline</label>
                    <input 
                      type="text" 
                      value={dest.tagline} 
                      onChange={(e) => handleInternationalChange(idx, 'tagline', e.target.value)}
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formRowTwo}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Duration (e.g. 5 Nights / 6 Days)</label>
                    <input 
                      type="text" 
                      value={dest.duration} 
                      onChange={(e) => handleInternationalChange(idx, 'duration', e.target.value)}
                      className={styles.formInput}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Best Season to Visit</label>
                    <input 
                      type="text" 
                      value={dest.bestTime} 
                      onChange={(e) => handleInternationalChange(idx, 'bestTime', e.target.value)}
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Overview / Description</label>
                  <textarea 
                    value={dest.overview} 
                    onChange={(e) => handleInternationalChange(idx, 'overview', e.target.value)}
                    className={styles.formTextarea}
                  />
                </div>

                <ImageUploader 
                  label="Package Cover Image"
                  value={dest.image}
                  onChange={(url) => handleInternationalChange(idx, 'image', url)}
                  id={`intl-img-${dest.id || idx}`}
                  recommendedAspect="16:10 Landscape"
                />

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Package Inclusions (One per line)</label>
                  <textarea 
                    value={dest.inclusions.join('\n')} 
                    onChange={(e) => handleInternationalChange(idx, 'inclusions', e.target.value.split('\n').filter(Boolean))}
                    className={styles.formTextarea}
                    style={{ minHeight: '90px' }}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className={styles.saveActionRow}>
            <button 
              onClick={() => handleSaveConfig('International Packages')}
              disabled={savingSection === 'International Packages'}
              className={styles.saveBtn}
            >
              {savingSection === 'International Packages' ? 'Saving...' : '💾 Save International Packages'}
            </button>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* TAB 5: POST BLOG / JOURNAL                                */}
      {/* ========================================================= */}
      {activeTab === 'blogs' && (
        <section className={styles.editorCard}>
          <div className={styles.editorCardHeader}>
            <h2 className={styles.editorCardTitle}>📝 Publish New Travel Journal / Blog Post</h2>
            <p className={styles.editorCardDesc}>
              Write and publish an inspiring travel guide. It will automatically match the luxury editorial magazine format and appear at <Link href="/blog" target="_blank" style={{ color: '#e11d48' }}>/blog</Link> for your clients.
            </p>
          </div>

          <form onSubmit={handlePublishBlog} className={styles.formGrid}>
            <div className={styles.formRowTwo}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Article Title*</label>
                <input 
                  type="text" 
                  placeholder="e.g. 7 Hidden Gems of Rajasthan You Must Visit in 2026"
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Category</label>
                <select 
                  value={blogForm.category}
                  onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                  className={styles.formSelect}
                >
                  <option value="Spiritual & Pilgrimage">Spiritual & Pilgrimage (Chardham)</option>
                  <option value="Romantic & Honeymoon">Romantic & Honeymoon Escapes</option>
                  <option value="Family Holidays">Family Vacation Ideas</option>
                  <option value="Luxury & Wellness">Luxury & Wellness Retreats</option>
                  <option value="Adventure & Wildlife">Adventure & Wildlife Trails</option>
                  <option value="International Escapes">International Escapes</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <ImageUploader 
                label="Article Cover Image"
                value={blogForm.coverImage}
                onChange={(url) => setBlogForm({ ...blogForm, coverImage: url })}
                id="blog-cover-img"
                recommendedAspect="16:9 Landscape"
                required={true}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Short Summary / Excerpt*</label>
              <textarea 
                placeholder="A brief 1-2 sentence hook that appears on the card preview..."
                value={blogForm.excerpt}
                onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                className={styles.formTextarea}
                style={{ minHeight: '80px' }}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Article Story Content (Separate paragraphs with double Enter)</label>
              <textarea 
                placeholder="Write your article here. You can write as much as you like! Simply hit Enter twice to create a new paragraph..."
                value={blogForm.paragraphs}
                onChange={(e) => setBlogForm({ ...blogForm, paragraphs: e.target.value })}
                className={styles.formTextarea}
                style={{ minHeight: '220px' }}
                required
              />
            </div>

            <div className={styles.formRowTwo}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Highlighted Quote (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. Rajasthan is not just a place, it is a feeling of royal grace."
                  value={blogForm.quote}
                  onChange={(e) => setBlogForm({ ...blogForm, quote: e.target.value })}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Author Name</label>
                <input 
                  type="text" 
                  value={blogForm.author}
                  onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                  className={styles.formInput}
                />
              </div>
            </div>

            <div className={styles.saveActionRow}>
              <button 
                type="submit" 
                disabled={isPublishingBlog}
                className={styles.saveBtn}
                style={{ background: '#10b981' }}
              >
                {isPublishingBlog ? 'Publishing...' : '🚀 Publish Article Live'}
              </button>
            </div>
          </form>

          {/* List of Published Blogs */}
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Published Journal Articles ({blogs.length})
            </h3>

            {blogs.length === 0 ? (
              <p style={{ color: '#94a3b8' }}>No articles published yet.</p>
            ) : (
              blogs.map((b) => (
                <div key={b.id} className={styles.blogItemCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div 
                      style={{ 
                        width: '60px', 
                        height: '60px', 
                        borderRadius: '6px', 
                        backgroundImage: `url(${b.coverImage})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                        flexShrink: 0 
                      }} 
                    />
                    <div>
                      <h4 style={{ margin: '0 0 0.3rem', fontSize: '1.05rem', color: '#ffffff' }}>{b.title}</h4>
                      <span style={{ fontSize: '0.8rem', color: '#e11d48', fontWeight: 600 }}>{b.category}</span>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', marginLeft: '0.75rem' }}>By {b.author}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Link 
                      href={`/blog/${b.slug}`} 
                      target="_blank"
                      style={{ color: '#38bdf8', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}
                    >
                      View Live &rarr;
                    </Link>
                    <button 
                      onClick={() => handleDeleteBlog(b.id)}
                      className={styles.deleteBtn}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* TAB 6: CUSTOMER ENQUIRIES / LEADS                         */}
      {/* ========================================================= */}
      {activeTab === 'enquiries' && (
        <section className={styles.editorCard}>
          <div className={styles.editorCardHeader}>
            <h2 className={styles.editorCardTitle}>💬 Customer Travel Enquiries & Leads</h2>
            <p className={styles.editorCardDesc}>
              Here are the booking requests submitted by travelers through your website forms. Connect with them instantly on WhatsApp or Phone.
            </p>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <h3>Total Enquiries</h3>
              <p className={styles.statNumber}>{enquiries.length}</p>
            </div>
            <div className={styles.statCard}>
              <h3>Active Hot Leads</h3>
              <p className={styles.statNumber} style={{ color: '#e11d48' }}>
                {enquiries.filter(e => e.status === 'New' || !e.status).length}
              </p>
            </div>
            <div className={styles.statCard}>
              <h3>WhatsApp Direct Bookings</h3>
              <p className={styles.statNumber} style={{ color: '#10b981' }}>24/7</p>
            </div>
          </div>

          {enquiries.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#94a3b8' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✈️</div>
              <h3 style={{ color: '#ffffff', marginBottom: '0.5rem' }}>No Enquiries in Database Yet</h3>
              <p style={{ maxWidth: '400px', margin: '0 auto', fontSize: '0.9rem' }}>
                When users fill out the booking form at <strong>/enquire</strong>, their details and messages will also appear right here.
              </p>
            </div>
          ) : (
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Client Name</th>
                    <th>Contact</th>
                    <th>Destination</th>
                    <th>Travel Date / Travellers</th>
                    <th>Budget</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((enq) => {
                    const cleanPhone = enq.whatsapp.replace(/[^0-9]/g, '');
                    const waText = encodeURIComponent(
                      `Hello ${enq.name}! Thank you for reaching out to SOBHAVI TRAVELS regarding your travel plan to ${enq.destination || 'your destination'}. How can we assist you today?`
                    );
                    return (
                      <tr key={enq.id}>
                        <td style={{ whiteSpace: 'nowrap', fontSize: '0.8rem', color: '#94a3b8' }}>
                          {new Date(enq.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </td>
                        <td>
                          <strong>{enq.name}</strong>
                          {enq.email && <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{enq.email}</div>}
                        </td>
                        <td>
                          <span style={{ color: '#10b981', fontWeight: 600 }}>{enq.whatsapp}</span>
                        </td>
                        <td>
                          <span className={styles.badge}>{enq.destination || 'Custom Holiday'}</span>
                        </td>
                        <td>
                          <div>{enq.travelDate || 'Flexible'}</div>
                          <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{enq.travellers || '2 Adults'} &bull; {enq.duration || '5-7 Days'}</div>
                        </td>
                        <td style={{ fontSize: '0.85rem', color: '#fbbf24' }}>
                          {enq.budget || 'Standard'}
                        </td>
                        <td>
                          <a 
                            href={`https://wa.me/${cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone}?text=${waText}`}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.waBtn}
                          >
                            <span>WhatsApp</span>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
