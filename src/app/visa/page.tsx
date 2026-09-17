"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

interface CountryVisa {
  country: string;
  flag: string;
  visaType: string;
  processingTime: string;
  validity: string;
}

const POPULAR_VISAS: CountryVisa[] = [
  { country: "Dubai (UAE)", flag: "🇦🇪", visaType: "30 / 60 Days Tourist eVisa", processingTime: "24 – 48 Hours Express", validity: "60 Days from issue" },
  { country: "Singapore", flag: "🇸🇬", visaType: "Multiple Entry eVisa", processingTime: "3 – 4 Working Days", validity: "Up to 2 Years" },
  { country: "Schengen (Europe)", flag: "🇪🇺", visaType: "Short Stay Tourist C-Visa", processingTime: "10 – 15 Working Days", validity: "Based on travel plan" },
  { country: "United Kingdom", flag: "🇬🇧", visaType: "Standard Visitor Visa", processingTime: "3 – 4 Weeks", validity: "6 Months / 2 Years" },
  { country: "United States", flag: "🇺🇸", visaType: "B1/B2 Tourism & Business", processingTime: "Appointment Assistance", validity: "10 Years Multiple Entry" },
  { country: "Thailand", flag: "🇹🇭", visaType: "e-Visa / Visa on Arrival", processingTime: "2 – 3 Days / Instant", validity: "30 / 60 Days" },
  { country: "Indonesia (Bali)", flag: "🇮🇩", visaType: "e-VOA Tourist Visa", processingTime: "24 – 48 Hours", validity: "30 Days (Extendable)" },
  { country: "Japan", flag: "🇯🇵", visaType: "Single / Multiple Entry Tourist", processingTime: "5 – 7 Working Days", validity: "90 Days" }
];

export default function VisaPage() {
  const whatsappUrl = "https://wa.me/917406994752?text=Hello%20Sobhavi%20Holidays,%20I%20would%20like%20to%20enquire%20about%20visa%20assistance%20and%20document%20requirements.";

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* HERO SECTION WITH TOP VISA INQUIRY CARD */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.eyebrow}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect width="18" height="18" x="3" y="3" rx="2"/>
                    <circle cx="12" cy="10" r="3"/>
                    <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>
                  </svg>
                  VISA DESK & DOCUMENTATION
                </span>
                <h1 className={styles.heroTitle}>Hassle-Free Global Visas.</h1>
                <p className={styles.heroDesc}>
                  From express 48-hour eVisas for Dubai & Singapore to comprehensive document curation and biometric appointment filing for Schengen, UK, and USA — our visa officers ensure 99.4% approval success.
                </p>

                <div className={styles.stepsPills}>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNum}>1</span>
                    <span>Document verification & error-free application drafting</span>
                  </div>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNum}>2</span>
                    <span>Early VFS / Embassy biometric appointment scheduling</span>
                  </div>
                  <div className={styles.stepItem}>
                    <span className={styles.stepNum}>3</span>
                    <span>Flight itinerary, hotel vouchers & travel insurance issuance</span>
                  </div>
                </div>
              </div>

              {/* VISA ENQUIRY CARD */}
              <div className={styles.visaCard}>
                <div className={styles.visaCardHeader}>
                  <span className={styles.cardBadge}>FAST-TRACK VISA DESK</span>
                  <h2 className={styles.visaCardTitle}>Apply for Travel Visa</h2>
                  <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.92rem', lineHeight: '1.6', marginTop: '0.6rem' }}>
                    Get step-by-step document guidance, mock interview prep, and appointment booking for Schengen, UK, USA, Dubai, Singapore, and 50+ countries.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginTop: '1.75rem' }}>
                  <Link 
                    href="/enquire?service=Visa+Services"
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
                    ✦ Enquire Now for Visa Assistance &rarr;
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
                    💬 WhatsApp Visa Officer (+91 74069 94752)
                  </a>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)' }}>
                    <span>🛡️</span> <span><strong>99.4% Success Rate:</strong> Pre-submission dossier scrutiny</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)' }}>
                    <span>📅</span> <span><strong>Priority VFS Appointments:</strong> Fast biometric slots</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)' }}>
                    <span>⚡</span> <span><strong>Free Document Checklist:</strong> Sent instantly on WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POPULAR VISA DESTINATIONS GRID */}
        <section className={styles.countriesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>GLOBAL PASSPORT SUPPORT</span>
              <h2 className={styles.sectionTitle}>Countries We Process Visas For</h2>
              <p className={styles.sectionDesc}>
                Whether you need a quick eVisa for your weekend trip to Dubai or complex documentation for a European summer holiday, our dedicated visa desk handles every detail.
              </p>
            </div>

            <div className={styles.countriesGrid}>
              {POPULAR_VISAS.map((item) => (
                <div key={item.country} className={styles.countryCard}>
                  <div>
                    <div className={styles.countryFlag}>{item.flag}</div>
                    <h3 className={styles.countryName}>{item.country}</h3>
                    <div className={styles.visaType}>{item.visaType}</div>
                    <div className={styles.processTime}>⏱ {item.processingTime} • {item.validity}</div>
                  </div>
                  <a 
                    href={`https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels,%20I%20need%20visa%20assistance%20for%20${encodeURIComponent(item.country)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.applyLink}
                  >
                    Apply Now on WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IN-DEPTH SEO EDITORIAL GUIDE (HIGH RANKING CONTENT) */}
        <section className={styles.articleSection}>
          <div className={`container ${styles.articleContainer}`}>
            <div className={styles.articleHeader}>
              <span className={styles.sectionEyebrow}>IMMIGRATION & VISA DOSSIER</span>
              <h2 className={styles.articleTitle}>
                The Complete International Visa & Documentation Guide for Indian Travelers
              </h2>
              <p className={styles.articleLead}>
                Navigating foreign consular requirements, biometric schedules, and financial proofs can feel daunting. At Sobhavi Travels, our dedicated Visa Desk ensures precision documentation and a 99.4% first-time approval rate.
              </p>
            </div>

            <div className={styles.articleBody}>
              <div className={styles.sectionBlock}>
                <h3>1. Essential Document Checklist: What Embassies Really Look For</h3>
                <p>
                  Every embassy scrutinizes three fundamental aspects of an applicant: ties to their home country, adequate financial liquidity, and a credible travel purpose. Incomplete paperwork or contradictory itineraries are the primary triggers for consular rejections.
                </p>
                
                <div className={styles.checklistGrid}>
                  <div className={styles.checklistItem}>
                    <span>01.</span>
                    <div><strong>Financial Proofs:</strong> Last 6 months bank statements attested with bank stamp, plus last 3 years ITR acknowledgement forms.</div>
                  </div>
                  <div className={styles.checklistItem}>
                    <span>02.</span>
                    <div><strong>Confirmed Flight & Hotel Vouchers:</strong> Verifiable airline reservation PNRs and official accommodation vouchers matching day-by-day dates.</div>
                  </div>
                  <div className={styles.checklistItem}>
                    <span>03.</span>
                    <div><strong>Employment / Business Credentials:</strong> Leave sanction letter on company letterhead or GST registration & partnership deed.</div>
                  </div>
                  <div className={styles.checklistItem}>
                    <span>04.</span>
                    <div><strong>Cover Letter & Travel Insurance:</strong> Comprehensive personal cover letter detailing daily movements and minimum €30,000 / $50,000 overseas travel policy.</div>
                  </div>
                </div>
              </div>

              <div className={styles.sectionBlock}>
                <h3>2. eVisa vs. Sticker Visa vs. Visa on Arrival: Understanding Timelines</h3>
                <p>
                  <strong>Express eVisas (24 – 72 Hours):</strong> Destinations like Dubai (UAE), Singapore, and Indonesia (e-VOA) allow digital passport uploads with swift digital visa grants. Perfect for spontaneous holidays and quick business visits.
                </p>
                <p>
                  <strong>Sticker & Biometric Visas (2 – 4 Weeks):</strong> Schengen member states (France, Switzerland, Germany, Italy), the United Kingdom, and the United States require physical biometric capture (fingerprints and digital photo) at VFS or embassy centres. Securing early appointment slots is crucial, especially during peak summer travel periods.
                </p>
              </div>

              <div className={styles.sectionBlock}>
                <h3>3. Overcoming Previous Visa Rejections & Complex Profiles</h3>
                <p>
                  A prior rejection under Schengen Clause 2 (justification for the purpose and conditions of the intended stay was not provided) does not mean you cannot travel. Our documentation specialists analyze previous refusal notes, reconstruct your financial dossier, draft high-clarity explanatory cover letters, and liaise with partner consulates to overturn unfavorable outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>COMMON VISA INQUIRIES</span>
              <h2 className={styles.sectionTitle} style={{ color: '#ffffff' }}>Frequently Asked Questions</h2>
            </div>

            <div className={styles.faqGrid}>
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>How far in advance should I apply for a Schengen or UK tourist visa?</h3>
                <p className={styles.faqAnswer}>You can submit your application up to 6 months before your scheduled travel date. We recommend applying at least 45 to 60 days in advance to comfortably secure biometric appointments.</p>
              </div>
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>Do I need to buy non-refundable flight tickets before my visa is granted?</h3>
                <p className={styles.faqAnswer}>No. We provide verifiable dummy flight reservations and temporary hotel vouchers accepted by embassies so your capital is never at risk before visa issuance.</p>
              </div>
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>What is the minimum bank balance required for Europe or Dubai?</h3>
                <p className={styles.faqAnswer}>For Dubai, simple liquidity is sufficient. For Schengen countries, consulates generally look for maintaining approximately €100 per person per day of stay, consistently maintained without sudden irregular large deposits.</p>
              </div>
              <div className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>Can Sobhavi Travels assist with US B1/B2 tourist appointments?</h3>
                <p className={styles.faqAnswer}>Yes. Our specialized US Visa desk completes DS-160 applications, advises on interview documentation, and tracks expedited appointment opening slots.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM PROMINENT ENQUIRY CALLOUT BANNER */}
        <section className={styles.enquiryBannerSection}>
          <div className="container">
            <div className={styles.enquiryBannerCard}>
              <span className={styles.bannerBadge}>99.4% VISA SUCCESS RATE</span>
              <h2 className={styles.bannerTitle}>Ready to Apply for Your Visa?</h2>
              <p className={styles.bannerDesc}>
                Avoid documentation errors, endless queue searches, and unexpected rejections. Let our certified visa documentation officers handle your global visa filing from start to finish.
              </p>

              <div className={styles.bannerButtons}>
                <Link href="/enquire?service=Visa%20Services" className={styles.bannerEnquireBtn}>
                  <span>Enquire Now for Visa Assistance</span>
                  <span>&rarr;</span>
                </Link>
                <a
                  href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels,%20I%20need%20urgent%20visa%20assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bannerWhatsAppBtn}
                >
                  <span>Chat With Visa Officer (+917406994752)</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
