import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import SinglePageForm from '@/components/ui/SinglePageForm';
import styles from './page.module.css';

export const metadata = {
  title: "Travel Buddy — Personal Travel Assistance for All Cities | Sobhavi Holidays",
  description: "Not looking for a package? No problem. Get dedicated assistance for Airbnb research, hotel price comparisons, cabs, property checks, and flight bookings across all cities."
};

const ASSISTANCE_ITEMS = [
  {
    icon: "🏡",
    title: "Finding a Good, Reasonably Priced Stay",
    desc: "Handpicked stays for solo travelers, couples, families, or large groups tailored to your comfort and exact budget."
  },
  {
    icon: "🔍",
    title: "Airbnb or Homestay Research",
    desc: "We comb through hundreds of listings, check real guest reviews, verify amenities, and filter out deceptive listings."
  },
  {
    icon: "⚖️",
    title: "Comparing Hotels & Prices Across Websites",
    desc: "We analyze tariffs across major portals, direct hotel rates, and trade desks so you never overpay."
  },
  {
    icon: "🚖",
    title: "Finding the Right Cab for Your Trip",
    desc: "Reliable airport transfers, intercity sanitized cabs, and experienced chauffeurs who know local terrain."
  },
  {
    icon: "🛡️",
    title: "Checking a Property Before You Book",
    desc: "We speak directly with property owners and on-ground partners to confirm location, cleanliness, and facilities."
  },
  {
    icon: "✈️",
    title: "Flights or Hotels Only",
    desc: "Need just a flight ticket or just a weekend resort? No bundled package required — book only what you need."
  },
  {
    icon: "🧭",
    title: "Help with All the Little Travel Research",
    desc: "Local permits, ferry timings, best viewpoints, neighborhood safety, or dining spots you don't have time to dig up."
  }
];

const STEPS = [
  {
    step: "01",
    title: "Tell Us What You Need",
    desc: "Share where you want to go, your dates, group size, or a specific task like finding a cab or checking a stay."
  },
  {
    step: "02",
    title: "We Do the Digging",
    desc: "We check the options, compare prices, read genuine reviews, and speak to properties directly if needed."
  },
  {
    step: "03",
    title: "Options Worth Considering",
    desc: "You receive a curated shortlist of handpicked recommendations that actually match your exact requirements."
  },
  {
    step: "04",
    title: "Zero-Stress Booking & WhatsApp Support",
    desc: "Lock in what you like with zero markup hassles and enjoy quick WhatsApp support throughout your journey."
  }
];

const FAQS = [
  {
    q: "Do I have to book a complete package to use Travel Buddy?",
    a: "Not at all. You don't have to take a complete package. You can come to us for something as simple as finding a good stay for your group, arranging a cab, or booking only your flights or hotel."
  },
  {
    q: "How does Travel Buddy differ from search engines or AI?",
    a: "While AI can generate generic lists, it doesn't verify current property conditions, call hotel managers to check room hygiene, negotiate offline deals, or arrange vetted drivers. We do the real ground-level research for you."
  },
  {
    q: "Which destinations and cities do you support?",
    a: "We offer travel assistance across all cities and tourist destinations — both within India and internationally. Whether it's a weekend getaway, a remote hill station, or an overseas trip, we have you covered."
  },
  {
    q: "How fast do you respond to assistance requests?",
    a: "Our team typically begins research immediately upon receiving your enquiry or WhatsApp message, delivering shortlisted options and price comparisons within a few hours."
  }
];

export default function TravelBuddyPage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* Luxury Hero */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>DEDICATED TRAVEL ASSISTANCE • ALL CITIES</span>
              <h1 className={styles.title}>Travel Buddy</h1>
              <p className={styles.hookTitle}>Not looking for a package? No problem.</p>

              <div className={styles.storyCard}>
                <p>
                  Sometimes you already know where you want to go. You just don&apos;t have the time to sit and compare 100 hotels, Airbnb listings, homestays, cab options and prices across different websites.
                </p>
                <p className={styles.storyHighlight}>
                  That&apos;s where we come in.
                </p>
                <p>
                  Tell us what you&apos;re looking for and we&apos;ll do the digging for you. We&apos;ll check the options, compare prices, look at reviews, speak to the property if needed and shortlist the ones that actually fit your requirements.
                </p>
                <div className={styles.freedomBanner}>
                  <span className={styles.freedomIcon}>✨</span>
                  <span>
                    You can come to us for something as simple as finding a good stay for your group or arranging a cab. You can also book only your flights or only your hotel through us. <strong>You don&apos;t have to take a complete package.</strong>
                  </span>
                </div>
              </div>

              <div className={styles.heroActions}>
                <a href="#enquire-form" className={styles.primaryBtn}>
                  ✦ Enquire Now &rarr;
                </a>
                <a
                  href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Holidays,%20I%20am%20looking%20for%20travel%20assistance%20with%20my%20upcoming%20trip."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryBtn}
                >
                  💬 WhatsApp Your Travel Buddy
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* You can reach out to us for */}
        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>WHAT WE CAN DO FOR YOU</span>
              <h2 className={styles.sectionTitle}>You can reach out to us for:</h2>
              <p className={styles.sectionSubtitle}>
                Skip the endless browser tabs and let an experienced human traveler handle the research.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {ASSISTANCE_ITEMS.map((item, idx) => (
                <div key={idx} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{item.icon}</div>
                  <h3 className={styles.serviceTitle}>{item.title}</h3>
                  <p className={styles.serviceDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI vs Human Philosophy Banner */}
        <section className={styles.philosophySection}>
          <div className="container">
            <div className={styles.philosophyBox}>
              <span className={styles.aiBadge}>HUMAN CONCIERGE &bull; REAL EXPERIENCE</span>
              <h3 className={styles.philosophyTitle}>
                &ldquo;There are plenty of options out there. And while AI can give you a list, it doesn&apos;t always know what you actually need.&rdquo;
              </h3>
              <p className={styles.philosophyDesc}>
                Tell us what you&apos;re looking for. We&apos;ll do the research and give you the options worth considering.
              </p>
              <div className={styles.allCitiesPill}>
                <span>🌍 Travel Assistance &bull; Multiple Journeys &bull; All Cities</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className={styles.howItWorksSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>SIMPLE & SEAMLESS</span>
              <h2 className={styles.sectionTitle}>How It Works</h2>
              <p className={styles.sectionSubtitle}>
                Get real travel research done without spending hours comparing websites.
              </p>
            </div>

            <div className={styles.stepsGrid}>
              {STEPS.map((s, idx) => (
                <div key={idx} className={styles.stepCard}>
                  <div className={styles.stepNumber}>{s.step}</div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enquire Now Form */}
        <section id="enquire-form" className={styles.formSection}>
          <div className="container">
            <div className={styles.formIntro}>
              <span className={styles.eyebrow}>NO BUNDLE REQUIRED</span>
              <h2 className={styles.sectionTitle}>Enquire Now</h2>
              <p className={styles.sectionSubtitle}>
                Tell us what you&apos;re looking for &mdash; a hotel, cab, flights, Airbnb, or research help for your upcoming trip. We&apos;ll do the digging and get back to you with the best options.
              </p>
            </div>

            <SinglePageForm
              initialDestination="Travel Assistance - Travel Buddy"
              initialService="Customized Tour"
            />
          </div>
        </section>

        {/* FAQs */}
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>COMMON QUESTIONS</span>
              <h2 className={styles.sectionTitle}>Travel Buddy FAQs</h2>
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
