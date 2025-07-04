// This component represents the main introductory section of the portfolio.
// It usually contains a headline, a brief description, and a call to action.
const Hero = ({ colors }) => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] py-16 text-center md:text-left rounded-xl shadow-lg mb-12"
      style={{ backgroundColor: colors.primary, color: colors.textLight }}
    >
      <div className="md:w-1/2 p-8 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4" style={{ color: colors.accent }}>
          Hi, I'm Sharjil Siddiqui
        </h1>
        <p className="text-2xl mb-8">
          A passionate <span className="font-semibold" style={{ color: colors.secondary }}>Web Developer</span> building beautiful and functional web applications.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: colors.secondary, color: colors.textLight }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            style={{ borderColor: colors.accent, color: colors.accent }}
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="md:w-1/2 p-8 mt-8 md:mt-0 animate-fade-in-right">
        {/* Placeholder image for a developer profile */}
        <img
          src="/me.JPG"
          alt="Sharjil Siddiqui Profile"
          className="rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto object-cover shadow-2xl border-4"
          style={{ borderColor: colors.secondary }}
        />
      </div>
    </section>
  );
};

export default Hero;