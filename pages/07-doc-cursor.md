---
layout: section
---

# La doc au service du contexte

`@Docs`, recherche web et serveurs MCP

---
layout: default
---

# Pourquoi injecter de la doc ?

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### Le problème

<v-clicks>

- La **connaissance du modèle est figée** à sa date d'entraînement
- Les libs, API et SDK **évoluent vite**
- Résultat : du code **périmé** ou halluciné

</v-clicks>

</div>

<div>

### La solution Cursor

<v-clicks>

- Apporter la **doc à jour** dans le contexte
- Le modèle **raisonne sur des faits**, pas sa mémoire
- Moins d'erreurs, moins d'allers-retours

</v-clicks>

</div>

</div>

<div class="mt-6 p-3 bg-amber-50 rounded-xl text-sm text-center">

Règle d'or : pour une lib externe, **donne la doc** plutôt que d'espérer que le modèle « connaisse ».

</div>

---
layout: default
---

# Trois façons d'apporter la doc

<div class="grid grid-cols-3 gap-6 mt-6">

<div class="bg-blue-50 rounded-xl p-5">

### `@Docs`

<v-clicks>

- Indexe une **doc officielle** (URL)
- Réutilisable dans tous les chats
- Cursor garde l'index à jour

</v-clicks>

</div>

<div class="bg-blue-50 rounded-xl p-5">

### Recherche web

<v-clicks>

- L'agent **navigue le web** nativement
- Pas de `@` nécessaire — il cherche seul
- Ou via **`@Browser`** pour le navigateur intégré

</v-clicks>

</div>

<div class="bg-blue-50 rounded-xl p-5">

### MCP

<v-clicks>

- **Model Context Protocol**
- Connecte des **outils & sources** externes
- Ex. `context7` pour la doc à jour

</v-clicks>

</div>

</div>

<div class="mt-8 text-center">

```text
@Docs SpaceX API  →  "Récupère le dernier lancement via /v5/launches/latest"
```

</div>

<div class="mt-4 text-center text-sm opacity-70">

Les MCP = la même logique que ce que vous avez vu en Claude Code, intégrée dans l'IDE.

</div>

---
layout: center
class: text-center
---

# TP 1 — La doc au service du contexte

<div class="mt-6 text-lg">

Scaffolder une mini-app **SpaceX Launches** en HTML/JS/<code>fetch</code>

</div>

<div class="mt-4 inline-block bg-orange-100 text-orange-700 border border-orange-200 rounded-lg px-4 py-2 font-semibold">

Fichier : <code>exercices/01-doc-mcp-spacex.md</code> · ~15 min

</div>

<div class="mt-6 text-sm opacity-70">

Objectif : utiliser `@Docs` / MCP pour consommer l'API SpaceX **à jour**.

</div>
