import React from 'react'
import { FaHome, FaFileAlt, FaBriefcase, FaEnvelope } from 'react-icons/fa';

function MainNav({ onNavClick }) {
  return (
    <nav className="flex space-x-6 justify-end mb-2 mt-5">
    <button 
    onClick={() => onNavClick('mainContent')}
    className="px-6 py-3 rounded-full bg-gray-200 text-black hover:bg-orange-600 flex items-center space-x-2">
      <FaHome size={20} />
      <span>Home</span>
    </button>
    <button 
     onClick={() => onNavClick('resume')}
    className="px-6 py-3 rounded-full bg-gray-200 hover:bg-orange-600 flex items-center space-x-2">
      <FaFileAlt size={20} />
      <span>Resume</span>
    </button>
    <button
     onClick={() => onNavClick('work')}
     className="px-6 py-3 rounded-full bg-gray-200 hover:bg-orange-600 flex items-center space-x-2">
      <FaBriefcase size={20} />
      <span>Work</span>
    </button>
    <button
     onClick={() => onNavClick('contact')}
    className="px-6 py-3 rounded-full bg-gray-200 hover:bg-orange-600 flex items-center space-x-2">
      <FaEnvelope size={20} />
      <span>Contact</span>
    </button>
  </nav>
  )
}

export default MainNav
