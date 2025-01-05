import React from 'react';
import img from '../assets/img1.jpg'

const Sidebar = () => {
  return (
   
    
     

   <div className='h-sreen flex justify-center items-end  relative'>
       <aside className="w-80 bg-white shadow-md p-8 flex flex-col items-center rounded-lg h-[80%] ">
      <div className="w-36 h-36 rounded-lg overflow-hidden border-4 border-orange-400 mb-6 absolute top-16 ">
        <img
          src={img}
          alt="Vishal Tomar"
          className="w-full h-full object-cover"
        />
      </div>
        {/* Name and Designation */}
        <h2 className="text-2xl font-bold mb-1 mt-16">Vishal Tomar</h2>
        <p className="text-gray-500">Java Developer</p>
        <p className="text-gray-500 mb-6">Security Analyst</p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-6">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 text-2xl"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 text-2xl"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-700 text-2xl"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Contact Details */}
        <div className="text-gray-700 text-center mb-6">
          <p className="mb-2">📞 +918126050903</p>
          <p className="mb-2">✉️ vishal@gmail.com</p>
          <p>📍 Noida, Pilkhuwa</p>
        </div>

        {/* Resume Download Button */}
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
          Download Resume
        </button>
      </aside>
    
   </div>
  );
};

export default Sidebar;
