
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };
  
  return (
    <div className="product-card group">
      <Link to={`/products/${product.id}`} className="block relative">
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {product.bestSeller && (
            <span className="absolute top-2 left-2 bg-pink text-white text-xs font-semibold px-2 py-1 rounded-full">
              Best Seller
            </span>
          )}
          
          {product.isNew && (
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              New
            </span>
          )}
          
          {product.discount && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              -{product.discount}%
            </span>
          )}
          
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-2 px-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex justify-between items-center">
              <button 
                className="text-gray-700 hover:text-pink focus:outline-none transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart size={20} />
              </button>
              
              <button 
                onClick={handleAddToCart}
                className="bg-pink hover:bg-pink-dark text-white p-2 rounded-full focus:outline-none transition-colors"
                aria-label="Add to cart"
              >
                <ShoppingCart size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center mb-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          </div>
          
          <h3 className="font-medium text-gray-900 group-hover:text-pink transition-colors">
            {product.name}
          </h3>
          
          <p className="font-semibold text-pink mt-1">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
