import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4  w-full h-10 ">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-red-600">
               Vishal <span className="text-black font-cursive">Tomar</span>
            </h1>


            {/* Navigation Menu */}
            {/* <nav className="flex space-x-4">
        <button className="px-6 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600">Home</button>
        <button className="px-6 py-2 rounded-full bg-gray-200 hover:bg-gray-300">Resume</button>
        <button className="px-6 py-2 rounded-full bg-gray-200 hover:bg-gray-300">Work</button>
        <button className="px-6 py-2 rounded-full bg-gray-200 hover:bg-gray-300">Contact</button>
      </nav> */}

            {/* Theme Toggle */}
            <button className="p-2 rounded-full border-2 bg-gray-100 hover:bg-gray-200 flex justify-center items-center">
                <span className="material-icons text-xl"> 🌙 </span>
            </button>
        </header>
    );
};

export default Header;