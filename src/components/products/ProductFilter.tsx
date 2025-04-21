
import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { Category } from '../../types';

interface ProductFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onPriceChange: (min: number, max: number) => void;
  onSortChange: (value: string) => void;
}

const ProductFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  onPriceChange,
  onSortChange
}: ProductFilterProps) => {
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);
  
  const handlePriceFilter = () => {
    onPriceChange(minPrice === '' ? 0 : minPrice, maxPrice === '' ? 1000 : maxPrice);
  };
  
  const resetPrice = () => {
    setMinPrice('');
    setMaxPrice('');
    onPriceChange(0, 1000);
  };
  
  return (
    <div className="mb-8">
      {/* Desktop filters */}
      <div className="hidden md:block">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium text-gray-900">Filters</h2>
          <button 
            onClick={() => {
              resetPrice();
              onCategoryChange('all');
              onSortChange('featured');
            }}
            className="text-pink text-sm hover:underline"
          >
            Clear All
          </button>
        </div>
        
        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map(category => (
              <div key={category.id} className="flex items-center">
                <button
                  onClick={() => onCategoryChange(category.id)}
                  className={`text-sm w-full text-left py-1 ${
                    selectedCategory === category.id ? 'text-pink font-medium' : 'text-gray-600 hover:text-pink'
                  }`}
                >
                  {category.name}
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Price Range */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
          <div className="flex space-x-2 mb-3">
            <div>
              <label htmlFor="min-price" className="sr-only">Minimum Price</label>
              <input
                type="number"
                id="min-price"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value === '' ? '' : Number(e.target.value))}
                className="input-field w-full"
                min="0"
              />
            </div>
            <div>
              <label htmlFor="max-price" className="sr-only">Maximum Price</label>
              <input
                type="number"
                id="max-price"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value === '' ? '' : Number(e.target.value))}
                className="input-field w-full"
                min="0"
              />
            </div>
          </div>
          <button onClick={handlePriceFilter} className="btn-primary w-full py-2">
            Apply
          </button>
        </div>
      </div>
      
      {/* Mobile filters */}
      <div className="flex md:hidden justify-between items-center mb-4">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="bg-gray-100 px-4 py-2 rounded-md text-gray-800 flex items-center"
        >
          <span className="mr-2">Filters</span>
          <ChevronDown size={16} />
        </button>
        
        <div>
          <label htmlFor="mobile-sort" className="sr-only">Sort By</label>
          <select
            id="mobile-sort"
            onChange={(e) => onSortChange(e.target.value)}
            className="input-field py-2"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>
      
      {/* Mobile filter panel */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white h-full w-80 max-w-full float-right overflow-auto">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium">Filters</h2>
                <button onClick={() => setIsMobileFilterOpen(false)}>
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              {/* Mobile Categories */}
              <div className="mb-6">
                <button 
                  className="flex justify-between items-center w-full mb-3"
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                >
                  <span className="font-medium text-gray-900">Categories</span>
                  <ChevronDown size={16} className={`transition-transform ${categoryDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {categoryDropdownOpen && (
                  <div className="ml-2 space-y-2">
                    {categories.map(category => (
                      <div key={category.id} className="flex items-center">
                        <button
                          onClick={() => {
                            onCategoryChange(category.id);
                            setIsMobileFilterOpen(false);
                          }}
                          className={`text-sm w-full text-left py-1 ${
                            selectedCategory === category.id ? 'text-pink font-medium' : 'text-gray-600'
                          }`}
                        >
                          {category.name}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Mobile Price Range */}
              <div className="mb-6">
                <button 
                  className="flex justify-between items-center w-full mb-3"
                  onClick={() => setPriceDropdownOpen(!priceDropdownOpen)}
                >
                  <span className="font-medium text-gray-900">Price Range</span>
                  <ChevronDown size={16} className={`transition-transform ${priceDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {priceDropdownOpen && (
                  <div className="ml-2">
                    <div className="flex space-x-2 mb-3">
                      <div>
                        <input
                          type="number"
                          placeholder="Min"
                          value={minPrice}
                          onChange={(e) => setMinPrice(e.target.value === '' ? '' : Number(e.target.value))}
                          className="input-field w-full"
                          min="0"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Max"
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(e.target.value === '' ? '' : Number(e.target.value))}
                          className="input-field w-full"
                          min="0"
                        />
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        handlePriceFilter();
                        setIsMobileFilterOpen(false);
                      }} 
                      className="btn-primary w-full py-2"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => {
                  resetPrice();
                  onCategoryChange('all');
                  onSortChange('featured');
                  setIsMobileFilterOpen(false);
                }}
                className="text-pink text-sm w-full text-center py-2 border border-pink rounded-md hover:bg-pink-light transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
