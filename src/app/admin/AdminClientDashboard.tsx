"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blogs';
import { SiteConfig, DestinationPackage, HeroSlide } from '@/lib/siteConfig';
import { TravelCategory } from '@/lib/categories';
import ImageUploader, { CURATED_PHOTOS } from './ImageUploader';
import VideoUploader from './VideoUploader';
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
  const [activeTab, setActiveTab] = useState<'contact' | 'hero' | 'categories' | 'domestic' | 'international' | 'blogs' | 'enquiries'>('contact');

  // Site Configuration State
  const [config, setConfig] = useState<SiteConfig>(initialConfig);
  const [isSavingAll, setIsSavingAll] = useState<boolean>(false);
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

  // 1-Click Global Save: Saves all changes to Server Backend & Local Storage
  const handleSaveAll = async () => {
    setIsSavingAll(true);
    try {
      localStorage.setItem('sobhavi_site_config', JSON.stringify(config));
      window.dispatchEvent(new Event('sobhavi_site_config_updated'));
      window.dispatchEvent(new Event('storage'));

      const res = await fetch('/api/site-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });
      const data = await res.json();
      if (data.success) {
        showToast('✓ All changes saved successfully! Live on website.');
      } else {
        showToast('✓ Saved locally! Live across all pages.');
      }
    } catch (err) {
      console.error(err);
      showToast('✓ Saved locally! Live across all pages.');
    } finally {
      setIsSavingAll(false);
    }
  };

  // Save Section Helper
  const handleSaveConfig = async (sectionName: string) => {
    setSavingSection(sectionName);
    try {
      localStorage.setItem('sobhavi_site_config', JSON.stringify(config));
      window.dispatchEvent(new Event('sobhavi_site_config_updated'));
      window.dispatchEvent(new Event('storage'));

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

  // =========================================================================
  // CATEGORIES / EXPERIENCES MANAGEMENT
  // =========================================================================
  const handleAddCategory = () => {
    const newCat: TravelCategory = {
      slug: `experience-${Date.now().toString(36)}`,
      name: "New Travel Experience",
      tagline: "Exclusive bespoke journey crafted for luxury travellers.",
      description: "Comprehensive itinerary with private transfers, luxury 5-star stays and dedicated chauffeur guide.",
      heroImage: CURATED_PHOTOS[0].url,
      images: [
        CURATED_PHOTOS[0].url,
        CURATED_PHOTOS[1].url
      ],
      videoUrl: "/videos/destinations/dubai.mp4",
      article: {
        intro: "Experience the extraordinary with Sobhavi Travels.",
        body: [
          "Handpicked stays, VIP excursions, and seamless private transfers tailored to your highest expectations."
        ],
        quote: "An unforgettable voyage orchestrated to absolute perfection.",
        quoteAuthor: "— Sobhavi Travel Specialist"
      }
    };
    const updated = [...(config.categories || []), newCat];
    setConfig({ ...config, categories: updated });
    showToast("✓ New Category added! Click 'Save All Changes' to make it live.");
  };

  const handleDeleteCategory = (index: number) => {
    if (!confirm("Are you sure you want to delete this travel category?")) return;
    const updated = (config.categories || []).filter((_, i) => i !== index);
    setConfig({ ...config, categories: updated });
    showToast("✓ Category removed.");
  };

  const handleCategoryChange = (index: number, field: keyof TravelCategory, value: any) => {
    const updated = [...(config.categories || [])];
    updated[index] = { ...updated[index], [field]: value };
    if (field === 'name' && value) {
      const slug = String(value).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      if (slug) {
        updated[index].slug = slug;
      }
    }
    setConfig({ ...config, categories: updated });
  };

  // =========================================================================
  // HERO SLIDES / REELS MANAGEMENT
  // =========================================================================
  const handleAddHeroSlide = () => {
    const newSlide: HeroSlide = {
      id: `destination-${Date.now().toString(36)}`,
      category: "Domestic",
      name: "New Destination Reel",
      tagline: "Unforgettable escapes and luxury experiences",
      videoUrl: "/videos/destinations/rajasthan.mp4",
      posterUrl: CURATED_PHOTOS[0].url
    };
    const updated = [...(config.heroSlides || []), newSlide];
    setConfig({ ...config, heroSlides: updated });
    showToast("✓ New Hero Video slide added! Click 'Save All Changes' to make it live.");
  };

  const handleDeleteHeroSlide = (index: number) => {
    if ((config.heroSlides || []).length <= 1) {
      alert("At least one destination video slide must remain active.");
      return;
    }
    if (!confirm("Are you sure you want to delete this hero destination video?")) return;
    const updated = (config.heroSlides || []).filter((_, i) => i !== index);
    setConfig({ ...config, heroSlides: updated });
    showToast("✓ Hero Video slide removed.");
  };

  const handleHeroSlideChange = (index: number, field: keyof HeroSlide, value: any) => {
    const updated = [...(config.heroSlides || [])];
    updated[index] = { ...updated[index], [field]: value };
    setConfig({ ...config, heroSlides: updated });
  };

  // =========================================================================
  // DOMESTIC DESTINATIONS MANAGEMENT
  // =========================================================================
  const handleAddDomestic = () => {
    const newDest: DestinationPackage = {
      id: `domestic-${Date.now().toString(36)}`,
      name: "New Indian Destination",
      tagline: "Serene landscapes and luxury heritage escapes",
      image: CURATED_PHOTOS[0].url,
      videoUrl: "/videos/destinations/rajasthan.mp4",
      duration: "5 Nights / 6 Days",
      bestTime: "Year-Round",
      overview: "Experience authentic Indian hospitality with private chauffeur-driven luxury sedans, five-star heritage haveli stays, and curated sightseeing.",
      inclusions: [
        "5-Star Luxury Resort / Haveli Stays",
        "Daily Breakfast & Chef Dinners",
        "Private AC Chauffeur Driven Vehicle",
        "All Guided Excursions & Entry Passes"
      ]
    };
    const updated = [...(config.domesticDestinations || []), newDest];
    setConfig({ ...config, domesticDestinations: updated });
    showToast("✓ New domestic destination added! Click 'Save All Changes' to make it live.");
  };

  const handleDeleteDomestic = (index: number) => {
    if (!confirm("Are you sure you want to delete this domestic destination?")) return;
    const updated = (config.domesticDestinations || []).filter((_, i) => i !== index);
    setConfig({ ...config, domesticDestinations: updated });
    showToast("✓ Domestic destination removed.");
  };

  const handleDomesticChange = (index: number, field: keyof DestinationPackage, value: any) => {
    const updated = [...(config.domesticDestinations || [])];
    updated[index] = { ...updated[index], [field]: value };
    if (field === 'name' && value) {
      const slug = String(value).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      if (slug) updated[index].id = slug;
    }
    setConfig({ ...config, domesticDestinations: updated });
  };

  // =========================================================================
  // INTERNATIONAL DESTINATIONS MANAGEMENT
  // =========================================================================
  const handleAddInternational = () => {
    const newDest: DestinationPackage = {
      id: `intl-${Date.now().toString(36)}`,
      name: "New International Destination",
      tagline: "Exotic islands, iconic landmarks & bespoke retreats",
      image: CURATED_PHOTOS[4].url,
      videoUrl: "/videos/destinations/dubai.mp4",
      duration: "5 Nights / 6 Days",
      bestTime: "October – April",
      overview: "Explore world-renowned destinations with private airport transfers, luxury resort stays, and customized tours designed for seamless travel.",
      inclusions: [
        "5-Star International Hotel Stays",
        "Daily Buffet Breakfast Included",
        "Private AC Chauffeur Transfers",
        "Curated Sightseeing & Landmark Passes"
      ]
    };
    const updated = [...(config.internationalDestinations || []), newDest];
    setConfig({ ...config, internationalDestinations: updated });
    showToast("✓ New international destination added! Click 'Save All Changes' to make it live.");
  };

  const handleDeleteInternational = (index: number) => {
    if (!confirm("Are you sure you want to delete this international destination?")) return;
    const updated = (config.internationalDestinations || []).filter((_, i) => i !== index);
    setConfig({ ...config, internationalDestinations: updated });
    showToast("✓ International destination removed.");
  };

  const handleInternationalChange = (index: number, field: keyof DestinationPackage, value: any) => {
    const updated = [...(config.internationalDestinations || [])];
    updated[index] = { ...updated[index], [field]: value };
    if (field === 'name' && value) {
      const slug = String(value).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      if (slug) updated[index].id = slug;
    }
    setConfig({ ...config, internationalDestinations: updated });
  };

  // =========================================================================
  // BLOGS MANAGEMENT
  // =========================================================================
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
      } else {
        alert("Could not delete blog.");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting blog.");
    }
  };

  // =========================================================================
  // LOGIN SCREEN
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <span className={styles.loginEyebrow}>Sobhavi Travels Portal</span>
            <h1 className={styles.loginTitle}>Admin Authentication</h1>
            <p className={styles.loginDesc}>
              Enter your master passcode to access the website management dashboard.
            </p>
          </div>

          <form onSubmit={handleLogin} className={styles.loginForm}>
            {loginError && (
              <div className={styles.loginError}>
                ⚠️ Invalid passcode. Please enter the correct master passcode.
              </div>
            )}

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="admin-passcode">Master Passcode</label>
              <input
                id="admin-passcode"
                type="password"
                className={styles.formInput}
                placeholder="Enter passcode..."
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                autoFocus
                required
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
              <input
                id="rememberMeCheck"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ accentColor: '#e11d48', width: '16px', height: '16px', cursor: 'pointer' }}
              />
              <label htmlFor="rememberMeCheck" style={{ cursor: 'pointer' }}>Keep me logged in on this browser</label>
            </div>

            <button type="submit" className={styles.loginBtn}>
              Sign In to Admin Portal &rarr;
            </button>
          </form>

          <div className={styles.loginHint}>
            Default Passcode: <strong>sobhavi2026</strong> (or <strong>admin123</strong>)
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // AUTHENTICATED DASHBOARD VIEW
  // =========================================================================
  return (
    <div className={styles.adminWrapper}>
      {toastMessage && (
        <div className={styles.toastNotification}>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <header className={styles.adminHeader}>
        <div className={styles.headerBrand}>
          <span className={styles.brandBadge}>Sobhavi Travels Control Center</span>
          <h1 className={styles.pageTitle}>Master Management Portal</h1>
        </div>

        <div className={styles.headerActions}>
          <Link href="/" target="_blank" className={styles.previewSiteBtn}>
            <span>View Live Site</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </Link>
          <button type="button" onClick={handleLogout} className={styles.logoutBtn}>
            Sign Out
          </button>
        </div>
      </header>

      {/* Sticky 1-Click Save Bar */}
      <div className={styles.stickySaveBar}>
        <div className={styles.stickySaveInfo}>
          <span className={styles.saveStatusBadge}>⚡ All-in-One Controller</span>
          <span className={styles.saveStatusText}>
            Add, edit, or delete any Category, Destination, Video or Photo &mdash; click Save to sync live instantly!
          </span>
        </div>
        <button
          type="button"
          onClick={handleSaveAll}
          className={styles.saveAllBtn}
          disabled={isSavingAll}
        >
          {isSavingAll ? "⏳ Saving All Changes..." : "💾 SAVE ALL CHANGES (1-Click)"}
        </button>
      </div>

      {/* Navigation Tabs */}
      <nav className={styles.tabBar} aria-label="Admin Navigation Tabs">
        <button
          type="button"
          className={`${styles.tabBtn} ${activeTab === 'contact' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          📞 Contact &amp; Brand
        </button>
        <button
          type="button"
          className={`${styles.tabBtn} ${activeTab === 'hero' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('hero')}
        >
          🎬 Hero Videos &amp; Reels ({config.heroSlides?.length || 8})
        </button>
        <button
          type="button"
          className={`${styles.tabBtn} ${activeTab === 'categories' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('categories')}
        >
          ✨ Categories &amp; Experiences ({config.categories?.length || 0})
        </button>
        <button
          type="button"
          className={`${styles.tabBtn} ${activeTab === 'domestic' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('domestic')}
        >
          🇮🇳 Domestic ({config.domesticDestinations?.length || 0})
        </button>
        <button
          type="button"
          className={`${styles.tabBtn} ${activeTab === 'international' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('international')}
        >
          ✈️ International ({config.internationalDestinations?.length || 0})
        </button>
        <button
          type="button"
          className={`${styles.tabBtn} ${activeTab === 'blogs' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('blogs')}
        >
          📝 Blog Articles ({blogs.length})
        </button>
        <button
          type="button"
          className={`${styles.tabBtn} ${activeTab === 'enquiries' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('enquiries')}
        >
          📬 Client Leads ({enquiries.length})
        </button>
      </nav>

      {/* ===================================================================
          TAB 1: CONTACT & BRAND INFO
          =================================================================== */}
      {activeTab === 'contact' && (
        <div className={styles.editorCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Contact Details &amp; Business Address</h2>
            <p className={styles.cardDesc}>
              Update your official phone numbers, WhatsApp, email, and company address shown across header, footer, and floating buttons.
            </p>
          </div>

          <div className={styles.formRowTwo}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Brand Name</label>
              <input
                type="text"
                className={styles.formInput}
                value={config.company?.brandName || ''}
                onChange={(e) => setConfig({
                  ...config,
                  company: { ...config.company, brandName: e.target.value }
                })}
                placeholder="SOBHAVI TRAVELS"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Brand Motto / Tagline</label>
              <input
                type="text"
                className={styles.formInput}
                value={config.company?.tagline || ''}
                onChange={(e) => setConfig({
                  ...config,
                  company: { ...config.company, tagline: e.target.value }
                })}
                placeholder="Your journey. Our expertise."
              />
            </div>
          </div>

          <div className={styles.formRowThree}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Direct Phone Number</label>
              <input
                type="text"
                className={styles.formInput}
                value={config.company?.phone || ''}
                onChange={(e) => setConfig({
                  ...config,
                  company: { ...config.company, phone: e.target.value }
                })}
                placeholder="+91 74069 94752"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>WhatsApp Number (without +91)</label>
              <input
                type="text"
                className={styles.formInput}
                value={config.company?.whatsapp || ''}
                onChange={(e) => setConfig({
                  ...config,
                  company: { ...config.company, whatsapp: e.target.value }
                })}
                placeholder="7406994752"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Official Email</label>
              <input
                type="email"
                className={styles.formInput}
                value={config.company?.email || ''}
                onChange={(e) => setConfig({
                  ...config,
                  company: { ...config.company, email: e.target.value }
                })}
                placeholder="hello@sobhavitravel.com"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Office Address</label>
            <textarea
              className={styles.formTextarea}
              rows={3}
              value={config.company?.address || ''}
              onChange={(e) => setConfig({
                ...config,
                company: { ...config.company, address: e.target.value }
              })}
              placeholder="Full office address..."
            />
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              className={styles.saveBtn}
              onClick={() => handleSaveConfig('Contact Information')}
              disabled={savingSection === 'Contact Information'}
            >
              {savingSection === 'Contact Information' ? "Saving..." : "Save Contact Details"}
            </button>
          </div>
        </div>
      )}

      {/* ===================================================================
          TAB 2: HERO VIDEOS & REELS (HEADER REELS)
          =================================================================== */}
      {activeTab === 'hero' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Main Hero Header Text */}
          <div className={styles.editorCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Homepage Headline &amp; Tagline</h2>
              <p className={styles.cardDesc}>
                Customize the main title shown over the video reel on the top of the homepage.
              </p>
            </div>

            <div className={styles.formRowTwo}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Hero Headline</label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={config.hero?.headline || ''}
                  onChange={(e) => setConfig({
                    ...config,
                    hero: { ...config.hero, headline: e.target.value }
                  })}
                  placeholder="Escape the routine."
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Hero Subheading</label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={config.hero?.tagline || ''}
                  onChange={(e) => setConfig({
                    ...config,
                    hero: { ...config.hero, tagline: e.target.value }
                  })}
                  placeholder="Your journey. Our expertise."
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Hero Body Paragraph (Visible on Desktop)</label>
              <textarea
                className={styles.formTextarea}
                rows={2}
                value={config.hero?.subheading || ''}
                onChange={(e) => setConfig({
                  ...config,
                  hero: { ...config.hero, subheading: e.target.value }
                })}
              />
            </div>
          </div>

          {/* Active Hero Video Reels List */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#fff', textTransform: 'uppercase', margin: 0 }}>
                Active Destination Video Reels ({config.heroSlides?.length || 0})
              </h2>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0.2rem 0 0' }}>
                These videos cycle smoothly on the homepage with 1.25x speed and gapless crossfade. Add, edit, or remove anytime!
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddHeroSlide}
              className={styles.addBtn}
            >
              ➕ Add New Destination Video
            </button>
          </div>

          {(config.heroSlides || []).map((slide, index) => (
            <div key={slide.id || index} className={styles.editorCard}>
              <div className={styles.cardHeaderBar}>
                <div className={styles.itemNumberBadge}>
                  <span style={{ color: '#e11d48' }}>#{index + 1}</span>
                  <span>{slide.name || 'Untitled Destination'}</span>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.6rem', borderRadius: '999px', marginLeft: '0.5rem' }}>
                    {slide.category}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteHeroSlide(index)}
                  className={styles.deleteItemBtn}
                >
                  🗑 Delete Video Slide
                </button>
              </div>

              <div className={styles.formRowThree}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Destination Name</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    value={slide.name}
                    onChange={(e) => handleHeroSlideChange(index, 'name', e.target.value)}
                    placeholder="e.g. Rajasthan, Dubai, Switzerland"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Category</label>
                  <select
                    className={styles.formInput}
                    value={slide.category}
                    onChange={(e) => handleHeroSlideChange(index, 'category', e.target.value)}
                  >
                    <option value="Domestic">Domestic</option>
                    <option value="International">International</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Short Tagline</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    value={slide.tagline}
                    onChange={(e) => handleHeroSlideChange(index, 'tagline', e.target.value)}
                    placeholder="e.g. Palaces, Forts & Thar Desert"
                  />
                </div>
              </div>

              {/* Video Picker & Uploader */}
              <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                <VideoUploader
                  id={`hero-slide-video-${index}`}
                  label="Destination Video Reel (Fast-paced MP4)"
                  value={slide.videoUrl}
                  onChange={(val) => handleHeroSlideChange(index, 'videoUrl', val)}
                  required
                />
              </div>

              {/* Poster Image Uploader */}
              <div>
                <ImageUploader
                  id={`hero-slide-poster-${index}`}
                  label="Underlying HD Poster / Photograph"
                  value={slide.posterUrl}
                  onChange={(val) => handleHeroSlideChange(index, 'posterUrl', val)}
                  required
                />
              </div>
            </div>
          ))}

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button
              type="button"
              className={styles.saveBtn}
              onClick={() => handleSaveConfig('Hero Videos & Reels')}
              disabled={savingSection === 'Hero Videos & Reels'}
            >
              {savingSection === 'Hero Videos & Reels' ? "Saving..." : "Save All Hero Videos"}
            </button>
          </div>
        </div>
      )}

      {/* ===================================================================
          TAB 3: CATEGORIES & EXPERIENCES (NEW DYNAMIC MANAGEMENT)
          =================================================================== */}
      {activeTab === 'categories' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#fff', textTransform: 'uppercase', margin: 0 }}>
                Travel Categories &amp; Curated Collections ({config.categories?.length || 0})
              </h2>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0.2rem 0 0' }}>
                Add new travel experiences, edit descriptions, upload cover photos and videos, or delete any category.
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddCategory}
              className={styles.addBtn}
            >
              ➕ Add New Category / Experience
            </button>
          </div>

          {(config.categories || []).map((cat, index) => (
            <div key={cat.slug || index} className={styles.editorCard}>
              <div className={styles.cardHeaderBar}>
                <div className={styles.itemNumberBadge}>
                  <span style={{ color: '#e11d48' }}>#{index + 1}</span>
                  <span>{cat.name}</span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8', marginLeft: '0.5rem' }}>
                    (/categories/{cat.slug})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteCategory(index)}
                  className={styles.deleteItemBtn}
                >
                  🗑 Delete Category
                </button>
              </div>

              <div className={styles.formRowTwo}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Category Name</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    value={cat.name}
                    onChange={(e) => handleCategoryChange(index, 'name', e.target.value)}
                    placeholder="e.g. Luxury Holidays, Honeymoon"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Tagline</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    value={cat.tagline}
                    onChange={(e) => handleCategoryChange(index, 'tagline', e.target.value)}
                    placeholder="Short catchy subtitle..."
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Category Description</label>
                <textarea
                  className={styles.formTextarea}
                  rows={2}
                  value={cat.description}
                  onChange={(e) => handleCategoryChange(index, 'description', e.target.value)}
                  placeholder="Overview of what travellers will experience..."
                />
              </div>

              {/* Cover Photo */}
              <div style={{ marginBottom: '1.5rem' }}>
                <ImageUploader
                  id={`cat-hero-${index}`}
                  label="Category Cover Photograph (Hero Image)"
                  value={cat.heroImage}
                  onChange={(val) => handleCategoryChange(index, 'heroImage', val)}
                  required
                />
              </div>

              {/* Category Video */}
              <div>
                <VideoUploader
                  id={`cat-video-${index}`}
                  label="Background Experience Video (Optional MP4)"
                  value={cat.videoUrl || ''}
                  onChange={(val) => handleCategoryChange(index, 'videoUrl', val)}
                />
              </div>
            </div>
          ))}

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button
              type="button"
              className={styles.saveBtn}
              onClick={() => handleSaveConfig('Categories & Experiences')}
              disabled={savingSection === 'Categories & Experiences'}
            >
              {savingSection === 'Categories & Experiences' ? "Saving..." : "Save All Categories"}
            </button>
          </div>
        </div>
      )}

      {/* ===================================================================
          TAB 4: DOMESTIC DESTINATIONS
          =================================================================== */}
      {activeTab === 'domestic' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#fff', textTransform: 'uppercase', margin: 0 }}>
                Domestic India Destinations ({config.domesticDestinations?.length || 0})
              </h2>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0.2rem 0 0' }}>
                Manage domestic travel packages, add new Indian cities, update itineraries and inclusions.
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddDomestic}
              className={styles.addBtn}
            >
              ➕ Add New Domestic Destination
            </button>
          </div>

          {(config.domesticDestinations || []).map((dest, index) => (
            <div key={dest.id || index} className={styles.editorCard}>
              <div className={styles.cardHeaderBar}>
                <div className={styles.itemNumberBadge}>
                  <span style={{ color: '#e11d48' }}>#{index + 1}</span>
                  <span>{dest.name}</span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8', marginLeft: '0.5rem' }}>
                    (/destinations/{dest.id})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteDomestic(index)}
                  className={styles.deleteItemBtn}
                >
                  🗑 Delete Destination
                </button>
              </div>

              <div className={styles.formRowThree}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Destination Name</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    value={dest.name}
                    onChange={(e) => handleDomesticChange(index, 'name', e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Duration</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    value={dest.duration}
                    onChange={(e) => handleDomesticChange(index, 'duration', e.target.value)}
                    placeholder="e.g. 5 Nights / 6 Days"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Best Time to Visit</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    value={dest.bestTime}
                    onChange={(e) => handleDomesticChange(index, 'bestTime', e.target.value)}
                    placeholder="e.g. October – March"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tagline</label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={dest.tagline}
                  onChange={(e) => handleDomesticChange(index, 'tagline', e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Overview &amp; Itinerary Highlights</label>
                <textarea
                  className={styles.formTextarea}
                  rows={3}
                  value={dest.overview}
                  onChange={(e) => handleDomesticChange(index, 'overview', e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Package Inclusions (comma separated)</label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={Array.isArray(dest.inclusions) ? dest.inclusions.join(', ') : (dest.inclusions || '')}
                  onChange={(e) => handleDomesticChange(index, 'inclusions', e.target.value.split(',').map(s => s.trim()))}
                />
              </div>

              {/* Photo Uploader */}
              <div style={{ marginBottom: '1.5rem' }}>
                <ImageUploader
                  id={`domestic-image-${index}`}
                  label="Destination Card Cover Photograph"
                  value={dest.image}
                  onChange={(val) => handleDomesticChange(index, 'image', val)}
                  required
                />
              </div>

              {/* Video Uploader */}
              <div>
                <VideoUploader
                  id={`domestic-video-${index}`}
                  label="Associated Destination Video Reel (MP4)"
                  value={dest.videoUrl || ''}
                  onChange={(val) => handleDomesticChange(index, 'videoUrl', val)}
                />
              </div>
            </div>
          ))}

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button
              type="button"
              className={styles.saveBtn}
              onClick={() => handleSaveConfig('Domestic Destinations')}
              disabled={savingSection === 'Domestic Destinations'}
            >
              {savingSection === 'Domestic Destinations' ? "Saving..." : "Save Domestic Destinations"}
            </button>
          </div>
        </div>
      )}

      {/* ===================================================================
          TAB 5: INTERNATIONAL DESTINATIONS
          =================================================================== */}
      {activeTab === 'international' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#fff', textTransform: 'uppercase', margin: 0 }}>
                International Worldwide Destinations ({config.internationalDestinations?.length || 0})
              </h2>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0.2rem 0 0' }}>
                Manage international holiday packages, overseas villas, flight inclusions and itineraries.
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddInternational}
              className={styles.addBtn}
            >
              ➕ Add New International Destination
            </button>
          </div>

          {(config.internationalDestinations || []).map((dest, index) => (
            <div key={dest.id || index} className={styles.editorCard}>
              <div className={styles.cardHeaderBar}>
                <div className={styles.itemNumberBadge}>
                  <span style={{ color: '#e11d48' }}>#{index + 1}</span>
                  <span>{dest.name}</span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8', marginLeft: '0.5rem' }}>
                    (/destinations/{dest.id})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteInternational(index)}
                  className={styles.deleteItemBtn}
                >
                  🗑 Delete Destination
                </button>
              </div>

              <div className={styles.formRowThree}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Destination Name</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    value={dest.name}
                    onChange={(e) => handleInternationalChange(index, 'name', e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Duration</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    value={dest.duration}
                    onChange={(e) => handleInternationalChange(index, 'duration', e.target.value)}
                    placeholder="e.g. 5 Nights / 6 Days"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Best Time to Visit</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    value={dest.bestTime}
                    onChange={(e) => handleInternationalChange(index, 'bestTime', e.target.value)}
                    placeholder="e.g. October – April"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Tagline</label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={dest.tagline}
                  onChange={(e) => handleInternationalChange(index, 'tagline', e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Overview &amp; Experience Highlights</label>
                <textarea
                  className={styles.formTextarea}
                  rows={3}
                  value={dest.overview}
                  onChange={(e) => handleInternationalChange(index, 'overview', e.target.value)}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Package Inclusions (comma separated)</label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={Array.isArray(dest.inclusions) ? dest.inclusions.join(', ') : (dest.inclusions || '')}
                  onChange={(e) => handleInternationalChange(index, 'inclusions', e.target.value.split(',').map(s => s.trim()))}
                />
              </div>

              {/* Photo Uploader */}
              <div style={{ marginBottom: '1.5rem' }}>
                <ImageUploader
                  id={`intl-image-${index}`}
                  label="Destination Card Cover Photograph"
                  value={dest.image}
                  onChange={(val) => handleInternationalChange(index, 'image', val)}
                  required
                />
              </div>

              {/* Video Uploader */}
              <div>
                <VideoUploader
                  id={`intl-video-${index}`}
                  label="Associated Destination Video Reel (MP4)"
                  value={dest.videoUrl || ''}
                  onChange={(val) => handleInternationalChange(index, 'videoUrl', val)}
                />
              </div>
            </div>
          ))}

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button
              type="button"
              className={styles.saveBtn}
              onClick={() => handleSaveConfig('International Destinations')}
              disabled={savingSection === 'International Destinations'}
            >
              {savingSection === 'International Destinations' ? "Saving..." : "Save International Destinations"}
            </button>
          </div>
        </div>
      )}

      {/* ===================================================================
          TAB 6: BLOG ARTICLES CMS
          =================================================================== */}
      {activeTab === 'blogs' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Create New Post Form */}
          <div className={styles.editorCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Write &amp; Publish New Journal Story</h2>
              <p className={styles.cardDesc}>
                Publish insider travel guides, itineraries, and stories to the live website blog.
              </p>
            </div>

            <form onSubmit={handlePublishBlog}>
              <div className={styles.formRowTwo}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Article Title *</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    value={blogForm.title}
                    onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                    placeholder="e.g. Sacred Sanctuaries: The Ultimate Chardham Yatra Guide"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Category</label>
                  <select
                    className={styles.formInput}
                    value={blogForm.category}
                    onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                  >
                    <option value="Spiritual & Pilgrimage">Spiritual &amp; Pilgrimage</option>
                    <option value="Luxury Escapes">Luxury Escapes</option>
                    <option value="Honeymoon & Romance">Honeymoon &amp; Romance</option>
                    <option value="Family Vacations">Family Vacations</option>
                    <option value="Wilderness & Safari">Wilderness &amp; Safari</option>
                    <option value="Insider Travel Tips">Insider Travel Tips</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Short Excerpt (1-2 sentences) *</label>
                <textarea
                  className={styles.formTextarea}
                  rows={2}
                  value={blogForm.excerpt}
                  onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                  placeholder="Summary shown on the blog cards and Google snippets..."
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Main Article Body (Separate paragraphs with double Enter)</label>
                <textarea
                  className={styles.formTextarea}
                  rows={6}
                  value={blogForm.paragraphs}
                  onChange={(e) => setBlogForm({ ...blogForm, paragraphs: e.target.value })}
                  placeholder="Write your article body here..."
                />
              </div>

              <div className={styles.formRowTwo}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Highlight Quote</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    value={blogForm.quote}
                    onChange={(e) => setBlogForm({ ...blogForm, quote: e.target.value })}
                    placeholder="A memorable statement from the story..."
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Author Name</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    value={blogForm.author}
                    onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                    placeholder="Sobhavi Travel Specialist"
                  />
                </div>
              </div>

              {/* Cover Photo */}
              <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                <ImageUploader
                  id="new-blog-cover-img"
                  label="Story Cover Photograph *"
                  value={blogForm.coverImage}
                  onChange={(val) => setBlogForm({ ...blogForm, coverImage: val })}
                  required
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="submit"
                  className={styles.saveBtn}
                  disabled={isPublishingBlog}
                >
                  {isPublishingBlog ? "Publishing to Website..." : "🚀 Publish Story Now"}
                </button>
              </div>
            </form>
          </div>

          {/* Existing Articles List */}
          <div className={styles.editorCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Published Articles ({blogs.length})</h2>
              <p className={styles.cardDesc}>
                View, inspect, or remove published stories from your live journal.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {blogs.map((b) => (
                <div
                  key={b.id || b.slug}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.25rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    gap: '1rem',
                    flexWrap: 'wrap'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '64px',
                        height: '44px',
                        borderRadius: '6px',
                        backgroundImage: `url(${b.coverImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        flexShrink: 0
                      }}
                    />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#fff' }}>{b.title}</h4>
                      <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                        {b.category} &bull; {b.publishedAt} &bull; {b.readTime}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Link
                      href={`/blog/${b.slug}`}
                      target="_blank"
                      style={{ fontSize: '0.78rem', color: '#38bdf8', textDecoration: 'underline' }}
                    >
                      View Live &rarr;
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDeleteBlog(b.id)}
                      className={styles.deleteItemBtn}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          TAB 7: CLIENT LEADS & ENQUIRIES
          =================================================================== */}
      {activeTab === 'enquiries' && (
        <div className={styles.editorCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Client Enquiries &amp; Booking Leads ({enquiries.length})</h2>
            <p className={styles.cardDesc}>
              Direct enquiries submitted by website visitors. Connect directly via WhatsApp or phone.
            </p>
          </div>

          {enquiries.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#94a3b8' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>📭</span>
              No new inquiries received yet. When visitors submit travel inquiry forms, they will appear right here!
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {enquiries.map((enq) => (
                <div
                  key={enq.id}
                  style={{
                    padding: '1.25rem 1.5rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <strong style={{ fontSize: '1.05rem', color: '#fff' }}>{enq.name}</strong>
                      <span style={{ fontSize: '0.72rem', background: '#e11d48', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: '999px', fontWeight: 600 }}>
                        {enq.status || 'New'}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                      {new Date(enq.createdAt).toLocaleString()}
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.5rem', fontSize: '0.82rem', color: '#cbd5e1' }}>
                    <div><strong>WhatsApp:</strong> {enq.whatsapp}</div>
                    {enq.email && <div><strong>Email:</strong> {enq.email}</div>}
                    {enq.destination && <div><strong>Destination:</strong> {enq.destination}</div>}
                    {enq.travelDate && <div><strong>Travel Date:</strong> {enq.travelDate}</div>}
                    {enq.duration && <div><strong>Duration:</strong> {enq.duration}</div>}
                    {enq.travellers && <div><strong>Travellers:</strong> {enq.travellers}</div>}
                    {enq.budget && <div><strong>Budget:</strong> {enq.budget}</div>}
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                    <a
                      href={`https://wa.me/${enq.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(enq.name)},%20thank%20you%20for%20contacting%20Sobhavi%20Travels.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        background: '#25D366',
                        color: '#fff',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        textDecoration: 'none'
                      }}
                    >
                      💬 Chat on WhatsApp
                    </a>
                    <a
                      href={`tel:${enq.whatsapp}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#fff',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        textDecoration: 'none'
                      }}
                    >
                      📞 Direct Call
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
