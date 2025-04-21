
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';

const OrderSummary = () => {
  const { cartItems, getTotalPrice } = useCart();
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    const calculateSubtotal = getTotalPrice();
    setSubtotal(calculateSubtotal);
    
    // Calculate shipping (free shipping for orders over ₹1000)
    const calculatedShipping = calculateSubtotal >= 1000 ? 0 : 99;
    setShipping(calculatedShipping);
    
    // Calculate tax (7% GST)
    const calculatedTax = calculateSubtotal * 0.07;
    setTax(calculatedTax);
    
    // Calculate total
    setTotal(calculateSubtotal + calculatedShipping + calculatedTax);
  }, [getTotalPrice]);
  
  return (
    <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
      <h2 className="text-xl font-medium text-gray-900 mb-4">Order Summary</h2>
      
      <div className="divide-y divide-gray-200">
        {cartItems.map(item => (
          <div key={item.id} className="py-3 flex justify-between">
            <div className="flex items-center">
              <span className="text-gray-700">{item.quantity} x {item.name}</span>
            </div>
            <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-200 mt-4 pt-4 space-y-2">
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
        
        <div className="flex justify-between text-gray-600">
          <span>Tax (7%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        
        <div className="pt-2 mt-2 border-t border-gray-200 flex justify-between font-semibold text-gray-900">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
