import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Privacy Policy | SOBHAVI TRAVELS",
  description: "Learn how SOBHAVI TRAVELS collects, uses, and protects your personal data for flight, hotel, and holiday package bookings.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                TRANSPARENCY & TRUST
              </span>
              <h1 className={styles.heroTitle}>Privacy Policy</h1>
              <p className={styles.heroDesc}>
                At SOBHAVI TRAVELS, we are committed to safeguarding your personal information and handling your travel plans with the utmost confidentiality.
              </p>
              <span className={styles.lastUpdated}>Last Updated: September 2026</span>
            </div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className={styles.contentSection}>
          <div className="container">
            <div className={styles.contentContainer}>
              <div className={styles.introBox}>
                This Privacy Policy explains how <strong>SOBHAVI TRAVELS</strong> ("we", "us", or "our") collects, uses, protects, and discloses your personal data when you visit our website, submit holiday enquiries, or book domestic and international travel services with us.
              </div>

              {/* 01. Information We Collect */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>01.</span>
                  Information We Collect
                </h2>
                <p className={styles.text}>
                  To arrange seamless flights, hotel stays, visa submissions, and curated travel experiences, we may collect the following information from you:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>Personal Identifiers:</strong> Name, email address, phone number, and residential address.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>Travel Documentation:</strong> Passport details (number, expiry, nationality), date of birth, and visa history when booking international holidays or processing visa approvals.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>Trip Preferences:</strong> Desired destinations, dates of travel, passenger count, dietary requirements, room preferences, and special assistance requests.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>Payment & Transaction Information:</strong> Bank transfer confirmations, billing addresses, and payment gateway receipts (we do not store raw card numbers on our servers).</div>
                  </li>
                </ul>
              </div>

              {/* 02. How We Use Your Information */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>02.</span>
                  How We Use Your Information
                </h2>
                <p className={styles.text}>
                  The personal information we collect is utilized strictly for executing and managing your travel itineraries:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div>Fulfilling reservations with verified airlines, boutique resorts, 5-star hotel chains, and local ground transport operators.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div>Submitting and processing official visa applications with embassies, consulates, and authorized VFS centres.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div>Communicating flight schedule changes, itinerary updates, and urgent concierge assistance via WhatsApp or phone.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div>Complying with statutory reporting requirements, Indian tax laws (GST, TCS on outbound remittances), and civil aviation mandates.</div>
                  </li>
                </ul>
              </div>

              {/* 03. Information Sharing & Third Parties */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>03.</span>
                  Sharing of Personal Data
                </h2>
                <p className={styles.text}>
                  We do not sell, rent, or trade your personal information to any third-party marketers. Your data is disclosed exclusively to authorized service providers directly involved in fulfilling your journey:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>Airlines & Consolidators:</strong> To issue domestic and international PNR tickets in accordance with IATA guidelines.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>Hotels & Resorts:</strong> To confirm check-in vouchers, meal plans, and special requests.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>Government & Consular Authorities:</strong> For immigration clearance, foreign visa stamping, and travel insurance policies.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>Local Chauffeurs & Guides:</strong> For airport meet-and-greets and private sightseeing transfers.</div>
                  </li>
                </ul>
              </div>

              {/* 04. Data Protection & Security */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>04.</span>
                  Data Protection & Security
                </h2>
                <p className={styles.text}>
                  We implement robust industry-standard administrative, physical, and technical measures to prevent unauthorized access, accidental alteration, or disclosure of your travel documentation and identity records. All electronic communications and submissions are conducted over secure 256-bit SSL encrypted channels.
                </p>
              </div>

              {/* 05. Cookies & Tracking */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>05.</span>
                  Cookies & Website Analytics
                </h2>
                <p className={styles.text}>
                  Our website uses lightweight session cookies to ensure responsive navigation, remember your destination selections in enquiry forms, and analyze anonymous traffic performance. You may disable cookies in your browser settings at any time without restricting your ability to submit enquiries or view our travel itineraries.
                </p>
              </div>

              {/* 06. Your Privacy Rights */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>06.</span>
                  Your Rights & Choices
                </h2>
                <p className={styles.text}>
                  You have the right to request a copy of the personal information we hold regarding your bookings, request corrections to inaccurate records, or ask us to delete your records following the safe completion of your journey, subject to applicable legal, tax, and aviation retention mandates.
                </p>
              </div>

              {/* Contact Card */}
              <div className={styles.contactCard}>
                <h3 className={styles.contactCardTitle}>Questions Regarding Your Privacy?</h3>
                <p className={styles.contactCardDesc}>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, our concierge team is readily available to assist you.
                </p>
                <div className={styles.contactDetails}>
                  <div className={styles.contactRow}>
                    <span>📧 Email:</span>
                    <a href="mailto:hello@sobhavitravel.com" className={styles.contactLink}>hello@sobhavitravel.com</a>
                  </div>
                  <div className={styles.contactRow}>
                    <span>📞 Phone:</span>
                    <a href="tel:+917406994752" className={styles.contactLink}>+91 7406994752</a>
                  </div>
                  <div className={styles.contactRow}>
                    <span>📍 Address:</span>
                    <span>Ground Floor, No. 19, 2nd Cross, NR Layout, Kalyanagar, Babusapalya, Bengaluru 560043</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
