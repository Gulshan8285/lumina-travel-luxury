"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import RannCityPackages from '@/components/ui/RannCityPackages';
import RannFaqAccordion, { FaqItem } from '@/components/ui/RannFaqAccordion';
import { CITY_ROUTES } from '@/lib/rannUtsavRoutes';
import styles from './page.module.css';

interface RannUtsavMainClientProps {
  activities: { title: string; icon: string; desc: string }[];
  faqs: FaqItem[];
  whatsappUrl: string;
}

const TENT_CATEGORIES = [
  {
    category: "Deluxe Swiss AC Tent",
    price: "₹14,500 per person",
    badge: "POPULAR",
    details: "Dhordo Tent City • Attached Bathroom • AC & Heating • All Buffet Meals Included • Bhuj AC Transfers"
  },
  {
    category: "Premium AC Tent",
    price: "₹18,500 per person",
    badge: "RECOMMENDED",
    details: "Spacious Luxury Tent • Front Porch • Priority Golf Cart • All Buffet Meals Included • Guided Desert Excursions"
  },
  {
    category: "Royal Darbari Suite",
    price: "₹26,500 per person",
    badge: "ROYAL VIP",
    details: "VIP Master Living Lounge • Dedicated Hospitality Butler • Exclusive Dining Arena • Fast-Track VIP White Desert Safari"
  }
];

const SIGNATURE_ITINERARY = [
  {
    day: "Day 01",
    title: "ARRIVAL IN BHUJ & TENT CITY DHORDO WELCOME",
    shortTitle: "Arrival & Sunset",
    desc: "Arrive at Bhuj Airport or Railway Station. Board the luxury AC Volvo coach to Tent City Dhordo with refreshments en route. Experience the grand Kutchi folk welcome with dhol and garba dance. Check in to your luxury tent. In the late afternoon, embark on the guided excursion to the surreal White Rann for sunset. Enjoy a grand Gujarati buffet dinner followed by live cultural performances under the stars.",
    sightseeing: ["Bhuj Airport/Station Welcome", "Tent City Folk Welcome", "White Desert Sunset Walk", "Cultural Folk Garba Night"],
    transfers: "AC Volvo Coach : Bhuj Airport/Station to Dhordo (85 km)",
    meals: { breakfast: false, lunch: true, highTea: true, dinner: true }
  },
  {
    day: "Day 02",
    title: "KALA DUNGAR & GANDHI NU GAAM CRAFT VILLAGE",
    shortTitle: "Kala Dungar & Crafts",
    desc: "Early morning sunrise walk on the shimmering white salt desert. After a lavish breakfast, proceed for an excursion to Kala Dungar (Black Hill), the highest peak in Kutch offering 360-degree panoramic horizon views of the great salt flats. Visit the 400-year-old Dattatreya Temple. On the return journey, visit Gandhi Nu Gaam craft village to interact with master Kutchi artisans specializing in Rogan art, block printing, and embroidery. Evening at leisure with campfires and stargazing.",
    sightseeing: ["White Rann Golden Sunrise", "Kala Dungar (Black Hill Peak)", "Gandhi Nu Gaam Artisan Village", "Night Stargazing & Camel Cart"],
    transfers: "Guided AC Excursion Coach",
    meals: { breakfast: true, lunch: true, highTea: true, dinner: true }
  },
  {
    day: "Day 03",
    title: "MANDVI BEACH & VIJAY VILAS PALACE EXCURSION",
    shortTitle: "Mandvi Beach & Palaces",
    desc: "After breakfast, embark on a full-day coastal excursion to Mandvi. Visit the grand red-sandstone Vijay Vilas Palace, a celebrated heritage film location with private beach access. Explore the 400-year-old traditional wooden shipbuilding yards along the Rukmavati River. Relax along Mandvi Beach and enjoy water sports and coastal camel rides before returning to Dhordo for a festive dinner.",
    sightseeing: ["Vijay Vilas Heritage Palace", "Mandvi Arabian Sea Beach", "400-Year-Old Wooden Shipbuilding Yards", "Rukmavati River Boardwalk"],
    transfers: "Dedicated AC Vehicle : Dhordo to Mandvi Coastal Circuit",
    meals: { breakfast: true, lunch: true, highTea: true, dinner: true }
  },
  {
    day: "Day 04",
    title: "BHUJ HERITAGE SIGHTSEEING & DEPARTURE",
    shortTitle: "Farewell Kutch & Drop",
    desc: "Enjoy a relaxed breakfast at the Tent City dining hall. Check out and board the scheduled AC coach to Bhuj. Visit the historic Aina Mahal (Hall of Mirrors), Prag Mahal clock tower, and the grand Swaminarayan Temple. Transfer to Bhuj Airport or Railway Station for your onward journey with timeless desert memories.",
    sightseeing: ["Tent City Souvenir Haat", "Aina Mahal & Prag Mahal Bhuj", "Shree Swaminarayan Temple", "Bhuj Airport/Station Drop"],
    transfers: "AC Volvo Coach : Dhordo to Bhuj City & Drop",
    meals: { breakfast: true, lunch: false, highTea: false, dinner: false }
  }
];

export default function RannUtsavMainClient({
  activities,
  faqs,
  whatsappUrl
}: RannUtsavMainClientProps) {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(1);
  const [selectedDayIdx, setSelectedDayIdx] = useState<number | 'all'>(0);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'durations' | 'faqs'>('itinerary');

  const currentCategory = TENT_CATEGORIES[selectedCategoryIdx];
  const activeDay = selectedDayIdx !== 'all' ? SIGNATURE_ITINERARY[selectedDayIdx] : null;

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
          destination: 'Rann Utsav - Great Rann of Kutch',
          journey: `Rann Utsav Dhordo (${currentCategory.category})`,
          duration: '3 Nights / 4 Days'
        })
      });
      setFormSubmitted(true);
    } catch {
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className={styles.main}>

        {/* Luxury Hero */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>GUJARAT CULTURAL EXPEDITION &bull; KUTCH 2026–2027</span>
              <h1 className={styles.title}>Rann Utsav</h1>
              <p className={styles.subtitle}>
                Witness the surreal White Salt Desert under moonlit skies. Luxury Tent City Dhordo stays, complimentary Bhuj transfers, and vibrant Kutchi heritage.
              </p>

              {/* Highlights Pill Strip */}
              <div className={styles.heroHighlightsStrip}>
                <div className={styles.heroPill}>
                  <span>📅</span> <strong>1 Nov 2026 &ndash; 7 Mar 2027</strong>
                </div>
                <div className={styles.heroPill}>
                  <span>🎪</span> <strong>Tent City Dhordo</strong>
                </div>
                <div className={styles.heroPill}>
                  <span>🚌</span> <strong>Bhuj Transfers Included</strong>
                </div>
                <div className={styles.heroPill}>
                  <span>🍽️</span> <strong>All Gourmet Meals</strong>
                </div>
              </div>

              <div className={styles.heroActions}>
                <Link
                  href="/enquire?destination=Rann+Utsav+-+Great+Rann+of+Kutch&service=Domestic+Holiday"
                  className={styles.primaryBtn}
                >
                  ✦ Plan Your Rann Utsav Trip &rarr;
                </Link>
                <a
                  href="#tent-packages"
                  className={styles.secondaryBtn}
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                >
                  View Tent Categories &amp; Pricing ↓
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryBtn}
                >
                  💬 WhatsApp Kutch Specialist
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* === INTERACTIVE TENT CATEGORY & SIGNATURE ITINERARY SECTION === */}
        <section id="tent-packages" className={styles.interactivePackagesSection}>
          <div className="container">
            
            <div className={styles.packageHeaderBox}>
              <div className={styles.headerTopRow}>
                <div>
                  <span className={styles.headerSubBadge}>OFFICIAL FESTIVAL RESERVATIONS &middot; 2026&ndash;2027</span>
                  <h2 className={styles.packageMainTitle}>Rann Utsav Dhordo Tent Packages &amp; Daily Plan</h2>
                </div>
                <div className={styles.liveSelectedPriceBox}>
                  <span className={styles.livePriceLabel}>Starting From</span>
                  <strong className={styles.livePriceValue}>{currentCategory.price}</strong>
                </div>
              </div>

              {/* Category Tier Selector Grid */}
              <div className={styles.tierSelectorWrapper}>
                <div className={styles.tierSelectorTop}>
                  <div>
                    <span className={styles.tierSelectorBadge}>CHOOSE TENT CATEGORY</span>
                    <h3 className={styles.tierSelectorTitle}>Select Your Preferred Luxury Tier</h3>
                  </div>
                  <span className={styles.tierHintText}>Click to view included tent features &amp; pricing</span>
                </div>

                <div className={styles.categoryTiersGrid}>
                  {TENT_CATEGORIES.map((opt, idx) => {
                    const isSelected = selectedCategoryIdx === idx;
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
                          <span className={styles.tierTopBadge}>{opt.badge}</span>
                        </div>
                        <div className={styles.tierCardPrice}>{opt.price}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Tent Amenities Banner */}
                <div className={styles.selectedHotelDetailsBanner}>
                  <div className={styles.hotelDetailsHeader}>
                    <span className={styles.hotelDetailsBadge}>🎪 INCLUDED FEATURES &middot; {currentCategory.category.toUpperCase()}</span>
                    <span className={styles.hotelDetailsNote}>All-inclusive gourmet buffets &amp; guided desert excursions</span>
                  </div>
                  <div className={styles.hotelChipsGrid}>
                    {currentCategory.details.split('•').map((item, hIdx) => (
                      <div key={hIdx} className={styles.hotelChip}>
                        <span className={styles.hotelChipIcon}>✨</span>
                        <span className={styles.hotelNameTag}>{item.trim()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Includes Summary Line */}
              <div className={styles.priceIncludesSummary}>
                <strong>Package Includes:</strong> Luxury Tent Stay at Dhordo, All Gourmet Buffet Meals (Breakfast, Lunch, High Tea &amp; Dinner), Scheduled AC Coach Transfers from Bhuj, Guided Sunset Tours to White Rann, Kala Dungar Excursion, and Cultural Passes.
              </div>

              {/* Tabs Bar */}
              <div className={styles.tabsNav} role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'itinerary'}
                  className={`${styles.tabBtn} ${activeTab === 'itinerary' ? styles.activeTabBtn : ''}`}
                  onClick={() => setActiveTab('itinerary')}
                >
                  🗺️ 4-Day Signature Itinerary
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
                  aria-selected={activeTab === 'durations'}
                  className={`${styles.tabBtn} ${activeTab === 'durations' ? styles.activeTabBtn : ''}`}
                  onClick={() => setActiveTab('durations')}
                >
                  ⏱️ Stay Durations
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'faqs'}
                  className={`${styles.tabBtn} ${activeTab === 'faqs' ? styles.activeTabBtn : ''}`}
                  onClick={() => setActiveTab('faqs')}
                >
                  💬 Helpful FAQs
                </button>
              </div>
            </div>

            {/* Tab Content Grid */}
            <div className={styles.tabContentGrid}>
              
              <div className={styles.tabMainContent}>
                
                {/* TAB 1: ITINERARY */}
                {activeTab === 'itinerary' && (
                  <div className={styles.tabPanel}>
                    {/* Horizontal Luxury Day Navigator */}
                    <div className={styles.daySelectorNav}>
                      <div className={styles.dayNavHeader}>
                        <div className={styles.dayNavLeft}>
                          <span className={styles.dayNavSubTitle}>STEP-BY-STEP ITINERARY</span>
                          <h3 className={styles.dayNavHeading}>Signature 4-Day Kutch Expedition</h3>
                        </div>
                        <div className={styles.dayNavQuickCount}>
                          <span>4 Days Itinerary Plan</span>
                        </div>
                      </div>

                      <div className={styles.dayButtonsScroll}>
                        {SIGNATURE_ITINERARY.map((d, dIdx) => {
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
                              <span className={styles.dayPillText}>{d.shortTitle}</span>
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
                            <span className={styles.dayProgressLabel}>
                              Day {selectedDayIdx + 1} of {SIGNATURE_ITINERARY.length}
                            </span>
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
                              disabled={selectedDayIdx === SIGNATURE_ITINERARY.length - 1}
                              className={styles.navArrowBtn}
                              onClick={() => setSelectedDayIdx(prev => typeof prev === 'number' ? Math.min(SIGNATURE_ITINERARY.length - 1, prev + 1) : 0)}
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
                            {activeDay.sightseeing.map((place, pIdx) => (
                              <span key={pIdx} className={styles.sightseeingTag}>
                                ✦ {place}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Transit Route */}
                        <div className={styles.transferRow}>
                          <span className={styles.transferIcon}>🚘</span>
                          <div className={styles.transferText}>
                            <span className={styles.transferLabel}>Transit Route:</span>
                            <span className={styles.transferVal}>{activeDay.transfers}</span>
                          </div>
                        </div>

                        {/* Meals Inclusions Bar */}
                        <div className={styles.mealsBar}>
                          <span className={styles.mealsBarLabel}>🍽️ Meals Included:</span>
                          <div className={styles.mealsItemsList}>
                            <div className={`${styles.mealItem} ${activeDay.meals.breakfast ? styles.mealIncluded : styles.mealExcluded}`}>
                              <span className={styles.mealDot}>{activeDay.meals.breakfast ? '✓' : '✕'}</span>
                              <span>Breakfast: <strong>{activeDay.meals.breakfast ? 'Included' : 'Not Included'}</strong></span>
                            </div>
                            <div className={`${styles.mealItem} ${activeDay.meals.lunch ? styles.mealIncluded : styles.mealExcluded}`}>
                              <span className={styles.mealDot}>{activeDay.meals.lunch ? '✓' : '✕'}</span>
                              <span>Lunch: <strong>{activeDay.meals.lunch ? 'Included' : 'Not Included'}</strong></span>
                            </div>
                            <div className={`${styles.mealItem} ${activeDay.meals.highTea ? styles.mealIncluded : styles.mealExcluded}`}>
                              <span className={styles.mealDot}>{activeDay.meals.highTea ? '✓' : '✕'}</span>
                              <span>High Tea: <strong>{activeDay.meals.highTea ? 'Included' : 'Not Included'}</strong></span>
                            </div>
                            <div className={`${styles.mealItem} ${activeDay.meals.dinner ? styles.mealIncluded : styles.mealExcluded}`}>
                              <span className={styles.mealDot}>{activeDay.meals.dinner ? '✓' : '✕'}</span>
                              <span>Dinner: <strong>{activeDay.meals.dinner ? 'Included' : 'Not Included'}</strong></span>
                            </div>
                          </div>
                        </div>
                      </article>
                    )}

                    {/* All Days View */}
                    {selectedDayIdx === 'all' && (
                      <div className={styles.dayCardsList}>
                        {SIGNATURE_ITINERARY.map((dayItem, idx) => (
                          <article key={idx} className={styles.dayCard}>
                            <div className={styles.dayCardHeader}>
                              <span className={styles.dayNumberBadge}>{dayItem.day}</span>
                              <h3 className={styles.dayCardTitle}>{dayItem.title}</h3>
                            </div>
                            <p className={styles.dayCardDesc}>{dayItem.desc}</p>

                            <div className={styles.sightseeingBox}>
                              <span className={styles.sightseeingLabel}>📍 Sight Seeing Included:</span>
                              <div className={styles.sightseeingTags}>
                                {dayItem.sightseeing.map((place, pIdx) => (
                                  <span key={pIdx} className={styles.sightseeingTag}>
                                    ✦ {place}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className={styles.transferRow}>
                              <span className={styles.transferIcon}>🚘</span>
                              <div className={styles.transferText}>
                                <span className={styles.transferLabel}>Transit Route:</span>
                                <span className={styles.transferVal}>{dayItem.transfers}</span>
                              </div>
                            </div>
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
                          <li className={styles.includedRow}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>Luxury AC Tent Accommodation at Official Tent City Dhordo</span>
                          </li>
                          <li className={styles.includedRow}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>All Buffet Meals: Breakfast, Lunch, Traditional Evening High Tea, and Kutchi Dinner</span>
                          </li>
                          <li className={styles.includedRow}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>To-and-Fro Scheduled AC Coach Transfers between Bhuj Airport/Station and Dhordo</span>
                          </li>
                          <li className={styles.includedRow}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>Guided Sunset Tour to the surreal White Rann with Camel Cart assistance</span>
                          </li>
                          <li className={styles.includedRow}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>Excursion to Kala Dungar (Black Hill) and Gandhi Nu Gaam Handicraft Village</span>
                          </li>
                          <li className={styles.includedRow}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>Nightly Cultural Folk Music, Garba performances, and Bonfire entertainment passes</span>
                          </li>
                        </ul>
                      </div>

                      <div className={styles.exclusionsBox}>
                        <h3 className={styles.exclusionsBoxTitle}>
                          <span className={styles.boxIconRed}>✕</span> Package Exclusions
                        </h3>
                        <ul className={styles.exclusionsList}>
                          <li className={styles.excludedRow}>
                            <span className={styles.crossIcon}>✕</span>
                            <span>Airfare / Train tickets to Bhuj or Ahmedabad (Available upon request)</span>
                          </li>
                          <li className={styles.excludedRow}>
                            <span className={styles.crossIcon}>✕</span>
                            <span>Adventure sports: ATV desert rides, paramotoring, and zip-lining</span>
                          </li>
                          <li className={styles.excludedRow}>
                            <span className={styles.crossIcon}>✕</span>
                            <span>Personal expenses, laundry, tips, and personal shopping</span>
                          </li>
                          <li className={styles.excludedRow}>
                            <span className={styles.crossIcon}>✕</span>
                            <span>GST 5% as per government tourism regulations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: STAY DURATIONS */}
                {activeTab === 'durations' && (
                  <div className={styles.tabPanel}>
                    <div className={styles.durationCards}>
                      <div className={styles.durationCard}>
                        <div className={styles.durationBadge}>2 NIGHTS / 3 DAYS</div>
                        <h3>Quick Desert Escape</h3>
                        <p>
                          Ideal for weekend travelers. Witness the White Rann sunset, enjoy live evening Kutchi performances, and visit Kala Dungar (Black Hill).
                        </p>
                        <Link
                          href="/enquire?destination=Rann+Utsav+-+Great+Rann+of+Kutch&duration=2+Nights+%2F+3+Days&service=Domestic+Holiday"
                          className={styles.durationCardBtn}
                        >
                          <span>✦ Select &amp; Enquire 2N/3D</span>
                          <span>&rarr;</span>
                        </Link>
                      </div>

                      <div className={`${styles.durationCard} ${styles.durationCardFeatured}`}>
                        <div className={styles.durationBadgeGold}>3 NIGHTS / 4 DAYS • RECOMMENDED</div>
                        <h3>Classic Complete Kutch</h3>
                        <p>
                          The most popular choice. Unrushed White Rann visits, Kala Dungar, Gandhi Nu Gaam craft village, plus a full coastal day at Mandvi Beach &amp; Vijay Vilas Palace.
                        </p>
                        <Link
                          href="/enquire?destination=Rann+Utsav+-+Great+Rann+of+Kutch&duration=3+Nights+%2F+4+Days&service=Domestic+Holiday"
                          className={styles.durationCardBtn}
                        >
                          <span>✦ Select &amp; Enquire 3N/4D</span>
                          <span>&rarr;</span>
                        </Link>
                      </div>

                      <div className={styles.durationCard}>
                        <div className={styles.durationBadge}>4 NIGHTS / 5 DAYS</div>
                        <h3>Grand Kutch &amp; Dholavira</h3>
                        <p>
                          The comprehensive expedition. Includes all classic sights plus the UNESCO Harappan city of Dholavira and the legendary drive along the &ldquo;Road to Heaven&rdquo;.
                        </p>
                        <Link
                          href="/enquire?destination=Rann+Utsav+-+Great+Rann+of+Kutch&duration=4+Nights+%2F+5+Days&service=Domestic+Holiday"
                          className={styles.durationCardBtn}
                        >
                          <span>✦ Select &amp; Enquire 4N/5D</span>
                          <span>&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: FAQS */}
                {activeTab === 'faqs' && (
                  <div className={styles.tabPanel}>
                    <RannFaqAccordion 
                      faqs={faqs} 
                      enquireAnchor="/enquire?destination=Rann+Utsav+-+Great+Rann+of+Kutch&service=Domestic+Holiday" 
                    />
                  </div>
                )}
              </div>

              {/* Sticky Right Booking Widget */}
              <aside className={styles.stickyBookingCol}>
                <div className={styles.stickyBookingCard}>
                  <div className={styles.bookingCardHeader}>
                    <span className={styles.stickyBookingBadge}>SELECTED PACKAGE</span>
                    <h3 className={styles.stickyPackageName}>Rann Utsav Kutch</h3>
                    <div className={styles.selectedTierBadge}>
                      {currentCategory.category}
                    </div>
                    <div className={styles.stickyPriceVal}>{currentCategory.price}</div>
                  </div>

                  {formSubmitted ? (
                    <div className={styles.bookingSuccessBox}>
                      <h4>✦ Enquiry Received!</h4>
                      <p>Our Kutch travel specialist will contact you on WhatsApp with the complete itemized quote and official Dhordo Tent City pass.</p>
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
                        {isSubmitting ? "Sending..." : `✦ Get Quote for ${currentCategory.category.split(' ')[0]} →`}
                      </button>

                      <a
                        href={whatsappUrl}
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

        {/* City Departure Packages Section */}
        <section id="city-packages" className={styles.cityPackagesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>TAILORED TRANSIT &amp; ITINERARIES</span>
              <h2 className={styles.sectionTitle}>Rann Utsav Packages by City</h2>
              <p className={styles.sectionSubtitle}>
                Select your departure hub for customized flight &amp; train transit guidance, Bhuj pickups, and official Tent City Dhordo accommodation.
              </p>
            </div>

            <RannCityPackages routes={CITY_ROUTES} />
          </div>
        </section>

        {/* What can you do on a Rann Utsav trip? */}
        <section id="experiences" className={styles.activitiesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>CURATED EXPERIENCES</span>
              <h2 className={styles.sectionTitle}>What You&apos;ll Experience</h2>
              <p className={styles.sectionSubtitle}>
                From endless white salt horizons to royal coastal palaces and artisan handicraft villages.
              </p>
            </div>

            <div className={styles.activitiesGrid}>
              {activities.map((act, index) => (
                <div key={index} className={styles.activityCard}>
                  <span className={styles.activityIcon}>{act.icon}</span>
                  <h3 className={styles.activityTitle}>{act.title}</h3>
                  <p className={styles.activityDesc}>{act.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
