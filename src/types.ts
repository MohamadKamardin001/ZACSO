export interface SiteConfig {
  siteName: string;
  tagline: string;
  primaryEmail: string;
  primaryPhone: string;
  address: string;
  socialLinks: { label: string; url: string; icon: string }[];
  footerCopy: string;
}

export interface NavItem {
  label: string;
  path: string;
  hasDropdown?: boolean;
  children?: NavItem[];
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaLink: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Campaign {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  goalAmount: number;
  raisedAmount: number;
  currency: string;
  donationEnabled: boolean;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  category: string;
  publishedAt: string;
  isTemplateArtifact: boolean;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  venue: string;
  date: string;
  time: string;
}

export interface GalleryItem {
  id: string;
  label: string;
  image: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}
