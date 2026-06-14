---
title: "TP 3 — Un dashboard SpaceX en canevas"
subtitle: "Formation : Cursor"
author: TechTown
date: 2026
---

# TP 3 — Un dashboard SpaceX en canevas

## Objectif

Transformer les données SpaceX des TP 1 et 2 en **canevas interactif** (dashboard
des lancements), inspecter le **rapport d'utilisation du contexte**, et esquisser
une **Automation** Cursor.

## Prérequis

- TP 1 et TP 2 terminés (mini-app SpaceX fonctionnelle et stylée)
- Cursor 3.7+ (canevas + rapport de contexte)

## Exercice 1 — Générer un canevas

Demandez à l'agent de produire un canevas plutôt qu'un simple fichier.

```text
À partir des données de l'API SpaceX, crée un canevas interactif :
un dashboard des lancements avec un compteur de succès/échecs,
une liste filtrable et un graphique des lancements par année.
```

Ouvrez le canevas, puis affichez-le en **plein écran** pour le présenter.

> **Note** : un canevas est un artefact interactif partageable avec l'équipe.
> Vous pouvez réutiliser les réflexes de **Design Mode** vus au TP 2 pour l'ajuster.

## Exercice 2 — Enrichir le tableau de bord

Itérez sur le canevas pour le rendre exploitable en réunion.

```text
Ajoute au dashboard : un filtre par année, un taux de réussite global,
et le tri des lancements par date décroissante.
```

Vérifiez que les indicateurs se recalculent quand on change le filtre.

## Exercice 3 — Rapport d'utilisation du contexte

1. Demandez à Cursor d'afficher le **rapport d'utilisation du contexte**.
2. Observez la répartition des tokens (prompt système, outils, règles, MCP…).
3. Utilisez **Debug with Agent** pour identifier des pistes de réduction.

## Exercice 4 (bonus) — Esquisser une Automation

Sans forcément la déployer, décrivez une **automation** utile :

```text
Propose une Cursor Automation qui, chaque matin (cron), récupère le dernier
lancement SpaceX et poste un résumé dans un canal Slack.
Quels trigger et tools faut-il activer ?
```

<br>

## Checklist de validation

- [ ] Un **canevas** interactif affiche le dashboard des lancements
- [ ] Le tableau de bord propose **filtre, taux de réussite et tri**
- [ ] J'ai consulté le **rapport d'utilisation du contexte**
- [ ] J'ai identifié au moins une piste de réduction du contexte
- [ ] (Bonus) J'ai décrit une Automation (trigger + tools)
