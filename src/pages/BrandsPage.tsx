
import { useState, useEffect } from 'react';
import { Brand } from '@/types';
import { getBrands } from '@/services/brands';
import BrandCard from '@/components/brands/BrandCard';

const BrandsPage = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const data = await getBrands();
        setBrands(data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBrands();
  }, []);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Our Premium Brands</h1>
        <p className="text-gray-600 mb-8">
          Discover our collection of premium beauty brands
        </p>
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 animate-pulse">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg aspect-[3/2]"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {brands.map(brand => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandsPage;
