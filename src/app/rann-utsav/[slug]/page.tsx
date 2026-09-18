import { notFound } from 'next/navigation';
import { getAllCityRoutes, getCityRouteBySlug } from '@/lib/rannUtsavRoutes';
import RannRouteDetailClient from './RannRouteDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const routes = getAllCityRoutes();
  return routes.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const route = getCityRouteBySlug(slug);

  if (!route) {
    return {
      title: 'City Package Not Found | Sobhavi Holidays',
      description: 'Explore Rann Utsav packages with Sobhavi Holidays.',
    };
  }

  return {
    title: route.metaTitle,
    description: route.metaDescription,
    alternates: {
      canonical: `https://www.sobhavitravel.com/rann-utsav/${route.slug}`,
    },
    openGraph: {
      title: route.metaTitle,
      description: route.metaDescription,
      url: `https://www.sobhavitravel.com/rann-utsav/${route.slug}`,
      siteName: 'Sobhavi Holidays',
      images: [
        {
          url: route.image,
          width: 1200,
          height: 630,
          alt: `${route.cityName} to Rann Utsav Kutch Tour Packages`,
        },
      ],
      type: 'website',
    },
  };
}

export default async function CityRoutePage({ params }: PageProps) {
  const { slug } = await params;
  const route = getCityRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  const allRoutes = getAllCityRoutes();
  const otherRoutes = allRoutes.filter((r) => r.slug !== route.slug);
  const destinationQuery = encodeURIComponent(`Rann Utsav (From ${route.cityName})`);
  const whatsappUrl = `https://wa.me/917406994752?text=Hello%20Sobhavi%20Holidays,%20I%20am%20planning%20a%20Rann%20Utsav%20trip%20from%20${encodeURIComponent(route.cityName)}.%20Please%20share%20tent%20availability%20and%20package%20details.`;

  return (
    <RannRouteDetailClient
      route={route}
      otherRoutes={otherRoutes}
      destinationQuery={destinationQuery}
      whatsappUrl={whatsappUrl}
    />
  );
}
