// This component provides details about the portfolio owner's background, interests, and professional approach.
const About = ({ colors }) => {
  return (
    <section id="about" className="py-16 bg-white rounded-xl shadow-lg mb-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>
          About Me
        </h2>
        <p className="text-lg" style={{ color: colors.textDark }}>
          Get to know more about my journey and passion for web development.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 px-8 md:px-16">
        <div className="lg:w-1/2 text-lg leading-relaxed">
          <p className="mb-4">
            Hello! I'm Sharjil Siddiqui, a dedicated web developer with a keen eye for detail and a passion for creating
            engaging and user-friendly digital experiences. My journey into web development began with a fascination for
            how interactive websites are built, leading me to dive deep into **HTML**, **CSS**, and **JavaScript**.
          </p>
          <p className="mb-4">
            Over time, I honed my skills and embraced modern frameworks, with **React.js** becoming my tool of choice
            for building dynamic single-page applications. I love solving complex problems and transforming ideas into
            real-world solutions.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
            or enjoying a good book. I'm always eager to learn and grow, and I believe in continuous improvement in
            this ever-evolving tech landscape.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src="https://placehold.co/400x300/1E90FF/FFFFFF?text=Coding+Illustration"
            alt="About Me Illustration"
            className="rounded-lg shadow-xl max-w-full h-auto"
            style={{ borderColor: colors.accent }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;