import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { getSiteConfig } from '@/lib/siteConfig';
import styles from './page.module.css';

export const revalidate = 0; // Fresh content

interface DomesticDest {
  name: string;
  tagline: string;
  image: string;
  videoUrl?: string;
  duration: string;
  bestTime: string;
  overview: string;
  inclusions: string[];
}

const FALLBACK_DOMESTIC: DomesticDest[] = [
  {
    name: "Rajasthan",
    tagline: "Royal Palaces, Forts & Thar Desert Glamping",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=72&w=720&auto=format&fit=crop",
    videoUrl: "/videos/destinations/rajasthan.mp4",
    duration: "6 Nights / 7 Days",
    bestTime: "October – March",
    overview: "Experience regal hospitality across Jaipur, Udaipur, Jodhpur, and Jaisalmer. Stay in historic heritage palaces, embark on private desert camel safaris under starlit skies, and savor lavish royal thalis.",
    inclusions: ["5-Star Heritage Haveli Stays", "Daily Breakfast & Royal Dinner", "Private Chauffeur-Driven AC Sedan", "Guided Palace & Fort Tours"]
  },
  {
    name: "Shimla Manali",
    tagline: "Snow Peaks, Alpine Pine Valleys & Thrilling Passes",
    image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=72&w=720&auto=format&fit=crop",
    videoUrl: "/videos/destinations/shimla-manali.mp4",
    duration: "5 Nights / 6 Days",
    bestTime: "Year-Round (Snow: Dec–Feb)",
    overview: "Breath-taking Himalayan panoramas, cedar forests, colonial heritage on Shimla's Mall Road, and high-altitude adventures in Solang Valley and Rohtang Pass.",
    inclusions: ["Luxury Cedar Chalet / 5-Star Mountain Resort", "Breakfast & Dinner Included", "Private 4x4 Mountain Cab with Driver", "Rohtang & Solang Valley Excursion"]
  },
  {
    name: "Kerala",
    tagline: "Tranquil Backwaters, Tea Plantations & Ayurvedic Wellness",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=72&w=720&auto=format&fit=crop",
    videoUrl: "/videos/destinations/kerala.mp4",
    duration: "5 Nights / 6 Days",
    bestTime: "September – April",
    overview: "Cruise serene palm-fringed backwaters aboard private luxury houseboats, wander misty tea gardens in Munnar, and rejuvenate with authentic Ayurvedic spa therapies.",
    inclusions: ["Private Luxury AC Houseboat & Resorts", "All Meals on Houseboat + Daily Breakfasts", "Private AC Cab & Expert Chauffeur", "Kathakali Cultural Evening Tickets"]
  },
  {
    name: "Andaman",
    tagline: "Emerald Lagoons, Coral Reefs & Radhanagar Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=72&w=720&auto=format&fit=crop",
    videoUrl: "/videos/destinations/andaman.mp4",
    duration: "5 Nights / 6 Days",
    bestTime: "October – May",
    overview: "White sandy beaches, turquoise lagoons, and world-class scuba diving. From Port Blair's Cellular Jail to Havelock's Radhanagar Beach (ranked among Asia's best).",
    inclusions: ["Premium Beachfront Cottages & Resorts", "Daily Breakfast & Chef Dinner", "Private Ferry (Makruzz/Nautika) Tickets", "All Island Private AC Transfers"]
  }
];

export default function DomesticPage() {
  const config = getSiteConfig();
  const destinations = (config.domesticDestinations && config.domesticDestinations.length > 0)
    ? config.domesticDestinations
    : FALLBACK_DOMESTIC;

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
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                DOMESTIC HOLIDAYS
              </span>
              <h1 className={styles.heroTitle}>Discover Incredible India.</h1>
              <p className={styles.heroDesc}>
                Handpicked domestic journeys across Rajasthan, Shimla & Manali, Kerala, and Andaman — complete with 5-star stays, gourmet dining, and private chauffeur-driven cars.
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
                  <span>24/7 Concierge: {phone}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 DOMESTIC DESTINATIONS LIST */}
        <section className={styles.destinationsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>WHERE WE SERVE</span>
              <h2 className={styles.sectionTitle}>Featured Domestic Destinations</h2>
              <p className={styles.sectionDesc}>
                Whether exploring majestic desert forts, misty pine hill stations, tranquil backwaters, or tropical island beaches — we craft every detail to royal perfection.
              </p>
            </div>

            <div className={styles.grid}>
              {destinations.map((dest) => (
                <div key={dest.name} className={styles.destCard}>
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
