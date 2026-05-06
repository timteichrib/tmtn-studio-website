/* global React, Icon */
const { useState, useEffect } = React;

function ContactForm({ presetPackage }) {
  const [paket, setPaket] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (presetPackage) setPaket(presetPackage);
  }, [presetPackage]);

  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="section">
      <div className="container narrow">
        <div className="section-head" style={{ textAlign: 'center' }}>
          <span className="numglyph" style={{ marginBottom: 12, display: 'inline-block' }}>05 — Kontakt</span>
          <h2>Lassen Sie uns sprechen</h2>
          <p className="lead" style={{ margin: '12px auto 0' }}>
            Schreiben Sie uns – wir melden uns innerhalb eines Werktags zurück.
            Erstgespräch und Beratung sind kostenfrei.
          </p>
        </div>

        <form onSubmit={submit} style={{
          background: 'var(--paper-bright)', border: '1px solid var(--rule)',
          borderRadius: 'var(--r-1)', padding: 32,
        }}>
          <div className="form-row split">
            <div><label>Name *</label><input type="text" required /></div>
            <div><label>Unternehmen</label><input type="text" /></div>
          </div>
          <div className="form-row split">
            <div><label>E-Mail *</label><input type="email" required /></div>
            <div><label>Telefon</label><input type="tel" /></div>
          </div>
          <div className="form-row">
            <label>Interesse an</label>
            <select value={paket} onChange={(e)=>setPaket(e.target.value)}>
              <option value="">Bitte wählen</option>
              <option value="Starter">Starter (50 €/Monat)</option>
              <option value="Standard">Standard (120 €/Monat)</option>
              <option value="Pro">Pro (210 €/Monat)</option>
              <option value="Beratung">Erstmal nur Beratung</option>
            </select>
          </div>
          <div className="form-row">
            <label>Nachricht *</label>
            <textarea rows="5" required placeholder="Erzählen Sie uns kurz von Ihrem Unternehmen und was Sie sich von einer Website wünschen." />
          </div>
          <div className="form-row" style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <input type="checkbox" required style={{ width:'auto', marginTop: 4 }} />
            <span style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.5 }}>
              Ich habe die <a href="#">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu. *
            </span>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Anfrage senden</button>
          {submitted && (
            <div className="form-feedback success" style={{ display: 'block' }}>
              Danke für Ihre Anfrage! Wir melden uns innerhalb eines Werktags
              unter <a href="mailto:hallo@tmtn-studio.de">hallo@tmtn-studio.de</a>.
            </div>
          )}
        </form>

        <div className="contact-direct">
          <p style={{ margin: '4px 0' }}>Lieber direkt schreiben oder anrufen?</p>
          <p style={{ margin: '4px 0', display: 'inline-flex', gap: 18, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:hallo@tmtn-studio.de" style={{ display:'inline-flex', alignItems:'center', gap: 6 }}>
              <Icon name="mail" size={16} /> hallo@tmtn-studio.de
            </a>
            <span style={{ color: 'var(--ink-faint)' }}>·</span>
            <a href="tel:+4900000000000" style={{ display:'inline-flex', alignItems:'center', gap: 6 }}>
              <Icon name="phone" size={16} /> +49 000 000 00 00
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

window.ContactForm = ContactForm;
