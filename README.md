# The Seoul Local Test (Seoul Completion Map)

> A single-page, swipe-card web app that asks visitors "How local are you?" through 18 data-driven missions across Seoul.

## What it does

Each card is a mission: a Korean phrase (Hangul, romanization and English), a place in Seoul, and a thing to do there.
Swipe right (or tap **DONE**) for missions you have done, left (**LATER**) for the rest. At the end you get a
"visa" certificate with your local score, a Seoul district map of completed missions, your open-mission list,
a calendar (`.ics`) reminder for your next trip, and a share button. Progress is kept in the browser's `localStorage`.

Mission points follow an Experience Rarity Index (ERI) built from Korea Tourism Data Lab (KTO) open data,
as documented at the top of `missions.js`. The district map is based on KOSTAT boundaries
(southkorea/seoul-maps). The interface is in English with Korean phrases and place names.

## How to run

No build step and no dependencies. Open `index.html` in a browser (or serve the folder with any static
web server, e.g. `python3 -m http.server`).

## Files

| File | Content |
|---|---|
| `index.html` | The whole app: markup, styles and script |
| `missions.js` | The 18 missions (phrases, places, points, card-back chart data) |
| `seoul_map.js` | SVG paths of Seoul's districts |
| `data.js` | Earlier 18-card place deck (not loaded by `index.html`) |

## Status

Prototype (v9, August 2026).

---
https://github.com/lshpy
