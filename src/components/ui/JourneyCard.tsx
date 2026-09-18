import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Card.module.css';

interface JourneyCardProps {
  slug: string;
  name: string;
  duration: string;
  imageUrl: string;
  destination: string;
  price?: string;
}

export default function JourneyCard({ slug, name, duration, imageUrl, destination, price }: JourneyCardProps) {
  return (
    <Link href={`/journeys/${slug}`} className={styles.magazineCard}>
      <div className={styles.imageReveal}>
        <img src={imageUrl} alt={name} className={styles.magazineImage} />
        <div className={styles.magazineTag}>{duration}</div>
        {price && (
          <div className={styles.magazinePriceBadge}>
            <span className={styles.priceTinyLabel}>STARTING FROM</span>
            <span className={styles.priceAmount}>{price.replace(/Starting\s*(from\s*)?/i, '')}</span>
          </div>
        )}
      </div>
      <div className={styles.magazineContent}>
        <span className="eyebrow">{destination}</span>
        <h3 className={styles.magazineTitle}>{name}</h3>
        <span className={styles.magazineCta}>
          View Itinerary &amp; Plan <ArrowRight size={16} className={styles.arrow} />
        </span>
      </div>
    </Link>
  );
}

