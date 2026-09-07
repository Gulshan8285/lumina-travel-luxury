export interface TravelCategory {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  images: string[];
  videoUrl?: string;
  article: {
    intro: string;
    body: string[];
    quote: string;
    quoteAuthor: string;
  };
}

export const travelCategories: TravelCategory[] = [
  {
    slug: "chardham-yatra",
    name: "Chardham Yatra",
    tagline: "Thoughtfully planned spiritual journeys, with the details taken care of.",
    description: "Divine pilgrimage through Yamunotri, Gangotri, Kedarnath, and Badrinath with VIP darshan and helicopter charters.",
    heroImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=720&q=72&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    videoUrl: "/videos/adventure.mp4",
    article: {
      intro: "The sacred Chardham Yatra is a pilgrimage of a lifetime — a divine quest through the snow-crowned peaks of Uttarakhand to Yamunotri, Gangotri, Kedarnath, and Badrinath.",
      body: [
        "At Sobhavi Travels, we remove every hardship from this revered yatra. From seamless helicopter charters taking you directly from Dehradun to the sacred shrines, to priority VIP darshan arrangements and sanitized, premier valley stays, every detail is orchestrated with profound care.",
        "Whether you are travelling with elderly parents or seeking deep spiritual solace, our dedicated tour managers and local guides escort you at every step, ensuring warm meals, medical preparedness, and complete serenity throughout your sacred voyage.",
        "We offer both helicopter express yatras and scenic road journeys with luxury SUV transfers, customizable according to your preferred pace and sacred rituals."
      ],
      quote: "The silence of Kedarnath and the divine peace of Badrinath touched our souls. Sobhavi Travels made every detail effortless.",
      quoteAuthor: "— Mr. & Mrs. Aggarwal, Delhi"
    }
  },
  {
    slug: "honeymoon",
    name: "Honeymoon Holidays",
    tagline: "Beautiful destinations and memorable stays for a special beginning.",
    description: "Romantic escapes designed to make your first adventure together truly unforgettable.",
    heroImage: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=720&q=72&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    videoUrl: "/videos/ocean.mp4",
    article: {
      intro: "Your honeymoon is the most intimate journey you will ever take together — a celebration of love, connection, and the beginning of a shared life. At Sobhavi Travels, we believe it deserves nothing less than perfection.",
      body: [
        "We design honeymoons that go far beyond the resort pool. Think private beach dinners beneath a canopy of stars in the Maldives, sunrise hot-air balloon rides over Cappadocia, or a secluded cliffside villa in Bali overlooking turquoise waters.",
        "Every detail is curated by your personal travel expert — from candlelight beachfront dinners, to customized floral room decor and private sunset cruises. We handle every single logistic so you can be completely present with each other.",
        "Our most popular honeymoon escapes include the Maldives, Bali, Switzerland, Greece, and Dubai."
      ],
      quote: "Our honeymoon in the Maldives was not just a trip. It was the beginning of our forever story.",
      quoteAuthor: "— Priya & Arjun, Mumbai"
    }
  },
  {
    slug: "family",
    name: "Family Holidays",
    tagline: "More time together, less time spent planning.",
    description: "Family adventures crafted so every age group — from toddlers to grandparents — finds their moment of wonder.",
    heroImage: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=720&q=72&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    videoUrl: "/videos/safari.mp4",
    article: {
      intro: "Family travel is the greatest gift you can give your loved ones — the gift of perspective, shared laughter, and stories that will bind you together for generations.",
      body: [
        "We specialize in multi-generational family vacations where children are thrilled and parents are relaxed. From theme parks in Singapore and desert safaris in Dubai, to serene houseboat cruises in Kerala and palace stays in Rajasthan, we build balanced itineraries.",
        "Our family specialists ensure child-friendly and senior-friendly stays, private comfortable transportation, and flexible schedules with zero rush.",
        "Top destinations include Kerala, Himachal, Rajasthan, Singapore, Dubai, and Bali."
      ],
      quote: "Our kids didn't want to leave. Sobhavi Travels made travelling with elderly parents completely stress-free.",
      quoteAuthor: "— The Sharma Family, Delhi"
    }
  },
  {
    slug: "group",
    name: "Group Tours",
    tagline: "Travel together. Make memories together.",
    description: "From office offsites to friend reunions, we turn any group into an unforgettable journey.",
    heroImage: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=720&q=72&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    videoUrl: "/videos/adventure.mp4",
    article: {
      intro: "Some of the best moments in life are shared moments. A group trip, done right, becomes a legend you all reminisce about for years.",
      body: [
        "We plan group expeditions of all sizes: college reunions in Goa, corporate retreats in Dubai, family pilgrimages, and friends exploring Thailand and Bali.",
        "Our dedicated group desk coordinates flight blocks, hotel wings, private coach transfers, and curated group dinners.",
        "Every group booking comes with dedicated 24/7 coordinator assistance."
      ],
      quote: "Our reunion trip was flawless from pickup to drop-off. Outstanding planning.",
      quoteAuthor: "— Rohit & Friends, Pune"
    }
  },
  {
    slug: "luxury",
    name: "Luxury Holidays",
    tagline: "Exceptional stays and experiences for a little extra indulgence.",
    description: "World-class 5-star resorts, private villas, chartered yachts, and bespoke itineraries tailored to the finest detail.",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=720&q=72&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    videoUrl: "/videos/ocean.mp4",
    article: {
      intro: "True luxury is effortless elegance, absolute privacy, and experiences that cannot be booked off the shelf.",
      body: [
        "Indulge in overwater bungalows with private infinity pools in the Maldives, heritage maharaja suites in Udaipur, or five-star penthouses overlooking Dubai skyline.",
        "We arrange VIP airport express check-ins, private helicopter transfers, Michelin-starred culinary reservations, and dedicated chauffeurs throughout.",
        "Enjoy unparalleled sophistication with zero compromise."
      ],
      quote: "The level of exclusivity and detail was beyond anything we anticipated.",
      quoteAuthor: "— V. Singhania, Bangalore"
    }
  },
  {
    slug: "adventure",
    name: "Adventure & Wildlife",
    tagline: "For those who want to explore, discover and experience something different.",
    description: "Jungle safaris, Himalayan treks, scuba diving, and thrilling encounters in nature.",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=720&q=72&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    videoUrl: "/videos/safari.mp4",
    article: {
      intro: "Adventure is what happens when you leave the ordinary behind and embrace the thrill of discovery.",
      body: [
        "Track royal Bengal tigers in Ranthambore and Jim Corbett, experience dawn hot-air ballooning in Cappadocia, or go white-water rafting in Rishikesh and Himachal.",
        "Our certified naturalists and veteran guides prioritize safety, world-class gear, and unforgettable wildlife encounters.",
        "Perfect for thrill-seekers, photography enthusiasts, and nature lovers."
      ],
      quote: "Spotting leopards in the wild with their expert tracker was magical.",
      quoteAuthor: "— Aditya K., Mumbai"
    }
  },
  {
    slug: "anniversary",
    name: "Anniversary Celebrations",
    tagline: "Celebrate the years. Cherish the story.",
    description: "Mark another year of love with a journey so extraordinary it feels like falling in love all over again.",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=720&q=72&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    videoUrl: "/videos/ocean.mp4",
    article: {
      intro: "An anniversary is a celebration of shared joy, resilience, and love. It deserves a setting as timeless as your bond.",
      body: [
        "Private beach dinners in the Maldives, sunset catamaran sails in Santorini, or royal palace stays in Udaipur.",
        "We add bespoke surprise touches — vintage champagne on arrival, customized cakes, and private musicians.",
        "Celebrate your milestones in unforgettable luxury."
      ],
      quote: "She was moved to tears by the private beach setup. Sobhavi Travels was phenomenal.",
      quoteAuthor: "— Vikram M., Hyderabad"
    }
  },
  {
    slug: "wellness",
    name: "Wellness & Retreat",
    tagline: "Restore. Renew. Return whole.",
    description: "Luxury wellness travel that goes beyond the spa — transformative experiences for mind and soul.",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=720&q=72&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=720&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=720&q=72&auto=format&fit=crop"
    ],
    videoUrl: "/videos/ocean.mp4",
    article: {
      intro: "True luxury is the gift of peace, renewal, and reconnection with oneself.",
      body: [
        "Ayurvedic healing in Kerala, yoga retreats in Rishikesh and Bali, and thermal spa sanctuaries in the mountains.",
        "Customized nutrition, yoga, meditation, and daily therapeutic sessions curated by master practitioners.",
        "Return revitalized, rested, and inspired."
      ],
      quote: "I left feeling ten years younger. An authentic rejuvenation.",
      quoteAuthor: "— Sunita P., Chennai"
    }
  }
];
