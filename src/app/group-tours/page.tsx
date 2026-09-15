import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

export const metadata = {
  title: "Group Tours, Corporate Offsites & MICE Travel | Sobhavi Travels",
  description: "Seamless group travel management for corporate retreats, large family reunions, and college friend expeditions. Blocked airline fares, dedicated tour managers, and customized banquets.",
  keywords: "group tours, corporate offsites, mice travel, family group holidays, corporate retreat planning, sobhavi travels"
};

const GROUP_CATEGORIES = [
  {
    title: "Corporate Offsites & MICE",
    desc: "Energize your executive teams with inspiring retreat destinations, fully equipped AV conference halls, team-building activities, and beachside gala dinners.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    features: ["Conference Hall & AV Setup Included", "Corporate Team-Building Exercises", "Gala Dinner with Live Bar & DJ", "GST Compliant Invoicing"],
    enquiryService: "Corporate Travel"
  },
  {
    title: "Multi-Generational Family Tours",
    desc: "Traveling with grandparents, kids, and extended family? We coordinate comfortable pacing, child-friendly stays, senior mobility support, and pure veg/Jain meal options.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
    features: ["Wheelchair & Senior Mobility Care", "Dedicated Pure Veg / Jain Meal Logistics", "Private AC Volvo / Tempo Traveller", "Interconnected Luxury Rooms"],
    enquiryService: "Group Tour"
  },
  {
    title: "Friends & Reunion Expeditions",
    desc: "From thrilling rafting adventures in Rishikesh and Himachal mountain road trips to private beach villas in Goa and party yacht charters in Dubai.",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1200&auto=format&fit=crop",
    features: ["Private Villa with Pool Buyout", "Adventure Passes & Water Sports", "Nightlife VIP Passes & Yacht Charter", "Flexible Splitting & Individual Billing"],
    enquiryService: "Group Tour"
  },
  {
    title: "Sacred Heritage & Yatras",
    desc: "Organized spiritual voyages for senior citizen groups, community clubs, and pilgrimage societies across Chardham, Varanasi, Ayodhya, and South Indian temples.",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop",
    features: ["VIP Priority Darshan Protocols", "Escorted Tour Manager Throughout", "Hygienic Sattvic Meals Guaranteed", "Helicopter Charter Arrangements"],
    enquiryService: "Group Tour"
  }
];

const GROUP_PERKS = [
  {
    icon: "✈️",
    title: "Group Flight Blocks",
    desc: "Special group airline tariffs with flexible passenger name changes up to 72 hours before flight departure."
  },
  {
    icon: "🚌",
    title: "Dedicated Luxury Fleet",
    desc: "Spotless private AC Tempo Travellers, Mercedes Sprinters, and luxury Volvo coaches with professional drivers."
  },
  {
    icon: "👨‍💼",
    title: "On-Ground Tour Director",
    desc: "An experienced tour coordinator travels with your group to manage hotel check-ins, meals, and daily schedules."
  },
  {
    icon: "🧾",
    title: "Transparent GST Billing",
    desc: "100% compliant corporate tax invoices, corporate travel credit options, and detailed expense breakdowns."
  }
];

const FAQS = [
  {
    q: "What is the minimum group size for a customized group tour?",
    a: "We cater to groups starting from 6 guests (such as two families or a group of close friends) up to large corporate delegations of 250+ delegates with complete charter flights and hotel buyouts."
  },
  {
    q: "Can you manage flexible name submissions for corporate flight bookings?",
    a: "Yes. With our corporate airline block allocations, companies can lock in flight seats and fixed fares in advance while submitting final traveler employee lists closer to the departure date."
  },
  {
    q: "How do you handle dietary preferences like Jain or Pure Vegetarian food for large groups?",
    a: "We work directly with hotel executive chefs and specialized caterers at every destination to ensure strict dietary segregation, authentic regional preparations, and personalized buffet layouts."
  },
  {
    q: "Do we get an on-ground tour manager to coordinate during our trip?",
    a: "Yes. For groups of 12 or more travelers, Sobhavi Travels provides a dedicated on-ground Tour Director who oversees airport transfers, luggage handling, room key distribution, and activity timings."
  }
];

export default function GroupToursPage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>
                ✦ FLAWLESS GROUP LOGISTICS & CORPORATE OFF-SITES
              </span>
              <h1 className={styles.title}>Travel Together, Hassle-Free.</h1>
              <p className={styles.subtitle}>
                Planning travel for 10, 50, or 200 people doesn&apos;t have to be overwhelming. From corporate conferences in Dubai and Goa to multi-generational family yatras, our group specialists handle every flight block, banquet, and transfer with precision.
              </p>

              <div className={styles.heroActions}>
                <Link href="/enquire?service=Group%20Tour" className={styles.primaryBtn}>
                  <span>Get Group Tour Quote</span>
                  <span>&rarr;</span>
                </Link>
                <a
                  href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels,%20I%20would%20like%20to%20plan%20a%20group%20tour%20/%20corporate%20offsite."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryBtn}
                >
                  <span>💬 WhatsApp Group Desk</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* GROUP CATEGORIES */}
        <section className={styles.categoriesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>TAILORED PACKAGES</span>
              <h2 className={styles.sectionTitle}>Group Journeys Tailored to Your People</h2>
              <p className={styles.sectionSubtitle}>
                Whether you&apos;re strengthening corporate synergy or celebrating a family reunion, every itinerary is custom-crafted.
              </p>
            </div>

            <div className={styles.categoriesGrid}>
              {GROUP_CATEGORIES.map((cat, idx) => (
                <div key={idx} className={styles.categoryCard}>
                  <div
                    className={styles.categoryImage}
                    style={{ backgroundImage: `url(${cat.image})` }}
                  />

                  <div className={styles.categoryContent}>
                    <div>
                      <h3 className={styles.categoryTitle}>{cat.title}</h3>
                      <p className={styles.categoryDesc}>{cat.desc}</p>

                      <ul className={styles.categoryList}>
                        {cat.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.categoryAction}>
                      <Link
                        href={`/enquire?service=${encodeURIComponent(cat.enquiryService)}&destination=${encodeURIComponent(cat.title)}`}
                        className={styles.categoryBtn}
                      >
                        Plan This Group Trip &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GROUP PERKS */}
        <section className={styles.perksSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>THE CORPORATE & GROUP EDGE</span>
              <h2 className={styles.sectionTitle}>Why Groups Choose Sobhavi Travels</h2>
              <p className={styles.sectionSubtitle}>
                We combine volume buying power with high-touch personal concierge management.
              </p>
            </div>

            <div className={styles.perksGrid}>
              {GROUP_PERKS.map((perk, idx) => (
                <div key={idx} className={styles.perkCard}>
                  <span className={styles.perkIcon}>{perk.icon}</span>
                  <h3 className={styles.perkTitle}>{perk.title}</h3>
                  <p className={styles.perkDesc}>{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IN-DEPTH SEO EDITORIAL GUIDE (HIGH RANKING CONTENT) */}
        <section className={styles.articleSection}>
          <div className={`container ${styles.articleContainer}`}>
            <div className={styles.articleHeader}>
              <span className={styles.eyebrow}>EDITORIAL GUIDE & GROUP STRATEGY</span>
              <h2 className={styles.articleTitle}>
                Comprehensive Guide to Planning Stress-Free Group Tours & Corporate Offsites
              </h2>
              <p className={styles.articleLead}>
                Organizing travel for multiple individuals is complex. Coordinating varying arrival schedules, dietary requirements, room allocations, and shared transportation requires an airtight operational framework.
              </p>
            </div>

            <div className={styles.articleBody}>
              <div className={styles.sectionBlock}>
                <h3>1. The Group Airline Advantage: How Group PNRs Protect Your Budget</h3>
                <p>
                  When companies attempt to book 30 or 50 flight tickets online individually, flight portals automatically increase ticket prices after the first 4 seats are booked due to dynamic yield algorithms. By the 20th ticket, the cost per person can skyrocket by 40%.
                </p>
                <p>
                  With Sobhavi Travels&apos;s direct airline group desk, we secure fixed contracted group fares for all travelers simultaneously with nominal advance deposits. Furthermore, companies gain flexibility in submitting final passenger names up to 72 hours before flight departure, mitigating the risk of last-minute personnel changes.
                </p>
              </div>

              <div className={styles.sectionBlock}>
                <h3>2. Seamless Hotel Check-Ins with Pre-Key Allocation</h3>
                <p>
                  Nothing diminishes group enthusiasm faster than waiting 90 minutes in a crowded hotel lobby while reception photocopies dozens of passports.
                </p>
                <p>
                  Our dedicated Tour Managers coordinate pre-registration with the hotel management 24 hours in advance. Room keys and welcome kits are pre-sorted in advance, allowing your group to proceed directly to their rooms upon arrival with zero queue fatigue.
                </p>
              </div>

              <div className={styles.sectionBlock}>
                <h3>3. Custom Food & Beverage Management: Honoring Every Preference</h3>
                <p>
                  In group travel, meals are often the highlight — or the biggest source of friction. Whether your group includes strict Jain vegetarian diners, vegan preferences, or continental banquet lovers, we establish direct lines with the resort culinary staff.
                </p>
                <p>
                  We draft exclusive daily menus featuring live counters, private barbecue pavilions, and curated regional dining experiences that cater effortlessly to every generation.
                </p>
              </div>

              <div className={styles.sectionBlock}>
                <h3>4. Transparent Corporate Billing & Tax Compliance (GST)</h3>
                <p>
                  For corporate finance departments, reconciliation is paramount. We provide transparent, itemized invoicing compliant with Input Tax Credit (ITC) under GST norms, eliminating confusing multiple bills from fragmented vendors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>GROUP ORGANIZER FAQS</span>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            </div>

            <div className={styles.faqGrid}>
              {FAQS.map((faq, idx) => (
                <div key={idx} className={styles.faqCard}>
                  <h3 className={styles.faqQuestion}>{faq.q}</h3>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM PROMINENT ENQUIRY CALLOUT BANNER */}
        <section className={styles.enquiryBannerSection}>
          <div className="container">
            <div className={styles.enquiryBannerCard}>
              <span className={styles.bannerBadge}>DEDICATED GROUP TOUR DESK</span>
              <h2 className={styles.bannerTitle}>Planning a Group Tour or Company Offsite?</h2>
              <p className={styles.bannerDesc}>
                Connect directly with our group tour directors. We provide customized itinerary options, venue comparisons, and volume discount proposals within 24 hours.
              </p>

              <div className={styles.bannerButtons}>
                <Link href="/enquire?service=Group%20Tour" className={styles.bannerEnquireBtn}>
                  <span>Enquire Now for Group Tour</span>
                  <span>&rarr;</span>
                </Link>
                <a
                  href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels,%20I%20need%20a%20quote%20for%20a%20group%20tour."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bannerWhatsAppBtn}
                >
                  <span>WhatsApp Group Director (+917406994752)</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
