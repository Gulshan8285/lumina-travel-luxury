import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #0b0f19 0%, #111827 100%)',
        color: '#ffffff',
        padding: '8rem 1.5rem 5rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#e11d48',
            marginBottom: '1rem'
          }}>
            ERROR 404 &bull; PAGE NOT FOUND
          </span>

          <h1 style={{
            fontFamily: 'var(--font-heading, sans-serif)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            margin: '0 0 1.2rem',
            lineHeight: 1.15
          }}>
            Looking for Your Next Escape?
          </h1>

          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.75)',
            margin: '0 0 2.5rem'
          }}>
            The page you are looking for might have been moved or does not exist. Let us guide you back to our curated journeys.
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <Link href="/" className="btn-pink" style={{ padding: '0.9rem 2rem', fontSize: '0.9rem' }}>
              Return to Homepage &rarr;
            </Link>
            <a 
              href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels,%20I%20need%20assistance%20planning%20my%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: '0.9rem 2rem', fontSize: '0.9rem' }}
            >
              WhatsApp Concierge
            </a>
          </div>

          <div style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            fontSize: '0.85rem'
          }}>
            <Link href="/domestic" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
              Domestic Holidays
            </Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>&bull;</span>
            <Link href="/international" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
              International Holidays
            </Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>&bull;</span>
            <Link href="/flights" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
              Flight Bookings
            </Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>&bull;</span>
            <Link href="/hotels" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
              Hotels
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
