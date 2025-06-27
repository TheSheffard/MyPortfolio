import { ReactNode } from 'react';

const TechIcon = ({ icon, name }: { icon: ReactNode; name: string }) => (
  <div className="flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
      {icon}
    </div>
    <p className="mt-3 font-medium text-gray-700 dark:text-gray-300">{name}</p>
  </div>
);

export default TechIcon;