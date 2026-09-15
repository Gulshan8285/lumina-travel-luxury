import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

export const metadata = {
  title: "Luxury Honeymoon Packages & Private Couple Escapes | Sobhavi Travels",
  description: "Bespoke international & domestic luxury honeymoons. Private overwater villas, candlelit beach dinners, scenic seaplane transfers, and 24/7 dedicated travel concierge.",
  keywords: "honeymoon packages, luxury honeymoon maldives, bali honeymoon package, switzerland couple tour, romantic escapes, sobhavi travels"
};

const ROMANTIC_DESTINATIONS = [
  {
    name: "Maldives",
    vibe: "Overwater Lagoon Villas & Turquoise Solitude",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
    desc: "Wake up to endless turquoise waters, private infinity plunge pools, romantic floating breakfasts, and intimate dolphin sunset cruises.",
    highlights: ["Overwater Pool Villa Guarantee", "Floating Champagne Breakfast", "Sunset Catamaran Cruise", "Private Sandbank Candlelit Dinner"],
    enquiryDestination: "Maldives Honeymoon"
  },
  {
    name: "Bali & Nusa Penida",
    vibe: "Jungle Infinity Pools & Clifftop Sunsets",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
    desc: "Experience Ubud's lush tropical ravines, private pool villas in Seminyak, couples Balinese herbal spa therapies, and dramatic clifftop views in Uluwatu.",
    highlights: ["Private Clifftop Pool Villa", "Couples 90-Min Herbal Spa", "Romantic Jungle Swing Experience", "Private Chauffeur Throughout"],
    enquiryDestination: "Bali Honeymoon"
  },
  {
    name: "Switzerland & Alps",
    vibe: "Snowy Mountain Peaks, Scenic Trains & Chalets",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop",
    desc: "Glacier vistas in Zermatt, scenic journeys on the Glacier Express, first-class rail passes, and warm fondue evenings beside alpine fireplaces.",
    highlights: ["1st Class Swiss Travel Pass", "Matterhorn View Luxury Chalet", "Lake Lucerne Private Boat Ride", "Top of Europe Jungfrau Excursion"],
    enquiryDestination: "Switzerland Honeymoon"
  },
  {
    name: "Santorini & Greece",
    vibe: "Whitewashed Caldera Suites & Aegean Sunsets",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
    desc: "Cliffside cave suites in Oia with private outdoor jacuzzis overlooking the sunken volcano, wine-tasting estates, and sailing across the Aegean Sea.",
    highlights: ["Oia Caldera View Cave Suite", "Private Outdoor Heated Jacuzzi", "Sunset Catamaran Sailing with BBQ", "Santorini Volcanic Wine Tour"],
    enquiryDestination: "Greece Santorini Honeymoon"
  },
  {
    name: "Dubai & Desert Oasis",
    vibe: "Skyline Glamour & Arabian Desert Romance",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    desc: "Iconic Palm Jumeirah 5-star suites, private desert dune dinners under the Arabian starlight, sunset yacht charters, and luxury shopping.",
    highlights: ["Palm Jumeirah Luxury Suite", "Private Starlit Desert Bedouin Dinner", "Luxury Private Marina Yacht Charter", "Fast-Track Burj Khalifa Access"],
    enquiryDestination: "Dubai Honeymoon"
  },
  {
    name: "Kashmir (Pahalgam & Gulmarg)",
    vibe: "Meadows of Gold, Dal Lake Shikaras & Snow Chalets",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop",
    desc: "The paradise on earth. Stay in luxury heritage cedar houseboats, ride gondolas over snow-carpeted pine forests, and sip hot Kahwa together.",
    highlights: ["Luxury Dal Lake Royal Houseboat", "Gulmarg Phase 2 Gondola Tickets", "Private Candlelit Pine Forest Dinner", "Sanitized 4x4 Luxury Chauffeur"],
    enquiryDestination: "Kashmir Honeymoon"
  }
];

const HONEYMOON_PERKS = [
  {
    icon: "🕯️",
    title: "Candlelit Dining",
    desc: "Specially reserved private beachfront or terrace tables with floral pathways, personalised menus, and champagne."
  },
  {
    icon: "🌺",
    title: "Romantic Turndown",
    desc: "Rose petal bed arrangements, aroma bath salts, luxury chocolate boxes, and congratulatory honeymoon cakes."
  },
  {
    icon: "💆",
    title: "Couples Spa Rituals",
    desc: "Complimentary signature wellness therapies, Swedish massages, and steam sessions curated for deep relaxation."
  },
  {
    icon: "🛡️",
    title: "24/7 Travel Buddy",
    desc: "Your personal concierge handles airport transfers, flight check-ins, and restaurant bookings on WhatsApp."
  }
];

const FAQS = [
  {
    q: "How early should we start planning our international honeymoon?",
    a: "We recommend booking 3 to 6 months in advance, especially for destinations like Maldives, Switzerland, and Greece. This ensures the best overwater villa categories, prime flight schedules, and plenty of time for seamless visa processing."
  },
  {
    q: "Can you assist with fast-track visas for European or Southeast Asian honeymoons?",
    a: "Yes. Our in-house Visa Desk prepares all required documentation, notarized cover letters, verified flight tickets, hotel vouchers, and early appointment booking for Schengen, UK, Dubai, and Singapore visas."
  },
  {
    q: "Can we fully customize the itinerary based on our preferences?",
    a: "Every honeymoon we plan is 100% bespoke. Whether you prefer a lazy beach retreat with zero sightseeing or an action-packed scenic road trip, your personal Travel Buddy tailors every day, hotel, and private transfer to your exact vision."
  },
  {
    q: "What special honeymoon amenities are guaranteed in your packages?",
    a: "Through our preferred 5-star hotel partnerships, our couples receive complimentary room upgrades (subject to availability), honeymoon celebration cakes, floral bed decor, sparkling wine or mocktails, and priority early check-in."
  }
];

export default function HoneymoonPage() {
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
                ✦ BESPOKE ROMANCE & LUXURY ESCAPES
              </span>
              <h1 className={styles.title}>Crafting Your Forever Journey.</h1>
              <p className={styles.subtitle}>
                Your honeymoon should be an unforgettable celebration of love — seamless, intimate, and free from logistical stress. From private overwater pool villas to starry desert dinners, your dedicated Travel Buddy orchestrates every romantic detail.
              </p>

              <div className={styles.heroActions}>
                <Link href="/enquire?service=Honeymoon%20Package" className={styles.primaryBtn}>
                  <span>Book Honeymoon Consultation</span>
                  <span>&rarr;</span>
                </Link>
                <a
                  href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels,%20I%20would%20like%20to%20plan%20our%20luxury%20honeymoon."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryBtn}
                >
                  <span>💬 WhatsApp Honeymoon Specialist</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ROMANTIC ESCAPES GRID */}
        <section className={styles.destinationsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>CURATED ROMANCE</span>
              <h2 className={styles.sectionTitle}>Handpicked Honeymoon Destinations</h2>
              <p className={styles.sectionSubtitle}>
                Discover breathtaking landscapes where luxury hospitality meets secluded romantic intimacy.
              </p>
            </div>

            <div className={styles.destinationsGrid}>
              {ROMANTIC_DESTINATIONS.map((dest) => (
                <div key={dest.name} className={styles.destCard}>
                  <div
                    className={styles.destImage}
                    style={{ backgroundImage: `url(${dest.image})` }}
                  >
                    <span className={styles.destBadge}>
                      ROMANTIC RETREAT
                    </span>
                  </div>

                  <div className={styles.destContent}>
                    <div>
                      <h3 className={styles.destName}>{dest.name}</h3>
                      <div className={styles.destVibe}>{dest.vibe}</div>
                      <p className={styles.destDescription}>{dest.desc}</p>

                      <ul className={styles.destHighlights}>
                        {dest.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.destAction}>
                      <Link
                        href={`/enquire?service=Honeymoon%20Package&destination=${encodeURIComponent(dest.enquiryDestination)}`}
                        className={styles.destEnquireLink}
                      >
                        Enquire for {dest.name} &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VIP INCLUSIONS STRIP */}
        <section className={styles.perksSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>THE SOBHAVI PROMISE</span>
              <h2 className={styles.sectionTitle}>Complimentary Honeymoon Privileges</h2>
              <p className={styles.sectionSubtitle}>
                We partner directly with leading luxury resorts so our couples receive verified VIP amenities from day one.
              </p>
            </div>

            <div className={styles.perksGrid}>
              {HONEYMOON_PERKS.map((perk, idx) => (
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
              <span className={styles.eyebrow}>EDITORIAL GUIDE & EXPERT INSIGHTS</span>
              <h2 className={styles.articleTitle}>
                The Ultimate Luxury Honeymoon Planning Guide: Curating Unforgettable Romantic Escapes
              </h2>
              <p className={styles.articleLead}>
                Planning a honeymoon is unlike any other holiday. After months of wedding arrangements, couples crave effortless tranquility, authentic exclusivity, and moments that become cherished lifelong memories.
              </p>
            </div>

            <div className={styles.articleBody}>
              <div className={styles.sectionBlock}>
                <h3>1. Seclusion vs. Exploration: Finding Your Shared Travel Rhythm</h3>
                <p>
                  The most common dilemma newlyweds face is balancing total relaxation with cultural exploration. If your wedding festivities were high-energy, an island escape with an overwater pool villa in the Maldives or a quiet jungle sanctuary in Bali offers the perfect sanctuary to unwind together.
                </p>
                <p>
                  Alternatively, for couples who bond over historic cobblestone streets, vineyard strolls, and dramatic mountain landscapes, a curated multi-city European honeymoon across Switzerland, Lake Como, and Santorini offers rich culture with 5-star private chauffeured luxury.
                </p>
                <div className={styles.quoteBox}>
                  &ldquo;A great honeymoon is not about checking 20 tourist spots off a list. It is about lingering over breakfast, watching sunsets without rushing, and feeling completely taken care of.&rdquo;
                </div>
              </div>

              <div className={styles.sectionBlock}>
                <h3>2. Why Direct Bespoke Planning Outperforms Standard Group Packages</h3>
                <p>
                  Off-the-shelf honeymoon packages from generic aggregators frequently come with hidden compromises: remote hotels located an hour outside town centres, early morning bus transfers with 40 other tourists, and rigid meal schedules.
                </p>
                <p>
                  At Sobhavi Travels, every honeymoon is custom-architected around you. We handpick intimate properties with guaranteed king beds, panoramic views, private chauffeured AC cars that move entirely on your clock, and dining reservations secured at the most picturesque tables in town.
                </p>
              </div>

              <div className={styles.sectionBlock}>
                <h3>3. Essential Romantic Perks You Should Always Insist Upon</h3>
                <p>
                  Because we maintain direct institutional contracts with luxury hotel groups such as Taj, Oberoi, Marriott Luxury Collection, Soneva, and Jumeirah, our couples frequently enjoy complimentary privileges that self-booked portals cannot unlock:
                </p>
                <p>
                  &bull; <strong>Complimentary Room Upgrades:</strong> Priority room assignment into higher category suites and private villas upon check-in.<br />
                  &bull; <strong>Celebration Inclusions:</strong> Chilled welcome champagne, fresh strawberries, handcrafted floral turndowns, and personalized anniversary cakes.<br />
                  &bull; <strong>Private Sunset Experiences:</strong> Pre-arranged catamaran charters, private beach pavilions, or private stargazing sessions with zero crowds.
                </p>
              </div>

              <div className={styles.sectionBlock}>
                <h3>4. Timelines, Visas & Stress-Free Document Handling</h3>
                <p>
                  International visa protocols require precision. For Schengen visas covering Switzerland, France, or Greece, visa slots fill up months ahead. When you plan with Sobhavi Travels, our dedicated Visa Concierge secures biometric dates, drafts verified flight reservations and luxury hotel vouchers, and conducts comprehensive document audits to guarantee peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>ANSWERS FOR NEWLYWEDS</span>
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

        {/* PROMINENT BOTTOM ENQUIRY SECTION */}
        <section className={styles.enquiryBannerSection}>
          <div className="container">
            <div className={styles.enquiryBannerCard}>
              <span className={styles.bannerBadge}>YOUR PERSONAL CONCIERGE AWAITS</span>
              <h2 className={styles.bannerTitle}>Ready to Design Your Dream Honeymoon?</h2>
              <p className={styles.bannerDesc}>
                Tell us your preferred dates and dream destinations. Our honeymoon specialists will craft an exclusive, personalized itinerary within 24 hours.
              </p>

              <div className={styles.bannerButtons}>
                <Link href="/enquire?service=Honeymoon%20Package" className={styles.bannerEnquireBtn}>
                  <span>Enquire Now for Honeymoon</span>
                  <span>&rarr;</span>
                </Link>
                <a
                  href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels,%20I%20would%20like%20to%20enquire%20about%20a%20luxury%20honeymoon%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bannerWhatsAppBtn}
                >
                  <span>Chat on WhatsApp (+917406994752)</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

