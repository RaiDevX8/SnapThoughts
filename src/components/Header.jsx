// Header.jsx
import React from 'react';

const Header = ({ faSearch, FontAwesomeIcon }) => {
  return (
    <header className="header z-10 p-4 text-yellow-500 backdrop-blur  flex flex-col md:flex-row justify-between items-center sticky top-0 ">
      <span className="font-mono text-4xl  md:text-5xl font-medium  mb-2 md:mb-0 self-start">SnapThoughts</span>
      <div className="relative p-1 flex items-center   rounded-lg w-full md:w-auto">
        <FontAwesomeIcon icon={faSearch} className="absolute left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search notes..."
          className="pl-10 pr-4 py-2 w-full md:w-64 bg-gray-200 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
    </header>
  );
};

export default Header;
