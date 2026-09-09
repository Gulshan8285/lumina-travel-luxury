"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getSiteConfig, SiteConfig } from '@/lib/siteConfig';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [config, setConfig] = useState<SiteConfig>(() => getSiteConfig());

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

  // Sync siteConfig updates in real-time
  useEffect(() => {
    const loadConfig = () => {
      try {
        const saved = localStorage.getItem('sobhavi_site_config');
        if (saved) {
          setConfig(JSON.parse(saved));
        }
      } catch (e) {
        console.error(e);
      }
    };
    loadConfig();

    const handleStorage = () => loadConfig();
    window.addEventListener('storage', handleStorage);
    window.addEventListener('sobhavi_site_config_updated', handleStorage);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('sobhavi_site_config_updated', handleStorage);
    };
  }, []);

  const isSolid = !isHomePage || scrolled || mobileMenuOpen;

  const header = config.header || {
    brandName: config.company?.brandName || "SOBHAVI TRAVELS",
    logoSubtitle: "LUXURY BESPOKE JOURNEYS",
    phone: config.company?.phone || "+91 74069 94752",
    whatsapp: config.company?.whatsapp || "7406994752",
    enquireButtonText: "Enquire Now",
    enquireButtonLink: "/enquire",
    announcementText: "",
    showAnnouncement: false
  };

  const brandName = header.brandName || config.company?.brandName || "SOBHAVI TRAVELS";

  const directPhone = header.phone || config.company?.phone || "+91 74069 94752";
  const cleanPhone = directPhone.replace(/[^0-9+]/g, '');

  const cleanWa = (header.whatsapp || config.company?.whatsapp || '7406994752').replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanWa.startsWith('91') ? cleanWa : '91' + cleanWa}?text=${encodeURIComponent('Hello ' + brandName + '! I want to plan a luxury trip.')}`;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Domestic", href: "/domestic" },
    { label: "International", href: "/international" },
    { label: "Travel Buddy", href: "/travel-buddy" },
    { label: "Rann Utsav", href: "/rann-utsav" },
    { label: "Blogs", href: "/blog" },
  ];

  return (
    <>
      {header.showAnnouncement && header.announcementText && (
        <div className={styles.announcementBar}>
          {header.announcementText}
        </div>
      )}
      <nav className={`${styles.navbar} ${isSolid ? styles.scrolled : ''}`} style={header.showAnnouncement && header.announcementText ? { top: '32px' } : undefined}>
        <div className={styles.navContainer}>
          {/* Left: Dynamic Brand Logo */}
          <Link href="/" className={styles.logo} aria-label={brandName}>
            <Image
              src="/logo.png"
              alt={brandName}
              width={160}
              height={70}
              className={styles.logoImage}
              priority
            />
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
            <a href={`tel:${cleanPhone}`} className={styles.phone}>
              {directPhone}
            </a>
            <Link href={header.enquireButtonLink || "/enquire"} className="btn-pink">
              {header.enquireButtonText || "Enquire Now"}
            </Link>
          </div>

          {/* Mobile controls */}
          <div className={styles.mobileRight}>
            <Link href={header.enquireButtonLink || "/enquire"} className={`btn-pink ${styles.mobileEnquire}`}>
              {header.enquireButtonText || "Enquire"}
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
                  <a href={`tel:${cleanPhone}`} className={styles.mobilePhoneBtn}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.27 22 2 13.73 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
                    </svg>
                    Call {directPhone}
                  </a>
                  <a 
                    href={waUrl} 
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
    </>
  );
}
