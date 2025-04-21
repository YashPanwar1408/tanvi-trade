
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold text-gray-800 mb-4">Tanvi Cosmetics</h3>
            <p className="text-gray-600 mb-4">
              Premium quality cosmetics products that enhance your natural beauty.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-600 hover:text-pink transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-pink transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-pink transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-pink transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-pink transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-pink transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium text-gray-800 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-600 hover:text-pink transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-pink transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-pink transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-pink transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-pink mr-2 mt-0.5" />
                <span className="text-gray-600">123 Beauty Street, Cosmetics City, 10001, USA</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-pink mr-2" />
                <span className="text-gray-600">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-pink mr-2" />
                <span className="text-gray-600">support@tanvicosmetics.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-200 mb-6" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Tanvi Cosmetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
