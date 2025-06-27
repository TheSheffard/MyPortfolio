import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';
import { useTheme } from '../../../context/ThemeContext';

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section id="home" className={`pt-32 pb-20 ${darkMode ? 'dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 bg-opacity-90' : 'bg-white bg-opacity-90'} px-4 sm:px-6 lg:px-8 `}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${darkMode ? " text-gray-900 dark:text-white" : "bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent"}  leading-tight`}>
              <span className="block">Full-Stack Developer</span>
              <span className="block mt-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Crafting Digital Experiences
              </span>
            </h1>
            <p className={`mt-6 text-xl ${darkMode ? "text-gray-600 dark:text-gray-300" : "text-black"}  max-w-2xl`}>
              I build modern, responsive web applications with React, Node.js, and modern databases.
              With over 3 years of experience, I create solutions that are both beautiful and functional.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg">
                View Projects
              </button>
              <button className={`border-2 border-black ${darkMode ? "bg-white text-black " : " bg-black text-white"}  px-8 py-3 rounded-full font-medium hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 dark:hover:border-indigo-400 transition-all`}>
                Download CV
              </button>
            </div>
            <div className="mt-10 flex space-x-6">
              <a href="https://github.com/TheSheffard" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="www.linkedin.com/in/emmanuel-enemaku-b3893435a" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <FaWhatsapp className="h-6 w-6" />
              </a>

            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-200 border-2  border-dashed rounded-full overflow-hidden  border-white shadow-2xl dark:border-gray-800">
                <div className=" rounded-full w-full h-full " >
                  <img src="/MyImage.png" className='w-full h-full object-cover' alt="" />
                </div>

              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg">
                <div className="flex items-center">
                  <div className="bg-indigo-100 dark:bg-indigo-900 rounded-lg p-2">
                    <SiReact className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold dark:text-white">3+ Years</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;