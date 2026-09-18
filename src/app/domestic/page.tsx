import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { getSiteConfig } from '@/lib/siteConfig';
import styles from './page.module.css';

export const revalidate = 0; // Fresh content

export const metadata = {
  title: "Domestic Luxury Holidays in India | Sobhavi Travels",
  description: "Bespoke domestic tours across Rajasthan, Shimla & Manali, Kerala, Andaman, and Kashmir. Handcrafted itineraries, 5-star heritage hotels, and private chauffeured luxury transfers."
};

interface DayPlan {
  day: string;
  title: string;
}

interface DomesticDest {
  slug?: string;
  name: string;
  tagline: string;
  image: string;
  videoUrl?: string;
  duration: string;
  bestTime: string;
  startingPrice: string;
  airportCode?: string;
  overview: string;
  dayPlan: DayPlan[];
  inclusions: string[];
}

const FALLBACK_DOMESTIC: DomesticDest[] = [
  {
    slug: "highlights-of-rajasthan",
    name: "Rajasthan",
    tagline: "Highlights of Rajasthan: Jaipur, Jodhpur & Udaipur",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900&auto=format&fit=crop",
    videoUrl: "/videos/destinations/rajasthan.mp4",
    duration: "5 Nights / 6 Days",
    bestTime: "October – March",
    startingPrice: "Starting ₹25,084",
    airportCode: "JAI / UDR",
    overview: "Experience the colours, forts, palaces and lakes of Rajasthan with accommodation, daily breakfast, private transfers, intercity transport and 13 sightseeing points across Jaipur (2N), Jodhpur (1N), and Udaipur (2N).",
    dayPlan: [
      { day: "Day 1", title: "Arrive in Jaipur — Private Airport Transfer to Hotel & Leisure" },
      { day: "Day 2", title: "Jaipur Sightseeing — Full-Day Amer Fort & City Palace Tour" },
      { day: "Day 3", title: "Jaipur to Jodhpur via Ajmer & Pushkar — Brahma Temple, Dargah & Sagar Lake" },
      { day: "Day 4", title: "Jodhpur to Udaipur via Ranakpur — Mehrangarh Fort, Phool Mahal & Sheesh Mahal" },
      { day: "Day 5", title: "Udaipur Sightseeing — Bharatiya Lok Kala Mandal, City Palace & Jag Mandir" },
      { day: "Day 6", title: "Departure from Udaipur — Private Airport/Railway Station Drop" }
    ],
    inclusions: ["5 Nights Accommodation at Selected Hotels (Standard, Deluxe or Luxury)", "Daily Buffet Breakfast at All Hotels", "Private Airport & Railway Station Transfers", "Intercity Transfers by AC All India Tourist Permit Vehicle", "13 Sightseeing Points with Tolls, Parking & Fuel Included"]
  },
  {
    slug: "exotic-shimla-manali",
    name: "Shimla & Manali",
    tagline: "Exotic Shimla Manali: Kufri, Kullu Valley & Solang",
    image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=900&auto=format&fit=crop",
    videoUrl: "/videos/destinations/shimla-manali.mp4",
    duration: "5 Nights / 6 Days",
    bestTime: "Year-Round (Snow: Dec–Feb)",
    startingPrice: "Starting ₹31,616",
    airportCode: "DEL / IXC",
    overview: "Discover colonial charm in Shimla (2N) with Kufri excursion and the alpine pine valleys of Manali (3N) with Hadimba Temple, Buddhist Monastery, and Solang Valley with daily breakfast and dinner.",
    dayPlan: [
      { day: "Day 1", title: "Delhi to Shimla (350 km) — Scenic Himalayan Drive & Hotel Check-in" },
      { day: "Day 2", title: "Shimla City Tour & Kufri Excursion — Himalayan Nature Park & Fagu Valley" },
      { day: "Day 3", title: "Shimla to Manali (265 km) — Enroute Pandoh Dam, Hanogi Mata & Kullu Valley" },
      { day: "Day 4", title: "Manali Sightseeing — Ancient Hadimba Devi Temple (1553 CE) & Buddhist Monastery" },
      { day: "Day 5", title: "Manali to Solang Valley — Alpine Mountain Views & Snow Adventures" },
      { day: "Day 6", title: "Manali to Chandigarh (280 km) — Drop at Airport/Railway Station" }
    ],
    inclusions: ["5 Nights Accommodation (Sukhsagar Regency & Sarthak Regency or similar)", "Daily Breakfast & Dinner at All Hotels (MAP Plan)", "8 Sightseeing Tours as per Itinerary", "Private Dedicated Cab for Transfers & Sightseeing", "All Road Taxes, Tolls, Driver Bata & Parking"]
  },
  {
    slug: "highlights-of-kerala",
    name: "Kerala",
    tagline: "Highlights of Kerala: Cochin, Munnar, Thekkady & Alleppey",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=900&auto=format&fit=crop",
    videoUrl: "/videos/destinations/kerala.mp4",
    duration: "5 Nights / 6 Days",
    bestTime: "September – April",
    startingPrice: "Starting ₹32,084",
    airportCode: "COK / TRV",
    overview: "Explore Cochin's colonial heritage (1N), the waterfalls and tea gardens of Munnar (2N), the wildlife and spice plantations of Thekkady (1N) and the backwaters of Alleppey (1N).",
    dayPlan: [
      { day: "Day 1", title: "Arrive in Cochin — Dutch Palace, Jewish Synagogue, St. Francis Church & Marine Drive" },
      { day: "Day 2", title: "Cochin to Munnar — Cheeyapara & Valara Waterfalls, Rolling Tea Hills" },
      { day: "Day 3", title: "Munnar Sightseeing — Mattupetty Dam, Kundala Dam Lake, Echo Point & Tea Museum" },
      { day: "Day 4", title: "Munnar to Thekkady — Spice Plantation Tour & Periyar Tiger Reserve Lake Safari" },
      { day: "Day 5", title: "Thekkady to Alleppey — Venice of the East Backwaters & Shikara Boat Cruise" },
      { day: "Day 6", title: "Departure from Cochin — Private Airport/Railway Station Transfer" }
    ],
    inclusions: ["5 Nights Accommodation in Base Category Rooms at Selected Hotels/Resorts", "Daily Breakfast at All Hotels (Bed & Breakfast Plan)", "Air-Conditioned Cab for All Transfers & Sightseeing", "Periyar Spice Plantation & Backwater Shikara Assistance", "Toll, Parking, Driver Bata, Road Tax & Fuel Charges Included"]
  },
  {
    slug: "highlights-of-andaman",
    name: "Andaman & Nicobar Islands",
    tagline: "Highlights of Andaman: Port Blair, Havelock & Neil Island",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop",
    videoUrl: "/videos/destinations/andaman.mp4",
    duration: "5 Nights / 6 Days",
    bestTime: "October – May",
    startingPrice: "Starting ₹24,034",
    airportCode: "IXZ",
    overview: "Experience white-sand beaches, coral reefs and island ferries across Havelock Island (2N), Neil Island (1N), and Port Blair (2N) with daily breakfast and private ferry transfers.",
    dayPlan: [
      { day: "Day 1", title: "Arrive in Port Blair — Private Ferry to Havelock Island & Radhanagar Beach Sunset" },
      { day: "Day 2", title: "Havelock Island — Elephant Beach Snorkelling & Water Sports (Jet Ski, Banana Ride)" },
      { day: "Day 3", title: "Havelock to Neil Island — Bharatpur Beach, Sunset Laxmanpur & Natural Coral Bridge" },
      { day: "Day 4", title: "Neil Island to Port Blair — Scenic Inter-Island Ferry & Day at Leisure" },
      { day: "Day 5", title: "Port Blair — Historic Ross Island (British/Japanese Remains) & North Bay Coral Safari" },
      { day: "Day 6", title: "Departure from Port Blair — Airport Drop for Onward Journey" }
    ],
    inclusions: ["5 Nights Accommodation in Selected Island Hotels & Resorts", "Daily Breakfast (CP Plan) at All Hotels", "Inter-Island Private Ferry Transfers (Port Blair - Havelock - Neil - Port Blair)", "All Airport, Jetty & Sightseeing AC Transfers", "Radhanagar, Elephant Beach & Ross Island Sightseeing"]
  },
  {
    name: "Kashmir: Paradise on Earth",
    tagline: "Dal Lake Shikara, Gulmarg Gondola & Betaab Valley",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=900&auto=format&fit=crop",
    duration: "5 Nights / 6 Days",
    bestTime: "Year-Round (Snow: Dec–March, Tulips: April)",
    startingPrice: "Starting ₹29,500",
    airportCode: "SXR",
    overview: "Experience heaven on earth with private luxury houseboat stays on Dal Lake, high-altitude cable car thrills on the Gulmarg Gondola, and the pine meadows of Pahalgam and Sonamarg.",
    dayPlan: [
      { day: "Day 1", title: "Arrive in Srinagar — Traditional Shikara Sunset Ride & Heritage Houseboat Stay" },
      { day: "Day 2", title: "Srinagar to Gulmarg — World's Highest Gondola Ride (Phase 1 & 2) & Snow Skiing" },
      { day: "Day 3", title: "Gulmarg to Pahalgam — Saffron Fields of Pampore & Avantipur Ruins" },
      { day: "Day 4", title: "Pahalgam Valley — Betaab Valley, Aru Valley & Chandanwari Exploration" },
      { day: "Day 5", title: "Pahalgam to Srinagar — Mughal Gardens (Shalimar & Nishat Bagh) & Saffron Souks" },
      { day: "Day 6", title: "Departure from Srinagar Airport" }
    ],
    inclusions: ["Luxury Carved Cedar Houseboat & 5-Star Valley Resorts", "Daily Breakfast & Authentic Kashmiri Wazwan Dinners", "Private AC Cab Throughout the Trip", "Complimentary Shikara Ride on Dal Lake", "Gondola Ticket Booking Assistance"]
  }
];

const DOMESTIC_FAQS = [
  {
    q: "What is included in Sobhavi Travels domestic holiday packages?",
    a: "Our domestic packages include verified 4-Star or 5-Star accommodations, daily gourmet breakfast and chef dinners, a private sanitized vehicle with an experienced chauffeur for all airport and sightseeing transfers, monument entry permits, and dedicated on-trip concierge assistance via WhatsApp."
  },
  {
    q: "Can we customize our itinerary and choose our own hotels?",
    a: "Absolutely. Sobhavi Travels specializes in 100% bespoke journeys. Whether you want to add an extra night in Udaipur, upgrade to a luxury private pool villa in Kerala, or request a 4x4 mountain safari in Himachal, we tailor every detail to your schedule."
  },
  {
    q: "Are flights included in these domestic packages?",
    a: "We offer both land-only packages and complete packages including flights. Our corporate ticketing desk accesses special airline consolidator fares with Emirates, IndiGo, Air India, and Vistara to get you the best connections."
  },
  {
    q: "How does the booking process work with Sobhavi Travels?",
    a: "Simply click 'Book This Package' or reach out directly on WhatsApp (+917406994752). Your dedicated travel specialist will craft a detailed itinerary, confirm hotel availability, and finalize your booking with zero hidden charges."
  }
];

export default function DomesticPage() {
  const config = getSiteConfig();
  const destinations = (config.domesticDestinations && config.domesticDestinations.length > 0)
    ? config.domesticDestinations
    : FALLBACK_DOMESTIC;

  const phone = config.company?.phone || "+917406994752";
  const cleanWa = (config.company?.whatsapp || "7406994752").replace(/[^0-9]/g, '');

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": DOMESTIC_FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <Navbar />

      <main className={styles.main}>
        {/* CLEAN LUXURY HERO SECTION */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                DOMESTIC HOLIDAYS
              </span>
              <h1 className={styles.heroTitle}>Discover Incredible India.</h1>
              <p className={styles.heroDesc}>
                Handpicked domestic journeys across Rajasthan, Shimla & Manali, Kerala, Andaman, and Kashmir — complete with 5-star stays, gourmet dining, and private chauffeur-driven cars.
              </p>

              <div className={styles.heroActions}>
                <Link href="/enquire?destination=Rajasthan" className="btn-gold">
                  Plan Your Trip &rarr;
                </Link>
                <a 
                  href={`https://wa.me/${cleanWa.startsWith('91') ? cleanWa : '91' + cleanWa}?text=Hello%20Sobhavi%20Travels!%20I%20want%20to%20plan%20a%20Domestic%20holiday.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  WhatsApp Concierge
                </a>
              </div>

              <div className={styles.perksRow}>
                <div className={styles.perkItem}>
                  <span className={styles.perkIcon}>✓</span>
                  <span>5-Star Luxury Stays</span>
                </div>
                <div className={styles.perkItem}>
                  <span className={styles.perkIcon}>✓</span>
                  <span>Breakfast & Dinner Included</span>
                </div>
                <div className={styles.perkItem}>
                  <span className={styles.perkIcon}>✓</span>
                  <span>Private Cab & Chauffeur</span>
                </div>
                <div className={styles.perkItem}>
                  <span className={styles.perkIcon}>✓</span>
                  <span>Concierge Support (12 PM – 9 PM): {phone}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOMESTIC DESTINATIONS LIST */}
        <section className={styles.destinationsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>WHERE WE SERVE</span>
              <h2 className={styles.sectionTitle}>Featured Domestic Itineraries</h2>
              <p className={styles.sectionDesc}>
                Whether exploring majestic desert forts, misty pine hill stations, tranquil backwaters, or tropical island beaches — we craft every detail to royal perfection.
              </p>
            </div>

            <div className={styles.grid}>
              {destinations.map((dest) => {
                const targetSlug = dest.slug || (
                  dest.name.toLowerCase().includes('rajasthan') ? 'highlights-of-rajasthan' :
                  dest.name.toLowerCase().includes('shimla') ? 'exotic-shimla-manali' :
                  dest.name.toLowerCase().includes('kerala') ? 'highlights-of-kerala' :
                  dest.name.toLowerCase().includes('andaman') ? 'highlights-of-andaman' : null
                );
                const detailUrl = targetSlug ? `/journeys/${targetSlug}` : `/enquire?destination=${encodeURIComponent(dest.name)}`;

                return (
                  <div 
                    key={dest.name} 
                    id={dest.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')} 
                    className={styles.destCard}
                  >
                    <div 
                      className={styles.imageWrapper}
                      style={{ backgroundImage: `url(${dest.image})` }}
                    >
                      <div className={styles.imageOverlay} />
                      <span className={styles.destBadge}>{dest.duration} • {dest.bestTime}</span>
                      
                      {/* Top Right Floating Price Banner (Image 1 Style) */}
                      {dest.startingPrice && (
                        <Link href={detailUrl} className={styles.topRightPriceBanner}>
                          <span className={styles.priceBannerLabel}>Starting From</span>
                          <span className={styles.priceBannerAmount}>{dest.startingPrice.replace(/Starting\s*/i, '')}</span>
                        </Link>
                      )}
                    </div>

                    <div className={styles.cardContent}>
                      <h3 className={styles.destName}>{dest.name}</h3>
                      <div className={styles.destTagline}>{dest.tagline}</div>

                      <p className={styles.destOverview}>{dest.overview}</p>

                      {dest.dayPlan && dest.dayPlan.length > 0 && (
                        <div className={styles.dayPlanList}>
                          <strong style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#d4af37' }}>
                            Itinerary Highlights:
                          </strong>
                          {dest.dayPlan.slice(0, 4).map((d: DayPlan, i: number) => (
                            <div key={i} className={styles.dayPlanItem}>
                              <span className={styles.dayNumber}>{d.day}:</span>
                              <span>{d.title}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className={styles.inclusionsBox}>
                        <div className={styles.inclusionsTitle}>Package Inclusions:</div>
                        <div className={styles.inclusionsList}>
                          {dest.inclusions.map((inc, i) => (
                            <div key={i} className={styles.inclusionItem}>
                              <span className={styles.checkIcon}>✓</span>
                              <span>{inc}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Dual Action Buttons (Image 1 Style) */}
                      <div className={styles.cardActionsStack}>
                        <Link 
                          href={`/enquire?destination=${encodeURIComponent(dest.name)}&service=Domestic+Holiday`} 
                          className={styles.primaryEnquireBtn}
                        >
                          ✦ Enquire for {dest.name.split(' ')[0]} &rarr;
                        </Link>
                        <Link 
                          href={detailUrl}
                          className={styles.secondaryPlanBtn}
                        >
                          View Route Details &amp; Plan
                        </Link>
                        <a 
                          href={`https://wa.me/${cleanWa.startsWith('91') ? cleanWa : '91' + cleanWa}?text=Hello%20Sobhavi%20Travels,%20I%20am%20interested%20in%20the%20${encodeURIComponent(dest.name)}%20package.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.cardWaRow}
                        >
                          💬 WhatsApp Specialist for {dest.name.split(' ')[0]}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEO FAQ SECTION */}
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.faqHeader}>
              <span className={styles.sectionEyebrow}>COMMON QUESTIONS</span>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <p className={styles.sectionDesc}>Everything you need to know about planning your India holiday with Sobhavi Travels.</p>
            </div>

            <div className={styles.faqGrid}>
              {DOMESTIC_FAQS.map((faq, idx) => (
                <div key={idx} className={styles.faqCard}>
                  <h3 className={styles.faqQuestion}>{faq.q}</h3>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
