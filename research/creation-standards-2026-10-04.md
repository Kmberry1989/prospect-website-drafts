# Creation standards (2026-10-04)

Applies to every concept site at creation time, and to every retrofit pass.
The `shared/` folder holds the injectable packs; the contrast scanner
(`research/contrast-scan-*.json` + `/tmp/contrast_scan.py`) is the gate —
no site is finished until it passes.

## 1. Accessibility — built in, not bolted on

- **Contrast pairs, not single colors.** Every text color is chosen against its
  actual background. Body text ≥ 4.5:1, large text (≥24px, or ≥19px bold) ≥ 3:1.
  Verify with the scanner in BOTH light and dark `prefers-color-scheme` modes.
- **Theme variables must not flip meaning.** If `--ink` is "the dark color" in
  light mode, it cannot become the light color in dark mode while `--inverse`
  stays light — that combination put light text on a light card on Barlow's
  (2026-10-04). Dark-mode cards get hardcoded dark colors, not swapped variables.
- **Text over imagery always gets a scrim.** Either a gradient scrim behind the
  text, or `text-shadow: 0 1px 3px rgba(0,0,0,.55), 0 2px 14px rgba(0,0,0,.35)`
  on headings/body text (never on buttons — they have their own surfaces).
  Pack A applies this to `.hero`/`[class*="hero"]`/`.banner` text automatically.
- **No translucent-white text on unknown backgrounds.** `rgba(255,255,255,.65)`
  text is only allowed on a known-dark, near-opaque surface.
- **Translucent pills/badges need opaque backing.** A `rgba(8,13,16,.36)` pill
  over a light page is unreadable — back badges with ≥85% opacity or a blur.
- **Keyboard focus is always visible.** Pack A adds `:focus-visible` outlines
  globally; never remove outlines without replacing them.
- **Tap targets ≥ 48px on mobile** for CTAs, call buttons, nav items.
- **Motion respects `prefers-reduced-motion`.** All packs include the reduce
  guard; any new animation adds it too.
- **No internal language on customer-visible pages.** No "draft", "concept",
  "placeholder", TODOs, or working notes anywhere a prospect could see.

## 2. Motion — scrollytelling where it earns its place

- Every site gets Pack B: sections fade/slide in on scroll via
  IntersectionObserver (`.rv`), with a slightly bolder scale+fade (`.rv-pop`)
  for sections advertising something special — offers, deals, limited items,
  events. Detection is keyword-based (`special|offer|deal|sale|limited|coupon|
  discount`); hand-tag when the copy is subtle.
- Rules: hidden states only under `html.js` (no-JS visitors see everything);
  above-the-fold hero fades in on load; one animation per section, 0.7–0.8s,
  `cubic-bezier(.2,.7,.2,1)`; never animate layout properties (no height/width
  transitions); never trap content behind a failed observer (fallback adds
  `.in` immediately).
- Don't animate: form inputs, sticky navs, anything the visitor must read to
  act (phone number, hours) — those are always visible.

## 3. Desktop / mobile differentiation

Design both modes at creation; the packs add the baseline:

- **Mobile (≤720px):** sticky bottom tap-to-call bar (Pack C creates it from the
  page's own `tel:` link; hidden on desktop), full-width CTAs, 48px targets,
  single-column flow, `env(safe-area-inset-bottom)` honored.
- **Desktop (≥1024px):** use the canvas — multi-column grids, side-by-side
  visit/hours cards, wider heroes. Narrow reading-column layouts stay narrow
  only where the design intends it.
- Never ship a site with zero `@media` rules. The 2026-10-04 audit found 62
  of 79 without any — the packs now cover the baseline, and new builds get
  real art direction per mode.

## 4. The gate

1. Build the site.
2. Run the contrast scanner (light + dark). Fix every failure — no exceptions,
   no "it's just a caption".
3. Screenshot at 390px and 1280px. Read every word. Tap every CTA.
4. Only then is it finished.
