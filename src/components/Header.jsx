// This component renders the navigation bar at the top of the portfolio.
// It includes the portfolio owner's name/logo and navigation links.
const Header = ({ colors }) => {
  return (
    <header
      className="bg-white shadow-md py-4 px-4 sticky top-0 z-50 rounded-b-lg"
      style={{ backgroundColor: colors.primary }}
    >
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Portfolio Owner Name/Logo */}
        <a href="#" className="text-3xl font-extrabold mb-4 md:mb-0" style={{ color: colors.accent }}>
          SHARJIL SIDDIQUI
        </a>
        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg">
          <li>
            <a
              href="#hero"
              className="hover:underline transition-colors duration-300"
              style={{ color: colors.textLight }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:underline transition-colors duration-300"
              style={{ color: colors.textLight }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:underline transition-colors duration-300"
              style={{ color: colors.textLight }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:underline transition-colors duration-300"
              style={{ color: colors.textLight }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:underline transition-colors duration-300"
              style={{ color: colors.textLight }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;