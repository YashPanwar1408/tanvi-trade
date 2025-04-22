
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { getFeaturedProducts } from '../../data/products';
import ProductCard from '../products/ProductCard';

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    setProducts(getFeaturedProducts());
  }, []);
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover our hand-picked selection of premium products loved by our customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
