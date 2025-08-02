import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import SEO from './SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found | Adarsha Bro"
        description="Sorry, the page you're looking for doesn't exist. Return to Adarsha Bro's homepage to explore digital marketing services and content creation."
        keywords="404 Error, Page Not Found, Adarsha Bro, Digital Marketing, Content Creation"
        url="https://aadarsa.netlify.app/404"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even the best digital marketers sometimes take a wrong turn!
          </p>
        </div>

        {/* Suggestions */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">What can you do?</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">Check the URL for any typos</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">Go back to the homepage</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">Browse our services</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">Contact us for help</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            <HomeIcon className="h-5 w-5 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Contact CTA */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 max-w-xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-3">
            Need help finding what you're looking for?
          </h3>
          <p className="text-gray-300 mb-4">
            Our digital marketing experts are here to help!
          </p>
          <button
            onClick={() => {
              const message = `Hi! I was looking for something on your website but couldn't find it. Can you help me?`;
              const whatsappUrl = `https://wa.me/9779763219914?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
          >
            💬 Chat with Us
          </button>
        </div>

        {/* Fun Animation */}
        <div className="mt-12">
          <div className="inline-block animate-bounce">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default NotFound;