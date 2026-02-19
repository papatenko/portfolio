import { Github, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Text({ title, year, desc, github, demo, project = false }) {
  const githubLink = github ? (
    <motion.a
      whileHover={{ scale: 1.2 }}
      href={github}
      className={"flex items-center gap-2 bg-accent/50 rounded-full p-2"}
    >
      <Github size={24} />
    </motion.a>
  ) : null;

  const demoLink = demo ? (
    <motion.a
      whileHover={{ scale: 1.2 }}
      href={demo}
      className={"flex items-center gap-2 bg-accent/50 rounded-full p-2"}
    >
      <Globe size={24} />
    </motion.a>
  ) : null;

  return (
    <div className="flex-grow p-2">
      {project ? (
        <h1 className="flex flex-col md:flex-row text-lg md:text-2xl gap-2 font-bold text-paragraph justify-between">
          <div className="bg-accent/25 px-4 pt-1 rounded-full">
            {" "}
            {title} ({year})
          </div>
          <div className="flex items-center gap-2">
            {githubLink ? (
              <span className="flex px-2 gap-2">
                {githubLink}
                {demoLink}
              </span>
            ) : githubLink ? (
              <span className="flex px-2 gap-2">{githubLink}</span>
            ) : null}
          </div>
        </h1>
      ) : (
        <h1 className="flex text-2xl font-bold bg-secondary/25 rounded-lg p-2 text-paragraph">
          {title} ({year})
        </h1>
      )}
      {project ? (
        <p className="p-2 text-paragraph md:block hidden">{desc}</p>
      ) : (
        <p className="p-2 text-paragraph">{desc}</p>
      )}
    </div>
  );
}

export default Text;
