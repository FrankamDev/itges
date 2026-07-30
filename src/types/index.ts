export type Theme = 'light' | 'dark';

export interface Course {
  id: string;
  title: string;
  category: 'A' | 'B' | 'Accelerated' | 'Code' | 'Refresher';
  description: string;
  duration: string;
  price: number;
  features: string[];
  image: string;
  badge?: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  licenseType: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: 'Car' | 'Motorcycle';
  transmission: 'Manuel' | 'Automatique';
  year: number;
  image: string;
}

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}