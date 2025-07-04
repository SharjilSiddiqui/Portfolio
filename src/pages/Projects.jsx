// This component acts as a container for all the ProjectCard components, displaying a grid of projects.
import ProjectCard from "../components/ProjectCard";


const Projects = ({ colors, projects }) => {
  return (
    <section id="projects" className="py-16 bg-white rounded-xl shadow-lg mb-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>
          My Projects
        </h2>
        <p className="text-lg" style={{ color: colors.textDark }}>
          A showcase of my recent work and skills.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} colors={colors} />
        ))}
      </div>
    </section>
  );
};

export default Projects;