import React from 'react';

export interface Accommodation {
  name: string;
  description: string;
  image: string;
  amenities: string[];
  gallery?: string[];
  details?: string;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  image: string;
  gallery?: string[];
  details?: string;
}

export interface NavLink {
    name: string;
    href: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  avatar: string;
}

export interface LeisureActivity {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: React.JSX.Element;
  gallery?: string[];
  details?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'passeios' | 'dicas' | 'eventos' | 'curiosidades';
  date: string;
  readTime: number;
  tags: string[];
}
