import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LEISURE_DESTINATIONS, getDestinationBySlug, LeisureDestination } from '@/lib/destinationsData';
import { featuredDestinations } from '@/lib/data';
import DestinationDetailClient from './DestinationDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LEISURE_DESTINATIONS.map(dest => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    const legacy = featuredDestinations.find(d => d.slug.toLowerCase() === slug.toLowerCase());
    if (legacy) {
      return {
        title: `${legacy.name} Luxury Tours & Bespoke Holidays | Sobhavi Travels`,
        description: legacy.description,
      };
    }
    return {
      title: 'Destination Details | Sobhavi Travels',
      description: 'Explore bespoke luxury holidays with Sobhavi Travels.',
    };
  }

  return {
    title: `${destination.name} Tour Packages & Luxury Holidays | Sobhavi Travels`,
    description: `${destination.tagline}. Discover iconic attractions, handpicked 5-star stays, and bespoke private tours in ${destination.name}.`,
    openGraph: {
      title: `${destination.name} Luxury Travel Guide | Sobhavi Travels`,
      description: destination.description,
      images: [
        {
          url: destination.heroImage,
          width: 1200,
          height: 630,
          alt: `${destination.name} Luxury Travel`,
        },
      ],
    },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  let destination: LeisureDestination | undefined = getDestinationBySlug(slug);

  // Fallback for legacy featured destinations
  if (!destination) {
    const legacy = featuredDestinations.find(d => d.slug.toLowerCase() === slug.toLowerCase());
    if (legacy) {
      destination = {
        slug: legacy.slug,
        name: legacy.name,
        category: 'international',
        regionGroup: 'International',
        tagline: legacy.description,
        description: legacy.description,
        heroImage: legacy.imageUrl,
        galleryImages: legacy.images || [legacy.imageUrl],
        famousPlaces: [],
        signatureExperiences: legacy.experiences || ["5-Star Curated Stays", "Chauffeured Transfers", "Private Guided Excursions"],
        hotels: legacy.hotels || ["Selected Luxury Palaces & Resorts"],
        bestTime: legacy.bestTime || "Year-Round",
        duration: "5 to 8 Days",
        currency: legacy.currency || "INR / Local",
        editorialArticle: {
          title: `Discover ${legacy.name} in Unmatched Luxury`,
          intro: legacy.article.intro,
          body: legacy.article.body,
          quote: legacy.article.quote,
          quoteAuthor: legacy.article.quoteAuthor,
        },
        faqs: [
          {
            q: `What is the best time to plan a luxury holiday to ${legacy.name}?`,
            a: `${legacy.bestTime || 'Year-round'}, depending on preferred sightseeing conditions. Our specialists customize every detail to match your preferred travel dates.`,
          },
          {
            q: `What premium services are included with Sobhavi Travels in ${legacy.name}?`,
            a: `We provide private chauffeur-driven luxury sedans/SUVs, pre-arranged VIP entry passes to monuments, curated 5-star hotel accommodations, and 24/7 concierge support.`,
          },
        ],
      };
    }
  }

  if (!destination) {
    notFound();
  }

  return <DestinationDetailClient destination={destination} />;
}
