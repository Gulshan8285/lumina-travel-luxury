"use client";

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { travelCategories } from '@/lib/categories';
import SinglePageForm from '@/components/ui/SinglePageForm';
import styles from './page.module.css';

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const category = travelCategories.find(c => c.slug === slug);
  if (!category) notFound();

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage(prev => (prev + 1) % category.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [category.images.length]);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroImageWrapper}>
            {category.images.map((img, i) => (
              <div
                key={i}
                className={`${styles.heroImage} ${i === activeImage ? styles.active : ''}`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Travel Category</span>
            <h1 className={styles.heroTitle}>{category.name}</h1>
            <p className={styles.heroTagline}>{category.tagline}</p>
          </div>

          {/* Thumbnail Strip */}
          <div className={styles.thumbnailStrip}>
            {category.images.map((img, i) => (
              <button
                key={i}
                className={`${styles.thumbnail} ${i === activeImage ? styles.activeThumbnail : ''}`}
                onClick={() => setActiveImage(i)}
                style={{ backgroundImage: `url(${img})` }}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Article Section */}
        <section className={styles.articleSection}>
          <div className={styles.articleGrid}>
            <div className={styles.articleMain}>
              <p className={styles.articleIntro}>{category.article.intro}</p>
              {category.article.body.map((para, i) => (
                <p key={i} className={styles.articleBody}>{para}</p>
              ))}

              {/* Blockquote */}
              <blockquote className={styles.blockquote}>
                <p>{category.article.quote}</p>
                <cite>{category.article.quoteAuthor}</cite>
              </blockquote>
            </div>

            {/* Sidebar */}
            <aside className={styles.articleSidebar}>
              <div className={styles.sidebarCard}>
                <h3>Plan This Trip</h3>
                <p>Tell us your dream and we'll make it real.</p>
                <Link href={`/enquire?category=${category.slug}`} className="btn-dark" style={{ marginTop: '2rem', display: 'block', textAlign: 'center', padding: '1rem' }}>
                  Start Planning
                </Link>
              </div>
              <div className={styles.categoryDescription}>
                <h4>About {category.name}</h4>
                <p>{category.description}</p>
              </div>
            </aside>
          </div>
        </section>

        {/* Visual Photo Gallery */}
        {category.images && category.images.length > 0 && (
          <section className={styles.gallerySection}>
            <div className="container">
              <span className={styles.galleryEyebrow}>VISUAL JOURNAL</span>
              <h2 className={styles.galleryTitle}>{category.name} in Pictures</h2>
              <div className={styles.galleryGrid}>
                {category.images.map((img, idx) => (
                  <div key={idx} className={styles.galleryCard}>
                    <img 
                      src={img} 
                      alt={`${category.name} photograph ${idx + 1}`} 
                      className={styles.galleryImg} 
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Video Section */}
        {category.videoUrl && (
          <section className={styles.videoSection}>
            <div className="container">
              <span className={styles.videoEyebrow}>Watch</span>
              <h2 className={styles.videoTitle}>Feel the Experience</h2>
              <div className={styles.videoWrapper}>
                <video
                  src={category.videoUrl}
                  poster={category.images?.[0] || category.heroImage}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  className={styles.video}
                >
                  <source src={category.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        )}

        {/* Highlighted Enquiry Form Section */}
        <section className={styles.formSection}>
          <div className="container">
            <SinglePageForm initialDestination="" />
          </div>
        </section>
      </main>
    </>
  );
}
