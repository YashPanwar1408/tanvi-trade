
import { useState, useEffect } from 'react';
import { products, categories } from '../data/products';
import ProductFilter from '../components/products/ProductFilter';
import ProductGrid from '../components/products/ProductGrid';
import { Product } from '../types';

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState('featured');
  
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by price
    result = result.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'featured' - sort by featured flag
        result.sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, priceRange, sortBy]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };
  
  const handleSortChange = (value: string) => {
    setSortBy(value);
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Our Products</h1>
          <p className="text-gray-600">
            Discover our collection of premium, cruelty-free cosmetics
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 md:pr-8">
            <ProductFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              onPriceChange={handlePriceChange}
              onSortChange={handleSortChange}
            />
          </div>
          
          <div className="w-full md:w-3/4">
            <div className="hidden md:flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} products
              </p>
              
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="input-field bg-white"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters to find what you're looking for.
                </p>
              </div>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
