import { FaHome, FaFileAlt, FaBriefcase, FaEnvelope } from 'react-icons/fa';

function MainNav({ onNavClick }) {
  return (
    <nav className="flex flex-wrap space-y-4 lg:space-x-6 justify-center lg:justify-end mb-2 mt-5">
      <button onClick={() => onNavClick('mainContent')} className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 flex items-center space-x-2 transition mb-4 lg:mb-0">
        <FaHome size={20} />
        <span>Home</span>
      </button>
      <button onClick={() => onNavClick('resume')} className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 flex items-center space-x-2 transition mb-4 lg:mb-0">
        <FaFileAlt size={20} />
        <span>Resume</span>
      </button>
      <button onClick={() => onNavClick('work')} className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 flex items-center space-x-2 transition mb-4 lg:mb-0">
        <FaBriefcase size={20} />
        <span>Work</span>
      </button>
      <button onClick={() => onNavClick('certificates')} className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 flex items-center space-x-2 transition mb-4 lg:mb-0">
        <FaBriefcase size={20} />
        <span>Certificates</span>
      </button>
      <button onClick={() => onNavClick('contact')} className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 flex items-center space-x-2 transition mb-4 lg:mb-0">
        <FaEnvelope size={20} />
        <span>Contact</span>
      </button>
    </nav>
  );
}

export default MainNav;
