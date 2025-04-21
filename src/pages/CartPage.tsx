
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { toast } from "@/components/ui/use-toast";

const CartPage = () => {
  const { cartItems } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login or create an account to complete your purchase.",
        variant: "destructive"
      });
      navigate('/auth', { state: { from: '/checkout' } });
      return;
    }
    
    // Proceed to checkout
    navigate('/checkout');
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Your Cart</h1>
        <p className="text-gray-600 mb-8">
          Review your items before proceeding to checkout
        </p>
        
        {cartItems.length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag size={64} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="divide-y divide-gray-200">
                  {cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <Link to="/products" className="text-pink font-medium hover:underline">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-medium text-gray-900 mb-4">Order Summary</h2>
                
                <CartSummary />
                
                <button 
                  onClick={handleCheckout}
                  className="btn-primary w-full text-center mt-6 block"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
