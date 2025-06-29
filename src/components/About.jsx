import React from 'react';
import { CheckCircle } from 'lucide-react';
import { siteContent } from '../data/content.js';

const About = () => {
  const { about } = siteContent;

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {about.title}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            {about.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Highlights */}
          <div data-aos="fade-right" data-aos-duration="800">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">What I Bring</h3>
            <div className="space-y-3 sm:space-y-4">
              {about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {about.skills.map((skillCategory, index) => (
                <div
                  key={skillCategory.category}
                  className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    {skillCategory.category}
                  </h4>
                  <div className="space-y-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="px-2 sm:px-3 py-1 sm:py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs sm:text-sm font-medium"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;