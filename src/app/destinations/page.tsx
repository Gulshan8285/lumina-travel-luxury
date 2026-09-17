"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { LEISURE_DESTINATIONS } from '@/lib/destinationsData';
import styles from './page.module.css';

const REGIONS = [
  { id: 'North & Himalayas', label: 'North & Himalayas', icon: '🏔️' },
  { id: 'South India', label: 'South India', icon: '🌴' },
  { id: 'West & Central', label: 'West & Central', icon: '🏰' },
  { id: 'East & Islands', label: 'East & Islands', icon: '🏝️' },
  { id: 'International', label: 'International', icon: '✈️' },
];

export default function DestinationsHub() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'domestic' | 'international'>('all');
  const [activeRegion, setActiveRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDests, setSelectedDests] = useState<string[]>([]);

  const toggleDestinationSelect = (name: string) => {
    setSelectedDests(prev =>
      prev.includes(name)
        ? prev.filter(d => d !== name)
        : [...prev, name]
    );
  };

  const filteredDestinations = useMemo(() => {
    return LEISURE_DESTINATIONS.filter(dest => {
      // Category filter (domestic vs international)
      if (activeCategory !== 'all' && dest.category !== activeCategory) {
        return false;
      }

      // Region filter
      if (activeRegion !== 'all' && dest.regionGroup !== activeRegion) {
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
  }, [activeCategory, activeRegion, searchQuery]);

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
            <h1 className={styles.heroTitle}>Popular Destinations &amp; Getaways</h1>
            <p className={styles.heroSubtitle}>
              Explore all 22 celebrated Indian states &amp; union territories and 7 premier international luxury gateways. Select any destination to enquire directly or explore dedicated guides and handpicked stays.
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
                  onClick={() => { setActiveCategory('all'); setActiveRegion('all'); }}
                  className={`${styles.filterTab} ${activeCategory === 'all' && activeRegion === 'all' ? styles.activeTab : ''}`}
                >
                  All Escapes ({LEISURE_DESTINATIONS.length})
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveCategory('domestic'); setActiveRegion('all'); }}
                  className={`${styles.filterTab} ${activeCategory === 'domestic' && activeRegion === 'all' ? styles.activeTab : ''}`}
                >
                  🇮🇳 Domestic India ({domesticCount})
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveCategory('international'); setActiveRegion('all'); }}
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
                  placeholder="Search destination or city (e.g. Dubai, Ooty, Manali, Jaipur, Paris)..."
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

            {/* Region Filter Chips */}
            <div className={styles.regionFilterRow}>
              <span className={styles.regionFilterLabel}>Filter by Region:</span>
              <div className={styles.regionChips}>
                <button
                  type="button"
                  onClick={() => setActiveRegion('all')}
                  className={`${styles.regionChip} ${activeRegion === 'all' ? styles.activeRegionChip : ''}`}
                >
                  All Regions
                </button>
                {REGIONS.map(reg => {
                  const count = LEISURE_DESTINATIONS.filter(d => d.regionGroup === reg.id).length;
                  return (
                    <button
                      key={reg.id}
                      type="button"
                      onClick={() => {
                        setActiveRegion(reg.id);
                        if (reg.id === 'International') {
                          setActiveCategory('international');
                        } else {
                          setActiveCategory('all');
                        }
                      }}
                      className={`${styles.regionChip} ${activeRegion === reg.id ? styles.activeRegionChip : ''}`}
                    >
                      <span>{reg.icon}</span> {reg.label} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results count info & Selected count */}
            <div className={styles.resultsMeta}>
              <span>Showing <strong>{filteredDestinations.length}</strong> destination guides</span>
              {searchQuery && (
                <span className={styles.activeQueryBadge}>
                  Filtered by: &ldquo;{searchQuery}&rdquo;
                </span>
              )}
              {activeRegion !== 'all' && (
                <span className={styles.activeQueryBadge}>
                  Region: {activeRegion}
                </span>
              )}
              {selectedDests.length > 0 && (
                <span className={styles.selectedCountBadge}>
                  ✓ {selectedDests.length} selected for enquiry
                </span>
              )}
            </div>

            {/* Inline banner when destinations are selected */}
            {selectedDests.length > 0 && (
              <div className={styles.selectionQuickNotice}>
                <div className={styles.selectionQuickText}>
                  <span>🎯 <strong>{selectedDests.length}</strong> {selectedDests.length === 1 ? 'destination' : 'destinations'} selected: </span>
                  <span className={styles.selectionNamesInline}>{selectedDests.join(', ')}</span>
                </div>
                <div className={styles.selectionQuickActions}>
                  <Link
                    href={`/enquire?destination=${encodeURIComponent(selectedDests.join(', '))}&service=Custom+Holiday+Package`}
                    className={styles.selectionInlineCta}
                  >
                    ✦ Enquire for Selected ({selectedDests.length}) &rarr;
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedDests([])}
                    className={styles.selectionInlineClear}
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}
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
                  onClick={() => { setActiveCategory('all'); setActiveRegion('all'); setSearchQuery(''); }}
                  className={styles.resetBtn}
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className={styles.destinationsGrid}>
                {filteredDestinations.map(dest => {
                  const placeCount = dest.famousPlaces.length;
                  const isSelected = selectedDests.includes(dest.name);

                  return (
                    <article 
                      key={dest.slug} 
                      className={`${styles.destCard} ${isSelected ? styles.cardSelected : ''}`}
                    >
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

                        {/* Multi-Select Check Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleDestinationSelect(dest.name);
                          }}
                          className={`${styles.selectDestBtn} ${isSelected ? styles.selectedDestBtnActive : ''}`}
                          title={isSelected ? `Remove ${dest.name} from selection` : `Select ${dest.name} to enquire`}
                          aria-pressed={isSelected}
                        >
                          <span className={styles.selectCheckmark}>{isSelected ? '✓' : '+'}</span>
                          <span>{isSelected ? 'Selected' : 'Select'}</span>
                        </button>
                      </div>

                      <div className={styles.destCardBody}>
                        <div className={styles.destHeader}>
                          <span className={styles.destCategoryTag}>
                            {dest.category === 'domestic' ? 'Incredible India' : 'International Luxury'}
                          </span>
                          <h2 className={styles.destName}>{dest.name}</h2>
                        </div>

                        <p className={styles.destTagline}>{dest.tagline}</p>

                        <div className={styles.destCitiesSection}>
                          <span className={styles.sampleCitiesLabel}>
                            Featured Spots ({placeCount}):
                          </span>
                          <div className={styles.cityChipsList}>
                            {dest.famousPlaces.map((place, idx) => (
                              <Link
                                key={idx}
                                href={`/destinations/${dest.slug}`}
                                className={styles.cityChip}
                                title={`Explore ${place.name} in ${dest.name}`}
                              >
                                {place.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className={styles.destFooter}>
                          {/* Direct Enquire CTA Button */}
                          <Link 
                            href={`/enquire?destination=${encodeURIComponent(dest.name)}&service=${dest.category === 'international' ? 'International+Holiday' : 'Domestic+Holiday'}`} 
                            className={styles.destEnquireNowBtn}
                          >
                            <span>✦ Enquire Now</span>
                            <span>&rarr;</span>
                          </Link>

                          {/* Secondary Guide Link */}
                          <Link href={`/destinations/${dest.slug}`} className={styles.destCardLink}>
                            <span>Explore Guide</span>
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

        {/* Full Comprehensive Master Regional Directory Index */}
        <section className={styles.masterIndexSection}>
          <div className="container">
            <div className={styles.masterIndexHeader}>
              <span className={styles.heroEyebrow}>FAST DIRECTORY INDEX</span>
              <h2 className={styles.masterIndexTitle}>Complete Leisure Network Index</h2>
              <p className={styles.masterIndexSubtitle}>
                A complete directory of all 22 Indian states and 7 international luxury gateways with every featured leisure city. Click any destination to enquire or view its complete itinerary and sightseeing guide.
              </p>
            </div>

            <div className={styles.masterIndexGrid}>
              {REGIONS.map(reg => (
                <div key={reg.id} className={styles.masterIndexCol}>
                  <h3 className={styles.regionColHeading}>
                    <span className={styles.colIcon}>{reg.icon}</span>
                    <span>{reg.label}</span>
                  </h3>
                  <div className={styles.stateCardsList}>
                    {LEISURE_DESTINATIONS
                      .filter(d => d.regionGroup === reg.id)
                      .map(dest => {
                        const isSelected = selectedDests.includes(dest.name);
                        return (
                          <div key={dest.slug} className={`${styles.stateIndexCard} ${isSelected ? styles.stateIndexCardSelected : ''}`}>
                            <div className={styles.stateIndexHeader}>
                              <Link href={`/destinations/${dest.slug}`} className={styles.stateIndexLink}>
                                <span>{dest.name}</span>
                                <span className={styles.arrowIcon}>&rarr;</span>
                              </Link>

                              <div className={styles.stateIndexActions}>
                                <button
                                  type="button"
                                  onClick={() => toggleDestinationSelect(dest.name)}
                                  className={`${styles.stateSelectMiniBtn} ${isSelected ? styles.stateSelectMiniBtnActive : ''}`}
                                  title={isSelected ? `Remove ${dest.name}` : `Select ${dest.name}`}
                                >
                                  {isSelected ? '✓' : '+'}
                                </button>
                                <Link
                                  href={`/enquire?destination=${encodeURIComponent(dest.name)}&service=${dest.category === 'international' ? 'International+Holiday' : 'Domestic+Holiday'}`}
                                  className={styles.stateEnquireMiniBtn}
                                >
                                  Enquire &rarr;
                                </Link>
                              </div>
                            </div>
                            <p className={styles.cityNamesList}>
                              {dest.famousPlaces.map(p => p.name).join(' · ')}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Floating Bottom Action Bar for Multi-Selected Destinations */}
        {selectedDests.length > 0 && (
          <aside className={styles.floatingSelectionBar} aria-label="Selected destinations enquiry bar">
            <div className={styles.floatingSelectionInner}>
              <div className={styles.floatingSelectionInfo}>
                <div className={styles.floatingCountPill}>
                  <span className={styles.goldDot}>●</span>
                  <strong>{selectedDests.length}</strong> {selectedDests.length === 1 ? 'Destination' : 'Destinations'} Selected
                </div>
                <div className={styles.floatingNamesPill} title={selectedDests.join(', ')}>
                  {selectedDests.join(' • ')}
                </div>
              </div>

              <div className={styles.floatingSelectionActions}>
                <button
                  type="button"
                  onClick={() => setSelectedDests([])}
                  className={styles.floatingClearBtn}
                >
                  Clear
                </button>
                <Link
                  href={`/enquire?destination=${encodeURIComponent(selectedDests.join(', '))}&service=Custom+Holiday+Package`}
                  className={styles.floatingEnquireBtn}
                >
                  ✦ Enquire for Selected ({selectedDests.length}) &rarr;
                </Link>
              </div>
            </div>
          </aside>
        )}
      </main>
    </>
  );
}
