
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  return (
    <div className="flex py-4 border-b border-gray-200">
      <div className="w-24 h-24 overflow-hidden rounded-md flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h3 className="text-gray-900 font-medium">{item.name}</h3>
        <p className="text-pink font-medium mt-1">${item.price.toFixed(2)}</p>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
            <button 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            
            <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
            
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <button 
            onClick={() => removeFromCart(item.id)}
            className="text-gray-500 hover:text-red-500 transition-colors"
            aria-label="Remove item"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
