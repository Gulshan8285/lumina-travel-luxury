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
const DISPLAY_PHONE = "+91 74069 94752";
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
                  placeholder="+91 74069 94752"
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
                  placeholder="e.g. ₹50,000–₹80,000"
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
            <div className={styles.cardIconBox}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#10b981">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.07-1.34C8.52 21.52 10.22 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.1 21.9l5.034-1.22A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm4.646 13.884c-.235.659-1.169 1.258-1.91 1.338-.508.054-1.171.08-3.376-.832-2.813-1.163-4.63-4.01-4.77-4.197-.14-.187-1.144-1.523-1.144-2.905 0-1.382.724-2.062.98-2.343.256-.281.56-.351.748-.351.187 0 .374.002.538.01.173.008.406-.065.635.485.235.565.801 1.956.871 2.097.07.14.117.305.023.492-.093.187-.14.304-.28.468-.14.164-.296.366-.422.492-.14.14-.286.293-.123.573.163.28 1.118 1.846 2.404 2.99 1.652 1.472 3.042 1.927 3.473 2.138.43.21.683.176.936-.117.253-.293 1.077-1.253 1.364-1.682.287-.43.573-.358.96-.215.387.143 2.457 1.158 2.879 1.369.422.211.703.316.806.492.103.176.103 1.019-.132 1.678z"/>
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

          {/* Card 2: Phone */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#334155">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.27 22 2 13.73 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardTitle}>Phone</div>
              <div className={styles.cardText}>
                <a href={`tel:${TARGET_WHATSAPP}`} className={styles.amberLink}>
                  {DISPLAY_PHONE}
                </a>
                <span className={styles.mutedText}> · Mon–Sat 9:30 AM–7:30 PM IST</span>
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#dc2626">
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
                <div>Monday–Saturday: 9:30 AM – 7:30 PM IST</div>
                <div>24/7 Concierge Support via Phone & WhatsApp</div>
              </div>
            </div>
          </div>

          {/* Card 6: Social */}
          <div className={styles.contactCard}>
            <div className={styles.cardIconBox}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#0284c7">
                <circle cx="12" cy="12" r="10" stroke="#0284c7" strokeWidth="1.5" fill="none"/>
                <line x1="2" y1="12" x2="22" y2="12" stroke="#0284c7" strokeWidth="1.5"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#0284c7" strokeWidth="1.5" fill="none"/>
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
