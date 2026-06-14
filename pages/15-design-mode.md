---
layout: section
---

# Design Mode

Itérer visuellement sur vos interfaces web

---
layout: default
---

# Pointer au lieu de décrire

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### Le principe

<v-clicks>

- **Sélectionnez** un élément d'interface à l'écran
- **Annotez** la modification souhaitée directement dessus
- L'agent modifie le **code source** derrière
- Fini les longs prompts pour décrire un layout

</v-clicks>

</div>

<div>

### Pourquoi c'est puissant

<v-clicks>

- Itération **visuelle** — comme un designer
- Moins d'ambiguïté qu'un texte libre
- Idéal pour **CSS**, composants, mise en page
- Boucle rapide : voir → annoter → vérifier

</v-clicks>

</div>

</div>

<div class="mt-6 p-3 bg-blue-50 rounded-xl text-sm text-center">

Au lieu de **décrire** la modif par écrit, vous la **montrez**.

</div>

---
layout: default
---

# Pour faire du Web

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="bg-blue-50 rounded-xl p-5">

### Dans le navigateur

<v-clicks>

- Vos **apps web** : HTML/CSS, React, Vue…
- Mini-app **SpaceX** du TP 1 (`localhost`)
- Onglet **Browser** intégré ou `@Browser`
- **Design Mode dans le navigateur** (changelog juin 2026)

</v-clicks>

</div>

<div class="bg-gray-50 rounded-xl p-5">

### Optimisé pour le Web

<v-clicks>

- Sauvegarde intelligente
- Compris par l'agent de code

</v-clicks>

</div>

</div>

<div class="mt-6 p-3 bg-amber-50 rounded-xl text-sm text-center">

Le Design Mode est d'abord un outil **front-end** pour itérer sur votre app web rapidement.

</div>

---
layout: default
---

# Workflow Design Mode

<div class="grid grid-cols-2 gap-8 mt-4">

<div>

<v-clicks>

1. Lancez votre app (**dev server** ou canevas)
2. Activez le **Design Mode**
3. **Cliquez** sur l'élément à modifier
4. **Annotez** : couleurs, espacements, contenu…
5. Vérifiez le rendu — l'agent a patché le code

</v-clicks>

</div>

<div class="bg-gray-50 rounded-xl p-5 text-sm">

### Exemple (mini-app SpaceX)

```text
Rends ces cartes plus lisibles : badge de statut coloré,
logo de la mission, et tri par date décroissante.
```

<div class="mt-3 opacity-80">

Sélectionnez une carte de lancement, annotez — Cursor applique dans `index.html` / `style.css`.

</div>

</div>

</div>

---
layout: center
class: text-center
---

# TP 2 — Design Mode sur l'app SpaceX

<div class="mt-6 text-lg">

Reprendre l'app du **TP 1** et l'améliorer **visuellement** en Design Mode

</div>

<div class="mt-4 inline-block bg-orange-100 text-orange-700 border border-orange-200 rounded-lg px-4 py-2 font-semibold">

Fichier : <code>exercices/02-design-mode-spacex.md</code> · ~15 min

</div>

<div class="mt-6 text-sm opacity-70">

Objectif : **montrer** la modif (sélection + annotation) plutôt que la **décrire**.

</div>
