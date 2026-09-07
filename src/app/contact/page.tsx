"use client";

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    const waMsg = `*Contact Message - SOBHAVI TRAVELS*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || 'Not provided'}%0A%0A` +
      `*Message:* ${formData.message || 'General Enquiry'}`;

    window.open(`https://wa.me/917406994752?text=${waMsg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>GET IN TOUCH</span>
              <h1 className={styles.heroTitle}>We're Here For You.</h1>
              <p className={styles.heroDesc}>
                Whether you have a question about our curated journeys, need immediate flight rebooking, or wish to customize a family vacation — speak directly with our team.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT INFO & FORM */}
        <section className={styles.contactSection}>
          <div className="container">
            <div className={styles.contactGrid}>
              <div className={styles.infoCol}>
                <div className={styles.infoBlock}>
                  <h2 className={styles.infoTitle}>Direct Phone, WhatsApp & Email</h2>
                  <p className={styles.infoText}>
                    Reach our 24/7 travel concierge directly for priority assistance, quotations, and booking queries.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1rem' }}>
                    <a href="tel:+917406994752" className={styles.phoneLink}>
                      📞 +91 74069 94752
                    </a>
                    <a href="mailto:hello@sobhavitravel.com" style={{ color: '#0b0f19', fontWeight: 600, fontSize: '1.05rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      ✉️ hello@sobhavitravel.com
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels,%20I%20have%20an%20enquiry." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.waBtnLarge}
                    >
                      <span>💬 Chat on WhatsApp (+91 74069 94752)</span>
                    </a>
                  </div>
                </div>

                <div className={styles.infoBlock}>
                  <h3 className={styles.infoTitle}>Registered Office Location</h3>
                  <p className={styles.infoText}>
                    <strong>SOBHAVI TRAVELS</strong><br />
                    Ground Floor, No. 19, 2nd Cross, NR Layout,<br />
                    Kalyanagar, Babusapalya, Bengaluru 560043
                  </p>
                  <p className={styles.infoText} style={{ marginBottom: 0 }}>
                    <strong>Operating Hours:</strong><br />
                    Monday – Sunday: 24/7 Concierge Support via Phone & WhatsApp
                  </p>
                </div>
              </div>

              {/* MESSAGE FORM */}
              <div className={styles.formBox}>
                <h3 className={styles.formTitle}>Send Us a Message</h3>
                <p className={styles.formSubtitle}>Our destination specialist will reply within 15 minutes.</p>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✉️</div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Message Sent!</h3>
                    <p style={{ fontSize: '0.88rem', color: '#64748b' }}>
                      Thank you for contacting Sobhavi Travels. We will reach out to you shortly.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="btn-outline-dark"
                      style={{ marginTop: '1rem', padding: '0.6rem 1.4rem', fontSize: '0.75rem' }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Your Name</label>
                      <input 
                        type="text"
                        placeholder="e.g. Ramesh Chandra"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={styles.formInput}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>WhatsApp Phone Number</label>
                      <input 
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={styles.formInput}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Email Address (Optional)</label>
                      <input 
                        type="email"
                        placeholder="e.g. ramesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={styles.formInput}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Your Message / Travel Question</label>
                      <textarea 
                        placeholder="Tell us what you are looking to plan or ask..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={styles.formTextarea}
                        rows={4}
                      />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      Send Direct Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
