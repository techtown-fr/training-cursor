---
layout: section
---

# Découverte de Cursor

Tab, Inline Edit, Agent et gestion du contexte

---
layout: default
---

# Les 3 niveaux d'autonomie

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="bg-blue-50 rounded-xl p-5 text-center">
  <div class="text-4xl mb-3">⌨️</div>

### Tab

<div class="text-sm text-left mt-2">

- Autocomplete **maison**, entraîné sur du code
- Suggère plusieurs lignes / blocs
- Navigue **dans et entre** les fichiers

</div>

<div class="mt-3 text-xs font-semibold text-blue-700">Touche <kbd>Tab</kbd></div>
</div>

<div class="bg-blue-50 rounded-xl p-5 text-center">
  <div class="text-4xl mb-3">✏️</div>

### Inline Edit

<div class="text-sm text-left mt-2">

- Sélectionnez du code, décrivez l'édition
- Idéal pour **refactor / réécriture / doc**
- Édition ciblée, sans quitter le fichier

</div>

<div class="mt-3 text-xs font-semibold text-blue-700"><kbd>Cmd</kbd>+<kbd>K</kbd></div>
</div>

<div class="bg-blue-50 rounded-xl p-5 text-center">
  <div class="text-4xl mb-3">🤖</div>

### Agent

<div class="text-sm text-left mt-2">

- Lecture/écriture sur la **codebase**
- Modes **Ask** (répond) et **Agent** (agit)
- Boucle multi-étapes + outils

</div>

<div class="mt-3 text-xs font-semibold text-blue-700"><kbd>Cmd</kbd>+<kbd>I</kbd></div>
</div>

</div>

<div class="mt-8 text-center text-sm opacity-70">

On monte en autonomie de gauche à droite — on choisit le bon outil selon la tâche.

</div>

---
layout: default
---

# Ask vs Agent

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="bg-gray-50 rounded-xl p-5">

### Ask

<v-clicks>

- **Répond** à vos questions sur le code
- Explore, explique, propose
- Ne modifie **pas** les fichiers
- Parfait pour comprendre / planifier

</v-clicks>

</div>

<div class="bg-blue-50 rounded-xl p-5">

### Agent

<v-clicks>

- **Agit** : crée, édite, exécute
- Enchaîne les étapes (Agent Loop)
- Appelle des outils (recherche, web, MCP)
- Exécution possible en **arrière-plan**

</v-clicks>

</div>

</div>

---
layout: default
---

# La clé : la gestion du contexte

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### La mémoire de travail de l'agent

<v-clicks>

- Prompt système + règles + pièces jointes + historique
- On **alimente** le contexte avec `@` :
  - `@Fichiers` / `@Dossiers`
  - `@Code` / symboles
  - `@Docs` / `@Web`
- **Indexation** de la codebase en arrière-plan

</v-clicks>

</div>

<div>

### Bonnes pratiques

<v-clicks>

- Contexte **pertinent**, pas exhaustif
- Visualiser l'usage du contexte (token breakdown)
- **Auto-summary** sur les longues conversations
- **Repartir d'un nouveau chat** pour une tâche distincte

</v-clicks>

</div>

</div>

<div class="mt-6 p-3 bg-blue-50 rounded-xl text-sm text-center">

Un bon contexte = des réponses pertinentes. C'est le levier n°1 de qualité.

</div>
