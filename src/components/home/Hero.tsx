import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative hero-gradient pt-44 pb-16 md:pt-52 md:pb-24 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://res.cloudinary.com/dawvvzwyw/video/upload/v1743959460/3181733-uhd_3840_2160_25fps_ds6tap.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-4 leading-tight">
              Enhance Your <span className="text-black">Natural Beauty</span>
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;