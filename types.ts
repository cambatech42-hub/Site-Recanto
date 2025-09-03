export interface Accommodation {
  name: string;
  description: string;
  image: string;
  amenities: string[];
  gallery: string[];
}

export interface Activity {
  name: string;
  description: string;
  image: string;
  gallery: string[];
}

export interface NavLink {
    name: string;
    href: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  avatar: string;
}

export interface LeisureActivity {
  name: string;
  description: string;
  image: string;
  gallery: string[];
}