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
- **Text borders/outlines during creation.** When placing text over any
  non-solid background (photo, gradient, pattern), add a contrasting outline
  from the start: `-webkit-text-stroke: 1px rgba(0,0,0,.6)` for display type,
  or a `paint-order: stroke` SVG-style stroke, or the text-shadow stack above.
  Do not ship first and scrim later — the stroke goes in with the text.
- **Buttons: white text needs a dark-enough fill.** Before choosing a brand
  color for a button background, check white-on-it ≥ 4.5:1. If the brand color
  is too light, darken the button fill (keep the brand color for text/borders).
  Never use `:hover` colors to pass the resting-state check.
- **Dark mode: lighten text, don't lighten surfaces.** Dark-mode palettes
  lighten *text* colors for dark backgrounds; button/section *backgrounds*
  stay dark or get darker. A variable used as both text and surface needs two
  variables, not one flipped value.
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

## 4. Logos — readability & scalability

- Real logos always win. Generated marks are starting points shown to the owner as options, never presented as the business's identity.
- Logo prompts (`research/logo-prompts-*.md`) bake in the constraints: flat vector-style, simple bold silhouette readable at 32px, 1–2 solid colors, no fine text, no gradients, no photorealism, never copying an existing brand.
- Header standard: `.biz-logo { max-height: 104px; width: auto; max-width: 72%; }`, 80px on mobile, always with alt text. Low-res sources (<300px) are never displayed above native size — the owner is asked for a high-res file at onboarding.
- Profile photos are not logos: flagged in the logo scan, replaced with a real mark.
- The logo scan (`research/logo-scan-*.md`) runs on existing logos before finish: source dimensions, aspect ratio, alt text, display size vs native size.

## 5. Navigation — the judgment

These are single-page local business sites. The standard is:

- **No hamburgers, no multi-page nav.** A slim sticky mini-nav (Pack D) slides in after scrolling past the hero: business name left, anchor links to the page's own sections center, tap-to-call right. On mobile the links collapse away (the sticky bottom call bar already covers actions).
- Pages that already have a real `<nav>` keep it — the mini-nav only builds where none exists, and only when the page has 2+ labeled sections.
- Anchor targets get `scroll-margin-top` so the fixed bar never covers a heading.
- At creation: every section gets an `aria-label` or clear `h2` — that's what the mini-nav reads.

## 6. The gate

1. Build the site.
2. Run the contrast scanner (light + dark). Fix every failure — no exceptions,
   no "it's just a caption".
3. Screenshot at 390px and 1280px. Read every word. Tap every CTA.
4. Only then is it finished.
