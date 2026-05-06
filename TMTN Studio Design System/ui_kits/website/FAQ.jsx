/* global React */
const FAQS = [
  ['Wie lange dauert es, bis meine Website online ist?', 'In der Regel 7 Werktage nach unserem ersten Gespräch. Komplexere Projekte (Pro-Paket mit Buchungssystem) können bis zu 14 Tage benötigen.'],
  ['Was passiert, wenn ich kündige?', 'Nach der Mindestlaufzeit von 6 Monaten können Sie monatlich zum Monatsende kündigen. Auf Wunsch übergeben wir Ihre Inhalte und unterstützen beim Umzug zu einem anderen Anbieter.'],
  ['Gehört die Domain mir?', 'Ja. Die Domain wird auf Sie registriert. Bei einer Kündigung können Sie die Domain mitnehmen.'],
  ['Wer schreibt die Texte?', 'Sie liefern uns die Kerninhalte (oder ein kurzes Gespräch mit uns). Wir formulieren daraus suchmaschinenfreundliche Texte und stimmen sie mit Ihnen ab.'],
  ['Kann ich später das Paket wechseln?', 'Jederzeit. Ein Upgrade ist sofort möglich, ein Downgrade zum nächsten Monatsende.'],
];

function FAQ() {
  return (
    <section className="section alt">
      <div className="container narrow">
        <div className="section-head" style={{ textAlign: 'center' }}>
          <span className="numglyph" style={{ marginBottom: 12, display: 'inline-block' }}>04 — Fragen</span>
          <h2>Häufige Fragen</h2>
        </div>
        <div className="faq">
          {FAQS.map(([q,a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

window.FAQ = FAQ;
