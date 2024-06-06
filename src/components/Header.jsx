import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className="header gap-4 p-3 h-[10%] md:h-[15%] w-full flex justify-between items-center ">
      <span className="text-[25px] md:text-4xl font-medium">SnapThoughts</span>
      <div className="relative flex items-center mt-2 md:mt-0">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search notes..."
          className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
    </header>
  )
}

export default Header
