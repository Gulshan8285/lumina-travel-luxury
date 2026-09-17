export interface CityRoute {
  slug: string;
  cityName: string;
  state: string;
  category: 'South India' | 'West India';
  cityCode: string;
  image: string;
  heroTagline: string;
  metaTitle: string;
  metaDescription: string;
  flightRoute: string;
  trainRoute: string;
  transferDetails: string;
  durationOptions: {
    duration: string;
    badge?: string;
    desc: string;
  }[];
  highlights: string[];
  suggestedItinerary: {
    day: string;
    title: string;
    details: string;
  }[];
  startingPriceNote: string;
  faqs: {
    q: string;
    a: string;
  }[];
}

export const CITY_ROUTES: CityRoute[] = [
  {
    slug: 'bangalore-to-rann-utsav',
    cityName: 'Bangalore (Bengaluru)',
    state: 'Karnataka',
    category: 'South India',
    cityCode: 'BLR',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1200&auto=format&fit=crop',
    heroTagline: 'Fly BLR to Ahmedabad or Bhuj + Luxury Tent City Dhordo Package',
    metaTitle: 'Bangalore to Rann Utsav Packages 2026–2027 | Sobhavi Holidays',
    metaDescription: 'Book all-inclusive Bangalore to Rann Utsav Kutch tour packages. Flights from BLR, Bhuj transfers, Tent City Dhordo stays, White Desert full moon tours & Kutchi culture.',
    flightRoute: 'Direct flights from Bengaluru (BLR) to Ahmedabad (approx 2 hrs 10 mins), followed by the scenic Vande Bharat / AC Superfast Express to Bhuj, or connecting flights directly into Bhuj Airport (BHJ).',
    trainRoute: 'Yesvantpur/Bengaluru Gandhidham Express or superfast rail via Vadodara/Ahmedabad connecting to the Bhuj AC Express.',
    transferDetails: 'Complimentary AC Volvo coach transfers from Bhuj Airport and Railway Station directly to Dhordo Tent City (85 km, 1.5 hours) with refreshments en route.',
    durationOptions: [
      { duration: '2 Nights / 3 Days', desc: 'Ideal weekend getaway covering Dhordo White Rann sunset, cultural folk night, and Kala Dungar panoramic peak.' },
      { duration: '3 Nights / 4 Days', badge: 'Most Recommended', desc: 'The perfect balanced holiday: White Rann, Kala Dungar, Mandvi Beach, historic Vijay Vilas Palace, and handicraft artisan villages.' },
      { duration: '4 Nights / 5 Days', desc: 'Extended expedition adding UNESCO World Heritage site Dholavira and the breathtaking Road to Heaven drive.' }
    ],
    highlights: [
      'Sunset & moonlit walk on the endless white salt expanse of Dhordo',
      'Luxury AC Tent City accommodation with all Kutchi buffet meals included',
      'Visit Kala Dungar (Black Hill) for the 360-degree desert horizon view',
      'Authentic artisan village tours: Rogan art, Ajrakh block printing, mirror embroidery',
      'Mandvi Arabian sea beach & Vijay Vilas heritage palace'
    ],
    suggestedItinerary: [
      { day: 'Day 1', title: 'BLR Flight to Bhuj / Ahmedabad & Tent City Check-in', details: 'Arrive at Bhuj via flight/train. Board the luxury AC coach to Tent City Dhordo. Welcome with traditional Kutchi Dhol and garba. Evening high tea followed by sunset excursion to the surreal White Rann. Grand Gujarati dinner and live cultural performances.' },
      { day: 'Day 2', title: 'Kala Dungar & Gandhi Nu Gaam Handicrafts', details: 'Morning tea and lavish breakfast. Excursion to Kala Dungar (highest point in Kutch) and the sacred Dattatreya Temple. On the way back, visit Gandhi Nu Gaam craft village to meet local Kutchi artisans. Evening stargazing and night camel cart ride on the white desert.' },
      { day: 'Day 3', title: 'Royal Bhuj Sightseeing or Mandvi Beach Coastal Day', details: 'Visit Mandvi Palace, shipbuilding yards, and sunset at Mandvi beach (for 3N+ guests) or take an exploratory city tour of Bhuj: Aina Mahal, Prag Mahal, and Swaminarayan Temple.' },
      { day: 'Day 4', title: 'Farewell Kutch & Return Flight to Bangalore', details: 'Leisurely breakfast at Tent City. Check-out and transfer by AC coach to Bhuj Airport / Railway station. Board your flight back to Bengaluru with unforgettable desert memories.' }
    ],
    startingPriceNote: 'Custom packages available from Deluxe AC to VIP Darbari Suites with optional flight assistance.',
    faqs: [
      { q: 'What is the fastest way to travel from Bangalore to Rann Utsav?', a: 'The most convenient route is a direct flight from Kempegowda International Airport (BLR) to Sardar Vallabhbhai Patel Airport in Ahmedabad (2 hrs 10 mins), followed by the morning Vande Bharat train or flight to Bhuj, where our luxury AC coach picks you up.' },
      { q: 'Are airport transfers from Bhuj included in the package?', a: 'Yes! All our Rann Utsav packages include complimentary scheduled AC coach transfers between Bhuj Airport / Railway Station and Tent City Dhordo with refreshments.' },
      { q: 'Which month is best to visit Rann Utsav from Bangalore?', a: 'November to February is the most pleasant time with daytime temperatures around 25°C–28°C and crisp, cool evenings (12°C–16°C). December and January full moon dates sell out fastest.' },
      { q: 'Can Sobhavi Holidays book flights from Bangalore to Bhuj/Ahmedabad?', a: 'Yes, our travel specialists can bundle your domestic flights from Bangalore with your luxury tent accommodation, transfers, and sightseeing for a hassle-free vacation.' }
    ]
  },
  {
    slug: 'hyderabad-to-rann-utsav',
    cityName: 'Hyderabad',
    state: 'Telangana',
    category: 'South India',
    cityCode: 'HYD',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200&auto=format&fit=crop',
    heroTagline: 'Seamless Flights from HYD to Gujarat + White Rann Luxury Tent Stay',
    metaTitle: 'Hyderabad to Rann Utsav Tour Packages 2026–2027 | Sobhavi Holidays',
    metaDescription: 'Plan your trip from Hyderabad to Rann Utsav Kutch. Flights from Rajiv Gandhi International Airport, Bhuj transfers, Tent City Dhordo luxury stay & cultural tours.',
    flightRoute: 'Direct and 1-stop flights from Hyderabad (HYD) to Ahmedabad (1 hr 45 mins) with convenient connecting trains or direct connecting flights to Bhuj Airport.',
    trainRoute: 'Kacheguda/Secunderabad to Rajkot/Gandhidham Express or superfast train connections via Ahmedabad.',
    transferDetails: 'Scheduled AC coach pickups from Bhuj Railway Station & Bhuj Airport directly to your Dhordo tent with complimentary snacks.',
    durationOptions: [
      { duration: '2 Nights / 3 Days', desc: 'Compact weekend trip covering the White Rann sunset, Dhordo cultural nights, and Kala Dungar.' },
      { duration: '3 Nights / 4 Days', badge: 'Most Popular', desc: 'Balanced vacation with White Desert, Black Hill, Mandvi Palace & coastal beach, plus artisan shopping.' },
      { duration: '4 Nights / 5 Days', desc: 'Full Kutch immersion featuring UNESCO Dholavira and the scenic Road to Heaven drive.' }
    ],
    highlights: [
      'Mesmerizing full moon walks across the Great Rann salt expanse',
      'Authentic Gujarati and Kutchi buffet dining in the grand Tent City dining hall',
      'Excursion to Kala Dungar for panoramic views of the Indo-Pak desert border',
      'Interactive shopping at Dhordo haat for Ajrakh shawls, Rogan art, and bandhani',
      'Bhuj heritage monuments: Aina Mahal, Prag Mahal, and Kutch Museum'
    ],
    suggestedItinerary: [
      { day: 'Day 1', title: 'HYD Flight to Bhuj / Ahmedabad & Grand Dhordo Welcome', details: 'Fly from Hyderabad to Ahmedabad/Bhuj. Scenic coach drive across the Kutch landscape to Tent City Dhordo. Traditional folk welcome, lunch, and sunset excursion to the White Desert. Evening Gujarati thali dinner.' },
      { day: 'Day 2', title: 'Sunrise on Salt Desert, Kala Dungar & Craft Villages', details: 'Optional early sunrise on the white flats. Post breakfast, head to Kala Dungar and Gandhi Nu Gaam village. Evening folk dance performances at Tent City.' },
      { day: 'Day 3', title: 'Mandvi Beach Coastal Tour or Road to Heaven', details: 'Full day excursion to Mandvi beach, Vijay Vilas Palace, and 400-year-old shipbuilding yards, or explore the cinematic Road to Heaven highway.' },
      { day: 'Day 4', title: 'Bhuj Heritage & Return Flight to Hyderabad', details: 'Check out and transfer to Bhuj. Short heritage tour of Prag Mahal and local markets before boarding your flight back to Hyderabad.' }
    ],
    startingPriceNote: 'All-inclusive packages covering tent stay, buffet meals, sightseeing, and Bhuj transfers.',
    faqs: [
      { q: 'How do I reach Rann Utsav from Hyderabad?', a: 'Take a direct flight from Hyderabad (HYD) to Ahmedabad (1 hr 45 mins). From Ahmedabad, take the morning Vande Bharat or express train to Bhuj, where our official Tent City AC coach meets you.' },
      { q: 'Is food suitable for South Indian guests?', a: 'Yes! Tent City Dhordo offers expansive multi-cuisine buffets with pure vegetarian Gujarati, North Indian, Jain, and continental selections catering comfortably to all dietary preferences.' },
      { q: 'Can we experience full moon night at White Rann?', a: 'Yes! Full moon nights are magical when the white salt desert glows silver. Be sure to book at least 45–60 days in advance as full moon tents sell out rapidly.' }
    ]
  },
  {
    slug: 'chennai-to-rann-utsav',
    cityName: 'Chennai',
    state: 'Tamil Nadu',
    category: 'South India',
    cityCode: 'MAA',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
    heroTagline: 'Curated Flights from Chennai to Gujarat + Royal Kutch Desert Expedition',
    metaTitle: 'Chennai to Rann Utsav Packages 2026–2027 | Sobhavi Holidays',
    metaDescription: 'Bespoke Chennai to Rann Utsav Kutch holiday packages. Flights from MAA, luxury Tent City Dhordo accommodation, Bhuj pickups, full moon desert walks & artisan tours.',
    flightRoute: 'Daily direct and connecting flights from Chennai (MAA) to Ahmedabad (approx 2 hrs 25 mins) or seamless connections into Bhuj Airport.',
    trainRoute: 'Navjeevan Express or Chennai Central to Ahmedabad Express connecting onward to Bhuj.',
    transferDetails: 'Hassle-free AC Volvo coach transfer from Bhuj Railway Station/Airport directly to your Dhordo tent.',
    durationOptions: [
      { duration: '3 Nights / 4 Days', badge: 'Best for South Travelers', desc: 'Covers the White Rann, Kala Dungar, Mandvi Beach & Palaces, and craft villages with ample relaxation.' },
      { duration: '4 Nights / 5 Days', desc: 'Adds Dholavira Harappan civilization ruins and the world-famous Road to Heaven highway.' }
    ],
    highlights: [
      'Gleaming white salt desert walks during sunset and moonrise',
      'Stay in air-conditioned luxury tents with cozy verandas and modern private baths',
      'Sightseeing at Kala Dungar, Dattatreya Temple, and Gandhi nu Gaam artisans',
      'Coastal day at Mandvi Arabian Sea beach & royal Vijay Vilas Palace',
      'All meals included with warm Gujarati hospitality and nightly folk concerts'
    ],
    suggestedItinerary: [
      { day: 'Day 1', title: 'Chennai to Bhuj / Ahmedabad & Welcome to Tent City', details: 'Morning flight from Chennai to Ahmedabad/Bhuj. Transfer to Dhordo via luxury coach. Check-in, high tea, and sunset on the White Rann.' },
      { day: 'Day 2', title: 'Kala Dungar & Handicraft Heritage Trail', details: 'Visit Kala Dungar for panoramic desert views and artisan clusters renowned for mirror embroidery and copper bell crafting.' },
      { day: 'Day 3', title: 'Mandvi Coastal Excursion & Royal Palaces', details: 'Explore Mandvi beach, Vijay Vilas Palace, and Kutch Museum in Bhuj.' },
      { day: 'Day 4', title: 'Bhuj Heritage Exploration & Return to Chennai', details: 'Morning transfer to Bhuj, explore local bazaars, and take evening flight back to Chennai.' }
    ],
    startingPriceNote: 'Complete tour packages with Tent City Dhordo accommodation, transfers, and guide support.',
    faqs: [
      { q: 'How far is Rann of Kutch from Chennai?', a: 'By flight, Chennai to Ahmedabad takes about 2.5 hours, followed by a short connecting flight or scenic train/coach ride to Bhuj.' },
      { q: 'What is the climate like at Rann Utsav during winter?', a: 'Winter days are sunny and comfortable (24°C–27°C) while evenings and nights turn chilly (10°C–14°C). Carrying light woolens and jackets is recommended.' }
    ]
  },
  {
    slug: 'kochi-to-rann-utsav',
    cityName: 'Kochi (Cochin)',
    state: 'Kerala',
    category: 'South India',
    cityCode: 'COK',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop',
    heroTagline: 'From Coastal Kerala to the White Desert of Kutch',
    metaTitle: 'Kochi to Rann Utsav Tour Packages 2026–2027 | Sobhavi Holidays',
    metaDescription: 'Book Kochi to Rann Utsav holiday packages. Convenient flights from COK, Bhuj transfers, Tent City luxury stays, and Kutchi desert culture.',
    flightRoute: 'Connecting flights from Cochin International Airport (COK) via Mumbai or Bengaluru into Ahmedabad or Bhuj Airport.',
    trainRoute: 'Ernakulam–Okha/Gandhidham Express or train connections via Mumbai/Vadodara to Bhuj.',
    transferDetails: 'Scheduled AC coach transfer between Bhuj and Dhordo Tent City included with snacks en route.',
    durationOptions: [
      { duration: '3 Nights / 4 Days', badge: 'Recommended', desc: 'Complete Rann experience: White Desert, Kala Dungar, Mandvi seaside, and handicraft villages.' },
      { duration: '4 Nights / 5 Days', desc: 'Extended trip including Dholavira UNESCO ruins and the Road to Heaven highway.' }
    ],
    highlights: [
      'Experience the stark contrast from lush Kerala backwaters to the surreal white salt desert',
      'Stay in plush AC Tents at Dhordo with all Gujarati, Jain & multi-cuisine meals',
      'Witness stunning desert sunsets and starry night skies with Kutchi music',
      'Visit Kala Dungar, Mandvi Beach & royal Vijay Vilas palace',
      'Artisan workshops: Rogan art in Nirona & Ajrakh block printing'
    ],
    suggestedItinerary: [
      { day: 'Day 1', title: 'Fly COK to Bhuj / Ahmedabad & Check-in at Tent City', details: 'Flight from Kochi to Ahmedabad/Bhuj. Coach transfer to Dhordo, traditional welcome, and evening White Rann sunset.' },
      { day: 'Day 2', title: 'Kala Dungar Horizon & Village Art Exploration', details: 'Panoramic desert views from Kala Dungar, followed by shopping for authentic Kutchi textiles in artisan villages.' },
      { day: 'Day 3', title: 'Mandvi Beach & Royal Palaces', details: 'Explore Mandvi coastal town, Vijay Vilas palace, and local seafood/Gujarati cuisine.' },
      { day: 'Day 4', title: 'Transfer to Bhuj & Return Flight to Kochi', details: 'Coach transfer to Bhuj airport/station for your return journey to Kerala.' }
    ],
    startingPriceNote: 'Bespoke packages from Kerala with full assistance on flights, stays, and transfers.',
    faqs: [
      { q: 'How many days are needed from Kochi for Rann Utsav?', a: 'A 3 Nights / 4 Days package is ideal to account for travel time from Kerala and enjoy the White Rann without rushing.' },
      { q: 'Is vegetarian food mandatory at Tent City?', a: 'Tent City Dhordo serves exclusively vegetarian food (including Jain options) prepared fresh with authentic Gujarati, Kathiyawadi, and North Indian flavors.' }
    ]
  },
  {
    slug: 'coimbatore-to-rann-utsav',
    cityName: 'Coimbatore',
    state: 'Tamil Nadu',
    category: 'South India',
    cityCode: 'CJB',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    heroTagline: 'Flight Connections from Coimbatore to Ahmedabad + Luxury Kutch Tour',
    metaTitle: 'Coimbatore to Rann Utsav Packages 2026–2027 | Sobhavi Holidays',
    metaDescription: 'Plan your holiday from Coimbatore to Rann Utsav. Flights from CJB, luxury AC tents at Dhordo, Bhuj station pickups, and curated Kutch sightseeing.',
    flightRoute: 'Flights from Coimbatore (CJB) via Bengaluru or Mumbai to Ahmedabad (approx 3 hrs transit) and onward to Bhuj.',
    trainRoute: 'Coimbatore to Ahmedabad Express (via Konkan/Pune) or connecting superfast rail to Bhuj.',
    transferDetails: 'Complimentary AC Volvo coach from Bhuj Airport/Station directly to Tent City Dhordo.',
    durationOptions: [
      { duration: '3 Nights / 4 Days', badge: 'Recommended', desc: 'Optimal duration for South Indian travelers covering White Rann, Kala Dungar, Mandvi, and Bhuj.' },
      { duration: '4 Nights / 5 Days', desc: 'Adds Dholavira Harappan archaeological site and Road to Heaven.' }
    ],
    highlights: [
      'Sunset and full moon night on the gleaming White Rann',
      'Premium Tent City Dhordo stay with attached private bathrooms and heating/AC',
      'Artisan trail visiting master craftsmen of Rogan painting and Ajrakhpur',
      'Panoramic 360-degree desert vistas from Kala Dungar peak'
    ],
    suggestedItinerary: [
      { day: 'Day 1', title: 'CJB to Bhuj & Tent City Dhordo Check-in', details: 'Fly from Coimbatore. Arrive in Bhuj, coach transfer to Dhordo, check into your luxury tent, and head out for White Rann sunset.' },
      { day: 'Day 2', title: 'Kala Dungar & Handicraft Villages', details: 'Morning at the desert, excursion to Black Hill, and explore Gandhi Nu Gaam.' },
      { day: 'Day 3', title: 'Mandvi Seaside & Heritage Palaces', details: 'Spend the day visiting Vijay Vilas Palace and Mandvi coastal beach.' },
      { day: 'Day 4', title: 'Bhuj Heritage & Return Flight to Coimbatore', details: 'Visit Prag Mahal in Bhuj and return home with timeless memories.' }
    ],
    startingPriceNote: 'Transparent pricing with all meals, transfers, and festival permits included.',
    faqs: [
      { q: 'Can we visit both White Desert and Mandvi Beach in one trip?', a: 'Yes! Our 3 Nights / 4 Days package includes full-day sightseeing to Mandvi Beach and Vijay Vilas Palace.' }
    ]
  },
  {
    slug: 'mysore-to-rann-utsav',
    cityName: 'Mysore (Mysuru)',
    state: 'Karnataka',
    category: 'South India',
    cityCode: 'MYQ',
    image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=1200&auto=format&fit=crop',
    heroTagline: 'From the City of Palaces to the White Salt Desert of Kutch',
    metaTitle: 'Mysore to Rann Utsav Tour Packages 2026–2027 | Sobhavi Holidays',
    metaDescription: 'Mysore to Rann Utsav tour packages. Fly via BLR to Ahmedabad/Bhuj, luxury Tent City Dhordo stay, meals, and cultural sightseeing.',
    flightRoute: 'Easy road or Vande Bharat transit from Mysore to Bengaluru (BLR) Airport, followed by flights to Ahmedabad or Bhuj.',
    trainRoute: 'Mysuru–Varanasi / Bengaluru–Gandhidham trains connecting through Western railway hubs.',
    transferDetails: 'Scheduled AC coach pickup from Bhuj to Tent City Dhordo with refreshments.',
    durationOptions: [
      { duration: '3 Nights / 4 Days', badge: 'Recommended', desc: 'Comprehensive package with White Rann, Kala Dungar, Mandvi Beach & artisan villages.' },
      { duration: '2 Nights / 3 Days', desc: 'Quick weekend escape focused on Tent City and the White Desert.' }
    ],
    highlights: [
      'Stroll across the sparkling white salt plains at twilight',
      'Comfortable luxury tents with modern amenities and Gujarati dining',
      'Folk music concerts, garba nights, and camel cart desert safaris'
    ],
    suggestedItinerary: [
      { day: 'Day 1', title: 'Mysore to Bhuj & Arrival at Dhordo', details: 'Travel from Mysore via BLR. Coach transfer to Tent City Dhordo and sunset at White Rann.' },
      { day: 'Day 2', title: 'Kala Dungar & Artisan Craft Trail', details: 'Black Hill viewpoint and exploration of traditional Kutchi art villages.' },
      { day: 'Day 3', title: 'Mandvi Beach & Bhuj Heritage', details: 'Vijay Vilas Palace and seaside stroll before heading into Bhuj.' },
      { day: 'Day 4', title: 'Departure for Mysore', details: 'Transfer to Bhuj airport/station for your return trip.' }
    ],
    startingPriceNote: 'Complete tour packages with luxury stay and guided transfers.',
    faqs: [
      { q: 'How should Mysore travelers plan travel to Rann Utsav?', a: 'Most travelers take the morning Vande Bharat or taxi from Mysore to Bengaluru Airport (BLR), fly to Ahmedabad/Bhuj, and join our scheduled Tent City coach.' }
    ]
  },
  {
    slug: 'pune-to-rann-utsav',
    cityName: 'Pune',
    state: 'Maharashtra',
    category: 'West India',
    cityCode: 'PNQ',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1200&auto=format&fit=crop',
    heroTagline: 'Convenient Flights & Trains from Pune to Bhuj + Tent City Dhordo Package',
    metaTitle: 'Pune to Rann Utsav Packages 2026–2027 | Sobhavi Holidays',
    metaDescription: 'Book Pune to Rann Utsav tour packages. Direct trains & flights from Pune, luxury Dhordo Tent City stays, White Desert full moon tours & Bhuj transfers.',
    flightRoute: 'Direct and 1-stop flights from Pune (PNQ) to Ahmedabad (approx 1 hr 15 mins) with quick train or coach connection to Bhuj, or direct flights to Bhuj Airport.',
    trainRoute: 'Pune–Bhuj Express (direct train from Pune Junction to Bhuj) or Pune–Ahmedabad Duronto / Vande Bharat.',
    transferDetails: 'Scheduled AC coach pickup from Bhuj Railway Station & Airport directly to Tent City Dhordo.',
    durationOptions: [
      { duration: '2 Nights / 3 Days', desc: 'Popular weekend getaway for Punekars covering White Rann and Kala Dungar.' },
      { duration: '3 Nights / 4 Days', badge: 'Most Popular', desc: 'Complete circuit with Mandvi Beach, Vijay Vilas Palace, and craft villages.' },
      { duration: '4 Nights / 5 Days', desc: 'Grand circuit adding UNESCO Dholavira and the Road to Heaven highway.' }
    ],
    highlights: [
      'Direct rail and flight connectivity from Pune making travel effortless',
      'Walk on the sparkling white desert during sunset and under starry skies',
      'Stay in plush AC Tents at Dhordo Tent City with all meals and cultural shows',
      'Explore Kala Dungar (Black Hill) and panoramic Rann viewpoints',
      'Shop authentic Kutchi mirror embroidery, leather crafts, and Rogan art'
    ],
    suggestedItinerary: [
      { day: 'Day 1', title: 'Pune to Bhuj & Dhordo Tent City Welcome', details: 'Arrive in Bhuj via Pune–Bhuj Express or flight via Ahmedabad. AC coach transfer to Dhordo. Check-in, high tea, and sunset on the White Rann.' },
      { day: 'Day 2', title: 'Kala Dungar & Traditional Artisan Villages', details: 'Excursion to Kala Dungar peak, Gandhi Nu Gaam craft village, and evening Kutchi folk performances.' },
      { day: 'Day 3', title: 'Mandvi Seaside & Heritage Palaces', details: 'Full day excursion to Mandvi beach, Vijay Vilas Palace, and Kutch Museum in Bhuj.' },
      { day: 'Day 4', title: 'Bhuj Heritage Shopping & Return to Pune', details: 'Explore Bhuj markets for bandhani and silver jewellery before boarding your train/flight back to Pune.' }
    ],
    startingPriceNote: 'Exciting weekend and full moon packages with direct train/flight coordination.',
    faqs: [
      { q: 'Is there a direct train from Pune to Bhuj?', a: 'Yes! The Pune–Bhuj Express runs directly connecting Pune Junction with Bhuj, making it one of the most cost-effective and comfortable travel options.' },
      { q: 'Can we travel over a weekend from Pune?', a: 'Absolutely! Our 2 Nights / 3 Days package is tailored specifically for weekend getaways with Friday departure and Monday morning return.' }
    ]
  },
  {
    slug: 'mumbai-to-rann-utsav',
    cityName: 'Mumbai',
    state: 'Maharashtra',
    category: 'West India',
    cityCode: 'BOM',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200&auto=format&fit=crop',
    heroTagline: 'Quickest Transit from Mumbai to Bhuj + Premium Dhordo Tent Experience',
    metaTitle: 'Mumbai to Rann Utsav Tour Packages 2026–2027 | Sobhavi Holidays',
    metaDescription: 'Exclusive Mumbai to Rann Utsav Kutch packages. Direct flights & overnight trains from Mumbai to Bhuj, luxury Tent City Dhordo accommodation, meals & sightseeing.',
    flightRoute: 'Non-stop flights from Mumbai (BOM) to Bhuj Airport (BHJ) in just 1 hr 15 mins, or frequent flights to Ahmedabad with Vande Bharat connection.',
    trainRoute: 'Overnight trains like Kutch Express, Sayajinagari Express, and Bhuj AC Superfast Express departing Mumbai Central / Bandra Terminus directly to Bhuj.',
    transferDetails: 'Complimentary AC Volvo transfers between Bhuj Airport / Railway Station and Tent City Dhordo with refreshments.',
    durationOptions: [
      { duration: '2 Nights / 3 Days', badge: 'Weekend Favorite', desc: 'Take a Friday evening train or Saturday flight for a quick rejuvenation at the White Rann.' },
      { duration: '3 Nights / 4 Days', desc: 'The comprehensive holiday covering White Rann, Kala Dungar, Mandvi Beach & Palaces.' },
      { duration: '4 Nights / 5 Days', desc: 'Adds Dholavira UNESCO archaeological excavations and the Road to Heaven highway.' }
    ],
    highlights: [
      'Direct non-stop flight (1 hr 15 mins) or convenient overnight sleeper trains from Mumbai',
      'Breathtaking sunsets on the endless white salt desert of Kutch',
      'All-inclusive stay in luxury AC Tents with authentic Gujarati and Kathiyawadi cuisine',
      'Excursions to Kala Dungar, Gandhi Nu Gaam, Mandvi Beach & Vijay Vilas Palace',
      'Nightly folk concerts, stargazing, and vibrant shopping bazaars'
    ],
    suggestedItinerary: [
      { day: 'Day 1', title: 'Mumbai to Bhuj & Royal Welcome at Tent City Dhordo', details: 'Morning flight or arrival by Kutch Express. Luxury AC coach transfer to Dhordo. Welcome with Kutchi dhol, buffet lunch, and afternoon rest. Sunset visit to the Great White Rann. Grand dinner and live cultural performances.' },
      { day: 'Day 2', title: 'Kala Dungar Panoramic Peak & Artisan Craft Villages', details: 'Breakfast at Tent City. Excursion to Kala Dungar (Black Hill) and Gandhi Nu Gaam. Evening tea, stargazing, and cultural folk music.' },
      { day: 'Day 3', title: 'Mandvi Beach Coastal Excursion or Bhuj Heritage', details: 'Visit the coastal town of Mandvi, Vijay Vilas Palace, and 400-year-old wooden shipbuilding yards, or explore Prag Mahal and Aina Mahal in Bhuj.' },
      { day: 'Day 4', title: 'Farewell Kutch & Return Journey to Mumbai', details: 'Leisurely breakfast, transfer to Bhuj airport or railway station for your flight or evening train back to Mumbai.' }
    ],
    startingPriceNote: 'Best price guarantee on official Tent City Dhordo packages with flight/train assistance.',
    faqs: [
      { q: 'How long does it take to reach Rann Utsav from Mumbai?', a: 'Non-stop flights from Mumbai (BOM) to Bhuj (BHJ) take only 1 hour and 15 minutes! From Bhuj, our AC coach reaches Tent City Dhordo in 1.5 hours.' },
      { q: 'Which train is best from Mumbai to Bhuj?', a: 'The Kutch Express (leaving Bandra Terminus in the evening and reaching Bhuj next morning) and the Bhuj AC Superfast Express are the top traveler choices.' },
      { q: 'Can we do a short 2 Nights / 3 Days trip from Mumbai?', a: 'Yes, 2N/3D is the most popular duration for Mumbai travelers and gives you plenty of time to enjoy the White Rann, cultural nights, and Kala Dungar.' }
    ]
  },
  {
    slug: 'goa-to-rann-utsav',
    cityName: 'Goa',
    state: 'Goa',
    category: 'West India',
    cityCode: 'GOI/GOX',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop',
    heroTagline: 'From Golden Goa Beaches to the Ethereal White Desert of Kutch',
    metaTitle: 'Goa to Rann Utsav Tour Packages 2026–2027 | Sobhavi Holidays',
    metaDescription: 'Goa to Rann Utsav holiday packages. Convenient flights from GOI/GOX to Gujarat, luxury Tent City Dhordo stays, Bhuj transfers & desert safaris.',
    flightRoute: 'Direct and connecting flights from Goa (GOI / GOX) to Ahmedabad (approx 1 hr 45 mins) and onward connectivity to Bhuj.',
    trainRoute: 'Konkan Railway express trains to Ahmedabad/Vadodara connecting onward to Bhuj.',
    transferDetails: 'Scheduled AC Volvo coach pickup from Bhuj Airport/Station directly to Tent City Dhordo.',
    durationOptions: [
      { duration: '3 Nights / 4 Days', badge: 'Recommended', desc: 'The classic Kutch holiday: White Rann, Kala Dungar, Mandvi Beach & royal palaces.' },
      { duration: '4 Nights / 5 Days', desc: 'Adds Dholavira Harappan site and the famous Road to Heaven drive.' }
    ],
    highlights: [
      'Stark landscape transformation from tropical sandy shores to infinite white salt plains',
      'Luxury air-conditioned tent accommodations with all meals and cultural programs',
      'Full moon and sunset walks on the Great Rann of Kutch',
      'Artisan craft tours for Rogan painting, copper bells, and Ajrakh shawls'
    ],
    suggestedItinerary: [
      { day: 'Day 1', title: 'Fly Goa to Bhuj / Ahmedabad & Dhordo Welcome', details: 'Flight from Goa to Ahmedabad/Bhuj. Transfer to Dhordo via luxury coach. Sunset at White Rann and cultural folk entertainment.' },
      { day: 'Day 2', title: 'Kala Dungar & Handicraft Villages', details: 'Visit the highest point in Kutch, explore artisan villages, and shop for authentic Kutchi crafts.' },
      { day: 'Day 3', title: 'Mandvi Coastal Tour & Bhuj Heritage', details: 'Explore Vijay Vilas Palace, Mandvi seaside, and Prag Mahal in Bhuj.' },
      { day: 'Day 4', title: 'Return Journey to Goa', details: 'Transfer to Bhuj airport for your return flight back to Goa.' }
    ],
    startingPriceNote: 'All-inclusive packages with transfers, luxury stay, and sightseeing.',
    faqs: [
      { q: 'How to travel from Goa to Rann Utsav?', a: 'Take a direct flight from Goa (GOI/GOX) to Ahmedabad (1 hr 45 mins), then catch the train or short flight to Bhuj where our Tent City coach will receive you.' }
    ]
  },
  {
    slug: 'kerala-to-rann-utsav',
    cityName: 'Kerala (All Hubs)',
    state: 'Kerala',
    category: 'South India',
    cityCode: 'TRV/COK',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop',
    heroTagline: 'Statewide Kerala Packages to the Magical White Desert of Kutch',
    metaTitle: 'Kerala to Rann Utsav Tour Packages 2026–2027 | Sobhavi Holidays',
    metaDescription: 'Complete Kerala to Rann Utsav Kutch packages. Flight departures from Kochi, Trivandrum & Calicut, luxury Dhordo Tent City stay, Bhuj transfers & meals.',
    flightRoute: 'Connecting flights from Kochi (COK), Thiruvananthapuram (TRV), and Kozhikode (CCJ) via Mumbai/Bengaluru to Ahmedabad or Bhuj Airport.',
    trainRoute: 'Kochuveli/Trivandrum–Gandhidham Express or superfast Western railway trains.',
    transferDetails: 'Scheduled AC coach pickup from Bhuj to Tent City Dhordo with refreshments.',
    durationOptions: [
      { duration: '3 Nights / 4 Days', badge: 'Recommended', desc: 'White Rann sunset & full moon, Kala Dungar, Mandvi Beach & Palaces, and artisan villages.' },
      { duration: '4 Nights / 5 Days', desc: 'Adds Dholavira UNESCO ruins and the scenic Road to Heaven highway.' }
    ],
    highlights: [
      'Stunning geographical contrast from God’s Own Country to the White Salt Desert',
      'Stay in luxury AC Tents at Dhordo with all meals, high tea, and folk performances',
      'Sunset & moonlit strolls on the sparkling salt flats',
      'Artisan trail visiting master craftsmen of Rogan art, copper bells, and Ajrakh prints'
    ],
    suggestedItinerary: [
      { day: 'Day 1', title: 'Fly from Kerala to Bhuj & Tent City Check-in', details: 'Depart from Kochi or Trivandrum. Arrive in Bhuj, board our AC coach to Dhordo, and enjoy your first sunset on the White Rann.' },
      { day: 'Day 2', title: 'Kala Dungar & Handicraft Heritage', details: 'Visit Kala Dungar peak and Gandhi Nu Gaam craft village. Stargazing at night.' },
      { day: 'Day 3', title: 'Mandvi Beach & Royal Palaces', details: 'Explore Vijay Vilas Palace and Mandvi coastal heritage.' },
      { day: 'Day 4', title: 'Return Flight to Kerala', details: 'Coach transfer to Bhuj airport for your return flight back to Kerala.' }
    ],
    startingPriceNote: 'Custom packages from Kochi, Trivandrum, or Calicut with flight ticketing support.',
    faqs: [
      { q: 'Can we book flights from Trivandrum or Calicut as well?', a: 'Yes, our travel specialists can arrange flight connections from any airport in Kerala bundled with your Rann Utsav package.' }
    ]
  },
  {
    slug: 'kanyakumari-to-rann-utsav',
    cityName: 'Kanyakumari',
    state: 'Tamil Nadu',
    category: 'South India',
    cityCode: 'CAPE',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    heroTagline: 'From India’s Southernmost Tip to the White Desert of the Far West',
    metaTitle: 'Kanyakumari to Rann Utsav Tour Packages 2026–2027 | Sobhavi Holidays',
    metaDescription: 'Kanyakumari to Rann Utsav tour packages. Convenient transit via Trivandrum (TRV), luxury Dhordo Tent City stays, Bhuj transfers, and full Kutch sightseeing.',
    flightRoute: 'Short transit to Trivandrum International Airport (TRV, 2 hrs from Kanyakumari), followed by flights via Mumbai/Bengaluru to Ahmedabad or Bhuj.',
    trainRoute: 'Kanyakumari to Gandhidham/Ahmedabad Express traversing the scenic Konkan & Western railway corridors.',
    transferDetails: 'Scheduled AC coach pickup from Bhuj Railway Station & Airport directly to Tent City Dhordo.',
    durationOptions: [
      { duration: '3 Nights / 4 Days', badge: 'Recommended', desc: 'White Rann, Kala Dungar panoramic viewpoint, Mandvi Beach & royal palaces.' },
      { duration: '4 Nights / 5 Days', desc: 'Adds Dholavira Harappan civilization ruins and the Road to Heaven highway.' }
    ],
    highlights: [
      'Epic journey connecting the Indian Ocean to the Great Rann of Kutch',
      'Luxury AC Tent City stay with traditional Kutchi hospitality and buffet meals',
      'Panoramic 360-degree desert horizon view from Kala Dungar (Black Hill)',
      'Rich artisan culture: Rogan painting, copper bells, and Ajrakh block printing'
    ],
    suggestedItinerary: [
      { day: 'Day 1', title: 'Transit to Bhuj & Tent City Dhordo Welcome', details: 'Fly from Trivandrum to Ahmedabad/Bhuj. AC coach transfer to Dhordo, traditional welcome, and evening sunset walk on White Rann.' },
      { day: 'Day 2', title: 'Kala Dungar & Artisan Craft Trail', details: 'Excursion to Kala Dungar peak, Gandhi Nu Gaam village, and evening folk concerts.' },
      { day: 'Day 3', title: 'Mandvi Beach & Royal Palaces', details: 'Full day excursion to Vijay Vilas Palace and Mandvi seaside.' },
      { day: 'Day 4', title: 'Departure for Kanyakumari', details: 'Transfer to Bhuj for your return train/flight.' }
    ],
    startingPriceNote: 'Complete tour packages with Tent City luxury stay and Bhuj transfers.',
    faqs: [
      { q: 'How do travelers from Kanyakumari reach Rann Utsav?', a: 'Most travelers take a taxi or train to Trivandrum Airport (TRV, just 85 km away) to catch flights to Ahmedabad/Bhuj.' }
    ]
  }
];

export function getAllCityRoutes(): CityRoute[] {
  return CITY_ROUTES;
}

export function getCityRouteBySlug(slug: string): CityRoute | undefined {
  return CITY_ROUTES.find(r => r.slug === slug);
}

export function getCityRoutesByCategory(category: 'South India' | 'West India'): CityRoute[] {
  return CITY_ROUTES.filter(r => r.category === category);
}
