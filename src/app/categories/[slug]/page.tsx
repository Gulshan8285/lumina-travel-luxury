"use client";

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { travelCategories, TravelCategory } from '@/lib/categories';
import { getSiteConfig } from '@/lib/siteConfig';
import EnquireCtaBanner from '@/components/ui/EnquireCtaBanner';
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

  const heroImg = category.heroImage || (Array.isArray(category.images) && category.images[0]) || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop";

  // Safe article fields
  const articleIntro = category.article?.intro || category.description;
  const articleBody = (category.article?.body && category.article.body.length > 0)
    ? category.article.body
    : [category.description, "Every custom bespoke journey curated by Sobhavi Travels is designed with passion, impeccable detail, and private transfers tailored to your vision."];
  const articleQuote = category.article?.quote || "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.";
  const articleQuoteAuthor = category.article?.quoteAuthor || "— Sobhavi Travels Specialists";

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Clean Luxury Hero */}
        <section className={styles.hero}>
          <div className={styles.heroImageWrapper}>
            <div
              className={`${styles.heroImage} ${styles.active}`}
              style={{ backgroundImage: `url(${heroImg})` }}
            />
            <div className={styles.heroOverlay} />
          </div>

          {/* Top Right Luxury Starting Price Badge */}
          <div className={styles.topRightPriceBadge}>
            <span className={styles.priceTinyLabel}>STARTING FROM</span>
            <span className={styles.priceAmount}>₹25,000</span>
          </div>

          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Travel Collection</span>
            <h1 className={styles.heroTitle}>{category.name}</h1>
            <p className={styles.heroTagline}>{category.tagline}</p>
          </div>
        </section>

        {/* Clean Editorial Article Section */}
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
                <div className={styles.sidebarPriceBox}>
                  <span className={styles.sidebarPriceLabel}>Starting Price</span>
                  <span className={styles.sidebarPriceAmount}>₹25,000</span>
                  <span className={styles.sidebarPricePer}>per person sharing</span>
                </div>
                <h3>Plan This Experience</h3>
                <p>Tell us your dates and dream destination — we craft your bespoke itinerary.</p>
                <Link 
                  href={`/enquire?category=${encodeURIComponent(category.slug)}`} 
                  className={styles.sidebarCtaBtn}
                >
                  Start Planning &rarr;
                </Link>
                <a
                  href={`https://wa.me/917406994752?text=${encodeURIComponent(`Hello Sobhavi Travels, I want to enquire about ${category.name} starting at ₹25,000.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sidebarWaBtn}
                >
                  💬 WhatsApp Concierge
                </a>
              </div>
              <div className={styles.categoryDescription}>
                <h4>About {category.name}</h4>
                <p>{category.description}</p>
              </div>
            </aside>
          </div>
        </section>

        {/* Enquire CTA Banner */}
        <EnquireCtaBanner destination={category.name} title={`Plan Your ${category.name} Getaway`} />
      </main>
    </>
  );
}
