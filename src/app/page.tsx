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

  // Homepage SEO FAQs
  const homeFaqs = [
    {
      q: "Why choose Sobhavi Travels over automated booking portals?",
      a: "Unlike impersonal booking aggregators, Sobhavi Travels designs 100% tailor-made luxury itineraries backed by dedicated human concierges. You get negotiated corporate tariffs on luxury 5-star hotels, verified private chauffeur transfers, custom pacing, and real-time WhatsApp coordination (+91 74069 94752) for seamless travel."
    },
    {
      q: "Which destinations do you specialize in?",
      a: "We curate signature domestic journeys across Rajasthan, Kerala, Shimla & Manali, Andaman Islands, and Kashmir, as well as luxury international expeditions to Dubai, Singapore, Bali, Maldives, Thailand, and Vietnam."
    },
    {
      q: "Do you arrange both flights, hotels, and visas together?",
      a: "Yes. Sobhavi Travels is a full-service travel concierge. We handle domestic and international flight ticketing, 5-star hotel and private villa reservations, fast-track visa processing, local chauffeur transfers, and unique private experiences under a single, transparent itinerary."
    },
    {
      q: "How can I get a personalized travel quote?",
      a: "Click 'Plan My Trip' or reach out directly on WhatsApp (+91 74069 94752). Share your destination preference, tentative travel dates, and budget, and our destination specialists will craft a customized itinerary within hours."
    }
  ];

  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "name": "Sobhavi Travels",
        "url": "https://lumina-travel-luxury.vercel.app",
        "telephone": "+91 74069 94752",
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
      },
      {
        "@type": "FAQPage",
        "mainEntity": homeFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  // Filter top 3 blogs for homepage
  const featuredBlogs = blogs.slice(0, 3);

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
                  preload="auto"
                  poster={slide1.posterUrl}
                />
              </div>
            </div>
            <div className={styles.heroOverlay} />
          </div>

          {/* Black Tomato Style Hero: Title, Subtitle, Dual CTAs & Scroll Indicator */}
          <div className={styles.heroContent}>
            <div className={styles.heroTextContainer}>
              <h1 className={styles.heroTitleLarge}>THE LUXURY TRAVEL EXPERTS</h1>
              <p className={styles.heroSubtitle}>
                TAILOR-MADE TRIPS, AWARD-WINNING ESCAPES. EST. 2015.
              </p>
              <div className={styles.heroActionsRow}>
                <a href="#destinations" className={styles.heroBtnOutline}>
                  EXPLORE DESTINATIONS
                </a>
                <Link href="/enquire" className={styles.heroBtnSolid}>
                  PLAN MY TRIP
                </Link>
              </div>
            </div>
          </div>

          {/* Central Scroll Indicator */}
          <a href="#intro" className={styles.heroScrollIndicator} aria-label="Scroll to introduction">
            <span>SCROLL</span>
            <div className={styles.scrollLine} />
          </a>

          {/* Subtle Location & Controls Indicator */}
          <div className={styles.heroLocationIndicator}>
            <div className={styles.heroLocationLeft}>
              <span className={styles.heroLocationDot}></span>
              <span>
                <strong>{activeSlide.name}</strong> ({activeSlide.category}) &mdash; {activeSlide.tagline}
              </span>
            </div>
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
        </section>

        {/* =================================================================
            2. INTRODUCTION — DIRECTLY BELOW HERO (Black Tomato Editorial Style)
            ================================================================= */}
        <section id="intro" className={styles.introSection}>
          <div className="container">
            <div className={styles.introContainer}>
              <h2 className={styles.introHeadline}>
                EVERY JOURNEY STARTS WITH A FEELING
              </h2>
              <div className={styles.introTextWrapper}>
                <p className={styles.introParagraph}>
                  The world is vast, full of wonders. But information engulfs us. See this, do that, don't miss this. It seems the more choice there is, the more overwhelmed we feel. What's more, you're never asked <em>how you want to feel</em>.
                </p>
                <p className={styles.introMuted}>
                  That's not us. <strong>Sobhavi Travels</strong> is a tailor-made luxury travel company that designs fully personalised itineraries &mdash; not templates, not off-the-shelf tours. Whether you're a couple seeking adventure, a multi-generational family exploring together, or a solo traveller chasing something extraordinary, we craft every detail around you.
                </p>
                <p className={styles.introParagraph}>
                  Recognised for bespoke travel excellence &mdash; trusted to deliver tailor-made journeys across India and over 100 global destinations.
                </p>
                <p className={styles.introHighlight}>
                  So let's begin. Let's do something remarkable.
                </p>
                <div>
                  <Link href="/enquire" className={styles.introCtaBtn}>
                    GET IN TOUCH
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
            7. SEO FREQUENTLY ASKED QUESTIONS
            ================================================================= */}
        <section className={styles.homeFaqSection}>
          <div className="container">
            <div className={styles.homeFaqHeader}>
              <span className={styles.eyebrow}>COMMON QUESTIONS</span>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <p className={styles.sectionSubtitle}>
                Everything you need to know about planning your next bespoke journey with Sobhavi Travels.
              </p>
            </div>

            <div className={styles.homeFaqGrid}>
              {homeFaqs.map((faq, idx) => (
                <div key={idx} className={styles.homeFaqCard}>
                  <h3 className={styles.homeFaqQuestion}>{faq.q}</h3>
                  <p className={styles.homeFaqAnswer}>{faq.a}</p>
                </div>
              ))}
            </div>
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
