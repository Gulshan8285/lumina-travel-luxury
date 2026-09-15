"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import ReviewStrip from '@/components/ui/ReviewStrip';
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

  // 6 Curated premier destination video slides
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
      id: "maldives",
      category: "International",
      name: "Maldives",
      tagline: "Overwater Villas & Pristine Turquoise Atolls",
      videoUrl: "/videos/destinations/maldives.mp4",
      posterUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "dubai",
      category: "International",
      name: "Dubai",
      tagline: "Burj Khalifa & Futuristic Skyline Wonders",
      videoUrl: "/videos/destinations/dubai.mp4",
      posterUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"
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
      id: "shimla-manali",
      category: "Domestic",
      name: "Shimla & Manali",
      tagline: "Snow Peaks & Himalayan Pine Valleys",
      videoUrl: "/videos/destinations/shimla-manali.mp4",
      posterUrl: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=1200&auto=format&fit=crop"
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

    // Slow down camel video (rajasthan) to 0.55x, standard 1.0x for other slides
    if (incomingRef.current) {
      try {
        const isCamel = heroSlides[targetIndex]?.id === 'rajasthan';
        incomingRef.current.playbackRate = isCamel ? 0.55 : 1.0;
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
    }, 1200);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((currentSlide + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, activeChannel, heroSlides.length]);

  useEffect(() => {
    if (videoRef0.current) {
      try {
        const isCamel = heroSlides[channel0Index]?.id === 'rajasthan';
        videoRef0.current.playbackRate = isCamel ? 0.55 : 1.0;
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
      duration: "6N / 7D",
      price: "From ₹38,500 / person",
      inclusions: "Chauffeured Sedan · 4★ Heritage Havelis · Desert Safari",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900&auto=format&fit=crop",
      href: "/domestic#rajasthan"
    },
    {
      name: "Shimla & Manali",
      tagline: "Snow Peaks & Himalayan Pine Valleys",
      duration: "5N / 6D",
      price: "From ₹26,900 / person",
      inclusions: "Private SUV · Valley View Resorts · Solang Excursion",
      image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=900&auto=format&fit=crop",
      href: "/domestic#shimla-manali"
    },
    {
      name: "Kerala",
      tagline: "Tranquil Backwaters & Lush Tea Plantations",
      duration: "5N / 6D",
      price: "From ₹31,200 / person",
      inclusions: "Private AC Houseboat · Munnar Tea Estates · Airport Cabs",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=900&auto=format&fit=crop",
      href: "/domestic#kerala"
    },
    {
      name: "Andaman & Nicobar Islands",
      tagline: "Emerald Lagoons, Coral Reefs & Radhanagar Beach",
      duration: "5N / 6D",
      price: "From ₹44,500 / person",
      inclusions: "Makruzz Cruise Transfers · Beachfront Resorts · Scuba Session",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop",
      href: "/domestic#andaman"
    }
  ];

  const internationalDestinations = [
    {
      name: "Dubai",
      tagline: "Futuristic Skylines, Burj Khalifa & Luxury Marina",
      duration: "4N / 5D",
      price: "From ₹52,900 / person",
      inclusions: "UAE Express Visa · Desert BBQ Safari · Marina Dhow Cruise",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=900&auto=format&fit=crop",
      href: "/international#dubai"
    },
    {
      name: "Singapore",
      tagline: "Gardens by the Bay & Marina Bay Sands",
      duration: "4N / 5D",
      price: "From ₹68,500 / person",
      inclusions: "Singapore Visa · Sentosa Fun Pass · Universal Studios Tickets",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=900&auto=format&fit=crop",
      href: "/international#singapore"
    },
    {
      name: "Bali",
      tagline: "Sacred Temples, Rice Terraces & Private Pool Villas",
      duration: "6N / 7D",
      price: "From ₹48,000 / person",
      inclusions: "Private Pool Villa in Ubud & Seminyak · Nusa Penida Day Tour",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=900&auto=format&fit=crop",
      href: "/international#bali"
    },
    {
      name: "Maldives",
      tagline: "Overwater Pool Villas & Turquoise Coral Lagoons",
      duration: "3N / 4D",
      price: "From ₹95,000 / person",
      inclusions: "All-Inclusive Overwater Villa · Speedboat / Seaplane Transfers",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=900&auto=format&fit=crop",
      href: "/international#maldives"
    }
  ];

  const trustPillars = [
    {
      icon: "👤",
      title: "Real Travel Designers, Not AI",
      desc: "Every route, stay, and private chauffeur is personally vetted by human specialists — not an automated algorithm."
    },
    {
      icon: "⚡",
      title: "Direct 15-Min WhatsApp Support",
      desc: "Zero robotic ticket queues or IVR menus. Chat directly with your dedicated trip coordinator 24/7."
    },
    {
      icon: "🛡️",
      title: "Transparent Itemized Pricing",
      desc: "Complete breakdowns for flights, hotels, taxes, and transfers. Zero hidden agency markups or on-trip surprises."
    },
    {
      icon: "🤝",
      title: "Door-to-Door Ground Care",
      desc: "Airport chauffeurs greeting you with name-boards, express visa updates, and 24/7 dedicated on-call assistance."
    }
  ];

  const coreTravelServices = [
    {
      title: "Express Visa Services",
      tag: "99.4% Approval Rate",
      desc: "Fast-track tourist & business visas for Dubai, Singapore, Schengen, UK & Bali. Complete document screening with zero hassle.",
      icon: "🛂",
      pills: ["Schengen & Dubai Visa", "Hassle-Free Verification", "1-on-1 Document Review"],
      href: "/visa"
    },
    {
      title: "Flight Booking & Upgrades",
      tag: "Corporate & Group Fares",
      desc: "Direct flight reservations, group seating, meal preferences, excess baggage coordination and instant cancellation support.",
      icon: "✈️",
      pills: ["Special Agent Fares", "Instant Rescheduling", "Web Check-In Assistance"],
      href: "/flights"
    },
    {
      title: "Handpicked Luxury Hotels",
      tag: "Vetted 4★ & 5★ Stays",
      desc: "Authentic heritage havelis, luxury pool villas, and top-rated international resorts personally inspected for comfort and hygiene.",
      icon: "🏨",
      pills: ["Early Check-In Priority", "Complimentary Breakfasts", "Authentic Heritage Stays"],
      href: "/hotels"
    },
    {
      title: "Bespoke Honeymoon Packages",
      tag: "Romance & Privacy",
      desc: "Private pool villas, candlelit beach dinners, flower bed decorations, and secluded scenic excursions tailored for couples.",
      icon: "💍",
      pills: ["Overwater Villas", "Couples Spa & Dinners", "Private Transfers Only"],
      href: "/honeymoon"
    },
    {
      title: "Corporate & Group Tours",
      tag: "Seamless Coordination",
      desc: "Custom group itineraries, private luxury coaches, conference venue bookings, and dedicated on-ground tour managers.",
      icon: "👥",
      pills: ["Custom Group Itineraries", "Private Luxury Coaches", "Dedicated Tour Manager"],
      href: "/group-tours"
    }
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
                <video
                  ref={videoRef0}
                  src={slide0.videoUrl}
                  className={styles.heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onLoadedMetadata={(e) => {
                    e.currentTarget.playbackRate = slide0.id === 'rajasthan' ? 0.55 : 1.0;
                  }}
                  onPlay={(e) => {
                    e.currentTarget.playbackRate = slide0.id === 'rajasthan' ? 0.55 : 1.0;
                  }}
                />
              </div>

              {/* Channel 1 */}
              <div
                className={`${styles.heroVideoChannel} ${activeChannel === 1 ? styles.channelActive : styles.channelInactive}`}
              >
                <video
                  ref={videoRef1}
                  src={slide1.videoUrl}
                  className={styles.heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onLoadedMetadata={(e) => {
                    e.currentTarget.playbackRate = slide1.id === 'rajasthan' ? 0.55 : 1.0;
                  }}
                  onPlay={(e) => {
                    e.currentTarget.playbackRate = slide1.id === 'rajasthan' ? 0.55 : 1.0;
                  }}
                />
              </div>
            </div>
            <div className={styles.heroOverlay} />
          </div>

          {/* Hero Content */}
          <div className={styles.heroContent}>
            <div className={styles.heroTextContainer}>
              <span className={styles.heroEyebrow}>
                <span>✨</span> Bespoke Luxury Holidays &amp; Expeditions
              </span>
              <h1 className={styles.heroTitleLarge}>ESCAPE THE ROUTINE</h1>
              <p className={styles.heroSubtitle}>
                Handcrafted journeys curated by <strong>real travel designers</strong>. From <strong>seamless visas &amp; private transfers</strong> to <strong>vetted 5★ boutique stays</strong> &mdash; planned personally for you with zero guesswork.
              </p>

              {/* Trust stats bar */}
              <div className={styles.heroTrustBar}>
                <span className={styles.heroTrustItem}>
                  <span className={styles.heroTrustStar}>★</span> <strong>4.9/5</strong> (420+ Google Reviews)
                </span>
                <span className={styles.heroTrustItem}>
                  ⚡ <strong>15-Min Response</strong> on WhatsApp
                </span>
                <span className={styles.heroTrustItem}>
                  🛡️ <strong>100% Verified</strong> Stays &amp; Drivers
                </span>
                <span className={styles.heroTrustItem}>
                  ₹ <strong>No Hidden Fees</strong>
                </span>
              </div>

              {/* Dual Hero CTA Buttons */}
              <div className={styles.heroActionsRow}>
                <Link href="/enquire" className={styles.heroBtnSolid}>
                  Plan Your Bespoke Trip &rarr;
                </Link>
                <a
                  href="https://wa.me/917406994752?text=Hi%20Sobhavi%20Travels,%20I'd%20like%20to%20plan%20a%20trip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.heroBtnOutline}
                >
                  💬 Chat on WhatsApp (+91 74069 94752)
                </a>
              </div>

              {/* Trending destination pills */}
              <div className={styles.heroPillsRow}>
                <span className={styles.heroPillsLabel}>Popular Now:</span>
                <Link href="/domestic#rajasthan" className={styles.heroPill}>Rajasthan</Link>
                <Link href="/domestic#kerala" className={styles.heroPill}>Kerala</Link>
                <Link href="/international#dubai" className={styles.heroPill}>Dubai</Link>
                <Link href="/international#bali" className={styles.heroPill}>Bali</Link>
                <Link href="/international#maldives" className={styles.heroPill}>Maldives</Link>
              </div>
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
              <span className={styles.introEyebrow}>EFFORTLESS TRAVEL PLANNING</span>
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
            2B. WHY REAL TRAVELLERS CHOOSE SOBHAVI (Authentic Human Difference)
            ================================================================= */}
        <section className={styles.trustSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>THE HUMAN DIFFERENCE</span>
              <h2 className={styles.sectionTitle}>WHY REAL TRAVELLERS CHOOSE US</h2>
              <p className={styles.sectionSubtitle}>
                No auto-generated robotic packages. Every journey is hand-crafted with <strong>direct human accountability</strong>.
              </p>
            </div>

            <div className={styles.trustGrid}>
              {trustPillars.map((pillar, idx) => (
                <div key={idx} className={styles.trustCard}>
                  <span className={styles.trustIcon}>{pillar.icon}</span>
                  <h3 className={styles.trustCardTitle}>{pillar.title}</h3>
                  <p className={styles.trustCardDesc}>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
            2C. 5 CORE BESPOKE SERVICES SHOWCASE
            ================================================================= */}
        <section className={styles.homeCoreSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>END-TO-END CONCIERGE</span>
              <h2 className={styles.sectionTitle}>COMPLETE TRAVEL SERVICES</h2>
              <p className={styles.sectionSubtitle}>
                From express visas to private luxury stays &mdash; explore our core offerings.
              </p>
            </div>

            <div className={styles.homeCoreGrid}>
              {coreTravelServices.map((service, idx) => (
                <Link key={idx} href={service.href} className={styles.homeCoreCard}>
                  <div>
                    <div className={styles.homeCoreHeader}>
                      <span className={styles.homeCoreIcon}>{service.icon}</span>
                      <span className={styles.homeCoreBadge}>{service.tag}</span>
                    </div>
                    <h3 className={styles.homeCoreTitle}>{service.title}</h3>
                    <p className={styles.homeCoreDesc}>{service.desc}</p>
                    <div className={styles.homeCorePills}>
                      {service.pills.map((pill, pIdx) => (
                        <span key={pIdx} className={styles.homeCorePill}>{pill}</span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.homeCoreFooter}>
                    <span className={styles.homeCoreLink}>
                      <span>Explore In-Depth Guide</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </Link>
              ))}
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
                        <div className={styles.destCardBadgeRow}>
                          <span className={styles.destDurationBadge}>{dest.duration}</span>
                          <span className={styles.destPriceBadge}>{dest.price}</span>
                        </div>
                        <h3 className={styles.destCardName}>{dest.name}</h3>
                        <p className={styles.destCardTagline}>{dest.tagline}</p>
                        <p className={styles.destInclusions}>{dest.inclusions}</p>
                        <span className={styles.destCardLinkText}>View Itinerary Details &rarr;</span>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Explore All Destinations Button */}
            <div className={styles.exploreAllWrapper}>
              <Link href="/destinations" className={styles.exploreAllBtn}>
                <span>EXPLORE ALL DESTINATIONS</span>
                <span className={styles.exploreArrow}>&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* =================================================================
            5. VERIFIED GOOGLE & REAL HUMAN REVIEWS
            ================================================================= */}
        <ReviewStrip />



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
                        <span className={styles.blogCategoryBadge}>{post.category}</span>
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
