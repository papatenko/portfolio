import ThemeToggle from "components/ui/theme-toggle";
import { Github } from "lucide-react";
import { motion } from "motion/react";

function Header() {
  return (
    /* Cross dissolve animation */
    <header className="flex p-4 justify-center md:justify-between">
      <div className="hidden md:flex items-center text-4xl text-primary font-bold rounded-full p-2 pr-4 bubble backdrop-blur-xl">
        <motion.div
          className="bg-primary p-2 rounded-full mr-2 text-background"
          initial={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <a href="https://github.com/papatenko">{<Github size={32} />}</a>
        </motion.div>{" "}
        Papatenko
      </div>

      <div className="flex gap-2 md:gap-4 items-center text-md md:text-2xl text-background font-bold rounded-full p-2 bubble backdrop-blur-xl">
        <Hyperlink href="#experience">Experience</Hyperlink>
        <Hyperlink href="#websites">Websites</Hyperlink>
        <Hyperlink href="#artwork">Artwork</Hyperlink>
        <Hyperlink href="#contact">Contact</Hyperlink>
        {/* Needs to be hidden to keep dark mode working */}
        <div className="hidden pr-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

const Hyperlink = ({ children, href }) => (
  <motion.a
    className="bg-primary rounded-full p-1 px-2 md:p-2 md:px-4"
    href={href}
    initial={{ opacity: 1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.1 }}
  >
    {children}
  </motion.a>
);

export default Header;
