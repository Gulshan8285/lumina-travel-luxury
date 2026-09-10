"use client";

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import SinglePageForm from '@/components/ui/SinglePageForm';
import { popularJourneys } from '@/lib/data';
import styles from './page.module.css';

export default function JourneyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const journey = popularJourneys.find(j => j.slug === slug);
  
  if (!journey) {
    notFound();
  }

  // Ensure 5 gallery images exist with safe fallback
  const galleryImages = (journey.images && journey.images.length > 0)
    ? journey.images
    : [
        journey.imageUrl,
        "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1976&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
      ];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage(prev => (prev + 1) % galleryImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      
      <main className={styles.mainWrapper}>
        {/* === 5-IMAGE HERO SLIDESHOW === */}
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
            <span className={styles.eyebrow}>SIGNATURE JOURNEY \u00B7 {journey.destination}</span>
            <h1 className={styles.heroTitle}>{journey.name}</h1>
            <p className={styles.heroTagline}>{journey.duration} \u00B7 Bespoke Private Itinerary</p>
            
            <div className={styles.heroActions}>
              <button onClick={scrollToEnquiry} className={styles.primaryHeroBtn}>
                Book / Enquire Now
              </button>
              <a 
                href={`https://wa.me/917406994752?text=${encodeURIComponent(`Hello! I want to enquire about the ${journey.name} itinerary.`)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.secondaryHeroBtn}
              >
                WhatsApp 7406994752
              </a>
            </div>
          </div>

          {/* 5-Image Thumbnail Strip */}
          <div className={styles.thumbnailStrip}>
            {galleryImages.map((img, i) => (
              <button
                key={i}
                className={`${styles.thumbnail} ${i === activeImage ? styles.activeThumbnail : ''}`}
                onClick={() => setActiveImage(i)}
                style={{ backgroundImage: `url(${img})` }}
                aria-label={`View photo ${i + 1} of ${journey.name}`}
              >
                <span className={styles.thumbNumber}>0{i + 1}</span>
              </button>
            ))}
          </div>
        </section>

        {/* === EDITORIAL ARTICLE & ROUTE SECTION === */}
        <section className={styles.articleSection}>
          <div className="container">
            <div className={styles.articleGrid}>
              
              {/* Main Editorial Story */}
              <article className={styles.articleMain}>
                <span className={styles.articleEyebrow}>THE EXPERIENCE</span>
                <p className={styles.articleIntro}>{journey.article.intro}</p>
                
                {journey.article.body.map((para, i) => (
                  <p key={i} className={styles.articleBody}>{para}</p>
                ))}

                {/* Luxury Serif Quote */}
                <blockquote className={styles.blockquote}>
                  <p className={styles.quoteText}>"{journey.article.quote}"</p>
                  <cite className={styles.quoteAuthor}>— {journey.article.quoteAuthor}</cite>
                </blockquote>

                {/* Day-by-Day Visual Itinerary */}
                <div className={styles.itineraryBlock}>
                  <span className={styles.itineraryEyebrow}>DAY BY DAY TIMELINE</span>
                  <h3 className={styles.blockTitle}>Curated Route & Daily Itinerary</h3>
                  
                  <div className={styles.timeline}>
                    {journey.itinerary.map((day, idx) => (
                      <div key={idx} className={styles.timelineItem}>
                        <div className={styles.dayBadgeWrapper}>
                          <span className={styles.dayBadge}>{day.day}</span>
                        </div>
                        <div className={styles.timelineContent}>
                          <h4 className={styles.dayTitle}>{day.title}</h4>
                          <p className={styles.dayDesc}>{day.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions & Exclusions */}
                <div className={styles.inclusionsBlock}>
                  <div className={styles.inclusionCol}>
                    <h4 className={styles.colTitle}>What's Included</h4>
                    <ul className={styles.colList}>
                      {journey.included.map((item, idx) => (
                        <li key={idx} className={styles.includedItem}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.inclusionCol}>
                    <h4 className={styles.colTitle}>Not Included</h4>
                    <ul className={styles.colList}>
                      {journey.notIncluded.map((item, idx) => (
                        <li key={idx} className={styles.notIncludedItem}>
                          <span className={styles.crossIcon}>✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              {/* Sidebar Specifications Card */}
              <aside className={styles.articleSidebar}>
                <div className={styles.sidebarCard}>
                  <span className={styles.sidebarBadge}>ITINERARY ESSENTIALS</span>
                  <h3 className={styles.sidebarTitle}>{journey.name}</h3>
                  
                  <div className={styles.essentialRow}>
                    <span className={styles.essentialLabel}>Destination</span>
                    <span className={styles.essentialValue}>{journey.destination}</span>
                  </div>

                  <div className={styles.essentialRow}>
                    <span className={styles.essentialLabel}>Duration</span>
                    <span className={styles.essentialValue}>{journey.duration}</span>
                  </div>

                  <div className={styles.essentialRow}>
                    <span className={styles.essentialLabel}>Experience Type</span>
                    <span className={styles.essentialPrice}>Private Tailor-Made</span>
                  </div>

                  <div className={styles.highlightsSection}>
                    <h4 className={styles.subSectionTitle}>Key Highlights</h4>
                    <ul className={styles.highlightsList}>
                      {journey.highlights.map((item, idx) => (
                        <li key={idx} className={styles.highlightItem}>
                          <span className={styles.goldDot}>✦</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.sidebarDirectContact}>
                    <button onClick={scrollToEnquiry} className={styles.bookNowBtn}>
                      Enquire for Custom Dates
                    </button>
                    <a 
                      href={`https://wa.me/917406994752?text=${encodeURIComponent(`Hello! I'm interested in the ${journey.name} trip.`)}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.sidebarWaBtn}
                    >
                      WhatsApp: 7406994752
                    </a>
                    <a href="tel:+917406994752" className={styles.sidebarCallBtn}>
                      Call +917406994752
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* === 5-PHOTO VISUAL GALLERY SECTION === */}
        {galleryImages.length > 0 && (
          <section className={styles.gallerySection}>
            <div className="container">
              <div className={styles.galleryHeader}>
                <span className={styles.galleryEyebrow}>VISUAL JOURNAL</span>
                <h2 className={styles.galleryTitle}>{journey.name} in Pictures</h2>
              </div>
              <div className={styles.galleryGrid}>
                {galleryImages.map((img, idx) => (
                  <div key={idx} className={styles.galleryCard}>
                    <img 
                      src={img} 
                      alt={`${journey.name} photograph ${idx + 1}`} 
                      className={styles.galleryImg} 
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* === CINEMATIC VIDEO SECTION === */}
        {journey.videoUrl && (
          <section className={styles.videoSection}>
            <div className="container">
              <div className={styles.videoHeader}>
                <span className={styles.videoEyebrow}>SENSORY MOTION</span>
                <h2 className={styles.videoTitle}>Feel the Journey</h2>
                <p className={styles.videoSubtitle}>A cinematic preview of what awaits you.</p>
              </div>
              <div className={styles.videoWrapper}>
                <video
                  src={journey.videoUrl}
                  poster={galleryImages[0]}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  className={styles.video}
                >
                  <source src={journey.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        )}

        {/* === PROMINENT HIGHLIGHTED ENQUIRY FORM BOX === */}
        <section id="enquiry-section" className={styles.formSectionWrapper}>
          <div className="container">
            <SinglePageForm initialDestination={journey.destination} />
          </div>
        </section>
      </main>
    </>
  );
}
