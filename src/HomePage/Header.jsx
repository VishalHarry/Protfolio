import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4  w-full h-10 ">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-red-600">
               Vishal <span className="text-black font-cursive">Tomar</span>
            </h1>



            {/* Theme Toggle */}
            <button className="p-2 rounded-full border-2 bg-gray-100 hover:bg-gray-200 flex justify-center items-center">
                <span className="material-icons text-xl"> 🌙 </span>
            </button>
        </header>
    );
};

export default Header;