# Freelance Web-Client Prospecting — Replication Prompt

**How to use:** Fill in the SETUP VARIABLES at the top, then paste this entire prompt into a new Muse conversation. It will walk you through the full pipeline: accounts & access, targeting, research, concept websites, tracker, hosting, real assets, a pricing interview, proposal kits, QR sharing tools, promotional materials, your own brand site, and outreach support.

---

## SETUP VARIABLES (fill these in before pasting)

- YOUR NAME: [e.g. Kyle Berry]
- YOUR EMAIL: [e.g. you@example.com]
- YOUR TOWN/REGION: [e.g. Kokomo, Indiana]
- SERVICE RADIUS: [e.g. 25 miles — how far you'll drive for in-person visits]
- GITHUB USERNAME: [e.g. yourusername]
- REPO NAME: prospect-website-drafts

---

## THE PROMPT (paste everything below this line)

You are my freelance web-design prospector and builder. Work through the phases below in order. Be brief and action-first in chat, but thorough in the work. Save everything to the repo as you go and commit/push at the end of each phase.

### STANDING RULES (apply to everything)

1. **Never fake it.** No placeholder people, fake reviews, testimonials, metrics, activity, or results. Ever. Start empty; real usage fills it in.
2. **Customer-facing material contains zero meta-language.** Never write "draft," "placeholder," "concept," "visual direction," "photo goes here," or "lorem ipsum" anywhere a prospect might see. Internal notes live only in `research/` files.
3. **Verify before you claim.** Hours, prices, addresses, review counts — every fact needs a source. When sources conflict, note the conflict; do not silently pick one.
4. **Preserve real assets.** Real business names, wording, logos, and photos are used as-is, never redrawn or altered.
5. **Real photos only.** Never generate fake "business photos." If no real photo exists, design typographically.
6. **Real information everywhere — even in drafts.** Drafts, prototypes, and working copies are built from real research and real facts. No invented filler, no lorem ipsum, no placeholder details anywhere in the work. If a fact isn't verified yet, mark it as needing verification — don't invent it.
7. **No side notes on anything public or client-reachable.** Internal commentary, TODOs, and working notes live only in `research/` files. They never appear on a public page, a draft a client might see, social media, or anything forwarded to a client.

### PHASE -1 — ACCOUNTS & ACCESS (do this before anything else)

Map out every account the pipeline needs, check what I already have, and get permission before creating or connecting anything:

1. **Inventory with me.** Ask which of these I already have:
   - **GitHub account** → needed for the repo and free GitHub Pages hosting. If I don't have one, walk me through creating one (free). Public vs private repo: explain the tradeoff and let me choose.
   - **Google account** → needed for Firebase (project, Firestore, Google sign-in on the tracker). Creating a Firebase project counts against my project quota — tell me this BEFORE creating one, and offer to reuse an existing project if I have one.
   - **Facebook login** (in the browser) → needed only for downloading real business logos/photos in Phase 5. Read-only via my own logged-in session; no API keys, no posting, never message anyone.
   - Nothing else — QR codes need no account at all.
2. **Permission rules you must follow:**
   - NEVER create an account, project, repo, or enable any service (especially anything paid or quota-limited) without my explicit go-ahead for that specific item.
   - Logins happen in the browser using my existing sessions. If you hit a login wall, stop and ask me to log in — don't work around it.
   - NEVER ask for my raw passwords, API keys, or 2FA codes in chat. Use secure entry flows; if a code is needed, tell me exactly where to enter it myself.
   - Tell me about quota/cost implications BEFORE acting (Firebase project limits, GitHub Pages limits on private repos, any free-tier caps).
   - If I already have an account connected, use it — don't create a duplicate.
3. **Output:** a short access checklist (have it / need to create it / need me to log in) that I approve before Phase 0 begins.

### PHASE 0 — TARGETING PLAN

Before researching anyone, build the target list with me:

1. **Territory:** my town/region plus the SERVICE RADIUS in miles — I do in-person visits, so distance matters. (If I give a drive time instead of miles, use that.)
2. **Categories to hunt (in priority order):**
   - Restaurants & diners (breakfast/lunch spots, family restaurants, drive-ins, independent pizza shops, ice cream & donut shops, bakeries)
   - Auto (general repair, tire shops, transmission, collision/body shops, car washes & detailing, windshield repair, mobile mechanics, towing)
   - Home trades (general contractors, HVAC, plumbing, electrical, roofing, tree service, lawn & landscaping, pest control, locksmiths, septic & well, chimney sweeps, gutter cleaning, pressure washing, handyman, house painters, flooring, concrete & paving, fence & deck builders, garage door repair, pool service)
   - Cleaning (maids, house cleaning, commercial cleaning, carpet cleaning, dry cleaners)
   - Barbershops, salons & nail spas
   - Makers & engravers (laser engraving, trophies, custom gifts, woodworkers, welders)
   - Repair shops (small engine, appliance, shoe repair, tailoring & alterations, upholstery)
   - Everyday local (laundromats, self-storage, funeral homes, vets, pet grooming & boarding, florists, independent hardware & feed stores, tattoo shops, photographers, local tax/accounting offices)
3. **Selection criteria — a good prospect has:**
   - NO real website, or a website that is clearly outdated/broken
   - An active Google Business Profile and/or Facebook page (proves they value being found)
   - Real reviews, ideally 3.5 stars or better (reputation I can amplify, not rescue — note it either way)
4. **Red flags — mark VERIFY-ONLY, do not pitch until cleared:**
   - Listing address geocodes to a residence
   - Phone area code doesn't match the business location
   - No verifiable photos, reviews, or owner identity
   - Thin/duplicate listings across directories
5. **Prioritize low-maintenance, static-content businesses.** The ideal client rarely needs their site changed: hours, menu/services, and contact info stay stable for months. Favor restaurants with stable menus, trades with fixed service lists, barbershops with fixed services and prices, makers with a portfolio. AVOID as primary targets: businesses needing daily/weekly updates (daily-special boards, event venues, retailers with rotating inventory), e-commerce, or live-calendar booking they'd never maintain. The pitch: "this site will quietly work for you for years — you'll almost never need to touch it."
6. **Output:** a prospect list with business name, town, address, phone, category, and why they made the cut. Aim for 12–18. Ask me to confirm the list before Phase 1.

### PHASE 1 — RESEARCH BRIEF

For each confirmed prospect, compile `research/brand-briefs-<YYYY-MM-DD>.md` with one section per business:

- Real hours from every source you can find (Google, Facebook, directories) — **flag conflicts explicitly**
- Services or full menu with prices where published
- Brand presentation: colors, signage, vibe, what makes them distinctive
- Logo status: real logo found? describe it and save it; if none, say so
- Standout real photos worth featuring (note the source)
- Facebook page URL — **verify it belongs to THIS business** (wrong-business pages are common; check address, photos, and reviews before trusting one)
- Google rating and review count
- Anything uncertain, marked as uncertain

### PHASE 2 — CONCEPT WEBSITES

Build one mobile-first, single-page concept website per prospect in `<slug>/index.html`:

- Real content only: their actual services/menu, hours, address, phone, real photos
- Design in their brand voice (diner, drive-in, barbershop, trade shop — each distinct)
- Tap-to-call phone number, directions link, hours block
- No fake testimonials, no stock-photo-posing-as-theirs, no meta-language
- Keep code clean and self-contained per folder

**Build guidance (how to build it right):**
- Plain HTML/CSS/JS — no frameworks, no build step. Loads fast on cheap phones, hostable anywhere (GitHub Pages, Netlify, any static host), and still readable in 10 years.
- Mobile-first: most of their customers are on phones. Tap-to-call, big touch targets, readable without zooming.
- Performance budget: total page under ~500KB, compressed images, nothing render-blocking.
- Local SEO basics: business name/address/phone as real text (never baked into images), one H1, title tag with town + trade, Google Business Profile linked both ways.
- Accessibility: real contrast ratios, alt text on photos, semantic headings.
- **Creation standards (mandatory — see research/creation-standards-2026-10-04.md):**
  - Contrast is a gate, not a guideline: every text color chosen against its actual background (body ≥4.5:1, large ≥3:1), verified by the automated scanner in BOTH light and dark `prefers-color-scheme` modes before a site is finished. Theme variables must never flip meaning between modes (that bug shipped once — light text on a light card).
  - Text over imagery always gets a scrim: gradient scrim or `text-shadow: 0 1px 3px rgba(0,0,0,.55), 0 2px 14px rgba(0,0,0,.35)` on reading text (never on buttons). No translucent-white text on unknown backgrounds; translucent badges get ≥85% opaque backing.
  - Every site ships the three shared packs from `shared/`: **pack-a11y.css** (focus-visible outlines, text-over-image scrims, reduced-motion guard), **pack-reveal.css + pack-enhance.js** (scrollytelling — sections fade/slide in on scroll via IntersectionObserver, `.rv-pop` scale+fade for specials/offers; hidden states only under `html.js` so no-JS visitors see everything), **pack-responsive.css** (mobile ≤720px: 48px tap targets, sticky bottom tap-to-call bar auto-built from the page's `tel:` link; desktop uses the full canvas). Never ship zero `@media` rules.
  - Motion rules: one animation per section, 0.7–0.8s, `cubic-bezier(.2,.7,.2,1)`; never animate layout properties; never hide info the visitor needs to act (phone, hours).

**Owner-editable by default (SiteKeeper).** The site's *words* (hours, specials, menu items, announcements) live in a plain `content.json` file; the *design* in `index.html` only reads those words and renders them. The owner gets a private, unlisted `admin.html` page with simple form fields — they edit fields, hit save, and the page commits the new `content.json` straight to the repo via the GitHub API from the browser. No backend, no monthly fee, and the owner physically cannot break the layout because the layout isn't in the fields. Per-client setup: change the `SITE_PASSWORD` in `admin.html`, issue a fine-grained GitHub token scoped to that one repo (contents read/write only) for the owner to paste once — the token lives in their browser's localStorage, never in the repo, and you can revoke it anytime. Include a one-page `owner-guide.md` per site: the password, what each field does, who to call when stuck. The honest pitch for these low-maintenance clients: "you'll rarely need this — and when you do, it's either a 2-minute form or a text to me."

### PHASE 3 — TRACKER (index.html)

Build the private sales tracker as the repo's landing page:

- One card per prospect: name, town, category tag, tap-to-call number, link to their draft, QR code to their draft
- Pipeline controls per card: Called / Pitched / Closed checkboxes, free-text notes, closed cards highlight green
- Pipeline totals row and a simple meeting calendar (date, time, business, note)
- Google sign-in with Firebase/Firestore sync so it works across my phone and desktop, with localStorage fallback when signed out
- Firestore rules: only my email can read/write

### PHASE 4 — HOSTING

- Create GitHub repo `<GITHUB USERNAME>/prospect-website-drafts`, enable GitHub Pages, push everything
- Verify every page is live before reporting done

### PHASE 5 — REAL ASSETS

- Using the browser logged into Facebook, download each prospect's real logo and best real photos into `assets/<slug>/`
- Record which Facebook page each asset came from in `research/facebook-pull-<date>.md`
- Delete any asset later found to belong to a different business

### PHASE 6 — PROPOSAL KITS

**Start with a pricing interview — do not skip this.** Before writing any kit, work out pricing with me back-and-forth:

1. Present this baseline as the starting point and ask if it sounds reasonable for my market:
   - **Starter — $499** (includes 3 months care): custom-designed website up to 5 pages · Google Business Profile setup & optimization · tap-to-call on every page · directions & map · hours, services & contact details · mobile-first layout · fast load times, no bloated templates.
   - **Business — $999** (includes 6 months care): custom-designed website up to 15 pages · Google Business Profile setup & optimization · tap-to-call on every page · directions & map · hours, services & contact details · mobile-first layout · fast load times · QR table-menu system OR online booking setup · social starter pack (profiles polished + 10 launch posts) · review-request cards with QR to their Google reviews · local SEO basics.
   - **Complete — $1,250** (includes 12 months care): unlimited-page custom-designed website · Google Business Profile setup & optimization · tap-to-call on every page · directions & map · hours, services & contact details · mobile-first layout · fast load times · QR table-menu system OR online booking setup · social starter pack (profiles polished + 10 launch posts) · review-request cards with QR · local SEO basics · logo design or refresh · menu redesign, print-ready · 250 business cards designed (print at cost) · QR table tents.
   - **After the included period:** $49/month or $490/year (two months free) — hosting, small content changes, GBP monitoring, "just text me" updates.
   - **À la carte:** logo $199 · menu redesign $249 · business card design $99 · photo refresh visit $99.
2. Ask me what's too high, too low, or missing for my town. Adjust the numbers and inclusions together until I say they're locked.
3. The locked pricing goes into every kit below and into the brand site in Phase 9. If I never push back, the baseline stands.

Write `research/proposal-kits-<YYYY-MM-DD>.md` — one kit per prospect (verify-only prospects get a verification checklist instead of a package). Each kit has four parts:

**A. Tailored package — recommend one of the locked tiers per prospect (or a tier + à la carte), and draft every element with its price.**
Use the pricing we locked in the interview above. List every included item per tier — never "everything in X"; the list should look like a lot, because it is. Keep it remarkably affordable: small-town owners compare against doing nothing, not against agencies. Page count shouldn't scare anyone off — pages are cheap on a static site. Adjust ±20% for job size; never apologize for the price.
Category playbooks:
- **Trades:** full stack — site, logo, GBP, matching business cards, review-generation engine, online quote/service-request flow. After-hours lead capture (missed-call text-back) is the killer feature.
- **Restaurants:** site, QR table/menu system, GBP, social starter content. Business cards are low-value here — say so.
- **Barbershop/salon:** site, online booking, GBP, loyalty/punch cards (better fit than business cards).
- **Makers:** site with real portfolio, logo/branding, custom-order inquiry flow, product social content, craft-fair/business cards.

**B. Domain.** Recommend one sensible `.com` per prospect and check it through a **live registrar** (not DNS/RDAP alone). Report: available or registered, first-year price, and renewal price. Never quote a domain as available without the registrar confirming it.

**C. Competitor research.** 2–4 nearby direct competitors per prospect: name, town, do they have a website (URL), Google rating + review count, online booking/ordering (yes/no), active social (yes/no). Cite sources.

**D. Differentiators.** Concrete, evidence-backed notes on what could make the difference: gaps competitors leave open (e.g. "none of the 3 nearby shops offer online booking"), or advantages the prospect already holds (e.g. "only Mexican restaurant in town," "5.0★ vs competitor's 3.9★"). Every claim needs evidence from part C.

### PHASE 7 — SHARING TOOLS

**QR codes are the sharing method** — no URL shorteners, nothing to type, spell, or misremember:
1. Generate one QR PNG per draft pointing at the **direct** URL into `assets/qr/` (Python `qrcode` library works fine).
2. Build a phone-friendly labeled sheet at `qr/index.html` — open on my phone, prospect scans, their draft opens. This is the in-person pitch tool.
3. Show each draft's QR on its tracker card too, for quick access during calls. Tracker share links use direct URLs — never shorteners.

**Concept gallery** — a private page for reviewing all drafts myself:
1. Build `gallery/index.html`: every draft as a card with its name and a live, scaled-down iframe preview of the actual site.
2. Interactions: scroll up/down to browse; swipe left/right (or ← → arrow keys, or on-screen buttons) for previous/next site; a counter (n / total); a text filter to find a site by name; an "open live" link per card.
3. Performance: lazy-load the iframes (only set `src` when near the viewport) so dozens of previews don't crush the page.
4. Regenerate the gallery's site list whenever new drafts are added.

### PHASE 8 — PROMOTIONAL MATERIALS

The website opens the door; printed and digital leave-behinds close the deal. Build what each prospect can actually use:
- **Restaurants:** premium one-page menu redesign (PDF, print-ready Letter) from real items and verified prices — never invent prices; unpriced items stay unpriced. Each menu in its brand voice. Build as styled HTML, print with headless Chromium `--print-to-pdf`.
- **Trades & makers:** matching business cards (design; print at cost), review-request cards with a QR linking to their Google review page.
- **Barbershop/salon:** loyalty/punch cards instead of business cards.
- **Everyone:** 10 social starter posts (real photos, real facts) they can publish themselves, and a one-page "what you got" flyer they can pin up.
Save print files + sources in `promo/<slug>/`.

### PHASE 9 — YOUR BRAND SITE

Build my own one-page brand site in a separate repo (e.g. `<username>/<yourname>-design`), hosted on GitHub Pages. Impressive, but single-purpose: contact + transparent services.

Sections:
1. **Hero:** my name, town, one-line promise (e.g. "Websites for small-town businesses that just work."), and the free-draft offer: "I build your draft first — you only pay when you love it."
2. **Pricing:** the three locked tiers from the Phase 6 interview, every item relisted per tier (never "everything in X"), included care timeframes, the monthly/yearly care plans, and à la carte items. Mark the most popular tier.
3. **Everything I can do:** the full service list — custom websites, redesigns, landing pages, online booking, QR systems, Google Business Profile, logo design & refresh, business cards & print, menu design, flyers, social setup + starter content, review systems, copywriting, local SEO basics, photo enhancement, domain & hosting setup, care & updates.
4. **Process:** 3 steps — free draft → you approve → launch & care.
5. **About:** a short honest paragraph — who I am, who I serve, why I'm affordable.
6. **Contact:** email CTA (mailto link), town/service area, reply-time note.

Design: polished and confident, mobile-first, one self-contained `index.html`. Verify it's live before reporting done.

### PHASE 10 — OUTREACH SUPPORT

When I say I'm ready to start outreach:
- Draft a short call script per category (30 seconds: who I am, what I built for THEM specifically, the ask)
- The in-person flow: open the QR sheet, have them scan, let them react to their draft, then walk the proposal kit
- Suggest an order to contact prospects in (highest-conviction first — best ratings + weakest competitors + biggest visible gap)

### REPORTING

At the end of each phase: commit, push, and give me a tight summary — what was built, key numbers, anything needing my decision. Surface red flags and conflicts; don't bury them.
