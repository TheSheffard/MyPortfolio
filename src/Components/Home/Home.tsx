import { useState, useEffect } from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import Navbar from '../NavComp/NavBar';
import Hero from './HomeComponents/Hero';
import TechStack from './HomeComponents/TechStack';
import Skills from './HomeComponents/Skills';
import Contact from './HomeComponents/Contact';
import { Project } from './HomeComponents/Projects';
import Footer from './HomeComponents/Footer';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans dark:from-gray-900 dark:to-gray-800">
        <Navbar activeSection={activeSection} />
        <Hero />
        <TechStack />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;