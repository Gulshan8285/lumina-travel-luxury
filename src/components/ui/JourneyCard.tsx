import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Card.module.css';

interface JourneyCardProps {
  slug: string;
  name: string;
  duration: string;
  imageUrl: string;
  destination: string;
}

export default function JourneyCard({ slug, name, duration, imageUrl, destination }: JourneyCardProps) {
  return (
    <Link href={`/journeys/${slug}`} className={styles.magazineCard}>
      <div className={styles.imageReveal}>
        <img src={imageUrl} alt={name} className={styles.magazineImage} />
        <div className={styles.magazineTag}>{duration}</div>
      </div>
      <div className={styles.magazineContent}>
        <span className="eyebrow">{destination}</span>
        <h3 className={styles.magazineTitle}>{name}</h3>
        <span className={styles.magazineCta}>
          View Itinerary <ArrowRight size={16} className={styles.arrow} />
        </span>
      </div>
    </Link>
  );
}
