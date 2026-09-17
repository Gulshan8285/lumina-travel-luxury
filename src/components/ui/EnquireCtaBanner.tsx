import React from 'react';
import Link from 'next/link';
import styles from './EnquireCtaBanner.module.css';

interface EnquireCtaBannerProps {
  destination?: string;
  duration?: string;
  service?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
}

export default function EnquireCtaBanner({
  destination,
  duration,
  service,
  title,
  subtitle,
  badge = "TAILOR-MADE ITINERARY PLANNING"
}: EnquireCtaBannerProps) {
  const destQuery = destination ? `destination=${encodeURIComponent(destination)}` : '';
  const durQuery = duration ? `duration=${encodeURIComponent(duration)}` : '';
  const servQuery = service ? `service=${encodeURIComponent(service)}` : '';
  const queryParams = [destQuery, durQuery, servQuery].filter(Boolean).join('&');
  const enquireUrl = queryParams ? `/enquire?${queryParams}` : '/enquire';

  const defaultTitle = destination 
    ? `Ready to Experience ${destination}?` 
    : 'Ready to Plan Your Next Journey?';

  const defaultSubtitle = destination
    ? `Share your dates and group preferences. Our ${destination} travel specialists will craft your personalized, itemized itinerary with live availability and best price guarantee.`
    : 'Share your travel wishlist, dates, and budget. Our destination experts will curate an authentic bespoke vacation with seamless arrangements.';

  const waText = destination
    ? `Hello Sobhavi Holidays, I am interested in planning a trip to ${destination}. Please share package details and availability.`
    : `Hello Sobhavi Holidays, I would like to plan a vacation. Please share package details.`;
  const waUrl = `https://wa.me/917406994752?text=${encodeURIComponent(waText)}`;

  return (
    <section className={styles.enquireBannerSection}>
      <div className="container">
        <div className={styles.enquireCard}>
          <span className={styles.eyebrow}>{badge}</span>
          <h2 className={styles.title}>{title || defaultTitle}</h2>
          <p className={styles.subtitle}>{subtitle || defaultSubtitle}</p>

          <div className={styles.buttonGroup}>
            <Link href={enquireUrl} className={styles.primaryBtn}>
              ✦ Enquire Now &rarr;
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              💬 WhatsApp Specialist (+91 74069 94752)
            </a>
          </div>

          <div className={styles.trustBadgesRow}>
            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon}>⚡</span>
              <span><strong>15-Min</strong> Fast Response</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon}>🛡️</span>
              <span><strong>100% Verified</strong> Hotels &amp; Guides</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon}>💎</span>
              <span><strong>Zero Obligation</strong> Custom Quote</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
