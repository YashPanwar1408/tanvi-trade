import { Product } from '../types';

// Mock product data
const products: Product[] = [
  {
    id: 1,
    name: 'Matte Lipstick',
    price: 19.99,
    description: 'Long-lasting matte lipstick in a variety of shades.',
    image: '/placeholder.svg',
    category: 'Lips',
    rating: 4.5,
    reviews: 124,
    inStock: true,
    featured: true,
    bestSeller: true,
    brandId: 'sugar'
  },
  {
    id: 2,
    name: 'Foundation',
    price: 29.99,
    description: 'Lightweight foundation with medium to full coverage.',
    image: '/placeholder.svg',
    category: 'Face',
    rating: 4.3,
    reviews: 98,
    inStock: true,
    featured: true,
    brandId: 'lakme'
  },
  {
    id: 3,
    name: 'Mascara',
    price: 14.99,
    description: 'Volumizing mascara for dramatic lashes.',
    image: '/placeholder.svg',
    category: 'Eyes',
    rating: 4.7,
    reviews: 156,
    inStock: true,
    featured: true,
    brandId: 'glamup21'
  },
  {
    id: 4,
    name: 'Eyeshadow Palette',
    price: 39.99,
    description: 'Versatile eyeshadow palette with 12 complementary shades.',
    image: '/placeholder.svg',
    category: 'Eyes',
    rating: 4.6,
    reviews: 87,
    inStock: true,
    featured: true,
    brandId: 'renee'
  },
  {
    id: 5,
    name: 'Blush',
    price: 17.99,
    description: 'Natural-looking blush for a healthy glow.',
    image: '/placeholder.svg',
    category: 'Face',
    rating: 4.2,
    reviews: 63,
    inStock: true,
    brandId: 'lakme'
  },
  {
    id: 6,
    name: 'Lip Gloss',
    price: 15.99,
    description: 'Shiny lip gloss with moisturizing ingredients.',
    image: '/placeholder.svg',
    category: 'Lips',
    rating: 4.4,
    reviews: 72,
    inStock: true,
    brandId: 'sugar'
  },
  {
    id: 7,
    name: 'Highlighting Powder',
    price: 24.99,
    description: 'Illuminating highlighting powder for a radiant complexion.',
    image: '/placeholder.svg',
    category: 'Face',
    rating: 4.8,
    reviews: 112,
    inStock: true,
    bestSeller: true,
    brandId: 'glamup21'
  },
  {
    id: 8,
    name: 'Brow Pencil',
    price: 12.99,
    description: 'Precision brow pencil for defined eyebrows.',
    image: '/placeholder.svg',
    category: 'Eyes',
    rating: 4.1,
    reviews: 58,
    inStock: true,
    brandId: 'renee'
  },
  {
    id: 9,
    name: 'Setting Spray',
    price: 22.99,
    description: 'Long-lasting setting spray to keep makeup in place all day.',
    image: '/placeholder.svg',
    category: 'Face',
    rating: 4.5,
    reviews: 94,
    inStock: true,
    brandId: 'lakme'
  },
  {
    id: 10,
    name: 'Liquid Eyeliner',
    price: 16.99,
    description: 'Smudge-proof liquid eyeliner for precise application.',
    image: '/placeholder.svg',
    category: 'Eyes',
    rating: 4.6,
    reviews: 108,
    inStock: true,
    brandId: 'sugar'
  },
  {
    id: 11,
    name: 'Face Primer',
    price: 27.99,
    description: 'Smoothing face primer for flawless makeup application.',
    image: '/placeholder.svg',
    category: 'Face',
    rating: 4.4,
    reviews: 76,
    inStock: true,
    isNew: true,
    brandId: 'glamup21'
  },
  {
    id: 12,
    name: 'Lip Balm',
    price: 9.99,
    description: 'Hydrating lip balm with SPF protection.',
    image: '/placeholder.svg',
    category: 'Lips',
    rating: 4.2,
    reviews: 82,
    inStock: true,
    discount: 15,
    brandId: 'renee'
  }
];

export const categories = [
  { id: "all", name: "All" },
  { id: "Lips", name: "Lips" },
  { id: "Face", name: "Face" },
  { id: "Eyes", name: "Eyes" },
];

export const getAllProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByBrand = (brandName: string): Product[] => {
  // Map brand names to brandIds
  const brandIdMap: { [key: string]: string } = {
    'Sugar': 'sugar',
    'Lakme': 'lakme',
    'GlamUp21': 'glamup21',
    'Renee': 'renee'
  };
  
  const brandId = brandIdMap[brandName] || brandName.toLowerCase();
  return products.filter(product => product.brandId === brandId);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getSaleProducts = (): Product[] => {
  return products.filter(product => product.discount && product.discount > 0);
};
