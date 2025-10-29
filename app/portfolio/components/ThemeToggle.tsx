"use client";

import React, { useState, useEffect } from "react";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="absolute max-md:top-4 max-md:right-4 max-md:opacity-25 md:bottom-4 md:left-4 p-2 text-xl cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDarkMode ? "🌞" : "🌚"}
    </button>
  );
};

export default ThemeToggle;
