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
  - `@Docs` / `@Browser`
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

---
layout: default
---

# Recherche sémantique dans la codebase

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### Deux outils, une stratégie

<v-clicks>

- **Instant Grep** : correspondance exacte (symbole, regex)
- **Recherche sémantique** : trouve par le **sens** (embeddings)
- L'agent **choisit l'outil** selon votre prompt
- Enchaîne les deux pour les tâches complexes

</v-clicks>

</div>

<div>

### Comment ça marche

<v-clicks>

- Code découpé en blocs → **embeddings vectoriels**
- Indexation auto à l'ouverture du workspace
- Sous-agent **Explore** : recherche parallèle sans alourdir le chat
- Vous décrivez, l'agent **trouve** — pas besoin de connaître le nom exact

</v-clicks>

</div>

</div>

<div class="mt-6 p-3 bg-blue-50 rounded-xl text-sm text-center">

Exemple : « Où gère-t-on l'authentification ? » → l'agent trouve `middleware/session.ts` même sans le mot « authentication ».

</div>

<div class="mt-2 text-xs opacity-60 text-center">

Source : [cursor.com/fr/docs/agent/tools/search](https://cursor.com/fr/docs/agent/tools/search)

</div>

---
layout: default
---

# Les règles (Rules)

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### Instructions persistantes

<v-clicks>

- **Projet** : `.cursor/rules/*.mdc` (versionnées)
- **Utilisateur** : préférences globales Cursor
- **Équipe** : règles imposées depuis le dashboard
- **AGENTS.md** : alternative simple en Markdown

</v-clicks>

</div>

<div>

### Modes d'application

<v-clicks>

- **Always Apply** : à chaque session
- **Apply Intelligently** : quand l'agent juge pertinent
- **Specific Files** : selon un glob (`src/**/*.tsx`)
- **Manually** : via `@ma-regle` dans le chat

</v-clicks>

</div>

</div>

<div class="mt-6 p-3 bg-amber-50 rounded-xl text-sm text-center">

Créez une règle avec `/create-rule` dans le chat. Gardez-les **courtes** (&lt; 500 lignes) et **ciblées** — référez des fichiers plutôt que copier du code.

</div>

<div class="mt-2 text-xs opacity-60 text-center">

Source : [cursor.com/fr/docs/rules](https://cursor.com/fr/docs/rules)

</div>
