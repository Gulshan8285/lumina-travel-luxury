import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { getSiteConfig } from '@/lib/siteConfig';
import styles from './page.module.css';

export const revalidate = 0; // Fresh content

interface IntlDest {
  name: string;
  tagline: string;
  image: string;
  videoUrl?: string;
  duration: string;
  bestTime: string;
  overview: string;
  inclusions: string[];
}

const FALLBACK_INTERNATIONAL: IntlDest[] = [
  {
    name: "Dubai",
    tagline: "Futuristic Skylines, Luxury Desert Safari & Royal Marina",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=72&w=720&auto=format&fit=crop",
    videoUrl: "/videos/destinations/dubai.mp4",
    duration: "5 Nights / 6 Days",
    bestTime: "October – April",
    overview: "Ascend Burj Khalifa's 148th floor At The Top Sky, race across golden red dunes in private 4x4 desert safaris, cruise Dubai Marina on a luxury yacht, and indulge in world-class shopping.",
    inclusions: ["5-Star Downtown / Marina Hotel", "Daily Buffet Breakfast & Gourmet Dinners", "Private AC Luxury Vehicle for All Transfers", "Burj Khalifa & Marina Yacht Charter Tickets"]
  },
  {
    name: "Singapore",
    tagline: "Gardens by the Bay, Marina Bay Sands & Sentosa Island",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=72&w=720&auto=format&fit=crop",
    videoUrl: "/videos/destinations/singapore.mp4",
    duration: "4 Nights / 5 Days",
    bestTime: "Year-Round",
    overview: "Marvel at Avatar-like Supertree structures, walk through the Cloud Forest dome, take a cable car across to Sentosa Island, and enjoy nightlife along Clarke Quay.",
    inclusions: ["5-Star Marina Bay / Orchard Road Hotel", "Daily Breakfast Included", "Private Airport & Sightseeing Transfers", "Universal Studios & Gardens by the Bay Passes"]
  },
  {
    name: "Bali",
    tagline: "Private Pool Villas, Sacred Temples & Nusa Penida Cliffs",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=72&w=720&auto=format&fit=crop",
    videoUrl: "/videos/destinations/bali.mp4",
    duration: "6 Nights / 7 Days",
    bestTime: "April – October",
    overview: "Wake up in a private jungle pool villa in Ubud, visit the dramatic sea temple at Uluwatu, swing over emerald Tegallalang rice terraces, and speed boat to the white sands of Nusa Penida.",
    inclusions: ["Luxury Private Pool Villa (Ubud & Seminyak)", "Daily Floating Breakfast & Gourmet Dinners", "Private Dedicated AC Chauffeur & Guide", "Nusa Penida Island Speedboat Day Tour"]
  },
  {
    name: "Maldives",
    tagline: "Overwater Coral Villas & All-Inclusive Island Indulgence",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=72&w=720&auto=format&fit=crop",
    videoUrl: "/videos/destinations/maldives.mp4",
    duration: "4 Nights / 5 Days",
    bestTime: "November – April",
    overview: "Pure tropical barefoot luxury. Sleep directly above vibrant turquoise lagoons in private overwater villas, snorkel with sea turtles and manta rays, and enjoy curated sandbank dining.",
    inclusions: ["Luxury Overwater Pool Villa", "All-Inclusive Plan: Breakfast, Lunch, Dinner & Drinks", "Return Scenic Seaplane / Speedboat Transfers", "Complimentary Snorkeling Equipment & Dolphin Cruise"]
  }
];

export default function InternationalPage() {
  const config = getSiteConfig();
  const destinations = (config.internationalDestinations && config.internationalDestinations.length > 0)
    ? config.internationalDestinations
    : FALLBACK_INTERNATIONAL;

  const phone = config.company?.phone || "+91 74069 94752";
  const cleanWa = (config.company?.whatsapp || "7406994752").replace(/[^0-9]/g, '');

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* CLEAN LUXURY HERO SECTION */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                GLOBAL ESCAPES
              </span>
              <h1 className={styles.heroTitle}>Explore Beyond Borders.</h1>
              <p className={styles.heroDesc}>
                Bespoke international journeys across Dubai, Singapore, Bali, and Maldives — complete with 5-star resort stays, private luxury transfers, gourmet dining, and complete visa support.
              </p>

              <div className={styles.heroActions}>
                <Link href="/enquire?destination=Dubai" className="btn-pink">
                  Plan Your Trip &rarr;
                </Link>
                <a 
                  href={`https://wa.me/${cleanWa.startsWith('91') ? cleanWa : '91' + cleanWa}?text=Hello%20Sobhavi%20Travels!%20I%20want%20to%20plan%20an%20International%20holiday.`}
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
                  <span>5-Star Luxury Resorts</span>
                </div>
                <div className={styles.perkItem}>
                  <span className={styles.perkIcon}>✓</span>
                  <span>End-to-End Visa Assistance</span>
                </div>
                <div className={styles.perkItem}>
                  <span className={styles.perkIcon}>✓</span>
                  <span>Private Sightseeing & Transfers</span>
                </div>
                <div className={styles.perkItem}>
                  <span className={styles.perkIcon}>✓</span>
                  <span>24/7 Concierge: {phone}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 INTERNATIONAL DESTINATIONS */}
        <section className={styles.destinationsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>GLOBAL HORIZONS</span>
              <h2 className={styles.sectionTitle}>Curated International Destinations</h2>
              <p className={styles.sectionDesc}>
                Handpicked global journeys designed with premier 5-star accommodations, private guided tours, exquisite dining, and seamless logistics.
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
                    <p className={styles.destOverview}>{dest.overview}</p>

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
      </main>
    </>
  );
}
