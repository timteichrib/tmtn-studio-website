(function () {
    'use strict';

    // Footer year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Smooth-scroll the package CTAs and prefill the contact form
    document.querySelectorAll('[data-package]').forEach((el) => {
        el.addEventListener('click', () => {
            const select = document.getElementById('kontakt-paket');
            if (select) select.value = el.getAttribute('data-package');
        });
    });

    // ============ Demo generator ============
    // Branchen-spezifische Inhalte. Der Generator setzt aus den Eingaben des Nutzers
    // ein plausibles Website-Mockup zusammen, basierend auf Branche und Stil.
    const branchenContent = {
        handwerk: {
            navItems: ['Start', 'Leistungen', 'Referenzen', 'Kontakt'],
            heroTitle: (name, ort) => `Handwerk aus Leidenschaft – in ${ort} und Umgebung.`,
            heroSubFallback: 'Zuverlässige Arbeit, faire Preise und ein Team, das mitdenkt. Seit Jahren Ihr Ansprechpartner vor Ort.',
            cta: 'Jetzt Termin anfragen',
            features: [
                { t: 'Erfahrung', d: 'Geprüfte Qualität nach Meisterstandard.' },
                { t: 'Termintreu', d: 'Fester Zeitplan, klare Absprachen.' },
                { t: 'Vor Ort', d: 'Schnell und persönlich erreichbar.' }
            ]
        },
        gastronomie: {
            navItems: ['Start', 'Speisekarte', 'Reservierung', 'Kontakt'],
            heroTitle: (name, ort) => `Genießen in ${ort}. Frisch. Regional. Persönlich.`,
            heroSubFallback: 'Saisonale Küche aus regionalen Zutaten, mit Liebe zum Detail zubereitet. Wir freuen uns auf Sie.',
            cta: 'Tisch reservieren',
            features: [
                { t: 'Regional', d: 'Zutaten von Erzeugern aus der Umgebung.' },
                { t: 'Saisonal', d: 'Karte wechselt mit den Jahreszeiten.' },
                { t: 'Hausgemacht', d: 'Klassiker und Neues aus eigener Küche.' }
            ]
        },
        beratung: {
            navItems: ['Start', 'Leistungen', 'Über mich', 'Kontakt'],
            heroTitle: (name, ort) => `Klare Beratung. Konkrete Ergebnisse.`,
            heroSubFallback: 'Ich begleite Sie und Ihr Unternehmen mit Erfahrung, Struktur und einem offenen Ohr – persönlich aus dem Raum {ort}.',
            cta: 'Erstgespräch buchen',
            features: [
                { t: 'Persönlich', d: 'Ein fester Ansprechpartner, kein Callcenter.' },
                { t: 'Erfahren', d: 'Praxiswissen aus über 100 Mandaten.' },
                { t: 'Diskret', d: 'Vertraulich – schriftlich vereinbart.' }
            ]
        },
        praxis: {
            navItems: ['Start', 'Behandlung', 'Team', 'Termin'],
            heroTitle: (name, ort) => `Ihre Gesundheit hat Vorrang.`,
            heroSubFallback: 'Moderne Diagnostik, einfühlsame Behandlung und Zeit für Ihre Fragen. Willkommen in unserer Praxis in {ort}.',
            cta: 'Termin online buchen',
            features: [
                { t: 'Modern', d: 'Aktuelle Geräte und Verfahren.' },
                { t: 'Einfühlsam', d: 'Wir nehmen uns Zeit für Sie.' },
                { t: 'Zentral', d: 'Gut erreichbar mit ÖPNV und Parkplatz.' }
            ]
        },
        studio: {
            navItems: ['Start', 'Leistungen', 'Preise', 'Termin'],
            heroTitle: (name, ort) => `Wohlfühlen in ${ort}.`,
            heroSubFallback: 'Ihr Studio für sichtbare Ergebnisse und persönliche Betreuung. Wir nehmen uns Zeit – für Sie.',
            cta: 'Jetzt Termin sichern',
            features: [
                { t: 'Persönlich', d: 'Individuelle Beratung vor jedem Termin.' },
                { t: 'Hochwertig', d: 'Ausgewählte Produkte und Verfahren.' },
                { t: 'Flexibel', d: 'Termine auch abends und samstags.' }
            ]
        },
        dienstleistung: {
            navItems: ['Start', 'Leistungen', 'Über uns', 'Kontakt'],
            heroTitle: (name, ort) => `Zuverlässige Dienstleistung in ${ort}.`,
            heroSubFallback: 'Was wir versprechen, halten wir. Pünktlich, transparent und auf Ihre Bedürfnisse abgestimmt.',
            cta: 'Angebot anfordern',
            features: [
                { t: 'Pünktlich', d: 'Wir sind dann da, wenn wir es zusagen.' },
                { t: 'Transparent', d: 'Klare Preise, keine Überraschungen.' },
                { t: 'Erreichbar', d: 'Persönlicher Ansprechpartner per Telefon.' }
            ]
        },
        einzelhandel: {
            navItems: ['Start', 'Sortiment', 'Aktuelles', 'Kontakt'],
            heroTitle: (name, ort) => `Ihr Geschäft in ${ort}. Mit Charakter.`,
            heroSubFallback: 'Sorgfältig ausgewähltes Sortiment, persönliche Beratung und der besondere Service, den Sie online nicht finden.',
            cta: 'Im Laden vorbeischauen',
            features: [
                { t: 'Auswahl', d: 'Sortiment, das Sie hier nur bei uns finden.' },
                { t: 'Beratung', d: 'Wir kennen unsere Produkte – und Sie.' },
                { t: 'Vor Ort', d: 'Mitten in {ort} und für Sie da.' }
            ]
        },
        sonstiges: {
            navItems: ['Start', 'Über uns', 'Leistungen', 'Kontakt'],
            heroTitle: (name, ort) => `Willkommen bei ${name}.`,
            heroSubFallback: 'Persönlich, regional und auf Ihre Bedürfnisse zugeschnitten – aus {ort} für Sie.',
            cta: 'Kontakt aufnehmen',
            features: [
                { t: 'Persönlich', d: 'Ein Ansprechpartner für alles.' },
                { t: 'Regional', d: 'Verwurzelt in {ort} und Umgebung.' },
                { t: 'Verlässlich', d: 'Was wir versprechen, halten wir.' }
            ]
        }
    };

    const styleThemes = {
        warm: {
            bg: '#fffaf3',
            text: '#2a1f14',
            textMuted: '#6b5942',
            accent: '#b85d3a',
            heroBg: '#fcefe1',
            cardBg: '#ffffff',
            footerBg: '#f5e7d4',
            radius: '12px',
            align: 'left'
        },
        modern: {
            bg: '#ffffff',
            text: '#0f0f10',
            textMuted: '#5a5a5e',
            accent: '#0a0a0b',
            heroBg: '#f4f4f2',
            cardBg: '#ffffff',
            footerBg: '#0f0f10',
            radius: '4px',
            align: 'left',
            footerColor: '#bbb'
        },
        seriös: {
            bg: '#ffffff',
            text: '#15243d',
            textMuted: '#5a6a82',
            accent: '#1f3a5f',
            heroBg: '#eef2f8',
            cardBg: '#ffffff',
            footerBg: '#15243d',
            radius: '6px',
            align: 'left',
            footerColor: '#cdd5e2'
        }
    };

    const form = document.getElementById('demo-form');
    const preview = document.getElementById('demo-preview');

    if (form && preview) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = {
                name: document.getElementById('demo-name').value.trim(),
                branche: document.getElementById('demo-branche').value,
                ort: document.getElementById('demo-ort').value.trim(),
                beschreibung: document.getElementById('demo-beschreibung').value.trim(),
                style: form.querySelector('input[name="demo-style"]:checked').value
            };

            renderLoading();
            // Kurze "Generierungs"-Verzögerung, damit es sich wertig anfühlt
            setTimeout(() => renderPreview(data), 900);
        });
    }

    function renderLoading() {
        preview.innerHTML = `
            <div class="preview-loading">
                <div class="spinner"></div>
                <p>Vorschau wird erstellt …</p>
            </div>
        `;
    }

    function renderPreview(data) {
        const content = branchenContent[data.branche] || branchenContent.sonstiges;
        const theme = styleThemes[data.style] || styleThemes.warm;

        const heroTitle = content.heroTitle(escapeHtml(data.name), escapeHtml(data.ort));
        const heroSub = data.beschreibung
            ? escapeHtml(data.beschreibung)
            : content.heroSubFallback.replace('{ort}', escapeHtml(data.ort));

        const navHtml = content.navItems
            .map((item) => `<span>${item}</span>`)
            .join('');

        const featuresHtml = content.features
            .map((f) => `
                <div class="gp-feature">
                    <h3>${f.t}</h3>
                    <p>${f.d.replace('{ort}', escapeHtml(data.ort))}</p>
                </div>
            `)
            .join('');

        const footerColor = theme.footerColor || theme.textMuted;
        const slug = slugify(data.name);
        const url = `${slug}.de`;

        const styleVars = `
            --gp-bg: ${theme.bg};
            --gp-text: ${theme.text};
            --gp-text-muted: ${theme.textMuted};
            --gp-accent: ${theme.accent};
            --gp-hero-bg: ${theme.heroBg};
            --gp-card-bg: ${theme.cardBg};
            --gp-footer-bg: ${theme.footerBg};
            --gp-radius: ${theme.radius};
        `;

        const footerStyle = data.style === 'modern' || data.style === 'seriös'
            ? `style="color: ${footerColor};"`
            : '';

        preview.innerHTML = `
            <div class="preview-browser">
                <div class="preview-browser-dots"><span></span><span></span><span></span></div>
                <div class="preview-browser-url">${url}</div>
            </div>
            <div class="gp preview-result" style="${styleVars}">
                <div class="gp-nav">
                    <div class="gp-logo">${escapeHtml(data.name)}</div>
                    <div class="gp-nav-links">${navHtml}</div>
                </div>
                <div class="gp-hero">
                    <h1>${heroTitle}</h1>
                    <p>${heroSub}</p>
                    <a class="gp-cta">${content.cta}</a>
                </div>
                <div class="gp-features">
                    ${featuresHtml}
                </div>
                <div class="gp-footer" ${footerStyle}>
                    © ${new Date().getFullYear()} ${escapeHtml(data.name)} · ${escapeHtml(data.ort)} · Impressum · Datenschutz
                </div>
            </div>
        `;

        // Sanftes Einblenden
        const result = preview.querySelector('.preview-result');
        if (result) {
            result.style.opacity = '0';
            requestAnimationFrame(() => {
                result.style.opacity = '1';
            });
        }
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function slugify(str) {
        return String(str)
            .toLowerCase()
            .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
            .normalize('NFD')
            .replace(/[̀-ͯ]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .substring(0, 30) || 'ihr-unternehmen';
    }

    // ============ Contact form ============
    const contactForm = document.getElementById('contact-form');
    const contactFeedback = document.getElementById('contact-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Ohne Backend können wir nichts wirklich versenden.
            // Wir zeigen eine Erfolgsmeldung und öffnen optional den Mail-Client als Fallback.
            const formData = new FormData(contactForm);
            const subject = encodeURIComponent(`Anfrage von ${formData.get('name') || 'Website-Besucher'}`);
            const bodyLines = [
                `Name: ${formData.get('name') || ''}`,
                `Unternehmen: ${formData.get('firma') || ''}`,
                `E-Mail: ${formData.get('email') || ''}`,
                `Telefon: ${formData.get('telefon') || ''}`,
                `Interesse: ${formData.get('paket') || ''}`,
                ``,
                `Nachricht:`,
                `${formData.get('nachricht') || ''}`
            ];
            const body = encodeURIComponent(bodyLines.join('\n'));

            contactFeedback.className = 'form-feedback success';
            contactFeedback.innerHTML = `
                Danke für Ihre Anfrage! Wir melden uns innerhalb eines Werktags.
                Falls sich kein Bestätigungsfenster öffnet, schreiben Sie uns direkt an
                <a href="mailto:hallo@tmtn-studio.de?subject=${subject}&body=${body}">hallo@tmtn-studio.de</a>.
            `;

            contactForm.reset();
            contactFeedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }
})();
