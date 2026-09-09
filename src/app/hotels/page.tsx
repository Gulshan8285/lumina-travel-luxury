"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

interface CityHotelCategory {
  city: string;
  tagline: string;
  image: string;
  featuredHotels: string[];
  inclusions: string[];
  foodDetails: string;
  carDetails: string;
}

const CITY_HOTEL_DATA: CityHotelCategory[] = [
  {
    city: "Rajasthan (Jaipur & Udaipur)",
    tagline: "Royal Heritage Palaces & Legendary Mewar Hospitality",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2000&auto=format&fit=crop",
    featuredHotels: ["Taj Lake Palace Udaipur", "The Oberoi Udaivilas", "Rambagh Palace Jaipur", "Fairmont Jaipur", "Leela Palace Udaipur"],
    inclusions: [
      "Palace Chamber / Luxury Garden View Suite",
      "Royal Welcome with Rose Garland & Aarti",
      "Complimentary Room Upgrade (Subject to availability)",
      "Early Check-In & Late Check-Out Privileges"
    ],
    foodDetails: "Lavish daily buffet breakfast + royal multi-course Rajasthani thali dinners & chef-crafted multi-cuisine selections.",
    carDetails: "Dedicated private sanitized AC Sedan/SUV with English/Hindi speaking uniformed chauffeur for all airport & palace tours."
  },
  {
    city: "Himachal (Shimla & Manali)",
    tagline: "Cedar Alpine Forests, Mountain Views & Himalayan Chalets",
    image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2070&auto=format&fit=crop",
    featuredHotels: ["Wildflower Hall Shimla (Oberoi)", "The Oberoi Cecil", "The Himalayan Manali", "Span Resort & Spa", "Moksha Himalaya Spa"],
    inclusions: [
      "Snow-Capped Mountain View Chalet / Suite",
      "Welcome Mountain Tea & Fresh Fruit Basket",
      "Bonfire & Heated Indoor Swimming Pool Access",
      "Complimentary Spa Credit of ₹2,000 per stay"
    ],
    foodDetails: "Extensive daily breakfast buffet + candlelit multi-cuisine dinners featuring fresh trout and hot Himachali specialties.",
    carDetails: "Private 4x4 / AC Mountain Vehicle with expert hilly-terrain chauffeur for Mall Road, Solang Valley & Rohtang Pass."
  },
  {
    city: "Kerala (Kochi, Munnar & Kumarakom)",
    tagline: "Serene Backwater Chalets & Lush Misty Tea Hill Resorts",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
    featuredHotels: ["Kumarakom Lake Resort", "Brunton Boatyard Fort Kochi", "Spice Tree Munnar", "Taj Green Cove Kovalam", "Marari Beach Resort"],
    inclusions: [
      "Heritage Backwater Villa with Open-Roof Plunge Pool",
      "Sunset Houseboat Cruise with High Tea",
      "Complimentary 45-Minute Ayurvedic Consultation",
      "Kathakali Performance & Village Walk Included"
    ],
    foodDetails: "Traditional Kerala Sadhya feast served on banana leaf + fresh coastal seafood dinners and continental gourmet selections.",
    carDetails: "Private dedicated AC Chauffeur-driven car throughout your Kerala journey from Cochin airport to Munnar, Thekkady & Alleppey."
  },
  {
    city: "Goa (South & North Goa)",
    tagline: "Exclusive Beachfront Villas & Private Arabian Sea Cabanas",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2070&auto=format&fit=crop",
    featuredHotels: ["The Leela Goa (Mobor)", "Taj Exotica Resort & Spa Benaulim", "W Goa (Vagator)", "Alila Diwa Majorda", "St. Regis Goa Resort"],
    inclusions: [
      "Private Lagoon View Suite or Beach Villa",
      "VIP Private Beach Cabana Reservation",
      "Sunset Cocktails on the Beach Pavilion",
      "Complimentary 1-Hour Luxury Watersports Session"
    ],
    foodDetails: "Lavish oceanfront champagne breakfasts + gourmet Goan Portuguese seafood barbecue dinners.",
    carDetails: "Private luxury AC SUV available for round-trip Dabolim / Mopa airport transfers, North Goa clubbing and South Goa beach hopping."
  },
  {
    city: "Dubai & UAE",
    tagline: "Iconic Skyline Suites & Palm Jumeirah Luxury",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    featuredHotels: ["Burj Al Arab Jumeirah", "Atlantis The Royal", "Armani Hotel Burj Khalifa", "One&Only Royal Mirage", "Bab Al Shams Desert Resort"],
    inclusions: [
      "Palm View / Skyline Suite with Private Balcony",
      "Dedicated Private Butler Service",
      "Complimentary Aquaventure Waterpark Access",
      "VIP Fast-Track Airport Immigrations Support"
    ],
    foodDetails: "International gourmet breakfast spreads + Michelin-star dining credits at world-renowned Dubai restaurants.",
    carDetails: "Private Lexus / BMW luxury airport limousine transfer + private chauffeur on call for downtown luxury shopping excursions."
  },
  {
    city: "Maldives",
    tagline: "Overwater Coral Villas & Pristine Turquoise Lagoons",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2074&auto=format&fit=crop",
    featuredHotels: ["Soneva Jani", "One&Only Reethi Rah", "Anantara Kihavah Maldives", "Constance Moofushi", "Waldorf Astoria Ithaafushi"],
    inclusions: [
      "Private Overwater Villa with Private Infinity Pool & Lagoon Slide",
      "Round-Trip Scenic Seaplane or Luxury Speedboat Transfers",
      "Complimentary Snorkeling Equipment & Dolphin Cruise",
      "Private Barefoot Island Host / Dedicated Butler"
    ],
    foodDetails: "Full Board / All-Inclusive Plan: Gourmet buffet breakfasts, poolside lunches, multi-course dinners and premium beverage pairings.",
    carDetails: "Island electric luxury buggies + round-trip scenic seaplane flight charter from Male International Airport."
  }
];

export default function HotelsPage() {
  const [formData, setFormData] = useState({
    city: "Rajasthan (Jaipur & Udaipur)",
    checkIn: "",
    checkOut: "",
    roomType: "5-Star Luxury Suite",
    guests: "2 Adults",
    name: "",
    phone: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    const message = `*5-Star Hotel Booking Enquiry - SOBHAVI TRAVELS*%0A%0A` +
      `*City / Destination:* ${formData.city}%0A` +
      `*Check-In:* ${formData.checkIn || 'Flexible'}%0A` +
      `*Check-Out:* ${formData.checkOut || 'Flexible'}%0A` +
      `*Room Type:* ${formData.roomType}%0A` +
      `*Guests:* ${formData.guests}%0A%0A` +
      `*Package Inclusions Requested:*%0A` +
      `✓ 5-Star Hotel Luxury Stay%0A` +
      `✓ Daily Breakfast & Gourmet Dinners (Khana Included)%0A` +
      `✓ Private AC Cab & Uniformed Chauffeur (Car Included)%0A` +
      `✓ Airport / Station Transfers%0A%0A` +
      `*Client Details:*%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A%0A` +
      `Please check live room availability & send quotation.`;

    window.open(`https://wa.me/917406994752?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* HERO SECTION WITH COMPLETE STAY + FOOD + CAR INQUIRY CARD */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.eyebrow}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/>
                    <path d="M9 16h6"/>
                    <path d="M9 12h6"/>
                    <path d="M9 8h6"/>
                  </svg>
                  LUXURY 5-STAR STAYS
                </span>
                <h1 className={styles.heroTitle}>The Complete Stay Experience.</h1>
                <p className={styles.heroDesc}>
                  We don't just book rooms. With Sobhavi Travels, every stay includes handpicked 5-star luxury accommodations, chef-curated breakfast and dinner, and a dedicated private car with chauffeur for complete peace of mind.
                </p>

                <div className={styles.packagePillars}>
                  <div className={styles.pillarCard}>
                    <div className={styles.pillarIcon}>🏨</div>
                    <div className={styles.pillarTitle}>5-Star Stay</div>
                    <div className={styles.pillarSubtitle}>Palaces, Villas & Chalets</div>
                  </div>
                  <div className={styles.pillarCard}>
                    <div className={styles.pillarIcon}>🍽️</div>
                    <div className={styles.pillarTitle}>Gourmet Meals</div>
                    <div className={styles.pillarSubtitle}>Breakfast & Dinner Included</div>
                  </div>
                  <div className={styles.pillarCard}>
                    <div className={styles.pillarIcon}>🚗</div>
                    <div className={styles.pillarTitle}>Private Car</div>
                    <div className={styles.pillarSubtitle}>Chauffeur for All Sightseeing</div>
                  </div>
                </div>
              </div>

              {/* HOTEL BOOKING CARD */}
              <div className={styles.hotelCard}>
                <div className={styles.hotelCardHeader}>
                  <span className={styles.cardBadge}>STAY + FOOD + CAR PACKAGE</span>
                  <h2 className={styles.hotelCardTitle}>Reserve 5-Star Hotel</h2>
                </div>

                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🏨</div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Hotel Request Dispatched!</h3>
                    <p style={{ fontSize: '0.88rem', color: '#64748b' }}>
                      Our hospitality desk is checking suite availability, special meal plans, and private chauffeur allocation.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="btn-outline-dark"
                      style={{ marginTop: '1rem', padding: '0.6rem 1.4rem', fontSize: '0.75rem' }}
                    >
                      Book Another Hotel
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.hotelForm}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Select City / Region</label>
                      <select 
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className={styles.formSelect}
                      >
                        {CITY_HOTEL_DATA.map((c) => (
                          <option key={c.city} value={c.city}>{c.city}</option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Check-In Date</label>
                        <input 
                          type="date"
                          value={formData.checkIn}
                          onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                          className={styles.formInput}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Check-Out Date</label>
                        <input 
                          type="date"
                          value={formData.checkOut}
                          onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                          className={styles.formInput}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Room Category</label>
                        <select 
                          value={formData.roomType}
                          onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                          className={styles.formSelect}
                        >
                          <option value="5-Star Luxury Suite">5-Star Luxury Suite</option>
                          <option value="Heritage Palace Chamber">Heritage Palace Chamber</option>
                          <option value="Private Pool Villa">Private Pool Villa</option>
                          <option value="Overwater Ocean Bungalow">Overwater Ocean Bungalow</option>
                        </select>
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Guests</label>
                        <select 
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className={styles.formSelect}
                        >
                          <option value="2 Adults (1 Room)">2 Adults (1 Room)</option>
                          <option value="Family (2 Adults + 1 Child)">Family (2 Adults + 1 Child)</option>
                          <option value="Family (2 Adults + 2 Children)">Family (2 Adults + 2 Children)</option>
                          <option value="Group (4+ Adults, 2 Rooms)">Group (4+ Adults, 2 Rooms)</option>
                        </select>
                      </div>
                    </div>

                    {/* Automatic Package Checklist */}
                    <div className={styles.inclusionsChecklist}>
                      <div className={styles.checklistLabel}>Package Inclusions Included Free:</div>
                      <div className={styles.checkGrid}>
                        <div className={styles.checkItem}>
                          <span className={styles.checkGreen}>✓</span>
                          <span>Daily Breakfast + Dinner</span>
                        </div>
                        <div className={styles.checkItem}>
                          <span className={styles.checkGreen}>✓</span>
                          <span>Private AC Cab with Chauffeur</span>
                        </div>
                        <div className={styles.checkItem}>
                          <span className={styles.checkGreen}>✓</span>
                          <span>Airport VIP Pickup & Drop</span>
                        </div>
                        <div className={styles.checkItem}>
                          <span className={styles.checkGreen}>✓</span>
                          <span>Early Check-In / Room Upgrade</span>
                        </div>
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Your Name</label>
                        <input 
                          type="text"
                          placeholder="e.g. Vikram Singhania"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={styles.formInput}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>WhatsApp Phone</label>
                        <input 
                          type="tel"
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={styles.formInput}
                          required
                        />
                      </div>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      <span>Get Best Hotel & Cab Package Quote</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>

                    <div className={styles.supportStrip}>
                      <span>Direct Hospitality Desk:</span>
                      <a href="tel:+917406994752" style={{ color: '#0a0a0a', fontWeight: 700 }}>+91 74069 94752</a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CITY-WISE HOTEL DIRECTORY */}
        <section className={styles.directorySection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>CURATED HOSPITALITY</span>
              <h2 className={styles.sectionTitle}>5-Star Hotels By City & Region</h2>
              <p className={styles.sectionDesc}>
                We partner directly with the world's most distinguished luxury hotel chains — Taj, The Oberoi, Marriott, The Leela, Soneva, and Jumeirah — delivering guaranteed luxury stays, gourmet dining, and private cars.
              </p>
            </div>

            <div className={styles.citiesList}>
              {CITY_HOTEL_DATA.map((item) => (
                <div key={item.city} className={styles.cityCard}>
                  <div 
                    className={styles.cityImageWrapper}
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className={styles.cityImageOverlay} />
                    <span className={styles.cityBadge}>5-STAR HOSPITALITY</span>
                  </div>

                  <div className={styles.cityContent}>
                    <div>
                      <h3 className={styles.cityName}>{item.city}</h3>
                      <div className={styles.cityTagline}>{item.tagline}</div>

                      <div className={styles.hotelsListed}>
                        <div className={styles.hotelsLabel}>Partner 5-Star & Heritage Hotels:</div>
                        <div className={styles.hotelsPills}>
                          {item.featuredHotels.map((h, i) => (
                            <span key={i} className={styles.hotelPill}>★ {h}</span>
                          ))}
                        </div>
                      </div>

                      <div className={styles.stayFoodCarBox}>
                        <div className={styles.stayFoodCarTitle}>The Sobhavi Stay + Food + Car Inclusions:</div>
                        <div className={styles.stayFoodCarList}>
                          <div><strong>🍽️ Dining:</strong> {item.foodDetails}</div>
                          <div><strong>🚗 Private Car:</strong> {item.carDetails}</div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.cityActions}>
                      <Link 
                        href={`/enquire?destination=${encodeURIComponent(item.city)}`}
                        className={styles.bookCityBtn}
                      >
                        Enquire For This City
                      </Link>
                      <a 
                        href={`https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels,%20I%20want%20to%20book%20a%205-Star%20Hotel%20in%20${encodeURIComponent(item.city)}%20with%20Food%20and%20Car%20included.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.whatsappCityBtn}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span>WhatsApp Quote</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
