import Project from "components/ui/project";

/* TODO: Use motions to animate each project on scroll
 * Lay out the projects in a triangle stacked on top of other triangles
 * Majority of them will be GitHub pages
 * */

/* TODO: Migrate to typescript bc i have no idea what's going on here
 *
 * FIX: Constant type errors
 * */

function Projects({ projects }) {
  const renderProjects = projects.map((project, index) => {
    return <Project key={index} project={project} />;
  });

  return <div>{renderProjects}</div>;
}
export default Projects;
