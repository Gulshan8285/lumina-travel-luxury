"use client";

import { useState, useEffect } from 'react';
import styles from './SinglePageForm.module.css';

interface SinglePageFormProps {
  initialDestination?: string;
}

const COUNTRIES = [
  "Rajasthan",
  "Shimla & Manali",
  "Kerala",
  "Andaman",
  "Dubai",
  "Singapore",
  "Bali",
  "Maldives",
  "Chardham Yatra",
  "Kashmir",
  "Goa",
  "Ladakh",
  "Japan",
  "Switzerland",
  "France",
  "Italy",
  "Thailand",
  "Vietnam",
  "United Kingdom",
  "USA"
];

const BUDGETS_INR = [
  "₹50,000 – ₹1,00,000 per person",
  "₹1,00,000 – ₹3,00,000 per person",
  "₹3,00,000 – ₹5,00,000 per person",
  "₹5,00,000 – ₹10,00,000 per person",
  "₹10,00,000+ per person"
];

const PHONE_NUMBER = "7406994752";
const FULL_PHONE = "+917406994752";

export default function SinglePageForm({ initialDestination = "" }: SinglePageFormProps) {
  const [formData, setFormData] = useState({
    destination: initialDestination,
    date: '',
    duration: '',
    travelers: '2',
    budget: '₹3,00,000 – ₹5,00,000 per person',
    comments: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    newsletter: true
  });

  useEffect(() => {
    if (initialDestination) {
      setFormData(prev => ({ ...prev, destination: initialDestination }));
    }
  }, [initialDestination]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*New Travel Enquiry - SOBHAVI TRAVELS*%0A%0A` +
      `*Destination:* ${formData.destination || 'Not specified'}%0A` +
      `*Travel Date:* ${formData.date || 'Flexible'}%0A` +
      `*Duration:* ${formData.duration || 'Not specified'}%0A` +
      `*Travelers:* ${formData.travelers}%0A` +
      `*Budget (INR):* ${formData.budget}%0A%0A` +
      `*Special Requests:* ${formData.comments || 'None'}%0A%0A` +
      `*Client Details*%0A` +
      `*Name:* ${formData.firstName} ${formData.lastName}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}`;

    // Target WhatsApp: 917406994752
    const waUrl = `https://wa.me/917406994752?text=${message}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className={styles.highlightedWrapper}>
      {/* Top Banner / Fast Connect Bar */}
      <div className={styles.quickContactBar}>
        <div className={styles.quickContactText}>
          <span className={styles.goldBadge}>✦ DIRECT CONCIERGE</span>
          <span className={styles.quickContactTitle}>Speak Directly with our Luxury Travel Specialists</span>
        </div>
        <div className={styles.quickButtons}>
          <a href={`tel:${FULL_PHONE}`} className={styles.callBadgeBtn}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.27 22 2 13.73 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
            </svg>
            <span>Call: {PHONE_NUMBER}</span>
          </a>
          <a 
            href={`https://wa.me/917406994752?text=${encodeURIComponent("Hello! I want to enquire about a luxury holiday.")}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.waBadgeBtn}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>WhatsApp {PHONE_NUMBER}</span>
        </a>
      </div>
    </div>

    <div className={styles.luxuryBox}>
      {/* Intro Header */}
      <div className={styles.introHeader}>
        <span className={styles.boxEyebrow}>BESPOKE TRIP PLANNING</span>
        <h2 className={styles.boxTitle}>Design Your Extraordinary Journey</h2>
        <p className={styles.boxDesc}>
          Fill in your preferred travel details below. A dedicated Sobhavi Travel Specialist will craft a bespoke itinerary suited to your exacting desires.
        </p>
      </div>

        <div className={styles.formLayout}>
          {/* Main Form Area */}
          <form onSubmit={handleSubmit} className={styles.formContent}>
            
            {/* TRIP SPECIFICATIONS */}
            <div className={styles.formSection}>
              <h3 className={styles.sectionHeader}>01 \u00B7 TRIP SPECIFICATIONS</h3>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Where would you like to go?*</label>
                <select 
                  name="destination" 
                  value={formData.destination} 
                  onChange={handleChange} 
                  required 
                  className={styles.select}
                >
                  <option value="" disabled>Select your desired destination</option>
                  {formData.destination && !COUNTRIES.includes(formData.destination) && (
                    <option value={formData.destination}>{formData.destination}</option>
                  )}
                  {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Approximate Month / Date*</label>
                  <input 
                    type="month" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleChange} 
                    required 
                    className={styles.input} 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Duration*</label>
                  <input 
                    type="text" 
                    name="duration" 
                    placeholder="e.g. 10 Nights / 11 Days" 
                    value={formData.duration} 
                    onChange={handleChange} 
                    required 
                    className={styles.input} 
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Number of Travellers*</label>
                  <input 
                    type="number" 
                    name="travelers" 
                    min="1" 
                    max="50" 
                    placeholder="2" 
                    value={formData.travelers} 
                    onChange={handleChange} 
                    required 
                    className={styles.input} 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Per Person Spending Power (INR)*</label>
                  <select 
                    name="budget" 
                    value={formData.budget} 
                    onChange={handleChange} 
                    required 
                    className={styles.select}
                  >
                    <option value="" disabled>Select spending range</option>
                    {BUDGETS_INR.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Special Interests, Occasion or Desired Experiences</label>
                <textarea 
                  name="comments" 
                  placeholder="Tell us about your celebration, preferred hotel brands, must-do activities or any bespoke requests..." 
                  value={formData.comments} 
                  onChange={handleChange} 
                  rows={4} 
                  className={styles.textarea}
                />
              </div>
            </div>

            {/* YOUR CONTACT DETAILS */}
            <div className={styles.formSection}>
              <h3 className={styles.sectionHeader}>02 \u00B7 YOUR CONTACT DETAILS</h3>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>First Name*</label>
                  <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                    required 
                    className={styles.input} 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Last Name*</label>
                  <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    required 
                    className={styles.input} 
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address*</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="you@domain.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className={styles.input} 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Telephone / WhatsApp Number*</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="+91 98765 43210" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    className={styles.input} 
                  />
                </div>
              </div>

              <div className={styles.checkboxGroup}>
                <input 
                  type="checkbox" 
                  id="newsletter" 
                  name="newsletter" 
                  checked={formData.newsletter} 
                  onChange={handleChange} 
                  className={styles.checkbox}
                />
                <label htmlFor="newsletter" className={styles.checkboxLabel}>
                  Receive private invitations, seasonal inspirations, and bespoke travel journals.
                </label>
              </div>
            </div>

            <div className={styles.submitContainer}>
              <button type="submit" className={styles.submitBtn}>
                <span>SUBMIT ENQUIRY & CONNECT VIA WHATSAPP</span>
                <span className={styles.btnArrow}>→</span>
              </button>
              <p className={styles.submitDisclaimer}>
                Your inquiry goes directly to our Senior Specialist at +91 {PHONE_NUMBER}. We respect your absolute privacy.
              </p>
            </div>
          </form>

          {/* Sidebar Info Card */}
          <aside className={styles.sidebar}>
            {/* Direct Specialist Card */}
            <div className={styles.specialistCard}>
              <span className={styles.specialistBadge}>DIRECT LINE</span>
              <h4 className={styles.specialistTitle}>Dedicated Travel Desk</h4>
              <p className={styles.specialistDesc}>
                Connect directly with our senior travel curators for instant quotes and bespoke advice.
              </p>
              <div className={styles.sidebarActions}>
                <a 
                  href={`https://wa.me/917406994752?text=${encodeURIComponent("Hello Lumina! I would like to speak to a travel specialist.")}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.sidebarWaBtn}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
                <a href={`tel:${FULL_PHONE}`} className={styles.sidebarCallBtn}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.27 22 2 13.73 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
                  </svg>
                  <span>Call {PHONE_NUMBER}</span>
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className={styles.officeHours}>
              <div className={styles.clockHeader}>
                <span className={styles.clockIcon}>⏱</span>
                <h4>CONCIERGE HOURS</h4>
              </div>
              <ul className={styles.hoursList}>
                <li><span>Monday – Friday:</span> <strong>9:00 AM – 11:00 PM IST</strong></li>
                <li><span>Saturday:</span> <strong>10:00 AM – 8:00 PM IST</strong></li>
                <li><span>Sunday:</span> <strong>VIP Emergency On-Call</strong></li>
              </ul>
              <div className={styles.directContactInfo}>
                <p>Phone: <a href={`tel:${FULL_PHONE}`}>+91 {PHONE_NUMBER}</a></p>
                <p>WhatsApp: <a href={`https://wa.me/917406994752`} target="_blank" rel="noopener noreferrer">+91 {PHONE_NUMBER}</a></p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
