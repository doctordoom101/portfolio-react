import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
     <nav className="fixed w-full z-50 bg-black py-2 text-white font-inria">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-3xl font-bold font-serif">Defanda Yeremia</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center">
              <Link to="/"
                className={`px-8 py-6 font-medium ${location.pathname === '/' ? 'bg-white text-black' : 'hover:bg-gray-800 text-white'}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-8 py-6 font-medium ${location.pathname === '/about' ? 'bg-white text-black' : 'hover:bg-gray-800 text-white'}`}
              >
                About
              </Link>
              <Link to="/project"
                className={`px-8 py-6 font-medium ${location.pathname === '/project' ? 'bg-white text-black' : 'hover:bg-gray-800 text-white'}`}
              >
                Projects
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex flex-col space-y-2 py-4 px-6">
          <Link
            to="/"
            onClick={closeMenu}
            className={`block py-2 px-4 transition duration-300 ${
              location.pathname === "/"
                ? "bg-white text-black"
                : "hover:bg-gray-700 text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className={`block py-2 px-4 transition duration-300 ${
              location.pathname === "/about"
                ? "bg-white text-black"
                : "hover:bg-gray-700 text-white"
            }`}
          >
            About
          </Link>
          <Link
            to="/project"
            onClick={closeMenu}
            className={`block py-2 px-4 transition duration-300 ${
              location.pathname === "/project"
                ? "bg-white text-black"
                : "hover:bg-gray-700 text-white"
            }`}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
