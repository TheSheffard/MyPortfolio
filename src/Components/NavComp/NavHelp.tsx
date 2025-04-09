import { NavLinks } from "./NavFunc";
import Logo from "../../../public/RichLogo.png";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export const NavHelp = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); 
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <div
      className={`z-20 w-full flex justify-between items-center px-4 py-3 duration-500 ${
        scrollY > 70 ? "backdrop-blur-lg fixed top-0" : "bg-black text-white"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-1 font-semibold">
        <img src={Logo} alt="Logo" className="w-fit object-cover h-[40px]" />
        <p>Rich Dot Com</p>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-10 items-center">
        {NavLinks.map((item, index) => (
          <p
            key={index}
            className="cursor-pointer font-semibold"
            onClick={() => handleScrollTo(item)}
          >
            {item}
          </p>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        {menuOpen ? (
          <FaX
            className="text-black"
            size={20}
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <FaBars
            className="text-black"
            size={20}
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[50px] h-screen left-0 w-full bg-black text-white flex flex-col gap-10 p-4 md:hidden z-50">
          {NavLinks.map((item, index) => (
            <div
              key={index}
              className="w-full flex items-center gap-3 cursor-pointer"
              onClick={() => handleScrollTo(item)}
            >
              {/* Bar/Design */}
              <div className="h-6 w-1 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-sm" />
              {/* Link Text */}
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
