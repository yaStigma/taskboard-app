"use client";

// import { useEffect } from "react";

export default function ThemeToggle() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={toggleTheme} className="p-2 border rounded">
      Переключить тему
    </button>
  );
}
