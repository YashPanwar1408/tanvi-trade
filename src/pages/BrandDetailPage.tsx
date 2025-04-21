
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Brand, Product } from '@/types';
import { getBrandBySlug } from '@/services/brands';
import ProductCard from '@/components/products/ProductCard';
import { getProductsByBrand } from '@/data/products';

const BrandDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [brand, setBrand] = useState<Brand | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchBrandAndProducts = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const brandData = await getBrandBySlug(slug);
        setBrand(brandData);
        
        if (brandData) {
          // For now, use mock data
          const brandProducts = getProductsByBrand(brandData.name);
          setProducts(brandProducts);
        }
      } catch (error) {
        console.error('Error fetching brand details:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBrandAndProducts();
  }, [slug]);
  
  if (loading) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg aspect-square"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  if (!brand) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Brand Not Found</h1>
          <p className="text-gray-600 mb-6">The brand you're looking for doesn't exist or has been removed.</p>
          <Link to="/brands" className="btn-primary">Browse All Brands</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <div 
        className="w-full h-64 bg-cover bg-center mb-8"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${brand.image})`,
        }}
      >
        <div className="container-custom h-full flex flex-col justify-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-2">
            {brand.name}
          </h1>
          <p className="text-white text-lg max-w-2xl">
            {brand.description}
          </p>
        </div>
      </div>
      
      <div className="container-custom">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
          {brand.name} Products
        </h2>
        
        {products.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600 mb-4">No products available for this brand yet.</p>
            <Link to="/products" className="btn-primary">Browse All Products</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandDetailPage;
