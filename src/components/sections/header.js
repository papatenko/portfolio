import ThemeToggle from "components/ui/theme-toggle";
import { motion } from "motion/react";

function Header() {
  return (
    /* Cross dissolve animation */
    <motion.header
      className="sticky top-0 flex p-4 justify-center md:justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
        duration: 1,
        ease: [0, 0.7, 0.2, 1],
      }}
    >
      <div className="hidden md:flex items-center text-4xl text-primary font-bold">
        Justin Kondratenko
      </div>
      <div className="flex gap-2 md:gap-4 items-center text-xl md:text-2xl text-background font-bold bg-secondary/50 rounded-full p-2 box-shadow border-solid border-2 border-secondary/10 backdrop-blur-xl">
        <Hyperlink href="#projects">Projects</Hyperlink>
        <Hyperlink href="#artwork">Artwork</Hyperlink>
        <Hyperlink href="#contact">Contact</Hyperlink>
        <div className="pr-2">
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
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
