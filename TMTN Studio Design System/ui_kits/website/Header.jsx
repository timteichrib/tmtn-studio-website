/* global React, Logo, Button */
function Header() {
  return (
    <header className="site-header">
      <div className="container inner">
        <a href="#" aria-label="TMTN Studio" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Logo size={22} />
        </a>
        <nav>
          <a href="#leistungen">Leistungen</a>
          <a href="#pakete">Pakete</a>
          <a href="#demo">Demo</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <Button kind="primary" size="sm" href="#kontakt" className="nav-cta">
          Beratung anfragen
        </Button>
      </div>
    </header>
  );
}

window.Header = Header;
