import { Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

// Client component wrapper to handle search params safely
import FormWrapper from './FormWrapper';

// Force dynamic rendering so mobile browsers and CDN always serve fresh changes
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function EnquirePage() {
  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={`container ${styles.heroContent}`}>
            <span className={styles.badge} style={{ color: '#d4af37', fontSize: '0.78rem', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
              TAILOR-MADE CONCIERGE
            </span>
            <h1 className={styles.title}>Let’s plan your next escape.</h1>
            <p className={styles.subtitle}>
              Share your destination, dates and travel preferences with us. Our private travel concierge will craft a fully bespoke itinerary with 5-star stays, private chauffeur transfers, and memorable experiences.
            </p>
          </div>
        </div>

        <section className={styles.formSection}>
          <div className="container">
            <Suspense fallback={<div className={styles.loading}>Loading form...</div>}>
              <FormWrapper />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
}
