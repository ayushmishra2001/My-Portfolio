import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useTheme } from './hooks/useTheme.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TechStack from './components/TechStack.jsx';
import ProfilePhoto from './components/ProfilePhoto.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Testimonials from './components/Testimonials.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <TechStack />
        <ProfilePhoto />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;