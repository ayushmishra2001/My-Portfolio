import React from 'react';
import { siteContent } from '../data/content.js';

const ProfilePhoto = () => {
  const { hero } = siteContent;

  return (
    <section className="py-8 sm:py-12 bg-white dark:bg-gray-900">
      {/* Full-width container that touches both edges */}
      <div className="w-full" data-aos="fade-up" data-aos-duration="800">
        <div className="relative group w-full">
          {/* Full-Width Panoramic Photo Frame */}
          <div 
            className="relative w-full overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl"
            style={{
              height: '300px', // Fixed height for panoramic effect
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)'
            }}
          >
            <img
              src={hero.profileImage}
              alt={hero.name}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              style={{
                filter: 'contrast(1.05) saturate(1.1)',
              }}
              onError={(e) => {
                console.log('Image failed to load:', hero.profileImage);
                e.target.style.display = 'none';
              }}
              onLoad={(e) => {
                console.log('Image loaded successfully:', hero.profileImage);
              }}
            />
            
            {/* Gradient Overlay for Cinematic Effect */}
            <div 
              className="absolute inset-0 opacity-30 group-hover:opacity-20 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, transparent 20%, transparent 80%, rgba(0, 0, 0, 0.4) 100%)'
              }}
            ></div>
            
            {/* Center Focus Gradient */}
            <div 
              className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.3) 100%)'
              }}
            ></div>
            
            {/* Subtle Top and Bottom Borders */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-60"></div>
            
            {/* Floating Accent Elements */}
            <div className="absolute top-4 left-8 w-3 h-3 bg-blue-500 rounded-full opacity-60 group-hover:opacity-80 group-hover:scale-125 transition-all duration-500 animate-pulse"></div>
            <div className="absolute top-6 right-12 w-2 h-2 bg-purple-500 rounded-full opacity-60 group-hover:opacity-80 group-hover:scale-125 transition-all duration-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-8 left-16 w-4 h-4 bg-green-400 rounded-full opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-4 right-8 w-3 h-3 bg-yellow-400 rounded-full opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Professional Info Overlay */}
            <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{hero.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{hero.role}</p>
            </div>
            
            {/* Status Indicator */}
            <div className="absolute top-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                  Available
                </span>
              </div>
            </div>
          </div>
          
          {/* Responsive Height Adjustments */}
          <style jsx>{`
            @media (max-width: 768px) {
              .relative.group > div {
                height: 250px !important;
              }
            }
            
            @media (max-width: 640px) {
              .relative.group > div {
                height: 200px !important;
              }
            }
            
            @media (max-width: 480px) {
              .relative.group > div {
                height: 180px !important;
              }
            }
          `}</style>
        </div>
      </div>
      
      {/* Optional Caption Section Below */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-6" data-aos="fade-up" data-aos-delay="200">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full shadow-sm">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Ready to collaborate on your next project
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePhoto;