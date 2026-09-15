"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './ReviewStrip.module.css';

const reviews = [
  {
    id: 1,
    quote: "Sobhavi Travels didn't just plan our honeymoon — **they handled every detail from private seaplane transfers to candlelight dinners**. Truly unforgettable.",
    author: "Priya & Arjun Mehta",
    location: "Mumbai",
    trip: "Maldives Luxury Escape",
    stars: 5,
    initial: "PA",
    date: "Dec 2024 · Google Review",
  },
  {
    id: 2,
    quote: "The Rajasthan family trip was exceptional. **Our private chauffeur was punctual every day**, and the boutique heritage havelis were handpicked with care.",
    author: "Rajesh & Vandana Sharma",
    location: "Delhi NCR",
    trip: "Royal Rajasthan Circuit",
    stars: 5,
    initial: "RS",
    date: "Jan 2025 · Google Review",
  },
  {
    id: 3,
    quote: "I was hesitant to travel solo, but **my dedicated Travel Buddy was on WhatsApp within minutes** whenever I needed local train or restaurant advice in Kyoto.",
    author: "Kavya Rajan",
    location: "Bengaluru",
    trip: "Japan Solo Discovery",
    stars: 5,
    initial: "KR",
    date: "Nov 2024 · Google Review",
  },
  {
    id: 4,
    quote: "The Iceland aurora hunting experience was worth every rupee. **We saw the northern lights on our first night**, guided by an expert local tracker.",
    author: "Siddharth & Pooja Rao",
    location: "Hyderabad",
    trip: "Nordic Glaciers & Aurora",
    stars: 5,
    initial: "SP",
    date: "Feb 2025 · Google Review",
  },
  {
    id: 5,
    quote: "From the first inquiry call to our return airport transfer, **Sobhavi Travels made us feel like true VIPs**. The Bali private pool villa was breathtaking.",
    author: "Dr. Meera Subramaniam",
    location: "Chennai",
    trip: "Bali Pool Villa & Ubud",
    stars: 5,
    initial: "MS",
    date: "Jan 2025 · Google Review",
  },
  {
    id: 6,
    quote: "We took 14 corporate leaders on a retreat to Dubai. **Logistics, visa clearances, and 5-star hotel invoicing were 100% transparent and GST compliant**.",
    author: "Vikram Agarwal",
    location: "Pune",
    trip: "Dubai Corporate Offsite",
    stars: 5,
    initial: "VA",
    date: "Oct 2024 · Google Review",
  },
  {
    id: 7,
    quote: "Our 25th anniversary trip to the Amalfi Coast was beyond words. **The private boat charter and sunset dinner in Positano were orchestrated to absolute perfection**.",
    author: "Sunita & Ramesh Patel",
    location: "Ahmedabad",
    trip: "Amalfi Coast & Rome",
    stars: 5,
    initial: "SR",
    date: "Sep 2024 · Google Review",
  },
];

export default function ReviewStrip() {
  const allReviews = [...reviews, ...reviews]; // Duplicate for seamless loop

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>VERIFIED GOOGLE REVIEWS (4.9 ★)</span>
        <h2 className={styles.title}>What Real Travellers Say</h2>
        <p className={styles.subtitle}>
          Real vacations, real memories. See why over <strong>420+ travellers</strong> trust Sobhavi Travels for their holidays.
        </p>
      </div>

      <div className={styles.stripWrapper}>
        <motion.div
          className={styles.strip}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
        >
          {allReviews.map((review, i) => (
            <div key={`${review.id}-${i}`} className={styles.card}>
              <div className={styles.topCardRow}>
                <div className={styles.stars}>
                  {'★'.repeat(review.stars)}
                </div>
                <span className={styles.googleBadge}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                  {review.date}
                </span>
              </div>
              <p
                className={styles.quote}
                dangerouslySetInnerHTML={{
                  __html: `"${review.quote.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}"`
                }}
              />
              <div className={styles.author}>
                <div className={styles.avatar}>{review.initial}</div>
                <div className={styles.authorInfo}>
                  <strong>{review.author}</strong>
                  <span>{review.trip} · {review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
