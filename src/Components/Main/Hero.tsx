import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MySkills, MyWork } from "./MainFun";
import { BiChat } from "react-icons/bi";


export const Hero = () => {
  const brand = "RICH.COM".split("");
  const links = [
    {
      icon: <FaLinkedin className="cursor-pointer hover:text-[#0e76a8]" />,
      link: "https://www.linkedin.com/in/emmanuel-enemaku-b3893435a/",
    },
    {
      icon: <FaInstagram className="cursor-pointer hover:text-[#E1306C]" />,
      link: "",
    },
    {
      icon: <FaWhatsapp className="cursor-pointer hover:text-[#25D366]" />,
      link: "",
    },

  ];

  return (
    <section id="About">
      <div className="h-[100vh] md:h-[90vh] w-full grid grid-cols-2 md:grid-cols-1 relative gap-10">
        {/* Left section */}
        <div className="bg-white h-full w-full flex flex-col items-center justify-center relative">
          <div
            className="absolute left-1 items-center gap-2   text-center flex top-auto md:top-[10%]   text-[16px] text-black tracking-wider"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            <p className="  text-[25px] md:text-[20px] font-semibold">Full Stack Developer</p>
            {
              <span className="flex md:hidden flex-row md:flex-col gap-2 ">
                {links.map((el, i) => (
                  <i key={i}>{el.icon}</i>
                ))}
              </span>
            }
          </div>
        </div>

        {/* RICH.COM text */}
        <div className=" absolute  top-[50%] left-[50%] md:left-10 transform -translate-y-1/2 -translate-x-1/2 md:translate-x-10 z-20  ">
          <div className="flex md:hidden flex-col md:flex-row md:items-center text-center text-[40px] te font-extrabold leading-none md:tracking-wide text-yellow-600">
            {brand.map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </div>
        </div>
        <div className=" absolute  top-[50%] left-[50%] md:left-10 transform -translate-y-1/2 -translate-x-1/2 md:translate-x-10 z-20  ">
          <div className=" hidden md:flex  flex-col md:flex-row md:items-center text-center text-[40px] te font-extrabold leading-none md:tracking-wide text-yellow-600">
            <p>RICH DOT COM </p>
          </div>
        </div>

        {/* Right section */}
        <div className="bg-black text-white relative h-full w-full">
          <div className="absolute h-full w-full md:px-10 px-5 flex flex-col justify-center">
            <p className="font-semibold text-[16px] md:text-[17px] md:mb-4">
              Skilled at building fast, responsive, and scalable web
              applications. From frontend interfaces to backend APIs.
            </p>
            <p className="text-[13px] hidden md:flex md:text-[15px] text-gray-300">
              I build clean and efficient web apps that not only look great but
              also perform flawlessly. From crafting intuitive UIs to
              engineering powerful backend systems — I'm the bridge between
              design and function.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};



export const Skills = () => {
  return (
    <div className=" w-full  h-full px-4 md:px-10" id="Expertise">
      <p className="text-[25px]  font-bold flex flex-col md:flex-row md:items-center gap-2 py-10">
        Tech Stack <span className="h-[4px] w-[50px] border bg-black"></span>
      </p>

      <div className="px-4 md:px-10 flex flex-col  my-5 gap-10">
        {MySkills.map((el, index) => (
          <div
            key={index}
            className="flex flex-row flex-wrap   gap-2 md:gap-5 md:items-end"
          >
            <p className="text-[22px] text-teal-600 font-semibold">
              {el.name}:{" "}
            </p>

            {el.subname.map((item, i) => (
              <span
                key={i}
                className="text-[18px] md:text-[19px] flex items-center font-semibold gap-5"
              >
                {" "}
                <i className={`text-[${item.color}] `}>{item.icon}</i>{" "}
                {item.subname1}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Project = () => {
  return (
    <section className="w-full my-10 px-4 md:px-10" id="Project">
      <p className="text-[30px] font-semibold py-10">My projects</p>
      {MyWork.map((el, i) => (
        <div
          key={i}
          className="w-full flex flex-col-reverse md:flex-row gap-5 my-10 items-center justify-between shadow-2xl rounded-2xl p-4 overflow-hidden b md:px-6 md:h-[80vh]"
        >
          <div className="flex flex-col gap-3 md:w-[40%]">
            <p className="text-[24px] font-bold">{el.projectName}</p>
            <p className="font-semibold text-[17px]">{el.projectType}</p>
            <p className="text-start text-[18px]">{el.projectDescription}</p>

            {el.projectLink !== "" ? (
              <a
                href={el?.projectLink}
                target="_blank"
                rel="noopener noreferrer"
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

export const ContactForm = () => {
  const links = [
    {
      icon: <FaLinkedin className="cursor-pointer hover:text-[#0e76a8]" />,
      link: "https://www.linkedin.com/in/emmanuel-enemaku-b3893435a/",
    },
    {
      icon: <FaInstagram className="cursor-pointer hover:text-[#E1306C]" />,
      link: "",
    },
    {
      icon: <FaWhatsapp className="cursor-pointer hover:text-[#25D366]" />,
      link: "",
    }
  ];

  return (
    <section
      className="bg-[#0D0F1A] text-white w-full min-h-[80vh] px-6 py-10 flex flex-col md:flex-row justify-between gap-10"
      id="Contact"
    >
      {/* Left - Contact Info */}
      <div className="flex flex-col gap-6 md:w-[40%]">
        <h2 className="text-2xl font-semibold flex items-center gap-3">
          GET IN TOUCH <BiChat />{" "}
        </h2>

        <div className="flex flex-col ">
          <p className="font-medium mb-2">CONTACT</p>
          <a
            href="mailto:EmmanuelEnemaku60@gmail.com"
            className="text-[#61dafb] hover:underline break-words"
          >
            Emmanuelenemaku60@gmail.com
          </a>
        </div>

        <div>
          <p className="font-medium mb-2">SOCIAL MEDIA</p>
          <div className="flex gap-4 text-2xl">
            {links.map((el, i) => (
              <i className="hover:-translate-y-1 duration-500" key={i}>{el.icon}</i>
            ))}
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex flex-col gap-5 md:w-[50%]">
        <input
          type="text"
          placeholder="Name"
          className="bg-transparent border border-gray-500 p-3 rounded-md focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent border border-gray-500 p-3 rounded-md focus:outline-none"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="bg-transparent border border-gray-500 p-3 rounded-md focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="border w-full text-white px-6 py-3 rounded-full  active:scale-90 duration-500"
        >
          SEND
        </button>
      </div>
    </section>
  );
};
