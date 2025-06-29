import React from 'react';
import { Quote } from 'lucide-react';
import { siteContent } from '../data/content.js';

const Testimonials = () => {
  const { testimonials } = siteContent;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Client Testimonials
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
            Don't just take my word for it. Here's what clients say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="group bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 touch-manipulation"
            >
              <div className="mb-4 sm:mb-6">
                <Quote className="text-blue-500 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" size={28} />
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-600"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;