/* global React, Button, Icon */
function Hero() {
  return (
    <section className="hero">
      <div className="grid-bg" aria-hidden="true" />
      <div className="container inner">
        <span className="eyebrow" style={{ marginBottom: 20 }}>Websites im Abo</span>
        <h1 style={{ marginTop: 16 }}>
          Eine Website,<br />
          <span className="accent">die für Sie arbeitet.</span>
        </h1>
        <p className="lead">
          TMTN Studio entwickelt, hostet und pflegt Ihre Website – als monatliches Abo.
          Speziell für Handwerker, Berater, Praxen, Studios und Einzelunternehmer in Deutschland.
        </p>
        <div className="cta">
          <Button kind="primary" href="#pakete">Pakete ansehen</Button>
          <Button kind="ghost" href="#demo">
            Kostenlose Demo erstellen <Icon name="arrowRight" size={16} />
          </Button>
        </div>
        <ul className="bullets">
          <li><Icon name="check" size={16} /> Startbereit in 7 Tagen</li>
          <li><Icon name="check" size={16} /> DSGVO-konform &amp; Made in Germany</li>
          <li><Icon name="check" size={16} /> Monatlich kündbar</li>
        </ul>
      </div>
    </section>
  );
}

window.Hero = Hero;
