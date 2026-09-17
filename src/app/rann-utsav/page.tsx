import Navbar from '@/components/layout/Navbar';
import SinglePageForm from '@/components/ui/SinglePageForm';
import RannCityPackages from '@/components/ui/RannCityPackages';
import RannFaqAccordion, { FaqItem } from '@/components/ui/RannFaqAccordion';
import { CITY_ROUTES } from '@/lib/rannUtsavRoutes';
import styles from './page.module.css';

export const metadata = {
  title: "Rann Utsav 2026–2027 Kutch Tour Packages | Sobhavi Holidays",
  description: "Experience the White Desert of Kutch. Authentic Rann Utsav stays at Tent City Dhordo, Bhuj transfers, cultural performances, and tailored Kutch itineraries by Sobhavi Holidays."
};

const ACTIVITIES = [
  { title: "Great Rann of Kutch", icon: "✨", desc: "Witness the surreal expanse of glistening white salt flats under golden sunset and full moon skies." },
  { title: "Kala Dungar (Black Hill)", icon: "⛰️", desc: "Highest peak in Kutch offering 360° panoramic horizon views over the salt desert border." },
  { title: "Road to Heaven", icon: "🛣️", desc: "Drive along the world-famous highway cutting straight through the shimmering white salt plains towards Dholavira." },
  { title: "Mandvi Beach & Palaces", icon: "🌊", desc: "Arabian Sea coastal breeze, royal Vijay Vilas heritage palace, and 400-year-old wooden shipbuilding yards." },
  { title: "Artisan Craft Villages", icon: "🧵", desc: "Explore living craft hamlets: Rogan art, Ajrakh block printing, bell making, and mirror embroidery." },
  { title: "Folk Nights & Stargazing", icon: "🎶", desc: "Evenings at Dhordo with soulful Kutchi folk music, garba dancing, campfires, and crystal-clear starscapes." }
];

const FAQS: FaqItem[] = [
  {
    q: "1. What is Rann Utsav?",
    a: "Rann Utsav is a celebrated seasonal cultural carnival held in Dhordo, Kutch, Gujarat, right at the edge of the White Rann. It brings together the region's vast landscape, authentic handicrafts, Gujarati cuisine, folk dance, and music."
  },
  {
    q: "2. When is Rann Utsav 2026–27?",
    a: "Rann Utsav 2026–27 runs from 1 November 2026 to 7 March 2027. Full moon nights and holiday weekends are the most popular travel dates."
  },
  {
    q: "3. How many days are enough for Rann Utsav?",
    a: "A 3 Nights / 4 Days itinerary is the most recommended duration. It allows ample time to enjoy the White Rann sunset, Tent City cultural events, Kala Dungar peak, Mandvi beach, and local craft villages without rushing."
  },
  {
    q: "4. How much does a Rann Utsav package cost?",
    a: "Packages vary based on tent category (Deluxe, Premium, or Super Premium), number of nights, and travel dates. We provide transparent all-inclusive quotes covering accommodation, all meals, Bhuj transfers, and guided sightseeing."
  },
  {
    q: "5. What is included in the Rann Utsav package?",
    a: "Packages include luxury AC Tent accommodation at Dhordo, to-and-fro AC coach transfers from Bhuj Airport/Station, all buffet meals (breakfast, lunch, high tea, dinner), guided tours to the White Desert and Kala Dungar, and festival passes."
  },
  {
    q: "6. Which tent category should I choose?",
    a: "Deluxe AC Tents offer fantastic comfort with attached bathrooms at a great value. Premium AC Tents feature larger spaces and porches, while Super Premium Suites provide top-tier luxury. For families, Deluxe or Premium offers the optimal balance."
  },
  {
    q: "7. Is Rann Utsav suitable for families and senior citizens?",
    a: "Yes! Dhordo Tent City is very well organized with internal golf carts, flat paved pathways, doctor-on-call, pure vegetarian multi-cuisine dining, and evening entertainment for all age groups."
  },
  {
    q: "8. What is the best time to visit Rann Utsav?",
    a: "November through February offers pleasant winter weather with warm sunny days (24°C–28°C) and cool, refreshing desert evenings (10°C–15°C). Full moon nights offer the legendary silver salt desert glow."
  },
  {
    q: "9. What should I pack for Rann Utsav?",
    a: "Pack comfortable cotton clothing and sunscreen for daytime sightseeing, plus light woolens, thermals, or jackets for the brisk evening desert breeze. Comfortable walking shoes are essential."
  },
  {
    q: "10. Can I get a hotel or resort outside the Tent City?",
    a: "Yes. In addition to official Tent City Dhordo packages, Sobhavi Holidays also arranges heritage resort stays in Hodka, traditional bhungas, and luxury hotels in Bhuj."
  },
  {
    q: "11. How can I book a customized Rann Utsav package?",
    a: "Simply share your details with our team. We check live tent inventory, coordinate flights/trains from your city, and provide a hassle-free, confirmed booking.",
    hasLink: true
  }
];

export default function RannUtsavPage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* Mobile Sticky Quick Jump Bar to eliminate excessive scrolling */}
        <nav className={styles.stickyJumpBar} aria-label="Quick Page Navigation">
          <div className="container">
            <div className={styles.jumpLinksList}>
              <a href="#city-packages" className={styles.jumpLink}>🏙️ City Hubs</a>
              <a href="#stay-duration" className={styles.jumpLink}>⏱️ Duration</a>
              <a href="#tents" className={styles.jumpLink}>🎪 Tents</a>
              <a href="#experiences" className={styles.jumpLink}>✨ Sights</a>
              <a href="#inclusions" className={styles.jumpLink}>🚌 Inclusions</a>
              <a href="#enquire-form" className={styles.jumpLink}>📝 Get Quote</a>
              <a href="#faqs" className={styles.jumpLink}>❓ FAQs</a>
            </div>
          </div>
        </nav>

        {/* Luxury Hero */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>GUJARAT CULTURAL EXPEDITION • KUTCH 2026–2027</span>
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
                <a href="#city-packages" className={styles.primaryBtn}>
                  ✦ Explore Packages by City &rarr;
                </a>
                <a
                  href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Holidays,%20I%20want%20to%20plan%20a%20Rann%20Utsav%20trip%20to%20Kutch."
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

        {/* How long should you stay? */}
        <section id="stay-duration" className={styles.stayDurationSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>RECOMMENDED DURATION</span>
              <h2 className={styles.sectionTitle}>Choose Your Travel Pace</h2>
              <p className={styles.sectionSubtitle}>
                Whether a fast weekend getaway or an in-depth desert expedition across Kutch.
              </p>
            </div>

            {/* Mobile Swipe Notice */}
            <div className={styles.swipeNotice}>
              <span>👉 <strong>Swipe horizontally</strong> to compare durations</span>
              <span>&rarr;</span>
            </div>

            <div className={styles.durationCards}>
              <div className={styles.durationCard}>
                <div className={styles.durationBadge}>2 NIGHTS / 3 DAYS</div>
                <h3>Quick Desert Escape</h3>
                <p>
                  Ideal for weekend travelers. Witness the White Rann sunset, enjoy live evening Kutchi performances, and visit Kala Dungar (Black Hill).
                </p>
              </div>

              <div className={`${styles.durationCard} ${styles.durationCardFeatured}`}>
                <div className={styles.durationBadgeGold}>3 NIGHTS / 4 DAYS • RECOMMENDED</div>
                <h3>Classic Complete Kutch</h3>
                <p>
                  The most popular choice. Unrushed White Rann visits, Kala Dungar, Gandhi Nu Gaam craft village, plus a full coastal day at Mandvi Beach &amp; Vijay Vilas Palace.
                </p>
              </div>

              <div className={styles.durationCard}>
                <div className={styles.durationBadge}>4 NIGHTS / 5 DAYS</div>
                <h3>Grand Kutch &amp; Dholavira</h3>
                <p>
                  The comprehensive expedition. Includes all classic sights plus the UNESCO Harappan city of Dholavira and the legendary drive along the &ldquo;Road to Heaven&rdquo;.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Staying at Rann Utsav Tent City */}
        <section id="tents" className={styles.tentCitySection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>COMFORT &amp; HOSPITALITY</span>
              <h2 className={styles.sectionTitle}>Accommodation Categories</h2>
              <p className={styles.sectionSubtitle}>
                Modern luxury meets Kutchi warmth inside Dhordo Tent City and nearby boutique heritage resorts.
              </p>
            </div>

            {/* Mobile Swipe Notice */}
            <div className={styles.swipeNotice}>
              <span>👉 <strong>Swipe horizontally</strong> to view all tent categories</span>
              <span>&rarr;</span>
            </div>

            <div className={styles.tentCategoriesGrid}>
              <div className={styles.categoryCard}>
                <span className={styles.catIcon}>🎪</span>
                <h4>Deluxe AC Tents</h4>
                <p>Attached bathrooms, climate control, cozy twin beds, and complete festival dining access at great value.</p>
              </div>
              <div className={styles.categoryCard}>
                <span className={styles.catIcon}>👑</span>
                <h4>Premium AC Tents</h4>
                <p>Upgraded spacious layout, private front sit-out porch, elegant Kutchi decor, and priority hospitality.</p>
              </div>
              <div className={styles.categoryCard}>
                <span className={styles.catIcon}>💎</span>
                <h4>Super Premium / Suites</h4>
                <p>Expansive royal tents with luxury lounge areas, master bedrooms, and VIP privileges.</p>
              </div>
              <div className={styles.categoryCard}>
                <span className={styles.catIcon}>🏨</span>
                <h4>Boutique Resorts &amp; Bhungas</h4>
                <p>Traditional round mud bhungas in Hodka or premium brick-and-mortar hotels in Bhuj.</p>
              </div>
            </div>
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

            {/* Mobile Swipe Notice */}
            <div className={styles.swipeNotice}>
              <span>👉 <strong>Swipe horizontally</strong> to see all experiences</span>
              <span>&rarr;</span>
            </div>

            <div className={styles.activitiesGrid}>
              {ACTIVITIES.map((act, index) => (
                <div key={index} className={styles.activityCard}>
                  <span className={styles.activityIcon}>{act.icon}</span>
                  <h3 className={styles.activityTitle}>{act.title}</h3>
                  <p className={styles.activityDesc}>{act.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inclusions */}
        <section id="inclusions" className={styles.inclusionsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>TRANSPARENT VALUE</span>
              <h2 className={styles.sectionTitle}>What&apos;s Included in Your Package</h2>
              <p className={styles.sectionSubtitle}>
                Everything arranged from arrival to departure for a completely seamless holiday.
              </p>
            </div>

            {/* Mobile Swipe Notice */}
            <div className={styles.swipeNotice}>
              <span>👉 <strong>Swipe horizontally</strong> to see inclusions</span>
              <span>&rarr;</span>
            </div>

            <div className={styles.inclusionsGrid}>
              <div className={styles.inclusionCard}>
                <div className={styles.inclusionIcon}>🚌</div>
                <h3>Bhuj Transfers &amp; Coach Service</h3>
                <ul className={styles.inclusionsList}>
                  <li>Complimentary to-and-fro AC Volvo coach transfers between Bhuj (Airport / Railway Station) and Tent City Dhordo.</li>
                  <li>Complimentary refreshments served en route on the coach.</li>
                </ul>
              </div>

              <div className={styles.inclusionCard}>
                <div className={styles.inclusionIcon}>🍽️</div>
                <h3>All-Inclusive Dining Plan</h3>
                <div className={styles.mealBreakdown}>
                  <div className={styles.mealItem}>
                    <span className={styles.mealTag}>Full Board Buffets</span>
                    <p>Includes lavish Breakfast, Lunch, Traditional Kutchi High-Tea, and Multi-Cuisine Dinner daily in grand dining halls.</p>
                  </div>
                  <div className={styles.mealItem}>
                    <span className={styles.mealTag}>Authentic Specialties</span>
                    <p>Kathiyawadi, pure vegetarian Gujarati, Jain, and North Indian menus prepared fresh.</p>
                  </div>
                </div>
              </div>

              <div className={styles.inclusionCard}>
                <div className={styles.inclusionIcon}>📍</div>
                <h3>Fixed Sightseeing &amp; Passes</h3>
                <ul className={styles.inclusionsList}>
                  <li>Daily transfers and permits to the Great White Rann for sunset and moonlight vistas.</li>
                  <li>Guided excursion to Kala Dungar (Black Hill) and craft hamlets like Gandhi Nu Gaam.</li>
                  <li>Full day excursion to Mandvi Beach &amp; Vijay Vilas Palace (for 3N+ packages).</li>
                </ul>
              </div>

              <div className={styles.inclusionCard}>
                <div className={styles.inclusionIcon}>🏕️</div>
                <h3>Tent City Stays &amp; Entertainment</h3>
                <ul className={styles.inclusionsList}>
                  <li>Luxury twin-sharing tent accommodation with en-suite modern bath and daily drinking water.</li>
                  <li>Nightly cultural folk music, traditional dance shows, club house activities, and stargazing.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enquiry Form */}
        <section id="enquire-form" className={styles.formSection}>
          <div className="container">
            <div className={styles.formIntro}>
              <span className={styles.eyebrow}>FAST &amp; BESPOKE</span>
              <h2 className={styles.sectionTitle}>Get Your Custom Rann Utsav Quote</h2>
              <p className={styles.sectionSubtitle}>
                Tell us your preferred dates and group size. Our Kutch specialists will check live tent availability and coordinate your flights, transfers, and stay.
              </p>
            </div>

            <SinglePageForm
              initialDestination="Rann Utsav - Great Rann of Kutch"
              initialService="Domestic Holiday"
            />
          </div>
        </section>

        {/* Interactive FAQs Accordion */}
        <section id="faqs" className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>FREQUENTLY ASKED QUESTIONS</span>
              <h2 className={styles.sectionTitle}>Rann Utsav FAQs</h2>
              <p className={styles.sectionSubtitle}>
                Tap any question below to reveal detailed answers on planning, permits, tents, and travel.
              </p>
            </div>

            <RannFaqAccordion faqs={FAQS} enquireAnchor="#enquire-form" />
          </div>
        </section>
      </main>
    </>
  );
}
