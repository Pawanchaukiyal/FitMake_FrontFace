// Toogle.jsx
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Toogle = () => {
  // Initialize darkMode based on the current class on the documentElement
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 rounded-md shadow-sm hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      {darkMode ? <FaSun className="mr-2 text-yellow-500" /> : <FaMoon className="mr-2 text-gray-400" />}
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default Toogle;
