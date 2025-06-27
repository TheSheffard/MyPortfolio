import { FaCode, FaServer, FaDatabase, FaPaintBrush } from 'react-icons/fa';
import { useTheme } from '../../../context/ThemeContext';

const Skills = () => {
  const { darkMode } = useTheme();

  const skills = [
    { icon: <FaCode className="text-2xl" />, title: "Frontend", technologies: ["React", "Next.js", "Tailwind CSS", "Redux", "TypeScript"] },
    { icon: <FaServer className="text-2xl" />, title: "Backend", technologies: ["Node.js", "Express", "REST APIs", "Authentication"] },
    { icon: <FaDatabase className="text-2xl" />, title: "Databases", technologies: ["MongoDB", "PostgreSQL", "ORM"] },
    { icon: <FaPaintBrush className="text-2xl" />, title: "UI/UX", technologies: ["Figma", "Responsive Design", "Component Libraries", "Accessibility"] }
  ];

  return (
    <section id="skills" className={`py-20  ${darkMode ? "dark:bg-gray-900 text-white" : "bg-white text-black"}  `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold ">My Skills</h2>
          <p className="mt-4 text-xl  max-w-2xl mx-auto">
            Expertise across the full development stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 dark:bg-indigo-900 rounded-xl p-3">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">{skill.title}</h3>
              </div>
              <ul className="space-y-3">
                {skill.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-indigo-500 mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;