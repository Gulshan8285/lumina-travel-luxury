"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './ReviewStrip.module.css';

const reviews = [
  {
    id: 1,
    quote: "Sobhavi Travels didn't just plan our honeymoon — they created a memory we'll spend the rest of our lives trying to describe.",
    author: "Priya & Arjun Mehta",
    location: "Mumbai",
    trip: "Maldives Honeymoon",
    stars: 5,
    initial: "PA",
  },
  {
    id: 2,
    quote: "The Rajasthan trip with my family was unlike anything I've experienced. Every single detail was perfect — the palaces, the guides, the food.",
    author: "Rajesh Sharma",
    location: "Delhi",
    trip: "Royal Rajasthan Escape",
    stars: 5,
    initial: "RS",
  },
  {
    id: 3,
    quote: "I was terrified to travel solo. Sobhavi Travels held my hand every step of the way, without ever making me feel like I wasn't independent.",
    author: "Kavya Rajan",
    location: "Bangalore",
    trip: "Japan Solo Discovery",
    stars: 5,
    initial: "KR",
  },
  {
    id: 4,
    quote: "The Iceland aurora hunting experience was worth every rupee. We saw the northern lights on our very first night. Tears were shed.",
    author: "Siddharth & Pooja",
    location: "Hyderabad",
    trip: "Nordic Lights & Glaciers",
    stars: 5,
    initial: "SP",
  },
  {
    id: 5,
    quote: "From the first call to the final transfer home, Sobhavi Travels made us feel like the most important travellers in the world.",
    author: "Dr. Meera Subramaniam",
    location: "Chennai",
    trip: "Bali Wellness Retreat",
    stars: 5,
    initial: "MS",
  },
  {
    id: 6,
    quote: "We took 12 colleagues on a group trip to Dubai. Logistics were flawless, the experiences were extraordinary, and not a single complaint.",
    author: "Vikram Agarwal",
    location: "Pune",
    trip: "Dubai Corporate Incentive",
    stars: 5,
    initial: "VA",
  },
  {
    id: 7,
    quote: "The Sahara desert camp in Morocco. Stargazing in silence in the middle of nowhere. That one moment changed my life.",
    author: "Aditya Krishnan",
    location: "Mumbai",
    trip: "Morocco: Medina to Sahara",
    stars: 5,
    initial: "AK",
  },
  {
    id: 8,
    quote: "Our 25th anniversary trip to the Amalfi Coast was beyond words. The yacht, the food, the sunsets — absolute perfection.",
    author: "Sunita & Ramesh Patel",
    location: "Ahmedabad",
    trip: "Amalfi Coast Retreat",
    stars: 5,
    initial: "SR",
  },
];

export default function ReviewStrip() {
  const allReviews = [...reviews, ...reviews]; // Duplicate for seamless loop

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Testimonials</span>
        <h2 className={styles.title}>What Our Travellers Say</h2>
        <p className={styles.subtitle}>Every journey is a story. Here are a few of ours.</p>
      </div>

      <div className={styles.stripWrapper}>
        <motion.div
          className={styles.strip}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {allReviews.map((review, i) => (
            <div key={`${review.id}-${i}`} className={styles.card}>
              <div className={styles.stars}>
                {'★'.repeat(review.stars)}
              </div>
              <p className={styles.quote}>"{review.quote}"</p>
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
