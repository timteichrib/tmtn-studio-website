/* global React, Icon */
const FEATURES = [
  { icon: 'settings-2',  title: 'Komplett eingerichtet', body: 'Domain, Hosting, SSL-Zertifikat, E-Mail-Adresse und Impressum – wir richten alles ein. Sie müssen sich um nichts kümmern.' },
  { icon: 'palette',     title: 'Individuelles Design',  body: 'Keine austauschbaren Templates. Jede Website wird auf Ihr Unternehmen, Ihre Zielgruppe und Ihre Region zugeschnitten.' },
  { icon: 'refresh-cw',  title: 'Laufende Pflege',       body: 'Texte ändern, Bilder austauschen, neue Angebote ergänzen – inklusive. Sie schreiben, wir setzen es um.' },
  { icon: 'smartphone',  title: 'Mobil zuerst',          body: 'Über 70 % Ihrer Besucher kommen vom Smartphone. Jede Seite wird zuerst für mobile Geräte entwickelt.' },
  { icon: 'search',      title: 'Lokal sichtbar',        body: 'Optimierung für Google-Suche und Google Maps. Damit Sie gefunden werden, wenn jemand in Ihrer Region nach Ihrer Leistung sucht.' },
  { icon: 'shield-check',title: 'Rechtssicher',          body: 'DSGVO-konform, mit korrektem Impressum, Datenschutzerklärung und Cookie-Banner – auf dem aktuellen Stand der Gesetzgebung.' },
];

function FeatureGrid() {
  return (
    <section id="leistungen" className="section">
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center' }}>
          <span className="numglyph" style={{ marginBottom: 12, display: 'inline-block' }}>01 — Leistungen</span>
          <h2>Was Sie bekommen</h2>
          <p className="lead" style={{ margin: '12px auto 0' }}>
            Eine Website allein reicht heute nicht. Sie brauchen einen Partner, der mitdenkt –
            technisch, gestalterisch und rechtlich.
          </p>
        </div>
        <div className="grid grid-3">
          {FEATURES.map((f, i) => (
            <div className="feature-card" key={f.title}>
              <div className="top">
                <div className="icon-tile"><Icon name={f.icon} /></div>
                <span className="numglyph">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.FeatureGrid = FeatureGrid;
