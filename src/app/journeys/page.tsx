import Navbar from '@/components/layout/Navbar';
import CinematicHero from '@/components/ui/CinematicHero';
import JourneyCard from '@/components/ui/JourneyCard';
import { popularJourneys } from '@/lib/data';
import styles from './page.module.css';

export default function JourneysHub() {
  return (
    <>
      <Navbar />
      
      <main>
        <CinematicHero 
          title="Curated Journeys"
          subtitle="Discover our collection of meticulously crafted itineraries, designed to inspire your next adventure."
          imageUrl="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
          overlayOpacity={0.5}
        />

        <section className="section">
          <div className="container">
            <h2 className="section-title">All Journeys</h2>
            
            <div className={styles.grid}>
              {popularJourneys.map(journey => (
                <JourneyCard key={journey.slug} {...journey} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
