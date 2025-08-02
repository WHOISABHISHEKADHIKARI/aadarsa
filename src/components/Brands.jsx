import { motion } from 'framer-motion';
import { useState } from 'react';

const Brands = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const brands = [
    {
      id: 1,
      name: "Airsail",
      category: "travel",
      logo: "/logo/Airsail.jpg",
      description: "Premium travel and aviation services",
      collaboration: "Content creation and digital marketing strategy",
      results: "150% increase in social media engagement",
      duration: "6 months",
      services: ["Social Media Management", "Content Creation", "Brand Photography"]
    },
    {
      id: 2,
      name: "J&B Coffee",
      category: "food",
      logo: "/logo/J&B Coffe.jpg",
      description: "Artisanal coffee roasters and café chain",
      collaboration: "Food photography and social media campaigns",
      results: "200% growth in online orders",
      duration: "8 months",
      services: ["Food Photography", "Social Media Strategy", "Influencer Marketing"]
    },
    {
      id: 3,
      name: "Lamira Coffee",
      category: "food",
      logo: "/logo/Lamira Coffe.jpg",
      description: "Specialty coffee and brewing equipment",
      collaboration: "Product showcase and brand storytelling",
      results: "300% increase in brand awareness",
      duration: "4 months",
      services: ["Product Photography", "Video Content", "Brand Strategy"]
    },
    {
      id: 4,
      name: "Light House",
      category: "hospitality",
      logo: "/logo/Light House.jpg",
      description: "Boutique hotel and event venue",
      collaboration: "Event documentation and promotional content",
      results: "180% boost in bookings",
      duration: "12 months",
      services: ["Event Photography", "Video Production", "Digital Marketing"]
    },
    {
      id: 5,
      name: "Red Panda",
      category: "restaurant",
      logo: "/logo/Red panda.jpg",
      description: "Asian fusion restaurant and bar",
      collaboration: "Menu photography and social media presence",
      results: "250% increase in foot traffic",
      duration: "10 months",
      services: ["Food Photography", "Social Media Management", "Content Strategy"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Brands', count: brands.length },
    { id: 'food', name: 'Food & Beverage', count: brands.filter(b => b.category === 'food' || b.category === 'restaurant').length },
    { id: 'hospitality', name: 'Hospitality', count: brands.filter(b => b.category === 'hospitality').length },
    { id: 'travel', name: 'Travel', count: brands.filter(b => b.category === 'travel').length }
  ];

  const filteredBrands = activeCategory === 'all' 
    ? brands 
    : brands.filter(brand => brand.category === activeCategory || 
        (activeCategory === 'food' && (brand.category === 'food' || brand.category === 'restaurant')));

  const BrandCard = ({ brand, index }) => {
    const [imageError, setImageError] = useState(false);
    
    return (
      <motion.div
        className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -8, scale: 1.02 }}
      >
        {/* Brand Logo */}
        <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          {!imageError ? (
            <img 
              src={brand.logo} 
              alt={brand.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-gray-700">{brand.name}</p>
              </div>
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full font-medium capitalize">
            {brand.category}
          </div>
          
          {/* Duration Badge */}
          <div className="absolute top-4 right-4 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
            {brand.duration}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Brand Name */}
          <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
            {brand.name}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {brand.description}
          </p>
          
          {/* Collaboration Details */}
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 text-sm mb-2">Collaboration:</h4>
            <p className="text-gray-600 text-sm">{brand.collaboration}</p>
          </div>
          
          {/* Results */}
          <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 text-sm mb-1">Results Achieved:</h4>
            <p className="text-green-700 text-sm font-medium">{brand.results}</p>
          </div>
          
          {/* Services */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 text-sm mb-2">Services Provided:</h4>
            <div className="flex flex-wrap gap-2">
              {brand.services.map((service, idx) => (
                <span 
                  key={idx}
                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
          
          {/* Action Button */}
          <button 
            onClick={() => {
              const message = `Hi! I saw your work with ${brand.name} and I'm interested in similar services for my brand.`;
              const whatsappUrl = `https://wa.me/9779763219914?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 px-6 rounded-xl font-semibold hover:from-primary/90 hover:to-accent/90 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Discuss Similar Project
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Brand <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Collaborations</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the successful partnerships and transformative results I've achieved with leading brands across various industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{brands.length}+</div>
                <div className="text-gray-300 text-sm">Brand Partners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                <div className="text-2xl font-bold text-white">500K+</div>
                <div className="text-gray-300 text-sm">Total Reach</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                <div className="text-2xl font-bold text-white">200%</div>
                <div className="text-gray-300 text-sm">Avg. Growth</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary/10 hover:text-primary border border-gray-200'
                }`}
              >
                {category.name}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Brands Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.map((brand, index) => (
              <BrandCard key={brand.id} brand={brand} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 mt-16 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Let's create compelling content that drives real results for your brand.
            </p>
            <button 
              onClick={() => {
                const message = `Hi! I'm interested in collaborating with you for my brand. Can we discuss the possibilities?`;
                const whatsappUrl = `https://wa.me/9779763219914?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Brand Journey
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Brands;