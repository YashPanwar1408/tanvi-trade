
import { useState, useEffect } from 'react';
import { Product } from '../../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(8);
  
  useEffect(() => {
    setDisplayProducts(products.slice(0, visibleCount));
  }, [products, visibleCount]);
  
  const loadMore = () => {
    setVisibleCount(prev => prev + 4);
  };
  
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {visibleCount < products.length && (
        <div className="text-center mt-10">
          <button 
            onClick={loadMore}
            className="btn-primary"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
