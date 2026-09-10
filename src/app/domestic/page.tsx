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
  name: string;
  tagline: string;
  image: string;
  videoUrl?: string;
  duration: string;
  bestTime: string;
  startingPrice: string;
  overview: string;
  dayPlan: DayPlan[];
  inclusions: string[];
}

const FALLBACK_DOMESTIC: DomesticDest[] = [
  {
    name: "Rajasthan",
    tagline: "Royal Palaces, Forts & Thar Desert Glamping",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900&auto=format&fit=crop",
    videoUrl: "/videos/destinations/rajasthan.mp4",
    duration: "6 Nights / 7 Days",
    bestTime: "October – March",
    startingPrice: "Starting ₹28,500 / person",
    overview: "Experience regal Mewar hospitality across Jaipur, Udaipur, Jodhpur, and Jaisalmer. Stay in historic heritage palaces, embark on private desert camel safaris under starlit skies, and savor lavish royal thalis.",
    dayPlan: [
      { day: "Day 1", title: "Arrive in Jaipur — Royal Welcome & Chokhi Dhani Heritage Evening" },
      { day: "Day 2", title: "Jaipur Sightseeing — Amber Fort Elephant Ride & City Palace Private Tour" },
      { day: "Day 3", title: "Jaipur to Jodhpur — Mehrangarh Fort Ramparts & Umaid Bhawan Palace" },
      { day: "Day 4", title: "Jodhpur to Jaisalmer — Thar Desert Dunes & Luxury Tented Camp with Folk Music" },
      { day: "Day 5", title: "Jaisalmer to Udaipur — Enroute Ranakpur Jain Temples & Lake Pichola Sunset" },
      { day: "Day 6", title: "Udaipur Exploration — Saheliyon-ki-Bari & Jag Mandir Island" },
      { day: "Day 7", title: "Departure from Udaipur with Regal Memories" }
    ],
    inclusions: ["5-Star Heritage Haveli Stays", "Daily Breakfast & Royal Dinner", "Private Chauffeur-Driven AC Sedan", "Guided Palace & Fort Tours", "Desert Safari with Cultural Performance"]
  },
  {
    name: "Shimla & Manali",
    tagline: "Snow Peaks, Alpine Pine Valleys & Thrilling Passes",
    image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=900&auto=format&fit=crop",
    videoUrl: "/videos/destinations/shimla-manali.mp4",
    duration: "5 Nights / 6 Days",
    bestTime: "Year-Round (Snow: Dec–Feb)",
    startingPrice: "Starting ₹22,500 / person",
    overview: "Breath-taking Himalayan panoramas, cedar forests, colonial heritage on Shimla's Mall Road, and high-altitude adventures in Solang Valley, Atal Tunnel, and Rohtang Pass.",
    dayPlan: [
      { day: "Day 1", title: "Delhi/Chandigarh to Shimla — Scenic Mountain Drive & Mall Road Stroll" },
      { day: "Day 2", title: "Shimla to Kufri — Alpine Cedar Trails, Himalayan Nature Park & Jakhoo Temple" },
      { day: "Day 3", title: "Shimla to Manali — Enroute Kullu River Rafting, Pandoh Dam & Shawl Weaving" },
      { day: "Day 4", title: "Solang Valley & Atal Tunnel — Snow Activities, Paragliding & Sissu Waterfall" },
      { day: "Day 5", title: "Manali Local Sightseeing — Hadimba Devi Temple, Vashisht Hot Springs & Old Manali Cafes" },
      { day: "Day 6", title: "Scenic Return Drive to Chandigarh/Delhi" }
    ],
    inclusions: ["Luxury Cedar Chalet / 5-Star Mountain Resort", "Breakfast & Dinner Included Daily", "Private 4x4 Mountain Cab with Expert Driver", "Atal Tunnel & Solang Valley Excursion", "All Tolls, Parking & Fuel"]
  },
  {
    name: "Kerala",
    tagline: "Tranquil Backwaters, Tea Plantations & Ayurvedic Wellness",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=900&auto=format&fit=crop",
    videoUrl: "/videos/destinations/kerala.mp4",
    duration: "5 Nights / 6 Days",
    bestTime: "September – April",
    startingPrice: "Starting ₹26,000 / person",
    overview: "Cruise serene palm-fringed backwaters aboard private luxury houseboats, wander misty tea gardens in Munnar, encounter wild elephants in Periyar, and rejuvenate with authentic Ayurvedic spa therapies.",
    dayPlan: [
      { day: "Day 1", title: "Cochin to Munnar — Cheeyappara Waterfalls & Rolling Emerald Tea Gardens" },
      { day: "Day 2", title: "Munnar Sightseeing — Eravikulam National Park, Mattupetty Dam & Echo Point" },
      { day: "Day 3", title: "Munnar to Thekkady — Spice Plantation Tour & Periyar Lake Boat Safari" },
      { day: "Day 4", title: "Thekkady to Alleppey — Board Private AC Houseboat with Personal Chef" },
      { day: "Day 5", title: "Alleppey to Kovalam/Cochin — Marari Beach Relaxation & Fort Kochi Heritage" },
      { day: "Day 6", title: "Departure from Cochin with Spice Souvenirs" }
    ],
    inclusions: ["Private Luxury AC Houseboat & 5-Star Resorts", "All Meals on Houseboat + Daily Buffet Breakfasts", "Private AC Cab & Expert Uniformed Chauffeur", "Spice Garden Walk & Kathakali Show Passes"]
  },
  {
    name: "Andaman & Nicobar Islands",
    tagline: "Emerald Lagoons, Coral Reefs & Radhanagar Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=900&auto=format&fit=crop",
    videoUrl: "/videos/destinations/andaman.mp4",
    duration: "5 Nights / 6 Days",
    bestTime: "October – May",
    startingPrice: "Starting ₹32,000 / person",
    overview: "Pristine white coral beaches, turquoise lagoons, and world-class scuba diving. From Port Blair's historic Cellular Jail to Havelock's Radhanagar Beach (ranked among the world's best).",
    dayPlan: [
      { day: "Day 1", title: "Arrive at Port Blair — Cellular Jail Light & Sound Show & Corbyn's Cove" },
      { day: "Day 2", title: "High-Speed Catamaran Cruise to Havelock Island — Radhanagar Sunset" },
      { day: "Day 3", title: "Elephant Beach Scuba Diving & Snorkeling in Turquoise Reefs" },
      { day: "Day 4", title: "Havelock to Neil Island — Bharatpur Coral Beach & Natural Rock Bridge" },
      { day: "Day 5", title: "Return to Port Blair — Chidiya Tapu Sunset & Local Handicraft Shopping" },
      { day: "Day 6", title: "Airport Drop for Flight Home" }
    ],
    inclusions: ["Premium Beachfront Cottages & Resorts", "Daily Breakfast & Multi-Cuisine Dinners", "Private High-Speed Catamaran (Makruzz/Nautika) Tickets", "All Island Private AC Transfers", "Scuba & Snorkeling Assistance"]
  },
  {
    name: "Kashmir: Paradise on Earth",
    tagline: "Dal Lake Shikara, Gulmarg Gondola & Betaab Valley",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=900&auto=format&fit=crop",
    duration: "5 Nights / 6 Days",
    bestTime: "Year-Round (Snow: Dec–March, Tulips: April)",
    startingPrice: "Starting ₹29,500 / person",
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
                <Link href="/enquire?destination=Rajasthan" className="btn-pink">
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
              {destinations.map((dest) => (
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
                  </div>

                  <div className={styles.cardContent}>
                    <h3 className={styles.destName}>{dest.name}</h3>
                    <div className={styles.destTagline}>{dest.tagline}</div>
                    
                    {dest.startingPrice && (
                      <span className={styles.destPriceBadge}>{dest.startingPrice}</span>
                    )}

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

                    <div className={styles.cardActions}>
                      <Link 
                        href={`/enquire?destination=${encodeURIComponent(dest.name)}`} 
                        className={styles.bookBtn}
                      >
                        Book This Package
                      </Link>
                      <a 
                        href={`https://wa.me/${cleanWa.startsWith('91') ? cleanWa : '91' + cleanWa}?text=Hello%20Sobhavi%20Travels,%20I%20am%20interested%20in%20the%20${encodeURIComponent(dest.name)}%20package.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.whatsappBtn}
                        aria-label="WhatsApp"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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
