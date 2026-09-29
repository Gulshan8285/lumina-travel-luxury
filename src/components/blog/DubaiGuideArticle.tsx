"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './DubaiGuideArticle.module.css';

export default function DubaiGuideArticle() {
  const waUrl = `https://wa.me/917406994752?text=${encodeURIComponent("Hello Sobhavi Travels! I read your Dubai Travel Guide for Indians and want to plan a custom Dubai trip.")}`;

  return (
    <div className={styles.guideWrapper}>
      {/* 1. Quick Glance Fact Matrix */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionBadge}>✦ ESSENTIAL INTEL</div>
        <h2 className={styles.sectionHeading}>Dubai at a Glance</h2>
        <p className={styles.leadText}>
          Before diving into itineraries and hotel selection, here are the core practical fundamentals every Indian traveller must know:
        </p>

        <div className={styles.quickGlanceGrid}>
          <div className={styles.glanceCard}>
            <div className={styles.glanceIcon}>💱</div>
            <span className={styles.glanceLabel}>Currency</span>
            <span className={styles.glanceValue}>UAE Dirham (AED)</span>
            <span className={styles.glanceSub}>Pegged ~3.67 AED / $1 (₹22.5–₹23)</span>
          </div>

          <div className={styles.glanceCard}>
            <div className={styles.glanceIcon}>⏰</div>
            <span className={styles.glanceLabel}>Time Difference</span>
            <span className={styles.glanceValue}>1h 30m Behind India</span>
            <span className={styles.glanceSub}>Zero jet lag for Indian families</span>
          </div>

          <div className={styles.glanceCard}>
            <div className={styles.glanceIcon}>🔌</div>
            <span className={styles.glanceLabel}>Power Sockets</span>
            <span className={styles.glanceValue}>220–240V UK 3-Pin</span>
            <span className={styles.glanceSub}>Type G adapter recommended</span>
          </div>

          <div className={styles.glanceCard}>
            <div className={styles.glanceIcon}>🚨</div>
            <span className={styles.glanceLabel}>Emergency</span>
            <span className={styles.glanceValue}>999 Police • 998 Amb</span>
            <span className={styles.glanceSub}>Fire: 997 • Country: +971</span>
          </div>
        </div>
      </section>

      {/* 2. Is Dubai a good destination? */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionBadge}>✦ THE VERDICT</div>
        <h2 className={styles.sectionHeading}>Is Dubai a Good Destination for Indian Travellers?</h2>
        <p className={styles.leadText}>
          For a first international holiday, Dubai is remarkably frictionless. English is ubiquitous, authentic Indian food is around every corner, international credit cards work everywhere, and public infrastructure is among the world’s safest.
        </p>
        <p className={styles.bodyText}>
          There is also a thriving Indian community in the UAE, meaning travellers will immediately find familiar comforts. But Dubai is not solely a luxury playground. You can tailor your holiday around:
        </p>

        <div className={styles.rulesGrid}>
          <div className={styles.ruleCard}>
            <div className={styles.ruleTitle}>👨‍👩‍👧‍👦 Multi-Gen Family Vacations</div>
            <p className={styles.ruleDesc}>Aquariums, theme parks, world-class resorts, and zero dietary friction for vegetarian elders.</p>
          </div>
          <div className={styles.ruleCard}>
            <div className={styles.ruleTitle}>🥂 Couples & Honeymooners</div>
            <p className={styles.ruleDesc}>Private yacht charters, clifftop dining, overwater suites, and desert glamping.</p>
          </div>
          <div className={styles.ruleCard}>
            <div className={styles.ruleTitle}>🛍️ Shopping & Food Lovers</div>
            <p className={styles.ruleDesc}>Dubai Mall Haute Couture, fragrant spice souks, traditional gold markets, and Middle Eastern gastronomy.</p>
          </div>
          <div className={styles.ruleCard}>
            <div className={styles.ruleTitle}>🏖️ Beach & Sun Seekers</div>
            <p className={styles.ruleDesc}>Pristine private beach clubs, JBR waterfront walks, and watersports under year-round sunshine.</p>
          </div>
        </div>
      </section>

      {/* 3. Visa Requirements & Warning */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionBadge}>✦ OFFICIAL ADVISORY</div>
        <h2 className={styles.sectionHeading}>Do Indians Need a Visa for Dubai?</h2>
        <p className={styles.bodyText}>
          Yes. For Indian passport holders, visa requirements depend on travel duration and entry qualifications. Applications are arranged through eligible UAE-based airlines, registered 5-star hotels, or licensed tour operators like Sobhavi Travels.
        </p>

        {/* Warning Callout Box */}
        <div className={styles.calloutCard}>
          <div className={styles.calloutHeader}>
            <span className={styles.calloutIcon}>⚠️</span>
            <h4 className={styles.calloutTitle}>Critical Visa Warning for Indian Travellers</h4>
          </div>
          <div className={styles.calloutBody}>
            <p>
              <strong>1. Six-Month Validity Rule:</strong> Your passport <em>must have at least six months of validity</em> from your scheduled entry date into the UAE.
            </p>
            <p>
              <strong>2. Beware of Cheap Visa Scams:</strong> The UAE government specifically warns travellers against transferring money or sending passport copies to unverified individuals offering "dirt-cheap instant visas". Always use authorized, licensed agencies.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Ideal Duration */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionBadge}>✦ PLANNING YOUR TRIP</div>
        <h2 className={styles.sectionHeading}>How Many Days Are Enough for Dubai?</h2>
        <p className={styles.leadText}>
          The most important rule: <strong>Do not confuse more attractions with a better holiday.</strong> Dubai involves massive walking distances and transport logistics. Choose the duration that fits your pace:
        </p>

        <div className={styles.durationGrid}>
          <div className={styles.durationCard}>
            <div className={styles.durationDays}>3 Nights / 4 Days</div>
            <div className={styles.durationSummary}>Express Highlights (Fast-Paced)</div>
            <ul className={styles.durationHighlights}>
              <li>Burj Khalifa Level 124/125 observation deck</li>
              <li>The Dubai Mall & choreographed fountain show</li>
              <li>Evening Dubai Marina or JBR walk</li>
              <li>Half-day red dunes Desert Safari</li>
            </ul>
          </div>

          <div className={styles.durationCard}>
            <div className={styles.durationDays}>4 Nights / 5 Days</div>
            <div className={styles.durationSummary}>Classic First-Timer (Balanced)</div>
            <ul className={styles.durationHighlights}>
              <li>All major modern landmarks without exhausting rush</li>
              <li>Museum of the Future & Dubai Frame</li>
              <li>Old Dubai, Creek Abra ride & Gold Souk</li>
              <li>Dedicated shopping and relaxed dining evening</li>
            </ul>
          </div>

          <div className={`${styles.durationCard} ${styles.durationCardHighlighted}`}>
            <span className={styles.durationBadge}>RECOMMENDED SWEET SPOT</span>
            <div className={styles.durationDays}>5 Nights / 6 Days</div>
            <div className={styles.durationSummary}>Ideal for Families & Couples</div>
            <ul className={styles.durationHighlights}>
              <li>Downtown Dubai & Burj Khalifa VIP access</li>
              <li>Old Dubai heritage, Abra boat & spice markets</li>
              <li>Dubai Marina luxury yacht cruise & JBR beach</li>
              <li>Premium 4x4 Desert Safari & starlit BBQ dinner</li>
              <li>Half-day pool relaxation, shopping & leisure</li>
            </ul>
          </div>

          <div className={styles.durationCard}>
            <div className={styles.durationDays}>6–7 Nights</div>
            <div className={styles.durationSummary}>Relaxed Luxury + Abu Dhabi</div>
            <ul className={styles.durationHighlights}>
              <li>Full-day Abu Dhabi excursion (Louvre + Sheikh Zayed Mosque)</li>
              <li>Atlantis Aquaventure or IMG Worlds theme parks</li>
              <li>Multiple beach club or luxury resort pool days</li>
              <li>Unrushed fine dining and high-end shopping</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Where to Stay */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionBadge}>✦ LOCATION STRATEGY</div>
        <h2 className={styles.sectionHeading}>Where Should Indians Stay in Dubai?</h2>
        <p className={styles.leadText}>
          Your hotel location dictates your entire holiday experience. Never pick a hotel purely because it is ₹2,000 cheaper on a portal. Always evaluate:
          <br />
          <strong>Room Tariff + Taxi / Metro Costs + Breakfast + Distance to Major Sights.</strong>
        </p>

        <div className={styles.areaGrid}>
          <div className={styles.areaCard}>
            <div className={styles.areaHeader}>
              <h3 className={styles.areaName}>Downtown Dubai</h3>
              <span className={styles.areaTag}>Iconic & Central</span>
            </div>
            <p className={styles.areaDesc}>
              Right in the beating heart of modern Dubai. Steps from Burj Khalifa, Dubai Mall, and top restaurants.
            </p>
            <ul className={styles.areaPros}>
              <li>Zero transit time to world-famous attractions</li>
              <li>Spectacular fountain & skyscraper views</li>
              <li>Higher room tariffs, best for luxury travellers</li>
            </ul>
          </div>

          <div className={styles.areaCard}>
            <div className={styles.areaHeader}>
              <h3 className={styles.areaName}>Dubai Marina & JBR</h3>
              <span className={styles.areaTag}>Beachfront & Romantic</span>
            </div>
            <p className={styles.areaDesc}>
              A true resort vibe. Perfect for couples and families who want evening waterfront strolls, yachts, and beach access.
            </p>
            <ul className={styles.areaPros}>
              <li>The Walk at JBR beachfront promenade</li>
              <li>Outdoor dining, beach clubs & Marina cruises</li>
              <li>Further from Old Dubai and airport (30-40 mins)</li>
            </ul>
          </div>

          <div className={styles.areaCard}>
            <div className={styles.areaHeader}>
              <h3 className={styles.areaName}>Bur Dubai & Deira</h3>
              <span className={styles.areaTag}>Budget & Heritage</span>
            </div>
            <p className={styles.areaDesc}>
              Historic, authentic Dubai. Hundreds of Indian vegetarian eateries, Gold and Spice Souks, and budget hotels.
            </p>
            <ul className={styles.areaPros}>
              <li>Economical room rates and huge Indian community</li>
              <li>Walkable to Creek, Abra boats, and Meena Bazaar</li>
              <li>Busy streets, older buildings, further from Marina</li>
            </ul>
          </div>

          <div className={styles.areaCard}>
            <div className={styles.areaHeader}>
              <h3 className={styles.areaName}>Al Barsha</h3>
              <span className={styles.areaTag}>Practical & Connected</span>
            </div>
            <p className={styles.areaDesc}>
              Extremely practical hub right next to the Mall of the Emirates and Sheikh Zayed Road.
            </p>
            <ul className={styles.areaPros}>
              <li>Direct Metro red-line access to Downtown & Marina</li>
              <li>High concentration of mid-range 4-star family hotels</li>
              <li>Less scenic than Marina or Downtown</li>
            </ul>
          </div>
        </div>

        {/* Warning Callout: Near Metro Trap */}
        <div className={styles.calloutCard}>
          <div className={styles.calloutHeader}>
            <span className={styles.calloutIcon}>💡</span>
            <h4 className={styles.calloutTitle}>The "Near Metro" Trap Most Tourists Overlook</h4>
          </div>
          <div className={styles.calloutBody}>
            <p>
              A hotel advertised as <em>"near the Metro"</em> may still require a 15-minute walk. While pleasant in winter, walking 15 minutes with shopping bags, toddlers, or elderly parents under warm temperatures is exhausting. Always check the exact walking meters on Google Maps before booking.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Getting Around: Metro vs Taxi */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionBadge}>✦ TRANSIT COMPARISON</div>
        <h2 className={styles.sectionHeading}>Getting Around Dubai: Metro or Taxi?</h2>
        <p className={styles.leadText}>
          You don't need to choose strictly one. A smart combination is the secret to a comfortable holiday:
        </p>

        <div className={styles.comparisonContainer}>
          <div className={`${styles.comparisonBox} ${styles.comparisonBoxMetro}`}>
            <div className={styles.comparisonHeader}>
              <span style={{ fontSize: "1.4rem" }}>🚇</span>
              <h3 className={styles.comparisonTitle}>When to Take Dubai Metro</h3>
            </div>
            <ul className={styles.comparisonList}>
              <li>Travelling solo or as an active couple</li>
              <li>Travelling during peak Sheikh Zayed Road traffic hours</li>
              <li>Direct journeys between Metro-connected malls (Dubai Mall, MOE)</li>
              <li>Carrying minimal luggage and happy to walk</li>
            </ul>
            <p className={styles.comparisonNote}>
              📌 Requires a <strong>NOL Card</strong> with minimum AED 7.50 balance.
            </p>
          </div>

          <div className={`${styles.comparisonBox} ${styles.comparisonBoxTaxi}`}>
            <div className={styles.comparisonHeader}>
              <span style={{ fontSize: "1.4rem" }}>🚕</span>
              <h3 className={styles.comparisonTitle}>When to Take Dubai Taxi</h3>
            </div>
            <ul className={styles.comparisonList}>
              <li>Travelling with elderly parents or young children</li>
              <li>Carrying heavy shopping bags or airport suitcases</li>
              <li>Travelling as a family of 3–4 (cost per person is similar!)</li>
              <li>Visiting spots off the red line (Miracle Garden, Desert)</li>
            </ul>
            <p className={styles.comparisonNote}>
              📌 Taxis accept cash, credit cards, NOL card, and Apple Pay seamlessly.
            </p>
          </div>
        </div>

        <p className={styles.bodyText}>
          <strong>Sobhavi Pro-Tip for Families:</strong> Don't force your family to take the Metro everywhere just because it saves ₹300. If 4 people are travelling together, a direct air-conditioned taxi that saves 45 minutes of transfers and stair-climbing is worth every dirham.
        </p>
      </section>

      {/* 7. Money, Cards & Food */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionBadge}>✦ ESSENTIALS & DINING</div>
        <h2 className={styles.sectionHeading}>Money, Cards & Indian Food</h2>

        <div className={styles.rulesGrid}>
          <div className={styles.ruleCard}>
            <div className={styles.ruleTitle}>💳 Cards vs Cash</div>
            <p className={styles.ruleDesc}>
              Cards are accepted virtually everywhere. Keep an <strong>international credit card + some AED cash for tips/souks + a backup card</strong>. Check your bank's forex markup before flying.
            </p>
          </div>

          <div className={styles.ruleCard}>
            <div className={styles.ruleTitle}>⚠️ UPI Warning</div>
            <p className={styles.ruleDesc}>
              Do not rely on Indian UPI apps (PhonePe/GPay) working across Dubai merchants. Always have your international chip card and physical cash.
            </p>
          </div>

          <div className={styles.ruleCard}>
            <div className={styles.ruleTitle}>🍛 Indian Vegetarian & Jain Food</div>
            <p className={styles.ruleDesc}>
              Dubai is a paradise for Indian food. From pure-vegetarian Gujarati thalis in Karama and South Indian dosas in Bur Dubai to fine-dining North Indian in Downtown, dietary concerns are zero.
            </p>
          </div>

          <div className={styles.ruleCard}>
            <div className={styles.ruleTitle}>🥙 Taste Middle Eastern Too!</div>
            <p className={styles.ruleDesc}>
              Don't miss authentic falafel, fresh hummus, warm pita, kunafa, and grilled shawarma. Dubai's Lebanese and Emirati culinary scene is among the world's best.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Local Laws & Etiquette */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionBadge}>✦ LOCAL ETIQUETTE</div>
        <h2 className={styles.sectionHeading}>Dubai Rules Indian Tourists Should Know</h2>
        <p className={styles.leadText}>
          Dubai is extremely welcoming and cosmopolitan, but strict laws protect privacy, security, and cultural values:
        </p>

        <div className={styles.rulesGrid}>
          <div className={styles.ruleCard}>
            <div className={styles.ruleTitle}>📷 No Photography Without Consent</div>
            <p className={styles.ruleDesc}>
              Never photograph strangers (especially women and families) without explicit permission. Avoid taking pictures of government and military buildings.
            </p>
          </div>

          <div className={styles.ruleCard}>
            <div className={styles.ruleTitle}>🤝 Modest Public Affection</div>
            <p className={styles.ruleDesc}>
              Holding hands is normal, but excessive public displays of intimacy are frowned upon and can attract penalties.
            </p>
          </div>

          <div className={styles.ruleCard}>
            <div className={styles.ruleTitle}>🍷 Alcohol in Licensed Venues Only</div>
            <p className={styles.ruleDesc}>
              Alcohol is available in licensed hotel restaurants, clubs, and lounges. Drinking in public streets or public drunkenness is strictly illegal.
            </p>
          </div>

          <div className={styles.ruleCard}>
            <div className={styles.ruleTitle}>🕌 Dress Code Guidelines</div>
            <p className={styles.ruleDesc}>
              Normal swimwear at hotel pools and beaches. Casual holiday clothes in malls. Shoulders and knees covered when visiting mosques or cultural sites.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Curated 5N/6D Day-by-Day Itinerary */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionBadge}>✦ CURATED ITINERARY</div>
        <h2 className={styles.sectionHeading}>A Realistic 5-Night / 6-Day Dubai Itinerary</h2>
        <p className={styles.leadText}>
          Here is how our Sobhavi concierge curates a balanced, unhurried journey that gives you time to actually enjoy Dubai:
        </p>

        <div className={styles.timelineWrapper}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <span className={styles.timelineDayBadge}>DAY 1</span>
            <h3 className={styles.timelineTitle}>Arrival in Dubai & Relaxed Marina Evening</h3>
            <p className={styles.timelineDesc}>
              Private luxury chauffeur airport pickup. Hotel check-in, unpack, and unwind. Spend an easy evening walking along Dubai Marina Promenade or enjoy a sunset dinner cruise. No rushed sightseeing on landing day!
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <span className={styles.timelineDayBadge}>DAY 2</span>
            <h3 className={styles.timelineTitle}>Downtown Dubai & Burj Khalifa At The Top</h3>
            <p className={styles.timelineDesc}>
              Ascend to Level 124 & 125 of Burj Khalifa for breathtaking 360° panoramic views across the Arabian Gulf. Explore The Dubai Mall, visit the colossal underwater Aquarium tunnel, and watch the illuminated Fountain Show.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <span className={styles.timelineDayBadge}>DAY 3</span>
            <h3 className={styles.timelineTitle}>Old Dubai Heritage, Creek Abra & Gold Souk</h3>
            <p className={styles.timelineDesc}>
              Experience Dubai’s origins at Al Fahidi Historical Neighbourhood. Ride a traditional wooden Abra boat across Dubai Creek (just 1 AED!), and immerse yourself in the glittering Gold Souk and fragrant Spice Souk.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <span className={styles.timelineDayBadge}>DAY 4</span>
            <h3 className={styles.timelineTitle}>Red Dunes Desert Safari & Bedouin Camp</h3>
            <p className={styles.timelineDesc}>
              Relax in the morning by the hotel pool. In the afternoon, a 4x4 Land Cruiser picks you up for dune bashing on the crimson sands of the Lahbab desert, camel riding, sandboarding, falconry, and a private BBQ dinner under the stars.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <span className={styles.timelineDayBadge}>DAY 5</span>
            <h3 className={styles.timelineTitle}>Palm Jumeirah & Sunset Yacht Cruise</h3>
            <p className={styles.timelineDesc}>
              Drive across the engineering marvel of Palm Jumeirah. Visit The View at The Palm or Atlantis. In the evening, board a private luxury yacht charter from Dubai Marina for skyline views as the city lights up.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <span className={styles.timelineDayBadge}>DAY 6</span>
            <h3 className={styles.timelineTitle}>Souvenir Shopping & Airport Farewell</h3>
            <p className={styles.timelineDesc}>
              Pick up dates, perfumes, and electronics. Enjoy a final Arabic lunch before your private chauffeur transfers you to Dubai International Airport (DXB) for your flight back home.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Interactive FAQ Accordion */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionBadge}>✦ ANSWERS TO TOP QUESTIONS</div>
        <h2 className={styles.sectionHeading}>Dubai Travel FAQs for Indian Travellers</h2>

        <div className={styles.faqSection}>
          <details className={styles.faqItem} open>
            <summary className={styles.faqQuestion}>Is Dubai expensive for Indians?</summary>
            <div className={styles.faqAnswer}>
              <p>
                Dubai caters to all budgets. While luxury hotels and Michelin dining are world-class, budget-conscious travellers can find great 4-star hotels in Al Barsha or Bur Dubai, economical Indian food, and free public beaches like Kite Beach and JBR.
              </p>
            </div>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>Is Indian vegetarian food easily available?</summary>
            <div className={styles.faqAnswer}>
              <p>
                Yes, completely. There are thousands of Indian restaurants offering North Indian, South Indian, Gujarati, Marwari thalis, and pure Jain food across Karama, Bur Dubai, Meena Bazaar, and all major malls.
              </p>
            </div>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>Can Indians use UPI in Dubai?</summary>
            <div className={styles.faqAnswer}>
              <p>
                Do not assume your Indian UPI apps will work everywhere. While select merchant pilot projects exist, you must carry an international debit/credit card and cash in UAE Dirhams (AED) as backup.
              </p>
            </div>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>Can I wear shorts in Dubai?</summary>
            <div className={styles.faqAnswer}>
              <p>
                Yes. Shorts, t-shirts, summer dresses, and standard resort wear are completely acceptable in hotels, malls, beaches, and tourist zones. Simply cover knees and shoulders when visiting historic heritage quarters, mosques, and government buildings.
              </p>
            </div>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>Is a desert safari safe for children and senior citizens?</summary>
            <div className={styles.faqAnswer}>
              <p>
                Yes, if customized! For elderly parents or toddlers, Sobhavi arranges "gentle/soft desert safaris" that bypass high-speed dune bashing and take you straight to the luxury desert camp for sunset photos, falconry, and dinner.
              </p>
            </div>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>Should I stay near Dubai Mall?</summary>
            <div className={styles.faqAnswer}>
              <p>
                Downtown Dubai is great for first-timers who prioritize luxury and proximity to Burj Khalifa. But if you want beaches, evening marina walks, and holiday relaxation, Dubai Marina & JBR is often preferred by couples and families.
              </p>
            </div>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>What is the single biggest mistake first-time visitors make?</summary>
            <div className={styles.faqAnswer}>
              <p>
                Overpacking the itinerary. Trying to squeeze 4 big attractions into a single day leaves you exhausted from walking and commuting. A great holiday gives you breathing room to actually soak in the atmosphere.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* 11. 5-Point Checklist Before Booking */}
      <div className={styles.checklistCard}>
        <h3 className={styles.checklistTitle}>5 Things to Verify Before Booking Any Dubai Package</h3>
        <ul className={styles.checklistItems}>
          <li className={styles.checklistItem}>
            <span className={styles.checkNumber}>1</span>
            <div><strong>Where is the hotel actually located?</strong> Verify walking distance to Metro or dining.</div>
          </li>
          <li className={styles.checklistItem}>
            <span className={styles.checkNumber}>2</span>
            <div><strong>How much transit will each sightseeing day involve?</strong> Ensure sensible routing.</div>
          </li>
          <li className={styles.checklistItem}>
            <span className={styles.checkNumber}>3</span>
            <div><strong>Which attractions genuinely matter to your family?</strong> Skip tourist traps.</div>
          </li>
          <li className={styles.checklistItem}>
            <span className={styles.checkNumber}>4</span>
            <div><strong>Are airport transfers, tourism dirham taxes, and GST included?</strong> Avoid surprises.</div>
          </li>
          <li className={styles.checklistItem}>
            <span className={styles.checkNumber}>5</span>
            <div><strong>Does your itinerary include leisure and pool downtime?</strong> Rest is essential.</div>
          </li>
        </ul>
      </div>

      {/* 12. Bespoke Planning CTA */}
      <div className={styles.ctaBox}>
        <div className={styles.ctaSubtitle}>TAILOR-MADE LUXURY EXPERIENCES</div>
        <h3 className={styles.ctaTitle}>Planning Your Dubai Holiday from India?</h3>
        <p className={styles.ctaText}>
          At Sobhavi Travels, we design your Dubai holiday around your hotel preferences, dietary tastes, family pace, and preferred flight timings — complete with visa assistance and on-ground concierge support.
        </p>
        <div className={styles.ctaActions}>
          <a 
            href={waUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.ctaWaBtn}
          >
            <span>💬</span> Chat on WhatsApp (+91 74069 94752)
          </a>
          <Link href="/enquire?destination=Dubai" className={styles.ctaEnquireBtn}>
            Request Custom Itinerary →
          </Link>
        </div>
      </div>
    </div>
  );
}
