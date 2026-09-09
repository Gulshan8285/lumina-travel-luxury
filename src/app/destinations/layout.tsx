import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Popular Destinations & City Getaways (29) | Sobhavi Travels',
  description: 'Explore 22 celebrated Indian states & union territories and 7 premier international luxury gateways. Curated city guides, iconic attractions, handpicked 5-star stays, and bespoke holiday packages.',
  openGraph: {
    title: 'Popular Leisure Destinations Directory | Sobhavi Travels',
    description: 'Bespoke holiday packages across 22 Indian states and 7 international luxury gateways.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Sobhavi Travels Leisure Destinations',
      },
    ],
  },
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
