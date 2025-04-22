
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">About Tanvi Cosmetics</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passionate about beauty and committed to quality, we create products that enhance your natural beauty.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, Tanvi Cosmetics began with a simple mission: to create high-quality, cruelty-free cosmetics that enhance natural beauty rather than mask it.
            </p>
            <p className="text-gray-600 mb-4">
              Our founder, Tanvi Shah, was frustrated with the cosmetics industry's focus on covering up rather than enhancing. She set out to create a line of products that would celebrate individuality and promote self-confidence.
            </p>
            <p className="text-gray-600">
              What started as a small operation in Tanvi's kitchen has grown into a beloved brand with customers worldwide, but our core values remain the same: quality, transparency, and authenticity.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1629130019343-0d5467c329d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Our founder" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Every product we create is guided by these core principles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-beige-light p-6 rounded-lg text-center">
              <h3 className="text-xl font-serif font-medium text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                We use only the finest ingredients and rigorous testing to ensure every product exceeds expectations.
              </p>
            </div>
            
            <div className="bg-beige-light p-6 rounded-lg text-center">
              <h3 className="text-xl font-serif font-medium text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                From responsible sourcing to eco-friendly packaging, we're committed to minimizing our environmental impact.
              </p>
            </div>
            
            <div className="bg-beige-light p-6 rounded-lg text-center">
              <h3 className="text-xl font-serif font-medium text-gray-900 mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                We believe beauty is for everyone, and we design products for all skin tones, types, and ages.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-pink-light p-10 rounded-lg text-center mb-16">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Promise</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            We promise to create products that make you feel beautiful, confident, and empowered. Every Tanvi Cosmetics product is 100% cruelty-free, ethically produced, and made with love.
          </p>
          <Link to="/products" className="btn-primary">
            Explore Our Products
          </Link>
        </div>
        
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind Tanvi Cosmetics
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/23.jpg" 
                  alt="Tanvi Shah" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif font-medium text-gray-900 mb-1">Tanvi Shah</h3>
              <p className="text-gray-600 text-sm">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/54.jpg" 
                  alt="James Wilson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif font-medium text-gray-900 mb-1">James Wilson</h3>
              <p className="text-gray-600 text-sm">Head of Product Development</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/65.jpg" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif font-medium text-gray-900 mb-1">Sarah Johnson</h3>
              <p className="text-gray-600 text-sm">Creative Director</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Michael Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif font-medium text-gray-900 mb-1">Michael Chen</h3>
              <p className="text-gray-600 text-sm">Head of Operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
