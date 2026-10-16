# Altro Digital website (starter)

Your own site, built as if you just picked the name and brand: no clients, demos, or testimonials yet, and every gap marked as a placeholder. It follows the handbook's spec for your site (ch10, "Your site"): five pages, each in English and Spanish.

Plain HTML and CSS, no build step. **Double-click `index.html` to open it.**

## What's here

```
index.html  work.html  how-it-works.html  about.html  contact.html  privacy.html
es/  index.html  trabajos.html  como-funciona.html  nosotros.html  contacto.html  privacidad.html
assets/css/styles.css     every color, size, and component
assets/js/site.js         mobile menu + the "form not connected" notice (the site works without it)
assets/fonts/             League Spartan (variable, 100–900) + its license (OFL.txt)
assets/img/               logo.svg, logo-white.svg, favicon.svg (stand-ins)
```

The header and footer are the same block on every page, between `HEADER` and `FOOTER` comments. To change them, use find-and-replace across all 12 pages.

## The look: built from League Spartan

League Spartan is a free revival of Spartan, the 1930s American geometric sans made to compete with Futura. Its letters are circles and straight lines with even (monoline) strokes, and it comes in every weight from 100 to 900. So the site:

- uses only circles and straight lines: round step numbers, pill buttons, round icon badges, 2px rules;
- draws every icon with the same 2px stroke;
- sets big poster-style headlines (weight 800, tight lines) and small all-caps labels with wide spacing;
- builds hierarchy from weight instead of extra colors (300 light ledes and big numerals, 400 body, 700–800 headings);
- repeats the globe from your logo's O as line art.

**Colors** (top of `styles.css`): white, navy `#00334e`, light blue `#5588a3`, plus tints of the light blue.

| Pair | Contrast | Use it for |
|---|---|---|
| Navy on white | 13.3 : 1 | All text, primary buttons |
| `--ink-2` on white | 7.5 : 1 | Secondary text |
| Light blue on white | 3.9 : 1 | **Large text (24px+), icons, and lines only.** Never small text, never white text on a light-blue button |
| `--sky-light` on navy | 8 : 1 | Small text in navy sections |

**Body font:** the whole site uses League Spartan. To use the system font for body text instead (the handbook's ch03 default), change `--font-body` in `styles.css`. The font is self-hosted, so the site makes no third-party requests.

## Logo and favicon (stand-ins)

`logo.svg`, `logo-white.svg` (for navy backgrounds), and `favicon.svg` were drawn from your description using League Spartan's real letter shapes: the A cut out of a circle, LTR, the O as a circle with a globe cut out, and "digital" underneath. **To use your real logo, replace these files and keep the same names.** SVG is best. If you only have a PNG, find-and-replace `logo.svg` → `logo.png` in all 12 pages.

## Placeholders

Everything you still need to fill in is wrapped in `<span class="ph">…</span>` and shows with a dashed underline. Search the project for `class="ph"` to find them. When you fill one in, remove the span too.

| Placeholder | Where |
|---|---|
| `[First name]` / `[nombre]` | About (founder line + cards), Home (Spanish band) |
| `[Cofundador / Cofundadora]` | es/nosotros.html founder cards |
| `[firstname]@altrodigital.com`, `[phone number]` | Footer (every page), Contact |
| PO Box `[number]`, `[City]`, `[ZIP]` | Footer (every page), Contact |
| `[Concept name]`, screenshots, "View the concept" links | Work |

Also confirm the Spanish package names (Básico, Estándar, Premium) match what you say on calls and in proposals.

## Keep these honest as things change

- **Founding spots** (Home, both languages): update "3 of 3 open" and fill a circle (`<span class="is-taken"></span>`) the day a deposit clears. Delete the whole section when the third one clears (handbook ch04).
- **Work page:** swap concept screenshots in when the two demos are live. A real client appears only after they sign the Portfolio & Testimonial Permission Release, with the founding disclosure line underneath (both are in comments on the page).
- **Numbers** come from the handbook's `data/assumptions.json`: packages start at $500 · 50% deposit after the preview is approved · live in 14 days from content · clock pauses after 3 days waiting on feedback · 2 free care months if you miss the date · 3 founding spots · 15-minute feedback call · up to 5 pages · 2 rounds of changes · 14 days of free fixes. If one changes there, change it here.
- **On purpose, not on the site:** a full price list (ch10: "starting at" only), testimonials or reviews, photos of you, your school or town, and visitor tracking.

## Go-live checklist

1. **Domain** (≈ $10/yr; your parent opens the registrar account at the setup session). Replace the email placeholders.
2. **Email:** one address each on your domain (Zoho's free plan; your parent opens it).
3. **PO box.** Until you have one, delete the mailing-address lines. Never put your home address on the site.
4. **Privacy policy:** use the Privacy Policy kit in the handbook appendix, have your parent review it, then paste it into `privacy.html` and `es/privacidad.html`.
5. **Connect the form** on your host (for example, your host's built-in forms feature), then delete `data-not-connected` and the `.form-status` box in both contact pages, and the form block in `site.js`. Send a test from a phone and check that it reaches your phone with an alert.
6. **Fill every placeholder** (a search for `class="ph"` finds nothing).
7. **Partner A reads every Spanish line aloud** (ch10). These Spanish pages were written for you, but a person should check them before they go live.
8. **Five-second test:** 8 of 10 people can say what you do after five seconds on the homepage.
9. **Remove** `<meta name="robots" content="noindex">` from all 12 pages, and make the two `hreflang` links in each page full URLs on your domain.
10. **Search test** every Sunday after launch (ch10).

**Hosting:** a free static host such as Netlify or Cloudflare Pages (handbook ch06). VERIFY each host's age rules with a parent before signing up; never Vercel Hobby. Upload this folder as-is.
