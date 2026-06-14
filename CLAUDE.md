# Projet : Formation "Cursor"

Présentation Slidev pour une formation TechTown. Langue : français.

## Stack

- Slidev 52.x, slidev-theme-techtown, UnoCSS, Shiki
- `npm run dev` → localhost:3030 | `npm run build` → dist/
- CI/CD : GitHub Actions + Firebase Hosting (`FIREBASE_PROJECT_ID`)
- Linting : markdownlint-cli2 + husky (pre-commit) + lint-staged

## Fichiers clés

- `slides.md` — Point d'entrée, importe les pages via `src:`
- `pages/*.md` — Slides par section (frontmatter YAML + Markdown + Vue)
- `style.css` — Styles custom TechTown, chargés automatiquement par Slidev
- `global-top.vue` — En-tête fixe avec logo TechTown (masqué sur cover/intro)
- `global-bottom.vue` — Pied de page fixe avec titre et numérotation
- `public/` — Assets statiques (logo TechTown)
- `exercices/*.md` — TPs Markdown numérotés
- `.github/workflows/ci.yml` — Pipeline lint → build → deploy
- `firebase.json` — Config Firebase Hosting (public: dist/)
- `.markdownlint-cli2.jsonc` — Règles markdownlint adaptées Slidev

## Branding TechTown

- Police : Poppins (Google Fonts)
- Couleur primaire : `#1c63ed`
- Couleur secondaire : `#1557d6`
- Accent : `#3b7eff`
- Texte : `#1f2937`
- Cover slides : gradient `135deg #1c63ed → #1557d6 → #3b7eff`, logo blanc (filter invert)
- Logo : fourni par `slidev-theme-techtown` (importé via `?url` dans les composants Vue)

## Conventions Slidev

- Séparer les slides par `---` sur une ligne seule
- Layouts disponibles : `default`, `cover`, `center`, `two-cols`, `image-right`, `section`, `intro`
- Frontmatter par slide : `layout`, `class`, `transition`
- Composants Vue inline supportés via MDC (`mdc: true`)
- Code blocks : syntaxe Shiki avec highlighting de lignes `{1,3-5}`
- Animations : `<v-clicks>` pour les listes progressives

## Exercices (TPs)

- `exercices/*.md` — TPs Markdown avec frontmatter YAML (title, subtitle, author, date)
- Numérotation : `01-`, `02-`, ..., `99-`
- Export PDF : `./exercices/export-pdf.sh` (pandoc + xelatex)
- PDFs générés dans `exercices/pdf/` (gitignored)
- Chaque TP contient : objectif, prérequis, exercices numérotés, checklist de validation

## CI/CD

- **Production** : push sur `main` → lint → build → deploy Firebase
- **Preview** : PR vers `main` → lint → build → deploy preview (URL temporaire 7j)
- **Pre-commit** : husky + lint-staged → markdownlint sur `.md` modifiés
- **Auth** : Workload Identity Federation via secrets GitHub (`GCP_WORKLOAD_IDENTITY_PROVIDER`, `GCP_SERVICE_ACCOUNT`)
- **Variable** : `FIREBASE_PROJECT_ID` à configurer dans les variables GitHub Actions

## Conventions de commit (gitmoji)

- Format des messages : `<emoji> <description à l'impératif en français>`
- **Utiliser gitmoji**, pas les Conventional Commits (`feat:`, `fix:`, etc.)
- Un emoji par commit, placé en début de titre
- Corps de commit optionnel pour expliquer le « pourquoi »
- Emojis courants pour ce projet :
  - ✨ `:sparkles:` — nouvelle fonctionnalité / contenu
  - 🐛 `:bug:` — correction de bug
  - 📝 `:memo:` — documentation / contenu de slides
  - 💄 `:lipstick:` — style, mise en page, UI
  - ♻️ `:recycle:` — refactoring
  - 🔧 `:wrench:` — configuration
  - 🔥 `:fire:` — suppression de code ou de fichiers
  - ⬆️ `:arrow_up:` — mise à jour de dépendances
  - 🚀 `:rocket:` — déploiement / CI
- Exemple : `✨ Ajoute l'atelier Cursor 3h (slides + TPs)`

## Paramétrage Firebase

1. Modifier `.firebaserc` avec le vrai project ID Firebase
2. Configurer les secrets GitHub :
   - `GCP_WORKLOAD_IDENTITY_PROVIDER` : provider WIF GCP
   - `GCP_SERVICE_ACCOUNT` : compte de service Firebase
3. Configurer la variable GitHub Actions : `FIREBASE_PROJECT_ID`

## Règles

- Rédiger les slides en français
- Garder les slides concises : max 6-8 points par slide
- Utiliser les classes UnoCSS/Tailwind pour le styling inline
- Ne pas modifier le branding (couleurs, police, logo) sans demande explicite
- Tester visuellement après modification (`npm run dev`)
- `npm run lint` doit passer sans erreur avant commit
- Messages de commit en **gitmoji** (voir « Conventions de commit »)
- **JAMAIS push sur `main` directement** — toujours créer une branche + PR
