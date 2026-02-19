import Project from "components/ui/project";
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

function ScaleOnProximity({ children }) {
  const ref = useRef(null);
  const distance = useMotionValue(1);

  // Bouncier spring — low stiffness + low damping = oscillation
  const smoothDistance = useSpring(distance, {
    stiffness: 180,
    damping: 12,
    mass: 0.8,
  });

  // Subtle range: 1.08 at center, 0.94 at edges
  const scale = useTransform(smoothDistance, [0, 1], [1.02, 0.98]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const maxDist = window.innerHeight / 2;
      const normalized = Math.min(
        Math.abs(elementCenter - viewportCenter) / maxDist,
        1,
      );
      distance.set(normalized);
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [distance]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      drag
      dragSnapToOrigin
      dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
    >
      {children}
    </motion.div>
  );
}

function Projects({ projects, title }) {
  const renderProjects = projects.map((project, index) => {
    return (
      <ScaleOnProximity key={index}>
        <Project
          key={index}
          id={project.id}
          title={project.title}
          year={project.year}
          url={project.url}
          alt={project.alt}
          github={project.github}
          demo={project.demo}
          desc={project.desc}
        />
      </ScaleOnProximity>
    );
  });

  return (
    <div>
      <h1 className="flex justify-center text-2xl font-bold rounded-lg p-2 text-primary">
        {title}
      </h1>
      <div className="flex flex-col gap-4 lg:gap-8 p-4 md:px-24">
        {renderProjects}
      </div>
    </div>
  );
}

export default Projects;
