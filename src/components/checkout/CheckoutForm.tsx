
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast } from "@/components/ui/use-toast";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { getTotalPrice, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  });
  
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
    
    // Payment validation
    if (!formData.cardName.trim()) newErrors.cardName = 'Name on card is required';
    if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
    if (formData.cardNumber.replace(/\s/g, '').length !== 16) newErrors.cardNumber = 'Card number must be 16 digits';
    if (!formData.expMonth.trim()) newErrors.expMonth = 'Expiration month is required';
    if (!formData.expYear.trim()) newErrors.expYear = 'Expiration year is required';
    if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required';
    if (formData.cvv.length < 3) newErrors.cvv = 'CVV must be at least 3 digits';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
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
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      navigate('/order-confirmation');
    }, 2000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
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
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Payment Information */}
      <div>
        <h2 className="text-xl font-medium text-gray-900 mb-4">Payment Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="cardName" className="block text-gray-700 mb-1">Name on Card*</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              className={`input-field w-full ${errors.cardName ? 'border-red-500' : ''}`}
            />
            {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>}
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="cardNumber" className="block text-gray-700 mb-1">Card Number*</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="XXXX XXXX XXXX XXXX"
              maxLength={19}
              className={`input-field w-full ${errors.cardNumber ? 'border-red-500' : ''}`}
            />
            {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 mb-1">Expiration Date*</label>
            <div className="flex space-x-2">
              <div className="w-1/2">
                <select
                  id="expMonth"
                  name="expMonth"
                  value={formData.expMonth}
                  onChange={handleChange}
                  className={`input-field w-full ${errors.expMonth ? 'border-red-500' : ''}`}
                >
                  <option value="">Month</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={String(i + 1).padStart(2, '0')}>
                      {String(i + 1).padStart(2, '0')}
                    </option>
                  ))}
                </select>
                {errors.expMonth && <p className="text-red-500 text-sm mt-1">{errors.expMonth}</p>}
              </div>
              
              <div className="w-1/2">
                <select
                  id="expYear"
                  name="expYear"
                  value={formData.expYear}
                  onChange={handleChange}
                  className={`input-field w-full ${errors.expYear ? 'border-red-500' : ''}`}
                >
                  <option value="">Year</option>
                  {[...Array(10)].map((_, i) => {
                    const year = new Date().getFullYear() + i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
                {errors.expYear && <p className="text-red-500 text-sm mt-1">{errors.expYear}</p>}
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="cvv" className="block text-gray-700 mb-1">CVV*</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              maxLength={4}
              className={`input-field w-full ${errors.cvv ? 'border-red-500' : ''}`}
            />
            {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
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
          {isProcessing ? 'Processing Payment...' : `Pay $${getTotalPrice().toFixed(2)}`}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
