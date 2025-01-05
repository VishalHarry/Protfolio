import React from 'react'
import { FaHome, FaFileAlt, FaBriefcase, FaEnvelope } from 'react-icons/fa';

function MainNav() {
  return (
    <nav className="flex space-x-6 justify-end mb-2 mt-5">
    <button className="px-6 py-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 flex items-center space-x-2">
      <FaHome size={20} />
      <span>Home</span>
    </button>
    <button className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center space-x-2">
      <FaFileAlt size={20} />
      <span>Resume</span>
    </button>
    <button className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center space-x-2">
      <FaBriefcase size={20} />
      <span>Work</span>
    </button>
    <button className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center space-x-2">
      <FaEnvelope size={20} />
      <span>Contact</span>
    </button>
  </nav>
  )
}

export default MainNav
