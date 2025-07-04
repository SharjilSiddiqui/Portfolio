// This component provides a simple footer for the portfolio, typically with copyright info.
const Footer = ({ colors }) => {
  return (
    <footer
      className="py-6 mt-12 text-center rounded-t-lg shadow-inner"
      style={{ backgroundColor: colors.primary, color: colors.textLight }}
    >
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Sharjil Siddiqui. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;