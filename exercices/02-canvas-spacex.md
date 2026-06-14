---
title: "TP 2 — Un dashboard SpaceX en canevas"
subtitle: "Formation : Cursor"
author: TechTown
date: 2026
---

# TP 2 — Un dashboard SpaceX en canevas

## Objectif

Transformer les données SpaceX du TP 1 en **canevas interactif** (dashboard des
lancements), itérer dessus avec le **Design Mode**, inspecter le **rapport
d'utilisation du contexte**, et esquisser une **Automation** Cursor.

## Prérequis

- TP 1 terminé (mini-app SpaceX fonctionnelle)
- Cursor 3.7+ (canevas + Design Mode)

## Exercice 1 — Générer un canevas

Demandez à l'agent de produire un canevas plutôt qu'un simple fichier.

```text
À partir des données de l'API SpaceX, crée un canevas interactif :
un dashboard des lancements avec un compteur de succès/échecs,
une liste filtrable et un graphique des lancements par année.
```

Ouvrez le canevas, puis affichez-le en **plein écran** pour le présenter.

> **Note** : un canevas est un artefact interactif partageable avec l'équipe.

## Exercice 2 — Itérer en Design Mode

1. Activez le **Design Mode** dans le canevas.
2. **Sélectionnez** un élément (ex. une carte de lancement) et **annotez-le**
   directement, sans tout décrire par écrit :

```text
Rends ces cartes plus lisibles : badge de statut coloré,
logo de la mission, et tri par date décroissante.
```

3. Vérifiez que Cursor applique la modification.

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
- [ ] J'ai itéré via le **Design Mode** (annotation visuelle)
- [ ] J'ai consulté le **rapport d'utilisation du contexte**
- [ ] J'ai identifié au moins une piste de réduction du contexte
- [ ] (Bonus) J'ai décrit une Automation (trigger + tools)
