"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import ReviewStrip from '@/components/ui/ReviewStrip';
import { travelCategories } from '@/lib/categories';
import { featuredDestinations } from '@/lib/data';
import { getSiteConfig, SiteConfig } from '@/lib/siteConfig';
import { getAllBlogs, BlogPost } from '@/lib/blogs';
import styles from './page.module.css';

export default function Home() {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(() => getSiteConfig());
  const [blogs, setBlogs] = useState<BlogPost[]>(() => getAllBlogs());

  useEffect(() => {
    // Load local edits immediately on client mount
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

    // Load blogs from localStorage & cloud API
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
          try {
            const localCustom = JSON.parse(localStorage.getItem('sobhavi_custom_blogs') || '[]');
            const seen = new Set<string>();
            const combined: BlogPost[] = [];
            for (const p of (localCustom || [])) {
              if (p?.slug && !seen.has(p.slug.toLowerCase())) {
                seen.add(p.slug.toLowerCase());
                combined.push(p);
              }
            }
            for (const p of d.blogs) {
              if (p?.slug && !seen.has(p.slug.toLowerCase())) {
                seen.add(p.slug.toLowerCase());
                combined.push(p);
              }
            }
            setBlogs(combined);
          } catch (err) {
            setBlogs(d.blogs);
          }
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

  // Default 8 destinations requested by the user: Domestic & International
  const defaultHeroSlides = [
    {
      id: "rajasthan",
      category: "Domestic",
      name: "Rajasthan",
      tagline: "Palaces, Forts & Thar Desert Glamping",
      videoUrl: "/videos/destinations/rajasthan.mp4",
      posterUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "dubai",
      category: "International",
      name: "Dubai",
      tagline: "Futuristic Skylines, Burj Khalifa & Luxury Marina",
      videoUrl: "/videos/destinations/dubai.mp4",
      posterUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "shimla-manali",
      category: "Domestic",
      name: "Shimla Manali",
      tagline: "Snow Peaks & Himalayan Pine Valleys",
      videoUrl: "/videos/destinations/shimla-manali.mp4",
      posterUrl: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "singapore",
      category: "International",
      name: "Singapore",
      tagline: "Gardens by the Bay & Marina Bay Sands",
      videoUrl: "/videos/destinations/singapore.mp4",
      posterUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "kerala",
      category: "Domestic",
      name: "Kerala",
      tagline: "Tranquil Backwaters & Lush Tea Plantations",
      videoUrl: "/videos/destinations/kerala.mp4",
      posterUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "bali",
      category: "International",
      name: "Bali",
      tagline: "Sacred Temples, Rice Terraces & Private Pool Villas",
      videoUrl: "/videos/destinations/bali.mp4",
      posterUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "andaman",
      category: "Domestic",
      name: "Andaman",
      tagline: "Emerald Lagoons, Coral Reefs & Radhanagar Beach",
      videoUrl: "/videos/destinations/andaman.mp4",
      posterUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "maldives",
      category: "International",
      name: "Maldives",
      tagline: "Overwater Coral Villas & All-Inclusive Island Indulgence",
      videoUrl: "/videos/destinations/maldives.mp4",
      posterUrl: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  const heroSlides = (siteConfig.heroSlides && siteConfig.heroSlides.length > 0)
    ? siteConfig.heroSlides
    : defaultHeroSlides;

  // Dual-channel video player for gapless, black-screen-free crossfading
  const [activeChannel, setActiveChannel] = useState<0 | 1>(0);
  const [channel0Index, setChannel0Index] = useState(0);
  const [channel1Index, setChannel1Index] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide0 = heroSlides[channel0Index] || heroSlides[0] || defaultHeroSlides[0];
  const slide1 = heroSlides[channel1Index] || heroSlides[0] || defaultHeroSlides[0];
  const activeSlide = heroSlides[currentSlide] || heroSlides[0] || defaultHeroSlides[0];

  const categoriesList = (siteConfig.categories && siteConfig.categories.length > 0)
    ? siteConfig.categories
    : travelCategories;

  const videoRef0 = useRef<HTMLVideoElement | null>(null);
  const videoRef1 = useRef<HTMLVideoElement | null>(null);
  const crossfadeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Transition seamlessly between destinations without any black gap
  const goToSlide = (targetIndex: number) => {
    if (targetIndex === currentSlide) return;

    if (crossfadeTimerRef.current) {
      clearTimeout(crossfadeTimerRef.current);
    }

    const nextChannel = activeChannel === 0 ? 1 : 0;
    const incomingRef = nextChannel === 0 ? videoRef0 : videoRef1;
    const outgoingRef = activeChannel === 0 ? videoRef0 : videoRef1;

    if (nextChannel === 0) {
      setChannel0Index(targetIndex);
    } else {
      setChannel1Index(targetIndex);
    }

    setCurrentSlide(targetIndex);

    // Prepare incoming video playback
    if (incomingRef.current) {
      try {
        incomingRef.current.playbackRate = 1.25;
        incomingRef.current.currentTime = 0;
        const p = incomingRef.current.play();
        if (p !== undefined) p.catch(() => {});
      } catch (err) {
        console.warn('Video transition error:', err);
      }
    }

    // Switch active channel so CSS opacity cross-fades smoothly over 1.2s
    setActiveChannel(nextChannel);

    // Pause outgoing video after fade-out finishes (1.3s) to save performance
    crossfadeTimerRef.current = setTimeout(() => {
      if (outgoingRef.current) {
        outgoingRef.current.pause();
      }
    }, 1300);
  };

  // Auto-cycle through destination videos every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((currentSlide + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, activeChannel, heroSlides.length]);

  // Initial playback on mount
  useEffect(() => {
    if (videoRef0.current) {
      try {
        videoRef0.current.playbackRate = 1.25;
        const p = videoRef0.current.play();
        if (p !== undefined) p.catch(() => {});
      } catch (e) {}
    }
  }, []);

  // Destination Highlights linked dynamically to Admin Site Config
  const domesticDests = siteConfig.domesticDestinations && siteConfig.domesticDestinations.length > 0
    ? siteConfig.domesticDestinations.map(d => ({
        slug: d.id,
        name: d.name,
        tagline: d.tagline,
        image: d.image
      }))
    : [
        {
          slug: "rajasthan",
          name: "Rajasthan",
          tagline: "Palaces, Forts & Thar Desert",
          image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600&q=70&auto=format&fit=crop"
        },
        {
          slug: "shimla-manali",
          name: "Shimla & Manali",
          tagline: "Snow Peaks & Mountain Pine Valleys",
          image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=600&q=70&auto=format&fit=crop"
        },
        {
          slug: "kerala",
          name: "Kerala",
          tagline: "Tranquil Backwaters & Tea Hills",
          image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&q=70&auto=format&fit=crop"
        },
        {
          slug: "andaman",
          name: "Andaman",
          tagline: "Emerald Lagoons & Radhanagar Beach",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&q=70&auto=format&fit=crop"
        }
      ];

  const internationalDests = siteConfig.internationalDestinations && siteConfig.internationalDestinations.length > 0
    ? siteConfig.internationalDestinations.map(d => ({
        slug: d.id,
        name: d.name,
        tagline: d.tagline,
        image: d.image
      }))
    : [
        {
          slug: "dubai",
          name: "Dubai",
          tagline: "Skyscrapers, Theme Parks & Desert Safari",
          image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&q=70&auto=format&fit=crop"
        },
        {
          slug: "singapore",
          name: "Singapore",
          tagline: "Gardens by the Bay & Marina Bay Sands",
          image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=600&q=70&auto=format&fit=crop"
        },
        {
          slug: "bali",
          name: "Bali",
          tagline: "Sacred Temples, Rice Terraces & Beach Villas",
          image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&q=70&auto=format&fit=crop"
        },
        {
          slug: "maldives",
          name: "Maldives",
          tagline: "Overwater Villas & Coral Lagoons",
          image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=600&q=70&auto=format&fit=crop"
        }
      ];

  // 6 Core Services with curated imagery
  const services = [
    {
      title: "Flights",
      desc: "Domestic and international flight bookings.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&q=70&auto=format&fit=crop",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
        </svg>
      )
    },
    {
      title: "Hotels",
      desc: "Stay options to suit every destination and budget.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&q=70&auto=format&fit=crop",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/>
          <path d="M9 16h6"/>
          <path d="M9 12h6"/>
          <path d="M9 8h6"/>
        </svg>
      )
    },
    {
      title: "Holiday Packages",
      desc: "Ready-made and customised holiday packages.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&q=70&auto=format&fit=crop",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    },
    {
      title: "Visa Assistance",
      desc: "Guidance and support for your visa requirements.",
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=600&q=70&auto=format&fit=crop",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2"/>
          <circle cx="12" cy="10" r="3"/>
          <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>
        </svg>
      )
    },
    {
      title: "Travel Insurance",
      desc: "Travel with greater peace of mind.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&q=70&auto=format&fit=crop",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      )
    },
    {
      title: "Transfers & Activities",
      desc: "Airport transfers, sightseeing and activities at your destination.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&q=70&auto=format&fit=crop",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
        </svg>
      )
    }
  ];

  // 3 Sobhavi Pillars with curated imagery
  const pillars = [
    {
      num: "01",
      title: "Personalised Assistance",
      desc: "Travel plans based on your needs and preferences.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&q=70&auto=format&fit=crop"
    },
    {
      num: "02",
      title: "End-to-End Support",
      desc: "From booking to your return journey.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&q=70&auto=format&fit=crop"
    },
    {
      num: "03",
      title: "One Travel Partner",
      desc: "Flights, hotels, packages and more, all in one place.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&q=70&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <Navbar />

      <main className={styles.mainWrapper}>
        {/* =================================================================
            1. HERO SECTION
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

          <div className={styles.heroContent}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.heroBrand}>{siteConfig.company?.brandName || "SOBHAVI TRAVELS"}</span>
              <p className={styles.heroTagline}>{siteConfig.hero?.tagline || "Your journey. Our expertise."}</p>
              <h1 className={styles.heroHeadline}>{siteConfig.hero?.headline || "Escape the routine."}</h1>
              <p className={styles.heroBody}>
                {siteConfig.hero?.subheading || "From quick getaways to international holidays, family vacations to special occasions — we help you plan the trip, while taking care of the details."}
              </p>

              <div className={styles.heroActions}>
                <Link href="/enquire" className={styles.heroButtonPrimary}>
                  Plan Your Trip
                </Link>
                <a
                  href="#featured-destinations"
                  className={styles.heroButtonSecondary}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                  </svg>
                  Explore Destinations
                </a>
              </div>
            </motion.div>
          </div>

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
            2. WHERE WOULD YOU LIKE TO GO? SECTION
            ================================================================= */}
        <section id="featured-destinations" className={styles.destinationsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>
                DESTINATIONS
              </span>
              <h2 className={styles.sectionTitle}>Where would you like to go?</h2>
              <p className={styles.sectionSubtitle}>
                Whether exploring royal fortresses across India or jetting off to exotic island lagoons, we design seamless escapes with effortless elegance.
              </p>
            </div>

            <div className={styles.destinationsDualContainer}>
              {/* DOMESTIC */}
              <div className={styles.destinationGroup}>
                <div className={styles.destinationGroupHeader}>
                  <div className={styles.destinationGroupInfo}>
                    <span className={styles.groupBadge}>India Escapes</span>
                    <h3 className={styles.groupTitle}>Domestic</h3>
                    <p className={styles.groupDesc}>Discover incredible destinations across India.</p>
                  </div>
                  <Link href="/domestic" className={styles.groupActionBtn}>
                    Explore Domestic &rarr;
                  </Link>
                </div>

                <div className={styles.domesticGrid}>
                  {domesticDests.map((item, i) => (
                    <motion.div
                      key={item.slug}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.8, delay: i * 0.12 }}
                    >
                      <Link href={`/destinations/${item.slug}`} className={styles.destCard}>
                        <div
                          className={styles.destCardImage}
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                        <div className={styles.destCardOverlay} />
                        <span className={styles.destCardBadge}>Domestic</span>
                        <div className={styles.destCardContent}>
                          <h4 className={styles.destCardName}>{item.name}</h4>
                          <p className={styles.destCardTagline}>{item.tagline}</p>
                          <span className={styles.destCardArrow}>Discover Destination &rarr;</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* INTERNATIONAL */}
              <div className={styles.destinationGroup}>
                <div className={styles.destinationGroupHeader}>
                  <div className={styles.destinationGroupInfo}>
                    <span className={styles.groupBadge}>Worldwide Horizons</span>
                    <h3 className={styles.groupTitle}>International</h3>
                    <p className={styles.groupDesc}>Go beyond borders and discover your next escape.</p>
                  </div>
                  <Link href="/international" className={styles.groupActionBtn}>
                    Explore International &rarr;
                  </Link>
                </div>

                <div className={styles.internationalGrid}>
                  {internationalDests.map((item, i) => (
                    <motion.div
                      key={item.slug}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                    >
                      <Link href={`/destinations/${item.slug}`} className={styles.destCard}>
                        <div
                          className={styles.destCardImage}
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                        <div className={styles.destCardOverlay} />
                        <span className={styles.destCardBadge}>International</span>
                        <div className={styles.destCardContent}>
                          <h4 className={styles.destCardName}>{item.name}</h4>
                          <p className={styles.destCardTagline}>{item.tagline}</p>
                          <span className={styles.destCardArrow}>Discover Destination &rarr;</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            3. EXPERIENCES SECTION
            ================================================================= */}
        <section className={styles.experiencesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                </svg>
                CURATED COLLECTIONS
              </span>
              <h2 className={styles.sectionTitle}>Experiences</h2>
              <p className={styles.sectionSubtitle}>
                Every journey has a soul. Tell us how you wish to travel, and our travel specialists will handcraft an experience you will cherish forever.
              </p>
            </div>

            <div className={styles.experiencesGrid}>
              {categoriesList.map((cat, i) => (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: (i % 3) * 0.12 }}
                >
                  <Link href={`/categories/${cat.slug}`} className={styles.expCard}>
                    <div className={styles.expImageWrapper}>
                      <div
                        className={styles.expImage}
                        style={{ backgroundImage: `url(${cat.heroImage})` }}
                      />
                      <div className={styles.expImageOverlay} />
                      <span className={styles.expTag}>{cat.name}</span>
                    </div>
                    <div className={styles.expBody}>
                      <h3 className={styles.expTitle}>{cat.name}</h3>
                      <p className={styles.expDesc}>{cat.tagline}</p>
                      <span className={styles.expLink}>
                        Explore Experience &rarr;
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className={styles.experiencesFooterAction}>
              <Link href="/journeys" className={styles.exploreExperiencesBtn}>
                <span>Explore All Experiences</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* =================================================================
            4. EVERYTHING YOU NEED TO TRAVEL (SERVICES GRID)
            ================================================================= */}
        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
                COMPLETE TRAVEL SUITE
              </span>
              <h2 className={styles.sectionTitle}>Everything you need to travel.</h2>
              <p className={styles.sectionSubtitle}>
                From airfare to handpicked stays, visa clearances to bespoke destination adventures — we handle every single detail under one roof.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                  className={styles.serviceCard}
                >
                  <div className={styles.serviceImageWrapper}>
                    <div
                      className={styles.serviceImage}
                      style={{ backgroundImage: `url(${svc.image})` }}
                    />
                    <div className={styles.serviceImageOverlay} />
                    <div className={styles.serviceIconFloating}>
                      {svc.icon}
                    </div>
                  </div>
                  <div className={styles.serviceBody}>
                    <h3 className={styles.serviceName}>{svc.title}</h3>
                    <p className={styles.serviceDesc}>{svc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            5. WHY SOBHAVI SECTION
            ================================================================= */}
        <section className={styles.whySobhaviSection}>
          <div className="container">
            <div className={styles.whySobhaviHeader}>
              <span className={styles.eyebrow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                THE SOBHAVI PROMISE
              </span>
              <h2 className={styles.sectionTitle}>Why Sobhavi?</h2>
              <h3 className={styles.whySobhaviSubtitle}>Travel planning, made simple.</h3>
              <p className={styles.whySobhaviDesc}>
                From choosing where to go to arranging your flights, hotels and activities, we&apos;re here to make the process easy.
              </p>
            </div>

            <div className={styles.pillarsGrid}>
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className={styles.pillarCard}
                >
                  <div className={styles.pillarImageWrapper}>
                    <div
                      className={styles.pillarImage}
                      style={{ backgroundImage: `url(${p.image})` }}
                    />
                    <div className={styles.pillarImageOverlay} />
                    <span className={styles.pillarNumberBadge}>{p.num}</span>
                  </div>
                  <div className={styles.pillarBody}>
                    <h4 className={styles.pillarTitle}>{p.title}</h4>
                    <p className={styles.pillarText}>{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            5.5. TRAVEL JOURNAL / BLOG SECTION
            ================================================================= */}
        <section className={styles.experiencesSection} style={{ borderTop: '1px solid var(--border-light)' }}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
                  <path d="M6 6h10"/>
                  <path d="M6 10h10"/>
                </svg>
                TRAVEL JOURNAL &amp; STORIES
              </span>
              <h2 className={styles.sectionTitle}>Stories from the Road</h2>
              <p className={styles.sectionSubtitle}>
                Insider perspectives, secret sanctuaries, and handcrafted destination itineraries curated by Sobhavi specialists.
              </p>
            </div>

            <div className={styles.experiencesGrid}>
              {blogs.slice(0, 3).map((story, i) => (
                <motion.div
                  key={story.id || story.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                >
                  <Link href={`/blog/${story.slug}`} className={styles.expCard}>
                    <div className={styles.expImageWrapper}>
                      <div
                        className={styles.expImage}
                        style={{ backgroundImage: `url(${story.coverImage})` }}
                      />
                      <div className={styles.expImageOverlay} />
                      <span className={styles.expTag}>{story.category}</span>
                    </div>
                    <div className={styles.expBody}>
                      <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                        <span>{story.publishedAt}</span>
                        <span>•</span>
                        <span>{story.readTime}</span>
                      </div>
                      <h3 className={styles.expTitle}>{story.title}</h3>
                      <p className={styles.expDesc}>{story.excerpt}</p>
                      <span className={styles.expLink}>
                        Read Story &rarr;
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className={styles.experiencesFooterAction}>
              <Link href="/blog" className={styles.exploreExperiencesBtn}>
                <span>Explore All Journal Articles ({blogs.length})</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* =================================================================
            CUSTOMER REVIEWS STRIP
            ================================================================= */}
        <ReviewStrip />

        {/* =================================================================
            6. FINAL CTA & SIGNOFF
            ================================================================= */}
        <section className={styles.finalCtaSection}>
          <div className={styles.finalCtaBg} />
          <div className={styles.finalCtaOverlay} />

          <div className={styles.finalCtaContent}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <h2 className={styles.finalCtaTitle}>Ready to escape the routine?</h2>
              <p className={styles.finalCtaDesc}>
                Tell us where you&apos;d like to go, and we&apos;ll help you plan the rest.
              </p>

              <div className={styles.finalCtaActions}>
                <Link href="/enquire" className="btn-pink" style={{ padding: '1.2rem 3.2rem', fontSize: '1rem' }}>
                  Plan My Trip
                </Link>
                <a
                  href={`https://wa.me/91${siteConfig.company?.whatsapp || '7406994752'}?text=Hello%20Sobhavi%20Travels,%20I%20would%20like%20to%20plan%20my%20trip`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.heroButtonSecondary}
                  style={{ padding: '1.2rem 2.4rem' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              <div className={styles.finalCtaSignoff}>
                <span className={styles.signoffBrand}>{siteConfig.company?.brandName || "SOBHAVI TRAVELS"}</span>
                <span className={styles.signoffMotto}>{siteConfig.company?.tagline || "Travel made memorable."}</span>
                <div className={styles.signoffContacts}>
                  <a href={`tel:${siteConfig.company?.phone || "+917406994752"}`} className={styles.signoffLink}>
                    📞 Call Us: {siteConfig.company?.phone || "+91 74069 94752"}
                  </a>
                  <span style={{ opacity: 0.3 }}>|</span>
                  <a
                    href={`https://wa.me/91${siteConfig.company?.whatsapp || '7406994752'}?text=Hello%20Sobhavi%20Travels`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.signoffLink}
                  >
                    💬 WhatsApp Concierge
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
