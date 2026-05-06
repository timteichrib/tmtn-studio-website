# TMTN Studio — Design System

**TMTN Studio** is a young German web studio that sells *Websites im Abo* (websites as a monthly subscription) to local single-owner businesses across Germany — handwerker, gastronomy, coaches, medical practices, beauty/fitness studios, retail. Pricing ranges from **50 €** (Starter, one-pager) through **120 €** (Standard) to **210 €** (Pro) per month, all-inclusive: hosting, domain, SSL, GDPR, ongoing edits.

Tagline (current site): *"Eine professionelle Website für Ihr Unternehmen. Ohne Aufwand. Ohne hohe Einmalkosten."*

**Audience:** Sole proprietors and small-team owners in Germany who don't have time, in-house skill, or appetite for a five-figure agency project. They want trust, predictability, and a real person to call.

**Voice:** Calm, sachlich, plain-German, "Sie"-form. Practical confidence — not playful, not corporate.

---

## Sources

- **Marketing site repo:** `timteichrib/tmtn-studio-website` on GitHub — a single-page static site (`index.html`, `styles.css`, `script.js`). German copy throughout. The current visual language is conservative-professional (navy on white, Inter, soft cards, emoji icons in feature grid).
- **Domain:** tmtn-studio.de
- **Contact:** hallo@tmtn-studio.de

The user explicitly said the brand is new and "can be whatever it wants — I need inspiration." This design system therefore preserves the **product strategy** (subscription, local, German, three packages) and the **navy-leaning palette** as a foundation, but evolves the visual direction into something more distinctive than the current site. Where this system diverges from the live site, treat **the system as the source of truth**.

---

## Direction: *Werkstatt* — Studio as Quiet Craftsman

The current site reads like a clean SaaS template. For a studio whose pitch is *"a real partner who thinks with you,"* that mismatch is leaving trust on the table. The design moves toward an editorial, workshop-feel aesthetic that communicates **craft, care and German-modern restraint** without becoming nostalgic or twee:

- **Editorial display serif** for headlines (warmth, authority, makes the brand sound like a *Meisterbetrieb* not a templating-tool)
- **Geometric grotesque** for UI and body copy (precision, legibility on small business websites)
- **Paper-warm off-white** as the primary surface (not stark white) — softens the German-engineering feel
- **Deep navy + clay-ochre** as the accent pair — navy for trust and infrastructure, ochre as the human warmth
- **Numbered structure** — sections, packages and steps are numbered (01, 02, 03) like a workshop docket. This is a recurring motif across components.
- **Hairline rules and light grid lines** instead of heavy cards-with-shadows
- **Monoline icons**, never emoji
- **No gradients, no glass, no glow.** Everything is flat, printed, considered.

---

## Content Fundamentals

**Language:** German throughout, formal *Sie*-form. The studio is a small business talking to other small businesses — never `du`, never English jargon, never "Hi 👋". Direct, practical, never breathless.

**Tone:** Quiet confidence. The brand promises *to take work off your plate*, so the copy itself models that — short sentences, no marketing fluff, no superlatives. Borrows the cadence of a good German *Handwerker* invoice: factual, complete, polite.

**Voice principles:**
- *Sachlich* (matter-of-fact). No "amazing," "incredible," "revolutionary."
- *Klar* (clear). Concrete deliverables and prices, not benefits-speak. "Domain, Hosting, SSL-Zertifikat, E-Mail-Adresse und Impressum – wir richten alles ein."
- *Verbindlich* (committed). Speak in promises that can be kept. "Startbereit in 7 Tagen." "Monatlich kündbar."
- *Persönlich* (personal). It's a one-person/small-team studio; copy says "wir" and offers a *persönlicher Ansprechpartner per E-Mail und Telefon*.

**Casing:** Sentence case for headlines and buttons. Section titles are also sentence case ("Was Sie bekommen", not "Was sie bekommen"). German nouns capitalized normally. Eyebrows / labels / package badges may be UPPER CASE with widened tracking.

**Numerals:** Use numerals, not spelled-out numbers, even for small counts ("7 Tagen", "5 Änderungen"). Currency: "50 €" with non-breaking space and the symbol AFTER the value. Per-month: "/ Monat" — never "/mo".

**Punctuation:**
- En-dash ` – ` (with spaces) for parenthetical breaks: *"Eine Website allein reicht heute nicht. Sie brauchen einen Partner, der mitdenkt – technisch, gestalterisch und rechtlich."*
- German quotation marks „so" when typeset properly; straight quotes acceptable in UI.
- Lists end without trailing punctuation in feature grids.

**Emoji:** **Never.** The current site uses emoji for the feature card icons; we replace these with monoline SVG icons (see Iconography). Emoji is the single biggest visual leak away from the *Werkstatt* feeling.

**Sample copy in voice:**
- ✅ "Texte ändern, Bilder austauschen, neue Angebote ergänzen – inklusive. Sie schreiben, wir setzen es um."
- ✅ "Alle Pakete enthalten: deutsche Server, tägliche Backups, persönlicher Ansprechpartner per E-Mail und Telefon."
- ✅ "Kostenlos und unverbindlich. Keine E-Mail-Adresse nötig."
- ❌ "🚀 Boost your business with our amazing websites!"
- ❌ "Hi! Ready to take your brand to the next level?"

---

## Visual Foundations

**Color**
- Primary surface is `--paper` (#F5F1EA) — warm, off-white, paper-like. Stark `#FFFFFF` reserved for raised surfaces (cards on paper) and the demo browser frame.
- Ink is `--ink` (#15243D), a deep slightly-warm navy. This is the headline & body text color, **not** pure black. Pairs with `--ink-soft` (#5A6A82) for secondary text.
- Single warm accent `--clay` (#B85D3A) — used sparingly for emphasis, the "Beliebt" badge, primary CTAs on alternate states, and the section-numbering glyph. Never use clay for body links — links are `--ink`-underlined.
- Semantic green `--moss` (#2D6A4F) for success and check marks; semantic red `--rust` (#9C2A1F) for destructive/error. No yellow warning state — small-business UI rarely needs it.
- See `colors_and_type.css` for the full token set.

**Typography**
- Display / headlines: **Fraktur Pro alternative — we use *Fraunces*** (variable serif). Tight tracking (-0.02em), weight 500–600, used for h1 & h2 only.
- UI / body: **Inter** (already in the live site). Used for h3, paragraphs, buttons, all UI chrome.
- Mono / numerals tabular: **JetBrains Mono** for code samples and tabular numbers in pricing tables. Optional — only the Pro UI Kit needs it.
- Type ramp: 60 / 44 / 28 / 20 / 17 / 15 / 13. Body 17/1.55, eyebrows 13/0.12em tracked uppercase.

**Spacing & layout**
- 4-px base. Common steps: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96.
- Section vertical rhythm: 96 px on desktop, 64 mobile.
- Container max width 1120 px, narrow variant 760 px (long-form text & forms).
- Pages should breathe — generous bottom-padding under hero, never edge-to-edge text columns over 720 px.

**Backgrounds**
- Solid `--paper` is default. The "alt" section uses `--ink` ultra-soft tint (`--paper-deep` #EBE5DA) for rhythmic banding.
- No gradients, no full-bleed photography in the marketing surface (we don't have stock photography assets matched to the brand — and stock would cheapen it). Photography, when added, will be muted/desaturated, warm-leaning, never overlay-darkened.
- A faint **engineering grid** (1-px ink-soft lines at 8% opacity, 24-px spacing) may be used as a feature-section background motif. Use sparingly — once or twice per page.

**Animation**
- Fast, frictionless, never bouncy. 180 ms ease for most transitions; 240 ms for layout changes.
- No spring physics, no parallax, no scroll-triggered "wow" moments. The brand is calm.
- Loading spinner: a thin clay-on-paper ring, 800 ms linear (preserved from existing site).
- Hover: subtle border-color shift to `--ink` and a 1-px lift (`translateY(-1px)`), no scale.
- Press: `translateY(0)` and `transform-origin: center`, no shrink.

**Interactive states**
- **Hover (links):** color stays the same, an underline appears (1-px solid currentColor, 2-px offset). For buttons: border darkens to `--ink-deep`, surface fills slightly.
- **Hover (cards):** border becomes `--ink`, no shadow lift. Cursor becomes pointer only when the whole card is a link.
- **Press:** opacity 0.85, no scale.
- **Focus:** 3-px ring `rgba(21, 36, 61, 0.18)` outside the element. Always visible — never `outline:none` without replacement.
- **Disabled:** opacity 0.4, `cursor: not-allowed`.

**Borders & dividers**
- Default border is 1-px `--rule` (#DCD4C7) — a warm hairline that lives on paper.
- Strong rule: 1-px `--ink` for emphasized cards (the "Beliebt" package).
- Section dividers prefer a single full-width hairline rather than a color block change, where possible.

**Shadows & elevation**
- Shadows are restrained. Default elevation is *no shadow*; cards use 1-px `--rule` border instead.
- `--shadow-sm` reserved for floating UI (popovers, the demo preview frame).
- `--shadow-lg` on the **featured package** only — `0 8px 32px rgba(21,36,61,0.10)`.
- Never use multi-layer drop shadows or "neumorphism."

**Corner radii**
- 0 px for the engineering-grid backgrounds.
- 4 px for inputs, buttons, package cards (small, sharp — workshop-flat).
- 8 px for media wells, the demo preview frame.
- 999 px for the pill-shaped eyebrow tag and "Beliebt" badge.
- We do **not** use 16+ px rounded corners — that reads as consumer-app, not Werkstatt.

**Transparency & blur**
- Sticky header uses `rgba(245,241,234,0.88)` + 8-px backdrop blur. This is the only blur in the system.
- No translucent overlays inside cards. No glass-morphism.

**Cards**
- Surface: `#FFFFFF` on paper (a hair brighter), 1-px `--rule` border, 4-px radius, no shadow.
- Padding: 32 px desktop, 24 px mobile.
- Hover: border becomes `--ink`. That's it.
- A featured card uses 1-px `--ink` border + the lg shadow + a small "01"-style numeric in the corner.

**Layout rules**
- The header is sticky and 72-px tall; on long forms it auto-shrinks to 56 px on scroll.
- Section eyebrow + title + lead is a fixed pattern: eyebrow (13 px tracked uppercase), then title (2.4 rem display serif), then lead (17 px ink-soft, max 56 ch).
- Numbered structure: every major section gets a `01 / 02 / 03` glyph at the top in `--clay`, mono, 13 px, tabular. Reinforces the workshop docket feeling.

---

## Iconography

**Approach:** Monoline geometric SVG icons, stroke 1.5 px, 24-px viewBox, currentColor stroke, never filled. The studio is a *Werkstatt*; icons should feel drafted, not decorative. **No emoji anywhere.**

**System used:** [Lucide](https://lucide.dev) — open source, CDN-available, MIT licensed. Stroke width and visual style match the brand exactly with no modification needed. Loaded via CDN script tag in HTML samples; can be inlined as SVG strings for production.

**Substitution flag:** The live site currently uses emoji (⚙️ 🎨 🔄 📱 🔍 🛡️) in the feature grid. The system specifies Lucide replacements: `settings-2`, `palette`, `refresh-cw`, `smartphone`, `search`, `shield-check`. **You do not need to provide custom-drawn icons.**

**Sizes:** 16 / 20 / 24 / 32. 24 is the default. Feature cards: 24-px icon inside a 48-px square `--paper-deep` swatch with 4-px radius (replaces the round soft-blue tile in the live site).

**Logos & brand glyphs:** see `assets/`. The wordmark "TMTN Studio" is set in Fraunces 600 with a thinner "Studio" subscript. A monogram glyph "T·" exists for favicons and tight UI placements.

---

## Index — what's in this folder

```
README.md                  ← you are here
SKILL.md                   ← cross-compatible skill manifest
colors_and_type.css        ← all tokens (color, type, spacing, radius, shadow, motion)

fonts/                     ← webfonts (Fraunces, Inter — see fonts/README.md for licensing)
assets/                    ← logos, brand glyphs, sample icons
preview/                   ← Design System tab cards (one HTML file each)
ui_kits/
  website/                 ← TMTN Studio marketing site, recreated as JSX components
    README.md
    index.html             ← interactive home page
    Header.jsx, Hero.jsx, FeatureGrid.jsx, Packages.jsx, DemoBuilder.jsx,
    FAQ.jsx, ContactForm.jsx, Footer.jsx, Buttons.jsx, Icon.jsx, ...
```

---

## Caveats

- **Fraunces is a Google-Fonts substitution** for a true editorial display serif. If the brand later commissions a custom display face, swap the `--font-display` variable and replace `fonts/Fraunces.woff2`.
- **Lucide is a CDN substitution** for a custom icon set. If TMTN Studio commissions custom icons, drop them in `assets/icons/` and update `Icon.jsx`.
- **No custom photography** — the brand has none yet. UI kit screens use placeholder wells with a `placeholder` shape.
- The marketing site is the only product surface that exists today; this system has one UI kit (`ui_kits/website/`).
