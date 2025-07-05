const Header = () => {
  const colors = {
    primary: "#001427",
    accent: "#F4D58D",
    textLight: "#708D81",
  };

  return (
    <header
      className="shadow-md py-4 px-4 sticky top-0 z-50 rounded-b-lg"
      style={{ backgroundColor: colors.primary }}
    >
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Portfolio Owner Name/Logo */}
        <a
          href="#"
          className="text-3xl font-extrabold mb-4 md:mb-0"
          style={{ color: colors.accent }}
        >
          SHARJIL SIDDIQUI
        </a>
        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="transition-colors duration-300"
                style={{ color: colors.textLight }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
