import React, { useState } from "react";

const Header = () => {
  // State to track the current theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);

    // Add or remove the dark class on the root element
    const root = document.documentElement;
    if (!isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 w-full">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-red-600">
        Vishal <span className="text-black font-cursive">Tomar</span>
      </h1>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full border-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex justify-center items-center"
      >
        <span className="text-xl">
          {isDarkMode ? "🌞" : "🌙"}
        </span>
      </button>
    </header>
  );
};

export default Header;
