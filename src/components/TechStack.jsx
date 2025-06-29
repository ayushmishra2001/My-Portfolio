import React, { useRef, useEffect, useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { siteContent } from '../data/content.js';

const TechStack = () => {
  const { technologies } = siteContent;
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [scales, setScales] = useState({});
  const animationRef = useRef();
  const autoScrollRef = useRef();

  // Create extended array for seamless infinite scrolling (5 copies for smooth infinite effect)
  const extendedTechnologies = [
    ...technologies, 
    ...technologies, 
    ...technologies, 
    ...technologies, 
    ...technologies
  ];

  // Calculate scale for each card based on distance from center
  const updateScales = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    const newScales = {};

    // Get all card elements
    const cards = container.querySelectorAll('[data-card-index]');
    
    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      
      // Reduced scaling: 1.2x for center, 1x for others
      const threshold = 120;
      
      if (distance <= threshold) {
        const normalizedDistance = distance / threshold;
        const scale = 1.2 - (normalizedDistance * 0.2);
        newScales[index] = Math.max(1.0, Math.min(1.2, scale));
      } else {
        newScales[index] = 1.0;
      }
    });

    setScales(newScales);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Set initial scroll position to middle section
    const initialPosition = (container.scrollWidth / 5) * 2; // Start at 2nd copy
    container.scrollLeft = initialPosition;

    const handleScroll = () => {
      const currentScrollLeft = container.scrollLeft;
      const sectionWidth = container.scrollWidth / 5;
      
      // Update scales on scroll with throttling for smoother performance
      requestAnimationFrame(updateScales);
      
      // Infinite scroll logic - reset position when reaching boundaries
      if (currentScrollLeft <= sectionWidth * 0.5) {
        // If scrolled too far left, jump to equivalent position in 4th section
        const newPosition = currentScrollLeft + sectionWidth * 3;
        container.scrollLeft = newPosition;
      } else if (currentScrollLeft >= sectionWidth * 4.5) {
        // If scrolled too far right, jump to equivalent position in 2nd section
        const newPosition = currentScrollLeft - sectionWidth * 3;
        container.scrollLeft = newPosition;
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial scale calculation
    setTimeout(updateScales, 100);
    
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Continuous auto-scroll - runs unless dragging or hovered
  useEffect(() => {
    if (!isDragging && !isHovered && Math.abs(velocity) < 0.3) {
      const container = scrollContainerRef.current;
      if (!container) return;

      let lastTime = performance.now();
      const autoScroll = (currentTime) => {
        const deltaTime = currentTime - lastTime;
        
        // Smooth auto-scroll: 0.5 pixels per frame (about 30px/second at 60fps)
        if (deltaTime >= 16) { // ~60fps throttling
          container.scrollLeft += 0.5;
          lastTime = currentTime;
        }
        
        autoScrollRef.current = requestAnimationFrame(autoScroll);
      };

      autoScrollRef.current = requestAnimationFrame(autoScroll);
    }

    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, [isDragging, isHovered, velocity]);

  // Enhanced momentum scrolling with smoother deceleration
  useEffect(() => {
    if (!isDragging && Math.abs(velocity) > 0.3) {
      const container = scrollContainerRef.current;
      if (!container) return;

      const animate = () => {
        container.scrollLeft += velocity;
        setVelocity(velocity * 0.97); // Smoother friction

        if (Math.abs(velocity) > 0.3) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [velocity, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setLastX(e.pageX);
    setLastTime(Date.now());
    setVelocity(0);
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;

    // Calculate velocity for momentum with smoother calculation
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = e.pageX - lastX;
    
    if (deltaTime > 0) {
      setVelocity(-deltaX / deltaTime * 6);
    }
    
    setLastX(e.pageX);
    setLastTime(currentTime);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollContainerRef.current.style.cursor = 'grab';
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setStartX(touch.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setLastX(touch.pageX);
    setLastTime(Date.now());
    setVelocity(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const x = touch.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;

    // Calculate velocity for momentum
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = touch.pageX - lastX;
    
    if (deltaTime > 0) {
      setVelocity(-deltaX / deltaTime * 6);
    }
    
    setLastX(touch.pageX);
    setLastTime(currentTime);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Technologies I Work With
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Interactive Infinite Scrolling Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ 
            paddingTop: '2rem', 
            paddingBottom: '2rem' 
          }}
        >
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide cursor-grab select-none"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              paddingLeft: '50%',
              paddingRight: '50%',
              paddingTop: '1.5rem',
              paddingBottom: '1.5rem',
              scrollBehavior: 'auto',
              gap: '2rem'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {extendedTechnologies.map((tech, index) => {
              const scale = scales[index] || 1.0;
              const IconComponent = LucideIcons[tech.icon];
              
              return (
                <div
                  key={`${tech.name}-${index}`}
                  data-card-index={index}
                  className="flex-shrink-0 group cursor-pointer"
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'center center',
                    transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    willChange: 'transform',
                    minWidth: '176px',
                    marginRight: '2rem'
                  }}
                >
                  <div 
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 flex flex-col items-center justify-center p-6"
                    style={{
                      width: '176px',
                      height: '208px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
                    }}
                  >
                    {/* Icon Container with Background Circle */}
                    <div className="relative mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-blue-800/30 dark:group-hover:to-purple-800/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm">
                        {IconComponent ? (
                          <IconComponent 
                            size={32} 
                            className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}
                            strokeWidth={1.5}
                          />
                        ) : (
                          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        )}
                      </div>
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    </div>
                    
                    {/* Skill Name - Fixed readability */}
                    <span className="text-base font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 text-center leading-tight transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TechStack;