"use client";

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { travelCategories, TravelCategory } from '@/lib/categories';
import { getSiteConfig } from '@/lib/siteConfig';
import SinglePageForm from '@/components/ui/SinglePageForm';
import styles from './page.module.css';

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  // Initialize categories from siteConfig (with fallback to default travelCategories)
  const [categoriesList, setCategoriesList] = useState<TravelCategory[]>(() => {
    const config = getSiteConfig();
    return (config.categories && config.categories.length > 0) ? config.categories : travelCategories;
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('sobhavi_site_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.categories) && parsed.categories.length > 0) {
          setCategoriesList(parsed.categories);
        }
      }
    } catch (e) {
      console.error('Error loading custom categories:', e);
    }
  }, []);

  // Match category by slug case-insensitively
  const category = categoriesList.find(c => c.slug.toLowerCase() === slug.toLowerCase()) 
    || travelCategories.find(c => c.slug.toLowerCase() === slug.toLowerCase());

  if (!category) {
    notFound();
  }

  // Safe images fallback
  const galleryImages: string[] = (Array.isArray(category.images) && category.images.length > 0)
    ? category.images
    : (category.heroImage ? [category.heroImage] : [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
      ]);

  // Safe article fields
  const articleIntro = category.article?.intro || category.description;
  const articleBody = (category.article?.body && category.article.body.length > 0)
    ? category.article.body
    : [category.description, "Every custom bespoke journey curated by Sobhavi Travels is designed with passion, impeccable detail, and private transfers tailored to your vision."];
  const articleQuote = category.article?.quote || "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.";
  const articleQuoteAuthor = category.article?.quoteAuthor || "— Sobhavi Travels Specialists";

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (galleryImages.length <= 1) return;
    const timer = setInterval(() => {
      setActiveImage(prev => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroImageWrapper}>
            {galleryImages.map((img, i) => (
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
          {galleryImages.length > 1 && (
            <div className={styles.thumbnailStrip}>
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.thumbnail} ${i === activeImage ? styles.activeThumbnail : ''}`}
                  onClick={() => setActiveImage(i)}
                  style={{ backgroundImage: `url(${img})` }}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </section>

        {/* Article Section */}
        <section className={styles.articleSection}>
          <div className={styles.articleGrid}>
            <div className={styles.articleMain}>
              <p className={styles.articleIntro}>{articleIntro}</p>
              {articleBody.map((para, i) => (
                <p key={i} className={styles.articleBody}>{para}</p>
              ))}

              {/* Blockquote */}
              <blockquote className={styles.blockquote}>
                <p>{articleQuote}</p>
                <cite>{articleQuoteAuthor}</cite>
              </blockquote>
            </div>

            {/* Sidebar */}
            <aside className={styles.articleSidebar}>
              <div className={styles.sidebarCard}>
                <h3>Plan This Trip</h3>
                <p>Tell us your dream and we'll make it real.</p>
                <Link href={`/enquire?category=${encodeURIComponent(category.slug)}`} className="btn-dark" style={{ marginTop: '2rem', display: 'block', textAlign: 'center', padding: '1rem' }}>
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
        {galleryImages.length > 0 && (
          <section className={styles.gallerySection}>
            <div className="container">
              <span className={styles.galleryEyebrow}>VISUAL JOURNAL</span>
              <h2 className={styles.galleryTitle}>{category.name} in Pictures</h2>
              <div className={styles.galleryGrid}>
                {galleryImages.map((img, idx) => (
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
                  poster={galleryImages[0] || category.heroImage}
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
            <SinglePageForm initialDestination={category.name} />
          </div>
        </section>
      </main>
    </>
  );
}
