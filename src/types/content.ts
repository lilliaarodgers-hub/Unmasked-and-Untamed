export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  context: string;
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  isCTA?: boolean;
}

export interface PathCard {
  id: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  icon: string;
}

export interface ProgramModule {
  number: number;
  title: string;
  themes: string[];
  pillar: "body" | "mind" | "soul" | "nervous-system";
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  layer: string;
  slug: string;
  readTime: string;
}
