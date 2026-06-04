# public-participation

Tracking public participation in science and technology cases.

Interactive parallel timelines for four science and technology policy case studies.

## Project structure

```
index.html          # Site entry point (GitHub Pages serves this at the repo root)
css/styles.css      # Styles
js/app.js           # Timeline data and interactivity
```

## GitHub Pages

This repo includes a [GitHub Actions workflow](.github/workflows/static.yml) that deploys the site on every push to `main`.

1. In the repo on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow uploads the repo root; `index.html` becomes the homepage.

For a project site, the URL is typically `https://<username>.github.io/public-participation/`.

## Local preview

From the repo root:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).
