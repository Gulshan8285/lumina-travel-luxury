import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

export const metadata = {
  title: "Rann Utsav 2026–2027 | Sobhavi Travels",
  description: "Experience the White Rann of Kutch under the full moon. Festival dates from November 1, 2026 to March 7, 2027 with luxury tent stays and cultural journeys."
};

export default function RannUtsavPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Header Hero */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>FESTIVAL & CULTURAL EXPEDITIONS</span>
              <h1 className={styles.title}>The Rann of Kutch</h1>
              <p className={styles.subtitle}>
                A Journey Into the White &mdash; November 1, 2026 to March 7, 2027
              </p>
              <div className={styles.heroActions}>
                <Link href="/enquire?destination=Rann+Utsav" className={styles.primaryBtn}>
                  Plan Your Rann Trip &rarr;
                </Link>
                <Link href="/blog/the-rann-of-kutch-journey-into-the-white" className={styles.secondaryBtn}>
                  Read the Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.twoCol}>
              <div className={styles.leftCol}>
                <h2 className={styles.heading}>The Festival Is the Introduction. Kutch Itself Is the Story.</h2>
                <p className={styles.leadText}>
                  The first thing you notice about the Rann of Kutch is not the colour. It is the emptiness. Standing on the salt flats during the full moon, the white surface catches the light and the horizon disappears into silent wonder.
                </p>
                <p className={styles.bodyText}>
                  Rann Utsav, centred around Dhordo, brings together the stark landscape of the salt desert with the music, food, textiles, embroidery and centuries-old crafts that make Kutch so distinctive. 
                </p>
                <p className={styles.bodyText}>
                  At Sobhavi, we arrange your tented accommodation, private transfers from Bhuj, guided craft village excursions, Kala Dungar sunset drives, and permissions so you can experience Kutch at an unhurried, comfortable pace.
                </p>

                <div className={styles.highlightsBox}>
                  <h3 className={styles.highlightTitle}>What We Take Care Of:</h3>
                  <ul className={styles.highlightList}>
                    <li>✦ Premium AC Tented Accommodation in Dhordo</li>
                    <li>✦ Private Chauffeured Transfers from Bhuj Airport / Railway Station</li>
                    <li>✦ White Desert Permits & Full Moon Sunset Visits</li>
                    <li>✦ Guided Trips to Bhujodi, Ajrakhpur & Nirona Craft Villages</li>
                    <li>✦ Visit to Kala Dungar (Black Hill) & Sunset Views</li>
                    <li>✦ Complete Travel Logistics, Meals & Flexible Itineraries</li>
                  </ul>
                </div>
              </div>

              <div className={styles.rightCol}>
                <div className={styles.infoCard}>
                  <span className={styles.infoEyebrow}>KEY FESTIVAL DETAILS</span>
                  <h3 className={styles.infoHeading}>Rann Utsav 2026–2027</h3>
                  
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Official Dates</span>
                    <span className={styles.detailVal}>1 November 2026 – 7 March 2027</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Recommended Stay</span>
                    <span className={styles.detailVal}>3 Nights / 4 Days or 4 Nights / 5 Days</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Prime Experience</span>
                    <span className={styles.detailVal}>Full Moon Nights on the White Desert</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Nearest Hub</span>
                    <span className={styles.detailVal}>Bhuj (80 km / ~1.5 hours)</span>
                  </div>

                  <div className={styles.cardCta}>
                    <p className={styles.ctaPrompt}>
                      Tents book up quickly for full moon weekends. Send us your tentative dates and group size.
                    </p>
                    <Link href="/enquire?destination=Rann+Utsav" className={styles.fullWidthBtn}>
                      Enquire for Rann Utsav &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
