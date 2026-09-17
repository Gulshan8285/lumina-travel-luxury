"use client";

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

export default function FlightsPage() {
  const whatsappUrl = "https://wa.me/917406994752?text=Hello%20Sobhavi%20Holidays,%20I%20would%20like%20to%20enquire%20about%20flight%20ticketing%20rates%20and%20routes.";

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* =================================================================
            1. HERO WITH FAST FLIGHT INQUIRY CARD
            ================================================================= */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.eyebrow}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>
                  </svg>
                  FLIGHT TICKETING & CONCIERGE
                </span>
                <h1 className={styles.heroTitle}>Effortless Flight Bookings.</h1>
                <p className={styles.heroDesc}>
                  Experience seamless domestic and international flight reservations with negotiated corporate fares, instant seat assignments, and dedicated rescheduling assistance on WhatsApp.
                </p>

                <div className={styles.airlineStrip}>
                  <span className={styles.airlineLabel}>Airline Partners & Alliances</span>
                  <div className={styles.airlineNames}>
                    <span className={styles.airlineBadge}>Emirates</span>
                    <span className={styles.airlineBadge}>Singapore Airlines</span>
                    <span className={styles.airlineBadge}>Qatar Airways</span>
                    <span className={styles.airlineBadge}>Air India</span>
                    <span className={styles.airlineBadge}>IndiGo</span>
                    <span className={styles.airlineBadge}>British Airways</span>
                    <span className={styles.airlineBadge}>Etihad</span>
                  </div>
                </div>
              </div>

              {/* FLIGHT ENQUIRY CARD */}
              <div className={styles.flightCard}>
                <div className={styles.flightCardHeader}>
                  <span className={styles.cardBadge}>EXCLUSIVE FLIGHT DESK</span>
                  <h2 className={styles.flightCardTitle}>Request Flight Options</h2>
                  <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.92rem', lineHeight: '1.6', marginTop: '0.6rem' }}>
                    Tell us your travel dates and route. Our flight ticketing specialists will compare non-stop and best-timed connections with negotiated corporate fares.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginTop: '1.75rem' }}>
                  <Link 
                    href="/enquire?service=Flight+Booking"
                    className="btn-gold"
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      padding: '1rem 1.5rem', 
                      borderRadius: '999px', 
                      fontWeight: '700',
                      textDecoration: 'none',
                      background: 'linear-gradient(135deg, #d4af37 0%, #aa8528 100%)',
                      color: '#0d121d',
                      fontSize: '1.02rem',
                      boxShadow: '0 8px 24px rgba(212, 175, 55, 0.35)',
                      textAlign: 'center'
                    }}
                  >
                    ✦ Enquire Now for Flight Booking &rarr;
                  </Link>

                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      padding: '0.95rem 1.5rem', 
                      borderRadius: '999px', 
                      fontWeight: '600',
                      textDecoration: 'none',
                      background: 'rgba(37, 211, 102, 0.12)',
                      color: '#25d366',
                      border: '1px solid rgba(37, 211, 102, 0.4)',
                      fontSize: '0.95rem',
                      textAlign: 'center'
                    }}
                  >
                    💬 WhatsApp Flight Desk (+91 74069 94752)
                  </a>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)' }}>
                    <span>⚡</span> <span><strong>15-Minute Response:</strong> Express route &amp; fare quote</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)' }}>
                    <span>🛡️</span> <span><strong>Zero Hidden Fees:</strong> Complete transparency on airline taxes</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)' }}>
                    <span>💺</span> <span><strong>Complimentary Web Check-in:</strong> Boarding passes to your phone</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. FULL EDITORIAL ARTICLE: THE SOBHAVI FLIGHT ADVANTAGE
            ================================================================= */}
        <section className={styles.articleSection}>
          <div className={`container ${styles.articleContainer}`}>
            <div className={styles.articleHeader}>
              <span className={styles.articleEyebrow}>EDITORIAL GUIDE</span>
              <h2 className={styles.articleTitle}>The Sobhavi Flight Advantage: Travel Without Uncertainty</h2>
              <p className={styles.articleLead}>
                Booking a flight is more than securing a seat at 35,000 feet. It is ensuring that your journey begins and concludes without friction, unexpected cancellations, or hours trapped in automated customer service phone trees.
              </p>
            </div>

            <div className={styles.imageGrid}>
              <img 
                src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Airport Terminal and Lounge"
                className={styles.articleImage} 
              />
              <img 
                src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2071&auto=format&fit=crop" 
                alt="Luxury Aviation and First Class Travel" 
                className={styles.articleImage}
              />
            </div>

            <div className={styles.articleBody}>
              <div className={styles.sectionBlock}>
                <h3>1. Human Concierge Over Automated Chatbots</h3>
                <p>
                  When flight schedules change unexpectedly or weather causes connections to tighten, generic web portals leave passengers stranded with automated voice menus. At Sobhavi Travels, every passenger is assigned a dedicated ticketing specialist. With a single direct message to our WhatsApp desk (+917406994752), rescheduling, boarding pass retrieval, and meal preferences are resolved in real time.
                </p>
              </div>

              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>🛡️</div>
                  <h4 className={styles.benefitTitle}>Zero Hidden Fees</h4>
                  <p className={styles.benefitDesc}>Clear, transparent pricing without sudden markups during final payment.</p>
                </div>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>🛋️</div>
                  <h4 className={styles.benefitTitle}>Lounge & Priority</h4>
                  <p className={styles.benefitDesc}>Complimentary lounge access arrangements & priority boarding on selected routes.</p>
                </div>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>⚡</div>
                  <h4 className={styles.benefitTitle}>Instant Web Check-in</h4>
                  <p className={styles.benefitDesc}>Our team completes your web check-in and sends boarding passes right to your phone.</p>
                </div>
              </div>

              <div className={styles.sectionBlock}>
                <h3>2. Negotiated Corporate & Group Tariffs</h3>
                <p>
                  Through institutional airline contracts with premier carriers including Emirates, Singapore Airlines, Qatar Airways, Air India, and IndiGo, Sobhavi Travels accesses non-published fare classes, flexible cancellation rules, and generous baggage allowances that standard online travel agencies cannot provide.
                </p>
                <p>
                  For destination weddings, family reunions, and corporate offsites, our specialized group desk blocks aircraft sections with flexible passenger name changes up to 72 hours prior to departure.
                </p>
              </div>

              <div className={styles.sectionBlock}>
                <h3>3. Seamless End-to-End Travel Continuity</h3>
                <p>
                  When you book flights through Sobhavi Travels in conjunction with your holiday or hotel package, your flight arrivals are directly synchronized with your private chauffeur at the destination. If your flight lands 45 minutes late, your chauffeur adjusts automatically — no missed pickups, no frantic phone calls in international arrival halls.
                </p>
              </div>

              <div className={styles.articleCtaBox}>
                <h3 className={styles.articleCtaTitle}>Ready to Reserve Your Next Flight?</h3>
                <p className={styles.articleCtaDesc}>
                  Connect directly with our flight desk for personalized fare quotes, business class upgrades, and group bookings.
                </p>
                <div className={styles.articleCtaButtons}>
                  <Link href="/enquire?service=Flight%20Booking" className="btn-gold">
                    Enquire Now for Flights &rarr;
                  </Link>
                  <a 
                    href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels,%20I%20need%20flight%20booking%20assistance." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-outline"
                  >
                    WhatsApp Flight Desk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
