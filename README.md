# Tricia Korade for Johnson City Commission — test website

A standalone, responsive marketing site for Tricia Korade's Johnson City Commission
campaign ("People Before Politics"). Ported from the Claude Design prototype
(*Tricia Korade Website.dc.html*) into plain HTML / CSS / JS — no build step, no dependencies.

## Pages
Single-page app with hash routing between five views:

- `#/home` — hero, key dates, "Where I Stand" pillars
- `#/about` — Meet Tricia (bio — placeholder copy)
- `#/platform` — the three-commitment platform
- `#/election` — how / when / where to vote
- `#/contact` — email + phone

## Run locally
No tooling required — it's static. Serve the folder over HTTP:

```bash
python3 -m http.server 8137
# then open http://localhost:8137/
```

## Structure
```
index.html        markup for all five pages
css/styles.css    all styling + responsive breakpoints (mobile / tablet / desktop)
js/app.js         hash routing, mobile menu, and the repeated content (pillars, steps)
assets/           logo.png, tricia-hero.jpg
```

## Before going live — TODO
- **Hero photo:** drop the real headshot in at `assets/tricia-hero.jpg`
  (until then a labelled placeholder shows in the hero).
- **Donate link:** set `DONATE_URL` at the top of `js/app.js` to the real
  ActBlue/donation URL (currently `#`).
- **Instagram / X links:** fill in the real URLs in `index.html` (footer social row,
  currently `#`). Facebook is already wired.
- **About / Contact copy + photos:** the bio paragraphs and the two-column photos are
  placeholders, matching the design.

## Content edits
Copy that repeats (platform pillars, voting steps) lives as data at the top of
`js/app.js` — edit it there and it updates everywhere it's used.

---
Designed and developed by Kate Craig Consulting.
