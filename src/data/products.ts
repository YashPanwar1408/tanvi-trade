
import { Product } from '../types';

// Mock product data
export const products: Product[] = [
  {
    id: 1,
    name: 'Matte Lipstick',
    price: 19.99,
    description: 'Long-lasting matte lipstick in a variety of shades.',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQnLl4c7oC-9jAfKp739CVyB4krnPi5Ko0w-f_ppNasAYwQs3yPhplpAxwuV3qezpTpccDG0PhwJ2o3R9C2ccaG7TJIHLo5DsrfhpflM8PI4wbx5dy5vB7bwA',
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
    image: 'https://m.media-amazon.com/images/I/71+xNY6nI7L.jpg',
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
    image: 'https://m.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_sku_EETT01_1080x1080_0.jpg?width=1440&height=1440',
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
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQd0JShIsMSiY2NPQA1f7dB4dUsQkfVNlHuDvrx7sSWJvwMp6wX32P9AvPvrvBKlbfT6O8kfn79PALrnxqIgrszHRq088AeHXa_GvAnhwGqZA7W9X0Onsv2vA',
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
    image: 'https://m.media-amazon.com/images/I/61Uw78H8dML.jpg',
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
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQPDXRaqUOA8si--6faa6xypBVkJPyMN5WrvV1i8efTs8OY-fvUxcctQacXoTIPBB86Ggl66F0B-ZuM8mDXhxh8XYMkwH_iuugcDQ4TTJxH_kTxlISsKccL',
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
    image: 'https://media.istockphoto.com/id/1077206846/photo/make-up-palette-and-brushes-on-beige-background.jpg?s=612x612&w=0&k=20&c=-bHwdHD3pKi7ea1kCaX47JAoaW0GV94tOLItKDsClmw=',
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
    image: 'https://m.media-amazon.com/images/I/619-rE+1nrL.jpg',
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
    image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/22838332/2023/10/23/c3a033bd-4731-4207-b589-f45c232d4bc51698044643938-NYX-PROFESSIONAL-MAKEUP-Long-Lasting-Matte-Finish-Makeup-Set-1.jpg',
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
    image: 'https://marscosmetics.in/cdn/shop/products/EL03-4W.jpg?v=1647930734',
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
    image: 'https://plumgoodness.com/cdn/shop/products/1WBG_7_c13ec98e-2288-4828-93d9-59273f7e2521.jpg?v=1689155544&width=1100',
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
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRpUTlTDs3MIMTlesvL7r_jNh0p7bwsTG358U9Pc3v7JtZbp6hUdul6ohZEEQxiMxQgV_zRkYrJrgsJVBHG5mzjr2fWdtaOHtpi5EyakT1zhvCIQ7YhRjNy',
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

// Add the missing getRelatedProducts function
export const getRelatedProducts = (productId: number, category: string): Product[] => {
  return products
    .filter(product => product.id !== productId && product.category === category)
    .slice(0, 4); // Return up to 4 related products
};
