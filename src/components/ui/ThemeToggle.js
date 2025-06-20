import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

// This code came from some website I can't find right now

// TODO: Fix theme initialization
//
// BUG: Theme initializes as dark when it should be light

function DarkmodeToggle() {
  const [currentTheme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    applyTheme();
  });

  function getInitialTheme() {
    let userTheme = null;
    let systemTheme = true;
    // Check for theme in local storage assuming window is defined
    if (typeof window !== "undefined" && window.localStorage) {
      userTheme = localStorage.getItem("theme");
      systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    }

    return userTheme || (systemTheme ? "dark" : "light");
  }

  function applyTheme() {
    if (currentTheme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }

  function toggleTheme() {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  }

  return (
    /* onClick bounce animation */
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {currentTheme === "dark" ? (
        <Moon className="size-8 text-primary mr-1 ml-4" onClick={toggleTheme} />
      ) : (
        <Sun className="size-8 text-primary mr-1 ml-4" onClick={toggleTheme} />
      )}
    </motion.div>
  );
}
export default DarkmodeToggle;
