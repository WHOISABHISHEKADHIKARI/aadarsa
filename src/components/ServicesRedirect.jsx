import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServicesRedirect = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const services = [
    'Food Content',
    'Digital Marketing',
    'Collaboration',
    'Consultation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-6xl font-bold text-white mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Services
          </span>
        </motion.h1>

        {/* Services List */}
        <div className="space-y-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-white">{service}</h2>
            </motion.div>
          ))}
        </div>

        {/* Stay Updated Section */}
        <motion.div
          className="bg-primary/20 backdrop-blur-sm rounded-xl p-8 border border-primary/30 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 text-lg">
            Get the latest updates on new content and digital marketing tips.
          </p>
        </motion.div>

        {/* Countdown and Redirect Info */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 inline-block border border-white/20">
            <p className="text-white text-lg mb-2">
              Redirecting to home page in
            </p>
            <div className="text-4xl font-bold text-primary">
              {countdown}
            </div>
            <p className="text-gray-300 text-sm mt-2">
              seconds
            </p>
          </div>
          
          <motion.button
            onClick={() => navigate('/')}
            className="mt-6 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go to Home Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicesRedirect;