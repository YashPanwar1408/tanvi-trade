
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';

const CartSummary = () => {
  const { getTotalPrice } = useCart();
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    const calculateSubtotal = getTotalPrice();
    setSubtotal(calculateSubtotal);
    
    // Calculate shipping (free shipping for orders over ₹1000)
    const calculatedShipping = calculateSubtotal >= 1000 ? 0 : 99;
    setShipping(calculatedShipping);
    
    // Calculate total
    setTotal(calculateSubtotal + calculatedShipping);
  }, [getTotalPrice]);
  
  return (
    <div className="space-y-3">
      <div className="flex justify-between text-gray-600">
        <span>Subtotal</span>
        <span>₹{subtotal.toFixed(2)}</span>
      </div>
      
      <div className="flex justify-between text-gray-600">
        <span>Shipping</span>
        <span>
          {shipping === 0 ? (
            <span className="text-green-500">Free</span>
          ) : (
            `₹${shipping.toFixed(2)}`
          )}
        </span>
      </div>
      
      {shipping > 0 && (
        <div className="text-xs text-gray-500">
          Free shipping on orders over ₹1000
        </div>
      )}
      
      <div className="border-t border-gray-200 my-3 pt-3"></div>
      
      <div className="flex justify-between font-medium text-gray-900">
        <span>Total</span>
        <span>₹{total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartSummary;
