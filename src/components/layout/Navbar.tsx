"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isSolid = !isHomePage || scrolled || mobileMenuOpen;

  const navLinks = [
    { label: "Domestic", href: "/domestic" },
    { label: "International", href: "/international" },
    { label: "Flights", href: "/flights" },
    { label: "Hotels", href: "/hotels" },
    { label: "Experiences", href: "/journeys" },
    { label: "Journal", href: "/blog" },
  ];

  return (
    <nav className={`${styles.navbar} ${isSolid ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        {/* Left: Logo */}
        <Link href="/" className={styles.logo}>
          SOBHAVI<br />TRAVELS
        </Link>

        {/* Center: Desktop Links */}
        <div className={styles.centerLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.activeNavLink : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className={styles.rightActions}>
          <a href="tel:+917406994752" className={styles.phone}>
            +91 74069 94752
          </a>
          <Link href="/enquire" className="btn-pink">
            Enquire Now
          </Link>
        </div>

        {/* Mobile controls */}
        <div className={styles.mobileRight}>
          <Link href="/enquire" className={`btn-pink ${styles.mobileEnquire}`}>
            Enquire
          </Link>
          <button 
            type="button" 
            className={styles.hamburgerBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.line1Open : ''}`} />
            <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.line2Open : ''}`} />
            <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.line3Open : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={styles.mobileDrawer}
          >
            <div className={styles.mobileDrawerContent}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileNavLink} ${pathname === link.href ? styles.mobileActive : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className={styles.mobileDivider} />
              <Link href="/about" className={styles.mobileNavLink}>
                About Us
              </Link>
              <Link href="/visa" className={styles.mobileNavLink}>
                Visa Services
              </Link>
              <Link href="/contact" className={styles.mobileNavLink}>
                Contact Us
              </Link>
              <div className={styles.mobileContactBox}>
                <a href="tel:+917406994752" className={styles.mobilePhoneBtn}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.27 22 2 13.73 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
                  </svg>
                  Call +91 74069 94752
                </a>
                <a 
                  href="https://wa.me/917406994752?text=Hello%20Sobhavi%20Travels!%20I%20want%20to%20plan%20a%20trip." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.mobileWaBtn}
                >
                  WhatsApp Concierge
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
