import { SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiTailwindcss, SiRedux, SiTypescript, SiSpringboot, SiBootstrap, SiGithub, SiPuppeteer } from 'react-icons/si';
import TechIcon from './TechIcon';
import { BiLogoJava } from 'react-icons/bi';

const TechStack = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Tech Stack</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300  max-w-2xl mx-auto">
            Technologies I use to build modern web applications
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
          <TechIcon icon={<SiReact className="h-12 w-12 text-blue-500" />} name="React" />
          <TechIcon icon={<SiNextdotjs className="h-12 w-12 text-black dark:text-white" />} name="Next.js" />
          <TechIcon icon={<SiNodedotjs className="h-12 w-12 text-green-600" />} name="Node.js" />
          <TechIcon icon={<SiExpress className="h-12 w-12 text-red-500 " />} name="Express" />
          <TechIcon icon={<SiSpringboot className="h-12 w-12 text-green-500 " />} name="SpringBoot" />
          <TechIcon icon={<SiMongodb className="h-12 w-12 text-green-500" />} name="MongoDB" />
          <TechIcon icon={<SiPostgresql className="h-12 w-12 text-blue-700" />} name="PostgreSQL" />
          <TechIcon icon={<SiTailwindcss className="h-12 w-12 text-teal-500" />} name="Tailwind" />
          <TechIcon icon={<SiBootstrap className="h-12 w-12 text-blue-500" />} name="BootStrap" />
          <TechIcon icon={<SiRedux className="h-12 w-12 text-purple-500" />} name="Redux" />
          <TechIcon icon={<SiTypescript className="h-12 w-12 text-blue-600" />} name="TypeScript" />
          <TechIcon icon={<BiLogoJava className="h-12 w-12 text-red-600" />} name="Java" />
          <TechIcon icon={<SiGithub className="h-12 w-12 text-gray-200" />} name="GitHub" />
          <TechIcon icon={<SiPuppeteer className="h-12 w-12 text-green-500" />} name="Puppeteer" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;