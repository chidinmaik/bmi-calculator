import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-screen-xl z-50 bg-black/50 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-white text-xl font-semibold">
          <span>🌟</span> 
        </div>

        {/* Navigation Links (Hidden on mobile) */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-300">How it works</a>
          <a href="#" className="text-white hover:text-gray-300">Features</a>
          <a href="#" className="text-white hover:text-gray-300">Pricing</a>
          <a href="#" className="text-white hover:text-gray-300">Integrations</a>
          <a href="#" className="text-white hover:text-gray-300">Resources</a>
        </nav>

        {/* Hamburger Menu (Visible on mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full  bg-black/90 backdrop-blur-md  text-white text-left rounded-b-lg shadow-lg ">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#" className="hover:text-gray-300 border-b-2  ">How it works</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 border-b-2 ">Features</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 border-b-2 ">Pricing</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 border-b-2 ">Integrations</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 border-b-2  ">Resources</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
