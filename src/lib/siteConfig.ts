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

export interface SocialConfig {
  instagram: string;
  facebook: string;
  youtube: string;
  linkedin: string;
  twitter: string;
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
  name: string;
  tagline: string;
  image: string;
  videoUrl?: string;
  duration: string;
  bestTime: string;
  overview: string;
  inclusions: string[];
}

export interface SiteConfig {
  company: CompanyConfig;
  social: SocialConfig;
  hero: HeroConfig;
  heroSlides: HeroSlide[];
  categories: TravelCategory[];
  domesticDestinations: DestinationPackage[];
  internationalDestinations: DestinationPackage[];
}

// In-memory cache for serverless environments where filesystem may be read-only
let inMemoryConfig: SiteConfig | null = null;

export function getSiteConfig(): SiteConfig {
  if (inMemoryConfig) {
    return inMemoryConfig;
  }
  return (defaultConfig as unknown as SiteConfig);
}

export function saveSiteConfig(newConfig: Partial<SiteConfig>): SiteConfig {
  const current = getSiteConfig();
  const merged: SiteConfig = {
    ...current,
    ...newConfig,
    company: { ...current.company, ...(newConfig.company || {}) },
    social: { ...current.social, ...(newConfig.social || {}) },
    hero: { ...current.hero, ...(newConfig.hero || {}) },
    heroSlides: newConfig.heroSlides || current.heroSlides,
    categories: newConfig.categories || current.categories,
    domesticDestinations: newConfig.domesticDestinations || current.domesticDestinations,
    internationalDestinations: newConfig.internationalDestinations || current.internationalDestinations
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
