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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#"
            className="bg-white text-black block px-3 py-2 font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-800 block px-3 py-2 font-medium"
          >
            About
          </a>
          <a href="#"
            className="text-white hover:bg-gray-800 block px-3 py-2 font-medium"
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
