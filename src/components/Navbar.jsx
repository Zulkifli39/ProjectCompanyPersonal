import { useState } from "react";
import logo from "../image/logo.png";
// React Icons
import { GrLanguage } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItem = [
    { link: "Overview", path: "#home" },
    { link: "Feature", path: "#feature" },
    { link: "About", path: "#about" },
    { link: "Pricing", path: "#pricing" },
  ];

  return (
    <>
      <nav className="md:bg-bluefav bg-bluefav px-4 md:px-24 fixed top-0 right-0 left-0 z-50">
        <div className="container flex justify-between font-medium items-center text-lg">
          <div className="flex items-center space-x-14">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <img
                src={logo}
                alt="Logo"
                className="md:w-56 w-44 inline-block"
              />
            </a>
            <ul className="hidden md:flex space-x-12">
              {navItem.map(({ link, path }) => (
                <a
                  key={link}
                  href={path}
                  className="block text-white font-bold text-base"
                >
                  {link}
                </a>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-12">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary text-white font-bold text-base"
            >
              <GrLanguage className="mr-2" />
              Language
            </a>
            <button className="hidden md:inline-block font-bold text-base bg-secondary py-2 px-4 rounded text-white transition-all duration-300 hover:bg-indigo-600">
              Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <MdClose className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        } bg-bluefav z-40 space-y-4 px-5 pt-20 pb-5`}
      >
        {navItem.map(({ link, path }) => (
          <a
            key={link}
            href={path}
            className="block text-white font-bold text-base"
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
}

export default Navbar;
