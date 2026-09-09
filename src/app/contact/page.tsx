import Navbar from '@/components/layout/Navbar';
import SinglePageForm from '@/components/ui/SinglePageForm';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>GET IN TOUCH</span>
              <h1 className={styles.heroTitle}>Talk to a travel consultant.</h1>
              <p className={styles.heroDesc}>
                Send us your destination, dates and rough budget. In most cases we return a full quote within 60–120 minutes on working days.
              </p>
            </div>
          </div>
        </section>

        {/* UNIFIED ENQUIRY & CONTACT SECTION */}
        <section style={{ padding: '3.5rem 0 8rem', backgroundColor: '#f8fafc' }}>
          <div className="container">
            <SinglePageForm />
          </div>
        </section>
      </main>
    </>
  );
}
