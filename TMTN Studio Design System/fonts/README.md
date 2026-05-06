# Fonts

This design system uses two webfonts loaded via Google Fonts CDN in `colors_and_type.css`:

- **Fraunces** — variable display serif. Used for h1, h2, hero display. Weights 400–700.
  - Licensed: SIL Open Font License 1.1
  - Source: https://fonts.google.com/specimen/Fraunces
  - **Substitution flag:** This is a stand-in for a future custom or licensed display serif. If TMTN Studio commissions a brand face, swap `--font-display` in `colors_and_type.css` and replace the @import URL.

- **Inter** — geometric grotesque sans. Used for h3, body, UI, buttons. Weights 400–700.
  - Licensed: SIL Open Font License 1.1
  - Source: https://fonts.google.com/specimen/Inter
  - Already in use on the live tmtn-studio.de site.

- **JetBrains Mono** *(optional)* — used only for tabular numerals in pricing tables and the section-numbering glyph (01 / 02 / 03).
  - Licensed: SIL Open Font License 1.1

No `.woff2` files are bundled in this folder — the system loads them from `fonts.googleapis.com`. To go fully offline, download the `.woff2` files into this folder and replace the `@import` in `colors_and_type.css` with `@font-face` declarations.

---

## Ask for the user

If TMTN Studio has already chosen brand fonts (commissioned, licensed, or different open-source faces), please drop the `.woff2` files into this folder and let me know — I'll update the tokens.
