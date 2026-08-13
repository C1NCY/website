# UC VEX U Robotics (C1ncy) Website

A Next.js site for the University of Cincinnati's VEX U robotics team —
big editorial type, UC red/black, deployed as a static site via GitHub
Actions to GitHub Pages.

## 1. Run it locally

You need [Node.js](https://nodejs.org/) 18+ installed.

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the site hot-reloads as you edit files.

## 2. Edit your content

Almost everything text-based lives in **`lib/site-config.js`**: club name,
tagline, stats, the engineering disciplines, the tech stack, outreach
cards, socials, contact info, the "who makes up the team" percentages,
image paths, and the footer credit line. Edit that file first.

Page-specific lists live at the top of each page file as a plain array:

- `app/team/page.js` — `MEMBERS` array (roster)
- `app/history/page.js` — `SEASONS` array (season-by-season achievements)
- `app/sponsors/page.js` — `SPONSORS` array

Design tokens — colors, spacing, section padding, font sizes, label
styles — live as CSS variables at the top of `app/globals.css`. Change a
value there once and it updates everywhere that token is used. For
example, `--accent` is the UC red used across every button, heading
accent, and label on the site; `--section-padding` controls the vertical
rhythm of nearly every section at once.

## 3. Adding real photos and your logo

**All image paths live in one place: `IMAGES` in `lib/site-config.js`.**

```js
export const IMAGES = {
  logo: "/vexupage/images/UC_Red.png",     // nav, on light background
  logoAlt: "/vexupage/images/UC_White.png", // footer, on dark background
  hero: null,      // e.g. "/images/hero.jpg" — team or workshop photo
  outreach: null,  // e.g. "/images/outreach.jpg" — outreach/volunteering photo
};
```

To add a photo: drop the file in `public/images/`, then set the matching
key above to its path (e.g. `hero: "/vexupage/images/hero.jpg"` — remember
the `/vexupage` prefix, see the `basePath` note below). Any key left
`null` automatically falls back to a dashed placeholder box on the page,
so nothing breaks if you haven't got a photo yet.

For the **roster and sponsors pages**, photos work the same way but
per-entry: set the `photo` (roster) or `logo` (sponsors) field on that
person/sponsor's object in the array at the top of the page file.

## 4. Deploying — GitHub Actions → GitHub Pages

This repo already includes `.github/workflows/deploy.yml`, which builds
the site and deploys it to GitHub Pages automatically on every push to
`main`. To turn it on:

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**, and under "Build and
   deployment" set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab)
   — the site will build and deploy automatically.

### About `basePath` in `next.config.js`

```js
basePath: "/vexupage",
assetPrefix: "/vexupage/",
```

GitHub Pages project sites are served at
`https://your-org.github.io/your-repo-name/`, so `basePath` has to
**exactly match your repo's name** — including in any image path you add
to `IMAGES`, which is why the existing logo paths are prefixed with
`/vexupage/images/...` rather than just `/images/...`. If you rename the
repo, update `basePath`/`assetPrefix` here *and* every path in `IMAGES`.

If you set up a custom domain instead (so the site is served from the
domain root instead of a subpath), delete both the `basePath` and
`assetPrefix` lines, drop the `/vexupage` prefix from every path in
`IMAGES`, and add a `public/CNAME` file containing your domain — GitHub's
Pages settings page walks you through this.

## 5. Project structure

```
app/
  layout.js          — shared shell: fonts, nav, footer
  page.js             — homepage (hero, stats, demographics, engineering
                         disciplines + stack, outreach, team, CTA)
  team/page.js         — roster
  history/page.js       — season-by-season achievements
  sponsors/page.js      — sponsor grid + pitch
  contact/page.js       — meeting info & contact details
  globals.css           — design tokens + all site styling (plain CSS)
components/
  Navbar.js, Footer.js, StatBlock.js, Demographics.js, PhotoPlaceholder.js
lib/
  site-config.js      — ← edit this first
```

## 6. Things to customize before launch

- [ ] Update `basePath`/`assetPrefix` in `next.config.js` to match your repo name
- [ ] Set `SITE_CREDIT.name` (and optionally `.href`) in `lib/site-config.js` — this is the "site built & maintained by ___" line in the footer
- [ ] Fill in real roster names/roles in `app/team/page.js`
- [ ] Fill in real sponsors in `app/sponsors/page.js` (delete the placeholder entry)
- [ ] Update `MAJORS` / `CLASS_YEARS` in `lib/site-config.js` with real numbers once you have them
- [ ] Add real photos via `IMAGES` in `lib/site-config.js` — see section 3 above
- [ ] Update `TEAM.eventsUrl` in `lib/site-config.js` to your real RobotEvents team page
- [ ] Update `STATS` in `lib/site-config.js` as facts about the team change (founding year, discipline count, etc.)
