"use client";

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import SinglePageForm from '@/components/ui/SinglePageForm';
import JourneyCard from '@/components/ui/JourneyCard';
import { featuredDestinations, popularJourneys } from '@/lib/data';
import styles from './page.module.css';

export default function DestinationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const destination = featuredDestinations.find(d => d.slug === slug);
  
  if (!destination) {
    notFound();
  }

  // Ensure 5 gallery images exist with safe fallback
  const galleryImages = (destination.images && destination.images.length > 0)
    ? destination.images
    : [
        destination.imageUrl,
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
      ];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage(prev => (prev + 1) % galleryImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  // Find journeys for this destination
  const relatedJourneys = popularJourneys.filter(j => 
    j.destination.toLowerCase().includes(destination.name.toLowerCase()) ||
    destination.name.toLowerCase().includes(j.destination.toLowerCase())
  );

  const videoSource = destination.videoUrl || destination.heroVideo;

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
            <span className={styles.eyebrow}>GLOBAL ESCAPES \u00B7 BESPOKE COLLECTION</span>
            <h1 className={styles.heroTitle}>{destination.name}</h1>
            <p className={styles.heroTagline}>{destination.description}</p>
            
            <div className={styles.heroActions}>
              <button onClick={scrollToEnquiry} className={styles.primaryHeroBtn}>
                Plan Your {destination.name} Trip
              </button>
              <a href="tel:+917406994752" className={styles.secondaryHeroBtn}>
                Call Specialist: 7406994752
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
                aria-label={`View photo ${i + 1} of ${destination.name}`}
              >
                <span className={styles.thumbNumber}>0{i + 1}</span>
              </button>
            ))}
          </div>
        </section>

        {/* === EDITORIAL ARTICLE SECTION === */}
        <section className={styles.articleSection}>
          <div className="container">
            <div className={styles.articleGrid}>
              
              {/* Main Editorial Story */}
              <article className={styles.articleMain}>
                <span className={styles.articleEyebrow}>DESTINATION PERSPECTIVE</span>
                <p className={styles.articleIntro}>{destination.article.intro}</p>
                
                {destination.article.body.map((para, i) => (
                  <p key={i} className={styles.articleBody}>{para}</p>
                ))}

                {/* Luxury Serif Quote */}
                <blockquote className={styles.blockquote}>
                  <p className={styles.quoteText}>"{destination.article.quote}"</p>
                  <cite className={styles.quoteAuthor}>— {destination.article.quoteAuthor}</cite>
                </blockquote>

                {/* Signature Experiences Grid */}
                <div className={styles.experiencesBlock}>
                  <h3 className={styles.blockTitle}>Curated Private Experiences</h3>
                  <div className={styles.experiencesGrid}>
                    {destination.experiences.map((exp, idx) => (
                      <div key={idx} className={styles.expCard}>
                        <span className={styles.expNumber}>0{idx + 1}</span>
                        <h4 className={styles.expName}>{exp}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {/* Sidebar Essentials Card */}
              <aside className={styles.articleSidebar}>
                <div className={styles.sidebarCard}>
                  <span className={styles.sidebarBadge}>QUICK ESSENTIALS</span>
                  <h3 className={styles.sidebarTitle}>{destination.name} at a Glance</h3>
                  
                  {destination.bestTime && (
                    <div className={styles.essentialRow}>
                      <span className={styles.essentialLabel}>Best Time to Visit</span>
                      <span className={styles.essentialValue}>{destination.bestTime}</span>
                    </div>
                  )}

                  {destination.currency && (
                    <div className={styles.essentialRow}>
                      <span className={styles.essentialLabel}>Currency</span>
                      <span className={styles.essentialValue}>{destination.currency}</span>
                    </div>
                  )}

                  <div className={styles.hotelsSection}>
                    <h4 className={styles.subSectionTitle}>Recommended Luxury Stays</h4>
                    <ul className={styles.hotelList}>
                      {destination.hotels.map((hotel, idx) => (
                        <li key={idx} className={styles.hotelItem}>
                          <span className={styles.goldStar}>✦</span>
                          <span>{hotel}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.sidebarDirectContact}>
                    <p className={styles.directContactPrompt}>Ready to speak with a destination specialist?</p>
                    <a 
                      href="https://wa.me/917406994752?text=Hello!%20I%20am%20interested%20in%20planning%20a%20trip%20to%20" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.sidebarWaBtn}
                    >
                      WhatsApp: 7406994752
                    </a>
                    <a href="tel:+917406994752" className={styles.sidebarCallBtn}>
                      Call +91 7406994752
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
                <h2 className={styles.galleryTitle}>{destination.name} in Pictures</h2>
              </div>
              <div className={styles.galleryGrid}>
                {galleryImages.map((img, idx) => (
                  <div key={idx} className={styles.galleryCard}>
                    <img 
                      src={img} 
                      alt={`${destination.name} photograph ${idx + 1}`} 
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
        {videoSource && (
          <section className={styles.videoSection}>
            <div className="container">
              <div className={styles.videoHeader}>
                <span className={styles.videoEyebrow}>SENSORY DISCOVERY</span>
                <h2 className={styles.videoTitle}>Feel the Spirit of {destination.name}</h2>
                <p className={styles.videoSubtitle}>Immerse yourself in the sights and serenity before you arrive.</p>
              </div>
              <div className={styles.videoWrapper}>
                <video
                  src={videoSource}
                  poster={galleryImages[0]}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  className={styles.video}
                >
                  <source src={videoSource} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        )}

        {/* === RELATED SIGNATURE JOURNEYS === */}
        {relatedJourneys.length > 0 && (
          <section className={styles.journeysSection}>
            <div className="container">
              <div className={styles.journeysHeader}>
                <span className={styles.journeysEyebrow}>CURATED ITINERARIES</span>
                <h2 className={styles.journeysTitle}>Signature Journeys in {destination.name}</h2>
              </div>
              <div className={styles.journeysGrid}>
                {relatedJourneys.map(journey => (
                  <JourneyCard key={journey.slug} {...journey} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* === PROMINENT HIGHLIGHTED ENQUIRY FORM BOX === */}
        <section id="enquiry-section" className={styles.formSectionWrapper}>
          <div className="container">
            <SinglePageForm initialDestination={destination.name} />
          </div>
        </section>
      </main>
    </>
  );
}
