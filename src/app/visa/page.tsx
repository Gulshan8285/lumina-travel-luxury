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
  const [formData, setFormData] = useState({
    country: "Dubai (UAE)",
    visaType: "Tourist Visa",
    travelDate: "",
    applicants: "1 Applicant",
    name: "",
    phone: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please enter your name and mobile / WhatsApp number.");
      return;
    }

    if (!formData.email.trim()) {
      alert("Please enter your email ID. Email is mandatory.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      alert("Please enter a valid email address.");
      return;
    }

    const message = `*Visa Assistance Enquiry - SOBHAVI TRAVELS*%0A%0A` +
      `*Country:* ${formData.country}%0A` +
      `*Visa Type:* ${formData.visaType}%0A` +
      `*Tentative Travel Date:* ${formData.travelDate || 'Flexible'}%0A` +
      `*Applicants:* ${formData.applicants}%0A%0A` +
      `*Client Details:*%0A` +
      `*Name:* ${formData.name.trim()}%0A` +
      `*Phone:* ${formData.phone.trim()}%0A` +
      `*Email:* ${formData.email.trim()}%0A%0A` +
      `Please provide required documents checklist, visa fees & appointment schedule.`;

    const payload = {
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      whatsapp: formData.phone.trim(),
      email: formData.email.trim(),
      service: `Visa Desk - ${formData.visaType}`,
      destination: formData.country,
      travelDates: formData.travelDate || 'Flexible',
      travellers: formData.applicants,
      notes: `Visa Type: ${formData.visaType} for ${formData.country}`
    };

    setIsSubmitting(true);
    try {
      await Promise.allSettled([
        fetch('/api/enquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }),
        fetch('https://script.google.com/macros/s/AKfycbyIZRjBnqLVIGgasimAHKwdfS7z8CHUbqgP0Onn-HCOcLDbLiMDunpoPDH9ivDv8TSt/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(payload)
        })
      ]);
    } catch (err) {
      console.error('Visa enquiry sync error:', err);
    } finally {
      setIsSubmitting(false);
    }

    window.open(`https://wa.me/917406994752?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* HERO SECTION WITH TOP VISA APPLICATION FORM */}
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

              {/* VISA INQUIRY FORM */}
              <div className={styles.visaCard}>
                <div className={styles.visaCardHeader}>
                  <span className={styles.cardBadge}>FAST-TRACK VISA DESK</span>
                  <h2 className={styles.visaCardTitle}>Apply for Travel Visa</h2>
                </div>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🛂</div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Visa Enquiry Received!</h3>
                    <p style={{ fontSize: '0.88rem', color: '#64748b' }}>
                      Our senior visa consultant will send you the document checklist and fee details on WhatsApp.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="btn-outline-dark"
                      style={{ marginTop: '1rem', padding: '0.6rem 1.4rem', fontSize: '0.75rem' }}
                    >
                      Apply for Another Country
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.visaForm}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Target Country</label>
                      <select 
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className={styles.formSelect}
                      >
                        {POPULAR_VISAS.map((v) => (
                          <option key={v.country} value={v.country}>{v.flag} {v.country}</option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Visa Type</label>
                        <select 
                          value={formData.visaType}
                          onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                          className={styles.formSelect}
                        >
                          <option value="Tourist Visa">Tourist Visa</option>
                          <option value="Business Visa">Business Visa</option>
                          <option value="Express / Urgent Visa">Express / Urgent Visa</option>
                          <option value="Transit Visa">Transit Visa</option>
                        </select>
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Travel Date</label>
                        <input 
                          type="date"
                          value={formData.travelDate}
                          onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                          className={styles.formInput}
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Applicants</label>
                        <select 
                          value={formData.applicants}
                          onChange={(e) => setFormData({ ...formData, applicants: e.target.value })}
                          className={styles.formSelect}
                        >
                          <option value="1 Applicant">1 Applicant</option>
                          <option value="2 Applicants">2 Applicants</option>
                          <option value="Family (3-4 Applicants)">Family (3-4 Applicants)</option>
                          <option value="Group (5+ Applicants)">Group (5+ Applicants)</option>
                        </select>
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Your Name</label>
                        <input 
                          type="text"
                          placeholder="e.g. Ananya Roy"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={styles.formInput}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>WhatsApp / Phone*</label>
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
                      <label className={styles.formLabel}>Email ID*</label>
                      <input 
                        type="email"
                        placeholder="e.g. ananya.roy@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={styles.formInput}
                        required
                      />
                    </div>

                    <button 
                      type="submit" 
                      className={styles.submitBtn}
                      disabled={isSubmitting}
                      style={{ opacity: isSubmitting ? 0.75 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                    >
                      <span>{isSubmitting ? "Submitting..." : "Get Document Checklist & Visa Quote"}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>

                    <div className={styles.supportStrip}>
                      <span>Direct Visa Desk:</span>
                      <a href="tel:+917406994752" style={{ color: '#0a0a0a', fontWeight: 700 }}>+917406994752</a>
                    </div>
                  </form>
                )}
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
