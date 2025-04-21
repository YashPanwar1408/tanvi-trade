
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
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
    
    setIsSubmitting(true);
    
    // Simulate sending the form
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our products, need help with an order, or want to share your feedback, get in touch.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-beige-light p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Phone size={36} className="text-pink" />
            </div>
            <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600">
              Mon-Fri: 9AM - 5PM EST
            </p>
            <p className="text-gray-600 font-medium mt-2">
              (123) 456-7890
            </p>
          </div>
          
          <div className="bg-beige-light p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <Mail size={36} className="text-pink" />
            </div>
            <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600">
              We'll respond within 24 hours
            </p>
            <p className="text-gray-600 font-medium mt-2">
              support@tanvicosmetics.com
            </p>
          </div>
          
          <div className="bg-beige-light p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <MapPin size={36} className="text-pink" />
            </div>
            <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">
              123 Beauty Street
            </p>
            <p className="text-gray-600 font-medium mt-2">
              Cosmetics City, 10001, USA
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-field w-full ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                <label htmlFor="subject" className="block text-gray-700 mb-1">Subject*</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`input-field w-full ${errors.subject ? 'border-red-500' : ''}`}
                >
                  <option value="">Select a subject</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Order Status">Order Status</option>
                  <option value="Return/Refund">Return/Refund</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`input-field w-full ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <button 
                type="submit" 
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">What is your return policy?</h3>
                <p className="text-gray-600">
                  We offer a 30-day return policy for all unused and unopened products. Please contact our customer service team to initiate a return.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-2">How long does shipping take?</h3>
                <p className="text-gray-600">
                  Domestic orders are typically delivered within 3-5 business days. International shipping can take 7-14 business days depending on the destination.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Are your products cruelty-free?</h3>
                <p className="text-gray-600">
                  Yes, all Tanvi Cosmetics products are 100% cruelty-free and never tested on animals. We are committed to ethical beauty practices.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Do you offer samples?</h3>
                <p className="text-gray-600">
                  We include free samples with every order. You can also request specific samples in the order notes during checkout, and we'll do our best to accommodate.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Do you ship internationally?</h3>
                <p className="text-gray-600">
                  Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
