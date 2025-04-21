
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

const OrderConfirmationPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  
  // Generate a random order number
  const orderNumber = `TVC-${Math.floor(100000 + Math.random() * 900000)}`;
  
  useEffect(() => {
    // If cart has items, user probably refreshed the confirmation page
    // Redirect to home to prevent confusion
    if (cartItems.length > 0) {
      navigate('/');
    }
  }, [cartItems, navigate]);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom max-w-3xl">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCheck size={64} className="text-green-600" />
            </div>
          </div>
          
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h1>
          
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been confirmed.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500">Order Number:</span>
              <span className="font-medium text-gray-900">{orderNumber}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Estimated Delivery:</span>
              <span className="font-medium text-gray-900">
                {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6">
            We've sent a confirmation email with all the details of your order.
            You will receive another email when your order ships.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="btn-primary">
              Continue Shopping
            </Link>
            
            <Link to="/products" className="btn-secondary">
              Browse More Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
