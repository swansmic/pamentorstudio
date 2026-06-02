export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  readingTime?: string;
  featured?: boolean;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServicePathway {
  slug: string;
  name: string;
  duration: string;
  investment: string;
  tagline: string;
  description: string;
  href: string;
  cadence: string[];
}
