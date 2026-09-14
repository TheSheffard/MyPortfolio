import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6 md:mb-0">
            Rich Dot Com
          </div>
          <div className="flex space-x-8">
            <a href="#home" className="hover:text-indigo-300 transition-colors">Home</a>
            <a href="#skills" className="hover:text-indigo-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-300 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-300 transition-colors">Contact</a>
          </div>
          <div className="mt-6 md:mt-0 flex space-x-6">
            <a href="https://github.com/TheSheffard" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="www.linkedin.com/in/emmanuel-enemaku-b3893435a" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rich Dot Com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;