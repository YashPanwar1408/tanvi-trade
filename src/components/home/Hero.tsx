
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              Enhance Your <span className="text-pink">Natural Beauty</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Discover our collection of premium, cruelty-free cosmetics designed to 
              enhance your natural beauty. Made with love and care for your skin.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary">
                Shop Now
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1614159102538-46c85817e3b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Tanvi Cosmetics Products"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="text-pink font-serif font-bold text-xl">100%</div>
                <div className="text-gray-800 font-medium">Cruelty Free</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
