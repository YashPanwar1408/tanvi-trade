
import { Heart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Heart size={36} className="text-pink" />,
      title: "Cruelty Free",
      description: "All our products are 100% cruelty-free and never tested on animals."
    },
    {
      icon: <ShieldCheck size={36} className="text-pink" />,
      title: "Quality Ingredients",
      description: "We use only the finest, carefully selected ingredients for our products."
    },
    {
      icon: <Truck size={36} className="text-pink" />,
      title: "Fast Shipping",
      description: "Free shipping on all orders over $50. Fast delivery guaranteed."
    },
    {
      icon: <RefreshCw size={36} className="text-pink" />,
      title: "Easy Returns",
      description: "Not satisfied? Return within 30 days for a full refund."
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="font-serif font-medium text-xl text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
