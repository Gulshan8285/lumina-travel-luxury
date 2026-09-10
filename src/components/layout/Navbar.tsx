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
    let lastScrolled = window.scrollY > 50;
    setScrolled(lastScrolled);

    const handleScroll = () => {
      const isOver = window.scrollY > 50;
      if (isOver !== lastScrolled) {
        lastScrolled = isOver;
        setScrolled(isOver);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
          const parsed = JSON.parse(saved);
          if (parsed.company?.phone) parsed.company.phone = parsed.company.phone.replace(/\s+/g, '');
          if (parsed.header?.phone) parsed.header.phone = parsed.header.phone.replace(/\s+/g, '');
          if (parsed.footer?.phone) parsed.footer.phone = parsed.footer.phone.replace(/\s+/g, '');
          localStorage.setItem('sobhavi_site_config', JSON.stringify(parsed));
          setConfig(parsed);
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
    phone: config.company?.phone || "+917406994752",
    whatsapp: config.company?.whatsapp || "7406994752",
    enquireButtonText: "Enquire Now",
    enquireButtonLink: "/enquire",
    announcementText: "",
    showAnnouncement: false
  };

  const brandName = header.brandName || config.company?.brandName || "SOBHAVI TRAVELS";

  const rawPhone = header.phone || config.company?.phone || "+917406994752";
  const directPhone = rawPhone.replace(/\s+/g, '');
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
            <Link href={header.enquireButtonLink || "/enquire"} className="btn-gold">
              {header.enquireButtonText || "Enquire Now"}
            </Link>
          </div>

          {/* Mobile controls */}
          <div className={styles.mobileRight}>
            <Link href={header.enquireButtonLink || "/enquire"} className={`btn-gold ${styles.mobileEnquire}`}>
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
