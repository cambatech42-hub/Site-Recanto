
export interface Accommodation {
  name: string;
  description: string;
  image: string;
  amenities: string[];
}

export interface Activity {
  name: string;
  description: string;
  image: string;
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
