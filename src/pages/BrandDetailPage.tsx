import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Brand, brands } from '@/data/brands';
import { getProductsByBrand } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

const BrandDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [brand, setBrand] = useState<Brand | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (!slug) return;
    setLoading(true);

    // Use local data
    const brandData = brands.find(b => b.slug === slug) || null;
    setBrand(brandData);

    if (brandData) {
      const brandProducts = getProductsByBrand(brandData.name);
      setProducts(brandProducts);
    }
    setLoading(false);
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
        className="w-full h-[450px] bg-cover bg-center mb-8 relative overflow-hidden"
        style={{
          backgroundImage: !brand.videoUrl
            ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${brand.coverImageUrl})`
            : undefined,
        }}
      >
        {brand.videoUrl && (
          <video
            key={brand.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={brand.coverImageUrl}
          >
            <source src={brand.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="container-custom h-full flex flex-col justify-center relative z-10">
          <h1 className="text-4xl font-serif font-bold text-white mb-2">
            {brand.name}
          </h1>
          {brand.description && brand.description !== '...' && (
            <p className="text-white text-lg max-w-2xl">
              {brand.description}
            </p>
          )}
        </div>
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
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
