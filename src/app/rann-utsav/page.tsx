import { FaqItem } from '@/components/ui/RannFaqAccordion';
import RannUtsavMainClient from './RannUtsavMainClient';

export const metadata = {
  title: "Rann Utsav 2026–2027 Kutch Tour Packages | Sobhavi Holidays",
  description: "Experience the White Desert of Kutch. Authentic Rann Utsav stays at Tent City Dhordo, Bhuj transfers, cultural performances, and tailored Kutch itineraries by Sobhavi Holidays."
};

const ACTIVITIES = [
  { title: "Great Rann of Kutch", icon: "✨", desc: "Witness the surreal expanse of glistening white salt flats under golden sunset and full moon skies." },
  { title: "Kala Dungar (Black Hill)", icon: "⛰️", desc: "Highest peak in Kutch offering 360° panoramic horizon views over the salt desert border." },
  { title: "Road to Heaven", icon: "🛣️", desc: "Drive along the world-famous highway cutting straight through the shimmering white salt plains towards Dholavira." },
  { title: "Mandvi Beach & Palaces", icon: "🌊", desc: "Arabian Sea coastal breeze, royal Vijay Vilas heritage palace, and 400-year-old wooden shipbuilding yards." },
  { title: "Artisan Craft Villages", icon: "🧵", desc: "Explore living craft hamlets: Rogan art, Ajrakh block printing, bell making, and mirror embroidery." },
  { title: "Folk Nights & Stargazing", icon: "🎶", desc: "Evenings at Dhordo with soulful Kutchi folk music, garba dancing, campfires, and crystal-clear starscapes." }
];

const FAQS: FaqItem[] = [
  {
    q: "1. What is Rann Utsav?",
    a: "Rann Utsav is a celebrated seasonal cultural carnival held in Dhordo, Kutch, Gujarat, right at the edge of the White Rann. It brings together the region's vast landscape, authentic handicrafts, Gujarati cuisine, folk dance, and music."
  },
  {
    q: "2. When is Rann Utsav 2026–27?",
    a: "Rann Utsav 2026–27 runs from 1 November 2026 to 7 March 2027. Full moon nights and holiday weekends are the most popular travel dates."
  },
  {
    q: "3. How many days are enough for Rann Utsav?",
    a: "A 3 Nights / 4 Days itinerary is the most recommended duration. It allows ample time to enjoy the White Rann sunset, Tent City cultural events, Kala Dungar peak, Mandvi beach, and local craft villages without rushing."
  },
  {
    q: "4. How much does a Rann Utsav package cost?",
    a: "Packages vary based on tent category (Deluxe, Premium, or Super Premium), number of nights, and travel dates. We provide transparent all-inclusive quotes covering accommodation, all meals, Bhuj transfers, and guided sightseeing."
  },
  {
    q: "5. What is included in the Rann Utsav package?",
    a: "Packages include luxury AC Tent accommodation at Dhordo, to-and-fro AC coach transfers from Bhuj Airport/Station, all buffet meals (breakfast, lunch, high tea, dinner), guided tours to the White Desert and Kala Dungar, and festival passes."
  },
  {
    q: "6. Which tent category should I choose?",
    a: "Deluxe AC Tents offer fantastic comfort with attached bathrooms at a great value. Premium AC Tents feature larger spaces and porches, while Super Premium Suites provide top-tier luxury. For families, Deluxe or Premium offers the optimal balance."
  },
  {
    q: "7. Is Rann Utsav suitable for families and senior citizens?",
    a: "Yes! Dhordo Tent City is very well organized with internal golf carts, flat paved pathways, doctor-on-call, pure vegetarian multi-cuisine dining, and evening entertainment for all age groups."
  },
  {
    q: "8. What is the best time to visit Rann Utsav?",
    a: "November through February offers pleasant winter weather with warm sunny days (24°C–28°C) and cool, refreshing desert evenings (10°C–15°C). Full moon nights offer the legendary silver salt desert glow."
  },
  {
    q: "9. What should I pack for Rann Utsav?",
    a: "Pack comfortable cotton clothing and sunscreen for daytime sightseeing, plus light woolens, thermals, or jackets for the brisk evening desert breeze. Comfortable walking shoes are essential."
  },
  {
    q: "10. Can I get a hotel or resort outside the Tent City?",
    a: "Yes. In addition to official Tent City Dhordo packages, Sobhavi Holidays also arranges heritage resort stays in Hodka, traditional bhungas, and luxury hotels in Bhuj."
  },
  {
    q: "11. How can I book a customized Rann Utsav package?",
    a: "Simply share your details with our team. We check live tent inventory, coordinate flights/trains from your city, and provide a hassle-free, confirmed booking.",
    hasLink: true
  }
];

export default function RannUtsavPage() {
  const whatsappUrl = "https://wa.me/917406994752?text=Hello%20Sobhavi%20Holidays,%20I%20want%20to%20plan%20a%20Rann%20Utsav%20trip%20to%20Kutch.%20Please%20share%20tent%20availability%20and%20packages.";

  return (
    <RannUtsavMainClient
      activities={ACTIVITIES}
      faqs={FAQS}
      whatsappUrl={whatsappUrl}
    />
  );
}
