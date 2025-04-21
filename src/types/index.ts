
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
  brandId?: string;
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

export interface Brand {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
}

export interface Order {
  id: string;
  user_id: string;
  total_amount: number;
  status: string;
  payment_screenshot?: string;
  created_at: string;
  updated_at: string;
  items?: OrderItem[];
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: number;
  quantity: number;
  price: number;
  created_at: string;
}
