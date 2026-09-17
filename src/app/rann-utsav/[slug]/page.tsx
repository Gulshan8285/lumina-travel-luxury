import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import SinglePageForm from '@/components/ui/SinglePageForm';
import RannFaqAccordion from '@/components/ui/RannFaqAccordion';
import { getAllCityRoutes, getCityRouteBySlug } from '@/lib/rannUtsavRoutes';
import styles from './page.module.css';

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
          url: '/blogs/white-rann-kutch.jpg',
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

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* Breadcrumb Navigation */}
        <div className={styles.breadcrumbBar}>
          <div className="container">
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className={styles.crumbSep}>/</span>
              <Link href="/rann-utsav">Rann Utsav</Link>
              <span className={styles.crumbSep}>/</span>
              <span className={styles.crumbActive}>{route.cityName}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <div className="container">
            <div className={styles.heroContent}>
              <span className={styles.badge}>
                {route.category.toUpperCase()} DEPARTURE • {route.cityCode} TO BHUJ
              </span>
              <h1 className={styles.title}>{route.cityName} to Rann Utsav</h1>
              <p className={styles.tagline}>{route.heroTagline}</p>

              {/* Highlights Pill Strip */}
              <div className={styles.highlightsStrip}>
                <div className={styles.highlightPill}>
                  <span>✈️</span> <strong>Flights &amp; Rail Guidance</strong>
                </div>
                <div className={styles.highlightPill}>
                  <span>🚌</span> <strong>Bhuj AC Transfers Included</strong>
                </div>
                <div className={styles.highlightPill}>
                  <span>🎪</span> <strong>Tent City Dhordo Luxury Stays</strong>
                </div>
                <div className={styles.highlightPill}>
                  <span>🍽️</span> <strong>All Gourmet Meals Included</strong>
                </div>
              </div>

              <div className={styles.heroActions}>
                <a href="#book-trip" className={styles.primaryBtn}>
                  ✦ Request Custom Package Quote &rarr;
                </a>
                <a
                  href={`https://wa.me/917406994752?text=Hello%20Sobhavi%20Holidays,%20I%20am%20planning%20a%20Rann%20Utsav%20trip%20from%20${encodeURIComponent(route.cityName)}.`}
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

        {/* City-to-Bhuj Transit Details */}
        <section className={`${styles.section} ${styles.bgCard}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>SEAMLESS CONNECTIVITY</span>
              <h2 className={styles.sectionTitle}>
                How to Reach Rann of Kutch from {route.cityName}
              </h2>
              <p className={styles.sectionSubtitle}>
                Recommended transit options coordinated smoothly with your Tent City Dhordo check-in.
              </p>
            </div>

            <div className={styles.transitGrid}>
              <div className={styles.transitCard}>
                <span className={styles.transitIcon}>✈️</span>
                <h3>By Air (Flights)</h3>
                <p>{route.flightRoute}</p>
              </div>

              <div className={styles.transitCard}>
                <span className={styles.transitIcon}>🚆</span>
                <h3>By Train</h3>
                <p>{route.trainRoute}</p>
              </div>

              <div className={styles.transitCard}>
                <span className={styles.transitIcon}>🚌</span>
                <h3>Bhuj to Tent City Transfers</h3>
                <p>{route.transferDetails}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Duration Packages */}
        <section className={`${styles.section} ${styles.bgDarker}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>CUSTOMIZABLE ITINERARIES</span>
              <h2 className={styles.sectionTitle}>Package Durations Available</h2>
              <p className={styles.sectionSubtitle}>
                Choose the duration that best matches your schedule and travel pace.
              </p>
            </div>

            <div className={styles.durationGrid}>
              {route.durationOptions.map((opt, i) => (
                <div
                  key={i}
                  className={`${styles.durationCard} ${
                    opt.badge ? styles.durationCardFeatured : ''
                  }`}
                >
                  {opt.badge && (
                    <span className={styles.durationBadge}>{opt.badge}</span>
                  )}
                  <h3 className={styles.durationTitle}>{opt.duration}</h3>
                  <p className={styles.durationDesc}>{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suggested Itinerary Timeline */}
        <section className={`${styles.section} ${styles.bgCard}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>DAY-BY-DAY EXPERIENCE</span>
              <h2 className={styles.sectionTitle}>
                Sample 4-Day Itinerary from {route.cityName}
              </h2>
              <p className={styles.sectionSubtitle}>
                Designed to maximize your desert moments without feeling hurried.
              </p>
            </div>

            <div className={styles.timelineWrapper}>
              {route.suggestedItinerary.map((dayItem, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineHeader}>
                    <span className={styles.dayTag}>{dayItem.day}</span>
                    <h4 className={styles.dayTitle}>{dayItem.title}</h4>
                  </div>
                  <p className={styles.dayDetails}>{dayItem.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="book-trip" className={`${styles.section} ${styles.bgDarker}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>HASSLE-FREE BOOKING</span>
              <h2 className={styles.sectionTitle}>
                Book Your {route.cityName} to Rann Utsav Package
              </h2>
              <p className={styles.sectionSubtitle}>
                Share your dates and passenger count. We will craft your personalized quotation including Tent City accommodation, transfers, and flight/train assistance.
              </p>
            </div>

            <SinglePageForm
              initialDestination={`Rann Utsav (From ${route.cityName})`}
              initialService="Domestic Holiday"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className={`${styles.section} ${styles.bgCard}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>TRANSIT &amp; STAY QUESTIONS</span>
              <h2 className={styles.sectionTitle}>
                Traveling from {route.cityName}: FAQs
              </h2>
              <p className={styles.sectionSubtitle}>
                Click any question below to see tips, connectivity details, and travel advice.
              </p>
            </div>

            <RannFaqAccordion faqs={route.faqs} enquireAnchor="#book-trip" />
          </div>
        </section>

        {/* Other City Departures */}
        <section className={`${styles.section} ${styles.bgDarker}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>EXPLORE OTHER HUBS</span>
              <h2 className={styles.sectionTitle}>Departing from Another City?</h2>
              <p className={styles.sectionSubtitle}>
                We operate curated Rann Utsav tour packages across all major Indian transit hubs.
              </p>
            </div>

            <div className={styles.otherHubsGrid}>
              {otherRoutes.map((hub) => (
                <Link
                  key={hub.slug}
                  href={`/rann-utsav/${hub.slug}`}
                  className={styles.hubLink}
                >
                  {hub.cityName} ({hub.cityCode}) &rarr;
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
