import { Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

// Client component wrapper to handle search params safely
import FormWrapper from './FormWrapper';

export default function EnquirePage() {
  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={`container ${styles.heroContent}`}>
            <h1 className={styles.title}>Design Your Journey</h1>
            <p className={styles.subtitle}>
              Share your travel aspirations with us, and our experts will craft a 
              bespoke itinerary tailored exclusively to your preferences.
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
