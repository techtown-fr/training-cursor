---
name: generate-pdfs
description: Use when generating the TechTown training PDFs (slides, TPs/exercices, references) — before a session, before sharing supports, or after a merge on main.
---

# generate-pdfs — Production des PDFs de la formation

## Overview

Orchestrateur unique qui produit les **trois cibles PDF** de la formation TechTown :

| Cible | Source | Outil sous-jacent | Sortie |
|-------|--------|-------------------|--------|
| `slides` | `slides.md` + `pages/*.md` | `npx slidev export` | `dist/pdfs/slides.pdf` |
| `exercices` | `exercices/*.md` | `exercices/export-pdf.sh` (pandoc + xelatex) | `dist/pdfs/exercices/*.pdf` |
| `references` | `REFERENCES.md` | `scripts/build-pdf-references.mjs` (playwright-chromium) | `dist/pdfs/REFERENCES.pdf` |

Tout passe par `scripts/generate-pdfs.mjs`, exposé aussi via npm scripts (`pdf:all`, `pdf:slides`, `pdf:exercices`, `pdf:references`). Le dossier `dist/pdfs/` est gitignoré — aucun PDF n'est committé.

## When to Use

- Avant une session de formation, pour livrer slides + TPs + références aux participants.
- Après un merge sur `main` qui touche `slides.md`, `pages/`, `exercices/`, ou `REFERENCES.md`.
- Pour produire une archive cohérente des supports (mise à disposition manuelle).
- Pas pour publier sur Drive/Releases — cette étape n'est PAS automatisée par ce skill.

## Quick Reference

```bash
# Tout générer
npm run pdf:all

# Cibles individuelles
npm run pdf:slides
npm run pdf:exercices
npm run pdf:references

# Ou directement
node scripts/generate-pdfs.mjs all
node scripts/generate-pdfs.mjs slides
```

## Prérequis

- Node ≥ 24 (cf. `engines.node` du `package.json`).
- `npm ci` exécuté (Slidev + playwright-chromium).
- Pour la cible `exercices` uniquement : `pandoc` et `xelatex` installés localement (`brew install pandoc && brew install --cask mactex-no-gui`). Sans eux, la cible `exercices` échoue mais `slides` et `references` restent OK.

## Sortie

Tout va dans `dist/pdfs/` (gitignoré) :

```text
dist/pdfs/
├── slides.pdf
├── REFERENCES.pdf
└── exercices/
    ├── 01-installation.pdf
    ├── 02-projet-fil-rouge.pdf
    └── ...
```

## Common Mistakes

- **PDFs committés par erreur** : `dist/pdfs/` et `docs/REFERENCES.pdf` sont gitignorés. Si un PDF apparaît dans `git status`, vérifier le path.
- **`slides.pdf` à la racine** : ancien artefact, gitignoré aussi. Le skill écrit dans `dist/pdfs/slides.pdf`.
- **Cible `exercices` qui échoue silencieusement** : le script échoue avec exit ≠ 0 si pandoc/xelatex manquent — lire le message d'erreur.
- **Ne pas modifier** `exercices/export-pdf.sh` ni `scripts/build-pdf-references.mjs` : `generate-pdfs.mjs` est un wrapper, pas un remplacement.

## Hors scope (volontairement)

- Publication Drive (gws-drive) ou GitHub Releases — voir issue #60 pour une session ultérieure.
- Régénération automatique sur push : la GitHub Action `export-pdf.yml` (slides uniquement) existe déjà et n'est pas modifiée.
- PDF "all-in-one" fusionnant slides + TPs + références — non demandé pour ce MVP.
