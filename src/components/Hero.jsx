import { motion } from 'framer-motion';
import profilePhoto from '../assets/IMG_9188.PNG';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('videos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-black relative">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
          </div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-screen py-16 sm:py-20">
          
          {/* Left Column - Text Content */}
          <motion.div
            className="text-left lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Available for Projects
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal mb-1 sm:mb-2">Hey, I'm</span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x break-words">Adarsha Bro</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-white font-semibold">Content Creator</span> & <span className="text-white font-semibold">Digital Marketing Expert</span>
              <br className="hidden sm:block" />
              <span className="block sm:inline text-base sm:text-lg text-gray-400 mt-1 sm:mt-0">Specializing in Food Content & Brand Growth</span>
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Bringing flavors to life and helping brands grow through creative storytelling, strategic digital presence, and authentic audience connection.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button 
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Let's Collaborate
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={scrollToServices}
                className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300 hover:bg-primary/5"
              >
                View My Work
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 lg:gap-8 text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="text-center min-w-0">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">500K+</div>
                <div className="text-xs sm:text-sm whitespace-nowrap">Total Views</div>
              </div>
              <div className="w-px h-6 sm:h-8 lg:h-12 bg-gray-600 hidden sm:block"></div>
              <div className="text-center min-w-0">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">50+</div>
                <div className="text-xs sm:text-sm whitespace-nowrap">Happy Clients</div>
              </div>
              <div className="w-px h-6 sm:h-8 lg:h-12 bg-gray-600 hidden sm:block"></div>
              <div className="text-center min-w-0">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">3+</div>
                <div className="text-xs sm:text-sm whitespace-nowrap">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main profile image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
                <img 
                  src={profilePhoto} 
                  alt="Adarsha Bro" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
                />
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <svg className="w-10 h-10 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col items-center gap-2">
             <span className="text-gray-400 text-xs sm:text-sm text-center whitespace-nowrap">Scroll to explore below</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1 sm:mt-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;