import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

export const metadata = {
  title: "Travel Buddy & Trip Planning | Sobhavi Travels",
  description: "Personalised holiday planning and coordination. From flights and hotels to cabs, visas, and transfers — we take care of the details so you can enjoy your holiday."
};

export default function TravelBuddyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>YOUR TRAVEL PARTNER</span>
              <h1 className={styles.title}>Travel Buddy</h1>
              <p className={styles.subtitle}>
                Planning a trip sounds exciting. Planning the trip itself? Not always. Let us take care of the planning, while you enjoy the journey.
              </p>
              <div className={styles.heroActions}>
                <Link href="/enquire" className={styles.primaryBtn}>
                  Start Planning With Us &rarr;
                </Link>
                <a href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels,%20I%20would%20like%20to%20plan%20a%20trip%20with%20a%20Travel%20Buddy." target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                  WhatsApp Concierge
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative & Value Props */}
        <section className={styles.narrativeSection}>
          <div className="container">
            <div className={styles.storyCard}>
              <p className={styles.storyLead}>
                Whether you're planning a weekend getaway or a two-week trip across countries, it takes time, energy and a surprising amount of mental space.
              </p>
              <p className={styles.storyBody}>
                Comparing prices across different sites, finding the right hotels and flights, figuring out transfers, visas and everything in between — all while juggling your professional and personal life. The trip can start feeling exhausting before it even begins.
              </p>
              <p className={styles.storyBody}>
                <strong>So why not let us handle it?</strong>
              </p>
              <p className={styles.storyBody}>
                At Sobhavi, we take care of the planning and coordination so you can focus on the part that actually matters — enjoying your holiday. We're more than just holiday packages. We can assist you with flights, hotels, visa services, cabs, transfers, sightseeing and other arrangements on the ground, helping bring everything together in one place.
              </p>
              <p className={styles.storyHighlight}>
                You tell us where you want to go. We'll take care of the rest.
              </p>
            </div>

            {/* What We Help With Grid */}
            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <span className={styles.serviceStar}>✦</span>
                <h3 className={styles.serviceName}>Flight Bookings</h3>
                <p className={styles.serviceDesc}>Best route connections, baggage allowances, and flight monitoring.</p>
              </div>

              <div className={styles.serviceItem}>
                <span className={styles.serviceStar}>✦</span>
                <h3 className={styles.serviceName}>Hotel Bookings</h3>
                <p className={styles.serviceDesc}>Vetted boutique hotels, heritage havelis, and luxury resorts with breakfast.</p>
              </div>

              <div className={styles.serviceItem}>
                <span className={styles.serviceStar}>✦</span>
                <h3 className={styles.serviceName}>Visa Assistance</h3>
                <p className={styles.serviceDesc}>Complete documentation review and submission guidance for international visas.</p>
              </div>

              <div className={styles.serviceItem}>
                <span className={styles.serviceStar}>✦</span>
                <h3 className={styles.serviceName}>Cabs & Transfers</h3>
                <p className={styles.serviceDesc}>Clean, air-conditioned private vehicles with trusted local chauffeurs.</p>
              </div>

              <div className={styles.serviceItem}>
                <span className={styles.serviceStar}>✦</span>
                <h3 className={styles.serviceName}>Sightseeing & Activities</h3>
                <p className={styles.serviceDesc}>Skip-the-line monument entries, local cultural experiences, and guided tours.</p>
              </div>

              <div className={styles.serviceItem}>
                <span className={styles.serviceStar}>✦</span>
                <h3 className={styles.serviceName}>Complete Trip Planning</h3>
                <p className={styles.serviceDesc}>From initial inspiration to your safe return home, we are just a WhatsApp message away.</p>
              </div>
            </div>

            {/* Bottom CTA Box */}
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaHeading}>Let’s plan your next escape.</h2>
              <p className={styles.ctaText}>
                Share your destination and dates with us. Our dedicated travel buddy handles every booking, transfer, and itinerary detail so you can travel without stress.
              </p>
              <Link href="/enquire" className={styles.ctaBtn}>
                Plan My Trip &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
