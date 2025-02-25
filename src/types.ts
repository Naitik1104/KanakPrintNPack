export interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  price: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
}

export interface Client {
  id: number;
  name: string;
  logo: string;
  description: string;
}