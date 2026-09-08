"use client";

import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import styles from './CinematicHero.module.css';

interface CountryMedia {
  name: string;
  url?: string;
  imageUrl?: string;
}

interface CinematicHeroProps {
  title: string;
  subtitle?: string;
  // Multi-slide mode (homepage)
  videos?: CountryMedia[];
  // Single image/video mode (detail pages)
  imageUrl?: string;
  videoUrl?: string;
  overlayOpacity?: number;
  primaryButtonText?: string;
  primaryButtonLink?: string;
}

export default function CinematicHero({ 
  title, 
  subtitle, 
  videos, 
  imageUrl, 
  videoUrl, 
  overlayOpacity = 0.5,
  primaryButtonText,
  primaryButtonLink,
}: CinematicHeroProps) {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMultiSlide = videos && videos.length > 0;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    if (!isMultiSlide) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (videos?.length ?? 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [isMultiSlide, videos]);

  return (
    <div className={styles.hero} ref={containerRef}>
      <motion.div className={styles.mediaContainer} style={{ y: yImage }}>

        {/* Multi-slide (homepage) */}
        {isMultiSlide && (
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={styles.videoWrapper}
            >
              {videos![currentIndex].url ? (
                <video className={styles.backgroundMedia} autoPlay muted loop playsInline>
                  <source src={videos![currentIndex].url} type="video/mp4" />
                </video>
              ) : (
                <div
                  className={`${styles.backgroundMedia} ${styles.kenBurns}`}
                  style={{ backgroundImage: `url(${videos![currentIndex].imageUrl})` }}
                />
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Single media (detail pages) */}
        {!isMultiSlide && (
          <div className={styles.videoWrapper}>
            {videoUrl ? (
              <video className={styles.backgroundMedia} autoPlay muted loop playsInline>
                <source src={videoUrl} type="video/mp4" />
              </video>
            ) : imageUrl ? (
              <div
                className={`${styles.backgroundMedia} ${styles.kenBurns}`}
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
            ) : null}
          </div>
        )}

        <div className={styles.overlay} style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }} />
      </motion.div>

      <motion.div
        className={styles.content}
        style={{ opacity: opacityText, y: yText }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Eyebrow — only on multi-slide */}
        {isMultiSlide && (
          <div className={styles.countryIndicator}>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1 }}
                className="eyebrow"
                style={{ color: 'var(--accent)', marginBottom: '2rem', fontSize: '1rem' }}
              >
                Location — {videos![currentIndex].name}
              </motion.span>
            </AnimatePresence>
          </div>
        )}

        <div className={styles.titleContainer}>
          <h1 className={styles.heroTitle}>{title}</h1>
          {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        </div>

        <div className={styles.actions}>
          {primaryButtonText && primaryButtonLink ? (
            <>
              <Link href={primaryButtonLink} className="btn-pink">
                {primaryButtonText}
              </Link>
              <Link href="/enquire" className="btn-outline">
                Enquire Now
              </Link>
            </>
          ) : (
            <>
              <Link href="/journeys" className="btn-outline">
                Explore Our Trips
              </Link>
              <Link href="/enquire" className="btn-pink">
                Plan My Trip
              </Link>
            </>
          )}
        </div>
      </motion.div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className={styles.scrollLine}></span>
      </motion.div>
    </div>
  );
}
