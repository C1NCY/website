# UC VEX U Robotics (C1ncy) Website

A  site for the University of Cincinnati's VEX U robotics team

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