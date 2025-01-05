import React from 'react';
import img from '../assets/vvt.jpg';

import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen w-[30%] flex justify-center items-center relative  mt-10">
      <aside className="w-[95%] bg-white shadow-lg p-8 flex flex-col items-center rounded-lg relative">
        {/* Profile Image */}
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-orange-400 mb-6 absolute -top-16">
          <img
            src={img}
            alt="Vishal Tomar"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Name and Designation */}
        <h2 className="text-3xl font-bold mt-20 mb-2">Vishal Tomar</h2>
        <p className="text-gray-500 text-lg">Java Developer/Security Analyst</p>
       

        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-4 mt-8 mb-6">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 text-3xl p-2 bg-gray-200 rounded-md hover:bg-gray-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-tomar-687a96250/"
             target="_blank"
            className="text-blue-600 hover:text-blue-800 text-3xl p-2 bg-gray-200 rounded-md hover:bg-gray-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/VishalHarry"
            target="_blank"
            className="text-gray-900 hover:text-gray-800 text-3xl p-2 bg-gray-200 rounded-md hover:bg-gray-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/codeistein2006/profilecard/"
             target="_blank"
            className="text-pink-600 hover:text-pink-800 text-3xl p-2 bg-gray-200 rounded-md hover:bg-gray-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Contact Details */}
        <div className="w-full bg-gray-200 p-6 rounded-lg mt-4 flex flex-col items-center gap-6">
  {/* Contact Details */}
  <div className="text-gray-700 text-center flex flex-col gap-5 text-xl w-full">
    <div className="flex items-center justify-center gap-2 pb-2 border-b-2 border-gray-400">
      <FaPhoneAlt />
      <span className="font-medium">+918126050903</span>
    </div>
    <div className="flex items-center justify-center gap-2 pb-2 border-b-2 border-gray-400">
      <FaEnvelope />
      <span>vreducation88@gmail.com</span>
    </div>
    <div className="flex items-center justify-center gap-2 pb-2 border-b-2 border-gray-400">
      <FaMapMarkerAlt />
      <span>Noida, Pilkhuwa</span>
    </div>
  </div>

  {/* Resume Download Button */}
  <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
    Download Resume
  </button>
</div>
      </aside>
    </div>
  );
};

export default Sidebar;
