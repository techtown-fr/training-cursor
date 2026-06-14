# Exercices — Cursor

## Structure

### Atelier 3h

| Fichier | TP | Thème | Durée |
|---------|----|-------|-------|
| `01-doc-mcp-spacex.md` | TP 1 — La doc au service du contexte | Scaffolder la mini-app SpaceX (`@Docs`/MCP) | 15 min |
| `02-design-mode-spacex.md` | TP 2 — Design Mode sur l'app SpaceX | Itérer visuellement sur l'app du TP 1 | 15 min |
| `03-canvas-spacex.md` | TP 3 — Dashboard en canevas | Canevas interactif + rapport de contexte | 15 min |

> `01-exemple.md` reste disponible comme gabarit de TP.

## Projet fil rouge

Tous les TPs s'articulent autour de **SpaceX Launches**, une mini-app web en
HTML/JS/`fetch` consommant l'API publique `api.spacexdata.com` :

- **TP 1** : récupérer et afficher les lancements en s'appuyant sur la doc à jour
- **TP 2** : améliorer visuellement cette app avec le **Design Mode** (annotation)
- **TP 3** : transformer ces données en **canevas interactif** et inspecter le contexte

## Export PDF

Prérequis : `pandoc` et une distribution LaTeX (`xelatex`).

```bash
chmod +x exercices/export-pdf.sh
./exercices/export-pdf.sh
```

Les PDFs sont générés dans `exercices/pdf/`.
