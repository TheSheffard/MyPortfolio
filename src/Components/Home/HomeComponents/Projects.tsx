import { MyWork } from "../../../context/Help";
import { useTheme } from "../../../context/ThemeContext";


export const Project = () => {
  const { darkMode } = useTheme();

  return (
    <section id="projects" className={`w-full my-10 px-4 md:px-10 py-10 ${darkMode ? " bg-black text-white " : " bg-white text-black  "} bg-white`} >
      <p className="text-[30px] font-semibold py-10">My projects</p>
      {MyWork.map((el, i) => (
        <div
          key={i}
          className={`w-full flex flex-col-reverse md:flex-row gap-5 my-10 items-center justify-between  shadow-2xl ${darkMode ? "shadow-white/30" : "shadow-gary-300"} rounded-2xl p-4 overflow-hidden b md:px-6 md:h-[80vh]`}
        >
          <div className="flex flex-col gap-3 md:w-[40%]">
            <p className="text-[24px] font-bold">{el.projectName}</p>
            <p className="font-semibold text-[17px]">{el.projectType}</p>
            <p className="text-start font-semibold text-[18px]">{el.projectDescription}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {el?.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`inline-block  ${darkMode ? " bg-white text-black" : " bg-black text-white"} text-xs font-medium px-4 py-2 rounded-full`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {el.projectLink !== "" ? (
              <a
                href={el?.projectLink}
                target="_blank"
                className="px-6 border rounded-lg py-[9px] active:scale-90 bg-black font-semibold duration-500 w-fit cursor-pointer text-white text-center"
              >
                View website
              </a>
            ) : (
              <p></p>
            )}
          </div>

          <div className="md:w-[50%] w-full h-[55vh] rounded-lg overflow-hidden ">
            <img
              src={el.projectImage}
              alt={el.projectName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
};