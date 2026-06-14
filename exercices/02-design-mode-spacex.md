---
title: "TP 2 — Design Mode sur l'app SpaceX"
subtitle: "Formation : Cursor"
author: TechTown
date: 2026
---

# TP 2 — Design Mode sur l'app SpaceX

## Objectif

Reprendre la mini-app **SpaceX Launches** du TP 1 et l'améliorer **visuellement**
avec le **Design Mode** : au lieu de décrire chaque modification par écrit, on
**pointe** un élément dans le navigateur et on **annote** la modification ; Cursor
édite le code (HTML/CSS/JS) derrière.

## Prérequis

- **TP 1 terminé** : `index.html` affiche le dernier lancement + la liste des cartes
- Cursor 3.7+ avec **Design Mode** dans le navigateur
- La mini-app ouverte dans l'**onglet navigateur intégré** (ou via `@Browser`)

## Exercice 1 — Ouvrir l'app dans le navigateur Cursor

On part de l'app **réelle**, pas d'un canevas généré.

1. Ouvrez le projet du TP 1 dans Cursor.
2. Lancez l'app (ouvrez `index.html` dans l'**onglet navigateur intégré** de Cursor).
3. Vérifiez que les cartes de lancement s'affichent comme à la fin du TP 1.

> **Note** : le Design Mode agit sur votre **vraie page web** — toute modification
> est répercutée dans `index.html` / le CSS du projet, pas dans un artefact jetable.

## Exercice 2 — Première annotation visuelle

1. Activez le **Design Mode** dans le navigateur intégré.
2. **Cliquez** sur le titre de la page, puis **annotez** directement la modification :

```text
Agrandis ce titre, mets-le en gras et centre-le.
Ajoute un sous-titre « Derniers lancements SpaceX » sous le titre.
```

3. Vérifiez que Cursor a modifié le code source (et non un aperçu temporaire).

> **Comparaison pédagogique** : remarquez qu'on n'a **pas eu à décrire** quel
> élément modifier — la sélection visuelle a remplacé un long prompt textuel.

## Exercice 3 — Restyler les cartes de lancement

1. **Sélectionnez** une carte de lancement en Design Mode.
2. Annotez une refonte visuelle :

```text
Rends ces cartes plus lisibles : coins arrondis, ombre légère,
badge de statut coloré (vert = succès, rouge = échec),
et espace mieux le nom de la mission, la date et le statut.
```

3. Vérifiez que **toutes** les cartes adoptent le nouveau style (classe partagée).

## Exercice 4 — Itérer et ajuster

Le Design Mode brille dans la **boucle voir → annoter → vérifier**. Enchaînez 2-3
petits ajustements ciblés plutôt qu'un gros prompt :

```text
Réduis l'espacement entre les cartes.
Mets la date en gris plus clair.
Aligne les badges de statut à droite de chaque carte.
```

> **Note** : si une modification ne convient pas, utilisez l'**historique /
> checkpoints** de Cursor pour revenir en arrière avant de réessayer.

<br>

## Checklist de validation

- [ ] J'ai ouvert l'app du **TP 1** dans le navigateur intégré de Cursor
- [ ] J'ai activé le **Design Mode** et modifié un élément par **annotation visuelle**
- [ ] Les modifications sont bien appliquées dans le **code source** du projet
- [ ] Les **cartes de lancement** ont été restylées (badge de statut, mise en page)
- [ ] J'ai itéré en plusieurs **petits ajustements** plutôt qu'un seul gros prompt
- [ ] J'ai constaté le gain : **montrer** la modif plutôt que la **décrire**
