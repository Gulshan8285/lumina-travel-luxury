export interface FamousPlace {
  name: string;
  tagline: string;
  image: string;
  highlights: string[];
}

export interface DestinationFaq {
  q: string;
  a: string;
}

export interface LeisureDestination {
  slug: string;
  name: string;
  category: 'domestic' | 'international';
  regionGroup: 'North & Himalayas' | 'South India' | 'West & Central' | 'East & Islands' | 'International';
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  famousPlaces: FamousPlace[];
  signatureExperiences: string[];
  hotels: string[];
  bestTime: string;
  duration: string;
  currency: string;
  editorialArticle: {
    title: string;
    intro: string;
    body: string[];
    quote: string;
    quoteAuthor: string;
  };
  faqs: DestinationFaq[];
}

export const LEISURE_DESTINATIONS: LeisureDestination[] = [
  // 1. RAJASTHAN
  {
    slug: "rajasthan",
    name: "Rajasthan",
    category: "domestic",
    regionGroup: "North & Himalayas",
    tagline: "Royal Palaces, Golden Forts & Thar Desert Glamping",
    description: "The land of Maharajas where sun-drenched desert citadels, romantic lake palaces, and private tiger sanctuaries come alive with regal hospitality.",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Jaipur", tagline: "The Pink City & Amber Fort", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop", highlights: ["Amber Fort private tour", "Hawa Mahal photo stop", "City Palace royal quarters"] },
      { name: "Udaipur", tagline: "City of Lakes & Floating Palaces", image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=800&auto=format&fit=crop", highlights: ["Lake Pichola sunset boat cruise", "Jag Mandir Island dinner", "City Palace museum"] },
      { name: "Jodhpur", tagline: "The Sun City & Blue Alleys", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop", highlights: ["Mehrangarh Fort zip-lining", "Umaid Bhawan Palace", "Old Blue City walking tour"] },
      { name: "Jaisalmer", tagline: "The Golden City & Thar Glamping", image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=800&auto=format&fit=crop", highlights: ["Sam Sand Dunes luxury tents", "Sunset camel safari", "Jaisalmer living fort"] },
      { name: "Pushkar", tagline: "Sacred Lake & Desert Culture", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop", highlights: ["Brahma Temple darshan", "Pushkar Lake 52 ghats", "Rose garden tours"] },
      { name: "Mount Abu", tagline: "Only Hill Station in the Aravallis", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Dilwara marble Jain temples", "Nakki Lake boat ride", "Sunset Point panoramic views"] },
      { name: "Ranthambore", tagline: "Royal Bengal Tiger Safaris", image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800&auto=format&fit=crop", highlights: ["Private Zone 1-5 Jeep safaris", "Ancient Ranthambore Fort", "Luxury jungle camp stays"] },
      { name: "Bikaner", tagline: "Desert Forts & Camel Country", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Junagarh Fort red sandstone art", "National Camel Breeding Farm", "Karni Mata Temple"] },
      { name: "Ajmer", tagline: "Sufi Pilgrimage & Historic Lakes", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop", highlights: ["Ajmer Sharif Dargah VIP entry", "Ana Sagar Lake stroll", "Adhai Din Ka Jhonpra"] },
      { name: "Chittorgarh", tagline: "Legend of Rajput Valour", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop", highlights: ["UNESCO Chittorgarh Fort", "Vijay Stambh (Tower of Victory)", "Padmini Palace gardens"] },
      { name: "Bundi", tagline: "Stepwells & Blue Fresco Palaces", image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop", highlights: ["Taragarh Fort fortress views", "Raniji ki Baori stepwell", "Garh Palace miniature frescoes"] }
    ],
    signatureExperiences: [
      "Private champagne boat cruise on Lake Pichola facing the City Palace",
      "Exclusive vintage royal car escort through Jaipur's heritage gates",
      "Private luxury desert glamping camp with folk dancers and stargazing at Sam Sand Dunes",
      "Dedicated morning and twilight tiger tracking Jeep safaris in Ranthambore with naturalist docents"
    ],
    hotels: ["Taj Lake Palace, Udaipur", "The Oberoi Udaivilas, Udaipur", "Rambagh Palace, Jaipur", "Umaid Bhawan Palace, Jodhpur", "Sujan The Serai, Jaisalmer"],
    bestTime: "October to March (Pleasant, sunny days and cool starlit nights)",
    duration: "7 to 12 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Rajasthan: The Pinnacle of Royal Heritage and Desert Splendor",
      intro: "Nowhere on earth does chivalry, pageantry, and architectural majesty coalesce like in Rajasthan. From the mirrored halls of Udaipur's waterfront citadels to the honey-gold sandstone ramparts rising from the Thar Desert, this is India at its most spellbinding.",
      body: [
        "To journey through Rajasthan with Sobhavi Travels is to live within the pages of royal history. Begin in Jaipur, where pink terracotta facades shelter bustling bazaars fragrant with marigolds and spice. Ascend Amber Fort in chauffeured style before private access to the City Palace's private Chandra Mahal.",
        "Further west, Jodhpur commands the horizon with Mehrangarh Fort towering above cobalt-washed alleyways. Continue into the shifting sands of Jaisalmer, sleeping beneath canopies of woven silk at a luxury private desert camp where night skies sparkle with unfiltered starlight.",
        "Conclude in romantic Udaipur, drifting across Lake Pichola on a private teak boat as palace chandeliers illuminate the water like floating constellations."
      ],
      quote: "Rajasthan is not merely a destination; it is an aristocratic state of mind where every palace threshold welcomes you as a guest of royalty.",
      quoteAuthor: "Maharaja Heritage Trust Guest Journal"
    },
    faqs: [
      { q: "What is the best time of year to visit Rajasthan for luxury travel?", a: "The prime season is October through March when daytime temperatures range from a pleasant 20°C to 26°C with crisp, starlit desert evenings. Winter also hosts colorful cultural celebrations including the Pushkar Camel Fair and Desert Festival." },
      { q: "How many days are ideal to experience Rajasthan's top cities?", a: "We recommend 8 to 10 days to comfortably cover the Golden Triangle (Jaipur, Jodhpur, Udaipur) without fatigue. For an extended itinerary adding Jaisalmer desert glamping and Ranthambore tiger safaris, 12 to 14 days is ideal." },
      { q: "Does Sobhavi Travels arrange private transfers between cities?", a: "Yes. Every guest is assigned a private sanitized luxury SUV (Toyota Innova Crysta, Fortuner, or BMW/Mercedes) with an experienced, English/Hindi-speaking chauffeur on call throughout the itinerary." },
      { q: "Can we stay in real royal heritage palaces?", a: "Absolutely. We hold direct partnerships with iconic palace hotels including Taj Lake Palace, Rambagh Palace, Umaid Bhawan Palace, and boutique restored Havelis where royal descendants still host evening receptions." }
    ]
  },

  // 2. KERALA
  {
    slug: "kerala",
    name: "Kerala",
    category: "domestic",
    regionGroup: "South India",
    tagline: "Emerald Backwaters, Misty Tea Slopes & Ayurvedic Luxury",
    description: "God's Own Country, where tranquil palm-fringed canals, emerald cardamom hills, and private beachfront cliff resorts offer pure sensory restoration.",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Kochi", tagline: "Colonial Port & Chinese Fishing Nets", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop", highlights: ["Fort Kochi heritage walk", "Mattancherry Palace frescoes", "Sunset Chinese fishing nets"] },
      { name: "Munnar", tagline: "Endless Tea Estates & Mist Peaks", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop", highlights: ["Kolukkumalai sunrise jeep drive", "Eravikulam Nilgiri Tahr safari", "Private tea tasting factory tours"] },
      { name: "Alleppey", tagline: "Venice of the East & Luxury Houseboats", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop", highlights: ["Overnight private air-conditioned houseboat", "Onboard chef-cooked seafood feast", "Vembanad Lake canal cruise"] },
      { name: "Thekkady", tagline: "Periyar Wildlife & Spice Plantations", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Periyar Lake boat safari", "Guided cardamom & vanilla estate tour", "Bamboo rafting expedition"] },
      { name: "Kumarakom", tagline: "Lake Resorts & Bird Sanctuary", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop", highlights: ["Vembanad lakeside luxury resorts", "Kumarakom Bird Sanctuary", "Sunset shikara rides"] },
      { name: "Wayanad", tagline: "Rainforest Waterfalls & Treehouses", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop", highlights: ["Edakkal prehistoric cave petroglyphs", "Banasura Sagar dam boating", "Chembra Peak heart-shaped lake"] },
      { name: "Varkala", tagline: "Red Laterite Cliffs & Mineral Springs", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Papanasam Beach cliff walks", "Natural spring bathing", "Bohemian oceanfront cafes"] },
      { name: "Kovalam", tagline: "Crescent Beaches & Iconic Lighthouse", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop", highlights: ["Lighthouse Beach panoramic view", "Authentic beachfront Ayurvedic clinics", "Hawa Beach catamaran sails"] },
      { name: "Trivandrum", tagline: "Royal Capital & Sree Padmanabhaswamy", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop", highlights: ["Padmanabhaswamy Temple darshan", "Napier Museum art collection", "Kuthiramalika Palace"] },
      { name: "Vagamon", tagline: "Pine Forests & Undiscovered Meadows", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Vagamon Pine Valley hike", "Kurisumala mountain ashram", "Marmala waterfalls off-road drive"] },
      { name: "Bekal", tagline: "Seaside Fortress & Coastal Luxury", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Keyhole-shaped Bekal Fort", "Pristine private North Kerala beaches", "Luxury villa resorts with plunge pools"] }
    ],
    signatureExperiences: [
      "Charter a private traditional Kettuvallam luxury houseboat with private chef, butler, and air-conditioned suites",
      "Authentic 7-day Ayurvedic panchakarma and rejuvenation rituals guided by senior Vaidyas",
      "Sunrise tea plucking and artisanal cupping with estate managers in Munnar's high-elevation slopes",
      "Private Kathakali dance and Kalaripayattu martial arts performance in a century-old heritage courtyard"
    ],
    hotels: ["Kumarakom Lake Resort", "The Leela Kovalam, a Raviz Hotel", "Brunton Boatyard, Fort Kochi", "Spice Village, Thekkady", "Taj Bekal Resort & Spa"],
    bestTime: "September to April (Lush green landscapes, sunny days and gentle ocean breezes)",
    duration: "6 to 10 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Kerala: Serenity Along the Backwaters and High Mist Valleys",
      intro: "Kerala moves to an ancient, unhurried rhythm. From the moment your private teak houseboat glides silently across lotus-filled canals to the aroma of freshly ground cardamom drifting down Munnar's mist-veiled hills, every breath brings a sense of effortless renewal.",
      body: [
        "Our bespoke Kerala journeys start in historic Fort Kochi, tracing Portuguese and Dutch spice docks before heading up into the Western Ghats. In Munnar, sleep in boutique plantation bungalows perched above clouds where morning walks are accompanied by tea masters.",
        "In the backwaters of Alleppey and Kumarakom, board your private floating sanctuary. Watch village life unfold along the banks as your personal chef serves Karimeen Pollichathu wrapped in banana leaves, accompanied by fresh coconut water and Kerala red rice.",
        "Conclude along the dramatic cliff beaches of Varkala or the secluded luxury resorts of Kovalam and Bekal, receiving rejuvenating Ayurvedic oil therapies designed to restore balance to mind and body."
      ],
      quote: "Sliding through the backwaters of Kerala on a private houseboat at dusk is like drifting through a dream where time forgets to advance.",
      quoteAuthor: "National Geographic Traveler Feature"
    },
    faqs: [
      { q: "What is included in a luxury private houseboat experience?", a: "Our private Kettuvallam houseboats are chartered exclusively for you with no outside guests. They feature fully air-conditioned bedrooms with ensuite bathrooms, a shaded lounge deck, personal butler, and a dedicated chef serving freshly prepared Malabar and Kerala delicacies." },
      { q: "Is Kerala suitable for family vacations with children and elders?", a: "Kerala is one of India's safest and most comfortable states for multi-generational travel, offering flat, peaceful boat cruises, gentle tea garden walks, sanitized private cabs, and world-class healthcare infrastructure." },
      { q: "How can I combine Munnar and the backwaters in one trip?", a: "A popular 6-day circuit begins in Kochi, spends 2 nights in the cool hills of Munnar, 1 night in Thekkady spice country, 1 night aboard an Alleppey private houseboat, and concludes with a beach or lakeside resort stay." },
      { q: "Can we experience authentic Ayurvedic treatments?", a: "Yes. We partner with certified Ayurvedic heritage centers and 5-star resorts that offer personalized wellness consultations, herbal steam therapies, Shirodhara, and customized dietary plans." }
    ]
  },

  // 3. GOA
  {
    slug: "goa",
    name: "Goa",
    category: "domestic",
    regionGroup: "South India",
    tagline: "Golden Coastlines, Heritage Villas & Bohemian Luxury",
    description: "India's sunshine state where Portuguese colonial architecture, Michelin-worthy beach shacks, private yacht charters, and secluded white sand coves create the ultimate coastal escape.",
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "North Goa", tagline: "Vibrant Beach Clubs & Sunset Parties", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop", highlights: ["Trendy beachside dining", "Chapora Fort sunset views", "Night markets and live music"] },
      { name: "South Goa", tagline: "Secluded White Sands & Luxury Resorts", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Untouched serene coastlines", "5-star luxury beachfront villas", "Quiet village cycling tours"] },
      { name: "Panaji", tagline: "Fontainhas Latin Quarter Heritage", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Color-drenched Portuguese villas", "Our Lady of the Immaculate Conception Church", "Mandovi River sunset cruises"] },
      { name: "Calangute", tagline: "The Queen of Beaches", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Water sports and parasailing", "Bustling souvenir shopping", "Beachside seafood cafes"] },
      { name: "Baga", tagline: "Nightlife, Shacks & Water Adventures", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop", highlights: ["Tito's lane vibrant nightlife", "Jet ski and banana boat rides", "Candlelit seaside dinners"] },
      { name: "Candolim", tagline: "Sophisticated Coastal Promenade", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Aguada Fort historic lighthouse", "Upscale boutique restaurants", "Clean uncrowded stretches"] },
      { name: "Anjuna", tagline: "Curies & Bohemian Beach Culture", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop", highlights: ["Famous Wednesday flea market", "Cliff-top sunset cocktail lounges", "Rock-framed bay views"] },
      { name: "Vagator", tagline: "Dramatic Red Cliffs & Chapora Views", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop", highlights: ["Little Vagator secluded beach", "Dil Chahta Hai Chapora Fort", "High-end cliff clubs"] },
      { name: "Palolem", tagline: "Crescent Bay & Silent Headphone Parties", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Dolphin watching boat rides", "Kayaking around Monkey Island", "Pastel beachfront eco-cottages"] },
      { name: "Colva", tagline: "Powdery White Sands & Water Sports", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Endless shoreline strolls", "Colva Church heritage architecture", "Traditional Goan fish curry shacks"] }
    ],
    signatureExperiences: [
      "Private catamaran yacht charter along the Mandovi and Chapora rivers with champagne and grilled prawns",
      "Curated heritage walk through Fontainhas Latin Quarter with an architectural historian and feni tasting",
      "Helicopter transfer from MOPA or Dabolim airport directly to your luxury South Goa beachfront resort",
      "Private chef barbecue set up right on the sands of a secluded South Goa cove at golden hour"
    ],
    hotels: ["Taj Exotica Resort & Spa, Benaulim", "The St. Regis Goa Resort, Cavelossim", "W Goa, Vagator", "Ahilya by the Sea, Nerul", "Alila Diwa Goa"],
    bestTime: "October to May (Sunny blue skies, lively coastal festivals, calm sea waters)",
    duration: "4 to 7 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Goa: Susegad Living, Haute Cuisine, and Private Yachting",
      intro: "There are two Goas: the high-energy coastal strip celebrated worldwide, and the quiet, aristocratic Goa of sprawling Portuguese estates, private river islands, and pristine white-sand sanctuaries.",
      body: [
        "Sobhavi Travels unlocks the refined side of Goa. Stay in an exclusive beachfront suite in South Goa where the only sounds are rolling Arabian Sea surf and swaying coconut fronds. Dine at acclaimed chef-driven restaurants blending Portuguese heritage with fresh coastal catches.",
        "Charter a private motor yacht to explore hidden mangrove channels where kingfishers dart across the water, or take a morning walk through Panaji's Fontainhas quarter admiring 18th-century balcãos draped in bougainvillea.",
        "Whether you seek lively nightlife in North Goa's most exclusive VIP lounges or deep restorative calm in South Goa's world-class spas, we tailor your coastal journey with absolute finesse."
      ],
      quote: "Goa is not just a holiday; it's the gentle art of slowing down without ever compromising on refined taste.",
      quoteAuthor: "Condé Nast Traveler Review"
    },
    faqs: [
      { q: "Should I choose North Goa or South Goa for my vacation?", a: "North Goa is celebrated for vibrant dining, energetic beach clubs, curated markets, and lively night entertainment. South Goa is known for sprawling 5-star beachfront resorts, tranquil white-sand coastlines, and unhurried luxury. We often recommend a 6-night stay splitting both regions." },
      { q: "Can Sobhavi Travels organize private yachts and beach villas in Goa?", a: "Yes. We offer fully crewed private yachts, speedboats, and handpicked 4 to 6-bedroom heritage Portuguese pool villas with private butlers and in-house chefs." },
      { q: "Is Goa only suitable for winter, or can we visit in monsoon/summer?", a: "While October to April offers perfect beach weather, Goa in the monsoon (June to September) is an enchanting green paradise ideal for quiet spa retreats, spice plantation stays, and scenic nature photography." },
      { q: "What airport should we fly into?", a: "Goa has two international airports: Dabolim (GOI) in central South Goa, and Manohar International Airport at MOPA (GOX) in North Goa. We arrange VIP airport meet-and-greets and private chauffeur transfers from both." }
    ]
  },

  // 4. HIMACHAL PRADESH
  {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    category: "domestic",
    regionGroup: "North & Himalayas",
    tagline: "Snow-Capped Peaks, Pine Valleys & Himalayan Sanctuaries",
    description: "The land of gods, where colonial hill stations, high-altitude desert monasteries, snow slopes, and apple orchards invite travelers into Himalayan tranquility.",
    heroImage: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Manali", tagline: "Solang Snow Adventures & Old Manali Cafes", image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop", highlights: ["Atal Tunnel & Sissu snow drive", "Solang Valley skiing and paragliding", "Hadimba Temple cedar forest"] },
      { name: "Shimla", tagline: "Queen of Hills & Colonial Heritage", image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800&auto=format&fit=crop", highlights: ["The Ridge & Mall Road heritage stroll", "Viceregal Lodge architectural tour", "Kalka-Shimla UNESCO toy train ride"] },
      { name: "Dharamshala", tagline: "Spiritual Home of the Dalai Lama", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop", highlights: ["Tsuglagkhang Temple Complex", "HPCA International Cricket Stadium", "Norbulingka Tibetan institute"] },
      { name: "Dalhousie", tagline: "Pine-Covered Slopes & Khajjiar Meadows", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Khajjiar (Mini Switzerland of India)", "Panchpula waterfall walks", "Dainkund Peak panoramic trail"] },
      { name: "Kasol", tagline: "Parvati Valley Hippie Trail", image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop", highlights: ["Parvati riverbank hikes", "Manikaran Sahib hot springs", "Artisanal Israeli cafes and bakeries"] },
      { name: "Kullu", tagline: "Valley of the Gods & River Rafting", image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop", highlights: ["Beas River white water rafting", "Kullu Pashmina shawl weaving centers", "Bijli Mahadev mountain trek"] },
      { name: "Kasauli", tagline: "Quiet Pine Forests & British Cantonment", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Gilbert Nature Trail walk", "Christ Church Victorian architecture", "Sunset Point serenity"] },
      { name: "Spiti Valley", tagline: "High-Altitude Cold Desert Monasteries", image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop", highlights: ["1000-year-old Key Monastery", "Highest post office in Hikkim", "Chandratal Lake stargazing"] },
      { name: "McLeod Ganj", tagline: "Little Lhasa & Mountain Cafes", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop", highlights: ["Bhagsunath Waterfall and Shiva Cafe", "Triund trek day hike", "Tibetan handicraft markets"] },
      { name: "Chail", tagline: "World's Highest Cricket Ground", image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop", highlights: ["Chail Palace heritage tour", "Chail Wildlife Sanctuary", "Quiet deodar forest retreats"] },
      { name: "Tirthan Valley", tagline: "Trout Fishing & Great Himalayan Park", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Brown trout angling", "UNESCO Great Himalayan National Park", "Jalori Pass & Serolsar Lake"] }
    ],
    signatureExperiences: [
      "Drive through the engineering marvel of Atal Tunnel to witness the pristine white landscapes of Sissu in Lahaul Valley",
      "Stay in the historic Wildflower Hall, an Oberoi Resort, waking to cedar-draped mountain ranges and private infinity whirlpools",
      "Private audience with senior Buddhist monks in McLeod Ganj followed by a meditative session in Kangra Valley",
      "Helicopter charter from Chandigarh directly to Shimla or Manali avoiding winding hill roads"
    ],
    hotels: ["Wildflower Hall, an Oberoi Resort, Shimla", "The Oberoi Cecil, Shimla", "The Tamara Kumbhalgarh / Manali", "Evolve Back Kamalapura / Larisa Resort Manali", "Fortune Select Forest Hill, Kasauli"],
    bestTime: "March to June (Summer flowers & cool breeze) or December to February (Magical snowfall & winter sports)",
    duration: "6 to 9 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Himachal Pradesh: Where Regal Pines Meet Himalayan Heights",
      intro: "Crowned by snow-draped Dhauladhar and Pir Panjal peaks, Himachal Pradesh is India's preeminent mountain sanctuary. Here, crisp pine-scented air and centuries-old wooden architecture offer an antidote to modern rush.",
      body: [
        "Begin in Shimla, walking along the car-free Ridge where colonial clock towers frame views of endless mountain folds. Reside at Wildflower Hall, once the summer estate of Lord Kitchener, enjoying open-air heated whirlpools facing snow-clad summits.",
        "Continue along the gushing Beas River to Manali, passing through apple orchards in full bloom. Drive through the state-of-the-art Atal Tunnel into the pristine snowscapes of Lahaul Valley.",
        "In Dharamshala and McLeod Ganj, the soul finds deep contemplation amid the chanting of monks, fluttering prayer flags, and dramatic views of sheer granite crags rising above Kangra Valley."
      ],
      quote: "To wake up in Himachal with the first morning sun casting golden fire onto snowy Himalayan summits is to witness creation renewed.",
      quoteAuthor: "Himalayan Journal of Mountaineering"
    },
    faqs: [
      { q: "When can we experience live snowfall in Manali and Shimla?", a: "Snowfall typically occurs between late December and early February. The Rohtang Pass, Solang Valley, and Sissu across the Atal Tunnel offer guaranteed snow fields well into March." },
      { q: "Can we avoid the long drive from Delhi to Himachal Pradesh?", a: "Yes. You can fly to Chandigarh Airport (IXC) or Dharamshala Airport (DHM). From Chandigarh, our luxury chauffeur transfers reach Shimla or Kasauli in just 2 to 3 hours via the new Himalayan Expressway." },
      { q: "Are roads in Himachal safe during monsoon months (July to August)?", a: "We advise avoiding mountain highways during heavy monsoon months due to rain. The finest months are spring/summer (March to June) and autumn/winter (September to February)." },
      { q: "What should we pack for a Himachal trip?", a: "For summer visits, light woolens and fleece jackets for evenings are sufficient. For winter trips (December to February), thermal innerwear, heavy down jackets, gloves, and waterproof snow boots are essential." }
    ]
  },

  // 5. UTTARAKHAND
  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    category: "domestic",
    regionGroup: "North & Himalayas",
    tagline: "Spiritual Ganges, Tiger Sanctuaries & High Himalayan Glaciers",
    description: "The sacred Devbhoomi, where the holy Ganges begins, Royal Bengal tigers roam the grasslands of Corbett, and alpine meadows look out upon Nanda Devi.",
    heroImage: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Mussoorie", tagline: "Queen of Hills & Kempty Falls", image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800&auto=format&fit=crop", highlights: ["Mall Road & Gun Hill cable car", "Kempty Falls scenic cascade", "Lal Tibba highest viewpoint"] },
      { name: "Nainital", tagline: "Emerald Naini Lake & Kumaon Hills", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop", highlights: ["Naini Lake yacht and paddle boat rides", "Naina Devi Temple darshan", "Snow View Point panoramic ropeway"] },
      { name: "Rishikesh", tagline: "Yoga Capital of the World & Ganga Aarti", image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=800&auto=format&fit=crop", highlights: ["Triveni Ghat VIP evening Ganga Aarti", "Private luxury yoga retreat sessions", "White water river rafting on the Ganges"] },
      { name: "Haridwar", tagline: "Gateway to the Gods & Har Ki Pauri", image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=800&auto=format&fit=crop", highlights: ["Har Ki Pauri sacred evening Aarti", "Mansa Devi & Chandi Devi ropeway", "Spiritual walking tours"] },
      { name: "Jim Corbett", tagline: "India's Oldest National Park & Tigers", image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800&auto=format&fit=crop", highlights: ["Dhikala & Bijrani premium Jeep safaris", "Kosi River riverside luxury lodges", "Elephant herd tracking with naturalists"] },
      { name: "Auli", tagline: "Premier Himalayan Ski Resort & Ropeway", image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop", highlights: ["Joshimath to Auli scenic cable car", "Skiing and snowboarding slopes", "360-degree view of Nanda Devi peak"] },
      { name: "Ranikhet", tagline: "Queen's Meadow & High Golf Course", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Ranikhet 9-hole golf course", "Chaubatia apple orchards", "Jhula Devi Bell Temple"] },
      { name: "Almora", tagline: "Cultural Heart of Kumaon & Sun Temple", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Katarmal Sun Temple architecture", "Zero Point Binsar Wildlife Sanctuary", "Traditional Kumaoni brass craftsmanship"] },
      { name: "Chopta", tagline: "Mini Switzerland & Tungnath Trek", image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop", highlights: ["Tungnath (highest Shiva temple in the world)", "Chandrashila peak summit sunrise", "Lush alpine meadows (bugyals)"] },
      { name: "Lansdowne", tagline: "Untouched Pine Cantonment Town", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Bhulla Tal peaceful lake", "Tip-in-Top mountain overlook", "St. John's Church colonial architecture"] },
      { name: "Kedarnath", tagline: "Sacred Jyotirlinga in Himalayan Glaciers", image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800&auto=format&fit=crop", highlights: ["Helicopter shuttle to Kedarnath temple", "VIP Special Darshan tickets", "Mandakini River glacial backdrop"] },
      { name: "Badrinath", tagline: "Sacred Char Dham & Neelkanth Peak", image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=800&auto=format&fit=crop", highlights: ["Badrinath Temple golden canopy", "Tapt Kund natural thermal springs", "Mana village (last Indian village before Tibet)"] }
    ],
    signatureExperiences: [
      "Charter private helicopter shuttles directly from Dehradun to Kedarnath and Badrinath with priority VIP darshan passes",
      "Private VIP seating at Triveni Ghat in Rishikesh with a dedicated Vedic priest for sunset Ganga Aarti prayers",
      "Exclusive open-top Gypsy safaris inside Corbett's pristine Dhikala zone staying at historic forest rest houses",
      "Private ski lessons and alpine glacier walks in Auli with Olympic-certified mountain guides"
    ],
    hotels: ["Ananda in the Himalayas, Rishikesh", "Taj Corbett Resort & Spa", "JW Marriott Mussoorie Walnut Grove Resort", "The Roseate Ganges, Rishikesh", "The Naini Retreat, Nainital"],
    bestTime: "March to June (Pleasant weather & clear mountain vistas) or October to February (Crisp winter & Auli skiing)",
    duration: "5 to 10 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Uttarakhand: Devbhoomi's Sacred Waters and Untamed Wildlife",
      intro: "Uttarakhand possesses an almost mythical magnetism. From the roar of the sacred Ganga emerging from Himalayan gorges to the trumpet of wild elephants in the sal forests of Corbett, this is a land of deep majesty.",
      body: [
        "In Rishikesh, experience spiritual wellness at Ananda in the Himalayas, the internationally renowned palace retreat dedicated to Ayurveda, yoga, and Vedanta philosophy overlooking the sacred river.",
        "Head south into the dense jungles of Jim Corbett National Park, home to the densest population of Royal Bengal tigers. Our private naturalists lead early morning tracking expeditions along the Ramganga riverbeds.",
        "For pilgrims and mountain lovers, helicopter charters unlock the remote sanctuaries of Kedarnath and Badrinath without arduous multi-day treks, letting you absorb divine tranquility beneath snow-capped Himalayan peaks."
      ],
      quote: "Standing along the banks of the Ganges as thousand brass lamps light up the evening waters is an experience that transforms the soul forever.",
      quoteAuthor: "Condé Nast Luxury Pilgrim Guide"
    },
    faqs: [
      { q: "Can we complete the Kedarnath & Badrinath Yatra by helicopter?", a: "Yes. Sobhavi Travels provides exclusive Do-Dham and Char-Dham helicopter packages starting from Sahastradhara Helipad in Dehradun, complete with priority VIP darshan, luxury ground transfers, and verified hotel stays." },
      { q: "How far is Jim Corbett from Delhi, and how do we reach it?", a: "Jim Corbett is approximately a 5 to 6-hour comfortable drive (250 km) from Delhi via our private sanitized luxury vehicles, or accessible via the Ranikhet Express train directly to Ramnagar." },
      { q: "What wellness programs are offered at Ananda in the Himalayas?", a: "Ananda offers bespoke 3 to 14-day holistic wellness packages covering Ayurvedic detox, stress management, yoga, healthy cuisine, and personalized meditation guided by resident masters." },
      { q: "Is Auli suitable for beginners who have never skied before?", a: "Yes. Auli features gentle beginner slopes with modern ski lifts and certified instructors providing equipment, private lessons, and safety support." }
    ]
  },

  // 6. JAMMU & KASHMIR
  {
    slug: "jammu-kashmir",
    name: "Jammu & Kashmir",
    category: "domestic",
    regionGroup: "North & Himalayas",
    tagline: "Paradise on Earth, Dal Lake Shikaras & Gulmarg Powders",
    description: "The crown jewel of India, where carved cedar houseboats float on Dal Lake, snow slopes invite world-class skiing in Gulmarg, and pine valleys charm Pahalgam.",
    heroImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Srinagar", tagline: "Dal Lake, Floating Gardens & Mughal Architecture", image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800&auto=format&fit=crop", highlights: ["Sunset Shikara ride on Dal Lake", "Mughal Gardens (Shalimar & Nishat Bagh)", "Pashmina & walnut woodcraft private shopping"] },
      { name: "Gulmarg", tagline: "Meadow of Flowers & Asia's Highest Gondola", image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop", highlights: ["Gulmarg Gondola Phase 2 to 14,000 ft", "Winter skiing on virgin powder snow", "Historic St. Mary's wooden church"] },
      { name: "Pahalgam", tagline: "Valley of Shepherds & Lidder River", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Betaab Valley Bollywood film sets", "Aru Valley eco-meadows", "Baisaran (Mini Switzerland) pony trail"] },
      { name: "Sonamarg", tagline: "Meadow of Gold & Thajiwas Glacier", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Thajiwas Glacier snow sledging", "Sindh River trout fishing", "Zero Point snowy mountain pass"] },
      { name: "Doodhpathri", tagline: "Valley of Milk & Pristine Pine Glades", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Lush uncrowded rolling pastures", "Shaliganga riverbank picnics", "Untouched nature walks"] },
      { name: "Yusmarg", tagline: "Peaceful Himalayan Meadows & Doodh Ganga", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Nilnag lake trek", "Scenic alpine pine forests", "Horseback rides along Doodh Ganga"] },
      { name: "Katra", tagline: "Base for Mata Vaishno Devi Pilgrimage", image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800&auto=format&fit=crop", highlights: ["Mata Vaishno Devi helicopter transfers", "Bhairon Ghati passenger ropeway", "VIP Darshan coordination"] }
    ],
    signatureExperiences: [
      "Stay in an exclusively chartered hand-carved heritage cedar houseboat on Nigeen Lake with private chef and butler",
      "VIP confirmed tickets for Gulmarg Gondola Phase 1 & Phase 2 skipping all public queues",
      "Authentic 36-course Kashmiri Wazwan feast prepared in your private villa by a master Waza",
      "Chartered helicopter transfer directly from Katra to Sanjichhat for Vaishno Devi darshan"
    ],
    hotels: ["The Khyber Himalayan Resort & Spa, Gulmarg", "The Lalit Grand Palace, Srinagar", "Vivanta Dal View, Srinagar", "Pahalgam Hotel", "Welcomhotel Pine N Peak, Pahalgam"],
    bestTime: "April to October (Tulips, lush gardens & pleasant breezes) or December to March (Magnificent snow landscapes & skiing)",
    duration: "6 to 9 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Kashmir: The Timeless Poetry of Earth's Greatest Paradise",
      intro: "If there is paradise on earth, it is here, it is here, it is here. The timeless Persian couplet inscribed at Shalimar Bagh holds true with every breath taken in the Kashmir Valley.",
      body: [
        "In Srinagar, drift in a canopied Shikara past floating vegetable markets as the sun dips behind the Zabarwan mountains. Stay aboard our private luxury cedar houseboats where embroidered carpets and fragrant Kahwa tea welcome you home.",
        "Ascend to Gulmarg, where the world's second-highest operating cable car carries you above clouds to Apharwat Peak at nearly 14,000 feet. In winter, this turns into one of the world's premier deep powder ski havens.",
        "In Pahalgam, listen to the rush of the Lidder River as pine needles carpet the trails leading into Betaab and Aru valleys. Savor royal Kashmiri Wazwan featuring Rogan Josh and Gushtaba, prepared with saffron harvested right from the fields of Pampore."
      ],
      quote: "Kashmir is poetry written in water, snow, and cedar wood. To experience it with true luxury is to understand what emperors wept for.",
      quoteAuthor: "Royal Himalayan Journal"
    },
    faqs: [
      { q: "Is Kashmir safe for families and couples to visit?", a: "Yes. Kashmir welcomed over 20 million tourists in recent seasons and remains one of India's most hospitable, tourist-friendly destinations. Our guests travel with dedicated vetted local chauffeurs and 5-star verified hotel accommodations throughout." },
      { q: "How do we get tickets for the Gulmarg Gondola?", a: "Gulmarg Gondola tickets are in high demand and frequently sell out weeks in advance. Sobhavi Travels pre-books your confirmed Phase 1 and Phase 2 passes well ahead of your journey." },
      { q: "What is the difference between Dal Lake and Nigeen Lake houseboats?", a: "Dal Lake is lively with vibrant floating shops and shikara traffic. Nigeen Lake is peaceful, pristine, and framed by willow trees — our preferred choice for discerning luxury travelers seeking tranquility." },
      { q: "When does the Srinagar Tulip Garden open?", a: "The Indira Gandhi Memorial Tulip Garden, the largest in Asia, is open for approximately 4 weeks between late March and mid-April, showcasing millions of blooming tulips across 30 hectares." }
    ]
  },

  // 7. LADAKH
  {
    slug: "ladakh",
    name: "Ladakh",
    category: "domestic",
    regionGroup: "North & Himalayas",
    tagline: "Roof of the World, Pangong Cobalt Waters & Moonscapes",
    description: "A surreal high-altitude kingdom where dramatic Tibetan Buddhist monasteries crown rugged peaks, double-humped camels roam Nubra dunes, and starry night skies dazzle in Hanle.",
    heroImage: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Leh", tagline: "Historic Capital & 9-Storey Leh Palace", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Shanti Stupa sunset panoramic view", "Leh Palace heritage walk", "Main Bazaar Tibetan handicraft shopping"] },
      { name: "Nubra Valley", tagline: "Valley of Flowers & Hunder White Sand Dunes", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Bactrian double-humped camel safari", "Diskit Monastery giant Maitreya Buddha", "Turtuk village Baltic cultural visit"] },
      { name: "Pangong Lake", tagline: "World's Highest Saltwater Lake", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Color-changing cobalt waters at 14,270 ft", "Luxury glamping tents on the lake shore", "Stargazing under unpolluted night skies"] },
      { name: "Tso Moriri", tagline: "Pristine High-Altitude Wetland Sanctuary", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Korzok village and monastery", "Migratory black-necked crane watching", "Untouched wilderness away from tourists"] },
      { name: "Khardung La", tagline: "World-Renowned High Mountain Pass", image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop", highlights: ["17,982 ft mountain summit photo stop", "Snow-covered peaks stretching to the Karakoram", "Gateway to Nubra Valley"] },
      { name: "Sham Valley", tagline: "Apricot Orchards & Ancient Monasteries", image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop", highlights: ["Magnetic Hill gravity-defying phenomenon", "Indus & Zanskar river Sangam confluence", "11th-century Alchi Monastery murals"] },
      { name: "Hanle", tagline: "India's First Dark Sky Reserve & Observatory", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Milky Way astrophotography tours", "Indian Astronomical Observatory", "Hanle 17th-century hilltop monastery"] }
    ],
    signatureExperiences: [
      "Sleep in luxury heated geodesic domes on the shores of Pangong Lake with private astronomical telescope viewings",
      "Private ride through Hunder sand dunes on rare Bactrian double-humped camels surrounded by snowy Karakoram ranges",
      "VIP private monastery blessing with the head Lama at Thiksey Monastery during morning prayer chants",
      "Scenic 4x4 expedition to the historic village of Turtuk, the northernmost point of India near the LoC"
    ],
    hotels: ["The Grand Dragon Ladakh, Leh", "The Chamba Camp, Thiksey", "Lchang Nang Retreat, Nubra", "Kyagar Hotel, Nubra", "Druk Ladakh, Leh"],
    bestTime: "May to October (Pleasant sunny days, accessible mountain passes, and vibrant monastery festivals)",
    duration: "6 to 9 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Ladakh: An Otherworldly Realm of Monasteries, Passes, and Stars",
      intro: "Perched above the clouds where the Himalayas surrender to the Karakoram, Ladakh is a high-altitude wonderland of stark, hypnotic beauty. Here, fluttering prayer flags whisper mantras across glacial valleys that glow under cobalt skies.",
      body: [
        "Your journey begins in Leh, taking essential rest to acclimatize while enjoying rooftop Tibetan butter teas. Visit Thiksey Monastery, dramatically stacked upon a rocky hill like the Potala Palace of Lhasa.",
        "Cross the legendary Khardung La pass at nearly 18,000 feet into Nubra Valley, where sand dunes ripple beside babbling glacial streams. In Hunder, ride double-humped camels before settling into luxury eco-retreats surrounded by apricot orchards.",
        "Finally, cross over to Pangong Tso, a 134-km-long saltwater lake whose colors shift through seven shades of blue between morning sun and twilight. At night, marvel at the galactic band of the Milky Way arching across the sky."
      ],
      quote: "In Ladakh, you don't just look at the landscape; the sheer vastness looks into you, stripping away everything superfluous.",
      quoteAuthor: "Traveler Journal, Royal Geographic Society"
    },
    faqs: [
      { q: "How important is acclimatization in Leh Ladakh?", a: "Critical. Leh sits at 11,500 feet above sea level. We mandate the first 24 to 48 hours of your itinerary for restful acclimatization at your luxury hotel with oxygen-equipped rooms and medical checks before traversing higher passes." },
      { q: "Are Inner Line Permits (ILP) required for Nubra, Pangong, and Hanle?", a: "Yes, permits are mandatory for Indian and foreign nationals visiting border areas. Sobhavi Travels manages all your permit paperwork, approvals, and green fees in advance." },
      { q: "Can we visit Hanle Dark Sky Reserve?", a: "Yes, we arrange specialized astronomy tours to Hanle with permits, private 4x4 transport, and comfortable homestay / guesthouse setups for professional astrophotography." },
      { q: "What vehicles do you provide in Ladakh?", a: "We provide private 4x4 Toyota Innova Crysta or Fortuner SUVs driven by certified local Ladakhi mountain drivers equipped with portable oxygen cylinders and emergency satellite communications." }
    ]
  },

  // 8. MAHARASHTRA
  {
    slug: "maharashtra",
    name: "Maharashtra",
    category: "domestic",
    regionGroup: "West & Central",
    tagline: "Glamorous Skylines, Western Ghats & Ancient UNESCO Caves",
    description: "From the pulsing energy of Mumbai to the lush strawberry plateaus of Mahabaleshwar and the rock-cut wonders of Ajanta & Ellora.",
    heroImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Mumbai", tagline: "Maximum City, Marine Drive & Gateway of India", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800&auto=format&fit=crop", highlights: ["Gateway of India & Marine Drive sunset walk", "Colaba & Fort heritage architectural tours", "Michelin-caliber fine dining at Bandra and BKC"] },
      { name: "Lonavala", tagline: "Western Ghats Waterfalls & Misty Escapes", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Tiger's Leap & Lion's Point viewpoints", "Bhushi Dam and monsoon cascades", "Karla and Bhaja 2nd-century Buddhist caves"] },
      { name: "Mahabaleshwar", tagline: "Strawberry Capital & Sahyadri Valleys", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Venna Lake boating", "Arthur's Seat dramatic cliff drop", "Fresh strawberry picking at Mapro Garden"] },
      { name: "Alibaug", tagline: "Luxury Beach Villas & Kolaba Fort", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["20-minute speedboat from Gateway of India", "Private luxury pool villa getaways", "Historic Kolaba sea fort walks"] },
      { name: "Matheran", tagline: "Asia's Only Automobile-Free Hill Station", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Heritage toy train ride", "Echo Point & Louisa Point vistas", "Pure air and red dirt horse trails"] },
      { name: "Nashik", tagline: "Wine Capital of India & Trimbakeshwar", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Sula & York private vineyard wine tastings", "Trimbakeshwar Jyotirlinga darshan", "Panchavati sacred river ghats"] },
      { name: "Shirdi", tagline: "Sacred Shrine of Sai Baba", image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=800&auto=format&fit=crop", highlights: ["VIP Sai Baba Samadhi Mandir darshan", "Dwarkamai and Chavadi pilgrimage", "Fast-track airport connections"] },
      { name: "Chhatrapati Sambhajinagar", tagline: "UNESCO Ajanta & Ellora Wonders", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Monolithic Kailash Temple at Ellora", "Ajanta 2000-year-old Buddhist frescoes", "Bibi Ka Maqbara (Taj of the Deccan)"] },
      { name: "Igatpuri", tagline: "Foggy Peaks, Vipassana & Waterfalls", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Bhatsa River Valley overlook", "Dhamma Giri global Vipassana academy", "Kalsubai Peak treks"] },
      { name: "Tarkarli", tagline: "Malvan Scuba Diving & Sindhudurg Fort", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Clear water scuba diving and snorkeling", "Shivaji Maharaj Sindhudurg island fort", "Malvani seafood thali dining"] }
    ],
    signatureExperiences: [
      "Charter a private luxury speedboat from Gateway of India to your private pool villa in Alibaug",
      "Private sunset sommelier wine tasting and vineyard barrel room tour in Nashik's Sula Vineyards",
      "Exclusive art historian guided exploration of the monolithic Kailash Temple cut from a single rock in Ellora",
      "Helicopter tour over Mumbai's iconic skyline, Bandra-Worli Sea Link, and the Arabian Sea"
    ],
    hotels: ["The Taj Mahal Palace, Mumbai", "The Oberoi, Mumbai", "Grape County Eco Resort, Nashik", "The Machan, Lonavala", "Radisson Blu Resort & Spa, Alibaug"],
    bestTime: "October to March (Pleasant coastal breezes) or July to September (Spectacular monsoon waterfalls in the Western Ghats)",
    duration: "4 to 8 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Maharashtra: From Maximum City Glamour to Sahyadri Sanctuaries",
      intro: "Maharashtra offers a sensory breadth found in few other places: the high-wattage buzz of Mumbai's financial and cinematic capital transitions effortlessly into misty Sahyadri valleys, boutique wine estates, and ancient architectural wonders.",
      body: [
        "In Mumbai, stay at the historic Taj Mahal Palace, looking out at the Gateway of India while dining at world-renowned restaurants like Wasabi by Morimoto. Hop on a chartered speedboat for a weekend of private villa luxury in Alibaug.",
        "Head into the Sahyadri mountains where the monsoon turns Lonavala and Mahabaleshwar into verdant paradises of tumbling cascades and morning mists. Continue inland to Nashik for luxury vineyard stays overlooking peaceful dams.",
        "In Chhatrapati Sambhajinagar, stand before the Kailash Temple at Ellora — an unfathomable engineering marvel carved top-down from a single basalt cliffside over a century of patient devotion."
      ],
      quote: "Maharashtra is a thrilling contrast: one moment you're sipping vintage Chenin Blanc in a sunlit vineyard, and the next you're standing before 2000-year-old painted caves.",
      quoteAuthor: "Architectural Digest Travel"
    },
    faqs: [
      { q: "How do we travel from Mumbai to Alibaug comfortably?", a: "We arrange private luxury speedboats directly from the Gateway of India jetty to Mandwa port in just 20 minutes, followed by a private air-conditioned car transfer to your beachfront villa." },
      { q: "How far are Ajanta and Ellora caves from Mumbai?", a: "You can take a 50-minute flight from Mumbai directly to Chhatrapati Sambhajinagar (Aurangabad) Airport, where our private chauffeur escorts you to Ellora (30 km) and Ajanta (100 km)." },
      { q: "What is the best weekend getaway from Mumbai or Pune?", a: "Lonavala, Khandala, and Alibaug are within 2 hours of Mumbai; Mahabaleshwar, Panchgani, and Nashik wine country are perfect 3 to 4-day leisure breaks." },
      { q: "Can VIP darshan be arranged at Shirdi Sai Baba temple?", a: "Yes. Sobhavi Travels organizes confirmed VIP pass coordination for Aarti and darshan, minimizing waiting times." }
    ]
  },

  // 9. KARNATAKA
  {
    slug: "karnataka",
    name: "Karnataka",
    category: "domestic",
    regionGroup: "South India",
    tagline: "Hampi Ruins, Coorg Coffee Estates & Kabini Safaris",
    description: "One State, Many Worlds — where Vijayanagara stone temples rise from boulder landscapes, coffee aromas drift through Coorg, and leopards stalk Kabini forests.",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Bengaluru", tagline: "Garden City, Craft Breweries & Tech Capital", image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800&auto=format&fit=crop", highlights: ["Bangalore Palace royal tour", "Lalbagh Botanical Garden glasshouse", "Vibrant craft brewery and gastronomy scene"] },
      { name: "Mysore", tagline: "City of Palaces, Sandalwood & Silk", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Mysore Palace illuminated with 100,000 bulbs", "Chamundi Hill panoramic overlook", "Devaraja heritage spice and flower market"] },
      { name: "Coorg (Kodagu)", tagline: "Scotland of India & Coffee Plantations", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Private coffee estate walks and bean tastings", "Abbey and Iruppu waterfalls", "Namdroling Golden Temple Tibetan monastery"] },
      { name: "Chikmagalur", tagline: "Birthplace of Indian Coffee & Mullayanagiri", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Mullayanagiri peak (highest in Karnataka)", "Baba Budangiri coffee trail", "Hebbe and Jhari waterfalls"] },
      { name: "Hampi", tagline: "UNESCO Vijayanagara Empire Citadel", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Vittala Temple stone chariot & musical pillars", "Virupaksha Temple living worship", "Tungabhadra coracle boat ride"] },
      { name: "Gokarna", tagline: "Sacred Coastlines & Om Beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Mahabaleshwar Temple ancient Atmalinga", "Om Beach and Kudle Beach cliff hikes", "Relaxed coastal yoga cafes"] },
      { name: "Kabini", tagline: "Asia's Premier Black Panther & Tiger Sanctuary", image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800&auto=format&fit=crop", highlights: ["Boat safaris on Kabini River with elephant herds", "Zone A & B jeep safaris tracking black panthers", "Luxury tented riverfront lodges"] },
      { name: "Sakleshpur", tagline: "Green Hills, Forts & Railway Bridge Treks", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Star-shaped Manjarabad Fort", "Bisle Ghat panoramic Western Ghats view", "Private cardamom plantation stays"] },
      { name: "Udupi", tagline: "Krishna Temple & Coastal Gastronomy", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Sri Krishna Matha temple darshan", "Malpe Beach & St. Mary's volcanic island", "Authentic coastal Udupi vegetarian feasts"] },
      { name: "Dandeli", tagline: "Kali River Rafting & Hornbill Haven", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Grade III Kali River white water rafting", "Sykes Point deep valley gorge", "Dandeli jungle safaris and bird watching"] },
      { name: "Jog Falls", tagline: "India's Second Highest Plunge Waterfall", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop", highlights: ["Sharavathi River 830-foot vertical drop", "Monsoon roaring mist views", "Raja, Rani, Roarer & Rocket cascades"] }
    ],
    signatureExperiences: [
      "Charter private jeep and boat safaris in Kabini with senior naturalists, home to India's famed wild black panther 'Saya'",
      "Stay in Evolve Back Kamalapura Palace, Hampi, designed like a 14th-century royal Vijayanagara stone fortress",
      "Private sunrise coffee cupping session with 4th-generation planters on a 300-acre estate in Coorg",
      "VIP palace entry and private rooftop seating during the grand Mysore Dasara royal procession"
    ],
    hotels: ["Evolve Back, Kabini", "The Serai, Chikmagalur", "The Tamara Coorg", "Evolve Back, Kamalapura Palace, Hampi", "The Leela Palace Bengaluru"],
    bestTime: "October to March (Cool, pleasant days and crisp hill station mornings)",
    duration: "6 to 10 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Karnataka: Ancient Stone Empires and Unspoiled Wilderness",
      intro: "Few states in India offer as startling a diversity of landscape and heritage as Karnataka. In a single journey, you can wander through the monumental boulder-strewn ruins of the Vijayanagara Empire, sip freshly roasted Arabica in misty Coorg, and cruise along the Kabini River watching hundred-strong herds of wild elephants.",
      body: [
        "In Hampi, the surreal granite boulders frame palaces and temples that once governed one of the wealthiest empires on earth. Marvel at the musical pillars of Vittala Temple before taking a circular coracle boat across the Tungabhadra.",
        "Head south into the Western Ghats, where Coorg and Chikmagalur blanket the rolling hills with emerald coffee plantations. Reside in private pool villas where estate tours reveal the artisanal process from blossom to cup.",
        "End in Kabini inside the Nagarhole Tiger Reserve, recognized by wildlife photographers worldwide for extraordinary predator sightings including tigers, leopards, and the elusive black panther."
      ],
      quote: "Hampi looks like it was sculpted by giants who threw mountains of golden stone across the earth and carved temples into their hearts.",
      quoteAuthor: "Lonely Planet Global Guide"
    },
    faqs: [
      { q: "How do we get to Hampi comfortably from Bengaluru?", a: "You can fly from Bengaluru directly to Jindal Vijaynagar Airport (VDY) in Toranagallu, just 40 minutes from Hampi, or take our private sanitized luxury chauffeur drive (approximately 5.5 hours on expressways)." },
      { q: "What is the best time for wildlife safaris in Kabini?", a: "Kabini offers exceptional sightings year-round. October to February brings pleasant weather and lush forests; March to May sees animals congregating in large numbers along the drying riverbanks." },
      { q: "Is Coorg suitable for a relaxing romantic getaway?", a: "Coorg is one of South India's top luxury honeymoon and couple destinations, featuring world-class resorts like The Tamara and Evolve Back with private heated plunge pools and candlelit plantation dining." },
      { q: "Can we combine Mysore, Coorg, and Kabini in one trip?", a: "Yes, this is Karnataka's golden triangle. A seamless 7-day circuit takes you from Bengaluru to Mysore (1 night), Kabini wildlife (2 nights), and Coorg coffee estates (2 nights)." }
    ]
  },

  // 10. TAMIL NADU
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    category: "domestic",
    regionGroup: "South India",
    tagline: "Towering Gopurams, Nilgiri Hills & Coastal Temples",
    description: "The cradle of Dravidian art, where monumental temple towers reach for the heavens, toy trains climb the Nilgiris to Ooty, and French-inspired villas line the coast.",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Chennai", tagline: "Cultural Gateway & Marina Beach", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Kapaleeshwarar Temple Dravidian towers", "Marina Beach world's second-longest urban beach", "Santhome Cathedral Basilica"] },
      { name: "Ooty (Udhagamandalam)", tagline: "Queen of the Nilgiris & Heritage Toy Train", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["UNESCO Nilgiri Mountain Railway toy train", "Ooty Botanical Gardens and Rose Garden", "Doddabetta Peak panoramic viewpoint"] },
      { name: "Kodaikanal", tagline: "Princess of Hill Stations & Star Lake", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Star-shaped Kodai Lake boat rides", "Coaker's Walk misty cliff panorama", "Pillar Rocks dramatic granite pillars"] },
      { name: "Coimbatore", tagline: "Textile Hub & Adiyogi Shiva Statue", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["112-foot Adiyogi Shiva statue at Isha Yoga", "Marudhamalai hill temple", "Gateway to Nilgiri hill stations"] },
      { name: "Madurai", tagline: "Athens of the East & Meenakshi Amman", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Meenakshi Amman Temple 14 gopurams", "Thirumalai Nayakkar Mahal light and sound show", "Famous Madurai Jigarthanda and Chettinad feasts"] },
      { name: "Rameswaram", tagline: "Sacred Island & Pamban Bridge", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Ramanathaswamy Temple 1,200 pillared corridor", "Pamban sea bridge crossing", "Dhanushkodi ghost town & Ram Setu viewpoint"] },
      { name: "Kanyakumari", tagline: "Tricontinental Ocean Confluence & Sunrises", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Confluence of Arabian Sea, Bay of Bengal & Indian Ocean", "Vivekananda Rock Memorial ferry", "133-foot Thiruvalluvar Statue"] },
      { name: "Mahabalipuram", tagline: "UNESCO Shore Temple & Monolithic Carvings", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["8th-century Shore Temple overlooking waves", "Arjuna's Penance world's largest open-air bas-relief", "Pancha Rathas monolithic chariot shrines"] },
      { name: "Thanjavur", tagline: "Great Living Chola Brihadeeswarar Temple", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["1,000-year-old Brihadeeswara Temple (Big Temple)", "Thanjavur Maratha Palace & Saraswathi Mahal library", "Tanjore gold leaf painting workshops"] },
      { name: "Yercaud", tagline: "Jewel of the South & Shevaroy Hills", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Yercaud Lake and emerald deer park", "Lady's Seat panoramic valley view", "Quiet coffee and citrus plantations"] }
    ],
    signatureExperiences: [
      "VIP early morning private darshan at Meenakshi Amman Temple Madurai guided by a senior temple historian",
      "First-class tickets aboard the UNESCO Nilgiri Mountain Railway toy train winding through 250 bridges and 16 tunnels",
      "Private luxury beachfront stay in Mahabalipuram with a sunset champagne dinner overlooking the 8th-century Shore Temple",
      "Heritage Chettinad culinary masterclass in a restored 100-room ancestral mansion in Karaikudi"
    ],
    hotels: ["Taj Connemara, Chennai", "The Leela Palace Chennai", "Savoy - IHCL SeleQtions, Ooty", "Heritage Madurai", "Radisson Blu Resort Temple Bay Mamallapuram"],
    bestTime: "October to March (Pleasant coastal breezes and ideal sightseeing temperatures)",
    duration: "6 to 10 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Tamil Nadu: Living Dravidian Civilization and Mist-Crowned Nilgiris",
      intro: "Tamil Nadu is one of the world's last uninterrupted classical civilizations. Its soaring temple gopurams, carved with thousands of brightly painted deities, have vibrated with sacred chants, bronze bells, and classical Bharatanatyam dance for over two millennia.",
      body: [
        "In Mahabalipuram, marvel at the 8th-century Shore Temple standing proud against the crashing waves of the Bay of Bengal. Continue to Thanjavur to behold the Brihadeeswarar Temple, whose granite vimana casts no shadow at noon.",
        "In the holy city of Madurai, the colossal towers of Meenakshi Amman Temple create an awe-inspiring skyline. Taste the legendary culinary mastery of Chettinad in palatial mansions furnished with teak from Burma and Belgian chandeliers.",
        "Ascend into the Nilgiri Hills aboard the British-era steam toy train to Ooty and Kodaikanal, where eucalyptus-scented breezes and heritage tea estates offer idyllic mountain serenity."
      ],
      quote: "Tamil Nadu's temples are not historical ruins; they are pulsating, living cities of faith, stone art, and classical music.",
      quoteAuthor: "UNESCO Cultural Heritage Journal"
    },
    faqs: [
      { q: "How can we experience the Nilgiri Toy Train to Ooty?", a: "The Nilgiri Mountain Railway runs between Mettupalayam and Ooty. Because seats sell out months in advance, Sobhavi Travels reserves your confirmed first-class tickets as part of your tailored itinerary." },
      { q: "Is dress code enforced inside Tamil Nadu temples?", a: "Yes. Most ancient temples require traditional modest attire: dhotis or trousers with shirts for men, and sarees or salwar suits for women. We provide pre-trip guidance and local support." },
      { q: "Can we combine Tamil Nadu and Kerala in one journey?", a: "Yes, this is one of our most popular Southern India circuits. You can explore Chennai, Mahabalipuram, and Madurai before crossing into Kerala via Munnar and Alleppey." },
      { q: "What is special about Chettinad cuisine?", a: "Chettinad cuisine is famous for freshly ground roasted spices, sun-dried meats, star anise, and peppercorns, creating some of India's most aromatic and flavorful heritage dishes." }
    ]
  },

  // 11. UTTAR PRADESH
  {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    category: "domestic",
    regionGroup: "West & Central",
    tagline: "Taj Mahal Splendor, Eternal Varanasi & Sacred Ayodhya",
    description: "The spiritual heartland of India, where the marble Taj Mahal reflects eternal love, Varanasi's ghats celebrate the cycle of life, and the grand temples of Ayodhya welcome pilgrims.",
    heroImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Agra", tagline: "The Taj Mahal & Mughal Splendor", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop", highlights: ["Sunrise private tour of the Taj Mahal", "UNESCO Agra Fort red sandstone palace", "Mehtab Bagh sunset garden views"] },
      { name: "Varanasi", tagline: "The World's Oldest Living City & Ganga Ghats", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop", highlights: ["Private dawn boat ride on the sacred Ganges", "Dashashwamedh Ghat grand evening Aarti", "Kashi Vishwanath Temple corridor darshan"] },
      { name: "Ayodhya", tagline: "Birthplace of Lord Rama & Grand Mandir", image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800&auto=format&fit=crop", highlights: ["Shri Ram Janmabhoomi Mandir VIP darshan", "Saryu River sunset Aarti and boat cruise", "Hanuman Garhi ancient temple"] },
      { name: "Lucknow", tagline: "City of Nawabs, Chikankari & Awadhi Royalty", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Bara Imambara architectural labyrinth (Bhulbhulaiya)", "Royal Awadhi Galouti Kebab culinary trail", "Chikankari fine embroidery master workshops"] },
      { name: "Mathura", tagline: "Shri Krishna Janmabhoomi", image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800&auto=format&fit=crop", highlights: ["Krishna Janmasthan Temple complex", "Vishram Ghat Yamuna evening Aarti", "Traditional Mathura Peda tastings"] },
      { name: "Vrindavan", tagline: "Land of Radha Krishna & Bankey Bihari", image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800&auto=format&fit=crop", highlights: ["Bankey Bihari Temple darshan", "Prem Mandir illuminated Italian marble facade", "ISKCON Vrindavan spiritual complex"] },
      { name: "Prayagraj", tagline: "Triveni Sangam & Sacred Kumbh Mela", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop", highlights: ["Triveni Sangam boat ride (Ganga, Yamuna, Saraswati)", "Allahabad Fort and Akshaya Vat tree", "Anand Bhavan Nehru family ancestral home"] },
      { name: "Sarnath", tagline: "Buddha's First Sermon & Ashoka Pillar", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Dhamek Stupa monument", "Sarnath Archaeological Museum (Lion Capital of Ashoka)", "Peaceful deer park monastic ruins"] },
      { name: "Fatehpur Sikri", tagline: "Akbar's Preserved Red Sandstone Capital", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Buland Darwaza highest gateway in the world", "Salim Chishti marble tomb blessings", "Panch Mahal royal pavilion"] }
    ],
    signatureExperiences: [
      "Sunrise VIP entry to the Taj Mahal with a senior Mughal art historian before public gates open",
      "Private Bajra wooden boat charter on the Ganges at Varanasi with classical sitar musicians and floating oil lamps",
      "VIP priority darshan coordination at the grand Ram Janmabhoomi Mandir in Ayodhya and Kashi Vishwanath in Varanasi",
      "Royal Awadhi Dastarkhwan feast served in the heritage courtyard of a royal Taluqdar residence in Lucknow"
    ],
    hotels: ["The Oberoi Amarvilas, Agra (every room has an unhindered Taj view)", "Taj Nadesar Palace, Varanasi", "BrijRama Palace, Varanasi", "Taj Mahal Lucknow", "The Clarks Varanasi"],
    bestTime: "October to March (Crisp pleasant days, ideal for temple visits and monument sightseeing)",
    duration: "5 to 9 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Uttar Pradesh: The Epicenter of Faith, Grandeur, and Immortality",
      intro: "To touch the soil of Uttar Pradesh is to walk where empires rose, religions were born, and poetry was sculpted into stone. From the peerless white marble perfection of the Taj Mahal to the sacred fire rituals along Varanasi's ghats, this is the immortal spirit of India.",
      body: [
        "In Agra, awaken at The Oberoi Amarvilas, where private balconies face the Taj Mahal. At first light, enter the monument in serene silence as morning mist lifts from the Yamuna to reveal luminous marble inlaid with semi-precious jade and lapis lazuli.",
        "In Varanasi, the oldest living city on earth, board a private wooden boat as temple bells announce the dawn. Watch thousands of pilgrims salute the morning sun along two miles of stone ghats before attending the mesmerizing evening Ganga Aarti.",
        "In the newly transformed pilgrimage destination of Ayodhya, visit the monumental Ram Janmabhoomi Mandir, absorbing centuries of devotional heritage, before savoring the sophisticated culinary legacy of the Nawabs in Lucknow."
      ],
      quote: "Varanasi is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together.",
      quoteAuthor: "Mark Twain"
    },
    faqs: [
      { q: "Can we see the Taj Mahal from our hotel room?", a: "Yes. When you stay at The Oberoi Amarvilas with Sobhavi Travels, every single room and suite enjoys an unhindered, breathtaking view of the Taj Mahal just 600 meters away." },
      { q: "How do we travel comfortably between Agra, Lucknow, and Varanasi?", a: "You can travel aboard the luxury Vande Bharat Express high-speed train, via our private chauffeured luxury cars on the 6-lane Agra-Lucknow Expressway, or via direct flights connecting Lucknow and Varanasi." },
      { q: "How is VIP darshan handled at Ram Mandir in Ayodhya?", a: "We coordinate pre-registered VIP passes and assign a dedicated local temple escort to guide you smoothly through security and designated queues." },
      { q: "When is the Taj Mahal closed to visitors?", a: "The Taj Mahal is closed to the public every Friday for prayers. It remains open from sunrise to sunset Saturday through Thursday." }
    ]
  },

  // 12. GUJARAT
  {
    slug: "gujarat",
    name: "Gujarat",
    category: "domestic",
    regionGroup: "West & Central",
    tagline: "White Salt Desert, Asiatic Lions & Sacred Coastal Shrines",
    description: "The vibrant land of legends, where the White Rann sparkles under full moon skies, Asiatic lions roam the dry forests of Gir, and Dwarka and Somnath preserve sacred maritime heritage.",
    heroImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Ahmedabad", tagline: "India's First UNESCO World Heritage City", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Sabarmati Ashram of Mahatma Gandhi", "Adalaj Stepwell 5-storey stone carvings", "Heritage pols old city architectural walk"] },
      { name: "Statue of Unity", tagline: "World's Tallest Monument (182 Meters)", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Viewing Gallery at 153 meters inside the chest", "Narmada River evening laser sound & light show", "Valley of Flowers & Sardar Sarovar Dam"] },
      { name: "Kutch / Rann of Kutch", tagline: "The Great White Desert & Rann Utsav", image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop", highlights: ["Full moon walk on crystalline white salt flats", "Luxury tent city stays at Dhordo", "Rogan art & Kutchi embroidery artisan villages"] },
      { name: "Dwarka", tagline: "Sacred Kingdom of Lord Krishna & Beyt Dwarka", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Dwarkadhish Temple 5-storey main shrine", "Beyt Dwarka island ferry crossing", "Rukmini Devi ancient stone temple"] },
      { name: "Somnath", tagline: "First of the Twelve Sacred Jyotirlingas", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Somnath Temple facing the Arabian Sea", "Evening sound and light show on temple walls", "Triveni Sangam holy river confluence"] },
      { name: "Gir National Park", tagline: "Sole Sanctuary of the Asiatic Lion", image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800&auto=format&fit=crop", highlights: ["Open-top Gypsy lion tracking safaris", "Over 600 wild Asiatic lions in natural habitat", "Leopard and crocodile sightings"] },
      { name: "Vadodara", tagline: "Cultural Capital & Laxmi Vilas Palace", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Laxmi Vilas Palace (4 times the size of Buckingham Palace)", "Maharaja Fateh Singh Museum art collection", "Champaner-Pavagadh UNESCO archaeological park"] },
      { name: "Surat", tagline: "Diamond City & Textile Capital", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Surat Diamond Bourse (world's largest office building)", "Dumas Beach black sands", "Traditional Surati street food and ghari sweets"] },
      { name: "Saputara", tagline: "Only Hill Station in the Sahyadri Ranges", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Saputara Lake boating", "Sunset Point ropeway", "Gira waterfalls dense forest drive"] }
    ],
    signatureExperiences: [
      "Stargazing and luxury glamping on the endless salt flats of the White Rann during the full moon",
      "Private morning jeep safaris in Gir National Park with senior forest naturalists tracking pride of Asiatic lions",
      "VIP express elevator access to the 153-meter high chest viewing gallery inside the Statue of Unity",
      "Private royal guided tour through Laxmi Vilas Palace in Vadodara with audio narration by the Gaekwad royal family"
    ],
    hotels: ["The Fern Rann Resort, Dhordo", "The Gateway Hotel Gir Forest", "Fortune Landmark, Ahmedabad", "Tent City Narmada (Statue of Unity)", "Welcomhotel by ITC Hotels, Vadodara"],
    bestTime: "November to March (Pleasant, sunny days and cool nights ideal for Rann Utsav and wildlife safaris)",
    duration: "6 to 10 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Gujarat: White Salt Deserts, Royal Lions, and Timeless Sanctuaries",
      intro: "Gujarat is a realm of bold contrasts: the shimmering crystalline white expanse of the Great Rann under a full moon, the untamed dry deciduous teak forests of Gir where the Asiatic lion reigns supreme, and maritime temples standing tall against Arabian Sea tides.",
      body: [
        "At the Statue of Unity, gaze upon the world's tallest monument rising 182 meters above the Narmada River before traveling to Vadodara to explore the magnificent Laxmi Vilas Palace.",
        "In the far west, the Rann of Kutch transforms into an ethereal salt desert during the winter Rann Utsav. Stay in air-conditioned luxury Swiss tents, watching Gujarati folk performers dance beneath starlit desert skies.",
        "For wildlife connoisseurs, Gir National Park offers the planet's only chance to see the majestic Asiatic lion in the wild, followed by spiritual rejuvenation at the sacred coastal Jyotirlinga of Somnath and the historic island kingdom of Dwarka."
      ],
      quote: "Walking upon the blinding white salt desert of the Rann under a full moon is an experience that feels disconnected from earth itself.",
      quoteAuthor: "Condé Nast Traveler Expedition Report"
    },
    faqs: [
      { q: "What is the best time to experience the Rann of Kutch and Rann Utsav?", a: "Rann Utsav runs annually from November through February. The full moon nights and the days immediately surrounding them are the most coveted times to experience the white salt desert glowing under moonlight." },
      { q: "How are Gir lion safari permits booked?", a: "Gir safari permits are strictly regulated by the Gujarat Forest Department and must be secured well in advance. Sobhavi Travels books your verified Gypsy vehicle, driver, and forest guide permits." },
      { q: "How far is the Statue of Unity from Ahmedabad or Vadodara?", a: "The Statue of Unity in Kevadia is about 1.5 hours (90 km) from Vadodara and about 3.5 hours (200 km) from Ahmedabad via smooth multi-lane expressways." },
      { q: "Is Gujarat completely vegetarian?", a: "While Gujarat is famous for its elaborate vegetarian thalis, luxury hotels in major hubs like Ahmedabad, Vadodara, and Gir provide comprehensive multi-cuisine menus including non-vegetarian delicacies." }
    ]
  },

  // 13. WEST BENGAL
  {
    slug: "west-bengal",
    name: "West Bengal",
    category: "domestic",
    regionGroup: "East & Islands",
    tagline: "Darjeeling Tea Slopes, Colonial Grandeur & Royal Bengal Tigers",
    description: "Where Himalayan tea gardens frame views of Mount Kanchenjunga, Kolkata's colonial streets celebrate literature and art, and the mangrove delta of the Sundarbans shelters swimming tigers.",
    heroImage: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Kolkata", tagline: "City of Joy & Colonial Architecture", image: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800&auto=format&fit=crop", highlights: ["Victoria Memorial white marble monument", "Howrah Bridge over the Hooghly River", "Dakshineswar & Kalighat temple darshan"] },
      { name: "Darjeeling", tagline: "Queen of the Hills & World-Class Tea", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Tiger Hill sunrise over Mt. Kanchenjunga", "UNESCO Darjeeling Himalayan Railway toy train", "Glenburn tea estate private tasting"] },
      { name: "Kalimpong", tagline: "Orchid Nurseries & Colonial Bungalows", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Deolo Hill highest viewpoint", "Zang Dhok Palri Phodang monastery", "Cactus and exotic orchid nursery gardens"] },
      { name: "Siliguri", tagline: "Gateway to the Northeast & Himalayas", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Mahananda Wildlife Sanctuary", "Salugara Buddhist Monastery", "Major travel transit hub for Sikkim and Darjeeling"] },
      { name: "Sundarbans", tagline: "World's Largest Mangrove Delta & Tigers", image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800&auto=format&fit=crop", highlights: ["Private motorized boat cruises through tidal creeks", "Royal Bengal tiger tracking with forest docents", "Watchtowers at Sajnekhali and Dobanki"] },
      { name: "Digha", tagline: "Flat Coastal Beaches & Seafood Shacks", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["New Digha beach seaside promenade", "Marine Aquarium research center", "Fresh Bay of Bengal seafood dining"] },
      { name: "Dooars", tagline: "Tea Gardens & Wildlife Sanctuaries", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Jaldapara National Park one-horned rhino safari", "Gorumara National Park elephant watch", "Chalsa tea garden drives"] },
      { name: "Mirik", tagline: "Sumendu Lake & Cardamom Groves", image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop", highlights: ["Sumendu Lake arch bridge & boating", "Bokar Buddhist monastery serenity", "Scenic pine trail walks"] }
    ],
    signatureExperiences: [
      "Sunrise viewing of Mount Kanchenjunga turning golden from Tiger Hill, followed by a vintage steam toy train journey to Ghoom",
      "Stay at the legendary Glenburn Tea Estate, dining on the veranda with silver service and personal tea sommelier pairings",
      "Private boat charter through the UNESCO Sundarbans mangrove creeks with experienced tiger trackers and local naturalists",
      "Guided heritage walking tour of colonial Kolkata including the Victoria Memorial, South Park Street Cemetery, and iconic coffee houses"
    ],
    hotels: ["The Oberoi Grand, Kolkata", "Glenburn Tea Estate, Darjeeling", "Windamere Hotel, Darjeeling", "The Elgin, Darjeeling", "ITC Sonar / ITC Royal Bengal, Kolkata"],
    bestTime: "October to April (Pleasant sunny days for Darjeeling views and ideal weather for Sundarbans boat safaris)",
    duration: "6 to 9 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "West Bengal: Aristocratic Heritage, First-Flush Teas, and Mangrove Deltas",
      intro: "West Bengal is a land of intellectual richness and dramatic natural contrast. From the grand neoclassical facades of Kolkata to the terraced tea gardens of Darjeeling overlooking Kanchenjunga, it evokes a golden era of travel.",
      body: [
        "In Kolkata, stay at The Oberoi Grand, lovingly known as the 'Grande Dame of Chowringhee'. Wander past Victorian marble monuments, browse antique bookstalls on College Street, and savor authentic Bengali sweets like Mishti Doi and Sandesh.",
        "Journey north into the mist-shrouded foothills of Darjeeling. Board the 140-year-old steam toy train as its whistle echoes across pine-covered ravines, and stay at heritage plantation bungalows enjoying first-flush champagne teas.",
        "For wildlife enthusiasts, the tidal mangrove labyrinth of the Sundarbans offers a truly wild boat expedition into the kingdom of the Royal Bengal tiger and estuarine crocodiles."
      ],
      quote: "Sipping a fresh second-flush Darjeeling tea on a hillside veranda while the clouds part to reveal Kanchenjunga is an unforgettable luxury.",
      quoteAuthor: "Tea Guild International Review"
    },
    faqs: [
      { q: "How do we get to Darjeeling from Kolkata?", a: "Take a 1-hour flight from Kolkata (CCU) to Bagdogra Airport (IXB). From Bagdogra, our private luxury SUV escorts you up the picturesque mountain road to Darjeeling in approximately 3 hours." },
      { q: "What is special about Glenburn Tea Estate?", a: "Glenburn is an internationally celebrated 1,600-acre working tea plantation offering bespoke colonial suites, private river picnics, customized tea factory tours, and panoramic mountain views." },
      { q: "Are boat safaris in the Sundarbans safe?", a: "Yes. We charter private government-registered safari vessels equipped with navigation systems, experienced captains, armed forest guards, and comfortable ensuite cabins." },
      { q: "When can we see the best views of Mount Kanchenjunga?", a: "The clearer skies of October to December and March to April offer the sharpest, most unobstructed views of the snow-clad Kanchenjunga range at dawn." }
    ]
  },

  // 14. MADHYA PRADESH
  {
    slug: "madhya-pradesh",
    name: "Madhya Pradesh",
    category: "domestic",
    regionGroup: "West & Central",
    tagline: "The Heart of India, Royal Bengal Tigers & Khajuraho Temples",
    description: "India's wilderness sanctuary and historical heartland, boasting the highest concentration of Royal Bengal tigers across Kanha, Bandhavgarh, and Pench, alongside UNESCO temples in Khajuraho.",
    heroImage: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Indore", tagline: "Cleanest City & Sarafa Night Food Bazaar", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Rajwada 7-storey Holkar palace", "Sarafa Bazaar midnight culinary street", "Lal Bagh Palace European interiors"] },
      { name: "Ujjain", tagline: "Mahakaleshwar Jyotirlinga & Sacred Kshipra", image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=800&auto=format&fit=crop", highlights: ["Mahakaleshwar Bhasma Aarti VIP darshan", "Mahakal Lok corridor statues and murals", "Ram Ghat Kshipra river Aarti"] },
      { name: "Bhopal", tagline: "City of Lakes & Sanchi Stupa", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["UNESCO Sanchi Stupa Buddhist monument", "Upper Lake boat club serenity", "Bhimbetka prehistoric rock cave art"] },
      { name: "Khajuraho", tagline: "UNESCO Temples & Intricate Stone Erotica", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Kandariya Mahadeva sandstone temple", "Western Group of Temples illuminated night show", "Intricate Chandela dynasty sculptural reliefs"] },
      { name: "Pachmarhi", tagline: "Queen of the Satpura Mountain Range", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Bee Falls silver cascade", "Dhoopgarh highest point sunset view", "Jata Shankar natural cave shrine"] },
      { name: "Gwalior", tagline: "Pearl of Indian Fortresses & Scindia Palace", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop", highlights: ["Gwalior Fort hill citadel & Man Singh Palace", "Jai Vilas Palace grand crystal chandeliers", "Tansen Tomb musical memorial"] },
      { name: "Orchha", tagline: "Medieval Palaces & Betwa River Cenotaphs", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Orchha Fort complex and Jahangir Mahal", "Ram Raja Temple unique palace worship", "Betwa river sunset chhatris (cenotaphs)"] },
      { name: "Jabalpur", tagline: "Marble Rocks & Bhedaghat Dhuandhar Falls", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop", highlights: ["Dhuandhar waterfall misty roar", "Marble Rocks Narmada boat ride in moonlight", "Chausath Yogini 10th-century shrine"] },
      { name: "Kanha", tagline: "Inspiration for Kipling's The Jungle Book", image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800&auto=format&fit=crop", highlights: ["Vast Sal forest and open grassland safaris", "Rare hardground Barasingha swamp deer", "Highest predator density with wild tigers"] },
      { name: "Bandhavgarh", tagline: "Highest Royal Bengal Tiger Density", image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800&auto=format&fit=crop", highlights: ["Tala zone tiger tracking drives", "Bandhavgarh Fort ancient hilltop ruins", "Shesh Shaiya reclining Vishnu sandstone statue"] },
      { name: "Pench", tagline: "Mowgli's Homeland & Teak Forest Safaris", image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800&auto=format&fit=crop", highlights: ["Turia zone open Gypsy game drives", "Night safari drives in buffer zones", "Luxury safari lodges with private machans"] }
    ],
    signatureExperiences: [
      "Exclusive private 4x4 tiger tracking safaris in Kanha and Bandhavgarh with senior Taj Safaris naturalists",
      "VIP pre-booked entry for the mystical 4:00 AM Bhasma Aarti at Mahakaleshwar Jyotirlinga in Ujjain",
      "Private boat ride through the shimmering 100-foot marble gorge at Bhedaghat under a full moon",
      "Stay in Taj Safari luxury lodges where evening campfires feature wildlife talks and bush dinners"
    ],
    hotels: ["Mahua Kothi, a Taj Safari - Bandhavgarh", "Banjaar Tola, a Taj Safari - Kanha", "Baghvan, a Taj Safari - Pench", "The Radisson Blu Hotel Indore", "Usha Kiran Palace, Gwalior"],
    bestTime: "October to April (Pleasant safari weather, clear forest roads, and excellent tiger tracking conditions)",
    duration: "6 to 10 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Madhya Pradesh: The Untamed Soul of the Jungle and Ancient Stone",
      intro: "Madhya Pradesh is where Rudyard Kipling set The Jungle Book and where Chandela kings carved poetry into golden sandstone. It is the geographic and spiritual heart of India, blessed with primeval forests and timeless monuments.",
      body: [
        "In Kanha and Bandhavgarh, step into open-top 4x4 safaris driven by expert naturalists. Watch the morning mist rise from sal forests as alarm calls of spotted deer signal a Royal Bengal tiger crossing the jungle track.",
        "In Khajuraho, marvel at the UNESCO World Heritage temples whose outer walls are covered in thousands of stone carvings depicting divine joy, celebration, and everyday life in the 10th century.",
        "In Ujjain, witness the ancient Bhasma Aarti at the Mahakaleshwar temple, and stroll through the romantic medieval ruins of Orchha on the banks of the Betwa River."
      ],
      quote: "Watching a wild Bengal tiger walk quietly through the sal glades of Bandhavgarh is a moment that redefines the word magnificent.",
      quoteAuthor: "Taj Safaris Senior Naturalist"
    },
    faqs: [
      { q: "Which national park in MP offers the best chance to see a tiger?", a: "Bandhavgarh boasts one of the highest tiger densities in the world, making sightings frequent. Kanha is renowned for vast scenic landscapes, and Pench is easily accessible from Nagpur Airport." },
      { q: "How do we attend the Bhasma Aarti in Ujjain?", a: "Bhasma Aarti takes place daily at 4:00 AM. Advance online registration and strict dress codes are mandatory. Sobhavi Travels assists in securing your confirmed entry pass." },
      { q: "When are the national parks in Madhya Pradesh open?", a: "National parks are open from October 1 to June 30 every year and closed during the monsoon months (July to September). Core zones are closed every Wednesday afternoon." },
      { q: "How do we reach Khajuraho and the wildlife lodges?", a: "Khajuraho has its own airport (HJR) with connections from Delhi. For Kanha and Pench, flights to Nagpur or Jabalpur offer convenient chauffeur transfers to luxury lodges." }
    ]
  },

  // 15. ANDHRA PRADESH
  {
    slug: "andhra-pradesh",
    name: "Andhra Pradesh",
    category: "domestic",
    regionGroup: "South India",
    tagline: "Sacred Tirupati, Coastal Visakhapatnam & Grand Canyon of Gandikota",
    description: "From the world's most revered pilgrimage hill shrine at Tirumala to the turquoise waters of Vizag, aromatic coffee in Araku, and the dramatic red gorge of Gandikota.",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Visakhapatnam (Vizag)", tagline: "The City of Destiny, Beaches & Submarine Museum", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Rishikonda Blue Flag beach water sports", "Kailasagiri hilltop panoramic view", "INS Kursura real submarine museum"] },
      { name: "Tirupati", tagline: "Spiritual Abode of Lord Venkateswara at Tirumala", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Tirumala Venkateswara Temple VIP darshan", "Sri Padmavathi Ammavari Temple", "Sacred Silathoranam natural stone arch"] },
      { name: "Vijayawada", tagline: "Kanaka Durga Temple & Krishna River", image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=800&auto=format&fit=crop", highlights: ["Kanaka Durga Temple atop Indrakeeladri hill", "Undavalli 7th-century monolithic rock-cut caves", "Prakasam Barrage & Bhavani Island boat ride"] },
      { name: "Araku Valley", tagline: "Eastern Ghats Mist, Tribal Coffee & Borra Caves", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Million-year-old Borra Caves stalactites", "Organic tribal coffee plantations and museum", "Vistadome glass-roof train ride from Vizag"] },
      { name: "Amaravati", tagline: "Ancient Buddhist Heartland on the Krishna", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Amaravati Maha Stupa ancient Buddhist relics", "125-foot Dhyana Buddha statue", "Amareswara Shiva Temple on Krishna banks"] },
      { name: "Srisailam", tagline: "Sacred Mallikarjuna Jyotirlinga in Nallamala Forests", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Mallikarjuna Swamy Jyotirlinga and Shakti Peetha", "Srisailam Dam on the Krishna River", "Patala Ganga ropeway and boat ride"] },
      { name: "Gandikota", tagline: "The Grand Canyon of India", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Pennar River gorge cutting through red granite cliffs", "13th-century Gandikota sandstone fort", "Sunset cliff photography and glamping"] }
    ],
    signatureExperiences: [
      "VIP protocol darshan at Tirumala Sri Venkateswara Temple arranged through authorized channels",
      "Ride the scenic Vistadome glass-roof scenic train through 58 tunnels climbing from Vizag to Araku Valley",
      "Private cliffside sunset champagne view over the Grand Canyon of Gandikota",
      "Private boat safari through the Nagarjunasagar-Srisailam Tiger Reserve forest gorges"
    ],
    hotels: ["The Gateway Hotel Beach Road, Visakhapatnam", "Novotel Visakhapatnam Varun Beach", "Fortune Select Grand Ridge, Tirupati", "Marasa Sarovar Premiere, Tirupati", "The Gateway Hotel M G Road, Vijayawada"],
    bestTime: "October to March (Pleasant coastal breezes and cool weather in Araku Valley)",
    duration: "5 to 8 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Andhra Pradesh: Sacred Hill Shrines, Pristine Coastlines, and Dramatic Gorges",
      intro: "Andhra Pradesh weaves together ancient spiritual energy with astonishing geography. From the sacred peaks of the Seshachalam hills in Tirupati to the dramatic red granite gorge of Gandikota, this state is a revelation.",
      body: [
        "In Visakhapatnam, modern luxury hugs the coastline where the Eastern Ghats plunge directly into the Bay of Bengal. Board the scenic Vistadome train through lush valleys into Araku, sipping freshly harvested organic coffee.",
        "At Tirumala, experience the divine grace of Sri Venkateswara Swamy, receiving sacred laddu prasadam through curated VIP protocol arrangements.",
        "Further west in Kadapa district, stand before the breathtaking Grand Canyon of Gandikota, where the Pennar River has carved a deep red chasm through ancient rock, framed by the ramparts of a medieval fortress."
      ],
      quote: "Looking down into the Pennar River gorge from the parapets of Gandikota feels like standing on the edge of the world.",
      quoteAuthor: "Outlook Traveller Feature"
    },
    faqs: [
      { q: "How is VIP Darshan arranged at Tirupati Tirumala?", a: "We coordinate with authorized TTD protocol services for Special Entry Darshan (SED) tickets, minimizing wait times and managing private transfers up the sacred Tirumala hill." },
      { q: "What is the Vistadome train experience to Araku Valley?", a: "The Vistadome coach features 360-degree rotating seats, transparent glass ceilings, and large observation windows, offering panoramic views as the train climbs the Eastern Ghats." },
      { q: "Is Gandikota suitable for a luxury stay?", a: "Gandikota features Haritha resorts and premium glamping options, or can be visited on a day excursion from luxury hotels in Kadapa." },
      { q: "How many days are recommended for Vizag and Araku?", a: "A 4-day itinerary allows you to enjoy 2 days in coastal Visakhapatnam and 2 days in the cool hills of Araku Valley." }
    ]
  },

  // 16. TELANGANA
  {
    slug: "telangana",
    name: "Telangana",
    category: "domestic",
    regionGroup: "South India",
    tagline: "Nizami Splendor, Biryani Heritage & UNESCO Monolithic Temples",
    description: "The land of the Nizams, where the world's most opulent palace hotels meet futuristic IT campuses, Kakatiya stone engineering, and aromatic Hyderabadi culinary traditions.",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Hyderabad", tagline: "City of Pearls, Charminar & Falaknuma Palace", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Golconda Fort acoustic light and sound show", "Charminar & Laad Bazaar pearl shopping", "Dining at the 101-seat table at Taj Falaknuma Palace"] },
      { name: "Warangal", tagline: "Kakatiya Dynasty Forts & Thousand Pillar Temple", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Warangal Fort stone gateway arches (Keerthi Thoranas)", "Thousand Pillar Temple star-shaped architecture", "Bhadrakali Temple lake walks"] },
      { name: "Ramappa", tagline: "UNESCO World Heritage Floating Brick Temple", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["13th-century Ramappa Temple built with floating bricks", "Exquisite sculpted dancing bracket figures", "Scenic Ramappa Lake boat rides"] },
      { name: "Nagarjuna Sagar", tagline: "World's Largest Masonry Dam & Island Museum", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop", highlights: ["Massive 26-crest gate masonry dam", "Speedboat to Nagarjunakonda island Buddhist museum", "Ethipothala 70-foot waterfall cascade"] },
      { name: "Bhadrachalam", tagline: "Sacred Sree Seetha Ramachandra Swamy on Godavari", image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?q=80&w=800&auto=format&fit=crop", highlights: ["Historic 17th-century Rama Temple darshan", "Godavari River boat rides and holy bathing", "Parnasala sacred Ramayana landmark"] }
    ],
    signatureExperiences: [
      "Arrive by horse-drawn royal carriage to Taj Falaknuma Palace, enjoying high tea on the jade terrace overlooking Hyderabad",
      "Private heritage walking tour through Golconda Fort with acoustic demonstrations where claps echo half a kilometer away",
      "Curated Nizami banquet sampling authentic Dum Biryani, Haleem, and Mirchi ka Salan in an aristocratic private haveli",
      "Day tour to UNESCO Ramappa Temple marveling at the 800-year-old floating bricks that survive earthquakes"
    ],
    hotels: ["Taj Falaknuma Palace, Hyderabad", "ITC Kohenur, a Luxury Collection Hotel, Hyderabad", "The Park Hyderabad", "Taj Krishna, Banjara Hills", "Trident Hyderabad"],
    bestTime: "October to March (Pleasant winter sunshine, perfect for heritage monuments and dining)",
    duration: "4 to 7 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Telangana: The Aristocratic Legacy of the Nizams and Kakatiya Marvels",
      intro: "Nowhere in India does regal hospitality fuse with legendary cuisine quite like in Telangana. From the glittering crystal chandeliers of Taj Falaknuma Palace to the floating-brick stone temples of Ramappa, this state dazzles.",
      body: [
        "In Hyderabad, step into the golden age of the Nizams — once the richest monarchs on the planet. Reside atop a hill at Falaknuma Palace, where palace historians walk you through Venetian chandeliers, Italian marble staircases, and royal libraries.",
        "Explore the towering ramparts of Golconda Fort, where the world's most legendary diamonds including the Koh-i-Noor were once traded. Wander past the Charminar before an unforgettable culinary evening savoring authentic Hyderabadi Dum Biryani.",
        "A short drive away, discover the architectural genius of the Kakatiyas at Warangal and the UNESCO-listed Ramappa Temple, whose carved sandstone dancing figures have mesmerized art lovers for eight centuries."
      ],
      quote: "To dine at the 101-seat dining table at Taj Falaknuma Palace is to touch the absolute peak of aristocratic Indian living.",
      quoteAuthor: "Harper's Bazaar Luxury Travel"
    },
    faqs: [
      { q: "Can non-residents dine at Taj Falaknuma Palace?", a: "Taj Falaknuma Palace maintains strict entry only for registered hotel guests and confirmed fine dining reservations. Sobhavi Travels pre-books your afternoon high tea or private dinner reservations." },
      { q: "What makes the Ramappa Temple a UNESCO World Heritage Site?", a: "Constructed in 1213 AD, the temple is an engineering marvel built with lightweight porous 'floating bricks' and earthquake-resistant sandbox foundation technology, decorated with masterfully carved granite sculptures." },
      { q: "How many days are needed to explore Hyderabad?", a: "We recommend 3 to 4 days to comfortably explore the palaces, Golconda Fort, museums, Ramoji Film City, and enjoy the city's legendary culinary scene." },
      { q: "What is the best shopping in Hyderabad?", a: "Hyderabad is world-renowned for authentic Basra pearls, traditional Laad Bazaar lacquer bangles, Pochampally handwoven ikat sarees, and Bidri silver inlay art." }
    ]
  },

  // 17. ODISHA
  {
    slug: "odisha",
    name: "Odisha",
    category: "domestic",
    regionGroup: "East & Islands",
    tagline: "Konark Sun Chariot, Sacred Puri & Irrawaddy Dolphins",
    description: "India's best-kept secret, where the architectural wonder of Konark's Sun Temple stands by the sea, Lord Jagannath blesses millions in Puri, and Chilika Lake hosts Asia's largest lagoon bird sanctuary.",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Bhubaneswar", tagline: "Temple City of India & Lingaraj Shrine", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["11th-century Lingaraj Temple Kalinga spire", "Udayagiri & Khandagiri 1st-century Jain caves", "Dhauli Shanti Stupa peace pagoda overlooking Daya River"] },
      { name: "Puri", tagline: "Sacred Jagannath Dham & Golden Beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Shree Jagannath Temple Mahaprasad culinary rituals", "Puri Golden Beach Blue Flag certified promenade", "Raghurajpur heritage Pattachitra artisan village"] },
      { name: "Konark", tagline: "UNESCO Sun Temple Colossal Stone Chariot", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["24 monumental carved stone chariot wheels", "Chandrabhaga serene beach sunset", "Annual Konark Dance Festival classical stage"] },
      { name: "Chilika", tagline: "Asia's Largest Brackish Water Lagoon & Dolphins", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Rare Irrawaddy dolphin boat spotting at Satapada", "Over 1 million migratory winter birds at Mangalajodi", "Kalijai island temple cruise"] },
      { name: "Gopalpur", tagline: "Vintage Lighthouse & Quiet Colonial Beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Historic 19th-century lighthouse panorama", "Pristine uncrowded cashew groves and beaches", "Serene seaside heritage relaxation"] }
    ],
    signatureExperiences: [
      "Sunrise private docent tour of the 13th-century Konark Sun Temple explaining the astronomical precision of its sundial wheels",
      "Private motorized boat safari through the tranquil waters of Chilika Lake spotting endangered Irrawaddy dolphins",
      "Exclusive visit to Raghurajpur heritage craft village where every home is an art studio painting palm-leaf Pattachitra",
      "VIP Mahaprasad dining experience sampling the world-renowned 56-offering Chappan Bhog prepared in Puri's ancient kitchen"
    ],
    hotels: ["Mayfair Waves, Puri", "Mayfair Lagoon, Bhubaneswar", "Mayfair Palm Beach Resort, Gopalpur", "Toshali Sands Resort, Puri", "Welcomhotel by ITC Hotels, Bhubaneswar"],
    bestTime: "October to March (Comfortable pleasant weather for temple visits and coastal birdwatching)",
    duration: "5 to 8 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Odisha: Sculpted Chariots, Sacred Oceans, and Living Craft",
      intro: "Odisha is a treasure of refined classical art and pristine coastlines. Here, where the Bay of Bengal meets ancient Kalinga temple spires, faith and stone masonry have merged in absolute harmony for over a thousand years.",
      body: [
        "In Bhubaneswar, discover over five hundred historic stone temples whose intricately carved sandstone friezes showcase classical Odissi dance postures. Travel to sacred Puri to experience the oceanfront presence of the Jagannath Temple.",
        "At Konark, stand before the colossal Sun Temple designed as the sun god Surya's 24-wheeled chariot pulled by galloping stone horses. The wheels function as precise astronomical sundials whose shadows indicate the exact minute of the day.",
        "Glide silently across Chilika Lake, Asia's largest brackish lagoon, watching rare Irrawaddy dolphins breach the surface while flocks of pink flamingos feed in the tranquil shallows."
      ],
      quote: "The language of man is defeated by the language of stone in the sculptures of Konark.",
      quoteAuthor: "Rabindranath Tagore"
    },
    faqs: [
      { q: "What is the Golden Triangle of Odisha?", a: "The Golden Triangle connects Bhubaneswar (Temple City), Puri (Holy Jagannath Dham), and Konark (UNESCO Sun Temple), all located within an easy 1 to 2-hour drive of each other." },
      { q: "Can non-Hindus enter the Jagannath Temple in Puri?", a: "Entry inside the main sanctum is traditionally restricted to Hindus, but all visitors can view the grand temple complex from the Raghunandan Library rooftop and experience the vibrant chariot festivals and Mahaprasad." },
      { q: "When can we spot migratory birds in Chilika Lake?", a: "Over one million migratory birds arrive from Siberia, Mongolia, and Central Asia between November and February, creating an incredible birdwatching spectacle at Mangalajodi." },
      { q: "What is Pattachitra art?", a: "Pattachitra is a 1,000-year-old traditional cloth-based scroll painting art using natural stone and vegetable pigments, preserved by hereditary master artists in Raghurajpur village." }
    ]
  },

  // 18. PUNJAB
  {
    slug: "punjab",
    name: "Punjab",
    category: "domestic",
    regionGroup: "North & Himalayas",
    tagline: "Golden Temple Splendor, Wagah Border Patriotism & Royal Patiala",
    description: "The land of five rivers, celebrated worldwide for the radiant Golden Temple, heartwarming hospitality, rich agricultural heritage, and delicious North Indian gastronomy.",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Amritsar", tagline: "Sri Harmandir Sahib & Historic Heart", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Sri Harmandir Sahib (Golden Temple) night illumination", "World's largest free community kitchen (Langar)", "Jallianwala Bagh national memorial & Partition Museum"] },
      { name: "Wagah Border", tagline: "Electrifying Beating Retreat Ceremony", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["VIP grandstand seating for the daily retreat ceremony", "Border Security Force (BSF) ceremonial drill", "High-energy patriotic music and flag-lowering"] },
      { name: "Patiala", tagline: "Royal Palaces, Qila Mubarak & Phulkari Craft", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop", highlights: ["Qila Mubarak 18th-century Sikh palace complex", "Sheesh Mahal mirror palace art collection", "Traditional Patiala Shahi turban and jutti markets"] },
      { name: "Anandpur Sahib", tagline: "Holy City of Bliss & Khalsa Birthplace", image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800&auto=format&fit=crop", highlights: ["Takht Sri Kesgarh Sahib historic fortress shrine", "Virasat-e-Khalsa state-of-the-art museum", "Hola Mohalla vibrant martial arts festival"] }
    ],
    signatureExperiences: [
      "Night visit to the Golden Temple to witness the Palki Sahib ceremony as the holy Guru Granth Sahib is carried in a flower-draped golden palanquin",
      "VIP protocol seating at the Wagah Border Beating Retreat ceremony with unobstructed views of the ceremonial gates",
      "Private luxury farm stay experience in Punjab's lush mustard fields with tractor rides, tandoori cooking, and folk Bhangra",
      "Guided culinary heritage walk through Old Amritsar tasting authentic Amritsari Kulcha, Makki di Roti, and creamy sweet Lassi"
    ],
    hotels: ["Taj Swarna, Amritsar", "Hyatt Regency Amritsar", "Welcomhotel by ITC Hotels, Raja Sansi, Amritsar", "The Kikar Lodge, Anandpur Sahib", "Baradari Palace, a Neemrana Hotel, Patiala"],
    bestTime: "October to March (Crisp pleasant days and cool evenings, with golden blooming mustard fields in winter)",
    duration: "3 to 6 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Punjab: The Radiant Gold of Harmandir Sahib and Royal Valor",
      intro: "Punjab touches every traveler with the purity of its devotion and the generosity of its spirit. Nowhere on earth is hospitality as heartfelt as around the sacred waters of Amritsar's Amrit Sarovar.",
      body: [
        "At the Golden Temple, the marble parikrama reflects the gilded sanctum where sacred Gurbani kirtan floats over the water twenty-four hours a day. Participate in the Langar, where thousands of pilgrims sit shoulder to shoulder in absolute equality.",
        "Just thirty minutes from the city, the India-Pakistan border at Wagah transforms into a thunderous spectacle of precision marching and patriotic pride during the sunset Beating Retreat ceremony.",
        "Continue south to royal Patiala to explore Qila Mubarak and taste royal Punjabi culinary traditions, surrounded by lush mustard fields that inspired generations of poetry and song."
      ],
      quote: "The peace that descends upon you while sitting by the sacred waters of the Golden Temple at midnight stays with you for a lifetime.",
      quoteAuthor: "BBC Travel Documentary"
    },
    faqs: [
      { q: "What is the Palki Sahib ceremony at the Golden Temple?", a: "Every night around 10:00 PM and early morning at 4:30 AM, the Guru Granth Sahib is ceremonially escorted between the sanctum and the Akal Takht in a gold palanquin adorned with fresh roses, accompanied by cymbals and chanting." },
      { q: "How do we get VIP seats at the Wagah Border ceremony?", a: "Sobhavi Travels arranges registered VIP gallery passes with dedicated parking permits and escorts, ensuring comfortable close-up seating without standing in public queues." },
      { q: "What should we eat in Amritsar?", a: "Amritsar is India's culinary capital for street food: crispy butter-drenched Amritsari Kulchas with Chole, tandoori chicken, freshly fried Amritsari fish, and rich churned lassis in clay kulhars." },
      { q: "How far is Amritsar from Delhi?", a: "Amritsar is a short 50-minute direct flight from Delhi, or an easy 5-hour journey aboard the comfortable Vande Bharat Express train." }
    ]
  },

  // 19. SIKKIM
  {
    slug: "sikkim",
    name: "Sikkim",
    category: "domestic",
    regionGroup: "East & Islands",
    tagline: "High Mountain Passes, Sacred Glacial Lakes & Organic Valleys",
    description: "India's pristine 100% organic Himalayan state, where snow-draped Kanchenjunga watches over ancient Tibetan monasteries, valley of flowers, and high-altitude alpine passes.",
    heroImage: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Gangtok", tagline: "Clean Mountain Capital & MG Marg", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Pedestrian-only MG Marg promenade", "Rumtek Monastery Dharma Chakra Center", "Tashi Viewpoint Kanchenjunga sunrise"] },
      { name: "Pelling", tagline: "Closest Vistas of Mount Kanchenjunga", image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop", highlights: ["Skywalk glass bridge overlooking valleys", "Pemayangtse 300-year-old monastery", "Rabdentse palace stone ruins in pine forests"] },
      { name: "Lachung", tagline: "Snow Village & Gateway to Yumthang", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Quaint wooden alpine chalets", "Lachung River roaring glacial waters", "Starting point for Zero Point snow adventures"] },
      { name: "Lachen", tagline: "Base for Sacred Gurudongmar Lake", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Gurudongmar Lake (17,800 ft sacred glacial lake)", "Lachen Monastery panoramic overlook", "Chopta Valley alpine meadows"] },
      { name: "Yumthang Valley", tagline: "Valley of Flowers & Hot Thermal Springs", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["24 species of blooming rhododendrons in spring", "Zero Point (Yumesamdong) year-round snow fields", "Natural sulphur healing hot springs"] },
      { name: "Nathula Pass", tagline: "Historic Indo-China Silk Route Pass", image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop", highlights: ["14,140 ft high mountain pass border view", "Tsomgo (Changu) glacial lake yak rides", "Baba Harbhajan Singh memorial shrine"] },
      { name: "Ravangla", tagline: "Tathagata Tsal & Buddha Park", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["130-foot statue of Lord Buddha", "Ralang Monastery Kagyu sect center", "Panoramic mountain backdrop"] }
    ],
    signatureExperiences: [
      "Drive to the sacred turquoise waters of Gurudongmar Lake at 17,800 feet — one of the highest accessible lakes on earth",
      "Walk the Pelling Glass Skywalk suspended 7,200 feet above the valley directly facing the snow peak of Kanchenjunga",
      "Private VIP permits and 4x4 drive to Nathula Pass along the ancient Silk Route bordering Tibet",
      "Stay in luxury mountain chalets in Lachung dining on organic Himalayan farmhouse meals by crackling bukhari fires"
    ],
    hotels: ["Mayfair Spa Resort & Casino, Gangtok", "The Elgin Mount Pandim, Pelling", "Yarlam Resort, Lachung", "Denzong Regency, Gangtok", "The Elgin Nor-Khill, Gangtok"],
    bestTime: "March to May (Vibrant rhododendron blooms & pleasant weather) or October to mid-December (Crystal-clear Kanchenjunga mountain panoramas)",
    duration: "6 to 9 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Sikkim: The Organic Kingdom in the Shadow of Kanchenjunga",
      intro: "Sikkim is a sanctuary of calm, cleanliness, and celestial peaks. Certified as the world's first 100% organic state, its terraced valleys, rushing glacial torrents, and serene gompas are presided over by Mount Kanchenjunga.",
      body: [
        "In Gangtok, walk along the immaculately clean pedestrian boulevard of MG Marg, exploring traditional Tibetan emporiums before visiting Rumtek Monastery to witness monks debating ancient philosophy in courtyards draped in prayer flags.",
        "Travel north into high alpine wilderness where Lachung and Lachen shelter beneath towering vertical granite walls. Ascend to the sacred waters of Gurudongmar Lake, where cobalt water mirrors snowy mountain peaks at nearly 18,000 feet.",
        "In spring, the Yumthang Valley erupts in colors of wild rhododendrons, primulas, and blue poppies, offering one of the most stunning botanical spectacles in the Himalayas."
      ],
      quote: "Sikkim proves that human civilization and fragile Himalayan ecology can coexist in pure, breathtaking harmony.",
      quoteAuthor: "National Geographic Traveler"
    },
    faqs: [
      { q: "Are special permits needed for visiting North Sikkim and Nathula Pass?", a: "Yes, protected area permits are required for Indian nationals (and restricted permits for foreign nationals) for Nathula Pass, Lachung, Lachen, and Gurudongmar. Sobhavi Travels handles all permit applications seamlessly." },
      { q: "Can children and seniors visit Gurudongmar Lake?", a: "Because Gurudongmar Lake is at 17,800 feet, oxygen levels are low. While suitable for healthy travelers with proper acclimatization, we provide portable oxygen cylinders and vehicle safety gear." },
      { q: "What airport serves Sikkim?", a: "Pakyong Airport (PYG) is near Gangtok, with flights operating in fair weather. The primary dependable airport is Bagdogra (IXB) in West Bengal, approximately 4.5 hours scenic drive from Gangtok." },
      { q: "What is Sikkim's local cuisine like?", a: "Sikkimese cuisine is fresh, organic, and delicious: steamed momos with spicy chili chutney, hot thukpa noodle soups, Gundruk (fermented leafy greens), and Tibetan tingmo breads." }
    ]
  },

  // 20. ANDAMAN & NICOBAR
  {
    slug: "andaman-nicobar",
    name: "Andaman & Nicobar Islands",
    category: "domestic",
    regionGroup: "East & Islands",
    tagline: "Turquoise Lagoons, Radhanagar Sunsets & Coral Reef Diving",
    description: "An archipelago of emerald islands in the Bay of Bengal, featuring Asia's finest white-sand beaches, vibrant coral reefs, private catamaran transfers, and untouched marine reserves.",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Port Blair / Sri Vijaya Puram", tagline: "Island Capital & Historic Cellular Jail", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Cellular Jail national memorial & light and sound show", "Corbyn's Cove coastal drive", "Samudrika Naval Marine Museum"] },
      { name: "Havelock / Swaraj Dweep", tagline: "Radhanagar Beach & World-Class Scuba Diving", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Radhanagar Beach (voted Best Beach in Asia by TIME)", "Elephant Beach water sports and snorkeling", "Kayaking through bioluminescent night mangroves"] },
      { name: "Neil / Shaheed Dweep", tagline: "Quiet Island, Natural Coral Bridge & Shell Beaches", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Natural rock formation bridge (Howrah Bridge)", "Bharatpur Beach shallow reef coral walks", "Laxmanpur Beach sunset serenity"] },
      { name: "Baratang", tagline: "Limestone Caves & Mangrove Safari", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop", highlights: ["Dense mangrove creek speedboat safari", "Sedimentary limestone cave stalagmites", "Mud volcano geological wonder"] },
      { name: "Ross Island (Netaji Subhash Chandra Bose Dweep)", tagline: "Colonial Ruins in Banyan Roots", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Historic British administrative ruins wrapped in fig roots", "Wild spotted deer and peacocks roaming freely", "Island museum and evening sound show"] },
      { name: "North Bay", tagline: "Coral Island on the 20-Rupee Note", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Sea walking on the ocean floor", "Semi-submarine glass bottom coral view", "Lighthouse seen on the Indian 20-rupee currency note"] }
    ],
    signatureExperiences: [
      "VIP Makruzz Gold / Nautika high-speed private catamaran cruise between Port Blair, Havelock, and Neil Islands",
      "Private sunset beachfront dinner on the powder-white sands of Radhanagar Beach with chilled champagne",
      "Guided PADI certified scuba dive in Havelock's crystal-clear coral gardens alongside sea turtles and manta rays",
      "Night sea kayaking through the tranquil mangroves of Havelock admiring natural bioluminescent plankton"
    ],
    hotels: ["Taj Exotica Resort & Spa, Andamans (Havelock)", "Barefoot at Havelock", "Symphony Palms Beach Resort, Havelock", "Sea Shell, Neil Island", "Welcomhotel by ITC Hotels, Bay Island, Port Blair"],
    bestTime: "October to May (Calm turquoise waters, sunny days and ideal underwater visibility)",
    duration: "5 to 8 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Andaman Islands: Asia's Most Pristine Turquoise Sanctuaries",
      intro: "Fringed by swaying palms and lapped by waters in every imaginable shade of aquamarine, the Andaman archipelago is India's premier tropical paradise. Far removed from crowded tourist tracks, these islands offer untouched marine wilderness.",
      body: [
        "Your island retreat centers around Havelock (Swaraj Dweep). Reside at Taj Exotica Resort & Spa, where sustainable villas crafted from plantation timber sit secluded in fifty acres of coconut groves opening directly onto Radhanagar Beach.",
        "Voted Asia's finest beach by TIME Magazine, Radhanagar's powder-soft sands slope gently into calm, crystal-clear surf. Board private dive boats to offshore coral pinnacles where visibility frequently exceeds twenty-five meters.",
        "On tranquil Neil Island, cycle past quiet organic farming hamlets to deserted coastlines where low tides reveal natural coral bridges and colorful reef fish swimming in tide pools."
      ],
      quote: "Radhanagar Beach at sunset, when the sea turns molten gold against white sand, is one of the world's most serene sights.",
      quoteAuthor: "TIME Magazine Global Beach Ranking"
    },
    faqs: [
      { q: "How do we travel between Port Blair, Havelock, and Neil Islands?", a: "We book reserved premium/business class seats aboard air-conditioned private high-speed catamarans (Makruzz or Nautika), which cross the azure waters in just 90 minutes." },
      { q: "Do I need a passport or visa to visit the Andaman Islands?", a: "Indian citizens do not need a passport or permit to visit Port Blair, Havelock, or Neil. Foreign nationals are granted an automatic Restricted Area Permit (RAP) on arrival at Port Blair airport." },
      { q: "Is scuba diving safe for beginners who cannot swim?", a: "Yes. Certified PADI instructors provide Discover Scuba Diving (DSD) programs where you are accompanied one-on-one down to 8-12 meters without needing any swimming experience." },
      { q: "When is the best time for water sports and diving in the Andamans?", a: "October through May offers the calmest seas, clearest underwater visibility, and bright sunny weather. Scuba diving, sea walking, and snorkeling are at their prime." }
    ]
  },

  // 21. LAKSHADWEEP
  {
    slug: "lakshadweep",
    name: "Lakshadweep",
    category: "domestic",
    regionGroup: "East & Islands",
    tagline: "Untouched Coral Atolls, Turquoise Lagoons & Island Seclusion",
    description: "India's most exclusive island paradise, where shallow crystal lagoons surround coral atolls, shipwrecks host sea turtles, and visitor numbers are strictly limited to preserve pristine ecology.",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Agatti", tagline: "Gateway Island with Scenic Coral Airstrip", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Spectacular flight landing on a narrow strip surrounded by turquoise sea", "Agatti lagoon kayaking and glass-bottom boating", "Snorkeling among living coral reefs"] },
      { name: "Bangaram", tagline: "Tear-Drop Shaped Uninhabited Luxury Island", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop", highlights: ["Uninhabited island paradise open to global visitors", "Pristine lagoon with green sea turtles and stingrays", "Phosphorescent bioluminescent night waters"] },
      { name: "Kavaratti", tagline: "Administrative Capital & Coral Aquarium", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Marine Aquarium with exotic reef species", "Urja Mosque carved wooden architecture", "Water sports complex and dolphin watching"] },
      { name: "Kalpeni", tagline: "Scenic Coral Debris Banks & Tip Beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Huge bank of coral boulders along shores", "Koomel bay shallow reef walks", "Kayaking and sailing on flat calm lagoons"] },
      { name: "Kadmat", tagline: "Long Narrow Island & Water Sports Institute", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Spectacular lagoon on both sides of the island", "PADI diving school and reef exploration", "Endless white sand stretches"] }
    ],
    signatureExperiences: [
      "Landing on Agatti's narrow ocean airstrip — ranked among the world's most scenic aerial arrivals",
      "Private boat transfer to the uninhabited jewel of Bangaram Island for exclusive eco-beachfront bungalow stays",
      "Snorkeling in shallow, crystal lagoons with hundred-year-old green sea turtles swimming calmly beside you",
      "Night beach dining with freshly caught grilled tuna and coconut under skies completely free of light pollution"
    ],
    hotels: ["Bangaram Island Resort", "Agatti Island Beach Resort", "Kadmat Beach Resort", "Kavaratti Island Tourist Huts"],
    bestTime: "October to mid-May (Dry sunny weather, flat crystal-clear lagoons and peak scuba visibility)",
    duration: "4 to 7 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Lakshadweep: A Thousand Islands of Untouched Turquoise Seclusion",
      intro: "Scattered like emeralds across the Arabian Sea, the thirty-six coral atolls of Lakshadweep are India's best-preserved marine paradise. Strictly controlled entry permits ensure these shallow turquoise lagoons remain pristine and completely uncrowded.",
      body: [
        "Your flight lands on Agatti Island, where the runway seems to float directly on the blue ocean. Board a private speedboat across open sea to Bangaram Island, a teardrop-shaped islet ringed by powdery white coral sands.",
        "Here, there are no commercial crowds, no traffic, and no noise. The shallow lagoon stretches for kilometers in shades of turquoise and jade, so clear that sea turtles and rays are visible right from the beach.",
        "Wander along sandbars that appear and disappear with the tide, explore living coral gardens with certified divers, and sleep in beachfront cottages where the only sound is gentle waves lapping the shore."
      ],
      quote: "Lakshadweep is what the Maldives was fifty years ago: pure, wild, and heartbreakingly beautiful.",
      quoteAuthor: "Marine Conservation Society"
    },
    faqs: [
      { q: "Are entry permits required for Lakshadweep?", a: "Yes, every traveler (including Indian citizens) requires an official Lakshadweep Administration Entry Permit. Sobhavi Travels processes your police verification, paperwork, and confirmed permits." },
      { q: "How do we reach Lakshadweep?", a: "Daily direct flights operate from Kochi (COK) to Agatti Island (AGX). From Agatti, speedboats or seasonal helicopter transfers connect you to Bangaram and Kadmat islands." },
      { q: "Is alcohol permitted in Lakshadweep?", a: "Alcohol is strictly prohibited on all inhabited islands of Lakshadweep, with the sole exception of Bangaram Island Resort where authorized bar services are available." },
      { q: "What should we pack for Lakshadweep?", a: "Reef-safe sunscreen, comfortable swimwear, polarized sunglasses, underwater cameras, and lightweight cotton clothing. ATMs are limited, so carrying sufficient cash is recommended." }
    ]
  },

  // 22. PUDUCHERRY
  {
    slug: "puducherry",
    name: "Puducherry",
    category: "domestic",
    regionGroup: "South India",
    tagline: "French Colonial Quarters, Auroville & Coastal Boulevards",
    description: "The French Riviera of the East, where mustard-yellow villas line bougainvillea-draped streets, cycling lanes lead to chic bakeries, and Auroville offers a global spiritual haven.",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Puducherry (White Town)", tagline: "French Heritage Quarter & Cobblestone Streets", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop", highlights: ["Mustard-yellow French colonial villas with arched gates", "Sri Aurobindo Ashram peaceful meditation halls", "Artisan cafes serving buttery croissants and cafe au lait"] },
      { name: "Auroville", tagline: "Universal City of Peace & Matrimandir", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", highlights: ["Golden metallic globe of the Matrimandir meditation hall", "Sustainable organic communities and forest rewilding", "Auroville Visitors Centre handicrafts and organic dining"] },
      { name: "Paradise Beach", tagline: "Chunnambar Ferry & Golden Sands", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["Scenic backwater ferry boat ride from Chunnambar", "Clean uncrowded golden sands on the Bay of Bengal", "Gentle ocean swimming and thatched cabanas"] },
      { name: "Promenade Beach", tagline: "Seaside Rock Boulevard & Gandhi Statue", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", highlights: ["1.5 km vehicular-free evening pedestrian promenade", "Historic French War Memorial & 19th-century lighthouse", "Ocean breezes and moonlit dining along the rocks"] }
    ],
    signatureExperiences: [
      "Guided vintage bicycle ride through the French Quarter with an architectural historian exploring Franco-Tamil colonial homes",
      "VIP inner chamber meditation access pass inside the golden Matrimandir in Auroville",
      "Private boat cruise from Chunnambar backwaters to the isolated sands of Paradise Beach for a coastal picnic",
      "Multi-course French-Creole gourmet dinner paired with curated European wines in a restored 18th-century courtyard"
    ],
    hotels: ["Palais de Mahe - CGH Earth, White Town", "La Villa, Pondicherry", "The Promenade, Pondicherry", "Le Dupleix, White Town", "Accord Puducherry"],
    bestTime: "October to March (Pleasant coastal breezes, cool morning strolls, and mild sunny days)",
    duration: "3 to 5 Days",
    currency: "Indian Rupee (INR)",
    editorialArticle: {
      title: "Puducherry: French Colonial Elegance and Coastal Serenity",
      intro: "Divided by a historic canal into the French 'White Town' and the vibrant Tamil Quarter, Puducherry is a tranquil enclave of Franco-Indian charm on the Coromandel Coast.",
      body: [
        "In White Town, quiet tree-shaded streets bear names like Rue de la Marine and Rue Suffren. Pastel yellow villas with wrought-iron balconies conceal boutique heritage hotels, tranquil courtyards, and artisanal bakeries.",
        "Just north lies Auroville, the experimental universal township founded by The Mother. At its spiritual heart stands the Matrimandir, a colossal golden sphere surrounded by green petals dedicated to silent concentration.",
        "End your days along the rocky Promenade Beach, where vehicular traffic is closed every evening, letting visitors stroll serenely beside the breaking waves of the Bay of Bengal."
      ],
      quote: "Pondicherry is a gentle sigh in an otherwise hurried world: French croissants at dawn, Tamil temple bells at dusk.",
      quoteAuthor: "Architectural Digest Travel Review"
    },
    faqs: [
      { q: "How do we get to Puducherry comfortably?", a: "Puducherry is just a scenic 2.5 to 3-hour drive (150 km) from Chennai International Airport along the scenic East Coast Road (ECR), driven in our private luxury vehicles." },
      { q: "How do we visit the Matrimandir inner chamber in Auroville?", a: "Inner chamber meditation passes require advance booking at least 3 to 7 days prior. Sobhavi Travels assists in securing your confirmed meditation passes." },
      { q: "Is Puducherry walkable?", a: "White Town is exceptionally pedestrian-friendly. Most luxury hotels, cafes, the beach promenade, and ashrams are easily explored on foot or on bicycles." },
      { q: "What is Franco-Tamil cuisine?", a: "Unique to Puducherry, Franco-Tamil cuisine marries French culinary techniques like bouillabaisse, crepes, and quiches with fresh coastal seafood, coconut milk, curry leaves, and local spices." }
    ]
  },

  // 23. DUBAI (INTERNATIONAL)
  {
    slug: "dubai",
    name: "Dubai",
    category: "international",
    regionGroup: "International",
    tagline: "Futuristic Skylines, Burj Khalifa & Desert Palaces",
    description: "The crown jewel of modern Arabia, where seven-star architecture, Michelin-starred dining, private yacht charters, and desert safaris redefine high luxury.",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Downtown Dubai & Burj Khalifa", tagline: "Tallest Building in the World & Dubai Mall", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop", highlights: ["VIP 148th floor At The Top SKY lounge access", "Dubai Fountain choreographed water show", "The Dubai Mall haute couture luxury avenue"] },
      { name: "Palm Jumeirah", tagline: "Iconic Man-Made Island & 7-Star Resorts", image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop", highlights: ["Atlantis The Royal and Aquaventure VIP access", "The View at The Palm 360-degree observation deck", "Private beach clubs and beachfront dining"] },
      { name: "Dubai Marina & JBR", tagline: "Skyline Promenade & Luxury Yacht Cruising", image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=800&auto=format&fit=crop", highlights: ["Private yacht cruise with skyline views", "The Walk at JBR beachfront boulevard", "Ain Dubai Ferris wheel views"] },
      { name: "Dubai Desert Conservation Reserve", tagline: "Pristine Red Dunes & Royal Bedouin Glamping", image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop", highlights: ["Vintage Land Rover 4x4 wildlife safari", "Falconry demonstrations and sunset dune dining", "Luxury glamping at Bab Al Shams and Al Maha"] },
      { name: "Old Dubai & Deira Creekside", tagline: "Gold Souk, Spice Souk & Historic Abra Boats", image: "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=800&auto=format&fit=crop", highlights: ["Dubai Gold Souk dazzling window displays", "Fragrant Spice and Perfume Souks", "Traditional wooden Abra boat ride across Dubai Creek"] }
    ],
    signatureExperiences: [
      "Private sunset yacht charter around Palm Jumeirah and Burj Al Arab with champagne and sushi bar",
      "Helicopter flight from Atlantis The Palm soaring above the skyline, World Islands, and downtown towers",
      "VIP Fast-Track Immigrations meet-and-greet on arrival at DXB Airport with chauffeured limousine transfer",
      "Fine dining at Atmosphere on the 122nd floor of Burj Khalifa with panoramic skyline views"
    ],
    hotels: ["Burj Al Arab Jumeirah", "Atlantis The Royal, Palm Jumeirah", "Armani Hotel Dubai, Burj Khalifa", "One&Only The Palm", "Bab Al Shams Desert Resort"],
    bestTime: "November to April (Pleasant sunny days, warm sea waters, and outdoor dining weather)",
    duration: "5 to 8 Days",
    currency: "UAE Dirham (AED)",
    editorialArticle: {
      title: "Dubai: The Vanguard of Extravagance and Desert Majesty",
      intro: "Rising like a futuristic dream from the golden sands of the Arabian Gulf, Dubai is a masterclass in modern ambition. Here, boundaries of architecture, hospitality, and luxury are continuously rewritten.",
      body: [
        "Check into duplex suites at the Burj Al Arab where personal butlers attend to every whim, or reside at Atlantis The Royal, celebrating fifty-five luxury cabanas and signature dining by celebrity chefs.",
        "Charter a motor yacht from Dubai Marina, circling the Palm Jumeirah as sunset paints the glass towers in bronze and rose. Continue into the tranquil sands of the Dubai Desert Conservation Reserve for vintage Land Rover safaris and private Bedouin banquets beneath starlit skies.",
        "In Downtown Dubai, ascend to Level 148 of the Burj Khalifa for VIP access above the clouds before exploring the world's most glamorous shopping galleries at Fashion Avenue."
      ],
      quote: "Dubai doesn't just push the boundaries of what is possible; it erases them and builds an architectural marvel where they used to be.",
      quoteAuthor: "Architectural Digest Review"
    },
    faqs: [
      { q: "How long does it take to process a Dubai tourist visa for Indians?", a: "Dubai offers express 30-day and 60-day tourist e-Visas processed within 24 to 48 hours. Sobhavi Travels provides complete end-to-end visa assistance." },
      { q: "Can we combine Dubai and Abu Dhabi in one trip?", a: "Yes. Abu Dhabi is just 1 hour and 15 minutes drive from Dubai on a smooth multi-lane highway. We arrange day excursions or multi-night stays to explore the Louvre Abu Dhabi and Sheikh Zayed Grand Mosque." },
      { q: "Is Dubai family-friendly for children?", a: "Dubai is one of the world's top family destinations, featuring Aquaventure Waterpark, Dubai Aquarium, Museum of the Future, Green Planet rainforest, and desert safaris tailored for all ages." },
      { q: "What is the dress code in Dubai?", a: "Dubai is very cosmopolitan. Resort wear, beachwear, and evening luxury dresses are welcome in hotels, beach clubs, and malls. Modest attire covering shoulders and knees is appreciated in historic areas and government buildings." }
    ]
  },

  // 24. SINGAPORE (INTERNATIONAL)
  {
    slug: "singapore",
    name: "Singapore",
    category: "international",
    regionGroup: "International",
    tagline: "Garden City of the Future, Marina Bay & Michelin Dining",
    description: "The Lion City, where supertree groves touch the clouds, Marina Bay Sands overlooks a sparkling harbour, and world-renowned multicultural cuisine awaits on every corner.",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Marina Bay Sands & SkyPark", tagline: "Iconic Rooftop Infinity Pool & Bay Panorama", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop", highlights: ["57th-floor infinity pool overlooking the skyline", "Observation deck views", "Spectra nightly light and water fountain show"] },
      { name: "Gardens by the Bay", tagline: "Futuristic Supertree Grove & Cloud Forest", image: "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?q=80&w=800&auto=format&fit=crop", highlights: ["115-foot indoor waterfall inside Cloud Forest dome", "Supertree Observatory and OCBC Skyway walk", "Flower Dome world's largest glass greenhouse"] },
      { name: "Sentosa Island", tagline: "Island Playground & Universal Studios", image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800&auto=format&fit=crop", highlights: ["Universal Studios Singapore VIP tour", "S.E.A. Aquarium 100,000 marine animals", "Tanjong and Palawan white sand beach clubs"] },
      { name: "Orchard Road", tagline: "Asia's Premier Luxury Shopping Avenue", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop", highlights: ["ION Orchard and Paragon flagship fashion boutiques", "Chic afternoon tea lounges", "Tax-free shopping concierge"] },
      { name: "Chinatown & Little India", tagline: "Vibrant Heritage, Temples & Street Gastronomy", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=800&auto=format&fit=crop", highlights: ["Buddha Tooth Relic Temple architecture", "Sri Mariamman oldest Hindu shrine in Singapore", "Michelin-starred street food stalls at Maxwell"] }
    ],
    signatureExperiences: [
      "Exclusive access to the iconic 57th-floor Marina Bay Sands infinity pool overlooking the illuminated city skyline",
      "Private VIP guided tour through Gardens by the Bay with after-hours access inside the Cloud Forest dome",
      "Private yacht charter cruising from Sentosa Marina around Lazarus Island and the Southern Islands",
      "Fine dining dinner experience at Ce La Vi or Spago rooftop restaurants with panoramic harbour views"
    ],
    hotels: ["Marina Bay Sands", "Raffles Hotel Singapore", "The Ritz-Carlton, Millenia Singapore", "Capella Singapore, Sentosa", "The Fullerton Bay Hotel"],
    bestTime: "November to August (Pleasant tropical weather, ideal for gardens, shopping, and festivals)",
    duration: "4 to 7 Days",
    currency: "Singapore Dollar (SGD)",
    editorialArticle: {
      title: "Singapore: Where Nature and Futuristic Innovation Become One",
      intro: "Singapore is a marvel of urban imagination. Here, colonial grace meets hyper-modern architecture, with lush rainforest trees winding their way up glass skyscrapers to create a true 'City in a Garden.'",
      body: [
        "Stay at the legendary Raffles Hotel, sipping a classic Singapore Sling in the courtyard where Somerset Maugham and Rudyard Kipling once wrote. Move to Marina Bay Sands, taking in the panoramic harbour view from the world's most famous rooftop infinity pool.",
        "Step into the mist of Gardens by the Bay, where vertical Supertree gardens come alive with music and dancing lights every evening. On Sentosa Island, relax at beachfront clubs or enjoy VIP access across Universal Studios.",
        "From Michelin-starred street hawkers serving Hainanese chicken rice to cutting-edge culinary temples overlooking the Marina Bay, Singapore is an unparalleled gastronomic wonderland."
      ],
      quote: "Singapore doesn't just plant gardens; it builds entire futuristic ecosystems that make you feel like you've stepped into the year 2050.",
      quoteAuthor: "Architectural Record"
    },
    faqs: [
      { q: "How easy is it to obtain a Singapore tourist visa?", a: "Singapore e-Visas are processed quickly through authorized visa agents like Sobhavi Travels, requiring valid passport scans, photographs, and confirmed travel itineraries." },
      { q: "Is Singapore suitable for traveling with young children and toddlers?", a: "Singapore is universally recognized as one of the cleanest, safest, and most stroller-friendly destinations in the world, with world-class attractions like Singapore Zoo, Night Safari, and Universal Studios." },
      { q: "How do we get around Singapore easily?", a: "The city's MRT subway and clean taxi networks are among the most efficient on earth. Sobhavi Travels provides private Mercedes/Alphard chauffeur transfers for complete convenience." },
      { q: "Can we combine Singapore with Bali or Thailand?", a: "Yes, Singapore Changi Airport connects via short 2-hour direct flights to Bali, Phuket, and Bangkok, making it the ideal twin-destination hub." }
    ]
  },

  // 25. BALI (INTERNATIONAL)
  {
    slug: "bali",
    name: "Bali",
    category: "international",
    regionGroup: "International",
    tagline: "Island of the Gods, Ubud Rice Terraces & Cliffside Villas",
    description: "Indonesia's spiritual jewel, where tiered emerald rice paddies in Ubud, sacred sea temples in Uluwatu, and private cliffside villas create an enchanting sanctuary.",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Ubud", tagline: "Cultural Heart, Rice Terraces & Sacred Monkey Forest", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop", highlights: ["Tegalalang emerald rice terrace swings", "Sacred Monkey Forest sanctuary walks", "Artisan woodcarving and silversmith workshops"] },
      { name: "Seminyak & Canggu", tagline: "Chic Beach Clubs, Surfing & Sunset Lounges", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop", highlights: ["Famous Ku De Ta and Potato Head beach clubs", "Trendy bohemian cafes and boutiques", "Sunset cocktails overlooking Indian Ocean surf"] },
      { name: "Uluwatu", tagline: "Dramatic Limestone Cliffs & Kecak Fire Dance", image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop", highlights: ["Uluwatu Temple perched 70 meters above crashing waves", "Sunset Kecak fire dance performance", "Omnia and Single Fin cliff clubs"] },
      { name: "Nusa Dua", tagline: "Exclusive 5-Star Beach Resorts & Gated Enclave", image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=800&auto=format&fit=crop", highlights: ["Pristine manicured white sand beaches", "Calm swimming lagoons ideal for families", "World-class beachfront golf and spas"] },
      { name: "Nusa Penida", tagline: "Kelingking T-Rex Cliff & Crystal Bay", image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=800&auto=format&fit=crop", highlights: ["Kelingking T-Rex cliff viewpoint", "Diamond Beach turquoise lagoon", "Manta ray snorkeling at Manta Point"] }
    ],
    signatureExperiences: [
      "Stay in a private pool villa perched above the Ayung River in Ubud with private floating breakfast on the water",
      "VIP cliffside seating at Uluwatu Temple for the dramatic sunset Kecak fire dance with ocean views",
      "Private speedboat day trip to Nusa Penida exploring Kelingking T-Rex cliff and snorkeling with wild manta rays",
      "Authentic Balinese purification ritual (Melukat) at the sacred spring water temple of Tirta Empul"
    ],
    hotels: ["Mandapa, a Ritz-Carlton Reserve, Ubud", "Four Seasons Resort Bali at Sayan", "Bulgari Resort Bali, Uluwatu", "The St. Regis Bali Resort, Nusa Dua", "Amankila, Manggis"],
    bestTime: "April to October (Dry season with sunny skies, low humidity, and pleasant evening breezes)",
    duration: "6 to 10 Days",
    currency: "Indonesian Rupiah (IDR)",
    editorialArticle: {
      title: "Bali: The Island of Divine Spirits, Emerald Valleys, and Ocean Cliffs",
      intro: "Bali exerts a spiritual magnetism unmatched by any tropical island in the world. Frangipani flowers scent the morning air, stone shrines receive handmade flower offerings, and emerald rice paddies mirror the morning sun.",
      body: [
        "In Ubud, reside in a private jungle villa overlooking the sacred Ayung River valley. Awaken to floating breakfasts in your private pool before taking private walks through the terraced rice fields of Tegalalang.",
        "Travel south to Uluwatu, where limestone cliffs plunge sheer into the sapphire Indian Ocean. Marvel at the sunset Kecak fire dance before dining on grilled ocean lobster right on the sands of Jimbaran Bay.",
        "In Nusa Dua and Seminyak, world-class beachfront resorts and vibrant beach clubs offer the perfect blend of restorative wellness, five-star luxury, and stylish tropical celebration."
      ],
      quote: "Bali is not just a place on a map; it is an unforgettable warmth of heart and a serene state of mind.",
      quoteAuthor: "Travel + Leisure Feature"
    },
    faqs: [
      { q: "Is visa on arrival (VOA) available for Indian travelers visiting Bali?", a: "Yes. Indian passport holders can obtain a 30-day e-VOA online or directly upon arrival at Denpasar Airport (DPS) for approximately USD 35." },
      { q: "Should we stay in Ubud or near the beach?", a: "We strongly recommend splitting your stay: 3 nights in Ubud for cultural immersion, rainforest valleys, and rice fields, followed by 3 to 4 nights in a coastal resort (Uluwatu, Seminyak, or Nusa Dua)." },
      { q: "Are private pool villas affordable in Bali?", a: "Bali is famous for offering the world's best value in ultra-luxury private pool villas, complete with private butlers, lush tropical gardens, and personal chefs." },
      { q: "What is the best way to travel around Bali?", a: "Traffic in Bali can be busy. Sobhavi Travels provides a private air-conditioned car with a friendly, experienced English-speaking Balinese driver on call throughout your journey." }
    ]
  },

  // 26. THAILAND (INTERNATIONAL)
  {
    slug: "thailand",
    name: "Thailand",
    category: "international",
    regionGroup: "International",
    tagline: "Golden Temples, Andaman Islands & Haute Thai Gastronomy",
    description: "The Land of Smiles, where Bangkok's golden royal palaces and rooftop cocktail bars give way to limestone karsts in Phuket, emerald waters in Krabi, and private island luxury in Koh Samui.",
    heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512553353614-82a7370096dc?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Bangkok", tagline: "The Grand Palace, Chao Phraya & Michelin Dining", image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800&auto=format&fit=crop", highlights: ["Grand Palace & Wat Phra Kaew (Emerald Buddha)", "Wat Arun dawn temple on Chao Phraya River", "Rooftop dining at Vertigo and Mahanakhon SkyWalk"] },
      { name: "Phuket", tagline: "Andaman Jewel, Private Villas & Old Town Charm", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop", highlights: ["Phang Nga Bay private speedboat tour to James Bond Island", "Phuket Old Town colorful Sino-Portuguese architecture", "Exclusive beach clubs at Bang Tao and Surin beaches"] },
      { name: "Koh Samui", tagline: "Coconut Groves, Luxury Villas & Chaweng Coast", image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=800&auto=format&fit=crop", highlights: ["Ang Thong National Marine Park emerald lagoons", "Big Buddha and Wat Plai Laem temples", "Cliffside pool villas overlooking the Gulf of Thailand"] },
      { name: "Krabi", tagline: "Limestone Karsts, Railay Beach & Phi Phi Islands", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800&auto=format&fit=crop", highlights: ["Railay Beach dramatic sheer limestone rock faces", "Four Islands private longtail boat sunset cruise", "Emerald Pool natural hot thermal springs"] },
      { name: "Chiang Mai", tagline: "Rose of the North, Elephant Sanctuaries & Mist Mountains", image: "https://images.unsplash.com/photo-1512553353614-82a7370096dc?q=80&w=800&auto=format&fit=crop", highlights: ["Wat Phra That Doi Suthep mountain temple", "Ethical elephant rescue sanctuary visits", "Night Bazaar and Lanna culinary tours"] }
    ],
    signatureExperiences: [
      "Private luxury speedboat charter through the dramatic limestone karsts of Phang Nga Bay and Phi Phi Islands",
      "Private longtail boat cruise on Bangkok's Chao Phraya River with champagne sunset view of Wat Arun",
      "Stay in a cliffside private pool villa in Koh Samui with an in-villa Thai culinary masterclass with a master chef",
      "Ethical, hands-on day with rescued Asian elephants in Chiang Mai bathing and feeding them in jungle rivers"
    ],
    hotels: ["Mandarin Oriental, Bangkok", "Amanpuri, Phuket", "Four Seasons Resort Koh Samui", "Rayavadee, Krabi", "Anantara Golden Triangle Elephant Camp"],
    bestTime: "November to April (Dry cool season, calm blue seas and ideal beach weather)",
    duration: "6 to 10 Days",
    currency: "Thai Baht (THB)",
    editorialArticle: {
      title: "Thailand: Royal Splendor, Limestone Karsts, and Island Escapes",
      intro: "Thailand balances ancient Buddhist serenity with radiant tropical warmth. From the gilded spires of Bangkok's Grand Palace to the dramatic limestone islands rising from the Andaman Sea, every journey is bathed in legendary Siamese hospitality.",
      body: [
        "In Bangkok, glide along the historic Chao Phraya River aboard a private longtail boat, admiring centuries-old stilt homes and gold-plated temples before checking into the iconic Mandarin Oriental.",
        "Fly south to Phuket or Krabi, where vertical limestone karsts pierce crystalline waters. Charter private catamarans to secluded hidden coves in Phang Nga Bay, diving among coral reefs and kayaking through secret sea caves.",
        "In Koh Samui, enjoy the laid-back luxury of the Gulf of Thailand, lounging in private hillside villas surrounded by coconut palms and savoring fragrant tom yum and mango sticky rice."
      ],
      quote: "Thailand has an effortless ability to make every guest feel like royalty, wrapped in frangipani aromas and genuine smiles.",
      quoteAuthor: "Condé Nast Traveler"
    },
    faqs: [
      { q: "Is Thailand visa-free for Indian citizens?", a: "Thailand currently grants visa-free entry for Indian tourists, making travel completely spontaneous and hassle-free with direct flights from all major Indian metros." },
      { q: "What is the best itinerary for a first-time trip to Thailand?", a: "A classic 7-day itinerary combines 2 nights of culture, shopping, and dining in Bangkok with 4 to 5 nights in an island paradise like Phuket, Krabi, or Koh Samui." },
      { q: "Can vegetarians and Jains find good food in Thailand?", a: "Thailand is exceptionally accommodating with world-class Indian restaurants in Bangkok, Phuket, and Pattaya, as well as vegetarian (Jay) options in local restaurants." },
      { q: "Which island is better: Phuket or Koh Samui?", a: "Phuket is larger with exceptional beach clubs, island boat trips, and luxury resorts. Koh Samui is more intimate and boutique, famous for tranquil hillside private pool villas." }
    ]
  },

  // 27. VIETNAM (INTERNATIONAL)
  {
    slug: "vietnam",
    name: "Vietnam",
    category: "international",
    regionGroup: "International",
    tagline: "Ha Long Bay Karsts, Lantern-Lit Hoi An & Golden Bridges",
    description: "Southeast Asia's rising star, where thousands of limestone islands rise from Ha Long Bay, yellow French-colonial streets glow with silk lanterns in Hoi An, and Ba Na Hills reveals its giant stone hands.",
    heroImage: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574950578143-858c6fc58922?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Hanoi", tagline: "Historic French Quarter & Hoan Kiem Lake", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop", highlights: ["Old Quarter 36 guilds heritage rickshaw ride", "Hoan Kiem Lake and historic Ngoc Son Temple", "Authentic egg coffee at hidden vintage cafes"] },
      { name: "Ha Long Bay", tagline: "UNESCO Limestone Pillars & Luxury Overnight Cruises", image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop", highlights: ["Overnight 5-star luxury cruise with private balcony suites", "Kayaking through Luon Cave and emerald lagoons", "Sung Sot (Surprise Cave) illuminated stalactites"] },
      { name: "Da Nang", tagline: "Ba Na Hills Golden Bridge & Coastal Resorts", image: "https://images.unsplash.com/photo-1574950578143-858c6fc58922?q=80&w=800&auto=format&fit=crop", highlights: ["Golden Bridge held by giant stone hands", "Ba Na Hills French village cable car", "Dragon Bridge weekend fire and water breathing show"] },
      { name: "Hoi An", tagline: "UNESCO Ancient Town & Lantern Festivals", image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=800&auto=format&fit=crop", highlights: ["Japanese Covered Bridge and yellow merchant homes", "Night boat ride releasing floating paper lanterns", "Bespoke custom silk tailoring in 24 hours"] },
      { name: "Ho Chi Minh City (Saigon)", tagline: "Vibrant Southern Hub & French Cathedrals", image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800&auto=format&fit=crop", highlights: ["Notre Dame Cathedral & Central Post Office", "Cu Chi underground wartime tunnel network", "Chic rooftop cocktail lounges overlooking Saigon skyline"] }
    ],
    signatureExperiences: [
      "Overnight 5-star cruise through Ha Long Bay and Lan Ha Bay aboard a luxury vessel with private hot tubs and onboard chef",
      "VIP early morning sunrise walk on Da Nang's iconic Golden Bridge before cable cars open to public crowds",
      "Private evening riverboat tour in Hoi An releasing paper lanterns onto the Thu Bon River beneath glowing silk lanterns",
      "Culinary street food safari on vintage Vespa scooters through the hidden alleys of Saigon"
    ],
    hotels: ["Capella Hanoi", "InterContinental Danang Sun Peninsula Resort", "Four Seasons Resort The Nam Hai, Hoi An", "Paradise Peak Cruise Ha Long Bay", "The Reverie Saigon"],
    bestTime: "October to April (Pleasant, mild temperatures, clear blue skies, and comfortable touring conditions)",
    duration: "6 to 10 Days",
    currency: "Vietnamese Dong (VND)",
    editorialArticle: {
      title: "Vietnam: The Dragon's Emerald Bays, French Quarters, and Lantern Cities",
      intro: "Vietnam captivates the senses with its astonishing landscapes and infectious energy. From the thousand limestone karsts rising from the emerald waters of Ha Long Bay to the lantern-lit cobblestones of Hoi An, every day feels like cinema.",
      body: [
        "In Hanoi, stroll past colonial French villas and tranquil lakes, sipping creamy egg coffee before departing for Ha Long Bay. Board an ultra-luxury wooden junk ship, waking to morning Tai Chi on the sun deck as limestone pinnacles emerge from the morning mist.",
        "Travel south to Da Nang, riding the world's longest single-track cable car to the iconic Golden Bridge, cradled high above the clouds by giant stone hands. Nearby, UNESCO-listed Hoi An glows each evening with thousands of colorful silk lanterns reflecting in the river.",
        "In Ho Chi Minh City, modern vitality pulses through rooftop sky bars and French colonial boulevards, offering a thrilling finale to your Southeast Asian adventure."
      ],
      quote: "Sailing through Ha Long Bay as the morning mist burns off limestone towers is one of the world's great natural spectacles.",
      quoteAuthor: "National Geographic Traveler"
    },
    faqs: [
      { q: "Is an e-Visa required for Indian tourists traveling to Vietnam?", a: "Yes, Vietnam offers a straightforward online e-Visa for Indian passport holders, typically approved within 3 to 4 business days." },
      { q: "Is an overnight cruise in Ha Long Bay worth it over a day trip?", a: "An overnight cruise is essential. It lets you experience sunrise and sunset when day-trippers have departed, and includes kayaking, cave exploration, squid fishing, and luxury dining on board." },
      { q: "Can we combine Hanoi, Da Nang, and Ho Chi Minh City in one week?", a: "Yes. Domestic flights in Vietnam are frequent and short (1 hour between hubs), making a 7-day North-to-South itinerary comfortable and seamless." },
      { q: "What should we buy in Vietnam?", a: "Vietnam is renowned for custom-tailored silk suits and dresses in Hoi An, world-famous Vietnamese drip coffee, lacquerware art, and bamboo handicrafts." }
    ]
  },

  // 28. MALDIVES (INTERNATIONAL)
  {
    slug: "maldives",
    name: "Maldives",
    category: "international",
    regionGroup: "International",
    tagline: "Private Overwater Villas, Coral Reefs & Seaplane Escapes",
    description: "The ultimate luxury tropical paradise, where glass-bottom overwater villas sit above turquoise lagoons, private seaplanes skim atolls, and manta rays glide through house reefs.",
    heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578922746465-3a80a228f223?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Baa Atoll (UNESCO Biosphere)", tagline: "Hanifaru Bay & Manta Ray Feeding Frenzies", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800&auto=format&fit=crop", highlights: ["Snorkeling with hundreds of wild manta rays and whale sharks", "Vibrant coral reefs with zero bleaching", "Exclusive luxury eco-resorts"] },
      { name: "North & South Male Atolls", tagline: "Short Speedboat Transfers & Overwater Luxury", image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800&auto=format&fit=crop", highlights: ["20-45 minute speedboat transfer directly from airport", "World-renowned surf breaks at Pasta Point", "Underwater restaurant dining"] },
      { name: "Ari Atoll (Alif Alif)", tagline: "Year-Round Whale Sharks & Hammerhead Dives", image: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?q=80&w=800&auto=format&fit=crop", highlights: ["Swimming with gentle giant whale sharks", "Famous dive sites at Maaya Thila", "Seaplane arrival over azure coral rings"] },
      { name: "Private Overwater Villas", tagline: "Direct Lagoon Access & Private Infinity Pools", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop", highlights: ["Glass floor panels watching fish swim beneath your bed", "Private waterslide into the turquoise ocean", "Floating champagne breakfasts delivered to your plunge pool"] }
    ],
    signatureExperiences: [
      "Arrive at your private resort via twin-engine seaplane soaring over hundreds of turquoise coral atolls",
      "Romantic private sandbank dinner on an uninhabited sand islet with personal chef, sommelier, and tiki torches",
      "Dine five meters below the surface of the Indian Ocean at Ithaa Undersea Restaurant watching sharks and reef fish",
      "Snorkel with giant manta rays and whale sharks in the protected biosphere of Hanifaru Bay"
    ],
    hotels: ["Soneva Jani, Noonu Atoll", "The St. Regis Maldives Vommuli Resort", "One&Only Reethi Rah", "Cheval Blanc Randheli", "Waldorf Astoria Maldives Ithaafushi"],
    bestTime: "November to April (Dry northeast monsoon, calm turquoise seas and endless sunshine)",
    duration: "4 to 7 Days",
    currency: "US Dollar (USD) / Maldivian Rufiyaa",
    editorialArticle: {
      title: "Maldives: The Pinnacle of Private Island Overwater Living",
      intro: "There is no escape on earth quite like the Maldives. Here, land and water dissolve into a dream of crystal lagoons, powdered white sandbanks, and overwater palaces perched on stilts above coral gardens.",
      body: [
        "From the moment your seaplane descends toward an isolated ring of coral reefs, everyday life slips away. Walk barefoot along private wooden jetties to your overwater villa, where floor-to-ceiling glass reveals rays and reef sharks swimming in clear blue water.",
        "Slide from your private sun deck directly into the warm Indian Ocean, or lounge in overwater hammocks as the sun dips below the horizon in an explosion of amber and violet.",
        "Dine on private sandbanks accessible only by boat, savoring fresh seafood prepared by your private chef beneath a canopy of stars completely untainted by city light."
      ],
      quote: "In the Maldives, luxury is measured by the clarity of the water beneath your villa and the complete silence of your private atoll.",
      quoteAuthor: "Condé Nast Traveler Luxury Island Awards"
    },
    faqs: [
      { q: "Is visa required for Indians traveling to the Maldives?", a: "No pre-arrival visa is required. Indian passport holders receive a complimentary 30-day Tourist Visa on Arrival at Male Airport (MLE)." },
      { q: "What is the difference between speedboat and seaplane transfers?", a: "Resorts in North and South Male Atolls are reached via 15 to 45-minute luxury speedboats. More remote resorts in Baa, Noonu, or Dhaalu Atolls require scenic 30 to 45-minute seaplane flights operating during daylight." },
      { q: "What meal plans are best in the Maldives?", a: "We recommend choosing Full Board (Breakfast, Lunch & Dinner) or All-Inclusive (including premium beverages and snacks), as all dining takes place on your private resort island." },
      { q: "Can we experience an underwater restaurant in the Maldives?", a: "Yes. Several iconic resorts feature world-class underwater restaurants including Ithaa at Conrad Rangali, SEA at Anantara Kihavah, and Subsix at Niyama." }
    ]
  },

  // 29. EUROPE (INTERNATIONAL)
  {
    slug: "europe",
    name: "Europe",
    category: "international",
    regionGroup: "International",
    tagline: "Swiss Alps, Parisian Elegance, Amalfi Coast & Mediterranean Glitz",
    description: "The crown of global bespoke travel, where snow-draped Swiss glaciers, Paris haute couture, sun-drenched Amalfi cliffside villas, and Greek island sunsets create legendary holidays.",
    heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop"
    ],
    famousPlaces: [
      { name: "Switzerland", tagline: "Swiss Alps, Interlaken, Zermatt & Glacier Express", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop", highlights: ["Jungfraujoch Top of Europe snow experience", "Matterhorn views from Zermatt luxury chalets", "Glacier Express panoramic glass train"] },
      { name: "Paris (France)", tagline: "Eiffel Tower, Place Vendome & Haute Cuisine", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop", highlights: ["Private after-hours Louvre tour", "Sunset Seine River yacht cruise with champagne", "Michelin 3-star dining and private shopping"] },
      { name: "Amalfi Coast (Italy)", tagline: "Positano Cliffs, Capri Island & Ravello", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop", highlights: ["Private Riva speedboat charter to Capri Blue Grotto", "Positano cliffside pastel village walks", "Ravello clifftop classical music gardens"] },
      { name: "London & British Isles", tagline: "Buckingham Palace, West End & Cotswolds", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop", highlights: ["Tower of London Crown Jewels private viewing", "Afternoon tea at The Ritz London", "Cotswolds honey-stone village countryside drive"] },
      { name: "Santorini & Greek Islands", tagline: "White-Washed Caldera & Oia Sunsets", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop", highlights: ["Cliff-carved infinity pool cave suites in Oia", "Private catamaran sunset cruise in the volcanic caldera", "Mykonos cosmopolitan beach club life"] }
    ],
    signatureExperiences: [
      "Board the Excellence Class of the Glacier Express across the Swiss Alps with personal concierge and 5-course wine pairing",
      "Private after-hours tour of the Palace of Versailles or the Louvre Museum with a senior art curator",
      "Private vintage Riva motorboat charter along the Amalfi Coast and around the island of Capri",
      "Helicopter transfer from Nice Airport directly to your Monte Carlo palace hotel during the Grand Prix season"
    ],
    hotels: ["The Ritz Paris", "Badrutt's Palace Hotel, St. Moritz", "Le Sirenuse, Positano", "The Connaught, London", "Grace Hotel, Auberge Resorts Collection, Santorini"],
    bestTime: "May to October (Sun-drenched Mediterranean coastlines, open alpine passes, and outdoor cafe culture) or December to March (Winter ski season in the Alps)",
    duration: "8 to 15 Days",
    currency: "Euro (EUR) / Swiss Franc (CHF) / British Pound (GBP)",
    editorialArticle: {
      title: "Europe: The Ultimate Grand Tour of Heritage, Romance, and Alpine Heights",
      intro: "Europe remains the undisputed crown of grand luxury travel. From the cobblestone streets of Paris to the snow-crested peaks of the Swiss Alps and the sun-bleached cliffs of Positano and Santorini, every destination is an epoch of human culture.",
      body: [
        "In Switzerland, board the panoramic Glacier Express, traveling through snow-blanketed ravines to Zermatt, where the pyramid peak of the Matterhorn commands the sky. Stay at century-old alpine palaces with heated outdoor pools facing alpine glaciers.",
        "In Paris, reside at The Ritz on Place Vendôme, enjoying private shopping appointments at haute couture fashion houses and sunset cruises along the Seine with Dom Pérignon champagne.",
        "Along Italy's Amalfi Coast, charter a vintage mahogany boat to navigate past the pastel houses of Positano, docking at private beach clubs on Capri where Mediterranean cuisine is paired with crisp regional wines."
      ],
      quote: "To travel through Europe with bespoke care is to discover that romance is not a concept; it is an architectural and geographical reality.",
      quoteAuthor: "Condé Nast Traveler Grand Tour Edition"
    },
    faqs: [
      { q: "How do we apply for a Schengen Visa for Europe?", a: "Sobhavi Travels prepares your complete Schengen visa application package, including flight reservations, confirmed 5-star hotel vouchers, day-by-day travel itineraries, and travel insurance." },
      { q: "Can we combine Switzerland and France or Italy in one trip?", a: "Yes, Europe's high-speed TGV and Eurostar trains connect Paris to Geneva in 3 hours, and Milan to Zurich in 3.5 hours, making multi-country journeys exceptionally smooth and scenic." },
      { q: "What is the best month to visit the Amalfi Coast and Greek Islands?", a: "May to June and September to October offer the finest weather with warm swimming waters, pleasant sunshine, and fewer summer crowds compared to peak August." },
      { q: "Is Swiss Travel Pass recommended for Switzerland trips?", a: "For our private guests, we offer both luxury panoramic first-class Swiss rail passes and chauffeured Mercedes private vehicles depending on your preference." }
    ]
  }
];

// Fast helper lookup functions
export function getDestinationBySlug(slug: string): LeisureDestination | undefined {
  return LEISURE_DESTINATIONS.find(d => d.slug.toLowerCase() === slug.toLowerCase());
}

export function getDestinationsByCategory(category: 'domestic' | 'international'): LeisureDestination[] {
  return LEISURE_DESTINATIONS.filter(d => d.category === category);
}

export function getDestinationsByRegion(region: LeisureDestination['regionGroup']): LeisureDestination[] {
  return LEISURE_DESTINATIONS.filter(d => d.regionGroup === region);
}
