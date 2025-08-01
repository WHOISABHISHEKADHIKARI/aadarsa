import { motion } from 'framer-motion';
import { useState } from 'react';

const Videos = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      id: 1,
      title: "Content Strategy",
      category: "marketing",
      clients: "50+",
      experience: "3+ Years",
      thumbnail: "content-strategy",
      description: "Comprehensive content planning and strategy development for brands",
      url: "#contact",
      videoUrl: null,
      type: "service"
    },
    {
      id: 2,
      title: "Social Media Management",
      category: "marketing",
      clients: "30+",
      experience: "2+ Years",
      thumbnail: "social-media",
      description: "Complete social media management and growth strategies",
      url: "#contact",
      videoUrl: null,
      type: "service"
    },
    {
      id: 3,
      title: "Brand Photography",
      category: "creative",
      clients: "25+",
      experience: "4+ Years",
      thumbnail: "photography",
      description: "Professional brand photography and visual content creation",
      url: "#contact",
      videoUrl: null,
      type: "service"
    },
    {
      id: 4,
      title: "Digital Marketing",
      category: "marketing",
      clients: "40+",
      experience: "3+ Years",
      thumbnail: "digital-marketing",
      description: "Complete digital marketing solutions and campaign management",
      url: "#contact",
      videoUrl: null,
      type: "service"
    },
    {
      id: 5,
      title: "Creative Consulting",
      category: "creative",
      clients: "20+",
      experience: "2+ Years",
      thumbnail: "consulting",
      description: "Creative direction and consulting for brand development",
      url: "#contact",
      videoUrl: null,
      type: "service"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'creative', name: 'Creative' }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  const ServiceCard = ({ video, index }) => {
    const handleServiceClick = () => {
      // Scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <motion.div
        className="group cursor-pointer h-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -8, scale: 1.02 }}
        onClick={handleServiceClick}
      >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
        {/* Service Image Header */}
        <div className="relative aspect-video bg-gradient-to-br from-primary/10 via-accent/10 to-primary/20 overflow-hidden">
          {/* Service Image */}
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
            <div className="text-center text-primary z-10">
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                {video.category === 'marketing' ? (
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <h4 className="text-lg font-semibold text-gray-700">{video.title}</h4>
              <p className="text-sm text-gray-500 mt-1">{video.category.charAt(0).toUpperCase() + video.category.slice(1)} Service</p>
            </div>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <div className="text-center text-primary">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs text-primary font-medium mt-2">Learn More</p>
            </div>
          </div>
          
          {/* Experience badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {video.experience}
          </div>
          
          {/* Service type badge */}
          <div className="absolute top-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            Service
          </div>

        </div>
        
        {/* Content */}
        <div className="p-8 flex-1 flex flex-col">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/10 to-accent/10 text-primary border border-primary/20">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              {video.category.charAt(0).toUpperCase() + video.category.slice(1)}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
            {video.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
            {video.description}
          </p>
          
          {/* Stats Row */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="text-sm font-medium">{video.clients} Clients</span>
              </div>
              <div className="flex items-center text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">{video.experience}</span>
              </div>
            </div>
            <div className="flex items-center text-gray-400">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-3">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                const message = `Hi! I'm interested in your ${video.title} service. I'd like to book a consultation.`;
                const whatsappUrl = `https://wa.me/9779809243137?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="w-full bg-gradient-to-r from-primary to-primary/90 text-white py-4 px-6 rounded-xl font-semibold hover:from-primary/90 hover:to-primary transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Consultation
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                const message = `Hi! I'd like to learn more about your ${video.title} service. Can you provide more details?`;
                const whatsappUrl = `https://wa.me/9779809243137?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="w-full border-2 border-gray-200 text-gray-700 py-3 px-6 rounded-xl font-medium hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </motion.div>
    );
  };

  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Professional digital marketing and content creation services to grow your business
          </p>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} video={service} index={index} />
          ))}
        </div>

        {/* Ask for Appointment Section */}
        <motion.div
          className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 mt-16 mb-8 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss how my digital marketing expertise can help grow your brand. 
              Book a consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const message = `Hi! I'd like to book an appointment for a consultation about your digital marketing services.`;
                  const whatsappUrl = `https://wa.me/9779809243137?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                📅 Book Appointment
              </button>
              <button 
                onClick={() => {
                  const message = `Hi! I'm interested in a free consultation about your digital marketing services. Can we schedule a call?`;
                  const whatsappUrl = `https://wa.me/9779809243137?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              >
                💬 Free Consultation
              </button>
            </div>
          </div>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="btn-primary text-lg px-8 py-4">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Videos;