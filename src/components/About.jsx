import { motion } from 'framer-motion';
import aboutImage from '../assets/Adobe Express - file.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
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
            About <span className="text-primary">Adarsa Bro</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Actual image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={aboutImage} 
                  alt="Adarsa Bro" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-dark mb-6">
              From Kitchen to <span className="text-primary">Digital Success</span>
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Welcome to my world! I'm Aadrasa Upreti, better known as <strong className="text-primary">Adarsa Bro</strong> 
                in the digital space. My journey began with a simple love for food and a curiosity about 
                how flavors could tell stories.
              </p>
              
              <p>
                What started as sharing my culinary adventures has evolved into a comprehensive 
                digital marketing expertise. I've discovered that the same passion that goes into 
                creating the perfect dish applies to crafting compelling digital content.
              </p>
              
              <p>
                Today, I help brands and creators build their digital presence through strategic 
                content creation, engaging storytelling, and authentic audience connection. 
                My unique blend of food content creation and digital marketing skills has helped 
                numerous clients achieve remarkable growth.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <motion.div
                className="text-center p-4 bg-gray-50 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">500K+</div>
                <div className="text-gray-600">Total Views</div>
              </motion.div>
              
              <motion.div
                className="text-center p-4 bg-gray-50 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </motion.div>
            </div>

            {/* Skills */}
            <div className="pt-6">
              <h4 className="text-xl font-semibold text-dark mb-4">Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {['Food Content', 'Digital Marketing', 'Brand Strategy', 'Social Media', 'Video Production', 'Content Writing'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;