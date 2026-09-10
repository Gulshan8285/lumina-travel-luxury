import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import SinglePageForm from '@/components/ui/SinglePageForm';
import styles from './page.module.css';

export const metadata = {
  title: "Personal Travel Buddy & Bespoke Trip Planning | Sobhavi Travels",
  description: "Your dedicated personal travel concierge. We handle flights, vetted 5-star hotels, visas, private transfers, and itineraries with 24/7 on-call WhatsApp trip support."
};

const STEPS = [
  {
    step: "01",
    title: "Share Your Vision",
    desc: "Tell us where you dream of going, your preferred dates, traveler count, and travel style (family leisure, romantic escape, adventure, or sacred heritage)."
  },
  {
    step: "02",
    title: "Bespoke Itinerary in 24h",
    desc: "Your dedicated Travel Buddy crafts a day-by-day proposal with handpicked hotels, sensible flight connections, and curated local private experiences."
  },
  {
    step: "03",
    title: "Seamless Bookings & VIP Perks",
    desc: "We lock in your flights, luxury stays, visa approvals, and private AC transfers at transparent rates, delivering all digital vouchers directly to your WhatsApp."
  },
  {
    step: "04",
    title: "24/7 On-Trip Concierge Care",
    desc: "While you travel, your Travel Buddy monitors flights, coordinates chauffeurs, and is always on standby via WhatsApp for any last-minute adjustments."
  }
];

const SERVICES = [
  {
    icon: "✈️",
    title: "Flights & Route Optimization",
    desc: "Best connection timings, extra baggage handling, seat selections, and proactive monitoring in case of airline schedule shifts."
  },
  {
    icon: "🏨",
    title: "Vetted 5-Star & Boutique Stays",
    desc: "Curated heritage palaces, private overwater villas, and luxury resorts with guaranteed breakfast, early check-in preference, and safety audits."
  },
  {
    icon: "🚗",
    title: "Private Chauffeured Fleet",
    desc: "Spotless, sanitized private AC vehicles with experienced uniformed chauffeurs waiting with nameboards at airports and stations."
  },
  {
    icon: "🛂",
    title: "Fast-Track Visa Assistance",
    desc: "End-to-end documentation preparation, appointment scheduling, and express processing for Dubai, Schengen, UK, Singapore, and Thailand."
  },
  {
    icon: "🎟️",
    title: "Curated Sightseeing & Passes",
    desc: "Skip long monument queues with pre-arranged VIP passes, private sunset yacht charters, desert safaris, and licensed English-speaking guides."
  },
  {
    icon: "🛡️",
    title: "24/7 Emergency & Trip Support",
    desc: "Travel with total peace of mind. A dedicated personal human concierge is available via direct phone and WhatsApp throughout your journey."
  }
];

const FAQS = [
  {
    q: "What exactly is the Sobhavi Travel Buddy service?",
    a: "Think of your Travel Buddy as your personal holiday manager. Instead of you spending hours researching hotels, comparing flight portals, and worrying about airport cabs, a dedicated destination specialist plans and coordinates every single detail of your holiday from start to finish."
  },
  {
    q: "Is there an extra fee for having a Travel Buddy?",
    a: "No hidden charges. We provide complete, transparent holiday packages with flights, hotels, cabs, and sightseeing bundled together at competitive direct-contracted rates. You get dedicated concierge service without expensive planner retainers."
  },
  {
    q: "Can I customize the hotels, flights, or activities?",
    a: "100%. Every itinerary is custom-built for you. Whether you want a specific luxury resort, dietary meal preferences, wheelchair-friendly transportation, or flexible departure dates, we adapt everything to your needs."
  },
  {
    q: "How do I communicate with my Travel Buddy during the trip?",
    a: "You receive direct access to our destination desk via dedicated WhatsApp and mobile number (+91 7406994752). Whether you need to delay morning pickup by an hour or request a restaurant recommendation, your Buddy responds immediately."
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
              <span className={styles.badge}>DEDICATED PERSONAL TRAVEL CONCIERGE</span>
              <h1 className={styles.title}>Your Personal Travel Buddy</h1>
              <p className={styles.subtitle}>
                Leave behind 15 open browser tabs, conflicting hotel reviews, and frantic transfer worries. Tell us your travel dream &mdash; your dedicated Sobhavi Travel Buddy handles every booking with precision, secures insider rates, and remains on-call 24/7.
              </p>

              <div className={styles.heroActions}>
                <a href="#buddy-enquiry" className={styles.primaryBtn}>
                  ✦ Start Planning With a Buddy &rarr;
                </a>
                <a
                  href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels,%20I%20would%20like%20to%20plan%20a%20holiday%20with%20a%20dedicated%20Travel%20Buddy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryBtn}
                >
                  💬 Connect on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Counter Bar */}
        <section className={styles.statsStrip}>
          <div className="container">
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>4.9 ★</span>
                <span className={styles.statLabel}>Traveler Satisfaction</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>2,500+</span>
                <span className={styles.statLabel}>Bespoke Trips Planned</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>24 / 7</span>
                <span className={styles.statLabel}>Live WhatsApp Support</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Transparent Pricing</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works (4-Step Workflow) */}
        <section className={styles.howItWorksSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>EFFORTLESS CONCIERGE EXPERIENCE</span>
              <h2 className={styles.sectionTitle}>How Your Travel Buddy Works</h2>
              <p className={styles.sectionSubtitle}>
                From initial imagination to your safe return home, we take care of the heavy lifting so you can simply enjoy your vacation.
              </p>
            </div>

            <div className={styles.stepsGrid}>
              {STEPS.map((s, idx) => (
                <div key={idx} className={styles.stepCard}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>{s.step}</span>
                  </div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Handle Grid */}
        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>COMPREHENSIVE COORDINATION</span>
              <h2 className={styles.sectionTitle}>Everything We Take Off Your Plate</h2>
              <p className={styles.sectionSubtitle}>
                No fragmented bookings across multiple websites. We harmonize every component of your journey into one smooth itinerary.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {SERVICES.map((srv, idx) => (
                <div key={idx} className={styles.serviceCard}>
                  <span className={styles.serviceIcon}>{srv.icon}</span>
                  <h3 className={styles.serviceTitle}>{srv.title}</h3>
                  <p className={styles.serviceDesc}>{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Booking Enquiry Form */}
        <section id="buddy-enquiry" className={styles.formSection}>
          <div className="container">
            <div className={styles.formIntro}>
              <span className={styles.eyebrow}>NO STRESS • NO HEADACHES</span>
              <h2 className={styles.sectionTitle}>Start Planning With Your Travel Buddy</h2>
              <p className={styles.sectionSubtitle}>
                Share your destination ideas, tentative travel window, and group size. A dedicated travel specialist will contact you with customized options and insider recommendations.
              </p>
            </div>

            <SinglePageForm
              initialDestination="Custom Trip Planning with Travel Buddy"
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
