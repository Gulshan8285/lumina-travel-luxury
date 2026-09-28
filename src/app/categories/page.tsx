import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { travelCategories } from '@/lib/categories';
import styles from './page.module.css';

export const metadata = {
  title: "Travel Categories & Curated Experiences | Sobhavi Travels",
  description: "Explore curated travel collections starting at ₹25,000. Honeymoon, Chardham Yatra, Family, Luxury, Group Tours, Adventure, and Wellness retreats.",
};

export default function CategoriesDirectoryPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Header */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.headerContent}>
              <span className={styles.eyebrow}>CURATED COLLECTIONS</span>
              <h1 className={styles.title}>Travel Categories</h1>
              <p className={styles.subtitle}>
                Every voyage is uniquely designed around how you want to travel. All collections starting at ₹25,000 with 5-star hospitality and private transfers.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className={styles.gridSection}>
          <div className="container">
            <div className={styles.categoriesGrid}>
              {travelCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className={styles.catCard}
                >
                  <div
                    className={styles.imageWrapper}
                    style={{ backgroundImage: `url(${cat.heroImage})` }}
                  >
                    <div className={styles.imageOverlay} />
                    
                    {/* Top Right Corner Price Badge */}
                    <div className={styles.cornerPriceBadge}>
                      <span className={styles.badgeLabel}>STARTING AT</span>
                      <span className={styles.badgePrice}>₹25,000</span>
                    </div>

                    <span className={styles.categoryBadge}>Bespoke Collection</span>
                  </div>

                  <div className={styles.cardContent}>
                    <h2 className={styles.catName}>{cat.name}</h2>
                    <p className={styles.catTagline}>{cat.tagline}</p>
                    <p className={styles.catDesc}>{cat.description}</p>
                    <span className={styles.exploreLink}>
                      <span>Explore Collection</span>
                      <span className={styles.arrow}>&rarr;</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <span className={styles.ctaEyebrow}>CAN'T FIND WHAT YOU'RE LOOKING FOR?</span>
              <h2 className={styles.ctaHeading}>Let's Build Your Dream Itinerary</h2>
              <p className={styles.ctaText}>
                Speak directly with our travel designers to personalize dates, hotels, sightseeing, and private flights.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/enquire" className="btn-gold">
                  Plan Custom Trip &rarr;
                </Link>
                <a
                  href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels,%20I%20would%20like%20to%20enquire%20about%20a%20tailored%20holiday%20starting%20at%20₹25,000."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaWaBtn}
                >
                  💬 WhatsApp Concierge
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
