
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { createOrder, updateOrderWithScreenshot } from '@/services/orders';

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'India',
  });
  
  const [paymentStep, setPaymentStep] = useState(1);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Basic validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zip.trim()) newErrors.zip = 'ZIP code is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setScreenshotFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshotPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmitShipping = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form Errors",
        description: "Please fill in all required fields correctly.",
        variant: "destructive"
      });
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // Create order in database
      if (!user) {
        throw new Error("You must be logged in to place an order");
      }
      
      const orderItems = cartItems.map(item => ({
        product_id: item.id,
        quantity: item.quantity,
        price: item.price,
        order_id: "", // Will be filled by the backend
      }));
      
      const order = await createOrder(user.id, getTotalPrice(), orderItems);
      setOrderId(order.id);
      
      // Move to payment step
      setPaymentStep(2);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create order. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleSubmitPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!screenshotFile) {
      toast({
        title: "Screenshot Required",
        description: "Please upload a screenshot of your payment.",
        variant: "destructive"
      });
      return;
    }
    
    if (!paymentConfirmed) {
      toast({
        title: "Confirmation Required",
        description: "Please confirm that you have made the payment.",
        variant: "destructive"
      });
      return;
    }
    
    setIsProcessing(true);
    
    try {
      if (!orderId) {
        throw new Error("Order ID not found");
      }
      
      // In a real application, we would upload the file to storage
      // For now, we'll just pretend we're doing that
      // const { data, error } = await supabase.storage
      //   .from('payment-screenshots')
      //   .upload(`${orderId}.png`, screenshotFile);
      
      // if (error) throw error;
      
      // Simulate file upload
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update order with screenshot URL
      await updateOrderWithScreenshot(orderId, "payment-screenshot-url");
      
      // Clear cart and redirect to confirmation
      clearCart();
      navigate('/order-confirmation', { state: { orderId } });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to process payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };
  
  return (
    <>
      {paymentStep === 1 && (
        <form onSubmit={handleSubmitShipping} className="space-y-8">
          {/* Shipping Information */}
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-4">Shipping Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 mb-1">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`input-field w-full ${errors.firstName ? 'border-red-500' : ''}`}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-gray-700 mb-1">Last Name*</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`input-field w-full ${errors.lastName ? 'border-red-500' : ''}`}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field w-full ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">Phone*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`input-field w-full ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-gray-700 mb-1">Address*</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`input-field w-full ${errors.address ? 'border-red-500' : ''}`}
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>
              
              <div>
                <label htmlFor="city" className="block text-gray-700 mb-1">City*</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`input-field w-full ${errors.city ? 'border-red-500' : ''}`}
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
              
              <div>
                <label htmlFor="state" className="block text-gray-700 mb-1">State/Province*</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`input-field w-full ${errors.state ? 'border-red-500' : ''}`}
                />
                {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
              </div>
              
              <div>
                <label htmlFor="zip" className="block text-gray-700 mb-1">ZIP/Postal Code*</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className={`input-field w-full ${errors.zip ? 'border-red-500' : ''}`}
                />
                {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip}</p>}
              </div>
              
              <div>
                <label htmlFor="country" className="block text-gray-700 mb-1">Country*</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="input-field w-full"
                >
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <div>
            <button 
              type="submit" 
              className="btn-primary w-full py-3 text-center"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Continue to Payment'}
            </button>
          </div>
        </form>
      )}
      
      {paymentStep === 2 && (
        <form onSubmit={handleSubmitPayment} className="space-y-8">
          <div>
            <h2 className="text-xl font-medium text-gray-900 mb-4">Payment Information</h2>
            
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">UPI Payment</h3>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                <div className="max-w-[250px] bg-white p-4 rounded-md">
                  <img 
                    src="/lovable-uploads/46cf3a4a-a7ee-4675-9f81-8f1783077ab0.png" 
                    alt="UPI QR Code" 
                    className="w-full h-auto"
                  />
                  <p className="text-center text-sm mt-2">UPI ID: devanshb3456@okhdfcbank</p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700">Please scan the QR code using any UPI app (Google Pay, PhonePe, BHIM UPI etc.) to complete your payment.</p>
                  
                  <div className="font-medium text-lg text-gray-800">
                    Amount to Pay: ₹{getTotalPrice().toFixed(2)}
                  </div>
                  
                  <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                    <li>Open your UPI app</li>
                    <li>Scan the QR code</li>
                    <li>Enter the exact amount: ₹{getTotalPrice().toFixed(2)}</li>
                    <li>Complete the payment</li>
                    <li>Take a screenshot of the successful payment</li>
                  </ol>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Upload Payment Screenshot*</label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-pink file:text-white
                      hover:file:bg-pink-dark"
                  />
                  {screenshotPreview && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 mb-1">Preview:</p>
                      <img 
                        src={screenshotPreview} 
                        alt="Payment Screenshot" 
                        className="max-h-40 border border-gray-200 rounded-md" 
                      />
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="payment-confirmation" 
                    checked={paymentConfirmed}
                    onCheckedChange={(checked) => setPaymentConfirmed(checked === true)}
                  />
                  <label
                    htmlFor="payment-confirmation"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I confirm that I have made the payment of ₹{getTotalPrice().toFixed(2)}
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => setPaymentStep(1)}
              className="btn-secondary py-3 text-center flex-1"
              disabled={isProcessing}
            >
              Back to Shipping
            </button>
            
            <button 
              type="submit" 
              className="btn-primary py-3 text-center flex-1"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Complete Order'}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default CheckoutForm;
