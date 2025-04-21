
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <section className="py-16 testimonial-gradient">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Read testimonials from our satisfied customers around the world
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12 transition-all duration-300">
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-pink rounded-full p-2">
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name} 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white"
              />
            </div>
            
            <div className="mt-10 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < currentTestimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 text-lg mb-6 italic">
                "{currentTestimonial.comment}"
              </p>
              
              <h4 className="font-serif font-bold text-xl text-gray-900">
                {currentTestimonial.name}
              </h4>
              <p className="text-gray-500">{currentTestimonial.role}</p>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-5">
              <button 
                onClick={prevTestimonial} 
                className="bg-white rounded-full p-2 shadow-md hover:bg-pink-light transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-gray-600" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-5">
              <button 
                onClick={nextTestimonial} 
                className="bg-white rounded-full p-2 shadow-md hover:bg-pink-light transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-pink' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
