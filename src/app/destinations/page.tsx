"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { LEISURE_DESTINATIONS, LeisureDestination } from '@/lib/destinationsData';
import styles from './page.module.css';

export default function DestinationsHub() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'domestic' | 'international'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = useMemo(() => {
    return LEISURE_DESTINATIONS.filter(dest => {
      // Category filter
      if (activeCategory !== 'all' && dest.category !== activeCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = dest.name.toLowerCase().includes(q);
        const matchesTagline = dest.tagline.toLowerCase().includes(q);
        const matchesRegion = dest.regionGroup.toLowerCase().includes(q);
        const matchesPlaces = dest.famousPlaces.some(p =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.highlights.some(h => h.toLowerCase().includes(q))
        );
        return matchesName || matchesTagline || matchesRegion || matchesPlaces;
      }

      return true;
    });
  }, [activeCategory, searchQuery]);

  const domesticCount = LEISURE_DESTINATIONS.filter(d => d.category === 'domestic').length;
  const internationalCount = LEISURE_DESTINATIONS.filter(d => d.category === 'international').length;

  return (
    <>
      <Navbar />

      <main className={styles.mainWrapper}>
        {/* Editorial Hero */}
        <section className={styles.hero}>
          <div
            className={styles.heroBg}
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')` }}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>SOBHAVI BESPOKE DIRECTORY</span>
            <h1 className={styles.heroTitle}>Global & Domestic Escapes</h1>
            <p className={styles.heroSubtitle}>
              Explore 22 celebrated Indian states & union territories and 7 international luxury gateways, complete with curated city guides, local perspectives, and bespoke travel arrangements.
            </p>
          </div>
        </section>

        {/* Controls Bar: Filters & Search */}
        <section className={styles.controlsSection}>
          <div className="container">
            <div className={styles.controlsBar}>
              {/* Category Filter Pills */}
              <div className={styles.filterTabs}>
                <button
                  type="button"
                  onClick={() => setActiveCategory('all')}
                  className={`${styles.filterTab} ${activeCategory === 'all' ? styles.activeTab : ''}`}
                >
                  All Escapes ({LEISURE_DESTINATIONS.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('domestic')}
                  className={`${styles.filterTab} ${activeCategory === 'domestic' ? styles.activeTab : ''}`}
                >
                  🇮🇳 Domestic India ({domesticCount})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('international')}
                  className={`${styles.filterTab} ${activeCategory === 'international' ? styles.activeTab : ''}`}
                >
                  ✈️ International ({internationalCount})
                </button>
              </div>

              {/* Search Bar */}
              <div className={styles.searchBox}>
                <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search destination or city (e.g. Ooty, Manali, Paris)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className={styles.clearSearchBtn}
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Results count info */}
            <div className={styles.resultsMeta}>
              <span>Showing {filteredDestinations.length} destination guides</span>
              {searchQuery && (
                <span className={styles.activeQueryBadge}>
                  Filtered by: &ldquo;{searchQuery}&rdquo;
                </span>
              )}
            </div>
          </div>
        </section>

        {/* 29 Destinations Grid */}
        <section className={styles.destinationsSection}>
          <div className="container">
            {filteredDestinations.length === 0 ? (
              <div className={styles.noResults}>
                <h3>No destinations match your search</h3>
                <p>Try searching for a different state, country, or leisure city name.</p>
                <button
                  type="button"
                  onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                  className={styles.resetBtn}
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className={styles.destinationsGrid}>
                {filteredDestinations.map(dest => {
                  const placeCount = dest.famousPlaces.length;
                  const samplePlaces = dest.famousPlaces.slice(0, 4).map(p => p.name).join(' · ');
                  const remainingCount = placeCount > 4 ? placeCount - 4 : 0;

                  return (
                    <article key={dest.slug} className={styles.destCard}>
                      <div className={styles.destCardMedia}>
                        <img
                          src={dest.heroImage}
                          alt={dest.name}
                          className={styles.destCardImg}
                          loading="lazy"
                        />
                        <div className={styles.destCardOverlay} />
                        <span className={styles.destRegionBadge}>
                          {dest.regionGroup}
                        </span>
                        <span className={styles.destPlacesCountBadge}>
                          {placeCount} {placeCount === 1 ? 'Destination' : 'Leisure Hubs'}
                        </span>
                      </div>

                      <div className={styles.destCardBody}>
                        <div className={styles.destHeader}>
                          <span className={styles.destCategoryTag}>
                            {dest.category === 'domestic' ? 'Incredible India' : 'International Luxury'}
                          </span>
                          <h2 className={styles.destName}>{dest.name}</h2>
                        </div>

                        <p className={styles.destTagline}>{dest.tagline}</p>

                        <div className={styles.destSampleCities}>
                          <span className={styles.sampleCitiesLabel}>Popular Spots:</span>
                          <p className={styles.sampleCitiesText}>
                            {samplePlaces}
                            {remainingCount > 0 && (
                              <span className={styles.moreCitiesCount}> +{remainingCount} more</span>
                            )}
                          </p>
                        </div>

                        <div className={styles.destFooter}>
                          <Link href={`/destinations/${dest.slug}`} className={styles.destCardLink}>
                            <span>Explore Guide & Places</span>
                            <span className={styles.linkArrow}>&rarr;</span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
