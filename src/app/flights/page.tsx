"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

export default function FlightsPage() {
  const [tripType, setTripType] = useState<'round' | 'oneway'>('round');
  const [formData, setFormData] = useState({
    from: "Delhi (DEL)",
    to: "Dubai (DXB)",
    departDate: "",
    returnDate: "",
    cabin: "Economy",
    passengers: "2 Adults",
    name: "",
    phone: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and contact phone number.");
      return;
    }

    const message = `*Flight Booking Enquiry - SOBHAVI TRAVELS*%0A%0A` +
      `*Trip Type:* ${tripType === 'round' ? 'Round Trip' : 'One Way'}%0A` +
      `*From:* ${formData.from}%0A` +
      `*To:* ${formData.to}%0A` +
      `*Departure Date:* ${formData.departDate || 'Flexible'}%0A` +
      (tripType === 'round' ? `*Return Date:* ${formData.returnDate || 'Flexible'}%0A` : '') +
      `*Cabin Class:* ${formData.cabin}%0A` +
      `*Passengers:* ${formData.passengers}%0A%0A` +
      `*Client Details:*%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A%0A` +
      `Please provide best flight options, airline timings & special fares.`;

    window.open(`https://wa.me/917406994752?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* =================================================================
            1. HERO WITH FAST FLIGHT SEARCH & INQUIRY CARD
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

              {/* FLIGHT BOOKING FORM */}
              <div className={styles.flightCard}>
                <div className={styles.flightCardHeader}>
                  <div className={styles.tripTypeTabs}>
                    <button 
                      type="button"
                      className={`${styles.tabBtn} ${tripType === 'round' ? styles.tabActive : ''}`}
                      onClick={() => setTripType('round')}
                    >
                      Round Trip
                    </button>
                    <button 
                      type="button"
                      className={`${styles.tabBtn} ${tripType === 'oneway' ? styles.tabActive : ''}`}
                      onClick={() => setTripType('oneway')}
                    >
                      One Way
                    </button>
                  </div>
                  <h2 className={styles.flightCardTitle}>Request Flight Options</h2>
                </div>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✈️</div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Flight Request Dispatched!</h3>
                    <p style={{ fontSize: '0.88rem', color: '#64748b' }}>
                      Our flight ticketing specialist is comparing non-stop and best-timed connections for you now.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="btn-outline-dark"
                      style={{ marginTop: '1rem', padding: '0.6rem 1.4rem', fontSize: '0.75rem' }}
                    >
                      Search Another Route
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.flightForm}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>From (City/Airport)</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Delhi, Mumbai, Bengaluru"
                          value={formData.from}
                          onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                          className={styles.formInput}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>To (Destination)</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Dubai, London, Bali, Goa"
                          value={formData.to}
                          onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                          className={styles.formInput}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Departure Date</label>
                        <input 
                          type="date"
                          value={formData.departDate}
                          onChange={(e) => setFormData({ ...formData, departDate: e.target.value })}
                          className={styles.formInput}
                          required
                        />
                      </div>
                      {tripType === 'round' && (
                        <div className={styles.formGroup}>
                          <label className={styles.formLabel}>Return Date</label>
                          <input 
                            type="date"
                            value={formData.returnDate}
                            onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                            className={styles.formInput}
                            required
                          />
                        </div>
                      )}
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Cabin Class</label>
                        <select 
                          value={formData.cabin}
                          onChange={(e) => setFormData({ ...formData, cabin: e.target.value })}
                          className={styles.formSelect}
                        >
                          <option value="Economy">Economy</option>
                          <option value="Premium Economy">Premium Economy</option>
                          <option value="Business Class">Business Class</option>
                          <option value="First Class">First Class</option>
                        </select>
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Passengers</label>
                        <select 
                          value={formData.passengers}
                          onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                          className={styles.formSelect}
                        >
                          <option value="1 Adult">1 Adult</option>
                          <option value="2 Adults">2 Adults</option>
                          <option value="Family (2 Adults + 1 Child)">Family (2 Adults + 1 Child)</option>
                          <option value="Family (2 Adults + 2 Children)">Family (2 Adults + 2 Children)</option>
                          <option value="Group (5+ Passengers)">Group (5+ Passengers)</option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Your Name</label>
                        <input 
                          type="text"
                          placeholder="e.g. Amit Kapoor"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={styles.formInput}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>WhatsApp Phone</label>
                        <input 
                          type="tel"
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={styles.formInput}
                          required
                        />
                      </div>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      <span>Get Best Flight Quotes</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>

                    <div className={styles.flightSupportStrip}>
                      <span>Flight Desk (12 PM – 9 PM):</span>
                      <a href="tel:+917406994752" style={{ color: '#0a0a0a', fontWeight: 700 }}>+91 7406994752</a>
                    </div>
                  </form>
                )}
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
                  When flight schedules change unexpectedly or weather causes connections to tighten, generic web portals leave passengers stranded with automated voice menus. At Sobhavi Travels, every passenger is assigned a dedicated ticketing specialist. With a single direct message to our WhatsApp desk (+91 7406994752), rescheduling, boarding pass retrieval, and meal preferences are resolved in real time.
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
                  <a href="tel:+917406994752" className="btn-pink">
                    Call Flight Desk: +91 7406994752
                  </a>
                  <a 
                    href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels,%20I%20need%20flight%20booking%20assistance." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-outline"
                  >
                    WhatsApp Concierge
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
