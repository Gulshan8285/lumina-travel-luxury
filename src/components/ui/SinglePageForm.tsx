"use client";

import { useState, useEffect } from 'react';
import styles from './SinglePageForm.module.css';

interface SinglePageFormProps {
  initialDestination?: string;
  initialService?: string;
}

const SERVICES = [
  "Visa Services",
  "International Holiday",
  "Domestic Holiday",
  "Flight Booking",
  "Hotel Booking",
  "Honeymoon Package",
  "Group Tour",
  "Corporate Travel",
  "Cruise",
  "Customized Tour",
  "Other"
];

const TARGET_WHATSAPP = "917406994752";
const DISPLAY_PHONE = "+917406994752";
const DISPLAY_EMAIL = "hello@sobhavitravel.com";

export default function SinglePageForm({ initialDestination = "", initialService = "" }: SinglePageFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || '',
    destination: initialDestination || '',
    travelDates: '',
    travellers: '',
    budget: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialDestination) {
      setFormData(prev => ({ ...prev, destination: initialDestination }));
    }
  }, [initialDestination]);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please provide your name and mobile / WhatsApp number.");
      return;
    }

    if (!formData.service) {
      alert("Please select a service you are interested in.");
      return;
    }

    // Build structured WhatsApp message for Sobhavi Travels
    const messageLines = [
      "*New Travel Enquiry - SOBHAVI TRAVELS*",
      "",
      `*Your name:* ${formData.name}`,
      `*Mobile / WhatsApp:* ${formData.phone}`,
      `*Email:* ${formData.email || 'Not specified'}`,
      `*Interested in:* ${formData.service}`,
      `*Destination(s):* ${formData.destination || 'Not specified'}`,
      `*Approx. travel dates:* ${formData.travelDates || 'Flexible'}`,
      `*Number of travellers:* ${formData.travellers || 'Not specified'}`,
      `*Approximate budget (per person):* ${formData.budget || 'Not specified'}`,
      `*Anything else we should know?:* ${formData.notes || 'None'}`
    ];

    const waText = messageLines.join("\n");
    const waUrl = `https://wa.me/${TARGET_WHATSAPP}?text=${encodeURIComponent(waText)}`;

    // Background log to API
    try {
      fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          destination: formData.destination,
          travelDates: formData.travelDates,
          travellers: formData.travellers,
          budget: formData.budget,
          notes: formData.notes
        })
      }).catch(() => {});
    } catch (err) {
      // Ignore API save errors, priority is direct WhatsApp connect
    }

    // Open WhatsApp directly
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className={styles.enquirySectionWrapper}>
      <div className={styles.enquiryGrid}>
        
        {/* LEFT COLUMN: FORM CARD */}
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Send us an enquiry</h2>

          {submitted ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✓</div>
              <h3 className={styles.successTitle}>Enquiry Prepared!</h3>
              <p className={styles.successDesc}>
                Your details have been opened in WhatsApp. If it didn&apos;t open automatically, click the button below to send:
              </p>
              <button 
                type="button" 
                onClick={handleSubmit} 
                className={styles.submitBtn}
                style={{ marginTop: '1.25rem' }}
              >
                Send Enquiry
              </button>
              <button 
                type="button" 
                onClick={() => setSubmitted(false)} 
                className={styles.resetBtn}
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              
              {/* Your name* */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Your name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Sharma"
                  required
                  className={styles.input}
                />
              </div>

              {/* Mobile / WhatsApp* */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Mobile / WhatsApp*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+917406994752"
                  required
                  className={styles.input}
                />
              </div>

              {/* Email */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@sobhavitravel.com"
                  className={styles.input}
                />
              </div>

              {/* Interested in* */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Interested in*</label>
                <div className={styles.selectWrapper}>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={styles.select}
                  >
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map(svc => (
                      <option key={svc} value={svc}>{svc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Destination(s) */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Destination(s)</label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="e.g. Dubai, Rajasthan, or Bali"
                  className={styles.input}
                />
              </div>

              {/* Approx. travel dates */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Approx. travel dates</label>
                <input
                  type="text"
                  name="travelDates"
                  value={formData.travelDates}
                  onChange={handleChange}
                  placeholder="e.g. 15-22 December 2026"
                  className={styles.input}
                />
              </div>

              {/* Number of travellers */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Number of travellers</label>
                <input
                  type="text"
                  name="travellers"
                  value={formData.travellers}
                  onChange={handleChange}
                  placeholder="e.g. 2 adults + 1 child"
                  className={styles.input}
                />
              </div>

              {/* Approximate budget (per person) */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Approximate budget (per person)</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g. ₹20,000–₹25,000"
                  className={styles.input}
                />
              </div>

              {/* Anything else we should know? */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Anything else we should know?</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Dietary preferences, mobility needs, honeymoon-specific requests, prior visa rejections, etc."
                  rows={4}
                  className={styles.textarea}
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitBtn}>
                Send Enquiry
              </button>
            </form>
          )}
        </div>

        {/* RIGHT COLUMN: OTHER WAYS TO REACH US */}
        <div className={styles.infoColumn}>
          <h2 className={styles.infoHeading}>Other ways to reach us</h2>

          {/* Card 1: WhatsApp (fastest) */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox} style={{ background: 'transparent', border: 'none' }}>
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none" style={{ display: 'block' }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.68.75 5.19 2.05 7.33L2.27 30.13l7.03-1.74A13.92 13.92 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#25D366"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M22.58 19.34c-.36-.18-2.12-1.05-2.45-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.89-1.78-1.07-.95-1.79-2.13-2-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61l-.69-.01c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 0 1.77 1.29 3.48 1.47 3.72.18.24 2.54 3.88 6.15 5.44.86.37 1.53.59 2.05.76.86.27 1.65.23 2.27.14.69-.1 2.12-.87 2.42-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z" fill="#FFFFFF"/>
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardTitle}>WhatsApp (fastest)</div>
              <div className={styles.cardText}>
                <a 
                  href={`https://wa.me/${TARGET_WHATSAPP}?text=Hello%20Sobhavi%20Travels,%20I%20would%20like%20a%20travel%20quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.amberLink}
                >
                  {DISPLAY_PHONE}
                </a>
                <span className={styles.mutedText}> · WhatsApp us for a travel quote</span>
              </div>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#334155">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardTitle}>Email</div>
              <div className={styles.cardText}>
                <a href={`mailto:${DISPLAY_EMAIL}`} className={styles.amberLink}>
                  {DISPLAY_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Card 4: Bengaluru Office */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#334155">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardTitle}>Bengaluru Office</div>
              <div className={styles.addressBlock}>
                <div><strong>SOBHAVI TRAVELS</strong></div>
                <div>Ground Floor, No. 19, 2nd Cross, NR Layout,</div>
                <div>Kalyanagar, Babusapalya,</div>
                <div>Bengaluru 560043, Karnataka, India</div>
              </div>
            </div>
          </div>

          {/* Card 5: Office hours */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#334155">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardTitle}>Office hours</div>
              <div className={styles.addressBlock}>
                <div>Monday–Saturday: 12:00 PM – 9:00 PM (IST)</div>
                <div>Sunday: Closed | WhatsApp Concierge Available</div>
              </div>
            </div>
          </div>

          {/* Card 6: Social */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#334155">
                <circle cx="12" cy="12" r="10" stroke="#334155" strokeWidth="1.5" fill="none"/>
                <line x1="2" y1="12" x2="22" y2="12" stroke="#334155" strokeWidth="1.5"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#334155" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardTitle}>Social</div>
              <div className={styles.socialLinks}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <span className={styles.dotSeparator}>·</span>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <span className={styles.dotSeparator}>·</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
