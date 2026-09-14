import { FaCode, FaServer, FaDatabase, FaPaintBrush } from 'react-icons/fa';
import { useTheme } from '../../../context/ThemeContext';
import React from 'react';

const Skills = () => {
  const { darkMode } = useTheme();

  const skills = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Frontend",
      technologies: ["React", "Next.js", "Tailwind CSS", "Redux", "TypeScript"],
      color: "bg-indigo-100 dark:bg-indigo-900/30"
    },
    {
      icon: <FaServer className="text-3xl" />,
      title: "Backend",
      technologies: ["Node.js", "Express", "REST APIs", "Authentication"],
      color: "bg-emerald-100 dark:bg-emerald-900/30"
    },
    {
      icon: <FaDatabase className="text-3xl" />,
      title: "Databases",
      technologies: ["MongoDB", "PostgreSQL", "ORM"],
      color: "bg-amber-100 dark:bg-amber-900/30"
    },
    {
      icon: <FaPaintBrush className="text-3xl" />,
      title: "UI/UX",
      technologies: ["Figma", "Responsive Design", "Component Libraries", "Accessibility"],
      color: "bg-rose-100 dark:bg-rose-900/30"
    }
  ];

  return (
    <section id="skills" className={`py-24 ${darkMode ? "dark:bg-gray-900 text-white" : "bg-gray-50"} relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl dark:bg-indigo-600"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl dark:bg-emerald-600"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 mb-4">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-emerald-500 dark:from-indigo-400 dark:to-emerald-400">
            My Skills
          </h2>
          <p className="mt-6 text-xl  max-w-2xl mx-auto">
            Full-stack capabilities with specialized focus on modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 transition-all duration-300 ease-in-out ${darkMode ? "bg-gray-800/50  backdrop-blur-sm" : "bg-white text-black"} shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-2`}
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>

              <div className="flex flex-col h-full">
                <div className={`${skill.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                  {React.cloneElement(skill.icon, { className: `${skill.icon.props.className} text-indigo-600 dark:text-indigo-400` })}
                </div>

                <h3 className="text-2xl font-bold  mb-4">{skill.title}</h3>

                <ul className="space-y-3 flex-grow">
                  {skill.technologies.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="flex items-center transition-all duration-200 group-hover:translate-x-1"
                      style={{ transitionDelay: `${techIndex * 50}ms` }}
                    >
                      <div className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-indigo-500' : index === 1 ? 'bg-emerald-500' : index === 2 ? 'bg-amber-500' : 'bg-rose-500'} mr-3`}></div>
                      <span className="">{tech}</span>
                    </li>
                  ))}
                </ul>

          
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;