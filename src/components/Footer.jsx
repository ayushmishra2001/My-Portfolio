import React from 'react';
import { Heart } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { siteContent } from '../data/content.js';

const Footer = () => {
  const { hero, social } = siteContent;

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{hero.name}</h3>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              {hero.role}
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Building digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <div className="space-y-1 sm:space-y-2">
              {siteContent.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base touch-manipulation"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
            <div className="flex space-x-3 sm:space-x-4">
              {social.map((link) => {
                const IconComponent = LucideIcons[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 sm:p-3 rounded-lg hover:bg-gray-700 hover:scale-110 transition-all duration-300 touch-manipulation"
                    aria-label={link.name}
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} {hero.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm flex items-center">
            Made with <Heart className="text-red-500 mx-1" size={14} /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;