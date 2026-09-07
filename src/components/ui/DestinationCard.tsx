import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Card.module.css';

interface DestinationCardProps {
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
}

export default function DestinationCard({ slug, name, description, imageUrl }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${slug}`} className={styles.magazineCard}>
      <div className={styles.imageReveal}>
        <img src={imageUrl} alt={name} className={styles.magazineImage} />
      </div>
      <div className={styles.magazineContent}>
        <h3 className={styles.magazineTitle}>{name}</h3>
        <p className={styles.magazineDesc}>{description}</p>
        <span className={styles.magazineCta}>
          Discover <ArrowRight size={16} className={styles.arrow} />
        </span>
      </div>
    </Link>
  );
}
