"use client";

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import SinglePageForm from '@/components/ui/SinglePageForm';
import JourneyCard from '@/components/ui/JourneyCard';
import { featuredDestinations, popularJourneys } from '@/lib/data';
import { getSiteConfig } from '@/lib/siteConfig';
import { getDestinationBySlug, FamousPlace, DestinationFaq } from '@/lib/destinationsData';
import styles from './page.module.css';

interface NormalizedDestination {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  videoUrl?: string;
  famousPlaces: FamousPlace[];
  signatureExperiences: string[];
  hotels: string[];
  bestTime: string;
  duration?: string;
  currency: string;
  editorialArticle: {
    title: string;
    intro: string;
    body: string[];
    quote: string;
    quoteAuthor: string;
  };
  faqs: DestinationFaq[];
}

export default function DestinationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  // 1. Check rich leisure destinations first
  const leisureDest = getDestinationBySlug(slug);

  let destination: NormalizedDestination | undefined;

  if (leisureDest) {
    destination = {
      slug: leisureDest.slug,
      name: leisureDest.name,
      tagline: leisureDest.tagline,
      description: leisureDest.description,
      heroImage: leisureDest.heroImage,
      galleryImages: leisureDest.galleryImages,
      videoUrl: undefined,
      famousPlaces: leisureDest.famousPlaces || [],
      signatureExperiences: leisureDest.signatureExperiences || [],
      hotels: leisureDest.hotels || [],
      bestTime: leisureDest.bestTime || "October to March",
      duration: leisureDest.duration || "4 to 7 Days",
      currency: leisureDest.currency || "INR",
      editorialArticle: leisureDest.editorialArticle,
      faqs: leisureDest.faqs || []
    };
  } else {
    // 2. Fallback to featured destinations in data.ts
    const legacyDest = featuredDestinations.find(
      d => d.slug.toLowerCase() === slug.toLowerCase()
    );

    if (legacyDest) {
      destination = {
        slug: legacyDest.slug,
        name: legacyDest.name,
        tagline: legacyDest.description,
        description: legacyDest.description,
        heroImage: legacyDest.imageUrl,
        galleryImages: legacyDest.images || [legacyDest.imageUrl],
        videoUrl: legacyDest.videoUrl || legacyDest.heroVideo,
        famousPlaces: [],
        signatureExperiences: legacyDest.experiences || ["5-Star Curated Stays", "Chauffeured Transfers", "Private Guided Excursions"],
        hotels: legacyDest.hotels || ["Handpicked Luxury Palaces & Resorts"],
        bestTime: legacyDest.bestTime || "Year-Round",
        currency: legacyDest.currency || "INR / Local",
        editorialArticle: {
          title: `Discover ${legacyDest.name} in Unmatched Luxury`,
          intro: legacyDest.article.intro,
          body: legacyDest.article.body,
          quote: legacyDest.article.quote,
          quoteAuthor: legacyDest.article.quoteAuthor
        },
        faqs: [
          {
            q: `What is the best time to plan a luxury holiday to ${legacyDest.name}?`,
            a: `${legacyDest.bestTime || 'Year-round'}, depending on preferred sightseeing conditions and season celebrations. Our specialists will customize every detail to match your preferred travel dates.`
          },
          {
            q: `What premium services are included with Sobhavi Travels in ${legacyDest.name}?`,
            a: `We provide private chauffeur-driven luxury sedans/SUVs, pre-arranged VIP entry passes to monuments, curated 5-star hotel accommodations with complimentary upgrades where available, and 24/7 concierge support.`
          },
          {
            q: `Can this ${legacyDest.name} itinerary be customized for families or couples?`,
            a: `Every journey crafted by Sobhavi Travels is 100% bespoke. Whether you are traveling as a couple, family with young children, or private executive group, our concierge personalizes every transfer, meal reservation, and activity.`
          }
        ]
      };
    } else {
      // 3. Fallback to dynamic siteConfig if present
      const config = getSiteConfig();
      const allCustom = [
        ...(config.domesticDestinations || []),
        ...(config.internationalDestinations || [])
      ];
      const match = allCustom.find(d => d.id?.toLowerCase() === slug.toLowerCase());
      if (match) {
        destination = {
          slug: match.id,
          name: match.name,
          tagline: match.tagline || match.overview,
          description: match.overview || match.tagline,
          heroImage: match.image,
          galleryImages: [
            match.image,
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
          ],
          videoUrl: match.videoUrl,
          famousPlaces: [],
          signatureExperiences: (match.inclusions && match.inclusions.length > 0)
            ? match.inclusions
            : ["5-Star Luxury Stays", "Private Chauffeur Transfers", "VIP Curated Sightseeing"],
          hotels: ["Selected Luxury 5-Star Properties", "Boutique Heritage Suites"],
          bestTime: match.bestTime || "Year-Round",
          currency: "INR / Local",
          editorialArticle: {
            title: `Experience the Timeless Allure of ${match.name}`,
            intro: match.overview || `${match.name} offers magnificent experiences, luxury stays, and private bespoke itineraries designed just for you.`,
            body: [
              match.overview || `Discover the finest leisure treasures of ${match.name}.`,
              `With Sobhavi Travels, enjoy private chauffeured transfers, 5-star handpicked hotel stays, and personalized care at every step.`
            ],
            quote: `An extraordinary journey in ${match.name} curated to pure perfection.`,
            quoteAuthor: "Sobhavi Travels Private Guest"
          },
          faqs: [
            {
              q: `How do I book a private holiday package to ${match.name}?`,
              a: `Simply fill out the enquiry form on this page or connect directly with our specialist at +91 7406994752. We deliver custom day-wise quotes within hours.`
            }
          ]
        };
      }
    }
  }

  if (!destination) {
    notFound();
  }

  // Gallery images with fallback
  const galleryImages = (destination.galleryImages && destination.galleryImages.length > 0)
    ? destination.galleryImages
    : [
        destination.heroImage,
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
      ];

  const [activeImage, setActiveImage] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // First FAQ open by default

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(prev => (prev === idx ? null : idx));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage(prev => (prev + 1) % galleryImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  // Find journeys for this destination
  const relatedJourneys = popularJourneys.filter(j =>
    j.destination.toLowerCase().includes(destination!.name.toLowerCase()) ||
    destination!.name.toLowerCase().includes(j.destination.toLowerCase())
  );

  const videoSource = destination.videoUrl;

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />

      {/* JSON-LD Schema for SEO & FAQPage Rich Snippets */}
      {destination.faqs && destination.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": destination.faqs.map(f => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a
                }
              }))
            })
          }}
        />
      )}

      <main className={styles.mainWrapper}>
        {/* === 5-IMAGE HERO SLIDESHOW === */}
        <section className={styles.hero}>
          <div className={styles.heroImageWrapper}>
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`${styles.heroImage} ${i === activeImage ? styles.active : ''}`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
            <div className={styles.heroOverlay} />
          </div>

          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>SOBHAVI BESPOKE COLLECTION \u00B7 LEISURE DESTINATIONS</span>
            <h1 className={styles.heroTitle}>{destination.name}</h1>
            <p className={styles.heroTagline}>{destination.tagline || destination.description}</p>

            <div className={styles.heroActions}>
              <button onClick={scrollToEnquiry} className={styles.primaryHeroBtn}>
                Plan Your {destination.name} Escape
              </button>
              <a href="tel:+917406994752" className={styles.secondaryHeroBtn}>
                Call Concierge: +91 74069 94752
              </a>
            </div>
          </div>

          {/* 5-Image Thumbnail Strip */}
          <div className={styles.thumbnailStrip}>
            {galleryImages.map((img, i) => (
              <button
                key={i}
                className={`${styles.thumbnail} ${i === activeImage ? styles.activeThumbnail : ''}`}
                onClick={() => setActiveImage(i)}
                style={{ backgroundImage: `url(${img})` }}
                aria-label={`View photograph ${i + 1} of ${destination.name}`}
              >
                <span className={styles.thumbNumber}>0{i + 1}</span>
              </button>
            ))}
          </div>
        </section>

        {/* === FAMOUS LEISURE CITIES & SPOTS GRID === */}
        {destination.famousPlaces && destination.famousPlaces.length > 0 && (
          <section className={styles.placesSection}>
            <div className="container">
              <div className={styles.placesHeader}>
                <span className={styles.placesEyebrow}>SIGNATURE ATTRACTIONS & HUBS</span>
                <h2 className={styles.placesTitle}>Iconic Leisure Cities & Spots in {destination.name}</h2>
                <p className={styles.placesSubtitle}>
                  Explore the celebrated cities, cultural wonders, and breathtaking natural escapes curated for our private travelers across {destination.name}.
                </p>
              </div>

              <div className={styles.placesGrid}>
                {destination.famousPlaces.map((place, idx) => (
                  <div key={idx} className={styles.placeCard}>
                    <div className={styles.placeImageWrapper}>
                      <img
                        src={place.image}
                        alt={place.name}
                        className={styles.placeImg}
                        loading="lazy"
                      />
                      <span className={styles.placeBadge}>#{idx + 1} Leisure Spot</span>
                    </div>
                    <div className={styles.placeContent}>
                      <h3 className={styles.placeName}>{place.name}</h3>
                      <p className={styles.placeTagline}>{place.tagline}</p>

                      {place.highlights && place.highlights.length > 0 && (
                        <div className={styles.placeHighlights}>
                          <span className={styles.highlightsLabel}>Key Highlights:</span>
                          <ul className={styles.highlightsList}>
                            {place.highlights.map((hl, hIdx) => (
                              <li key={hIdx} className={styles.highlightItem}>
                                <span className={styles.goldDot}>✦</span>
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <button
                        onClick={scrollToEnquiry}
                        className={styles.placeEnquireBtn}
                      >
                        Plan {place.name} Itinerary &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* === EDITORIAL ARTICLE SECTION === */}
        <section className={styles.articleSection}>
          <div className="container">
            <div className={styles.articleGrid}>

              {/* Main Editorial Story */}
              <article className={styles.articleMain}>
                <span className={styles.articleEyebrow}>DESTINATION PERSPECTIVE</span>
                <h2 className={styles.articleHeading}>{destination.editorialArticle.title}</h2>
                <p className={styles.articleIntro}>{destination.editorialArticle.intro}</p>

                {destination.editorialArticle.body.map((para, i) => (
                  <p key={i} className={styles.articleBody}>{para}</p>
                ))}

                {/* Luxury Serif Quote */}
                <blockquote className={styles.blockquote}>
                  <p className={styles.quoteText}>"{destination.editorialArticle.quote}"</p>
                  <cite className={styles.quoteAuthor}>— {destination.editorialArticle.quoteAuthor}</cite>
                </blockquote>

                {/* Signature Experiences Grid */}
                <div className={styles.experiencesBlock}>
                  <h3 className={styles.blockTitle}>Curated Private Experiences</h3>
                  <div className={styles.experiencesGrid}>
                    {destination.signatureExperiences.map((exp, idx) => (
                      <div key={idx} className={styles.expCard}>
                        <span className={styles.expNumber}>0{idx + 1}</span>
                        <h4 className={styles.expName}>{exp}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {/* Sidebar Essentials Card */}
              <aside className={styles.articleSidebar}>
                <div className={styles.sidebarCard}>
                  <span className={styles.sidebarBadge}>QUICK ESSENTIALS</span>
                  <h3 className={styles.sidebarTitle}>{destination.name} at a Glance</h3>

                  {destination.bestTime && (
                    <div className={styles.essentialRow}>
                      <span className={styles.essentialLabel}>Best Time to Visit</span>
                      <span className={styles.essentialValue}>{destination.bestTime}</span>
                    </div>
                  )}

                  {destination.duration && (
                    <div className={styles.essentialRow}>
                      <span className={styles.essentialLabel}>Recommended Duration</span>
                      <span className={styles.essentialValue}>{destination.duration}</span>
                    </div>
                  )}

                  {destination.currency && (
                    <div className={styles.essentialRow}>
                      <span className={styles.essentialLabel}>Currency</span>
                      <span className={styles.essentialValue}>{destination.currency}</span>
                    </div>
                  )}

                  <div className={styles.hotelsSection}>
                    <h4 className={styles.subSectionTitle}>Recommended Luxury Stays</h4>
                    <ul className={styles.hotelList}>
                      {destination.hotels.map((hotel, idx) => (
                        <li key={idx} className={styles.hotelItem}>
                          <span className={styles.goldStar}>✦</span>
                          <span>{hotel}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.sidebarDirectContact}>
                    <p className={styles.directContactPrompt}>Ready to speak with our destination specialist?</p>
                    <a
                      href={`https://wa.me/917406994752?text=Hello!%20I%20am%20interested%20in%20planning%20a%20luxury%20holiday%20to%20${encodeURIComponent(destination.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.sidebarWaBtn}
                    >
                      WhatsApp: +91 74069 94752
                    </a>
                    <a href="tel:+917406994752" className={styles.sidebarCallBtn}>
                      Call +91 74069 94752
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* === INTERACTIVE ACCORDION FAQS SECTION === */}
        {destination.faqs && destination.faqs.length > 0 && (
          <section className={styles.faqSection}>
            <div className="container">
              <div className={styles.faqHeader}>
                <span className={styles.faqEyebrow}>KNOWLEDGE & BESPOKE PLANNING</span>
                <h2 className={styles.faqTitle}>Frequently Asked Questions — {destination.name}</h2>
                <p className={styles.faqSubtitle}>
                  Essential insider insights for traveling to {destination.name} with bespoke luxury, safety, and seamless arrangements.
                </p>
              </div>

              <div className={styles.faqAccordion}>
                {destination.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                    >
                      <button
                        type="button"
                        className={styles.faqQuestionBtn}
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-ans-${idx}`}
                        id={`faq-btn-${idx}`}
                      >
                        <span className={styles.faqQuestionText}>{faq.q}</span>
                        <span className={styles.faqIcon} aria-hidden="true">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>

                      <div
                        id={`faq-ans-${idx}`}
                        role="region"
                        aria-labelledby={`faq-btn-${idx}`}
                        className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerVisible : ''}`}
                      >
                        <div className={styles.faqAnswerInner}>
                          <p>{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={styles.faqContactBox}>
                <p className={styles.faqContactText}>
                  Have more specific questions about planning your trip to {destination.name}?
                </p>
                <div className={styles.faqContactActions}>
                  <button onClick={scrollToEnquiry} className={styles.faqContactBtn}>
                    Ask Our Travel Planner
                  </button>
                  <a
                    href={`https://wa.me/917406994752?text=Hello!%20I%20have%20questions%20regarding%20travel%20to%20${encodeURIComponent(destination.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.faqContactWa}
                  >
                    Quick WhatsApp Support
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* === 5-PHOTO VISUAL GALLERY SECTION === */}
        {galleryImages.length > 0 && (
          <section className={styles.gallerySection}>
            <div className="container">
              <div className={styles.galleryHeader}>
                <span className={styles.galleryEyebrow}>VISUAL JOURNAL</span>
                <h2 className={styles.galleryTitle}>{destination.name} in Pictures</h2>
              </div>
              <div className={styles.galleryGrid}>
                {galleryImages.map((img, idx) => (
                  <div key={idx} className={styles.galleryCard}>
                    <img
                      src={img}
                      alt={`${destination.name} photograph ${idx + 1}`}
                      className={styles.galleryImg}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* === CINEMATIC VIDEO SECTION (IF AVAILABLE) === */}
        {videoSource && (
          <section className={styles.videoSection}>
            <div className="container">
              <div className={styles.videoHeader}>
                <span className={styles.videoEyebrow}>SENSORY DISCOVERY</span>
                <h2 className={styles.videoTitle}>Feel the Spirit of {destination.name}</h2>
                <p className={styles.videoSubtitle}>Immerse yourself in the sights and serenity before you arrive.</p>
              </div>
              <div className={styles.videoWrapper}>
                <video
                  src={videoSource}
                  poster={galleryImages[0]}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  className={styles.video}
                >
                  <source src={videoSource} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        )}

        {/* === RELATED SIGNATURE JOURNEYS === */}
        {relatedJourneys.length > 0 && (
          <section className={styles.journeysSection}>
            <div className="container">
              <div className={styles.journeysHeader}>
                <span className={styles.journeysEyebrow}>CURATED ITINERARIES</span>
                <h2 className={styles.journeysTitle}>Signature Journeys in {destination.name}</h2>
              </div>
              <div className={styles.journeysGrid}>
                {relatedJourneys.map(journey => (
                  <JourneyCard key={journey.slug} {...journey} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* === PROMINENT HIGHLIGHTED ENQUIRY FORM BOX === */}
        <section id="enquiry-section" className={styles.formSectionWrapper}>
          <div className="container">
            <SinglePageForm initialDestination={destination.name} />
          </div>
        </section>
      </main>
    </>
  );
}
