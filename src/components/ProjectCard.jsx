const ProjectCard = ({ project }) => {
  const colors = {
    primary: "#001427",
    secondary: "#BF0603",
    accent: "#F4D58D",
    textDark: "#708D81",
    bgLight: "#708D81",
    darkAccent: "#8D0801",
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col"
      style={{ border: `1px solid ${colors.accent}` }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover object-center"
      />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold mb-3" style={{ color: colors.primary }}>
          {project.title}
        </h3>
        <p className="text-base mb-4 flex-grow" style={{ color: colors.textDark }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium rounded-full"
              style={{
                backgroundColor: colors.accent + "4D", // ~30% opacity
                color: colors.primary,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <div
          className="flex justify-between items-center mt-auto pt-4 border-t"
          style={{ borderColor: colors.bgLight }}
        >
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold transform hover:scale-105 transition-transform duration-300"
            style={{ color: colors.secondary }}
          >
            Live Demo
            <svg
              className="inline-block w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold transform hover:scale-105 transition-transform duration-300"
            style={{ color: colors.primary }}
          >
            GitHub
            <svg
              className="inline-block w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m2 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-3 0a2 2 0 100-4 2 2 0 000 4zm0 0h.01M21 12h-6"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
