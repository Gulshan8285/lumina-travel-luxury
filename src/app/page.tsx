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
          const combined: BlogPost[] = [];
          for (const p of localCustom) {
            if (p?.slug && !seen.has(p.slug.toLowerCase())) {
              seen.add(p.slug.toLowerCase());
              combined.push(p);
            }
          }
          for (const p of initial) {
            if (p?.slug && !seen.has(p.slug.toLowerCase())) {
              seen.add(p.slug.toLowerCase());
              combined.push(p);
            }
          }
          setBlogs(combined);
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
          setBlogs(d.blogs);
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
  const activeSlide = heroSlides[currentSlide] || heroSlides[0];

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

  // Filter the top 3 blogs for the homepage
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <>
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
                  preload="auto"
                  poster={slide1.posterUrl}
                />
              </div>
            </div>
            <div className={styles.heroOverlay} />
          </div>

          {/* Minimal, Understated Hero Title */}
          <div className={styles.heroContent}>
            <div className={styles.minimalHeroWrapper}>
              <h1 className={styles.minimalHeroTitle}>ESCAPE THE ROUTINE.</h1>
            </div>
          </div>

          {/* Subtle Location & Controls Indicator */}
          <div className={styles.heroLocationIndicator}>
            <div className={styles.heroLocationLeft}>
              <span className={styles.heroLocationDot}></span>
              <span>
                <strong>{activeSlide.name}</strong> ({activeSlide.category}) &mdash; {activeSlide.tagline}
              </span>
            </div>
            <div className={styles.heroLocationRight}>
              <button
                type="button"
                className={styles.heroNavBtn}
                onClick={() => goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
                aria-label="Previous destination video"
              >
                &#8592;
              </button>
              <button
                type="button"
                className={styles.heroNavBtn}
                onClick={() => goToSlide((currentSlide + 1) % heroSlides.length)}
                aria-label="Next destination video"
              >
                &#8594;
              </button>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. INTRODUCTION — DIRECTLY BELOW HERO (Human-Crafted Copy)
            ================================================================= */}
        <section className={styles.introSection}>
          <div className="container">
            <div className={styles.introContainer}>
              <h2 className={styles.introHeadline}>
                Planning a trip sounds exciting. Planning the trip itself? Not always.
              </h2>
              <div className={styles.introTextWrapper}>
                <p className={styles.introParagraph}>
                  Whether you're planning a weekend getaway or a two-week trip across countries, it takes time, energy and a surprising amount of mental space. Comparing prices across different sites, finding the right hotels and flights, figuring out transfers, visas and everything in between — all while juggling your professional and personal life.
                </p>
                <p className={styles.introMuted}>
                  The trip can start feeling exhausting before it even begins.
                </p>
                <p className={styles.introQuestion}>
                  So why not let us handle it?
                </p>
                <p className={styles.introParagraph}>
                  At Sobhavi, we take care of the planning and coordination so you can focus on the part that actually matters, enjoying your holiday.
                </p>
                <p className={styles.introParagraph}>
                  We're more than just holiday packages. We can assist you with flights, hotels, visa services, cabs, transfers, sightseeing and other arrangements on the ground, helping bring everything together in one place.
                </p>
                <p className={styles.introHighlight}>
                  You tell us where you want to go. We'll take care of the rest.
                </p>
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
            4. SERVICES (Typography Only — No Images)
            ================================================================= */}
        <section className={styles.typographicSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>END-TO-END ARRANGEMENTS</span>
              <h2 className={styles.sectionTitle}>SERVICES</h2>
              <p className={styles.sectionSubtitle}>
                From tickets to local transfers, everything handled under one roof.
              </p>
            </div>

            <div className={styles.typoGrid}>
              {servicesList.map((service, idx) => (
                <div key={idx} className={styles.typoItem}>
                  <span className={styles.typoStar}>✦</span>
                  <span className={styles.typoLabel}>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            5. EXPERIENCES (Typography Only — No Images)
            ================================================================= */}
        <section className={styles.typographicSectionAlt}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>HOW WOULD YOU LIKE TO TRAVEL?</span>
              <h2 className={styles.sectionTitle}>EXPERIENCES</h2>
              <p className={styles.sectionSubtitle}>
                Bespoke themes crafted around your personal travel rhythm.
              </p>
            </div>

            <div className={styles.typoGrid}>
              {experiencesList.map((exp, idx) => (
                <div key={idx} className={styles.typoItem}>
                  <span className={styles.typoStar}>✦</span>
                  <span className={styles.typoLabel}>{exp}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            6. BLOGS (Formerly The Journal)
            ================================================================= */}
        <section className={styles.blogsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>NOTES FROM THE ROAD</span>
              <h2 className={styles.sectionTitle}>BLOGs</h2>
              <p className={styles.sectionSubtitle}>
                Stories, festival guides and perspectives to inspire your next journey.
              </p>
            </div>

            <div className={styles.blogsGrid}>
              {featuredBlogs.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={styles.blogCard}
                >
                  <div
                    className={styles.blogImage}
                    style={{ backgroundImage: `url(${post.coverImage})` }}
                  />
                  <div className={styles.blogContent}>
                    <span className={styles.blogCategory}>{post.category}</span>
                    <h3 className={styles.blogTitle}>{post.title}</h3>
                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                    <span className={styles.blogReadMore}>Read Story &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className={styles.blogsCtaRow}>
              <Link href="/blog" className={styles.blogsAllBtn}>
                Explore All Stories &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* =================================================================
            7. FINAL CTA
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
