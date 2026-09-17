'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CityRoute } from '@/lib/rannUtsavRoutes';
import styles from './RannCityPackages.module.css';

interface RannCityPackagesProps {
  routes: CityRoute[];
}

export default function RannCityPackages({ routes }: RannCityPackagesProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'South India' | 'West India'>('All');

  const filteredRoutes = selectedCategory === 'All'
    ? routes
    : routes.filter(r => r.category === selectedCategory);

  const southCount = routes.filter(r => r.category === 'South India').length;
  const westCount = routes.filter(r => r.category === 'West India').length;

  return (
    <div className={styles.section}>
      {/* Category Tabs */}
      <div className={styles.categoryFilterBar} role="tablist" aria-label="City Departure Categories">
        <button
          type="button"
          role="tab"
          aria-selected={selectedCategory === 'All'}
          className={`${styles.categoryTab} ${selectedCategory === 'All' ? styles.activeTab : ''}`}
          onClick={() => setSelectedCategory('All')}
        >
          All Departures <span className={styles.tabCount}>{routes.length}</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={selectedCategory === 'South India'}
          className={`${styles.categoryTab} ${selectedCategory === 'South India' ? styles.activeTab : ''}`}
          onClick={() => setSelectedCategory('South India')}
        >
          🌴 South India Hubs <span className={styles.tabCount}>{southCount}</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={selectedCategory === 'West India'}
          className={`${styles.categoryTab} ${selectedCategory === 'West India' ? styles.activeTab : ''}`}
          onClick={() => setSelectedCategory('West India')}
        >
          🏙️ West India Hubs <span className={styles.tabCount}>{westCount}</span>
        </button>
      </div>

      {/* Cards Grid */}
      <div className={styles.cardsGrid}>
        {filteredRoutes.map((route) => (
          <article key={route.slug} className={styles.cityCard}>
            <div>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.cityName}>{route.cityName}</h3>
                  <span className={styles.categoryPill}>{route.category} Departure</span>
                </div>
                <span className={styles.cityCodeBadge}>{route.cityCode}</span>
              </div>

              <div className={styles.routeMeta}>
                <div className={styles.metaRow}>
                  <span className={styles.metaIcon}>✈️</span>
                  <span><strong>Flight:</strong> Via Ahmedabad / Direct Bhuj</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaIcon}>🚌</span>
                  <span><strong>Transfers:</strong> Bhuj Station/Airport to Dhordo</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaIcon}>⏱️</span>
                  <span><strong>Duration:</strong> 2N/3D or 3N/4D (Recommended)</span>
                </div>
              </div>

              <ul className={styles.featuresList}>
                <li>Luxury Tent City Dhordo stay</li>
                <li>Sunset & Full Moon White Desert walks</li>
                <li>Kala Dungar & Kutchi craft villages</li>
              </ul>
            </div>

            <Link
              href={`/rann-utsav/${route.slug}`}
              className={styles.cardActionBtn}
            >
              View Package &amp; Itinerary &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
