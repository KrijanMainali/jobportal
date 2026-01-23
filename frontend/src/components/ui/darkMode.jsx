import { useEffect, useState } from "react";

const DarkMode = () => {
  // 1️⃣ Load saved theme or system preference
  const getInitialTheme = () => {
    if (localStorage.theme) return localStorage.theme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  // 2️⃣ Apply theme globally
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
      className="
        relative flex items-center gap-2 px-3 py-1.5
        rounded-full border
        bg-gray-100 text-black
        dark:bg-gray-800 dark:text-white
        transition-all duration-300
        hover:scale-105
      "
      aria-label="Toggle dark mode"
    >
      <span className="text-sm">
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </span>
    </button>
  );
};

export default DarkMode;

