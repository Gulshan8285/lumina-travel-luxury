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

  // Interactive State
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'terms' | 'cancellation'>('itinerary');
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(0);
  const [selectedDayIdx, setSelectedDayIdx] = useState<number | 'all'>(0);

  // Dynamic Package Options (Fallback to 3 Luxury Tiers for bespoke journeys)
  const packageOptionsList = (journey.packageOptions && journey.packageOptions.length > 0)
    ? journey.packageOptions
    : [
        {
          category: "Standard Category",
          price: journey.price.startsWith("Starting") ? journey.price.replace("Starting from ", "") : journey.price === "Bespoke / On Request" ? "₹35,000 per person sharing" : journey.price,
          details: `${journey.destination}: 4-Star Premium Hotel Accommodations • Daily Gourmet Breakfast • Private AC Transfers`
        },
        {
          category: "Deluxe Category",
          price: journey.price === "Bespoke / On Request" ? "₹48,500 per person sharing" : "₹42,800 per person sharing",
          details: `${journey.destination}: 5-Star Luxury Resorts & Heritage Properties • Daily Breakfast & Dinner • Private Dedicated Chauffeur`
        },
        {
          category: "Luxury Category",
          price: journey.price === "Bespoke / On Request" ? "₹75,000 per person sharing" : "₹62,000 per person sharing",
          details: `${journey.destination}: Signature Palace Suites & Private Villas • All Gourmet Meals • VIP Concierge & Fast-Track Access`
        }
      ];

  // Active Category Data
  const currentCategory = packageOptionsList[selectedCategoryIdx] || packageOptionsList[0];
  const currentPrice = currentCategory.price;
  const priceIncludesText = journey.priceIncludesText || `Price Includes: ${journey.itinerary.length} Days Itinerary, Luxury Hotel Accommodations, Daily Gourmet Breakfast, Private Dedicated Vehicle with Chauffeur, Airport Transfers, and Guided Sightseeing.`;

  const termsList = (journey.termsAndConditions && journey.termsAndConditions.length > 0)
    ? journey.termsAndConditions
    : [
        "Package rates are dynamic and subject to availability at the time of final confirmation.",
        "Rates are valid for Indian and international travelers with standard booking validity.",
        "The dedicated vehicle is provided as per the approved itinerary route.",
        "Special dietary requests (such as Jain, vegan, or gluten-free) must be communicated in advance.",
        "100% advance payment is required for confirmation during peak festive seasons."
      ];

  const cancellationList = (journey.cancellationPolicy && journey.cancellationPolicy.length > 0)
    ? journey.cancellationPolicy
    : [
        "Cancellation 30+ days prior to departure: 10% administrative retention fee.",
        "Cancellation between 15 to 30 days prior to departure: 50% package retention.",
        "Cancellation within 14 days of departure or no-show: 100% non-refundable."
      ];

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
          journey: `${journey.name} (${currentCategory.category})`,
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

  const getCleanDayTitle = (day: { day: string; title: string }) => {
    const t = day.title.toUpperCase();
    if (t.includes('ARRIVE IN JAIPUR') || t.includes('ARRIVAL')) return 'Jaipur Arrival';
    if (t.includes('JAIPUR FULL-DAY') || t.includes('JAIPUR SIGHTSEEING')) return 'Jaipur Sightseeing';
    if (t.includes('AJMER') || t.includes('PUSHKAR') || (t.includes('JAIPUR') && t.includes('JODHPUR'))) return 'Pushkar & Jodhpur';
    if (t.includes('RANAKPUR') || (t.includes('JODHPUR') && t.includes('UDAIPUR'))) return 'Ranakpur & Udaipur';
    if (t.includes('UDAIPUR CITY') || t.includes('UDAIPUR SIGHTSEEING')) return 'Udaipur Highlights';
    if (t.includes('DEPART')) return 'Depart Udaipur';
    
    // Generic fallback for any other journey
    const clean = day.title
      .replace(/\(\d+\s*KM\)/gi, '')
      .split('-')[0]
      .split(':')[0]
      .trim();
    return clean.length > 20 ? clean.substring(0, 18) + '…' : clean;
  };

  const activeDay = selectedDayIdx !== 'all' ? journey.itinerary[selectedDayIdx] : null;

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
            <span className={styles.eyebrow}>SIGNATURE BESPOKE JOURNEY &middot; {journey.destination}</span>
            <h1 className={styles.heroTitle}>{journey.name}</h1>
            <p className={styles.heroTagline}>{journey.subtitle || journey.duration} &middot; 100% Tailored Private Itinerary</p>
            
            <div className={styles.heroActions}>
              <Link 
                href={`/enquire?destination=${encodeURIComponent(journey.destination)}&duration=${encodeURIComponent(journey.duration)}&service=${encodeURIComponent(journey.name)}`}
                className={styles.primaryHeroBtn}
              >
                Plan / Book This Trip &rarr;
              </Link>
              <a 
                href={`https://wa.me/917406994752?text=${encodeURIComponent(`Hello! I am interested in booking the ${journey.name} (${currentPrice}) itinerary.`)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.secondaryHeroBtn}
              >
                WhatsApp Concierge
              </a>
            </div>
          </div>

          {/* Floating Price Badge in Hero */}
          <div className={styles.heroPriceBadge}>
            <span className={styles.priceBadgeLabel}>BEST PRICE GUARANTEE</span>
            <span className={styles.priceBadgeValue}>{currentPrice}</span>
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

        {/* === PACKAGE OVERVIEW & INTERACTIVE TABS SECTION === */}
        <section className={styles.packageDetailsSection}>
          <div className="container">
            
            {/* Header Title & Interactive Category Selector */}
            <div className={styles.packageHeaderBox}>
              <div className={styles.headerTopRow}>
                <div>
                  <span className={styles.headerSubBadge}>EXCLUSIVE PRIVATE DEPARTURE</span>
                  <h2 className={styles.packageMainTitle}>
                    {journey.name} {journey.subtitle ? `(${journey.subtitle})` : ''} - {journey.duration}
                  </h2>
                </div>
                <div className={styles.liveSelectedPriceBox}>
                  <span className={styles.livePriceLabel}>Starting From</span>
                  <strong className={styles.livePriceValue}>{currentPrice}</strong>
                </div>
              </div>

              {/* === INTERACTIVE CATEGORY TIER SELECTOR (Only Active Tier Highlighted) === */}
              <div className={styles.tierSelectorWrapper}>
                <div className={styles.tierSelectorTop}>
                  <div>
                    <span className={styles.tierSelectorBadge}>TAILORED HOTEL CATEGORIES</span>
                    <h3 className={styles.tierSelectorTitle}>Choose Your Preferred Package Tier</h3>
                  </div>
                  <span className={styles.tierHintText}>Click a tier to view included hotels &amp; live pricing</span>
                </div>
                
                <div className={styles.categoryTiersGrid}>
                  {packageOptionsList.map((opt, idx) => {
                    const isSelected = selectedCategoryIdx === idx;
                    const isPopular = idx === 1;
                    const isLuxury = idx === 2;
                    return (
                      <button
                        key={idx}
                        type="button"
                        className={`${styles.tierCardBtn} ${isSelected ? styles.selectedTierCard : ''}`}
                        onClick={() => setSelectedCategoryIdx(idx)}
                      >
                        <div className={styles.tierCardTopRow}>
                          <div className={styles.tierCardHeader}>
                            <span className={styles.tierRadioIcon}>{isSelected ? '●' : '○'}</span>
                            <span className={styles.tierCardName}>{opt.category}</span>
                          </div>
                          {isPopular && <span className={styles.tierTopBadge}>★ POPULAR</span>}
                          {isLuxury && <span className={styles.tierTopBadge}>👑 LUXURY</span>}
                        </div>
                        <div className={styles.tierCardPrice}>{opt.price}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Active Selected Tier Hotel Details Box */}
                {currentCategory?.details && (
                  <div className={styles.selectedHotelDetailsBanner}>
                    <div className={styles.hotelDetailsHeader}>
                      <span className={styles.hotelDetailsBadge}>🏨 INCLUDED HOTELS &middot; {currentCategory.category.toUpperCase()}</span>
                      <span className={styles.hotelDetailsNote}>Handpicked Luxury Accommodations</span>
                    </div>
                    <div className={styles.hotelChipsGrid}>
                      {currentCategory.details.split('•').map((hotelItem, hIdx) => {
                        const parts = hotelItem.trim().split(':');
                        const city = parts.length > 1 ? parts[0].trim() : '';
                        const name = parts.length > 1 ? parts.slice(1).join(':').trim() : hotelItem.trim();
                        return (
                          <div key={hIdx} className={styles.hotelChip}>
                            <span className={styles.hotelChipIcon}>🏛️</span>
                            <div className={styles.hotelChipText}>
                              {city && <strong className={styles.hotelCityTag}>{city}:</strong>}
                              <span className={styles.hotelNameTag}>{name}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Price Includes Summary Line */}
              <div className={styles.priceIncludesSummary}>
                <strong>Price Includes:</strong> {priceIncludesText}
              </div>

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
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'terms'}
                  className={`${styles.tabBtn} ${activeTab === 'terms' ? styles.activeTabBtn : ''}`}
                  onClick={() => setActiveTab('terms')}
                >
                  📋 Terms &amp; Conditions
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'cancellation'}
                  className={`${styles.tabBtn} ${activeTab === 'cancellation' ? styles.activeTabBtn : ''}`}
                  onClick={() => setActiveTab('cancellation')}
                >
                  🔄 Cancellation Policy
                </button>
              </div>
            </div>

            {/* Grid Layout: Main Tab Content + Sticky Right Booking Widget */}
            <div className={styles.tabContentGrid}>
              
              {/* Left Column: Tab Content */}
              <div className={styles.tabMainContent}>
                
                {/* TAB 1: ITINERARY (Interactive Day Selector - Shows only selected day or all) */}
                {activeTab === 'itinerary' && (
                  <div className={styles.tabPanel}>
                    
                    {/* Horizontal Luxury Day Navigator */}
                    <div className={styles.daySelectorNav}>
                      <div className={styles.dayNavHeader}>
                        <div className={styles.dayNavLeft}>
                          <span className={styles.dayNavSubTitle}>STEP-BY-STEP ITINERARY</span>
                          <h3 className={styles.dayNavHeading}>Explore Daily Schedule</h3>
                        </div>
                        <div className={styles.dayNavQuickCount}>
                          <span>{journey.itinerary.length} Days Itinerary Plan</span>
                        </div>
                      </div>

                      <div className={styles.dayButtonsScroll}>
                        {journey.itinerary.map((d, dIdx) => {
                          const isSelected = selectedDayIdx === dIdx;
                          return (
                            <button
                              key={dIdx}
                              type="button"
                              className={`${styles.dayNavPill} ${isSelected ? styles.activeDayNavPill : ''}`}
                              onClick={() => setSelectedDayIdx(dIdx)}
                            >
                              <span className={styles.dayPillNumber}>{d.day}</span>
                              <span className={styles.dayPillDivider}>•</span>
                              <span className={styles.dayPillText}>{getCleanDayTitle(d)}</span>
                            </button>
                          );
                        })}
                        <button
                          type="button"
                          className={`${styles.dayNavPill} ${styles.allDaysPill} ${selectedDayIdx === 'all' ? styles.activeDayNavPill : ''}`}
                          onClick={() => setSelectedDayIdx('all')}
                        >
                          <span className={styles.dayPillIcon}>✦</span>
                          <span className={styles.dayPillText}>Full Plan (All Days)</span>
                        </button>
                      </div>
                    </div>

                    {/* Single Selected Day View */}
                    {selectedDayIdx !== 'all' && activeDay && (
                      <article className={styles.featuredDayCard}>
                        <div className={styles.featuredDayTopBar}>
                          <div className={styles.featuredDayBadgeWrapper}>
                            <span className={styles.featuredDayBadge}>{activeDay.day}</span>
                            <span className={styles.dayProgressLabel}>Day {selectedDayIdx + 1} of {journey.itinerary.length}</span>
                          </div>
                          
                          {/* Next / Previous Day Controls */}
                          <div className={styles.dayNavArrows}>
                            <button
                              type="button"
                              disabled={selectedDayIdx === 0}
                              className={styles.navArrowBtn}
                              onClick={() => setSelectedDayIdx(prev => typeof prev === 'number' ? Math.max(0, prev - 1) : 0)}
                              aria-label="Previous day"
                            >
                              &larr; Prev Day
                            </button>
                            <button
                              type="button"
                              disabled={selectedDayIdx === journey.itinerary.length - 1}
                              className={styles.navArrowBtn}
                              onClick={() => setSelectedDayIdx(prev => typeof prev === 'number' ? Math.min(journey.itinerary.length - 1, prev + 1) : 0)}
                              aria-label="Next day"
                            >
                              Next Day &rarr;
                            </button>
                          </div>
                        </div>

                        <h3 className={styles.featuredDayTitle}>{activeDay.title}</h3>
                        <p className={styles.featuredDayDesc}>{activeDay.desc}</p>

                        {/* Sightseeing Included Tags */}
                        <div className={styles.sightseeingBox}>
                          <span className={styles.sightseeingLabel}>📍 Sight Seeing Included:</span>
                          <div className={styles.sightseeingTags}>
                            {((activeDay.sightseeing && activeDay.sightseeing.length > 0) ? activeDay.sightseeing : [activeDay.title]).map((place, pIdx) => (
                              <span key={pIdx} className={styles.sightseeingTag}>
                                ✦ {place}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Transfer Route Tag */}
                        <div className={styles.transferRow}>
                          <span className={styles.transferIcon}>🚘</span>
                          <div className={styles.transferText}>
                            <span className={styles.transferLabel}>Transit Route:</span>
                            <span className={styles.transferVal}>{activeDay.transfers || `${journey.destination} Sightseeing Circuit : Private Dedicated AC Cab`}</span>
                          </div>
                        </div>

                        {/* Meals Inclusions Bar */}
                        <div className={styles.mealsBar}>
                          <span className={styles.mealsBarLabel}>🍽️ Meals Included:</span>
                          <div className={styles.mealsItemsList}>
                            <div className={`${styles.mealItem} ${(activeDay.meals ? activeDay.meals.breakfast : true) ? styles.mealIncluded : styles.mealExcluded}`}>
                              <span className={styles.mealDot}>{(activeDay.meals ? activeDay.meals.breakfast : true) ? '✓' : '✕'}</span>
                              <span>Breakfast: <strong>{(activeDay.meals ? activeDay.meals.breakfast : true) ? 'Included' : 'Not Included'}</strong></span>
                            </div>
                            <div className={`${styles.mealItem} ${(activeDay.meals ? activeDay.meals.lunch : false) ? styles.mealIncluded : styles.mealExcluded}`}>
                              <span className={styles.mealDot}>{(activeDay.meals ? activeDay.meals.lunch : false) ? '✓' : '✕'}</span>
                              <span>Lunch: <strong>{(activeDay.meals ? activeDay.meals.lunch : false) ? 'Included' : 'Not Included'}</strong></span>
                            </div>
                            <div className={`${styles.mealItem} ${(activeDay.meals ? activeDay.meals.dinner : false) ? styles.mealIncluded : styles.mealExcluded}`}>
                              <span className={styles.mealDot}>{(activeDay.meals ? activeDay.meals.dinner : false) ? '✓' : '✕'}</span>
                              <span>Dinner: <strong>{(activeDay.meals ? activeDay.meals.dinner : false) ? 'Included' : 'Not Included'}</strong></span>
                            </div>
                          </div>
                        </div>
                      </article>
                    )}

                    {/* All Days View (When "All" is selected) */}
                    {selectedDayIdx === 'all' && (
                      <div className={styles.dayCardsList}>
                        {journey.itinerary.map((day, idx) => (
                          <article key={idx} className={styles.dayCard}>
                            <div className={styles.dayCardHeader}>
                              <span className={styles.dayNumberBadge}>{day.day}</span>
                              <h3 className={styles.dayCardTitle}>{day.title}</h3>
                            </div>
                            
                            <p className={styles.dayCardDesc}>{day.desc}</p>

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

                            {day.transfers && (
                              <div className={styles.transferRow}>
                                <span className={styles.transferIcon}>🚘</span>
                                <span><strong>Transit Route:</strong> {day.transfers}</span>
                              </div>
                            )}

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
                    )}
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
                {activeTab === 'terms' && (
                  <div className={styles.tabPanel}>
                    <div className={styles.policyCard}>
                      <h3 className={styles.policyTitle}>Terms and Conditions</h3>
                      <ul className={styles.policyList}>
                        {termsList.map((term, idx) => (
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
                {activeTab === 'cancellation' && (
                  <div className={styles.tabPanel}>
                    <div className={styles.policyCard}>
                      <h3 className={styles.policyTitle}>Cancellation Policy</h3>
                      <ul className={styles.policyList}>
                        {cancellationList.map((rule, idx) => (
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
                    <span className={styles.bookingBadge}>SELECTED PACKAGE</span>
                    <h3 className={styles.bookingTitle}>{journey.destination} Tour</h3>
                    <div className={styles.selectedTierBadge}>
                      {currentCategory ? currentCategory.category : 'Standard Category'}
                    </div>
                    <div className={styles.bookingPrice}>{currentPrice}</div>
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
                        {isSubmitting ? "Sending..." : `✦ Get Quote for ${currentCategory ? currentCategory.category.split(' ')[0] : 'Tour'} →`}
                      </button>

                      <a
                        href={`https://wa.me/917406994752?text=${encodeURIComponent(`Hello! I want a quote for ${journey.name} (${currentCategory ? currentCategory.category : ''} - ${currentPrice}).`)}`}
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
