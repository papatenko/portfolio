import ThemeToggle from "./ThemeToggle";
import { motion } from 'motion/react'

function Header() {
  return (
    <motion.header className="flex p-4 justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
        duration: 1,
        ease: [0, 0.7, 0.2, 1],
      }}
    >

      <div className="flex g-12 items-center">
        <div className="text-4xl text-primary font-bold">Papatenko</div>
      </div>
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </motion.header>
  );
}

export default Header;
