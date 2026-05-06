/* global React, Button */
const PACKAGES = [
  {
    id: 'Starter', tag: 'Für den schnellen Einstieg', price: '50',
    items: [
      'One-Pager mit allen Kerninfos',
      'Kontaktformular',
      'Domain & Hosting inklusive',
      'SSL-Zertifikat',
      'Mobil optimiert',
      'Impressum & Datenschutz',
      '2 Änderungen pro Monat',
    ],
  },
  {
    id: 'Standard', tag: 'Für Unternehmen mit mehreren Leistungen', price: '120', featured: true,
    items: [
      'Bis zu 5 Unterseiten',
      'Leistungs- und Referenzseiten',
      'Google-Maps-Einbindung',
      'Lokale SEO-Optimierung',
      'Termin- oder Buchungsanfrage',
      'Google-Business-Profil-Pflege',
      '5 Änderungen pro Monat',
      'Monatlicher Performance-Bericht',
    ],
  },
  {
    id: 'Pro', tag: 'Für Wachstum und mehr Anfragen', price: '210',
    items: [
      'Bis zu 12 Unterseiten',
      'Blog oder Aktuelles-Bereich',
      'Online-Buchungssystem',
      'Erweiterte SEO-Strategie',
      'Newsletter-Anbindung',
      'Mehrsprachig möglich',
      'Unbegrenzte Änderungen',
      'Monatlicher Strategie-Call',
    ],
  },
];

function Packages({ onChoose }) {
  return (
    <section id="pakete" className="section alt">
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center' }}>
          <span className="numglyph" style={{ marginBottom: 12, display: 'inline-block' }}>02 — Pakete</span>
          <h2>Drei Pakete. Klare Preise.</h2>
          <p className="lead" style={{ margin: '12px auto 0' }}>
            Alle Preise pro Monat, zzgl. MwSt. Mindestlaufzeit 6 Monate, danach monatlich kündbar.
          </p>
        </div>

        <div className="packages">
          {PACKAGES.map((p, idx) => (
            <div key={p.id} className={`package${p.featured ? ' featured' : ''}`}>
              {p.featured && <div className="badge">Beliebt</div>}
              <div className="head">
                <h3>{p.id}</h3>
                <span className="numglyph">{String(idx + 1).padStart(2, '0')} / 03</span>
              </div>
              <p className="tag">{p.tag}</p>
              <div className="price-row">
                <span className="price">{p.price} €</span>
                <span className="period">/ Monat</span>
              </div>
              <ul>{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
              <Button
                kind={p.featured ? 'primary' : 'outline'}
                block
                onClick={() => onChoose && onChoose(p.id)}
                href="#kontakt"
              >
                {p.id} wählen
              </Button>
            </div>
          ))}
        </div>

        <p className="package-note">
          Alle Pakete enthalten: deutsche Server, tägliche Backups,
          persönlicher Ansprechpartner per E-Mail und Telefon.
        </p>
      </div>
    </section>
  );
}

window.Packages = Packages;
