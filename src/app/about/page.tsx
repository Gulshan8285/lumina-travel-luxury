import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>THE SOBHAVI STORY</span>
              <h1 className={styles.heroTitle}>Travel Made Memorable.</h1>
              <p className={styles.heroDesc}>
                Your journey. Our expertise. From quick getaways to international holidays, family vacations to sacred pilgrimages — we craft seamless travel experiences where every detail is taken care of.
              </p>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className={styles.storySection}>
          <div className="container">
            <div className={styles.storyGrid}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Sobhavi Travels Concierge Team" 
                className={styles.storyImage}
              />
              <div className={styles.storyContent}>
                <h2>Crafted With Precision & Warmth</h2>
                <p>
                  At <strong>SOBHAVI TRAVELS</strong>, we believe travel should never be defined by frantic booking portals, hidden cancellation fees, or impersonal call centers. We built Sobhavi to restore human care, discretion, and luxury precision to travel planning.
                </p>
                <p>
                  Whether securing private helicopter charters for Kedarnath VIP darshan, reserving coveted overwater villas in the Maldives, or synchronizing private chauffeur arrivals across Rajasthan's historic palaces — our specialists handle flights, 5-star accommodations, gourmet dining, and private transfers as a singular, harmonious experience.
                </p>
                <p>
                  With direct WhatsApp concierge access to dedicated destination managers (+91 74069 94752), you travel with total confidence that a personal travel advocate is always just a message away.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link href="/enquire" className="btn-pink">
                    Plan Your Journey With Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS / VALUES */}
        <section className={styles.valuesSection}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.18em', color: '#e11d48', textTransform: 'uppercase' }}>
                OUR PHILOSOPHY
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', textTransform: 'uppercase', margin: '0.5rem 0' }}>
                Why Discerning Travelers Choose Sobhavi
              </h2>
            </div>

            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🌟</div>
                <h3 className={styles.valueTitle}>Bespoke Curation</h3>
                <p className={styles.valueDesc}>
                  No pre-packaged cookie-cutter trips. Every single itinerary is personalized around your pace, culinary tastes, and preferred accommodations.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🤝</div>
                <h3 className={styles.valueTitle}>Direct Human Touch</h3>
                <p className={styles.valueDesc}>
                  Real human specialists available daily on WhatsApp and phone (12:00 PM – 9:00 PM). When plans evolve on the road, changes are made within minutes.
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>💎</div>
                <h3 className={styles.valueTitle}>Guaranteed 5-Star Quality</h3>
                <p className={styles.valueDesc}>
                  We personally inspect our partner luxury hotels, private sanitized transport fleets, and tour guides to ensure absolute excellence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
