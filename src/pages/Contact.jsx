// This component provides ways for visitors to contact the portfolio owner.
const Contact = ({ colors }) => {
  return (
    <section id="contact" className="py-16 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>
          Contact Me
        </h2>
        <p className="text-lg" style={{ color: colors.textDark }}>
          I'm always open to new opportunities and collaborations.
        </p>
      </div>
      <div className="max-w-3xl mx-auto px-8 md:px-16 text-center">
        <p className="text-xl mb-8" style={{ color: colors.textDark }}>
          Feel free to reach out via email or connect with me on LinkedIn and GitHub!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:afhaam.siddiqui@example.com" // Replace with your actual email
            className="px-6 py-3 rounded-full text-lg font-semibold shadow-md transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            style={{ backgroundColor: colors.secondary, color: colors.textLight }}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/afhaam-siddiqui" // Replace with your actual LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-lg font-semibold shadow-md transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            style={{ backgroundColor: colors.primary, color: colors.textLight }}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 0h24v24H0z"
                fill="none"
              ></path>
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.444-2.136 2.939v5.667H9.351V9h3.414v1.561h.045c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.073 0-1.139.923-2.063 2.063-2.063 1.14 0 2.064.924 2.064 2.063 0 1.147-.921 2.073-2.064 2.073zm1.756 13.019H3.58V9h3.513v11.452zM22.227 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.456c.98 0 1.772-.773 1.772-1.729V1.729C24 .774 23.207 0 22.227 0z"
              ></path>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/your-github-username" // Replace with your actual GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-lg font-semibold shadow-md transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            style={{ backgroundColor: colors.textDark, color: colors.textLight }}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.799 8.205 11.385.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.608-4.043-1.608-.546-1.387-1.334-1.758-1.334-1.758-1.09-.744.082-.729.082-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.49.997.108-.775.419-1.304.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.382 1.235-3.22-.12-.3-.534-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.652 1.652.239 2.876.12 3.176.77.838 1.232 1.91 1.232 3.22 0 4.61-2.806 5.624-5.485 5.923.43.37.817 1.109.817 2.23 0 1.606-.015 2.895-.015 3.284 0 .315.215.69.825.575C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12z"
              ></path>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;