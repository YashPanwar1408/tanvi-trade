
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
  bestSeller?: boolean;
  isNew?: boolean;
  discount?: number;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  comment: string;
  rating: number;
}
