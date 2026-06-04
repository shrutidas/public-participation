# public-participation

Tracking public participation in science and technology cases.

Interactive parallel timelines for four science and technology policy case studies.

Project Site: [`https://shrutidas.github.io/public-participation`](https://shrutidas.com/public-participation/)

## Local preview

From the repo root:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Lint case studies

Before pushing, run:

```bash
node scripts/lint-cases.mjs
```

This checks that every case file loads, uses valid categories (`red`, `orange`, `green`, `blue`, `purple`), and has complete entries with valid source URLs. CI runs the same check before deploy.
