
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-pink-dark">Tanvi Cosmetics</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-pink transition-colors">Home</Link>
          <Link to="/products" className="text-gray-800 hover:text-pink transition-colors">Products</Link>
          <Link to="/about" className="text-gray-800 hover:text-pink transition-colors">About</Link>
          <Link to="/contact" className="text-gray-800 hover:text-pink transition-colors">Contact</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-800 hover:text-pink transition-colors">
            <Search size={20} />
          </button>
          <Link to="/account" className="text-gray-800 hover:text-pink transition-colors">
            <User size={20} />
          </Link>
          <Link to="/cart" className="text-gray-800 hover:text-pink transition-colors relative">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 hover:text-pink transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/products" className="text-gray-800 hover:text-pink transition-colors" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/about" className="text-gray-800 hover:text-pink transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="text-gray-800 hover:text-pink transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
            
            <div className="flex items-center space-x-6 pt-2 border-t border-gray-100">
              <button className="text-gray-800 hover:text-pink transition-colors">
                <Search size={20} />
              </button>
              <Link to="/account" className="text-gray-800 hover:text-pink transition-colors" onClick={() => setIsOpen(false)}>
                <User size={20} />
              </Link>
              <Link to="/cart" className="text-gray-800 hover:text-pink transition-colors relative" onClick={() => setIsOpen(false)}>
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
