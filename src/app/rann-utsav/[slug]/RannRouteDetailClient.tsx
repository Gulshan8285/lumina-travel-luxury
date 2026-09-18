"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import RannFaqAccordion from '@/components/ui/RannFaqAccordion';
import EnquireCtaBanner from '@/components/ui/EnquireCtaBanner';
import { CityRoute } from '@/lib/rannUtsavRoutes';
import styles from './page.module.css';

interface RannRouteDetailClientProps {
  route: CityRoute;
  otherRoutes: CityRoute[];
  destinationQuery: string;
  whatsappUrl: string;
}

const TENT_CATEGORIES = [
  {
    category: "Deluxe Swiss AC Tent",
    price: "₹14,500 per person",
    badge: "POPULAR VALUE",
    details: "Dhordo Tent City • En-suite Bathroom • AC & Heating • All Buffet Meals Included • Bhuj AC Transfers"
  },
  {
    category: "Premium AC Tent",
    price: "₹18,500 per person",
    badge: "MOST RECOMMENDED",
    details: "Extended Luxury Porch • Premium Bedding • Priority Club Golf Cart • All Buffet Meals Included • Guided Desert Excursions"
  },
  {
    category: "Royal Darbari Suite",
    price: "₹26,500 per person",
    badge: "ROYAL VIP",
    details: "VIP Master Living Lounge • Dedicated Hospitality Butler • Exclusive Dining Arena • Fast-Track VIP White Desert Safari"
  }
];

export default function RannRouteDetailClient({
  route,
  otherRoutes,
  destinationQuery,
  whatsappUrl
}: RannRouteDetailClientProps) {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState(1); // Premium AC Tent default
  const [selectedDayIdx, setSelectedDayIdx] = useState<number | 'all'>(0);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'transit' | 'faqs'>('itinerary');

  const currentCategory = TENT_CATEGORIES[selectedCategoryIdx];
  const activeDay = selectedDayIdx !== 'all' ? route.suggestedItinerary[selectedDayIdx] : null;

  const getCleanDayTitle = (dayItem: { day: string; title: string }, index: number) => {
    if (index === 0) return `${route.cityName} to Dhordo`;
    if (index === 1) return 'Kala Dungar & White Rann';
    if (index === 2) return 'Mandvi Beach & Palaces';
    if (index === 3) return `Farewell & Return ${route.cityName}`;
    return dayItem.title.split('&')[0].split(':')[0].trim();
  };

  const getSightseeingForDay = (index: number) => {
    if (index === 0) {
      return ["Bhuj Airport/Station Welcome", "Tent City Folk Welcome", "White Desert Sunset", "Grand Gujarati Buffet & Cultural Garba"];
    }
    if (index === 1) {
      return ["White Rann Golden Sunrise", "Kala Dungar (Black Hill Peak)", "Gandhi Nu Gaam Craft Village", "Night Desert Stargazing"];
    }
    if (index === 2) {
      return ["Vijay Vilas Heritage Palace", "Mandvi Arabian Sea Beach", "400-Year-Old Wooden Shipbuilding Yards", "Bhuj Royal Aina Mahal"];
    }
    return ["Tent City Souvenir Haat", "Scenic AC Coach to Bhuj", "Bhuj Railway/Airport Drop"];
  };

  const getTransitForDay = (index: number) => {
    if (index === 0) return `Flight/Train from ${route.cityName} to Bhuj + Scheduled AC Coach to Dhordo (85 km)`;
    if (index === 1) return "Guided AC Excursion Coach to Kala Dungar & Artisan Hamlets";
    if (index === 2) return "Private AC Vehicle to Mandvi Coastal Circuit & Bhuj";
    return `Scheduled AC Coach Dhordo to Bhuj Airport/Station + Return to ${route.cityName}`;
  };

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* Breadcrumb Navigation */}
        <div className={styles.breadcrumbBar}>
          <div className="container">
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className={styles.crumbSep}>/</span>
              <Link href="/rann-utsav">Rann Utsav</Link>
              <span className={styles.crumbSep}>/</span>
              <span className={styles.crumbActive}>{route.cityName}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section
          className={styles.heroSection}
          style={{ backgroundImage: `url('${route.image}')` }}
        >
          <div className={styles.heroOverlay} />
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>
                {route.category.toUpperCase()} DEPARTURE &bull; {route.cityCode} TO BHUJ
              </span>
              <h1 className={styles.title}>{route.cityName} to Rann Utsav</h1>
              <p className={styles.tagline}>{route.heroTagline}</p>

              {/* Prominent Visual Route Showcase: Departure City Photo to White Desert */}
              <div className={styles.visualShowcase}>
                <div className={styles.showcaseCard}>
                  <div className={styles.showcaseImgWrapper}>
                    <img
                      src={route.image}
                      alt={`${route.cityName} Departure`}
                      className={styles.showcaseImg}
                    />
                    <div className={styles.showcaseImgOverlay} />
                    <div className={styles.showcaseImgLabel}>
                      <span>📍 Departure Hub</span>
                      <strong>{route.cityName}</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.showcaseConnector}>
                  <div className={styles.connectorIcon}>✈️</div>
                  <span className={styles.connectorBadge}>Fast Transit</span>
                </div>

                <div className={styles.showcaseCard}>
                  <div className={styles.showcaseImgWrapper}>
                    <img
                      src="/blogs/white-rann-kutch.jpg"
                      alt="White Desert of Kutch Tent City Dhordo"
                      className={styles.showcaseImg}
                    />
                    <div className={styles.showcaseImgOverlay} />
                    <div className={styles.showcaseImgLabel}>
                      <span>✨ Destination</span>
                      <strong>Great Rann &amp; Tent City</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights Pill Strip */}
              <div className={styles.highlightsStrip}>
                <div className={styles.highlightPill}>
                  <span>✈️</span> <strong>Flights &amp; Rail Guidance</strong>
                </div>
                <div className={styles.highlightPill}>
                  <span>🚌</span> <strong>Bhuj AC Transfers Included</strong>
                </div>
                <div className={styles.highlightPill}>
                  <span>🎪</span> <strong>Tent City Dhordo Stays</strong>
                </div>
                <div className={styles.highlightPill}>
                  <span>🍽️</span> <strong>All Gourmet Meals Included</strong>
                </div>
              </div>

              <div className={styles.heroActions}>
                <Link
                  href={`/enquire?destination=${encodeURIComponent('Rann Utsav (' + route.cityName + ')')}&service=Domestic+Holiday`}
                  className={styles.primaryBtn}
                >
                  ✦ Request Custom Package Quote &rarr;
                </Link>
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

        {/* === INTERACTIVE TENT CATEGORY SELECTOR SECTION === */}
        <section className={styles.packageTiersSection}>
          <div className="container">
            <div className={styles.tierSelectorBox}>
              <div className={styles.tierSelectorTop}>
                <div>
                  <span className={styles.tierSelectorBadge}>OFFICIAL TENT CITY DHORDO INVENTORY</span>
                  <h2 className={styles.tierSelectorTitle}>Select Your Rann Utsav Tent Category</h2>
                </div>
                <div className={styles.liveSelectedPriceBox}>
                  <span className={styles.livePriceLabel}>Starting From</span>
                  <strong className={styles.livePriceValue}>{currentCategory.price}</strong>
                </div>
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

              {/* Active Selected Category Details Banner */}
              <div className={styles.selectedHotelDetailsBanner}>
                <div className={styles.hotelDetailsHeader}>
                  <span className={styles.hotelDetailsBadge}>🎪 INCLUDED AMENITIES &middot; {currentCategory.category.toUpperCase()}</span>
                  <span className={styles.hotelDetailsNote}>All-inclusive buffet meals &amp; desert activities</span>
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

            {/* Horizontal Tabs Bar */}
            <div className={styles.tabsNav} role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'itinerary'}
                className={`${styles.tabBtn} ${activeTab === 'itinerary' ? styles.activeTabBtn : ''}`}
                onClick={() => setActiveTab('itinerary')}
              >
                🗺️ Day-by-Day Itinerary
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
                aria-selected={activeTab === 'transit'}
                className={`${styles.tabBtn} ${activeTab === 'transit' ? styles.activeTabBtn : ''}`}
                onClick={() => setActiveTab('transit')}
              >
                ✈️ Transit Guide ({route.cityName})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'faqs'}
                className={`${styles.tabBtn} ${activeTab === 'faqs' ? styles.activeTabBtn : ''}`}
                onClick={() => setActiveTab('faqs')}
              >
                💬 FAQs &amp; Help
              </button>
            </div>

            {/* Main Content Layout */}
            <div className={styles.tabContentGrid}>
              
              <div className={styles.tabMainContent}>
                
                {/* TAB 1: ITINERARY (Interactive Day Selector) */}
                {activeTab === 'itinerary' && (
                  <div className={styles.tabPanel}>
                    {/* Horizontal Luxury Day Navigator */}
                    <div className={styles.daySelectorNav}>
                      <div className={styles.dayNavHeader}>
                        <div className={styles.dayNavLeft}>
                          <span className={styles.dayNavSubTitle}>STEP-BY-STEP ITINERARY</span>
                          <h3 className={styles.dayNavHeading}>Curated Daily Schedule ({route.cityName} Route)</h3>
                        </div>
                        <div className={styles.dayNavQuickCount}>
                          <span>{route.suggestedItinerary.length} Days Itinerary Plan</span>
                        </div>
                      </div>

                      <div className={styles.dayButtonsScroll}>
                        {route.suggestedItinerary.map((d, dIdx) => {
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
                              <span className={styles.dayPillText}>{getCleanDayTitle(d, dIdx)}</span>
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
                              Day {selectedDayIdx + 1} of {route.suggestedItinerary.length}
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
                              disabled={selectedDayIdx === route.suggestedItinerary.length - 1}
                              className={styles.navArrowBtn}
                              onClick={() => setSelectedDayIdx(prev => typeof prev === 'number' ? Math.min(route.suggestedItinerary.length - 1, prev + 1) : 0)}
                              aria-label="Next day"
                            >
                              Next Day &rarr;
                            </button>
                          </div>
                        </div>

                        <h3 className={styles.featuredDayTitle}>{activeDay.title}</h3>
                        <p className={styles.featuredDayDesc}>{activeDay.details}</p>

                        {/* Sightseeing Included */}
                        <div className={styles.sightseeingBox}>
                          <span className={styles.sightseeingLabel}>📍 Sight Seeing Included:</span>
                          <div className={styles.sightseeingTags}>
                            {getSightseeingForDay(selectedDayIdx).map((place, pIdx) => (
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
                            <span className={styles.transferVal}>{getTransitForDay(selectedDayIdx)}</span>
                          </div>
                        </div>

                        {/* Meals Inclusions Bar */}
                        <div className={styles.mealsBar}>
                          <span className={styles.mealsBarLabel}>🍽️ Meals Included:</span>
                          <div className={styles.mealsItemsList}>
                            <div className={`${styles.mealItem} ${styles.mealIncluded}`}>
                              <span className={styles.mealDot}>✓</span>
                              <span>Breakfast: <strong>Included</strong></span>
                            </div>
                            <div className={`${styles.mealItem} ${styles.mealIncluded}`}>
                              <span className={styles.mealDot}>✓</span>
                              <span>Lunch: <strong>Included</strong></span>
                            </div>
                            <div className={`${styles.mealItem} ${styles.mealIncluded}`}>
                              <span className={styles.mealDot}>✓</span>
                              <span>High Tea: <strong>Included</strong></span>
                            </div>
                            <div className={`${styles.mealItem} ${styles.mealIncluded}`}>
                              <span className={styles.mealDot}>✓</span>
                              <span>Dinner: <strong>Included</strong></span>
                            </div>
                          </div>
                        </div>
                      </article>
                    )}

                    {/* All Days View */}
                    {selectedDayIdx === 'all' && (
                      <div className={styles.dayCardsList}>
                        {route.suggestedItinerary.map((dayItem, idx) => (
                          <article key={idx} className={styles.dayCard}>
                            <div className={styles.dayCardHeader}>
                              <span className={styles.dayNumberBadge}>{dayItem.day}</span>
                              <h3 className={styles.dayCardTitle}>{dayItem.title}</h3>
                            </div>
                            <p className={styles.dayCardDesc}>{dayItem.details}</p>

                            <div className={styles.sightseeingBox}>
                              <span className={styles.sightseeingLabel}>📍 Sight Seeing Included:</span>
                              <div className={styles.sightseeingTags}>
                                {getSightseeingForDay(idx).map((place, pIdx) => (
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
                                <span className={styles.transferVal}>{getTransitForDay(idx)}</span>
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
                            <span>Guided Sunset Tour to the surreal White Rann with Camel Cart ride assistance</span>
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

                {/* TAB 3: TRANSIT GUIDE */}
                {activeTab === 'transit' && (
                  <div className={styles.tabPanel}>
                    <div className={styles.transitGrid}>
                      <div className={styles.transitCard}>
                        <span className={styles.transitIcon}>✈️</span>
                        <h3>By Air (Flights from {route.cityName})</h3>
                        <p>{route.flightRoute}</p>
                      </div>

                      <div className={styles.transitCard}>
                        <span className={styles.transitIcon}>🚆</span>
                        <h3>By Train</h3>
                        <p>{route.trainRoute}</p>
                      </div>

                      <div className={styles.transitCard}>
                        <span className={styles.transitIcon}>🚌</span>
                        <h3>Bhuj to Tent City Transfers</h3>
                        <p>{route.transferDetails}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: FAQS */}
                {activeTab === 'faqs' && (
                  <div className={styles.tabPanel}>
                    <RannFaqAccordion 
                      faqs={route.faqs} 
                      enquireAnchor={`/enquire?destination=${encodeURIComponent('Rann Utsav (' + route.cityName + ')')}&service=Domestic+Holiday`} 
                    />
                  </div>
                )}
              </div>

              {/* Sticky Right Booking Card */}
              <aside className={styles.stickyBookingCol}>
                <div className={styles.stickyBookingCard}>
                  <span className={styles.stickyBookingBadge}>RESERVE TENT CITY</span>
                  <h3 className={styles.stickyPackageName}>Rann Utsav ({route.cityName})</h3>
                  <div className={styles.stickyTierName}>{currentCategory.category}</div>
                  <div className={styles.stickyPriceRow}>
                    <span className={styles.stickyPriceVal}>{currentCategory.price}</span>
                  </div>

                  <div className={styles.quickFormBox}>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.whatsappBookingBtn}
                    >
                      💬 WhatsApp Instant Tent Booking
                    </a>

                    <Link
                      href={`/enquire?destination=${destinationQuery}&duration=3+Nights+%2F+4+Days&service=Rann+Utsav+(${encodeURIComponent(currentCategory.category)})`}
                      className={styles.onlineEnquiryBtn}
                    >
                      ✦ Request Custom PDF Quote &rarr;
                    </Link>
                  </div>

                  <div className={styles.trustBulletsList}>
                    <div className={styles.trustBullet}>
                      <span>⚡</span> <span>Instant 15-Minute Quotation</span>
                    </div>
                    <div className={styles.trustBullet}>
                      <span>🎪</span> <span>100% Official Dhordo Tent Inventory</span>
                    </div>
                    <div className={styles.trustBullet}>
                      <span>🛡️</span> <span>Verified AC Transfers from Bhuj</span>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Explore Other City Routes */}
        {otherRoutes && otherRoutes.length > 0 && (
          <section className={styles.otherRoutesSection}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <span className={styles.eyebrow}>OTHER DEPARTURE HUBS</span>
                <h2 className={styles.sectionTitle}>Explore Rann Utsav Packages from Other Cities</h2>
              </div>

              <div className={styles.otherRoutesGrid}>
                {otherRoutes.slice(0, 4).map((other, idx) => (
                  <Link
                    key={idx}
                    href={`/rann-utsav/${other.slug}`}
                    className={styles.otherRouteCard}
                  >
                    <span className={styles.otherRouteCity}>{other.cityName}</span>
                    <span className={styles.otherRouteArrow}>&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <EnquireCtaBanner />
      </main>
    </>
  );
}
