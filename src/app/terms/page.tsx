import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Terms of Service | SOBHAVI TRAVELS",
  description: "Terms and conditions governing domestic and international travel packages, bookings, payments, and cancellations with SOBHAVI TRAVELS.",
};

export default function TermsOfServicePage() {
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                CLIENT AGREEMENT
              </span>
              <h1 className={styles.heroTitle}>Terms of Service</h1>
              <p className={styles.heroDesc}>
                Please review the terms and conditions governing holiday itineraries, flight reservations, and concierge bookings with SOBHAVI TRAVELS.
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
                These Terms of Service ("Agreement") constitute a binding contract between <strong>SOBHAVI TRAVELS</strong> ("we", "us", or "our") and the client or traveler ("you", "guest", or "passenger"). By requesting a custom quotation, confirming a booking, or completing a payment, you agree to comply with and be bound by these terms.
              </div>

              {/* 01. Booking Confirmation & Deposits */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>01.</span>
                  Booking Confirmation & Advance Deposits
                </h2>
                <p className={styles.text}>
                  All customized package itineraries and quotations provided by SOBHAVI TRAVELS are subject to real-time hotel room availability, airline seat inventory, and seasonal tariff revisions until an advance commitment deposit is received.
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>Domestic Holidays:</strong> A minimum advance deposit of 30% to 50% is required at the time of booking confirmation, with the balance cleared prior to voucher issuance or check-in.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>International Holidays:</strong> 50% advance deposit upon itinerary confirmation, with full final balance settled at least 15 days prior to international departure.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>Peak Season Travel (Diwali, Christmas & New Year):</strong> 100% non-refundable advance payment may be required by partner luxury resorts and charter airlines.</div>
                  </li>
                </ul>
              </div>

              {/* 02. Pricing, Taxes & TCS Compliance */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>02.</span>
                  Pricing, Taxes & Foreign Remittance
                </h2>
                <p className={styles.text}>
                  All prices are quoted in Indian Rupees (INR) unless explicitly specified otherwise. Package inclusions and exclusions are itemized in your confirmed written travel itinerary:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>Goods and Services Tax (GST):</strong> Statutory Indian GST is charged in accordance with prevailing government notifications on tour operator services.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>Tax Collected at Source (TCS):</strong> As mandated under Section 206C(1G) of the Indian Income Tax Act, TCS applies on overseas tour packages under the Liberalised Remittance Scheme (LRS). Valid PAN documentation must be furnished.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>Currency Fluctuations:</strong> For international packages priced against foreign currencies (USD, AED, EUR, SGD), fluctuations exceeding 2% prior to final payment settlement may be adjusted on final invoices.</div>
                  </li>
                </ul>
              </div>

              {/* 03. Cancellations & Refund Policy */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>03.</span>
                  Cancellations & Refund Policy
                </h2>
                <p className={styles.text}>
                  If you need to cancel or modify your confirmed journey, written notice must be communicated to your dedicated travel specialist. Cancellation charges are computed based on the date written notice is received:
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>30+ Days Prior to Departure:</strong> Retention of standard administrative & non-refundable supplier booking fees.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>15 to 29 Days Prior to Departure:</strong> 50% of the total tour package cost is non-refundable.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>Less than 15 Days / No-Show:</strong> 100% of the package cost is non-refundable due to strict hotel, ferry, and flight lock-in contracts.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div><strong>Flight & Visa Fees:</strong> Airline tickets are subject to individual carrier cancellation rules. Visa application fees paid to embassies and consulates are strictly non-refundable regardless of outcome.</div>
                  </li>
                </ul>
              </div>

              {/* 04. Passports, Visas & Health Regulations */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>04.</span>
                  Passports, Visas & Immigration
                </h2>
                <p className={styles.text}>
                  It is the sole responsibility of the traveler to ensure possession of a valid passport with a minimum of 6 months validity from the scheduled return date, along with necessary blank pages.
                </p>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div>While SOBHAVI TRAVELS provides end-to-end guidance and documentation verification, the grant or refusal of any tourist visa is the sole sovereign prerogative of the respective foreign embassy or consulate.</div>
                  </li>
                  <li className={styles.bulletItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <div>We bear no liability for financial losses, missed flights, or non-refundable hotel stays resulting from visa delays or border immigration denials.</div>
                  </li>
                </ul>
              </div>

              {/* 05. Itinerary Amendments & Force Majeure */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>05.</span>
                  Itinerary Modifications & Force Majeure
                </h2>
                <p className={styles.text}>
                  In unforeseen circumstances such as severe weather, natural calamities, landslide road blockages (e.g. mountain passes in Shimla/Manali or Kedarnath), flight cancellations, technical airline groundings, or government security advisories, SOBHAVI TRAVELS reserves the right to re-route or alter itinerary sequences to guarantee guest safety. Extra costs incurred due to prolonged force majeure delays are borne by the traveler.
                </p>
              </div>

              {/* 06. Travel Insurance */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>06.</span>
                  Comprehensive Travel Insurance
                </h2>
                <p className={styles.text}>
                  We strongly advise all domestic and international travelers to purchase comprehensive travel and medical insurance covering emergency hospitalization, trip cancellations, lost baggage, and personal liability before embarking on their journey.
                </p>
              </div>

              {/* 07. Jurisdiction */}
              <div className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>07.</span>
                  Governing Law & Jurisdiction
                </h2>
                <p className={styles.text}>
                  This agreement shall be governed by and interpreted in accordance with the laws of the Republic of India. Any disputes arising out of or in connection with travel services arranged by SOBHAVI TRAVELS shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka.
                </p>
              </div>

              {/* Contact Card */}
              <div className={styles.contactCard}>
                <h3 className={styles.contactCardTitle}>Official Travel Concierge</h3>
                <p className={styles.contactCardDesc}>
                  For assistance, billing inquiries, or itinerary adjustments, connect directly with our travel advisory desk:
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
