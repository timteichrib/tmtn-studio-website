/* global React, Logo */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container inner">
        <div>
          <Logo light size={20} />
          <p className="footer-tag" style={{ marginTop: 12 }}>Websites im Abo für lokale Unternehmen.</p>
        </div>
        <nav className="col">
          <a href="#leistungen">Leistungen</a>
          <a href="#pakete">Pakete</a>
          <a href="#demo">Demo</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <nav className="col">
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
          <a href="#">AGB</a>
        </nav>
        <p className="copy">© {new Date().getFullYear()} TMTN Studio · Made in Germany</p>
      </div>
    </footer>
  );
}

window.Footer = Footer;
