import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../Home/HomeComponents/ThemeToggle';

const Navbar = ({ activeSection }: { activeSection: string }) => {
  const { darkMode } = useTheme();

  return (
    <nav className={`fixed w-full ${darkMode ? 'bg-gray-900 bg-opacity-90' : 'bg-white bg-opacity-90'} backdrop-blur-sm shadow-sm z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <div className=" text-xl md:text-2xl font-bold bg-gradient-to-r flex items-center gap-2 from-indigo-600 to-purple-600 bg-clip-text  text-transparent">
              <img src="/RichLogo.png" className='w-[40px]  object-cover' alt="" />
              Rich Dot Com
            </div>
          </div>
          <div className="hidden md:flex space-x-10">
            <a
              href="#home"
              className={`transition-all duration-300 ${activeSection === 'home' 
                ? 'text-indigo-600 dark:text-indigo-400 font-semibold' 
                : ''}`}
            >
              Home
            </a>
            <a
              href="#skills"
              className={`transition-all duration-300 ${activeSection === 'skills' 
                ? 'text-indigo-600 font-semibold dark:text-indigo-400' 
                : ''}`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`transition-all duration-300 ${activeSection === 'projects' 
                ? 'text-indigo-600  dark:text-indigo-400 font-semibold' 
                : ''}`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`transition-all duration-300 ${activeSection === 'contact' 
                ? 'text-indigo-600  dark:text-indigo-400 font-semibold' 
                : ''}`}
            >
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;  