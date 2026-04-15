const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {currentYear} <span>Nili Garala</span>. Crafted with ❤️ and React.
        </p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/nili-garala-480884234"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:niligarala@gmail.com">Email</a>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
