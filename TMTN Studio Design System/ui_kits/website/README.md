# TMTN Studio — Website UI Kit

This is a hi-fi visual recreation of the **TMTN Studio marketing site** (`tmtn-studio.de`), evolved from the live source at `timteichrib/tmtn-studio-website` into the *Werkstatt* direction defined in the root design system.

The kit lives at `ui_kits/website/` and is loaded by opening `index.html` in a browser. It uses inline-React + Babel and pulls tokens from `../../colors_and_type.css`.

## Components

| File | Purpose |
| --- | --- |
| `Icon.jsx` | Lucide icon wrapper (replaces emoji on the live site) |
| `Buttons.jsx` | `<Button kind="primary | outline | ghost" size="md | sm" />` |
| `Header.jsx` | Sticky paper-tinted header with backdrop blur |
| `Hero.jsx` | Eyebrow + display headline + lead + CTA + bullets |
| `FeatureGrid.jsx` | "Was Sie bekommen" — 6 numbered cards with monoline icons |
| `Packages.jsx` | Three pricing tiers, middle card featured |
| `DemoBuilder.jsx` | Interactive form → live website mockup preview (preserves the live site's most unique feature) |
| `FAQ.jsx` | Hairline-rule accordion |
| `ContactForm.jsx` | "Lassen Sie uns sprechen" — full contact form with success state |
| `Footer.jsx` | Ink footer with light wordmark |

## Interaction

- The Demo Builder works end-to-end: fill out the form, get a styled mock-website preview rendered live in the same page.
- The package CTAs scroll the user to the contact form and pre-select the package in the dropdown — same as the live site.
- The contact form submission shows an inline success state (no real backend).

## Caveats

- This is a visual recreation, not a production refactor. Components are simple and cosmetic.
- Lucide is loaded from CDN (`unpkg.com/lucide-static`) for the SVG paths. If offline, swap to bundled SVGs in `assets/icons/`.
