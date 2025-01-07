import React from 'react';
import img from '../assets/vvt.jpg';
import resuma from '../assets/resuma1.pdf';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Sidebar = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resuma;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div className="h-screen w-full lg:w-[30%] flex justify-center items-center mt-10  ">
      <aside className="w-[95%] bg-white shadow-lg p-6 md:p-8 flex flex-col items-center rounded-lg relative dark:bg-gray-800 dark:text-gray-100">
        {/* Profile Image */}
        <div className="w-32 md:w-40 h-32 md:h-40 rounded-full overflow-hidden border-4 border-orange-400 mb-6 absolute -top-16">
          <img
            src={img}
            alt="Vishal Tomar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Name */}
        <h2 className="text-2xl md:text-3xl font-bold mt-20 mb-2 text-center">
          Vishal Tomar
        </h2>
        <p className="text-gray-500 text-sm md:text-lg text-center dark:text-gray-200">
          Java Developer / Security Analyst
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-3 md:space-x-4 mt-8 mb-6">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 text-xl md:text-3xl p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition dark:bg-gray-400 "
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-tomar-687a96250/"
            target="_blank"
            className="text-blue-600 hover:text-blue-800 text-xl md:text-3xl p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition dark:bg-gray-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/VishalHarry"
            target="_blank"
            className="text-gray-900 hover:text-gray-800 text-xl md:text-3xl p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition dark:bg-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/codeistein2006/profilecard/"
            target="_blank"
            className="text-pink-600 hover:text-pink-800 text-xl md:text-3xl p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition dark:bg-gray-400"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Contact Details */}
        <div className="w-full bg-gray-200 p-4 md:p-6 rounded-lg mt-4 flex flex-col items-center gap-4 md:gap-6 dark:bg-gray-600 dark:text-gray-100">
          <div className="text-gray-700 text-center flex flex-col gap-4 md:gap-5 text-base md:text-lg w-full">
            <div className="flex items-center justify-center gap-2 pb-2 border-b-2 border-gray-400 dark:text-gray-100">
              <FaPhoneAlt className="text-orange-500" />
              <span className="font-medium">+918126050903</span>
            </div>
            <div className="flex items-center justify-center gap-2 pb-2 border-b-2 border-gray-400 dark:text-gray-100">
              <FaEnvelope className="text-blue-500" />
              <span>vreducation88@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 pb-2 border-b-2 border-gray-400 dark:text-gray-100">
              <FaMapMarkerAlt className="text-green-500" />
              <span>Noida, Pilkhuwa</span>
            </div>
          </div>

          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 transition"
          >
            Download Resume
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
