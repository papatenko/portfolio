import Project from "components/ui/project";

/* TODO: Use motions to animate each project on scroll
 * Lay out the projects in a triangle stacked on top of other triangles
 * Majority of them will be GitHub pages
 * */

/* TODO: Migrate to typescript bc i have no idea what's going on here
 *
 * FIX: Constant type errors
 * */

function Projects({ projects, title }) {
  const renderProjects = projects.map((project, index) => {
    return (
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
    );
  });

  return (
    <div>
      <h1 className="flex justify-center text-2xl font-bold rounded-lg p-2 text-primary">
        {title}
      </h1>
      <div className="flex flex-col gap-2 lg:gap-8 p-4">{renderProjects}</div>
    </div>
  );
}

export default Projects;
