import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import SinglePageForm from '@/components/ui/SinglePageForm';
import styles from './page.module.css';

export const metadata = {
  title: "Rann Utsav 2026–2027 Kutch Tour Packages | Sobhavi Holidays",
  description: "Experience the White Desert of Kutch. Authentic Rann Utsav stays at Tent City Dhordo, Bhuj transfers, cultural performances, and tailored Kutch itineraries by Sobhavi Holidays."
};

const ACTIVITIES = [
  { title: "Visit the Great Rann of Kutch", icon: "✨", desc: "Witness the vast, surreal expanse of shimmering white salt flats, stunning during sunset and full moon nights." },
  { title: "Explore Dhordo & Surrounding Villages", icon: "🏘️", desc: "Wander through local Kutchi villages to experience the warm hospitality, traditional bhungas, and desert lifestyle." },
  { title: "See Kutch's Traditional Crafts", icon: "🧵", desc: "Meet artisan communities renowned for Rogan art, Ajrakh block printing, mirror embroidery, and copper bells." },
  { title: "Visit Kala Dungar (Black Hill)", icon: "⛰️", desc: "Climb to the highest point in Kutch for panoramic 360° views across the salt plains and the historic Dattatreya Temple." },
  { title: "Spend a Day in Bhuj", icon: "🏰", desc: "Explore the ornate Aina Mahal, Venetian-Gothic Prag Mahal, Kutch Museum, and the vibrant local handicraft markets." },
  { title: "Head to Mandvi Beach", icon: "🌊", desc: "Stroll along the Arabian Sea coastline, tour the majestic Vijay Vilas Palace, and see 400-year-old shipbuilding yards." },
  { title: "Road to Heaven", icon: "🛣️", desc: "Drive along the world-famous cinematic highway slicing straight across the endless white desert towards Dholavira." },
];

const FAQS = [
  {
    q: "1. What is Rann Utsav?",
    a: "Rann Utsav is a seasonal cultural festival held in Dhordo, Kutch, Gujarat, at the White Rann. It brings together the region’s distinctive landscape, local crafts, food, music, dance and cultural experiences."
  },
  {
    q: "2. When is Rann Utsav 2026–27?",
    a: "Rann Utsav 2026–27 is scheduled from 1 November 2026 to 7 March 2027. The exact availability and pricing of packages can vary depending on the travel dates and accommodation category."
  },
  {
    q: "3. How many days are enough for Rann Utsav?",
    a: "For a first visit, 2 nights and 3 days is a comfortable option. It gives you enough time to experience the White Rann, enjoy the cultural activities and explore nearby attractions."
  },
  {
    q: "4. How much does a Rann Utsav package cost?",
    a: "Rann Utsav package prices depend on the travel dates, number of nights, tent category, occupancy and inclusions. Rates may also vary during weekends, holidays and peak travel periods."
  },
  {
    q: "5. What is included in a Rann Utsav package?",
    a: "Depending on the package and accommodation category, inclusions may cover accommodation, meals, transfers, sightseeing, a visit to the White Rann and cultural or entertainment activities. Inclusions can vary by package and date, so the specific package details should always be checked before booking."
  },
  {
    q: "6. Which tent category should I choose at Rann Utsav?",
    a: "The right category depends on your budget and the type of stay you prefer. Deluxe AC tents are a practical choice for travellers looking for comfort at a reasonable price. Premium tents offer a more elevated stay, while Super Premium tents are suited to travellers looking for a more luxurious accommodation experience. For most families and first-time visitors, Deluxe or Premium can offer a good balance between comfort and cost."
  },
  {
    q: "7. Is Rann Utsav suitable for families with children?",
    a: "Yes. Rann Utsav can be a great family holiday, with cultural programmes, local experiences, sightseeing and activities suitable for different age groups. Families should keep the weather in mind, particularly the cooler evenings and early mornings during the winter months."
  },
  {
    q: "8. What is the best time to visit Rann Utsav?",
    a: "Rann Utsav takes place during the winter months. November to February is a popular period because of the cooler weather and the experience of visiting the White Rann during the festival season. December and January are particularly popular, so accommodation can become limited around holidays and peak travel dates."
  },
  {
    q: "9. What should I wear at Rann Utsav?",
    a: "Pack comfortable clothing for daytime sightseeing along with warm layers for the evening and early morning. Temperatures in Kutch can drop considerably after sunset during the winter months. Comfortable walking shoes are also recommended for exploring the White Rann and surrounding attractions."
  },
  {
    q: "10. What places can I visit during Rann Utsav?",
    a: "Depending on your itinerary, you can explore attractions such as the White Rann, Kala Dungar, Gandhi nu Gaam and other parts of Kutch. You can also extend your trip to explore Bhuj and other cultural, craft and heritage destinations in the region."
  },
  {
    q: "11. How can I book a Rann Utsav package with Sobhavi?",
    a: "Share your details with us. We can check the available Rann Utsav options and help coordinate the accommodation, transportation and other travel arrangements required for your trip.",
    hasLink: true
  }
];

export default function RannUtsavPage() {
  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>GUJARAT CULTURAL EXPEDITION • KUTCH FESTIVAL</span>
              <h1 className={styles.title}>Rann Utsav</h1>
              <p className={styles.quoteHook}>&ldquo;Some places are better seen in person.&rdquo;</p>
              
              <div className={styles.datesBar}>
                <span className={styles.datesIcon}>📅</span>
                <span className={styles.datesText}>
                  Festival Season: <strong>1 November 2026 &ndash; 7 March 2027</strong> | Dhordo, Kutch, Gujarat
                </span>
              </div>

              <div className={styles.storyBlock}>
                <p>
                  For a few months every winter, a huge stretch of the Great Rann of Kutch turns white.
                </p>
                <p>
                  Come sunset, the salt desert catches the last light of the day. The temperature drops, the crowds settle down, folk music starts somewhere in the distance, and suddenly you understand why people make the journey all the way to Kutch for this.
                </p>
                <p className={styles.emphasisText}>
                  <strong>That is Rann Utsav.</strong>
                </p>
                <p>
                  Held around Dhordo in Kutch, Gujarat, the festival brings together the landscape, food, music, crafts and everyday culture of the region. You can spend the morning exploring places, watch the sun go down over the Rann in the evening, and end the day with Gujarati food and folk performances at the tent city.
                </p>
                <p>
                  And perhaps that&apos;s why Kutch stays with you long after you&apos;ve left.
                </p>
                <div className={styles.taglineBox}>
                  <span className={styles.taglineHindi}>&ldquo;Kutch Nahin Dekha to Kuch Nahin Dekha.&rdquo;</span>
                </div>
              </div>

              <div className={styles.heroActions}>
                <a href="#enquire-form" className={styles.primaryBtn}>
                  ✦ Plan Your Kutch Journey &rarr;
                </a>
                <a
                  href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Holidays,%20I%20want%20to%20plan%20a%20Rann%20Utsav%20trip%20to%20Kutch."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryBtn}
                >
                  💬 WhatsApp Kutch Specialist
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How long should you stay? */}
        <section className={styles.stayDurationSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>TRIP PLANNING GUIDANCE</span>
              <h2 className={styles.sectionTitle}>How long should you stay?</h2>
            </div>

            <div className={styles.durationCards}>
              <div className={styles.durationCard}>
                <div className={styles.durationBadge}>2 NIGHTS</div>
                <h3>Quick Experience</h3>
                <p>
                  For just the Rann Utsav experience, <strong>2 nights can work for Dholavira</strong>.
                </p>
              </div>

              <div className={`${styles.durationCard} ${styles.durationCardFeatured}`}>
                <div className={styles.durationBadgeGold}>RECOMMENDED: 3–4 NIGHTS</div>
                <h3>Complete Kutch Exploration</h3>
                <p>
                  If you&apos;re travelling all the way to Kutch, however, <strong>we&apos;d suggest giving yourself a little more time</strong>.
                </p>
                <p className={styles.durationDetail}>
                  A <strong>3-4 night trip</strong> gives you room for the Rann, Dhordo, Bhuj, Dholavira and one or two additional experiences without turning the holiday into a checklist.
                </p>
              </div>
            </div>

            <div className={styles.travelTimeNote}>
              <span className={styles.noteIcon}>💡</span>
              <span>And if you&apos;re coming from another city, remember to factor in your travel time to and from Bhuj.</span>
            </div>
          </div>
        </section>

        {/* Staying at the Rann Utsav Tent City */}
        <section className={styles.tentCitySection}>
          <div className="container">
            <div className={styles.tentCityWrapper}>
              <div className={styles.tentCityContent}>
                <span className={styles.eyebrow}>ACCOMMODATION CHOICES</span>
                <h2 className={styles.sectionTitle}>Staying at the Rann Utsav Tent City</h2>
                
                <p className={styles.bodyPara}>
                  For many travellers, the Tent City at Dhordo is part of the Rann Utsav experience.
                </p>
                <p className={styles.bodyPara}>
                  You have your accommodation, meals, transfers and festival activities arranged in one place, making it a convenient option if you want to keep the trip simple.
                </p>
                <p className={styles.bodyPara}>
                  There are different accommodation categories, so the right choice depends on how much time you plan to spend at the property, what level of comfort you prefer and, of course, your budget.
                </p>

                <div className={styles.outsideTentNote}>
                  <div className={styles.outsideIcon}>✨</div>
                  <div>
                    <h4 className={styles.outsideTitle}>Prefer a Hotel or Resort Instead?</h4>
                    <p className={styles.outsideDesc}>
                      And if a tent stay isn&apos;t your thing, that&apos;s completely fine. We can also plan your Kutch trip around hotels and resorts outside the Tent City.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.tentCategoriesGrid}>
                <div className={styles.categoryCard}>
                  <span className={styles.catIcon}>🎪</span>
                  <h4>Deluxe AC Tents</h4>
                  <p>A practical choice for travellers looking for comfort, attached baths, and festival access at a sensible price.</p>
                </div>
                <div className={styles.categoryCard}>
                  <span className={styles.catIcon}>👑</span>
                  <h4>Premium Tents</h4>
                  <p>An elevated stay experience featuring enhanced room furnishings, cozy verandas, and warm hospitality.</p>
                </div>
                <div className={styles.categoryCard}>
                  <span className={styles.catIcon}>💎</span>
                  <h4>Super Premium Tents</h4>
                  <p>Suited to travellers looking for a more luxurious accommodation experience with priority festival amenities.</p>
                </div>
                <div className={styles.categoryCard}>
                  <span className={styles.catIcon}>🏨</span>
                  <h4>Hotels & Resorts Outside</h4>
                  <p>Boutique heritage resorts and comfortable city hotels in Bhuj or near Dhordo for those who prefer brick-and-mortar stays.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What can you do on a Rann Utsav trip? */}
        <section className={styles.activitiesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>EXPERIENCES & SIGHTSEEING</span>
              <h2 className={styles.sectionTitle}>What can you do on a Rann Utsav trip?</h2>
              <p className={styles.sectionSubtitle}>
                From the silent majesty of the salt desert to royal palaces and ancient craft villages.
              </p>
            </div>

            <div className={styles.activitiesGrid}>
              {ACTIVITIES.map((act, index) => (
                <div key={index} className={styles.activityCard}>
                  <span className={styles.activityIcon}>{act.icon}</span>
                  <h3 className={styles.activityTitle}>{act.title}</h3>
                  <p className={styles.activityDesc}>{act.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kutch on the big screen */}
        <section className={styles.cinemaSection}>
          <div className="container">
            <div className={styles.cinemaCard}>
              <div className={styles.cinemaHeader}>
                <span className={styles.cinemaBadge}>POP CULTURE & CINEMA</span>
                <h2 className={styles.cinemaTitle}>Kutch on the big screen</h2>
              </div>
              
              <div className={styles.cinemaContent}>
                <p>
                  You may have seen Kutch before without realizing it.
                </p>
                <p>
                  The landscape has featured in films such as <strong>Lagaan</strong>, <strong>Refugee</strong> and <strong>Mohenjo Daro</strong>, among others.
                </p>
                <div className={styles.tmkocCallout}>
                  <div className={styles.tmkocIcon}>📺</div>
                  <div>
                    <h4 className={styles.tmkocTitle}>And then there is Taarak Mehta Ka Ooltah Chashmah!</h4>
                    <p className={styles.tmkocDesc}>
                      The Gokuldham gang travelled to Kutch for a Rann Utsav track, with episodes filmed around Dhordo and the Tent City. So for many of us, our first introduction to the Rann may have actually been through Jethalal and the gang.
                    </p>
                  </div>
                </div>
                <p className={styles.cinemaConclusion}>
                  Now it&apos;s time to see it for yourself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Planning your Rann Utsav trip? - Sobhavi Holidays */}
        <section className={styles.planningSection}>
          <div className="container">
            <div className={styles.planningBanner}>
              <span className={styles.eyebrow}>HANDLED BY EXPERTS</span>
              <h2 className={styles.planningTitle}>Planning your Rann Utsav trip?</h2>
              <p className={styles.planningDesc}>
                At Sobhavi Holidays, we can arrange the parts of your Kutch holiday that you actually need &mdash; from flights and trains to accommodation, transfers, sightseeing and Rann Utsav stays.
              </p>
              <p className={styles.planningHighlight}>
                You tell us the dates, who is travelling and what you&apos;re looking for. We&apos;ll take it from there.
              </p>
              <div className={styles.planningActions}>
                <a href="#enquire-form" className={styles.primaryBtn}>
                  ✦ Request Custom Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Inclusions */}
        <section className={styles.inclusionsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>TRANSPARENT DETAILS</span>
              <h2 className={styles.sectionTitle}>Inclusions</h2>
              <p className={styles.sectionSubtitle}>
                Clear, transparent inclusions for all official Tent City packages.
              </p>
            </div>

            <div className={styles.inclusionsGrid}>
              {/* Transfer & Welcome */}
              <div className={styles.inclusionCard}>
                <div className={styles.inclusionIcon}>🚌</div>
                <h3>Transfers & En-Route Refreshments</h3>
                <ul className={styles.inclusionsList}>
                  <li>To and fro transfers between Bhuj (Airport/Railway Station and The Tent City, Dhordo, in A.C. Coaches on SIC basis).</li>
                  <li>Complimentary refreshments will be served en route The Tent City, Dhordo in the bus.</li>
                </ul>
              </div>

              {/* Meals Structure */}
              <div className={styles.inclusionCard}>
                <div className={styles.inclusionIcon}>🍽️</div>
                <h3>Meal Plans by Package Duration</h3>
                <div className={styles.mealBreakdown}>
                  <div className={styles.mealItem}>
                    <span className={styles.mealTag}>3 Nights / 4 Days</span>
                    <p>Includes Lunch, High-Tea & Dinner on 1st Day, Morning Tea, Breakfast, Lunch, Refreshment & Dinner on 2nd & 3rd Day and Morning Tea & Breakfast on 4th Day.</p>
                  </div>
                  <div className={styles.mealItem}>
                    <span className={styles.mealTag}>2 Nights / 3 Days</span>
                    <p>Includes Lunch, High-Tea & Dinner on 1st Day, Morning Tea, Breakfast, Lunch, Refreshment & Dinner on 2nd Day and Morning Tea & Breakfast on 3rd Day.</p>
                  </div>
                  <div className={styles.mealItem}>
                    <span className={styles.mealTag}>1 Night / 2 Days</span>
                    <p>Includes Lunch, High-Tea & Dinner on 1st Day and Morning Tea and Breakfast on 2nd Day.</p>
                  </div>
                </div>
                <p className={styles.inclusionsNote}>
                  *The meals will be served as per the scheduled time in respective dining areas and missed meals will not be refunded or extended.
                </p>
              </div>

              {/* Fixed Sightseeing */}
              <div className={styles.inclusionCard}>
                <div className={styles.inclusionIcon}>📍</div>
                <h3>Fixed Sightseeing Schedule</h3>
                <p>
                  <strong>3 Nights / 4 Days package:</strong> Visit to White Rann on Day 1, visit to Mandvi on Day 2 and visit to Kala Dungar on Day 3.
                </p>
                <p style={{ marginTop: '0.75rem' }}>
                  <strong>2 Nights / 3 Days package:</strong> Visit to White Rann on Day 1 and visit to Kala Dungar on Day 2.
                </p>
                <p className={styles.inclusionsNote}>
                  *Visits are fixed & cannot be inter-changed. Guest/s who have missed the visit as per itinerary may be included on request on a chargeable basis.
                </p>
              </div>

              {/* Stay & Amenities */}
              <div className={styles.inclusionCard}>
                <div className={styles.inclusionIcon}>🏕️</div>
                <h3>Stay & Amenities</h3>
                <ul className={styles.inclusionsList}>
                  <li>Accommodation in Tent is on twin sharing basis.</li>
                  <li>Two bottles of drinking water per day per tent will be provided.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ready for Kutch? - Form Section */}
        <section id="enquire-form" className={styles.formSection}>
          <div className="container">
            <div className={styles.formIntro}>
              <span className={styles.eyebrow}>GET STARTED TODAY</span>
              <h2 className={styles.sectionTitle}>Ready for Kutch?</h2>
              <p className={styles.sectionSubtitle}>
                Tell us your travel dates, who is travelling and what you&apos;re looking for. Our Kutch holiday specialists will check live availability and arrange every detail for you.
              </p>
            </div>

            <SinglePageForm
              initialDestination="Rann Utsav - Great Rann of Kutch"
              initialService="Domestic Holiday"
            />
          </div>
        </section>

        {/* FAQs */}
        <section className={styles.faqSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>FREQUENTLY ASKED QUESTIONS</span>
              <h2 className={styles.sectionTitle}>Rann Utsav FAQs</h2>
              <p className={styles.sectionSubtitle}>
                Everything you need to know about planning your visit to the White Rann of Kutch.
              </p>
            </div>

            <div className={styles.faqGrid}>
              {FAQS.map((faq, idx) => (
                <div key={idx} className={styles.faqCard}>
                  <h3 className={styles.faqQuestion}>{faq.q}</h3>
                  <p className={styles.faqAnswer}>
                    {faq.hasLink ? (
                      <>
                        <a href="#enquire-form" className={styles.faqInlineLink}>Share your details with us</a>. We can check the available Rann Utsav options and help coordinate the accommodation, transportation and other travel arrangements required for your trip.
                      </>
                    ) : (
                      faq.a
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
