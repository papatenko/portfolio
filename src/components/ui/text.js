import { Github, Globe } from "lucide-react";
import { motion } from "framer-motion";

function Text({ title, year, desc, github, demo, project = false }) {
  const githubLink = github ? (
    <motion.a
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      href={github}
      className={"flex items-center gap-2 bg-primary rounded-full p-2 md:p-4"}
    >
      <Github size={24} className="text-background" />
    </motion.a>
  ) : null;

  const demoLink = demo ? (
    <motion.a
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      href={demo}
      className={"flex items-center bg-primary rounded-full p-2 md:p-4"}
    >
      <Globe size={24} className="text-background" />
    </motion.a>
  ) : null;

  return (
    <div className="flex-grow p-2">
      {project ? (
        <h1 className="flex flex-col md:flex-row text-lg md:text-2xl md:gap-2 font-bold text-paragraph justify-between">
          <div className="md:bg-primary md:text-background md:px-6 py-2 align-middle rounded-full">
            {title} ({year})
          </div>
          <div className="flex items-center gap-2">
            {githubLink ? (
              <span className="flex md:px-4 gap-4">
                {githubLink}
                {demoLink}
              </span>
            ) : githubLink ? (
              <span className="flex px-4 gap-4">{githubLink}</span>
            ) : null}
          </div>
        </h1>
      ) : (
        <h1 className="flex text-2xl font-bold bg-secondary/50 rounded-lg p-2 text-paragraph box-shadow border-solid border-2 border-secondary/10">
          {title} ({year})
        </h1>
      )}
      {project ? (
        <p className="p-2 text-lg text-paragraph md:block hidden">{desc}</p>
      ) : (
        <p className="p-2 text-paragraph">{desc}</p>
      )}
    </div>
  );
}

export default Text;
