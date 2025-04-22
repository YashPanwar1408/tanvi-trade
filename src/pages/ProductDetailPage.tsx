
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Heart, Share, Star, ShoppingBag, CheckCheck } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/products/ProductCard';
import { Product } from '../types';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  
  const { addToCart } = useCart();
  
  useEffect(() => {
    if (id) {
      const productData = getProductById(Number(id));
      setProduct(productData || null);
      
      if (productData) {
        setRelatedProducts(getRelatedProducts(productData.id, productData.category));
      }
    }
    
    // Reset state when product changes
    setQuantity(1);
    setIsAddedToCart(false);
    setActiveTab('description');
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity
      });
      setIsAddedToCart(true);
      
      // Reset the "Added to cart" message after 3 seconds
      setTimeout(() => {
        setIsAddedToCart(false);
      }, 3000);
    }
  };
  
  if (!product) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Product Not Found</h2>
            <p className="text-gray-600 mb-8">
              The product you are looking for does not exist or has been removed.
            </p>
            <Link to="/products" className="btn-primary">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <nav className="mb-6">
          <ol className="flex text-sm">
            <li className="text-gray-500">
              <Link to="/" className="hover:text-pink">Home</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-500">
              <Link to="/products" className="hover:text-pink">Products</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-800 font-medium truncate">
              {product.name}
            </li>
          </ol>
        </nav>
        
        {/* Product Details */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Product Info */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>
            
            <p className="text-2xl font-semibold text-pink mb-6">
              ${product.price.toFixed(2)}
            </p>
            
            <p className="text-gray-600 mb-6">
              {product.description}
            </p>
            
            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-gray-700 mr-4">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                  <button 
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  
                  <span className="px-4 py-2 text-gray-800">{quantity}</span>
                  
                  <button 
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <button 
                onClick={handleAddToCart}
                className={`flex-grow btn-primary flex items-center justify-center ${isAddedToCart ? 'bg-green-600 hover:bg-green-700' : ''}`}
                disabled={isAddedToCart}
              >
                {isAddedToCart ? (
                  <>
                    <CheckCheck size={20} className="mr-2" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={20} className="mr-2" />
                    Add to Cart
                  </>
                )}
              </button>
              
              <button className="btn-secondary flex items-center justify-center py-3 px-4">
                <Heart size={20} />
              </button>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <div className="mb-3">
                <span className="text-gray-700 mr-2">Category:</span>
                <Link to={`/products?category=${product.category}`} className="text-pink capitalize">
                  {product.category}
                </Link>
              </div>
              
              <div className="flex items-center">
                <span className="text-gray-700 mr-2">Share:</span>
                <div className="flex space-x-2">
                  <button className="text-gray-500 hover:text-pink transition-colors">
                    <Share size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mb-16">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-3 font-medium border-b-2 ${
                  activeTab === 'description' 
                    ? 'text-pink border-pink' 
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                Description
              </button>
              
              <button
                onClick={() => setActiveTab('details')}
                className={`py-3 font-medium border-b-2 ${
                  activeTab === 'details' 
                    ? 'text-pink border-pink' 
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                Details
              </button>
              
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-3 font-medium border-b-2 ${
                  activeTab === 'reviews' 
                    ? 'text-pink border-pink' 
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                Reviews ({product.reviews})
              </button>
            </div>
          </div>
          
          <div className="py-6">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-600">
                  {product.description}
                </p>
                <p className="text-gray-600 mt-4">
                  Our {product.name} is designed with high-quality ingredients to provide exceptional results. 
                  Experience the luxury of premium cosmetics that enhance your natural beauty while taking care of your skin.
                </p>
              </div>
            )}
            
            {activeTab === 'details' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Product Details</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-5">
                  <li>Premium quality ingredients</li>
                  <li>Cruelty-free and not tested on animals</li>
                  <li>Suitable for all skin types</li>
                  <li>Dermatologically tested</li>
                  <li>Long-lasting formula</li>
                  <li>Made in the USA</li>
                </ul>
                
                <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">How to Use</h3>
                <p className="text-gray-600">
                  Apply the product according to your personal preference. For best results, use regularly as part of your beauty routine.
                </p>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Reviews</h3>
                
                <div className="flex items-center mb-6">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={24} 
                        className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-800 font-semibold text-lg">{product.rating.toFixed(1)}</span>
                  <span className="text-gray-500 ml-2">Based on {product.reviews} reviews</span>
                </div>
                
                <div className="space-y-6">
                  {/* Sample reviews - in a real app, these would come from an API */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                      <span className="text-gray-500 text-sm">3 months ago</span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">Sarah J.</h4>
                    <p className="text-gray-600">
                      I absolutely love this product! It feels so luxurious on my skin and the results are amazing. Definitely worth the price.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                      <span className="text-gray-500 text-sm">1 month ago</span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">Emily R.</h4>
                    <p className="text-gray-600">
                      Great product! I've been using it for a month now and can definitely see a difference. The only reason for 4 stars is that I wish it was slightly more affordable.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">You May Also Like</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
