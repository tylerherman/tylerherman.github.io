# tylerherman.com

Source for [tylerherman.com](https://tylerherman.com) — Tyler Herman's UX and product design portfolio, hosted on GitHub Pages.

## Stack

Static HTML/CSS/JS, no build step. jQuery is vendored under `js/vendor/`.

## Structure

Each case study lives in its own top-level folder (e.g. `acuitymd/`, `allstate/`, `bcbs/`, `farecompare/`, `fantasy-nation/`, `simpson/`), with an `index.html` and an `img/` subfolder for that project's assets. Shared assets live in the top-level `img/`, `js/`, and `style.css`.

## Local development

Serve the folder locally and open it in a browser — no build tools needed:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

This repo is published via GitHub Pages. Pushing to `master` deploys automatically. The custom domain is configured via the `CNAME` file in this repo plus DNS records at the domain registrar (see below).

### DNS (for tylerherman.com)

Apex domain `A` records point at GitHub Pages' IP addresses:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | tylerherman.github.io |
