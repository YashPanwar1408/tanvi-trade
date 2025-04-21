
import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Radiant Glow Foundation",
    price: 39.99,
    description: "A lightweight, buildable foundation that gives your skin a natural, radiant finish. Infused with vitamin E and hyaluronic acid for all-day hydration.",
    image: "https://images.unsplash.com/photo-1596704017254-9a89bd5ad7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "face",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
    bestSeller: true
  },
  {
    id: 2,
    name: "Velvet Matte Lipstick",
    price: 24.99,
    description: "A creamy, highly pigmented lipstick that delivers a soft matte finish with exceptional comfort. Long-lasting and non-drying formula.",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "lips",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Precision Liquid Eyeliner",
    price: 19.99,
    description: "A waterproof, smudge-proof eyeliner with a fine-tip applicator for precise, defined lines. Intense color that lasts all day.",
    image: "https://images.unsplash.com/photo-1631214524020-5d2556b49b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "eyes",
    rating: 4.7,
    reviews: 56,
    inStock: true
  },
  {
    id: 4,
    name: "Hydrating Rose Face Mist",
    price: 22.99,
    description: "A refreshing face mist infused with rose water and glycerin to hydrate, soothe, and revitalize the skin. Perfect for on-the-go hydration.",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "skincare",
    rating: 4.5,
    reviews: 42,
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "Silk Smooth Concealer",
    price: 27.99,
    description: "A creamy, full-coverage concealer that seamlessly covers dark circles and imperfections without creasing or settling into fine lines.",
    image: "https://images.unsplash.com/photo-1631214570489-51842e327626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "face",
    rating: 4.9,
    reviews: 78,
    inStock: true
  },
  {
    id: 6,
    name: "Volumizing Mascara",
    price: 21.99,
    description: "A volumizing mascara that instantly lifts and separates lashes for a dramatic, clump-free look. Long-lasting formula that doesn't smudge or flake.",
    image: "https://images.unsplash.com/photo-1631214499975-88695fcf2d33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "eyes",
    rating: 4.6,
    reviews: 63,
    inStock: true,
    bestSeller: true
  },
  {
    id: 7,
    name: "Sunrise Eyeshadow Palette",
    price: 44.99,
    description: "A versatile eyeshadow palette featuring 12 highly pigmented shades in matte, shimmer, and metallic finishes. Create endless eye looks from subtle to dramatic.",
    image: "https://images.unsplash.com/photo-1596706696066-7c9cdcf528d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "eyes",
    rating: 4.8,
    reviews: 105,
    inStock: true,
    featured: true
  },
  {
    id: 8,
    name: "Hyaluronic Acid Serum",
    price: 34.99,
    description: "A hydrating serum formulated with hyaluronic acid to plump and moisturize the skin, reducing the appearance of fine lines and promoting a youthful complexion.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "skincare",
    rating: 4.9,
    reviews: 92,
    inStock: true,
    bestSeller: true
  },
  {
    id: 9,
    name: "Natural Blush Duo",
    price: 29.99,
    description: "A dual-shade blush compact with silky, buildable color that blends seamlessly for a natural-looking flush. Long-lasting and suitable for all skin types.",
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "face",
    rating: 4.6,
    reviews: 48,
    inStock: true
  },
  {
    id: 10,
    name: "Vitamin C Brightening Moisturizer",
    price: 38.99,
    description: "A daily moisturizer enriched with vitamin C to brighten dull skin, even out skin tone, and provide essential hydration. Suitable for all skin types.",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "skincare",
    rating: 4.7,
    reviews: 71,
    inStock: true
  },
  {
    id: 11,
    name: "Tinted Lip Balm Set",
    price: 18.99,
    description: "A set of three tinted lip balms that provide sheer, buildable color and nourishing hydration. Formulated with shea butter and vitamin E for soft, smooth lips.",
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "lips",
    rating: 4.5,
    reviews: 39,
    inStock: true,
    isNew: true
  },
  {
    id: 12,
    name: "Dewy Highlighter Stick",
    price: 26.99,
    description: "A creamy highlighter stick that adds a natural, dewy glow to the skin. Blends seamlessly for a subtle, lit-from-within radiance.",
    image: "https://images.unsplash.com/photo-1595621864337-1f61392683bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "face",
    rating: 4.7,
    reviews: 55,
    inStock: true,
    isNew: true
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "face", name: "Face" },
  { id: "eyes", name: "Eyes" },
  { id: "lips", name: "Lips" },
  { id: "skincare", name: "Skincare" }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getRelatedProducts = (currentProductId: number, category: string): Product[] => {
  return products
    .filter(product => product.category === category && product.id !== currentProductId)
    .slice(0, 4);
};
