// src/pages/BrandsPage.tsx

import { brands as localBrands } from '@/data/brands';
import BrandCard from '@/components/brands/BrandCard';

const BrandsPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Our Premium Brands</h1>
        <p className="text-gray-600 mb-8">
          Discover our collection of premium beauty brands
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {localBrands.map(brand => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;