import { AnimatePresence, motion } from "motion/react";

// 1. get x motion 2. get repetition 3. animate pfp
function About({ icons }) {

  return (
    <div className="flex grow justify-center items-center ">
      <motion.div
        className="bg-secondary/25 rounded-lg flex flex-col md:flex-row gap-8 p-8 md:gap-12 md:p-12 items-center"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.7, 0.2, 1.],
        }}
      >
        <AnimatePresence>
          <motion.img
            className="rounded-lg h-48 lg:h-72"
            src={process.env.PUBLIC_URL + icons[0].url}
            alt={icons[0].name}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
              ease: [0, 0.7, 0.2, 1.],
            }}
          />
        </AnimatePresence>
        <motion.div className="text-paragraph font-bold text-2xl md:text-4xl "
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.1,
            ease: [0, 0.7, 0.2, 1.],
          }}

        >
          Hello, I'm{" "}
          <span className="text-background bg-accent p-1 md:p-2 lg:p-4 rounded-l md:rounded-xl lg:rounded-2xl">
            Papatenko.
          </span>{" "}
          <br />
          <br />
          What do I do you ask?
          <br />
          <br />
          Well, let me show you!
        </motion.div>
      </motion.div>
    </div>

  );
}


export default About;
