import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { getAllBlogs, syncCloudBlogs } from '@/lib/blogs';
import BlogClientHub from './BlogClientHub';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';
export const revalidate = 0; // Dynamic rendering for latest posts

export default async function BlogHub() {
  await syncCloudBlogs();
  const blogs = getAllBlogs();

  return (
    <>
      <Navbar />
      
      <main className={styles.main}>
        {/* Editorial Journal Header */}
        <section className={styles.heroSection}>
          <div className="container">
            <span className={styles.eyebrow}>DISPATCHES &amp; EDITORIALS</span>
            <h1 className={styles.title}>The Sobhavi Travel Journal</h1>
            <p className={styles.subtitle}>
              Stories, private guides, and insider perspectives curated by our luxury travel specialists across India and the globe.
            </p>
          </div>
        </section>

        {/* Live Client-Hydrated Blog Grid */}
        <BlogClientHub initialBlogs={blogs} />

        {/* Bottom Editorial Quote & Enquire CTA */}
        <section className={styles.bottomCtaSection}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 className={styles.ctaHeading}>Inspired by Our Stories?</h2>
            <p className={styles.ctaSubtitle}>
              Every story you read here can be experienced firsthand. Let our curators design your journey.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/enquire" className="btn-gold">
                Plan Your Tailor-Made Escape
              </Link>
              <a href="tel:+917406994752" className="btn-outline">
                Speak to a Specialist: +91 74069 94752
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
