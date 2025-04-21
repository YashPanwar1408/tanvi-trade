
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useCart();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  
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

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-pink-dark">Tanvi Traders</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-pink transition-colors">Home</Link>
          <Link to="/products" className="text-gray-800 hover:text-pink transition-colors">Shop</Link>
          <div className="relative group">
            <Link to="/brands" className="text-gray-800 hover:text-pink transition-colors flex items-center">
              Brands
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <Link to="/brands/sugar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sugar</Link>
              <Link to="/brands/lakme" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Lakme</Link>
              <Link to="/brands/glamup21" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">GlamUp21</Link>
              <Link to="/brands/renee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Renee</Link>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-800 hover:text-pink transition-colors">
            <Search size={20} />
          </button>
          {user ? (
            <div className="relative group">
              <button className="text-gray-800 hover:text-pink transition-colors">
                <User size={20} />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                  {user.email}
                </div>
                <button 
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <Link to="/auth" className="text-gray-800 hover:text-pink transition-colors">
              <User size={20} />
            </Link>
          )}
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
            <Link to="/products" className="text-gray-800 hover:text-pink transition-colors" onClick={() => setIsOpen(false)}>Shop</Link>
            <div className="relative">
              <Link to="/brands" className="text-gray-800 hover:text-pink transition-colors" onClick={() => setIsOpen(false)}>
                Brands
              </Link>
              <div className="pl-4 mt-2 space-y-2">
                <Link to="/brands/sugar" className="block text-gray-700 hover:text-pink" onClick={() => setIsOpen(false)}>Sugar</Link>
                <Link to="/brands/lakme" className="block text-gray-700 hover:text-pink" onClick={() => setIsOpen(false)}>Lakme</Link>
                <Link to="/brands/glamup21" className="block text-gray-700 hover:text-pink" onClick={() => setIsOpen(false)}>GlamUp21</Link>
                <Link to="/brands/renee" className="block text-gray-700 hover:text-pink" onClick={() => setIsOpen(false)}>Renee</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 pt-2 border-t border-gray-100">
              <button className="text-gray-800 hover:text-pink transition-colors">
                <Search size={20} />
              </button>
              {user ? (
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600 mb-2">{user.email}</span>
                  <button 
                    onClick={handleSignOut}
                    className="text-gray-800 hover:text-pink transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link to="/auth" className="text-gray-800 hover:text-pink transition-colors" onClick={() => setIsOpen(false)}>
                  <User size={20} />
                </Link>
              )}
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
