/* global React */
const { useState } = React;

const BRANCHEN = {
  handwerk:      { label: 'Handwerk',                    nav: ['Start', 'Leistungen', 'Referenzen', 'Kontakt'], hero: (n,o)=>`Handwerk aus Leidenschaft – in ${o} und Umgebung.`, cta: 'Jetzt Termin anfragen', f: [['Erfahrung','Geprüfte Qualität nach Meisterstandard.'],['Termintreu','Fester Zeitplan, klare Absprachen.'],['Vor Ort','Schnell und persönlich erreichbar.']] },
  gastronomie:   { label: 'Gastronomie',                 nav: ['Start', 'Speisekarte', 'Reservierung', 'Kontakt'], hero: (n,o)=>`Genießen in ${o}. Frisch. Regional. Persönlich.`, cta: 'Tisch reservieren', f: [['Regional','Zutaten von Erzeugern aus der Umgebung.'],['Saisonal','Karte wechselt mit den Jahreszeiten.'],['Hausgemacht','Klassiker und Neues aus eigener Küche.']] },
  beratung:      { label: 'Beratung & Coaching',         nav: ['Start', 'Leistungen', 'Über mich', 'Kontakt'], hero: ()=>'Klare Beratung. Konkrete Ergebnisse.', cta: 'Erstgespräch buchen', f: [['Persönlich','Ein fester Ansprechpartner, kein Callcenter.'],['Erfahren','Praxiswissen aus über 100 Mandaten.'],['Diskret','Vertraulich – schriftlich vereinbart.']] },
  praxis:        { label: 'Arzt- oder Heilpraxis',       nav: ['Start', 'Behandlung', 'Team', 'Termin'], hero: ()=>'Ihre Gesundheit hat Vorrang.', cta: 'Termin online buchen', f: [['Modern','Aktuelle Geräte und Verfahren.'],['Einfühlsam','Wir nehmen uns Zeit für Sie.'],['Zentral','Gut erreichbar mit ÖPNV und Parkplatz.']] },
  studio:        { label: 'Studio (Friseur, Kosmetik, Fitness)', nav: ['Start', 'Leistungen', 'Preise', 'Termin'], hero: (n,o)=>`Wohlfühlen in ${o}.`, cta: 'Jetzt Termin sichern', f: [['Persönlich','Individuelle Beratung vor jedem Termin.'],['Hochwertig','Ausgewählte Produkte und Verfahren.'],['Flexibel','Termine auch abends und samstags.']] },
  dienstleistung:{ label: 'Dienstleistung',              nav: ['Start', 'Leistungen', 'Über uns', 'Kontakt'], hero: (n,o)=>`Zuverlässige Dienstleistung in ${o}.`, cta: 'Angebot anfordern', f: [['Pünktlich','Wir sind dann da, wenn wir es zusagen.'],['Transparent','Klare Preise, keine Überraschungen.'],['Erreichbar','Persönlicher Ansprechpartner per Telefon.']] },
  einzelhandel:  { label: 'Einzelhandel',                nav: ['Start', 'Sortiment', 'Aktuelles', 'Kontakt'], hero: (n,o)=>`Ihr Geschäft in ${o}. Mit Charakter.`, cta: 'Im Laden vorbeischauen', f: [['Auswahl','Sortiment, das Sie nur bei uns finden.'],['Beratung','Wir kennen unsere Produkte – und Sie.'],['Vor Ort','Mitten im Ort und für Sie da.']] },
};

const THEMES = {
  warm:    { bg:'#fffaf3', text:'#2a1f14', muted:'#6b5942', accent:'#b85d3a', heroBg:'#fcefe1', cardBg:'#ffffff', footerBg:'#f5e7d4', radius:'8px',  display:"'Fraunces', serif" },
  modern:  { bg:'#ffffff', text:'#0f0f10', muted:'#5a5a5e', accent:'#0a0a0b', heroBg:'#f4f4f2', cardBg:'#ffffff', footerBg:'#0f0f10', radius:'2px',  display:"'Inter', sans-serif", footerColor:'#bbb' },
  serioes: { bg:'#ffffff', text:'#15243d', muted:'#5a6a82', accent:'#1f3a5f', heroBg:'#eef2f8', cardBg:'#ffffff', footerBg:'#15243d', radius:'4px',  display:"'Fraunces', serif", footerColor:'#cdd5e2' },
};

function slugify(s) {
  return String(s).toLowerCase()
    .replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').substring(0, 30) || 'ihr-unternehmen';
}

function DemoBuilder() {
  const [name, setName] = useState('');
  const [branche, setBranche] = useState('');
  const [ort, setOrt] = useState('');
  const [beschreibung, setBeschreibung] = useState('');
  const [stil, setStil] = useState('warm');
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  function generate(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const c = BRANCHEN[branche] || BRANCHEN.handwerk;
      const t = THEMES[stil] || THEMES.warm;
      setPreview({
        name, ort, branche: c, theme: t,
        sub: beschreibung || 'Persönlich, regional und auf Ihre Bedürfnisse zugeschnitten.',
      });
      setLoading(false);
    }, 700);
  }

  return (
    <section id="demo" className="section">
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center' }}>
          <span className="numglyph" style={{ marginBottom: 12, display: 'inline-block' }}>03 — Demo</span>
          <h2>Sehen Sie Ihre Website – bevor Sie buchen</h2>
          <p className="lead" style={{ margin: '12px auto 0' }}>
            Beschreiben Sie Ihr Unternehmen in wenigen Worten. Unser Generator erstellt sofort
            eine Vorschau, wie Ihre Website aussehen könnte.
          </p>
        </div>

        <div className="demo-wrapper">
          <form className="demo-form-card" onSubmit={generate}>
            <div className="form-row">
              <label>Unternehmensname</label>
              <input type="text" required value={name} onChange={(e)=>setName(e.target.value)} placeholder="z. B. Bäckerei Schneider" />
            </div>
            <div className="form-row split">
              <div>
                <label>Branche</label>
                <select required value={branche} onChange={(e)=>setBranche(e.target.value)}>
                  <option value="">Bitte wählen</option>
                  {Object.entries(BRANCHEN).map(([k,v]) => <option key={k} value={k}>{v.label}</option>)}
                </select>
              </div>
              <div>
                <label>Standort</label>
                <input type="text" required value={ort} onChange={(e)=>setOrt(e.target.value)} placeholder="z. B. München" />
              </div>
            </div>
            <div className="form-row">
              <label>Was bieten Sie an? (1–2 Sätze)</label>
              <textarea rows="3" value={beschreibung} onChange={(e)=>setBeschreibung(e.target.value)}
                placeholder="z. B. Handgemachte Backwaren aus regionalen Zutaten." />
            </div>
            <div className="form-row">
              <label>Stil</label>
              <div className="style-options">
                {[['warm','Warm & einladend'],['modern','Modern & klar'],['serioes','Seriös & vertraut']].map(([v,l]) => (
                  <label key={v} className="style-option">
                    <input type="radio" name="stil" checked={stil===v} onChange={()=>setStil(v)} />
                    <span>{l}</span>
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Vorschau erstellen</button>
            <p style={{ textAlign:'center', color:'var(--ink-soft)', fontSize:13, margin:'12px 0 0' }}>
              Kostenlos und unverbindlich. Keine E-Mail-Adresse nötig.
            </p>
          </form>

          <div className="demo-preview">
            {loading && (
              <div className="preview-loading">
                <div className="spinner" />
                <p>Vorschau wird erstellt …</p>
              </div>
            )}
            {!preview && !loading && (
              <div className="preview-placeholder">
                <div style={{ fontSize: 28, marginBottom: 14, color: 'var(--clay)' }}>↑</div>
                <p>Ihre Website-Vorschau erscheint hier.<br />Füllen Sie das Formular oben aus.</p>
              </div>
            )}
            {preview && !loading && <PreviewMock data={preview} />}
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewMock({ data }) {
  const { name, ort, branche, theme, sub } = data;
  const url = `${slugify(name || 'ihr-unternehmen')}.de`;
  const styleVars = {
    '--gp-bg': theme.bg, '--gp-text': theme.text, '--gp-text-muted': theme.muted,
    '--gp-accent': theme.accent, '--gp-hero-bg': theme.heroBg, '--gp-card-bg': theme.cardBg,
    '--gp-footer-bg': theme.footerBg, '--gp-radius': theme.radius, '--gp-display': theme.display,
  };
  const footerStyle = theme.footerColor ? { color: theme.footerColor } : {};
  return (
    <>
      <div className="preview-browser">
        <div className="dots"><span /><span /><span /></div>
        <div className="url">{url}</div>
      </div>
      <div className="gp" style={styleVars}>
        <div className="gp-nav">
          <div className="gp-logo">{name || 'Ihr Unternehmen'}</div>
          <div className="gp-nav-links">{branche.nav.map(l => <span key={l}>{l}</span>)}</div>
        </div>
        <div className="gp-hero">
          <h1>{branche.hero(name, ort || 'Ihrem Ort')}</h1>
          <p>{sub}</p>
          <a className="gp-cta">{branche.cta}</a>
        </div>
        <div className="gp-features">
          {branche.f.map(([t, d]) => (
            <div key={t} className="gp-feature">
              <h3>{t}</h3>
              <p>{d.replace('{ort}', ort || 'Ihrem Ort')}</p>
            </div>
          ))}
        </div>
        <div className="gp-footer" style={footerStyle}>
          © {new Date().getFullYear()} {name || 'Ihr Unternehmen'} · {ort || 'Ihrem Ort'} · Impressum · Datenschutz
        </div>
      </div>
    </>
  );
}

window.DemoBuilder = DemoBuilder;
