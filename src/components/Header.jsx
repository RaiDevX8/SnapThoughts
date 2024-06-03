import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = ({ faSearch, FontAwesomeIcon }) => {
  return (
    <header className="header h-15 bg bg-transparent z-10 text-yellow-500 backdrop-blur flex flex-col md:flex-row justify-between items-center py-2 px-4">
      <span className="font-serif italic pt-10 text-4xl md:text-5xl font-medium mb-2 md:mb-0">SnapThoughts</span>
      <div className="relative p-1 flex items-center w-full md:w-auto mt-2 md:mt-0">
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
