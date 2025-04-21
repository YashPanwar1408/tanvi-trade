
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import BrandsPage from './BrandsPage';

const Index = () => {
  return (
    <div>
      <Hero />
      {/* No Features/Testimonials/Unwanted UI */}
      <FeaturedProducts />
      {/* Add brands section on homepage below featured products */}
      <BrandsPage />
    </div>
  );
};

export default Index;
