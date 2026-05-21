/* TMTN Studio — site behaviour
   - Year stamp
   - Package-CTA → contact dropdown auto-select
   - Mobile nav toggle
   - Scroll reveal
   - Contact form: real submit to Formspree (with mailto fallback)
*/
(function () {
    'use strict';

    /* Year stamp ---------------------------------------------------------- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* Package CTA → form prefill ----------------------------------------- */
    document.querySelectorAll('[data-package]').forEach((el) => {
        el.addEventListener('click', () => {
            const select = document.getElementById('kontakt-paket');
            if (select) select.value = el.getAttribute('data-package');
        });
    });

    /* Mobile nav --------------------------------------------------------- */
    const navToggle = document.getElementById('nav-toggle');
    const primaryNav = document.getElementById('primary-nav');
    if (navToggle && primaryNav) {
        const closeNav = () => {
            primaryNav.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Menü öffnen');
        };
        navToggle.addEventListener('click', () => {
            const open = primaryNav.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', String(open));
            navToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
        });
        primaryNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeNav));
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
    }

    /* Scroll reveal ------------------------------------------------------ */
    const revealSelectors = [
        '.section-head', '.deliverable', '.problem', '.package',
        '.transparency-item', '.faq details', '.hero-bullets',
        '.contact-form', '.step', '.branche', '.compare-col',
        '.compare-table', '.person'
    ];
    const revealEls = document.querySelectorAll(revealSelectors.join(','));
    revealEls.forEach((el) => el.setAttribute('data-reveal', ''));
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
        revealEls.forEach((el) => io.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add('is-visible'));
    }

    /* Contact form — real submit ----------------------------------------- */
    const contactForm = document.getElementById('contact-form');
    const contactFeedback = document.getElementById('contact-feedback');

    if (contactForm && contactFeedback) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);

            // Honeypot
            if ((formData.get('_gotcha') || '').trim() !== '') {
                contactFeedback.className = 'form-feedback success';
                contactFeedback.textContent = 'Danke für Ihre Anfrage!';
                return;
            }

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.textContent : '';
            if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Wird gesendet …'; }
            contactFeedback.className = 'form-feedback';
            contactFeedback.textContent = '';

            const endpoint = contactForm.getAttribute('action');
            const usesFormspree = endpoint && endpoint.includes('formspree.io') && !endpoint.includes('YOUR_FORM_ID');

            try {
                if (usesFormspree) {
                    const res = await fetch(endpoint, {
                        method: 'POST',
                        body: formData,
                        headers: { 'Accept': 'application/json' }
                    });
                    if (!res.ok) throw new Error('Network response was not ok');
                    contactFeedback.className = 'form-feedback success';
                    contactFeedback.textContent = 'Danke für Ihre Anfrage! Wir melden uns innerhalb eines Werktags.';
                    contactForm.reset();
                } else {
                    // Fallback: mailto
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
                    window.location.href = `mailto:hallo@tmtn-studio.de?subject=${subject}&body=${body}`;
                    contactFeedback.className = 'form-feedback success';
                    contactFeedback.innerHTML = 'Ihr E-Mail-Programm sollte sich öffnen. Falls nicht, schreiben Sie bitte direkt an <a href="mailto:hallo@tmtn-studio.de">hallo@tmtn-studio.de</a>.';
                }
            } catch (err) {
                contactFeedback.className = 'form-feedback error';
                contactFeedback.innerHTML = 'Beim Senden ist etwas schiefgelaufen. Bitte schreiben Sie uns direkt an <a href="mailto:hallo@tmtn-studio.de">hallo@tmtn-studio.de</a>.';
            } finally {
                if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalText; }
            }
        });
    }
})();


/* ===== branchen.js ===== */
/* Branchen-Showcase — single auto-playing preview, Apple-style crossfade */
(function () {
    'use strict';
    const root = document.getElementById('branchen-showcase');
    if (!root) return;

    const branchen = [
        {
            tag: 'Handwerk',
            name: 'Bäcker, Maler, Schlosser & Co.',
            desc: 'Klare Leistungen, ehrliche Preise und schnelle Erreichbarkeit. Das, was Ihre Kunden lokal suchen — sofort sichtbar.',
            mock: {
                bg: '#F0E6D6', accent: '#B85D3A', ink: '#2A1F14', muted: '#7A5A3A',
                rule: 'rgba(42,31,20,0.10)',
                logo: 'Maler Becker',
                url: 'maler-becker.de',
                navItems: ['Leistungen', 'Referenzen', 'Über uns', 'Kontakt'],
                navCta: 'Termin',
                eyebrow: 'MEISTERBETRIEB · MÜNCHEN',
                titleA: 'Handwerk aus Leidenschaft',
                titleEm: '— seit 1987.',
                sub: 'Maler-, Lackier- und Putzarbeiten für Privat und Gewerbe. Festpreise, Termintreue und ein Team, das nach sich aufräumt.',
                cta: 'Termin anfragen',
                ctaGhost: 'Leistungen ansehen →',
                features: [
                    { num: '01', t: 'Festpreise', d: 'Schriftlich vor Auftragsbeginn.' },
                    { num: '02', t: 'Termintreue', d: 'Pünktlich, sauber, planbar.' },
                    { num: '03', t: 'Vor Ort', d: 'München & Umland.' }
                ]
            }
        },
        {
            tag: 'Praxen',
            name: 'Arzt-, Zahn- & Heilpraxen',
            desc: 'Online-Termin, klare Sprechzeiten, barrierefrei dargestellt. Patienten finden alles, was sie vor dem Anruf wissen müssen.',
            mock: {
                bg: '#EEF2F8', accent: '#1F3A5F', ink: '#15243D', muted: '#5A6A82',
                rule: 'rgba(21,36,61,0.10)',
                logo: 'Praxis Dr. König',
                url: 'praxis-koenig-berlin.de',
                navItems: ['Behandlung', 'Team', 'Termin', 'Kontakt'],
                navCta: 'Termin online',
                eyebrow: 'PRAXIS DR. KÖNIG · BERLIN',
                titleA: 'Ihre Gesundheit ',
                titleEm: 'hat Vorrang.',
                sub: 'Moderne Diagnostik, einfühlsame Behandlung und Zeit für Ihre Fragen. Termine auch abends — alle Kassen, barrierefrei.',
                cta: 'Termin online buchen',
                ctaGhost: 'Unser Team kennenlernen →',
                features: [
                    { num: '01', t: 'Alle Kassen', d: 'Gesetzlich und privat.' },
                    { num: '02', t: 'Barrierefrei', d: 'EG-Zugang, breite Türen.' },
                    { num: '03', t: 'Abendtermine', d: 'Di & Do bis 20 Uhr.' }
                ]
            }
        },
        {
            tag: 'Gastronomie',
            name: 'Restaurants, Cafés & Bistros',
            desc: 'Speisekarte, Öffnungszeiten und Reservierung dort, wo Gäste sie suchen. Auch am Handy in unter zwei Sekunden geladen.',
            mock: {
                bg: '#F5E4D1', accent: '#9C3A1F', ink: '#3A1F0F', muted: '#7A4A2F',
                rule: 'rgba(58,31,15,0.10)',
                logo: 'Trattoria Luna',
                url: 'trattoria-luna-koeln.de',
                navItems: ['Speisekarte', 'Reservieren', 'Über uns', 'Kontakt'],
                navCta: 'Reservieren',
                eyebrow: 'TRATTORIA LUNA · KÖLN',
                titleA: 'Frisch. Regional. ',
                titleEm: 'Persönlich.',
                sub: 'Saisonale Küche aus regionalen Zutaten, mit Liebe zum Detail zubereitet. Wir freuen uns auf Sie — Mo bis Sa ab 17 Uhr.',
                cta: 'Tisch reservieren',
                ctaGhost: 'Speisekarte ansehen →',
                features: [
                    { num: '01', t: 'Regional', d: 'Erzeuger aus dem Bergischen.' },
                    { num: '02', t: 'Saisonal', d: 'Karte wechselt mit dem Jahr.' },
                    { num: '03', t: 'Hausgemacht', d: 'Pasta, Brot, Dolci.' }
                ]
            }
        },
        {
            tag: 'Dienstleister',
            name: 'Beratung, IT, Reinigung',
            desc: 'Klare Leistungen, fester Ansprechpartner, schnelle Antwort. Vertrauen entscheidet — und das beginnt bei der Website.',
            mock: {
                bg: '#EFEFEC', accent: '#0F0F10', ink: '#0F0F10', muted: '#6A6A6E',
                rule: 'rgba(0,0,0,0.10)',
                logo: 'Kaufmann Beratung',
                url: 'kaufmann-beratung.de',
                navItems: ['Leistungen', 'Methode', 'Über mich', 'Kontakt'],
                navCta: 'Erstgespräch',
                eyebrow: 'KAUFMANN BERATUNG · STUTTGART',
                titleA: 'Klare Beratung. ',
                titleEm: 'Konkrete Ergebnisse.',
                sub: 'Ich begleite Sie und Ihr Unternehmen mit Erfahrung, Struktur und einem offenen Ohr — persönlich aus Stuttgart.',
                cta: 'Erstgespräch buchen',
                ctaGhost: 'So arbeite ich →',
                features: [
                    { num: '01', t: 'Persönlich', d: 'Ein fester Ansprechpartner.' },
                    { num: '02', t: 'Erfahren', d: 'Über 100 Mandate.' },
                    { num: '03', t: 'Diskret', d: 'Vertraulich vereinbart.' }
                ]
            }
        }
    ];

    function esc(str) {
        return String(str)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    }

    function frameHtml(b, idx) {
        const m = b.mock;
        const cssVars = [
            `--mock-bg:${m.bg}`,
            `--mock-accent:${m.accent}`,
            `--mock-ink:${m.ink}`,
            `--mock-muted:${m.muted}`,
            `--mock-rule:${m.rule}`
        ].join(';');
        const nav = m.navItems.map((i) => `<span>${esc(i)}</span>`).join('');
        const feats = m.features.map((f) => `
            <div class="bf-feature">
                <span class="bf-feature-num">${esc(f.num)}</span>
                <h4>${esc(f.t)}</h4>
                <p>${esc(f.d)}</p>
            </div>`).join('');
        return `
            <article class="bf" data-idx="${idx}" style="${cssVars}" aria-hidden="${idx === 0 ? 'false' : 'true'}">
                <div class="bf-chrome">
                    <span class="bf-dot"></span><span class="bf-dot"></span><span class="bf-dot"></span>
                    <span class="bf-url">${esc(m.url)}</span>
                </div>
                <div class="bf-screen">
                    <div class="bf-nav">
                        <span class="bf-logo">${esc(m.logo)}<span class="bf-logo-dot"></span></span>
                        <div class="bf-nav-links">${nav}</div>
                        <span class="bf-nav-cta">${esc(m.navCta)}</span>
                    </div>
                    <div class="bf-hero">
                        <span class="bf-eyebrow">${esc(m.eyebrow)}</span>
                        <h2 class="bf-title">${esc(m.titleA)}<em>${esc(m.titleEm)}</em></h2>
                        <p class="bf-sub">${esc(m.sub)}</p>
                        <div class="bf-cta-row">
                            <span class="bf-cta">${esc(m.cta)}</span>
                            <span class="bf-cta-ghost">${esc(m.ctaGhost)}</span>
                        </div>
                    </div>
                    <div class="bf-features">${feats}</div>
                </div>
            </article>`;
    }

    function infoHtml(b, idx) {
        return '';  // info now lives inside .branchen-item
    }

    root.innerHTML = `
        <ol class="branchen-feed" role="tablist" aria-label="Branchen-Beispiele">
            ${branchen.map((b, i) => `
                <li>
                    <button class="branchen-item${i === 0 ? ' is-active' : ''}" data-idx="${i}" role="tab" aria-selected="${i === 0}">
                        <span class="branchen-item-progress" aria-hidden="true"><span class="branchen-item-progress-fill"></span></span>
                        <span class="branche-tag">${esc(b.tag)}</span>
                        <h3>${esc(b.name)}</h3>
                        <p class="branchen-item-desc">${esc(b.desc)}</p>
                    </button>
                </li>
            `).join('')}
        </ol>
        <div class="branchen-stage" aria-roledescription="Beispielentwurf">
            ${branchen.map(frameHtml).join('')}
        </div>`;

    /* ---- Crossfade auto-rotation ---- */
    const frames = root.querySelectorAll('.bf');
    const items = root.querySelectorAll('.branchen-item');
    const progressFills = root.querySelectorAll('.branchen-item-progress-fill');

    let current = 0;
    let timer = null;
    let restartGuard = false;
    const HOLD_MS = 5500;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let paused = false;
    let inView = false;

    // First active state already set in HTML; ensure visuals match
    frames[0].classList.add('is-active');

    function go(next) {
        if (next === current) return;
        frames[current].classList.remove('is-active');
        frames[current].setAttribute('aria-hidden', 'true');
        items[current].classList.remove('is-active');
        items[current].setAttribute('aria-selected', 'false');

        current = next;

        frames[current].classList.add('is-active');
        frames[current].setAttribute('aria-hidden', 'false');
        items[current].classList.add('is-active');
        items[current].setAttribute('aria-selected', 'true');

        restartProgress();
    }

    function restartProgress() {
        progressFills.forEach((f, i) => {
            f.style.transition = 'none';
            f.style.transform = 'scaleX(0)';
        });
        const fill = progressFills[current];
        if (!fill) return;
        // force reflow then animate active one
        void fill.offsetWidth;
        if (!reducedMotion && !paused && inView) {
            fill.style.transition = `transform ${HOLD_MS}ms linear`;
            fill.style.transform = 'scaleX(1)';
        }
    }

    function scheduleNext() {
        clearTimeout(timer);
        if (reducedMotion || paused || !inView) return;
        timer = setTimeout(() => {
            go((current + 1) % branchen.length);
            scheduleNext();
        }, HOLD_MS);
    }

    function start() {
        if (restartGuard) return;
        inView = true;
        restartProgress();
        scheduleNext();
    }
    function stop() {
        inView = false;
        clearTimeout(timer);
        progressFills.forEach((f) => { f.style.transition = 'none'; });
    }

    // Item clicks: jump and pause briefly, then resume
    items.forEach((btn) => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-idx'), 10);
            paused = true;
            clearTimeout(timer);
            go(idx);
            // resume after a hand-holding pause
            clearTimeout(restartGuard);
            restartGuard = setTimeout(() => {
                paused = false;
                restartProgress();
                scheduleNext();
            }, 9000);
        });
    });

    // Keyboard navigation in tablist
    items.forEach((btn) => {
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                items[(current + 1) % items.length].click();
                items[(current + 1) % items.length].focus();
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                items[(current - 1 + items.length) % items.length].click();
                items[(current - 1 + items.length) % items.length].focus();
            }
        });
    });

    // Pause on hover
    root.addEventListener('mouseenter', () => {
        paused = true;
        clearTimeout(timer);
        progressFills.forEach((f) => { f.style.transition = 'none'; });
    });
    root.addEventListener('mouseleave', () => {
        paused = false;
        if (inView) { restartProgress(); scheduleNext(); }
    });

    // Pause when out of viewport
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) start();
                else stop();
            });
        }, { threshold: 0.3 });
        io.observe(root);
    } else {
        start();
    }
})();


/* ===== ablauf-roadmap.js ===== */
/* IntersectionObserver-driven step activation + timestamp-throttled scroll for the fill bar */
(function () {
    'use strict';
    const section = document.querySelector('.ablauf-section');
    if (!section) return;

    const steps = [...section.querySelectorAll('.roadmap-step')];
    const fill = section.querySelector('.roadmap-track-fill');
    const currentLabel = document.getElementById('ablauf-current');
    if (steps.length === 0) return;

    const mqMobile = window.matchMedia('(max-width: 900px)');
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mqMobile.matches || mqReduced.matches) {
        steps.forEach((s) => s.classList.add('is-complete'));
        if (fill) fill.style.height = '100%';
        return;
    }

    let activeIdx = 0;
    function setActive(idx) {
        if (idx === activeIdx) return;
        activeIdx = idx;
        steps.forEach((step, i) => {
            step.classList.toggle('is-active', i === idx);
            step.classList.toggle('is-complete', i < idx);
        });
        if (currentLabel) currentLabel.textContent = String(idx + 1).padStart(2, '0');
    }

    // IntersectionObserver with a thin band at viewport center: only steps crossing
    // the 40–55% band are considered "intersecting"; we pick the one closest to 45%.
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(() => {
            const vh = window.innerHeight;
            const anchor = vh * 0.45;
            let best = 0;
            let bestDist = Infinity;
            steps.forEach((step, i) => {
                const r = step.getBoundingClientRect();
                // Skip steps that are entirely above the anchor — they are "completed", not active
                if (r.bottom < anchor - 100) {
                    // It's above the anchor — could be the active one if it's the last one above
                    const dist = anchor - (r.top + r.height / 2);
                    if (dist < bestDist) { bestDist = dist; best = i; }
                    return;
                }
                if (r.top > anchor + 100) return; // Entirely below — skip
                // Intersecting the band
                const center = r.top + r.height / 2;
                const dist = Math.abs(center - anchor);
                if (dist < bestDist) { bestDist = dist; best = i; }
            });
            setActive(best);
        }, {
            // Reduce root to a thin band around 45% of viewport
            rootMargin: '-35% 0px -45% 0px',
            threshold: [0, 0.25, 0.5, 0.75, 1]
        });
        steps.forEach((s) => io.observe(s));
    }

    function updateFill() {
        const firstRect = steps[0].getBoundingClientRect();
        const lastRect = steps[steps.length - 1].getBoundingClientRect();
        const total = lastRect.top - firstRect.top;
        if (total <= 0) return;
        const vh = window.innerHeight;
        const anchor = vh * 0.45;
        const scrolled = Math.max(0, Math.min(total, anchor - firstRect.top));
        const pct = (scrolled / total) * 100;
        if (fill) fill.style.height = pct + '%';

        // Also recompute active step (belt-and-suspenders in case IO is laggy or unsupported)
        let best = 0;
        let bestDist = Infinity;
        steps.forEach((step, i) => {
            const r = step.getBoundingClientRect();
            const center = r.top + r.height / 2;
            const dist = Math.abs(center - anchor);
            if (dist < bestDist) { bestDist = dist; best = i; }
        });
        setActive(best);
    }

    // Timestamp-throttled scroll — does NOT depend on rAF
    let lastUpdate = 0;
    function onScroll() {
        const now = Date.now();
        if (now - lastUpdate < 16) return;
        lastUpdate = now;
        updateFill();
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateFill, { passive: true });

    // Initial paint
    updateFill();
})();


/* ===== hero-parallax.js ===== */
/* Slow background parallax on the hero — timestamp-throttled, no rAF dependency */
(function () {
    'use strict';
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const layer = hero.querySelector('.hero-grid-layer');
    const glyph = hero.querySelector('.hero-parallax-glyph');
    if (!layer && !glyph) return;

    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mqReduced.matches) return;

    function update() {
        const rect = hero.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
        const scrolled = Math.max(0, -rect.top);
        if (layer) layer.style.transform = `translate3d(0, ${scrolled * 0.35}px, 0)`;
        if (glyph) glyph.style.transform = `translate3d(0, ${scrolled * 0.18}px, 0)`;
    }

    let lastUpdate = 0;
    function onScroll() {
        const now = Date.now();
        if (now - lastUpdate < 16) return;
        lastUpdate = now;
        update();
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
})();


/* ===== tweaks.js ===== */
/* Tweaks Panel — Hero-Trustbar-Variante & Vergleichstabelle-Variante.
   Hidden by default. Activated via parent postMessage on this site, or via ?tweaks=1. */
(function () {
    'use strict';

    const defaults = window.__tweakDefaults || { heroVariant: 'inline' };
    let state = { ...defaults };

    function applyState() {
        // Hero trust variant: inline (default, below hero) | top (above hero, dark) | banner (own large strip)
        const trustbar = document.querySelector('.trustbar');
        const hero = document.querySelector('.hero');
        if (trustbar && hero) {
            trustbar.setAttribute('data-trust-variant', state.heroVariant);
            // Reposition in DOM for 'top' variant
            if (state.heroVariant === 'top') {
                if (trustbar.previousElementSibling !== null || hero.previousElementSibling !== trustbar) {
                    hero.parentNode.insertBefore(trustbar, hero);
                }
            } else {
                // inline & banner: ensure trustbar comes AFTER hero
                if (hero.nextElementSibling !== trustbar) {
                    hero.parentNode.insertBefore(trustbar, hero.nextElementSibling);
                }
            }
        }
    }

    function setTweak(key, value) {
        state[key] = value;
        applyState();
        // Refresh active states in panel
        document.querySelectorAll('.tweaks-radio').forEach((group) => {
            const groupKey = group.getAttribute('data-key');
            group.querySelectorAll('button').forEach((b) => {
                b.classList.toggle('is-active', b.getAttribute('data-value') === state[groupKey]);
            });
        });
        // Persist via host
        try {
            window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: value } }, '*');
        } catch (_) { /* standalone */ }
    }

    function buildPanel() {
        if (document.getElementById('tweaks-panel')) return;
        const panel = document.createElement('div');
        panel.id = 'tweaks-panel';
        panel.className = 'tweaks-panel';
        panel.innerHTML = `
            <div class="tweaks-head">
                <h3 class="tweaks-title">Tweaks</h3>
                <button class="tweaks-close" aria-label="Tweaks schließen">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>
            <div class="tweaks-body">
                <div class="tweaks-section">
                    <span class="tweaks-label">Hero · Trust-Leiste</span>
                    <div class="tweaks-radio" data-key="heroVariant">
                        <button data-value="inline">Unter Hero</button>
                        <button data-value="top">Oben (dunkel)</button>
                        <button data-value="banner">Streifen</button>
                    </div>
                </div>
            </div>`;
        document.body.appendChild(panel);

        // Wire up controls
        panel.querySelectorAll('.tweaks-radio').forEach((group) => {
            const key = group.getAttribute('data-key');
            group.addEventListener('click', (e) => {
                const btn = e.target.closest('button[data-value]');
                if (!btn) return;
                setTweak(key, btn.getAttribute('data-value'));
            });
        });

        panel.querySelector('.tweaks-close').addEventListener('click', () => {
            panel.classList.remove('is-open');
            try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (_) {}
        });

        // Set initial active states
        applyState();
        panel.querySelectorAll('.tweaks-radio').forEach((group) => {
            const groupKey = group.getAttribute('data-key');
            group.querySelectorAll('button').forEach((b) => {
                b.classList.toggle('is-active', b.getAttribute('data-value') === state[groupKey]);
            });
        });
    }

    function showPanel() { buildPanel(); document.getElementById('tweaks-panel').classList.add('is-open'); }
    function hidePanel() { const p = document.getElementById('tweaks-panel'); if (p) p.classList.remove('is-open'); }

    // Register listener BEFORE announcing availability
    window.addEventListener('message', (e) => {
        const d = e.data;
        if (!d || typeof d !== 'object') return;
        if (d.type === '__activate_edit_mode') showPanel();
        if (d.type === '__deactivate_edit_mode') hidePanel();
    });

    // Apply defaults immediately on load (so design looks finished w/o panel)
    applyState();

    // Announce availability to host
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (_) {}

    // ?tweaks=1 to show panel directly (for standalone testing)
    try {
        const params = new URLSearchParams(window.location.search);
        if (params.get('tweaks') === '1') showPanel();
    } catch (_) {}
})();
