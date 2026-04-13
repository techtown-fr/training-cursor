# training-template — TechTown Training Template

Base template for creating a new TechTown training session with Slidev.

## Using this template

### 1. Clone or duplicate this repo

```bash
# Option A: use as a GitHub template
# Click "Use this template" on GitHub

# Option B: clone manually
git clone https://github.com/techtown-fr/training-template training-[NAME]
cd training-[NAME]
git remote set-url origin https://github.com/techtown-fr/training-[NAME].git
```

### 2. Customize

Replace all occurrences of `[TITRE DE LA FORMATION]` and `TRAINING_NAME`:

```
package.json
slides.md
CLAUDE.md, PLAN.md, REFERENCES.md
exercices/README.md
exercices/01-exemple.md
```

### 3. Configure Firebase

1. Create a Firebase project: [console.firebase.google.com](https://console.firebase.google.com)
2. Update `.firebaserc` with the real project ID
3. Configure GitHub Actions secrets and variables (see [docs/firebase-setup.md](docs/firebase-setup.md))

### 4. Install and start

```bash
npm install
npm run dev
```

## Project structure

```
.
├── slides.md               # Slidev entry point
├── pages/                  # Slides by section
│   ├── 01-formateurs.md    # Trainers introduction
│   ├── 02-introductions.md # Round table
│   ├── 03-programme.md     # Training programme
│   ├── 04-techtown.md      # TechTown presentation + logistics
│   └── 99-merci.md         # Closing slide
├── exercices/              # Hands-on exercises
│   ├── README.md           # Exercise index
│   ├── 01-exemple.md       # Exercise template
│   ├── export-pdf.sh       # PDF generation script
│   └── techtown-template.tex # LaTeX template for PDFs
├── public/                 # Static assets (training-specific only)
├── global-top.vue          # Persistent header (logo)
├── global-bottom.vue       # Persistent footer (title + pagination)
├── style.css               # TechTown brand styles
├── CLAUDE.md               # Project context for Claude Code
├── PLAN.md                 # Detailed training plan
└── REFERENCES.md           # Resources and useful links
```

## Available commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (localhost:3030) |
| `npm run build` | Production build (→ dist/) |
| `npm run export` | Export slides to PDF |
| `npm run lint` | Check Markdown formatting |
| `npm run lint:fix` | Auto-fix Markdown formatting |
| `npm run validate` | Lint + build (pre-deployment check) |

## CI/CD

The GitHub Actions pipeline automatically runs:

- **Lint** — Markdown formatting and slide import checks
- **Build** — Slidev compilation
- **Preview** — Firebase deploy on PRs (temporary URL, 7-day expiry)
- **Production** — Firebase deploy on merge to `main`

See [docs/firebase-setup.md](docs/firebase-setup.md) for the full setup guide.

## TechTown branding

- Font: **Poppins**
- Primary color: `#1c63ed`
- Cover/intro: gradient `135deg #1c63ed → #1557d6 → #3b7eff`
- Logo: provided by `slidev-theme-techtown` — do not copy into `public/`

Do not modify the branding without approval from the TechTown team.
