"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import { getSiteConfig, SiteConfig } from '@/lib/siteConfig';
import { getAllBlogs, BlogPost } from '@/lib/blogs';
import styles from './page.module.css';

export default function Home() {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(() => getSiteConfig());
  const [blogs, setBlogs] = useState<BlogPost[]>(() => getAllBlogs());
  const [activeTab, setActiveTab] = useState<'domestic' | 'international'>('domestic');

  // Hero Video Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeChannel, setActiveChannel] = useState<0 | 1>(0);
  const [channel0Index, setChannel0Index] = useState(0);
  const [channel1Index, setChannel1Index] = useState(1);
  const videoRef0 = useRef<HTMLVideoElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const crossfadeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const loadConfig = () => {
      try {
        const saved = localStorage.getItem('sobhavi_site_config');
        if (saved) {
          setSiteConfig(JSON.parse(saved));
        }
      } catch (e) {
        console.error(e);
      }
    };
    loadConfig();

    const handleStorage = () => loadConfig();
    window.addEventListener('storage', handleStorage);
    window.addEventListener('sobhavi_site_config_updated', handleStorage);

    const loadBlogs = () => {
      try {
        const localCustom = JSON.parse(localStorage.getItem('sobhavi_custom_blogs') || '[]');
        if (Array.isArray(localCustom) && localCustom.length > 0) {
          const initial = getAllBlogs();
          const seen = new Set<string>();
          const seenImages = new Set<string>();
          const combined: BlogPost[] = [];
          for (const raw of localCustom) {
            const p = { ...raw };
            if (p?.title?.toLowerCase()?.includes('haveli') || p?.slug?.includes('haveli')) {
              p.coverImage = 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop';
            }
            const imgKey = p?.coverImage?.match(/photo-[a-zA-Z0-9_-]+/)?.[0] || p?.coverImage;
            if (p?.slug && !seen.has(p.slug.toLowerCase()) && !seenImages.has(imgKey)) {
              seen.add(p.slug.toLowerCase());
              seenImages.add(imgKey);
              combined.push(p);
            }
          }
          for (const p of initial) {
            const imgKey = p?.coverImage?.match(/photo-[a-zA-Z0-9_-]+/)?.[0] || p?.coverImage;
            if (p?.slug && !seen.has(p.slug.toLowerCase()) && !seenImages.has(imgKey)) {
              seen.add(p.slug.toLowerCase());
              seenImages.add(imgKey);
              combined.push(p);
            }
          }
          setBlogs(combined);
        } else {
          setBlogs(getAllBlogs());
        }
      } catch (e) {
        console.error(e);
      }
    };
    loadBlogs();

    fetch('/api/blogs')
      .then(r => r.json())
      .then(d => {
        if (d.success && Array.isArray(d.blogs) && d.blogs.length > 0) {
          const seenImages = new Set<string>();
          const seenSlugs = new Set<string>();
          const sanitized = d.blogs.filter((b: BlogPost) => {
            const imgKey = b.coverImage?.match(/photo-[a-zA-Z0-9_-]+/)?.[0] || b.coverImage;
            const slugKey = (b.slug || '').toLowerCase();
            if (seenImages.has(imgKey) || seenSlugs.has(slugKey)) return false;
            seenImages.add(imgKey);
            seenSlugs.add(slugKey);
            return true;
          });
          setBlogs(sanitized);
        }
      })
      .catch(console.error);

    const handleBlogUpdate = () => loadBlogs();
    window.addEventListener('sobhavi_blogs_updated', handleBlogUpdate);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('sobhavi_site_config_updated', handleStorage);
      window.removeEventListener('sobhavi_blogs_updated', handleBlogUpdate);
    };
  }, []);

  // 8 Curated destination video slides
  const heroSlides = [
    {
      id: "rajasthan",
      category: "Domestic",
      name: "Rajasthan",
      tagline: "Palaces, Forts & Desert Stargazing",
      videoUrl: "/videos/destinations/rajasthan.mp4",
      posterUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "kerala",
      category: "Domestic",
      name: "Kerala",
      tagline: "Serene Backwaters & Houseboat Drifts",
      videoUrl: "/videos/destinations/kerala.mp4",
      posterUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "dubai",
      category: "International",
      name: "Dubai",
      tagline: "Futuristic Skylines & Arabian Sands",
      videoUrl: "/videos/destinations/dubai.mp4",
      posterUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "shimla-manali",
      category: "Domestic",
      name: "Shimla & Manali",
      tagline: "Snow Peaks & Himalayan Pine Valleys",
      videoUrl: "/videos/destinations/shimla-manali.mp4",
      posterUrl: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "singapore",
      category: "International",
      name: "Singapore",
      tagline: "Gardens by the Bay & Modern Wonder",
      videoUrl: "/videos/destinations/singapore.mp4",
      posterUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "bali",
      category: "International",
      name: "Bali",
      tagline: "Sacred Water Temples & Emerald Terraces",
      videoUrl: "/videos/destinations/bali.mp4",
      posterUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "andaman",
      category: "Domestic",
      name: "Andaman & Nicobar",
      tagline: "Turquoise Lagoons & Coral Island Shorelines",
      videoUrl: "/videos/destinations/andaman.mp4",
      posterUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "maldives",
      category: "International",
      name: "Maldives",
      tagline: "Overwater Villas & Pristine Coral Atolls",
      videoUrl: "/videos/destinations/maldives.mp4",
      posterUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  const slide0 = heroSlides[channel0Index] || heroSlides[0];
  const slide1 = heroSlides[channel1Index] || heroSlides[1];

  const goToSlide = (targetIndex: number) => {
    if (targetIndex === currentSlide) return;
    if (crossfadeTimerRef.current) clearTimeout(crossfadeTimerRef.current);

    const nextChannel = activeChannel === 0 ? 1 : 0;
    const incomingRef = nextChannel === 0 ? videoRef0 : videoRef1;
    const outgoingRef = activeChannel === 0 ? videoRef0 : videoRef1;

    if (nextChannel === 0) {
      setChannel0Index(targetIndex);
    } else {
      setChannel1Index(targetIndex);
    }

    setCurrentSlide(targetIndex);

    // Natural 1.0x playback rate
    if (incomingRef.current) {
      try {
        incomingRef.current.playbackRate = 1.0;
        const p = incomingRef.current.play();
        if (p !== undefined) p.catch(() => {});
      } catch (err) {
        console.warn('Video transition error:', err);
      }
    }

    setActiveChannel(nextChannel);

    crossfadeTimerRef.current = setTimeout(() => {
      if (outgoingRef.current) {
        outgoingRef.current.pause();
      }
    }, 900);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((currentSlide + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [currentSlide, activeChannel, heroSlides.length]);

  useEffect(() => {
    if (videoRef0.current) {
      try {
        videoRef0.current.playbackRate = 1.0;
        const p = videoRef0.current.play();
        if (p !== undefined) p.catch(() => {});
      } catch (e) {}
    }
  }, []);

  // Dual Tab Destinations Data
  const domesticDestinations = [
    {
      name: "Rajasthan",
      tagline: "Palaces, Forts & Thar Desert Glamping",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900&auto=format&fit=crop",
      href: "/domestic#rajasthan"
    },
    {
      name: "Shimla & Manali",
      tagline: "Snow Peaks & Himalayan Pine Valleys",
      image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=900&auto=format&fit=crop",
      href: "/domestic#shimla-manali"
    },
    {
      name: "Kerala",
      tagline: "Tranquil Backwaters & Lush Tea Plantations",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=900&auto=format&fit=crop",
      href: "/domestic#kerala"
    },
    {
      name: "Andaman & Nicobar Islands",
      tagline: "Emerald Lagoons, Coral Reefs & Radhanagar Beach",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop",
      href: "/domestic#andaman"
    }
  ];

  const internationalDestinations = [
    {
      name: "Dubai",
      tagline: "Futuristic Skylines, Burj Khalifa & Luxury Marina",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=900&auto=format&fit=crop",
      href: "/international#dubai"
    },
    {
      name: "Singapore",
      tagline: "Gardens by the Bay & Marina Bay Sands",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=900&auto=format&fit=crop",
      href: "/international#singapore"
    },
    {
      name: "Bali",
      tagline: "Sacred Temples, Rice Terraces & Private Pool Villas",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=900&auto=format&fit=crop",
      href: "/international#bali"
    },
    {
      name: "Maldives",
      tagline: "Overwater Pool Villas & Turquoise Coral Lagoons",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=900&auto=format&fit=crop",
      href: "/international#maldives"
    }
  ];

  // Pure Typographic Services (No Images)
  const servicesList = [
    "Flight Bookings",
    "Hotel Bookings",
    "Visa Assistance",
    "Cab & Transfers",
    "Sightseeing & Activities",
    "Travel Insurance",
    "Airport Transfers",
    "Complete Trip Planning"
  ];

  // Pure Typographic Experiences (No Images)
  const experiencesList = [
    "Beach Escapes",
    "Mountain Getaways",
    "Wildlife & Nature",
    "Romantic Getaways",
    "Family Holidays",
    "Weekend Getaways",
    "Honeymoon Escapes"
  ];

  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "name": "Sobhavi Travels",
        "url": "https://lumina-travel-luxury.vercel.app",
        "telephone": "+917406994752",
        "email": "hello@sobhavitravel.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sobhavi Travels, Indira Nagar",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560038",
          "addressCountry": "IN"
        },
        "description": "Tailor-made luxury travel agency specializing in bespoke domestic holidays and global international expeditions."
      }
    ]
  };

  // Select top 3 diverse destination stories for homepage (strictly avoid duplicate regions or photos)
  const featuredBlogs = (() => {
    const seenCategories = new Set<string>();
    const seenImages = new Set<string>();
    const result: BlogPost[] = [];

    for (const post of blogs) {
      const imgMatch = post.coverImage.match(/photo-[a-zA-Z0-9_-]+/);
      const imgKey = imgMatch ? imgMatch[0] : post.coverImage;
      const catKey = (post.category || '').toLowerCase().trim();

      // Avoid showing two posts from the same state/region or with identical photo
      const isDuplicateRegion =
        (catKey.includes('rajasthan') && Array.from(seenCategories).some(c => c.includes('rajasthan') || c.includes('culture'))) ||
        (catKey.includes('culture') && Array.from(seenCategories).some(c => c.includes('rajasthan') || c.includes('culture'))) ||
        seenCategories.has(catKey) ||
        seenImages.has(imgKey);

      if (!isDuplicateRegion) {
        seenCategories.add(catKey);
        seenImages.add(imgKey);
        result.push(post);
      }
      if (result.length >= 3) break;
    }

    // Backfill with other non-duplicate image posts if needed
    if (result.length < 3) {
      for (const post of blogs) {
        const imgMatch = post.coverImage.match(/photo-[a-zA-Z0-9_-]+/);
        const imgKey = imgMatch ? imgMatch[0] : post.coverImage;
        if (!result.some(r => r.slug === post.slug) && !seenImages.has(imgKey)) {
          seenImages.add(imgKey);
          result.push(post);
        }
        if (result.length >= 3) break;
      }
    }

    return result.slice(0, 3);
  })();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Navbar />

      <main className={styles.mainWrapper}>

        {/* =================================================================
            1. HERO SECTION (Extremely Minimal)
            ================================================================= */}
        <section className={styles.heroSection}>
          <div className={styles.heroMediaContainer}>
            <div className={styles.heroVideoWrapper}>
              {/* Channel 0 */}
              <div
                className={`${styles.heroVideoChannel} ${activeChannel === 0 ? styles.channelActive : styles.channelInactive}`}
              >
                <div
                  className={styles.channelPoster}
                  style={{ backgroundImage: `url(${slide0.posterUrl})` }}
                />
                <video
                  ref={videoRef0}
                  src={slide0.videoUrl}
                  className={styles.heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={slide0.posterUrl}
                />
              </div>

              {/* Channel 1 */}
              <div
                className={`${styles.heroVideoChannel} ${activeChannel === 1 ? styles.channelActive : styles.channelInactive}`}
              >
                <div
                  className={styles.channelPoster}
                  style={{ backgroundImage: `url(${slide1.posterUrl})` }}
                />
                <video
                  ref={videoRef1}
                  src={slide1.videoUrl}
                  className={styles.heroVideo}
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={slide1.posterUrl}
                />
              </div>
            </div>
            <div className={styles.heroOverlay} />
          </div>

          {/* Hero: Only ESCAPE THE ROUTINE */}
          <div className={styles.heroContent}>
            <div className={styles.heroTextContainer}>
              <h1 className={styles.heroTitleLarge}>ESCAPE THE ROUTINE</h1>
            </div>
          </div>

          {/* Central Scroll Indicator */}
          <a href="#intro" className={styles.heroScrollIndicator} aria-label="Scroll to introduction">
            <span>SCROLL</span>
            <div className={styles.scrollLine} />
          </a>

        </section>

        {/* =================================================================
            2. INTRODUCTION — DIRECTLY BELOW HERO (Editorial Concierge Story)
            ================================================================= */}
        <section id="intro" className={styles.introSection}>
          <div className="container">
            <div className={styles.introContainer}>
              <span className={styles.introEyebrow}>✦ EFFORTLESS TRAVEL PLANNING</span>
              <h2 className={styles.introHeadline}>
                <span className={styles.introHeadlineWhite}>Planning a trip sounds exciting.</span>
                <span className={styles.introHeadlineGold}>Planning the trip itself? Not always.</span>
              </h2>

              <div className={styles.introTextWrapper}>
                <p className={styles.introParagraph}>
                  Whether you're planning a weekend getaway or a two-week trip across countries, it takes time, energy and a surprising amount of mental space. Comparing prices across different sites, finding the right hotels and flights, figuring out transfers, visas and everything in between &mdash; all while juggling your professional and personal life.
                </p>

                <div className={styles.introCalloutBox}>
                  <p className={styles.introCalloutQuote}>
                    The trip can start feeling exhausting before it even begins.
                  </p>
                  <span className={styles.introCalloutPivot}>So why not let us handle it?</span>
                </div>

                <p className={styles.introParagraph}>
                  At <strong>Sobhavi</strong>, we take care of the planning and coordination so you can focus on the part that actually matters &mdash; <em>enjoying your holiday</em>.
                </p>

                <p className={styles.introServicesText}>
                  We're more than just holiday packages. We can assist you with flights, hotels, visa services, cabs, transfers, sightseeing and other arrangements on the ground, helping bring everything together in one place.
                </p>

                <div className={styles.introServicesPills}>
                  <span>✈ Flights</span>
                  <span>🏨 5-Star Hotels</span>
                  <span>🛂 Visa Services</span>
                  <span>🚘 Cabs & Transfers</span>
                  <span>🗺 Sightseeing & Concierge</span>
                </div>

                <div className={styles.introClosingBox}>
                  <p className={styles.introClosingStatement}>
                    You tell us where you want to go. We'll take care of the rest.
                  </p>
                  <Link href="/enquire" className={styles.introCtaBtn}>
                    <span>PLAN YOUR TRIP</span>
                    <span className={styles.ctaArrow}>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            3. DESTINATIONS (Dual Tabs: Domestic & International)
            ================================================================= */}
        <section id="destinations" className={styles.destinationsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>WHERE WE SERVE</span>
              <h2 className={styles.sectionTitle}>DESTINATIONS</h2>
              <p className={styles.sectionSubtitle}>
                Where would you like to go?
              </p>

              {/* Dual Tab Switcher ("dono tab") */}
              <div className={styles.tabsContainer}>
                <button
                  type="button"
                  onClick={() => setActiveTab('domestic')}
                  className={`${styles.tabBtn} ${activeTab === 'domestic' ? styles.tabActive : ''}`}
                >
                  DOMESTIC
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('international')}
                  className={`${styles.tabBtn} ${activeTab === 'international' ? styles.tabActive : ''}`}
                >
                  INTERNATIONAL
                </button>
              </div>
            </div>

            {/* Destinations Grid */}
            <div className={styles.destinationsGrid}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className={styles.gridInner}
                >
                  {(activeTab === 'domestic' ? domesticDestinations : internationalDestinations).map((dest) => (
                    <Link
                      key={dest.name}
                      href={dest.href}
                      className={styles.destCard}
                    >
                      <div
                        className={styles.destCardImage}
                        style={{ backgroundImage: `url(${dest.image})` }}
                      />
                      <div className={styles.destCardOverlay} />
                      <div className={styles.destCardContent}>
                        <div className={styles.destCardStar}>✦</div>
                        <h3 className={styles.destCardName}>{dest.name}</h3>
                        <p className={styles.destCardTagline}>{dest.tagline}</p>
                        <span className={styles.destCardLinkText}>View Destination &rarr;</span>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* =================================================================
            4. CONCIERGE SERVICES & EXPERIENCES (Interactive Bi-Directional Marquee)
            ================================================================= */}
        <section className={styles.conciergeSection}>
          <div className={styles.conciergeHeader}>
            <span className={styles.eyebrow}>END-TO-END CONCIERGE</span>
            <h2 className={styles.sectionTitle}>SERVICES &amp; EXPERIENCES</h2>
            <p className={styles.sectionSubtitle}>
              From first-class flights and 5-star villas to bespoke safari expeditions — every detail arranged seamlessly.
            </p>
          </div>

          <div className={styles.marqueeWrapper}>
            {/* Row 1: Services (Scrolling Right to Left) */}
            <div className={`${styles.marqueeTrack} ${styles.trackScrollLeft}`}>
              {[...servicesList, ...servicesList].map((service, idx) => (
                <div key={`srv-${idx}`} className={styles.marqueeCard}>
                  <span className={styles.marqueeStar}>✦</span>
                  <span className={styles.marqueeLabel}>{service}</span>
                </div>
              ))}
            </div>

            {/* Row 2: Experiences (Scrolling Left to Right) */}
            <div className={`${styles.marqueeTrack} ${styles.trackScrollRight}`}>
              {[...experiencesList, ...experiencesList].map((exp, idx) => (
                <div key={`exp-${idx}`} className={styles.marqueeCard}>
                  <span className={styles.marqueeStar}>✦</span>
                  <span className={styles.marqueeLabel}>{exp}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            6. BLOGS & EDITORIAL CHRONICLES
            ================================================================= */}
        <section className={styles.blogsSection}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={styles.sectionHeader}
            >
              <span className={styles.eyebrow}>CURATED CHRONICLES &amp; STORIES</span>
              <h2 className={styles.sectionTitle}>THE TRAVEL JOURNAL</h2>
              <p className={styles.sectionSubtitle}>
                Stories, festival guides, and insider perspectives to inspire your next bespoke voyage.
              </p>
            </motion.div>

            <div className={styles.blogsGrid}>
              {featuredBlogs.map((post, idx) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={styles.blogCardWrapper}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className={styles.blogCard}
                  >
                    <div className={styles.blogImageWrapper}>
                      <div
                        className={styles.blogImage}
                        style={{ backgroundImage: `url(${post.coverImage})` }}
                      />
                      <div className={styles.blogImageOverlay} />
                      <div className={styles.blogImageBadges}>
                        <span className={styles.blogCategoryBadge}>✦ {post.category}</span>
                        {post.readTime && <span className={styles.blogReadTimeBadge}>{post.readTime}</span>}
                      </div>
                    </div>
                    <div className={styles.blogContent}>
                      <div className={styles.blogMetaRow}>
                        <span className={styles.blogAuthorTag}>{post.authorRole || post.author || "Editorial Curator"}</span>
                        {post.publishedAt && <span className={styles.blogDateTag}>{post.publishedAt}</span>}
                      </div>
                      <h3 className={styles.blogTitle}>{post.title}</h3>
                      <p className={styles.blogExcerpt}>{post.excerpt}</p>
                      <div className={styles.blogFooter}>
                        <span className={styles.blogReadMore}>
                          <span>Read Full Story</span>
                          <span className={styles.blogReadMoreArrow}>&rarr;</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className={styles.blogsCtaRow}
            >
              <Link href="/blog" className={styles.blogsAllBtn}>
                <span>Explore All Journal Stories</span>
                <span className={styles.btnArrow}>&rarr;</span>
              </Link>
            </motion.div>
          </div>
        </section>



        {/* =================================================================
            8. FINAL CTA
            ================================================================= */}
        <section className={styles.finalCtaSection}>
          <div className="container">
            <div className={styles.finalCtaBox}>
              <h2 className={styles.finalCtaHeading}>Thinking about your next escape?</h2>
              <p className={styles.finalCtaSubtitle}>
                Tell us where you want to go. We'll take care of the rest.
              </p>
              <Link href="/enquire" className={styles.finalCtaButton}>
                PLAN MY TRIP &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
