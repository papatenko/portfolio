import { motion } from "framer-motion";
import Text from "components/ui/text";
import { Github, Globe } from "lucide-react";

/**
 * A reusable component for displaying a single project.
 *
 * @param {number} id - Unique id for the project
 * @param {string} title - Title of the project
 * @param {number} year - Year the project was made
 * @param {string} url - URL of the project's GitHub page
 * @param {string} demo - URL of the project's demo page
 * @param {string} desc - Description of the project
 */

const Project = ({ id, title, year, url, alt, github, demo, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-secondary/25 rounded-full flex flex-row items-center p-2 md:p-4"
    >
      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.1 }}>
        <motion.a href={demo}>
          <img
            src={url}
            alt={alt}
            className="rounded-full h-12 w-12 md:h-24 md:w-24 md:object-cover md:order-first"
          ></img>
        </motion.a>
      </motion.div>
      <Text
        title={title}
        year={year}
        desc={desc}
        github={github}
        demo={demo}
        project={true}
        accordion={true}
        className="flex-1 order-last"
      />
    </motion.div>
  );
};

export default Project;
