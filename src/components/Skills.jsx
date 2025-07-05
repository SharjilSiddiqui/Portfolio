const Skills = ({ skills }) => {
  const colors = {
    primary: "#001427",
    secondary: "#BF0603",
    accent: "#F4D58D",
    textDark: "#708D81",
    textLight: "#708D81",
    darkAccent: "#8D0801",
  };

  return (
    <section id="skills" className="py-16 bg-white rounded-xl shadow-lg mb-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>
          My Skills
        </h2>
        <p className="text-lg" style={{ color: colors.textDark }}>
          Technologies and tools I work with.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-16">
        {Object.entries(skills).map(([category, skillList]) => (
          <div
            key={category}
            className="p-6 rounded-lg shadow-md"
            style={{ backgroundColor: colors.accent + "33" }} // ~20% transparency
          >
            <h3
              className="text-2xl font-semibold mb-4 capitalize"
              style={{ color: colors.primary }}
            >
              {category}
            </h3>
            <ul className="space-y-2">
              {skillList.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center text-lg"
                  style={{ color: colors.textDark }}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
