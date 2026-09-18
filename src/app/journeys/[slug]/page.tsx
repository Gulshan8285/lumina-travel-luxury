"use client";

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import EnquireCtaBanner from '@/components/ui/EnquireCtaBanner';
import { popularJourneys } from '@/lib/data';
import styles from './page.module.css';

export default function JourneyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const journey = popularJourneys.find(j => j.slug === slug);
  
  if (!journey) {
    notFound();
  }

  // Active Tab state (Itinerary, Inclusions & Exclusions, Terms & Conditions, Cancellation Policy)
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'terms' | 'cancellation'>('itinerary');

  // Quick Enquiry Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    travellers: '2 Adults'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          destination: journey.destination,
          journey: journey.name,
          duration: journey.duration
        })
      });
      setFormSubmitted(true);
    } catch {
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Ensure 5 gallery images exist with safe fallback
  const galleryImages = (journey.images && journey.images.length > 0)
    ? journey.images
    : [
        journey.imageUrl,
        "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1976&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
      ];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage(prev => (prev + 1) % galleryImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  return (
    <>
      <Navbar />
      
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
            <span className={styles.eyebrow}>SIGNATURE JOURNEY &middot; {journey.destination}</span>
            <h1 className={styles.heroTitle}>{journey.name}</h1>
            <p className={styles.heroTagline}>{journey.subtitle || journey.duration} &middot; Bespoke Private Itinerary</p>
            
            <div className={styles.heroActions}>
              <Link 
                href={`/enquire?destination=${encodeURIComponent(journey.destination)}&duration=${encodeURIComponent(journey.duration)}&service=${encodeURIComponent(journey.name)}`}
                className={styles.primaryHeroBtn}
              >
                Book / Enquire Now &rarr;
              </Link>
              <a 
                href={`https://wa.me/917406994752?text=${encodeURIComponent(`Hello! I want to enquire about the ${journey.name} (${journey.price}) itinerary.`)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.secondaryHeroBtn}
              >
                WhatsApp 7406994752
              </a>
            </div>
          </div>

          {/* Floating Price Badge in Top/Bottom corner */}
          <div className={styles.heroPriceBadge}>
            <span className={styles.priceBadgeLabel}>BEST PRICE GUARANTEE</span>
            <span className={styles.priceBadgeValue}>{journey.price}</span>
          </div>

          {/* 5-Image Thumbnail Strip */}
          <div className={styles.thumbnailStrip}>
            {galleryImages.map((img, i) => (
              <button
                key={i}
                className={`${styles.thumbnail} ${i === activeImage ? styles.activeThumbnail : ''}`}
                onClick={() => setActiveImage(i)}
                style={{ backgroundImage: `url(${img})` }}
                aria-label={`View photo ${i + 1} of ${journey.name}`}
              >
                <span className={styles.thumbNumber}>0{i + 1}</span>
              </button>
            ))}
          </div>
        </section>

        {/* === PACKAGE OVERVIEW & INTERACTIVE TABS SECTION (Image 2 Style) === */}
        <section className={styles.packageDetailsSection}>
          <div className="container">
            
            {/* Header Title & Route Summary */}
            <div className={styles.packageHeaderBox}>
              <h2 className={styles.packageMainTitle}>
                {journey.name} {journey.subtitle ? `(${journey.subtitle})` : ''} - {journey.duration}
              </h2>

              {/* Package Category Options Badges */}
              {journey.packageOptions && journey.packageOptions.length > 0 && (
                <div className={styles.categoryPillsRow}>
                  {journey.packageOptions.map((opt, idx) => (
                    <div key={idx} className={styles.categoryPill}>
                      <span className={styles.categoryPillName}>{opt.category}:</span>
                      <strong className={styles.categoryPillPrice}>{opt.price}</strong>
                      {opt.details && <span className={styles.categoryPillDetails}>({opt.details})</span>}
                    </div>
                  ))}
                </div>
              )}

              {/* Price Includes Summary Line */}
              {journey.priceIncludesText && (
                <div className={styles.priceIncludesSummary}>
                  <strong>Price Includes:</strong> {journey.priceIncludesText}
                </div>
              )}

              {/* Horizontal Tabs Bar */}
              <div className={styles.tabsNav} role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'itinerary'}
                  className={`${styles.tabBtn} ${activeTab === 'itinerary' ? styles.activeTabBtn : ''}`}
                  onClick={() => setActiveTab('itinerary')}
                >
                  🗺️ Itinerary
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'inclusions'}
                  className={`${styles.tabBtn} ${activeTab === 'inclusions' ? styles.activeTabBtn : ''}`}
                  onClick={() => setActiveTab('inclusions')}
                >
                  ✓ Inclusions &amp; Exclusions
                </button>
                {journey.termsAndConditions && journey.termsAndConditions.length > 0 && (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'terms'}
                    className={`${styles.tabBtn} ${activeTab === 'terms' ? styles.activeTabBtn : ''}`}
                    onClick={() => setActiveTab('terms')}
                  >
                    📋 Terms &amp; Conditions
                  </button>
                )}
                {journey.cancellationPolicy && journey.cancellationPolicy.length > 0 && (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'cancellation'}
                    className={`${styles.tabBtn} ${activeTab === 'cancellation' ? styles.activeTabBtn : ''}`}
                    onClick={() => setActiveTab('cancellation')}
                  >
                    🔄 Cancellation Policy
                  </button>
                )}
              </div>
            </div>

            {/* Grid Layout: Main Tab Content + Sticky Right Booking Widget */}
            <div className={styles.tabContentGrid}>
              
              {/* Left Column: Tab Content */}
              <div className={styles.tabMainContent}>
                
                {/* TAB 1: ITINERARY */}
                {activeTab === 'itinerary' && (
                  <div className={styles.tabPanel}>
                    <div className={styles.dayCardsList}>
                      {journey.itinerary.map((day, idx) => (
                        <article key={idx} className={styles.dayCard}>
                          <div className={styles.dayCardHeader}>
                            <span className={styles.dayNumberBadge}>{day.day}</span>
                            <h3 className={styles.dayCardTitle}>{day.title}</h3>
                          </div>
                          
                          <p className={styles.dayCardDesc}>{day.desc}</p>

                          {/* Sightseeing Included Tags */}
                          {day.sightseeing && day.sightseeing.length > 0 && (
                            <div className={styles.sightseeingBox}>
                              <span className={styles.sightseeingLabel}>Sight Seeing Included:</span>
                              <div className={styles.sightseeingTags}>
                                {day.sightseeing.map((place, pIdx) => (
                                  <span key={pIdx} className={styles.sightseeingTag}>
                                    📍 {place}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Transfer Route Tag */}
                          {day.transfers && (
                            <div className={styles.transferRow}>
                              <span className={styles.transferIcon}>🚗</span>
                              <span><strong>Transit:</strong> {day.transfers}</span>
                            </div>
                          )}

                          {/* Meals Inclusions Bar */}
                          {day.meals && (
                            <div className={styles.mealsBar}>
                              <div className={`${styles.mealItem} ${day.meals.breakfast ? styles.mealIncluded : styles.mealExcluded}`}>
                                <span className={styles.mealDot}>{day.meals.breakfast ? '✓' : '✕'}</span>
                                <span>Breakfast: <strong>{day.meals.breakfast ? 'Included' : 'Not Included'}</strong></span>
                              </div>
                              <div className={`${styles.mealItem} ${day.meals.lunch ? styles.mealIncluded : styles.mealExcluded}`}>
                                <span className={styles.mealDot}>{day.meals.lunch ? '✓' : '✕'}</span>
                                <span>Lunch: <strong>{day.meals.lunch ? 'Included' : 'Not Included'}</strong></span>
                              </div>
                              <div className={`${styles.mealItem} ${day.meals.dinner ? styles.mealIncluded : styles.mealExcluded}`}>
                                <span className={styles.mealDot}>{day.meals.dinner ? '✓' : '✕'}</span>
                                <span>Dinner: <strong>{day.meals.dinner ? 'Included' : 'Not Included'}</strong></span>
                              </div>
                            </div>
                          )}
                        </article>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 2: INCLUSIONS & EXCLUSIONS */}
                {activeTab === 'inclusions' && (
                  <div className={styles.tabPanel}>
                    <div className={styles.inclusionsGrid}>
                      <div className={styles.inclusionsBox}>
                        <h3 className={styles.inclusionsBoxTitle}>
                          <span className={styles.boxIconGreen}>✓</span> Package Inclusions
                        </h3>
                        <ul className={styles.inclusionsList}>
                          {journey.included.map((item, idx) => (
                            <li key={idx} className={styles.includedRow}>
                              <span className={styles.checkIcon}>✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.exclusionsBox}>
                        <h3 className={styles.exclusionsBoxTitle}>
                          <span className={styles.boxIconRed}>✕</span> Package Exclusions
                        </h3>
                        <ul className={styles.exclusionsList}>
                          {journey.notIncluded.map((item, idx) => (
                            <li key={idx} className={styles.excludedRow}>
                              <span className={styles.crossIcon}>✕</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: TERMS & CONDITIONS */}
                {activeTab === 'terms' && journey.termsAndConditions && (
                  <div className={styles.tabPanel}>
                    <div className={styles.policyCard}>
                      <h3 className={styles.policyTitle}>Terms and Conditions</h3>
                      <ul className={styles.policyList}>
                        {journey.termsAndConditions.map((term, idx) => (
                          <li key={idx} className={styles.policyItem}>
                            <span className={styles.policyBullet}>•</span>
                            <span>{term}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* TAB 4: CANCELLATION POLICY */}
                {activeTab === 'cancellation' && journey.cancellationPolicy && (
                  <div className={styles.tabPanel}>
                    <div className={styles.policyCard}>
                      <h3 className={styles.policyTitle}>Cancellation Policy</h3>
                      <ul className={styles.policyList}>
                        {journey.cancellationPolicy.map((rule, idx) => (
                          <li key={idx} className={styles.policyItem}>
                            <span className={styles.policyBullet}>•</span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Sticky Quick Enquiry & Booking Box */}
              <aside className={styles.stickyBookingCol}>
                <div className={styles.bookingCard}>
                  <div className={styles.bookingCardHeader}>
                    <span className={styles.bookingBadge}>INSTANT TRAVEL QUOTE</span>
                    <h3 className={styles.bookingTitle}>Plan {journey.destination}</h3>
                    <div className={styles.bookingPrice}>{journey.price}</div>
                  </div>

                  {formSubmitted ? (
                    <div className={styles.bookingSuccessBox}>
                      <h4>✦ Enquiry Received!</h4>
                      <p>Our travel specialist will contact you on WhatsApp with the complete itemized quote and PDF itinerary.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className={styles.quickForm}>
                      <div className={styles.formField}>
                        <label className={styles.formLabel}>Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className={styles.formInput}
                        />
                      </div>

                      <div className={styles.formField}>
                        <label className={styles.formLabel}>WhatsApp / Mobile *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className={styles.formInput}
                        />
                      </div>

                      <div className={styles.formField}>
                        <label className={styles.formLabel}>Email Address</label>
                        <input
                          type="email"
                          placeholder="yourname@gmail.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className={styles.formInput}
                        />
                      </div>

                      <div className={styles.formRow}>
                        <div className={styles.formField}>
                          <label className={styles.formLabel}>Travel Date</label>
                          <input
                            type="date"
                            value={formData.date}
                            onChange={e => setFormData({ ...formData, date: e.target.value })}
                            className={styles.formInput}
                          />
                        </div>
                        <div className={styles.formField}>
                          <label className={styles.formLabel}>Guests</label>
                          <select
                            value={formData.travellers}
                            onChange={e => setFormData({ ...formData, travellers: e.target.value })}
                            className={styles.formSelect}
                          >
                            <option value="2 Adults">2 Adults</option>
                            <option value="Family (3-4)">Family (3-4)</option>
                            <option value="Group (5+)">Group (5+)</option>
                            <option value="Solo">Solo</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={styles.submitEnquiryBtn}
                      >
                        {isSubmitting ? "Sending..." : "✦ Get Custom Quote & PDF →"}
                      </button>

                      <a
                        href={`https://wa.me/917406994752?text=${encodeURIComponent(`Hello! I want a quote for ${journey.name} (${journey.duration}).`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.quickWaBtn}
                      >
                        💬 Instant WhatsApp Specialist
                      </a>
                    </form>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* === EDITORIAL ARTICLE SECTION === */}
        <section className={styles.articleSection}>
          <div className="container">
            <div className={styles.articleGrid}>
              <article className={styles.articleMain}>
                <span className={styles.articleEyebrow}>THE EXPERIENCE</span>
                <p className={styles.articleIntro}>{journey.article.intro}</p>
                
                {journey.article.body.map((para, i) => (
                  <p key={i} className={styles.articleBody}>{para}</p>
                ))}

                {/* Luxury Serif Quote */}
                <blockquote className={styles.blockquote}>
                  <p className={styles.quoteText}>"{journey.article.quote}"</p>
                  <cite className={styles.quoteAuthor}>— {journey.article.quoteAuthor}</cite>
                </blockquote>
              </article>
            </div>
          </div>
        </section>

        {/* === 5-PHOTO VISUAL GALLERY SECTION === */}
        {galleryImages.length > 0 && (
          <section className={styles.gallerySection}>
            <div className="container">
              <div className={styles.galleryHeader}>
                <span className={styles.galleryEyebrow}>VISUAL JOURNAL</span>
                <h2 className={styles.galleryTitle}>{journey.name} in Pictures</h2>
              </div>
              <div className={styles.galleryGrid}>
                {galleryImages.map((img, idx) => (
                  <div key={idx} className={styles.galleryCard}>
                    <img 
                      src={img} 
                      alt={`${journey.name} photograph ${idx + 1}`} 
                      className={styles.galleryImg} 
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* === CINEMATIC VIDEO SECTION === */}
        {journey.videoUrl && (
          <section className={styles.videoSection}>
            <div className="container">
              <div className={styles.videoHeader}>
                <span className={styles.videoEyebrow}>SENSORY MOTION</span>
                <h2 className={styles.videoTitle}>Feel the Journey</h2>
                <p className={styles.videoSubtitle}>A cinematic preview of what awaits you.</p>
              </div>
              <div className={styles.videoWrapper}>
                <video
                  src={journey.videoUrl}
                  poster={galleryImages[0]}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  className={styles.video}
                >
                  <source src={journey.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        )}

        {/* === ENQUIRE CTA BANNER === */}
        <EnquireCtaBanner 
          destination={journey.destination} 
          duration={journey.duration}
          service={journey.name}
          title={`Ready to Embark on ${journey.name}?`} 
        />
      </main>
    </>
  );
}
