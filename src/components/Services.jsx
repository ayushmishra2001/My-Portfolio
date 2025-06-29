import React from 'react';
import { CheckCircle } from 'lucide-react';
import { siteContent } from '../data/content.js';

const Services = () => {
  const { services } = siteContent;

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Services I Offer
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
            I provide comprehensive digital solutions to help businesses thrive in the modern world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="group bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer touch-manipulation"
            >
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2 sm:space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;