# training-template — Template de formation TechTown

Template de base pour créer une nouvelle formation TechTown avec Slidev.

## Utilisation du template

### 1. Cloner ou dupliquer ce repo

```bash
# Option A : utiliser comme template GitHub
# Cliquer sur "Use this template" sur GitHub

# Option B : cloner manuellement
git clone https://github.com/techtown-fr/training-template training-[NOM]
cd training-[NOM]
git remote set-url origin https://github.com/techtown-fr/training-[NOM].git
```

### 2. Personnaliser

Remplacer toutes les occurrences de `[TITRE DE LA FORMATION]` et `TRAINING_NAME` :

```bash
# package.json
# slides.md
# CLAUDE.md, PLAN.md, REFERENCES.md
# exercices/README.md
# exercices/01-exemple.md
```

### 3. Configurer Firebase

1. Créer un projet Firebase : [console.firebase.google.com](https://console.firebase.google.com)
2. Mettre à jour `.firebaserc` avec le vrai project ID
3. Configurer les secrets et variables GitHub Actions (voir [docs/firebase-setup.md](docs/firebase-setup.md))

### 4. Installer et démarrer

```bash
npm install
npm run dev
```

## Structure du projet

```
.
├── slides.md               # Point d'entrée Slidev
├── pages/                  # Slides par section
│   ├── 01-formateurs.md    # Présentation des formateurs
│   ├── 02-introductions.md # Tour de table
│   ├── 03-programme.md     # Programme de la formation
│   ├── 04-techtown.md      # Présentation TechTown + infos pratiques
│   └── 99-merci.md         # Slide de fin
├── exercices/              # TPs pratiques
│   ├── README.md           # Index des exercices
│   ├── 01-exemple.md       # Template d'exercice
│   ├── export-pdf.sh       # Script de génération PDF
│   └── techtown-template.tex # Template LaTeX pour les PDFs
├── public/                 # Assets statiques
│   └── (vide — assets de la formation uniquement)
├── global-top.vue          # En-tête fixe (logo)
├── global-bottom.vue       # Pied de page fixe (titre + pagination)
├── style.css               # Styles TechTown
├── CLAUDE.md               # Contexte projet pour Claude Code
├── PLAN.md                 # Plan pédagogique détaillé
└── REFERENCES.md           # Ressources et liens utiles
```

## Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarrer le serveur de développement (localhost:3030) |
| `npm run build` | Build de production (→ dist/) |
| `npm run export` | Exporter en PDF |
| `npm run lint` | Vérifier le formatage Markdown |
| `npm run lint:fix` | Corriger le formatage automatiquement |
| `npm run validate` | Lint + build (pré-déploiement) |

## CI/CD

Le pipeline GitHub Actions effectue automatiquement :

- **Lint** : vérification du Markdown et des imports de slides
- **Build** : compilation Slidev
- **Preview** : déploiement Firebase sur les PRs (URL temporaire 7 jours)
- **Production** : déploiement Firebase sur merge vers `main`

Voir [docs/firebase-setup.md](docs/firebase-setup.md) pour la configuration complète.

## Branding TechTown

- Police : **Poppins**
- Couleur primaire : `#1c63ed`
- Cover/intro : gradient `135deg #1c63ed → #1557d6 → #3b7eff`
- Logo : fourni par le thème `slidev-theme-techtown` (pas à dupliquer dans `public/`)

Ne pas modifier le branding sans validation de l'équipe TechTown.
