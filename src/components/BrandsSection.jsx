import { motion } from 'framer-motion';
import { useState } from 'react';
import SEO from './SEO';

const BrandsSection = () => {
  const [imageErrors, setImageErrors] = useState({});

  const brands = [
    {
      id: 1,
      name: "Airsail",
      logo: "/logo/Airsail.jpg",
      description: "Premium travel and aviation services"
    },
    {
      id: 2,
      name: "J&B Coffee",
      logo: "/logo/J&B Coffe.jpg",
      description: "Artisanal coffee roasters and café chain"
    },
    {
      id: 3,
      name: "Lamira Coffee",
      logo: "/logo/Lamira Coffe.jpg",
      description: "Specialty coffee and brewing equipment"
    },
    {
      id: 4,
      name: "Light House",
      logo: "/logo/Light House.jpg",
      description: "Boutique hotel and event venue"
    },
    {
      id: 5,
      name: "Red Panda",
      logo: "/logo/Red panda.jpg",
      description: "Asian fusion restaurant and bar"
    },
    {
      id: 6,
      name: "SFM Fresh Masala",
      logo: "/logo/SFM Fresh Masala.png",
      description: "Premium spices and masala products"
    }
  ];

  const handleImageError = (brandId) => {
    setImageErrors(prev => ({ ...prev, [brandId]: true }));
  };

  return (
    <>
      <SEO 
        title="Brand Collaborations - Adarsha Bro's Partner Brands & Success Stories"
        description="Discover the brands that trust Adarsha Bro for content creation and digital marketing. See successful collaborations and partnership opportunities."
        keywords="Adarsha Bro Brand Partnerships, Brand Collaborations, Digital Marketing Partners, Content Creation Clients, Brand Success Stories"
        url="https://aadarsa.netlify.app/brands"
      />
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Brands I <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Work With</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading brands across various industries to create compelling content and drive meaningful engagement.
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              {/* Brand Logo */}
              <div className="relative h-20 mb-4 flex items-center justify-center">
                {!imageErrors[brand.id] ? (
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={() => handleImageError(brand.id)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-gray-700">{brand.name}</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Brand Name */}
              <h3 className="font-semibold text-gray-900 text-center mb-2 group-hover:text-primary transition-colors duration-300">
                {brand.name}
              </h3>
              
              {/* Brand Description */}
              <p className="text-xs text-gray-600 text-center leading-relaxed">
                {brand.description}
              </p>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{brands.length}+</div>
            <div className="text-gray-600 font-medium">Brand Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500K+</div>
            <div className="text-gray-600 font-medium">Total Reach</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">200%</div>
            <div className="text-gray-600 font-medium">Avg. Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's create compelling content that drives real results for your brand.
            </p>
            <button 
              onClick={() => {
                const message = `Hi! I'm interested in collaborating with you for my brand. I saw your work with other brands and would like to discuss possibilities.`;
                const whatsappUrl = `https://wa.me/9779763219914?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Brand Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default BrandsSection;