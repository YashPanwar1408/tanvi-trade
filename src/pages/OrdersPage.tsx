
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserOrders } from '@/services/orders';
import { useAuth } from '@/context/AuthContext';
import { Order } from '@/types';
import { toast } from "@/components/ui/use-toast";

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to auth if not logged in
    if (!user) {
      navigate('/auth');
      return;
    }
    
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const data = await getUserOrders(user.id);
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast({
          title: "Error",
          description: "Failed to load your orders. Please try again.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchOrders();
  }, [user, navigate]);
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">My Orders</h1>
        <p className="text-gray-600 mb-8">
          View your order history and check the status of your orders
        </p>
        
        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-gray-100 h-40 rounded-lg animate-pulse"></div>
            ))}
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-2">You haven't placed any orders yet</h3>
            <p className="text-gray-600 mb-6">
              Head over to our products page to discover our collection
            </p>
            <button 
              onClick={() => navigate('/products')} 
              className="btn-primary"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Order Placed: {formatDate(order.created_at)}</p>
                      <p className="font-medium">Order #{order.id.split('-')[0]}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(order.status)}`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Order Summary</h3>
                    <p className="text-gray-600">Total Amount: ₹{order.total_amount.toFixed(2)}</p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Ordered Items</h4>
                    <div className="space-y-3">
                      {order.items && order.items.map((item: any) => (
                        <div key={item.id} className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="mr-4">
                              <div className="w-16 h-16 bg-gray-100 rounded"></div>
                            </div>
                            <div>
                              <p className="font-medium">Product #{item.product_id}</p>
                              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                            </div>
                          </div>
                          <p className="font-medium">₹{item.price.toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
