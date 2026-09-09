"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import SinglePageForm from '@/components/ui/SinglePageForm';
import JourneyCard from '@/components/ui/JourneyCard';
import { popularJourneys } from '@/lib/data';
import { LeisureDestination } from '@/lib/destinationsData';
import styles from './page.module.css';

interface DestinationDetailClientProps {
  destination: LeisureDestination;
}

export default function DestinationDetailClient({ destination }: DestinationDetailClientProps) {
  const galleryImages = (destination.galleryImages && destination.galleryImages.length > 0)
    ? destination.galleryImages
    : [destination.heroImage];

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
    j.destination.toLowerCase().includes(destination.name.toLowerCase()) ||
    destination.name.toLowerCase().includes(j.destination.toLowerCase())
  );

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />

      {/* JSON-LD Schema for Google Rich Snippets */}
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
