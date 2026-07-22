# Tricia Korade for Johnson City Commission (test website)

A standalone, responsive marketing site for Tricia Korade's Johnson City Commission
campaign ("People Before Politics"). Plain HTML / CSS / JS, no build step, no dependencies.

## Pages
Single-page app with hash routing between five views:

- `#/home` : hero, key dates, "Where I Stand" priorities, and the "Hear from Tricia" video
- `#/about` : Meet Tricia (full bio, strengths, commitment quote)
- `#/platform` : the three strategic priorities
- `#/election` : how, when, and where to vote
- `#/contact` : email, phone, Facebook, and Ways to Help

## Run locally
No tooling required. Serve the folder over HTTP:

```bash
python3 -m http.server 8137
# then open http://localhost:8137/
```

## Structure
```
index.html        markup for all five pages
css/styles.css    all styling plus responsive breakpoints (mobile / tablet / desktop)
js/app.js         hash routing, mobile menu, and the repeated content (priorities, steps)
assets/           logo.png, tricia-hero.jpg, tricia-about.jpg, tricia-contact.jpg
```

## Content edits
Copy that repeats (the three priorities, the voting steps) lives as data at the top of
`js/app.js`. Edit it there and it updates everywhere it is used. Contact details and the
video embed live directly in `index.html`.

## Style note
Per the client, do not use em dashes or en dashes anywhere in the copy. Use commas,
colons, or the word "to" for ranges (for example, "Oct 14 to 29").

## Still open (pending info from the client)
- **Donate link:** Donate buttons are placeholders (`#`) for now. When there is a donation
  URL, set `DONATE_URL` at the top of `js/app.js`.
- **Historic Marker photos:** Tricia wants one or two photos from the Johnson City Senior
  Center historic marker unveiling. Not yet available.
- **LinkedIn:** Tricia plans to refresh her LinkedIn profile; add a link if desired.
- **Video:** the "Hear from Tricia" home section embeds her October 2025 Commission
  interview (`youtube.com/live/4EA1lQQsi6o`), starting at 4:19 (259 seconds).

---
Designed and developed by Kate Craig Consulting.
