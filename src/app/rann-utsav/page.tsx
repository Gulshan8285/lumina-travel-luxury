import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import SinglePageForm from '@/components/ui/SinglePageForm';
import styles from './page.module.css';

export const metadata = {
  title: "Rann Utsav 2026–2027 Tour Packages | Sobhavi Travels",
  description: "Experience the White Desert of Kutch under the full moon. Official Rann Utsav packages with luxury Swiss AC tents at Dhordo, private Bhuj transfers, and cultural tours."
};

const PACKAGES = [
  {
    id: "rann-2n3d",
    title: "White Moon Discovery",
    duration: "2 Nights / 3 Days",
    tagline: "Essential White Desert & Tent City Experience",
    price: "₹18,500",
    popular: false,
    highlights: [
      "AC Swiss Tent stay at Dhordo Tent City",
      "All meals included (Buffet Breakfast, Lunch & Dinner)",
      "White Desert sunset & moonlit salt flats walk",
      "Cultural folk music & Gujarati garba performance",
      "Private AC transfers from Bhuj Airport / Station"
    ]
  },
  {
    id: "rann-3n4d",
    title: "Kutch Cultural Odyssey",
    duration: "3 Nights / 4 Days",
    tagline: "Our Most Popular Complete Festival Itinerary",
    price: "₹25,500",
    popular: true,
    highlights: [
      "Premium AC Swiss Tent with private veranda",
      "Full Moon midnight walk on crystalline salt flats",
      "Excursion to Kala Dungar (Black Hill) & Sunset Point",
      "Guided visits to Nirona (Rogan Art) & Bhujodi weaving villages",
      "Bhuj heritage tour: Aina Mahal, Prag Mahal & Swaminarayan Temple",
      "Chauffeured private AC vehicle throughout the journey"
    ]
  },
  {
    id: "rann-4n5d",
    title: "Royal Kutch & Mandvi Beach",
    duration: "4 Nights / 5 Days",
    tagline: "White Desert Glamping + Arabian Sea Beach Palace",
    price: "₹34,000",
    popular: false,
    highlights: [
      "2 Nights Tent City Dhordo + 2 Nights Mandvi Beach Resort",
      "Visit Vijay Vilas Palace & 400-year-old shipbuilding yard",
      "Private desert camel cart safari & ATV adventure pass",
      "Gourmet Kutchi thali & royal Kathiyawadi cuisine",
      "All White Desert entry permits & VIP escort included"
    ]
  }
];

const ITINERARY = [
  {
    day: "Day 1",
    title: "Arrival in Bhuj — Scenic Drive to Tent City Dhordo & White Desert Sunset",
    desc: "Your uniformed chauffeur greets you at Bhuj Airport or Railway Station. Enjoy a comfortable 1.5-hour AC drive through the arid beauty of Kutch to the vibrant Dhordo Tent City. After traditional Kutchi welcome rituals and check-in to your luxury AC Swiss tent, head to the White Desert just as the setting sun paints the salt crystals in shimmering copper and lavender."
  },
  {
    day: "Day 2",
    title: "Full Moon Salt Flat Walk, Desert Camel Safari & Cultural Folk Soiree",
    desc: "Rise early for a tranquil desert sunrise followed by a lavish buffet breakfast. Spend the afternoon browsing vibrant Kutchi handicraft bazaars inside the festival grounds. At dusk, embark on a camel-drawn cart ride deep into the white expanse. By nightfall, marvel at the full moon casting an ethereal silver glow over miles of silent salt plains, followed by live Kutchi folk dances around bonfires."
  },
  {
    day: "Day 3",
    title: "Kala Dungar (Black Hill), Magnetic Point & Artisan Heritage Villages",
    desc: "Drive to Kala Dungar, the highest peak in Kutch (462 m), offering panoramic vistas of the Great Rann stretching to the horizon. Visit the 400-year-old Dattatreya Temple. On the return journey, immerse yourself in living heritage at Nirona village, witnessing the rare 300-year-old Rogan fabric art and copper bell crafting, before exploring master shawl weavers in Bhujodi."
  },
  {
    day: "Day 4",
    title: "Bhuj Historic Palaces Walk & Departure with Handcrafted Memories",
    desc: "Enjoy breakfast at Tent City before checkout. Return to Bhuj to explore the Venetian Gothic Prag Mahal, the mirror-encrusted Aina Mahal, and the grand Swaminarayan Temple. Pick up authentic Kutchi embroidery, bandhani textiles, and roasted nuts before your chauffeur drops you at Bhuj Airport or Station for your onward journey."
  }
];

const FAQS = [
  {
    q: "When is the official Rann Utsav 2026–2027 taking place?",
    a: "Rann Utsav 2026–2027 runs from November 1, 2026 to March 7, 2027. The most sought-after dates are during the monthly Full Moon nights when the white salt desert glows brilliantly under moonlight."
  },
  {
    q: "What is the closest airport and how do we reach Dhordo Tent City?",
    a: "Bhuj Airport (BHJ) is the nearest airport, located approximately 80 km (1.5 hours drive) from Tent City Dhordo. Daily flights connect Bhuj to Mumbai. Alternatively, you can fly into Ahmedabad (380 km) or Rajkot (240 km). Sobhavi Travels arranges private chauffeur transfers from any hub."
  },
  {
    q: "Do Indian and foreign nationals need permits to visit the White Rann?",
    a: "Yes, because the Rann is situated near the international border, entry permits are mandatory. All permits are arranged in advance by Sobhavi Travels as part of your package, so you experience zero waiting or paperwork on ground."
  },
  {
    q: "What is the weather like and what clothing should we carry?",
    a: "Winter days in Kutch are pleasantly warm and sunny (24°C to 28°C), while desert nights become chilly (dropping to 10°C to 12°C). We recommend light, comfortable cotton wear for daytime and warm woolen shawls or jackets for nighttime desert walks."
  }
];

export default function RannUtsavPage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* Luxury Hero */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>GUJARAT CULTURAL EXPEDITION • FESTIVAL ESCAPES</span>
              <h1 className={styles.title}>The Great Rann of Kutch & Rann Utsav</h1>
              <p className={styles.subtitle}>
                Journey into India&apos;s most surreal landscape &mdash; where endless crystalline salt flats illuminate beneath the full moon. Experience luxury Swiss tent stays at Tent City Dhordo, private transfers from Bhuj, Kutchi folk concerts, and artisan heritage craft trails.
              </p>

              {/* Dates Bar */}
              <div className={styles.datesBar}>
                <span className={styles.datesIcon}>📅</span>
                <span className={styles.datesText}>Official Season Dates: <strong>1 November 2026 – 7 March 2027</strong> | Tent City Dhordo, Kutch</span>
              </div>

              <div className={styles.heroActions}>
                <a href="#packages" className={styles.primaryBtn}>
                  ✦ Explore Rann Packages &rarr;
                </a>
                <a
                  href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels,%20I%20want%20to%20plan%20a%20Rann%20Utsav%20trip%20to%20Kutch."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryBtn}
                >
                  💬 WhatsApp Rann Specialist
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Bar */}
        <section className={styles.highlightsStrip}>
          <div className="container">
            <div className={styles.highlightsGrid}>
              <div className={styles.highlightCard}>
                <span className={styles.cardIcon}>🎪</span>
                <h4 className={styles.cardTitle}>Luxury Swiss AC Tents</h4>
                <p className={styles.cardDesc}>King-size beds, en-suite baths, and veranda sit-outs at Dhordo Tent City.</p>
              </div>
              <div className={styles.highlightCard}>
                <span className={styles.cardIcon}>🌕</span>
                <h4 className={styles.cardTitle}>Full Moon Desert Walk</h4>
                <p className={styles.cardDesc}>Breathtaking nocturnal walks over moonlit salt plains glowing like diamonds.</p>
              </div>
              <div className={styles.highlightCard}>
                <span className={styles.cardIcon}>🎨</span>
                <h4 className={styles.cardTitle}>Artisan Village Trails</h4>
                <p className={styles.cardDesc}>Meet master artisans in Nirona (Rogan Art), Bhujodi, and Ajrakhpur.</p>
              </div>
              <div className={styles.highlightCard}>
                <span className={styles.cardIcon}>🚙</span>
                <h4 className={styles.cardTitle}>Chauffeured Bhuj Transfers</h4>
                <p className={styles.cardDesc}>Private AC sedans and SUVs with vetted drivers from Bhuj Airport/Station.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Curated Luxury Packages */}
        <section id="packages" className={styles.packagesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>CURATED FESTIVAL PACKAGES</span>
              <h2 className={styles.sectionTitle}>Handcrafted Rann Utsav Experiences</h2>
              <p className={styles.sectionSubtitle}>
                Choose your ideal stay duration. All packages include luxury tent accommodation, all meals, White Desert entry permits, guided excursions, and private transfers.
              </p>
            </div>

            <div className={styles.packagesGrid}>
              {PACKAGES.map((pkg) => (
                <div key={pkg.id} className={`${styles.packageCard} ${pkg.popular ? styles.popularCard : ''}`}>
                  {pkg.popular && (
                    <span className={styles.popularBadge}>★ MOST POPULAR</span>
                  )}
                  <div className={styles.pkgHeader}>
                    <span className={styles.pkgDuration}>{pkg.duration}</span>
                    <h3 className={styles.pkgTitle}>{pkg.title}</h3>
                    <p className={styles.pkgTagline}>{pkg.tagline}</p>
                    <div className={styles.priceBox}>
                      <span className={styles.priceLabel}>Starting from</span>
                      <span className={styles.priceValue}>{pkg.price}</span>
                      <span className={styles.pricePer}>/ person (Twin Sharing)</span>
                    </div>
                  </div>

                  <div className={styles.pkgBody}>
                    <span className={styles.inclusionsTitle}>Package Inclusions:</span>
                    <ul className={styles.inclusionsList}>
                      {pkg.highlights.map((h, i) => (
                        <li key={i}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`#enquire-form`}
                      className={pkg.popular ? styles.pkgBtnPopular : styles.pkgBtn}
                    >
                      Book This Package &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Day by Day Itinerary */}
        <section className={styles.itinerarySection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>DETAILED DAY-BY-DAY JOURNEY</span>
              <h2 className={styles.sectionTitle}>The 4-Day Kutch Odyssey Itinerary</h2>
              <p className={styles.sectionSubtitle}>
                Experience how a masterfully curated Rann Utsav journey unfolds from the moment you touch down in Bhuj.
              </p>
            </div>

            <div className={styles.timeline}>
              {ITINERARY.map((dayItem, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.dayBadgeCol}>
                    <span className={styles.dayNumber}>{dayItem.day}</span>
                  </div>
                  <div className={styles.dayContent}>
                    <h3 className={styles.dayTitle}>{dayItem.title}</h3>
                    <p className={styles.dayDesc}>{dayItem.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Enquiry Form */}
        <section id="enquire-form" className={styles.formSection}>
          <div className="container">
            <div className={styles.formIntro}>
              <span className={styles.eyebrow}>SECURE YOUR RANN TENT</span>
              <h2 className={styles.sectionTitle}>Reserve Your Rann Utsav Package</h2>
              <p className={styles.sectionSubtitle}>
                Tents fill up rapidly during November, December, and Full Moon dates. Submit your tentative dates and passenger count for instant confirmation and bespoke pricing.
              </p>
            </div>

            <SinglePageForm
              initialDestination="Rann Utsav - White Desert Kutch"
              initialService="Domestic Holiday"
            />
          </div>
        </section>

        {/* FAQs */}
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>TRAVEL ESSENTIALS</span>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            </div>

            <div className={styles.faqGrid}>
              {FAQS.map((faq, idx) => (
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
