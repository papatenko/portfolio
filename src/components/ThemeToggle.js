import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function DarkmodeToggle() {
  const [currentTheme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    applyTheme();
  });

  function getInitialTheme() {
    let userTheme = null;
    let systemTheme = true;
    if (typeof window !== "undefined" && window.localStorage) {
      userTheme = localStorage.getItem("theme");
      systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
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
    <div>
      {currentTheme === "dark" ? (
        <Moon
          className="size-8 text-paragraph mr-1 ml-4"
          onClick={toggleTheme}
        />
      ) : (
        <Sun
          className="size-8 text-paragraph mr-1 ml-4"
          onClick={toggleTheme}
        />
      )}
    </div>
  );
}
export default DarkmodeToggle;
