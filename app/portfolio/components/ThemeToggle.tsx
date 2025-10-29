"use client";

import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="absolute max-md:top-4 max-md:right-4 max-md:opacity-25 md:bottom-4 md:left-4 p-2 text-xl cursor-pointer border-2 rounded-md border-transparent dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 print:hidden"
      aria-label="Toggle theme"
    >
      {isDarkMode ? "🌞" : "🌚"}
    </button>
  );
};

export default ThemeToggle;
