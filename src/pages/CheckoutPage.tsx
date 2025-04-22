
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CheckoutForm from '../components/checkout/CheckoutForm';
import OrderSummary from '../components/checkout/OrderSummary';

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to cart if cart is empty
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);
  
  if (cartItems.length === 0) {
    return null; // Don't render anything while redirecting
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Checkout</h1>
        <p className="text-gray-600 mb-8">
          Complete your order by providing your details below
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <CheckoutForm />
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
