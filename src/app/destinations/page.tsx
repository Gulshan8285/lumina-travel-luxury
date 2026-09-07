import Navbar from '@/components/layout/Navbar';
import DestinationCard from '@/components/ui/DestinationCard';
import { featuredDestinations } from '@/lib/data';
import styles from './page.module.css';

export default function DestinationsHub() {
  return (
    <>
      <Navbar />
      
      <main>
        {/* Editorial Hero — no video needed, image with text overlay */}
        <section className={styles.hero}>
          <div
            className={styles.heroBg}
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')` }}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>The Collection</span>
            <h1 className={styles.heroTitle}>Global Escapes</h1>
            <p className={styles.heroSubtitle}>20 of the world's most extraordinary destinations, each one hand-picked by our travel experts.</p>
          </div>
        </section>

        {/* All 20 Destinations Grid */}
        <section className="section">
          <div className="container">
            <div className={styles.grid}>
              {featuredDestinations.map(dest => (
                <DestinationCard key={dest.slug} {...dest} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
