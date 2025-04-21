
import { Link } from 'react-router-dom';
import { Brand } from '@/types';

interface BrandCardProps {
  brand: Brand;
}

const BrandCard = ({ brand }: BrandCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <div 
        className="aspect-[3/2] bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${brand.image})`,
        }}
      >
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 className="text-2xl font-serif font-bold text-white mb-2">
            {brand.name}
          </h3>
          <p className="text-white text-sm mb-4">
            {brand.description}
          </p>
          <Link 
            to={`/brands/${brand.slug}`} 
            className="inline-flex items-center justify-center px-4 py-2 bg-white text-pink font-medium text-sm rounded-md transition-colors hover:bg-gray-100"
          >
            Discover {brand.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
