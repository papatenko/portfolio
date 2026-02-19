import { AnimatePresence, motion } from "motion/react";

// 1. get x motion 2. get repetition 3. animate pfp
function About({ icons }) {
  return (
    <div className="flex grow justify-center items-center">
      {/* Zoom in animation for center item */}
      <motion.div
        className="md:bg-secondary/25 rounded-2xl flex flex-col text-center lg:text-left lg:flex-row gap-8 p-8 lg:gap-12 lg:p-12 items-center md:box-shadow border-solid md:border-2 border-secondary/10"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.7, 0.2, 1],
        }}
      >
        {/* TODO: Add animation that switches between profile pictures */}
        <AnimatePresence>
          <motion.img
            className="rounded-full h-72 lg:h-72 box-shadow"
            src={process.env.PUBLIC_URL + icons[0].url}
            alt={icons[0].name}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
              ease: [0, 0.7, 0.2, 1],
            }}
          />
        </AnimatePresence>

        {/* Right Text with a slide over animation */}
        <motion.div
          className="text-paragraph font-bold text-2xl md:text-4xl"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.1,
            ease: [0, 0.7, 0.2, 1],
          }}
        >
          Hello, I'm{" "}
          <span className="text-background bg-accent p-2 lg:p-4 rounded-xl lg:rounded-2xl box-shadow">
            PapaTenko
          </span>{" "}
          <br />
          <br />
          My real name is{" "}
          <span className="text-background bg-primary p-2 lg:p-4 rounded-xl lg:rounded-2xl box-shadow">
            Justin Kondratenko
          </span>{" "}
          <br />
          <br />
          I'm a digital designer, video editor,
          <br />
          <br />
          web developer, and so much more!
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
