import defaultConfig from './siteConfig.json';
import { TravelCategory } from './categories';

export interface CompanyConfig {
  brandName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
}

export interface HeaderConfig {
  brandName: string;
  logoSubtitle?: string;
  phone: string;
  whatsapp?: string;
  enquireButtonText: string;
  enquireButtonLink: string;
  announcementText?: string;
  showAnnouncement?: boolean;
}

export interface FooterConfig {
  aboutTitle: string;
  aboutText: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  workingHours?: string;
  socialHeading?: string;
  copyrightText: string;
  creditText?: string;
  creditLink?: string;
}

export interface SocialConfig {
  instagram: string;
  facebook: string;
  youtube: string;
  linkedin: string;
  twitter: string;
  whatsapp?: string;
  telegram?: string;
  pinterest?: string;
}

export interface HeroConfig {
  headline: string;
  tagline: string;
  subheading: string;
  videoUrl: string;
  posterUrl: string;
}

export interface HeroSlide {
  id: string;
  category: string;
  name: string;
  tagline: string;
  videoUrl: string;
  posterUrl: string;
}

export interface DestinationPackage {
  id: string;
  slug?: string;
  name: string;
  tagline: string;
  image: string;
  videoUrl?: string;
  duration: string;
  bestTime: string;
  overview: string;
  inclusions: string[];
  startingPrice?: string;
  dayPlan?: { day: string; title: string }[];
}

export interface MenuItemConfig {
  id: string;
  label: string;
  href: string;
  enabled: boolean; // Master toggle: true = Visible, false = Hidden
  showInHeader: boolean; // Show in desktop top navbar
  showInMobile: boolean; // Show in mobile drawer menu
  showInFooter?: boolean; // Show in footer
  badge?: string; // Optional tag e.g. "HOT", "NEW"
  isCustom?: boolean; // User created custom menu item
}

export interface NavigationConfig {
  menuItems: MenuItemConfig[];
}

export interface SiteConfig {
  company: CompanyConfig;
  header?: HeaderConfig;
  footer?: FooterConfig;
  social: SocialConfig;
  hero: HeroConfig;
  heroSlides: HeroSlide[];
  categories: TravelCategory[];
  domesticDestinations: DestinationPackage[];
  internationalDestinations: DestinationPackage[];
  navigation?: NavigationConfig;
}

// In-memory cache for serverless environments where filesystem may be read-only
let inMemoryConfig: SiteConfig | null = null;

export const defaultMenuItems: MenuItemConfig[] = [
  { id: 'home', label: 'Home', href: '/', enabled: true, showInHeader: true, showInMobile: true, showInFooter: true },
  { id: 'domestic', label: 'Domestic', href: '/domestic', enabled: true, showInHeader: true, showInMobile: true, showInFooter: true },
  { id: 'international', label: 'International', href: '/international', enabled: true, showInHeader: true, showInMobile: true, showInFooter: true },
  { id: 'travel-buddy', label: 'Travel Buddy', href: '/travel-buddy', enabled: true, showInHeader: true, showInMobile: true, showInFooter: true },
  { id: 'rann-utsav', label: 'Rann Utsav', href: '/rann-utsav', enabled: true, showInHeader: true, showInMobile: true, showInFooter: true, badge: 'TRENDING' },
  { id: 'journeys', label: 'Journeys', href: '/journeys', enabled: true, showInHeader: false, showInMobile: true, showInFooter: true },
  { id: 'blogs', label: 'Blogs', href: '/blog', enabled: true, showInHeader: true, showInMobile: true, showInFooter: true },
  { id: 'about', label: 'About Us', href: '/about', enabled: true, showInHeader: false, showInMobile: true, showInFooter: true },
  { id: 'visa', label: 'Visa Services', href: '/visa', enabled: true, showInHeader: false, showInMobile: true, showInFooter: true },
  { id: 'flights', label: 'Flight Booking', href: '/flights', enabled: true, showInHeader: false, showInMobile: true, showInFooter: true },
  { id: 'hotels', label: 'Hotel Booking', href: '/hotels', enabled: true, showInHeader: false, showInMobile: true, showInFooter: true },
  { id: 'honeymoon', label: 'Honeymoon', href: '/honeymoon', enabled: true, showInHeader: false, showInMobile: true, showInFooter: true },
  { id: 'group-tours', label: 'Group Tours', href: '/group-tours', enabled: true, showInHeader: false, showInMobile: true, showInFooter: true },
  { id: 'contact', label: 'Contact Us', href: '/contact', enabled: true, showInHeader: false, showInMobile: true, showInFooter: true }
];

export const defaultNavigation: NavigationConfig = {
  menuItems: defaultMenuItems
};

export function getSiteConfig(): SiteConfig {
  if (inMemoryConfig) {
    return inMemoryConfig;
  }
  const loaded = (defaultConfig as unknown as SiteConfig);
  if (!loaded.navigation || !Array.isArray(loaded.navigation.menuItems) || loaded.navigation.menuItems.length === 0) {
    loaded.navigation = defaultNavigation;
  }
  return loaded;
}

const defaultHeader: HeaderConfig = {
  brandName: "SOBHAVI TRAVELS",
  logoSubtitle: "LUXURY BESPOKE JOURNEYS",
  phone: "+917406994752",
  whatsapp: "7406994752",
  enquireButtonText: "Enquire Now",
  enquireButtonLink: "/enquire",
  announcementText: "✦ Exclusive 2026 Pilgrimage & Luxury Holiday Bookings Now Open",
  showAnnouncement: false
};

const defaultFooter: FooterConfig = {
  aboutTitle: "SOBHAVI TRAVELS",
  aboutText: "Your journey. Our expertise. From quick getaways to international holidays, family vacations to special occasions — travel made memorable.",
  phone: "+917406994752",
  whatsapp: "7406994752",
  email: "hello@sobhavitravel.com",
  address: "Ground Floor, No. 19, 2nd Cross, NR Layout, Kalyanagar, Babusapalya, Bengaluru 560043",
  workingHours: "Mon – Sat: 12:00 PM – 9:00 PM (IST)",
  socialHeading: "Connect With Us",
  copyrightText: "All rights reserved. Travel made memorable.",
  creditText: "codeorbit.cloud",
  creditLink: "https://www.codeorbit.cloud"
};

export function saveSiteConfig(newConfig: Partial<SiteConfig>): SiteConfig {
  const current = getSiteConfig();
  const merged: SiteConfig = {
    ...current,
    ...newConfig,
    company: { ...current.company, ...(newConfig.company || {}) },
    header: { ...(current.header || defaultHeader), ...(newConfig.header || {}) },
    footer: { ...(current.footer || defaultFooter), ...(newConfig.footer || {}) },
    social: { ...current.social, ...(newConfig.social || {}) },
    hero: { ...current.hero, ...(newConfig.hero || {}) },
    heroSlides: newConfig.heroSlides || current.heroSlides,
    categories: newConfig.categories || current.categories,
    domesticDestinations: newConfig.domesticDestinations || current.domesticDestinations,
    internationalDestinations: newConfig.internationalDestinations || current.internationalDestinations,
    navigation: newConfig.navigation || current.navigation || defaultNavigation
  };

  inMemoryConfig = merged;

  // Server-only dynamic filesystem write
  if (typeof window === 'undefined') {
    try {
      const reqFs = eval("require('fs')");
      const reqPath = eval("require('path')");
      const configFile = reqPath.join(process.cwd(), 'src/lib/siteConfig.json');
      reqFs.writeFileSync(configFile, JSON.stringify(merged, null, 2), 'utf-8');
    } catch (error) {
      console.warn('Could not write to siteConfig.json filesystem. Kept in memory.', error);
    }
  }

  return merged;
}

