(function () {
    'use strict';

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    document.querySelectorAll('[data-package]').forEach((el) => {
        el.addEventListener('click', () => {
            const select = document.getElementById('kontakt-paket');
            if (select) select.value = el.getAttribute('data-package');
        });
    });

    const branchenContent = {
        handwerk: {
            eyebrow: 'Meisterbetrieb',
            navItems: ['Leistungen', 'Referenzen', 'Über uns', 'Kontakt'],
            navCta: 'Termin anfragen',
            heroTitle: (n, o) => `Handwerk aus Leidenschaft – <em>in ${o} und Umgebung.</em>`,
            heroSubFallback: 'Zuverlässige Arbeit, faire Preise und ein Team, das mitdenkt. Seit Jahren Ihr Ansprechpartner vor Ort.',
            cta: 'Termin anfragen',
            ctaGhost: 'Leistungen ansehen →',
            trust: ['Meisterbetrieb', 'Festpreis-Garantie', 'Notdienst 24/7'],
            aboutTitle: 'Werkstatt mit Geschichte.',
            aboutBody: 'Drei Generationen, dasselbe Versprechen: solide Arbeit, ehrliche Beratung und Termine, die halten. Wir kommen, schauen, sagen Ihnen ehrlich, was nötig ist – und was nicht.',
            quote: 'Sauber, pünktlich und der Preis stimmt am Ende auch noch.',
            quoteAttr: 'M. Becker · Kunde aus {ort}',
            features: [
                { t: 'Erfahrung', d: 'Geprüfte Qualität nach Meisterstandard.' },
                { t: 'Termintreu', d: 'Fester Zeitplan, klare Absprachen.' },
                { t: 'Vor Ort', d: 'Schnell und persönlich erreichbar.' }
            ]
        },
        gastronomie: {
            eyebrow: 'Restaurant',
            navItems: ['Speisekarte', 'Reservieren', 'Über uns', 'Kontakt'],
            navCta: 'Tisch reservieren',
            heroTitle: (n, o) => `Genießen in ${o}. <em>Frisch. Regional. Persönlich.</em>`,
            heroSubFallback: 'Saisonale Küche aus regionalen Zutaten, mit Liebe zum Detail zubereitet. Wir freuen uns auf Sie.',
            cta: 'Tisch reservieren',
            ctaGhost: 'Speisekarte ansehen →',
            trust: ['Mo–Sa geöffnet', 'Hausgemacht', 'Reservierung empfohlen'],
            aboutTitle: 'Aus der Region. Für die Region.',
            aboutBody: 'Unsere Karte wechselt mit der Saison. Was bei uns auf den Tisch kommt, kennt der Bauer mit Vornamen. Frischer geht es nicht.',
            quote: 'Das beste Essen weit und breit – und der Service erst.',
            quoteAttr: 'Stammgast aus {ort}',
            features: [
                { t: 'Regional', d: 'Zutaten von Erzeugern aus der Umgebung.' },
                { t: 'Saisonal', d: 'Karte wechselt mit den Jahreszeiten.' },
                { t: 'Hausgemacht', d: 'Klassiker und Neues aus eigener Küche.' }
            ]
        },
        beratung: {
            eyebrow: 'Beratung & Coaching',
            navItems: ['Leistungen', 'Methode', 'Über mich', 'Kontakt'],
            navCta: 'Erstgespräch',
            heroTitle: () => `Klare Beratung. <em>Konkrete Ergebnisse.</em>`,
            heroSubFallback: 'Ich begleite Sie und Ihr Unternehmen mit Erfahrung, Struktur und einem offenen Ohr – persönlich aus dem Raum {ort}.',
            cta: 'Erstgespräch buchen',
            ctaGhost: 'So arbeite ich →',
            trust: ['Erstgespräch kostenfrei', 'Persönlich', 'Diskret'],
            aboutTitle: 'Mehr Klarheit. Weniger Bauchgefühl.',
            aboutBody: 'In jedem Mandat gehen wir methodisch vor: zuhören, einordnen, gemeinsam einen Plan entwickeln. Sie wissen am Ende des ersten Gesprächs, woran Sie sind.',
            quote: 'Endlich jemand, der zuhört, bevor er Lösungen verkauft.',
            quoteAttr: 'Geschäftsführerin · Kundin aus {ort}',
            features: [
                { t: 'Persönlich', d: 'Ein fester Ansprechpartner, kein Callcenter.' },
                { t: 'Erfahren', d: 'Praxiswissen aus über 100 Mandaten.' },
                { t: 'Diskret', d: 'Vertraulich – schriftlich vereinbart.' }
            ]
        },
        praxis: {
            eyebrow: 'Praxis',
            navItems: ['Behandlung', 'Team', 'Termin', 'Kontakt'],
            navCta: 'Termin online',
            heroTitle: () => `Ihre Gesundheit <em>hat Vorrang.</em>`,
            heroSubFallback: 'Moderne Diagnostik, einfühlsame Behandlung und Zeit für Ihre Fragen. Willkommen in unserer Praxis in {ort}.',
            cta: 'Termin online buchen',
            ctaGhost: 'Unser Team kennenlernen →',
            trust: ['Alle Kassen', 'Barrierefrei', 'Termine auch abends'],
            aboutTitle: 'Zeit, die ankommt.',
            aboutBody: 'Bei uns sind Sie nicht „der Nächste". Wir nehmen uns Zeit, hören zu und erklären verständlich, was wir tun – und warum.',
            quote: 'Endlich eine Praxis, in der man sich nicht wie eine Nummer fühlt.',
            quoteAttr: 'Patientin aus {ort}',
            features: [
                { t: 'Modern', d: 'Aktuelle Geräte und Verfahren.' },
                { t: 'Einfühlsam', d: 'Wir nehmen uns Zeit für Sie.' },
                { t: 'Zentral', d: 'Gut erreichbar mit ÖPNV und Parkplatz.' }
            ]
        },
        studio: {
            eyebrow: 'Studio',
            navItems: ['Leistungen', 'Preise', 'Team', 'Termin'],
            navCta: 'Termin sichern',
            heroTitle: (n, o) => `Wohlfühlen <em>in ${o}.</em>`,
            heroSubFallback: 'Ihr Studio für sichtbare Ergebnisse und persönliche Betreuung. Wir nehmen uns Zeit – für Sie.',
            cta: 'Termin sichern',
            ctaGhost: 'Preise ansehen →',
            trust: ['Termine Mo–Sa', 'Auch abends', 'Online buchbar'],
            aboutTitle: 'Ihr Termin. Ihre Zeit.',
            aboutBody: 'Bei uns gibt es keine Akkord-Termine. Wir planen so, dass Sie nicht hetzen müssen – und wir nicht hetzen müssen. Das macht den Unterschied.',
            quote: 'Ich gehe immer entspannter raus, als ich reingekommen bin.',
            quoteAttr: 'Stammkundin aus {ort}',
            features: [
                { t: 'Persönlich', d: 'Individuelle Beratung vor jedem Termin.' },
                { t: 'Hochwertig', d: 'Ausgewählte Produkte und Verfahren.' },
                { t: 'Flexibel', d: 'Termine auch abends und samstags.' }
            ]
        },
        dienstleistung: {
            eyebrow: 'Dienstleistung',
            navItems: ['Leistungen', 'Über uns', 'Referenzen', 'Kontakt'],
            navCta: 'Angebot anfragen',
            heroTitle: (n, o) => `Zuverlässige Dienstleistung <em>in ${o}.</em>`,
            heroSubFallback: 'Was wir versprechen, halten wir. Pünktlich, transparent und auf Ihre Bedürfnisse abgestimmt.',
            cta: 'Angebot anfordern',
            ctaGhost: 'Wie wir arbeiten →',
            trust: ['Festpreise', 'Persönlicher Kontakt', 'Schnelle Reaktion'],
            aboutTitle: 'Verlässlich. Persönlich. Vor Ort.',
            aboutBody: 'Sie bekommen bei uns nicht eine Hotline, sondern eine feste Ansprechpartnerin. Das spart Zeit – Ihre und unsere.',
            quote: 'Wenn ich anrufe, geht jemand ran. Schon das ist heute selten.',
            quoteAttr: 'Kundin aus {ort}',
            features: [
                { t: 'Pünktlich', d: 'Wir sind dann da, wenn wir es zusagen.' },
                { t: 'Transparent', d: 'Klare Preise, keine Überraschungen.' },
                { t: 'Erreichbar', d: 'Persönlicher Ansprechpartner per Telefon.' }
            ]
        },
        einzelhandel: {
            eyebrow: 'Fachgeschäft',
            navItems: ['Sortiment', 'Aktuelles', 'Über uns', 'Kontakt'],
            navCta: 'Anfahrt',
            heroTitle: (n, o) => `Ihr Geschäft in ${o}. <em>Mit Charakter.</em>`,
            heroSubFallback: 'Sorgfältig ausgewähltes Sortiment, persönliche Beratung und der besondere Service, den Sie online nicht finden.',
            cta: 'Im Laden vorbeischauen',
            ctaGhost: 'Sortiment entdecken →',
            trust: ['Mo–Sa geöffnet', 'Persönliche Beratung', 'Click & Collect'],
            aboutTitle: 'Aussuchen, anfassen, mitnehmen.',
            aboutBody: 'Wir kennen jedes Stück in unserem Laden. Wenn etwas nicht passt, finden wir mit Ihnen zusammen, was passt. Online geht das nicht.',
            quote: 'Hier wird man noch beraten, statt nur abkassiert.',
            quoteAttr: 'Stammkunde aus {ort}',
            features: [
                { t: 'Auswahl', d: 'Sortiment, das Sie hier nur bei uns finden.' },
                { t: 'Beratung', d: 'Wir kennen unsere Produkte – und Sie.' },
                { t: 'Vor Ort', d: 'Mitten in {ort} und für Sie da.' }
            ]
        },
        sonstiges: {
            eyebrow: 'Aus der Region',
            navItems: ['Über uns', 'Leistungen', 'Aktuelles', 'Kontakt'],
            navCta: 'Kontakt',
            heroTitle: (n) => `Willkommen <em>bei ${n}.</em>`,
            heroSubFallback: 'Persönlich, regional und auf Ihre Bedürfnisse zugeschnitten – aus {ort} für Sie.',
            cta: 'Kontakt aufnehmen',
            ctaGhost: 'Mehr erfahren →',
            trust: ['Persönlich', 'Aus {ort}', 'Verlässlich'],
            aboutTitle: 'Klein. Persönlich. Verwurzelt.',
            aboutBody: 'Wir sind hier zuhause. Was wir tun, machen wir für Menschen, die wir kennen – und die uns kennen lernen sollen.',
            quote: 'Genau die persönliche Note, die heute oft fehlt.',
            quoteAttr: 'Kundin aus {ort}',
            features: [
                { t: 'Persönlich', d: 'Ein Ansprechpartner für alles.' },
                { t: 'Regional', d: 'Verwurzelt in {ort} und Umgebung.' },
                { t: 'Verlässlich', d: 'Was wir versprechen, halten wir.' }
            ]
        }
    };

    // Werkstatt-aligned themes for the live preview
    const styleThemes = {
        warm: {
            bg:'#fffaf3', text:'#2a1f14', textMuted:'#6b5942',
            accent:'#b85d3a', accentSoft:'#f2dccb',
            heroBg:'#fcefe1', cardBg:'#ffffff', footerBg:'#f5e7d4',
            rule:'rgba(42,31,20,.10)', radius:'4px',
            display:"'Fraunces', Georgia, serif", body:"'Inter', sans-serif"
        },
        modern: {
            bg:'#ffffff', text:'#0f0f10', textMuted:'#6a6a6e',
            accent:'#0f0f10', accentSoft:'#ececea',
            heroBg:'#f4f4f2', cardBg:'#ffffff', footerBg:'#0f0f10', footerText:'#bbb',
            rule:'rgba(0,0,0,.10)', radius:'2px',
            display:"'Inter', sans-serif", body:"'Inter', sans-serif"
        },
        'seriös': {
            bg:'#ffffff', text:'#15243d', textMuted:'#5a6a82',
            accent:'#1f3a5f', accentSoft:'#e3eaf3',
            heroBg:'#eef2f8', cardBg:'#ffffff', footerBg:'#15243d', footerText:'#cdd5e2',
            rule:'rgba(21,36,61,.10)', radius:'4px',
            display:"'Fraunces', Georgia, serif", body:"'Inter', sans-serif"
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
            setTimeout(() => renderPreview(data), 800);
        });
    }

    function renderLoading() {
        preview.innerHTML = '<div class="preview-loading"><div class="spinner"></div><p>Vorschau wird erstellt …</p></div>';
    }

    function renderPreview(data) {
        const content = branchenContent[data.branche] || branchenContent.sonstiges;
        const theme = styleThemes[data.style] || styleThemes.warm;

        const ortEsc = escapeHtml(data.ort);
        const nameEsc = escapeHtml(data.name);
        const fillOrt = (s) => s.replace(/\{ort\}/g, ortEsc);

        const heroTitle = content.heroTitle(nameEsc, ortEsc);
        const heroSub = data.beschreibung
            ? escapeHtml(data.beschreibung)
            : fillOrt(content.heroSubFallback);

        const navHtml = content.navItems.map((i) => `<span>${i}</span>`).join('');
        const trustHtml = content.trust.map((t) =>
            `<span><span class="gp-trust-dot"></span>${fillOrt(t)}</span>`
        ).join('');
        const featuresHtml = content.features.map((f, i) => `
            <div class="gp-feature">
                <span class="gp-feature-num">0${i + 1}</span>
                <h3>${f.t}</h3>
                <p>${fillOrt(f.d)}</p>
            </div>`).join('');

        const url = `${slugify(data.name)}.de`;
        const footerText = theme.footerText || theme.textMuted;

        const styleVars = [
            `--gp-bg:${theme.bg}`,
            `--gp-text:${theme.text}`,
            `--gp-text-muted:${theme.textMuted}`,
            `--gp-accent:${theme.accent}`,
            `--gp-accent-soft:${theme.accentSoft}`,
            `--gp-hero-bg:${theme.heroBg}`,
            `--gp-card-bg:${theme.cardBg}`,
            `--gp-footer-bg:${theme.footerBg}`,
            `--gp-footer-text:${footerText}`,
            `--gp-rule:${theme.rule}`,
            `--gp-radius:${theme.radius}`,
            `--gp-display:${theme.display}`,
            `--gp-body:${theme.body}`
        ].join(';');

        preview.innerHTML = `
            <div class="preview-browser">
                <div class="preview-browser-dots"><span></span><span></span><span></span></div>
                <div class="preview-browser-url">${url}</div>
            </div>
            <div class="gp preview-result" style="${styleVars}">
                <div class="gp-nav">
                    <div class="gp-logo">${nameEsc}<span class="gp-logo-dot"></span></div>
                    <div class="gp-nav-links">${navHtml}</div>
                    <a class="gp-nav-cta">${content.navCta}</a>
                </div>
                <div class="gp-hero">
                    <span class="gp-eyebrow">${content.eyebrow} · ${ortEsc}</span>
                    <h1>${heroTitle}</h1>
                    <p>${heroSub}</p>
                    <div class="gp-hero-cta">
                        <a class="gp-cta">${content.cta}</a>
                        <a class="gp-cta-ghost">${content.ctaGhost}</a>
                    </div>
                    <div class="gp-trust">${trustHtml}</div>
                </div>
                <div class="gp-features">${featuresHtml}</div>
                <div class="gp-about">
                    <div>
                        <span class="gp-numglyph">02 — Über uns</span>
                        <h2>${content.aboutTitle}</h2>
                        <p>${fillOrt(content.aboutBody)}</p>
                    </div>
                    <blockquote class="gp-quote">
                        „${content.quote}"
                        <span class="gp-quote-attr">— ${fillOrt(content.quoteAttr)}</span>
                    </blockquote>
                </div>
                <div class="gp-footer">
                    <span>© ${new Date().getFullYear()} ${nameEsc} · ${ortEsc}</span>
                    <span class="gp-footer-links"><span>Impressum</span><span>Datenschutz</span><span>Kontakt</span></span>
                </div>
            </div>`;

        const result = preview.querySelector('.preview-result');
        if (result) {
            result.style.opacity = '0';
            requestAnimationFrame(() => { result.style.opacity = '1'; });
        }
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    }

    function slugify(str) {
        return String(str).toLowerCase()
            .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
            .substring(0, 30) || 'ihr-unternehmen';
    }

    const contactForm = document.getElementById('contact-form');
    const contactFeedback = document.getElementById('contact-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
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
        });
    }
})();
