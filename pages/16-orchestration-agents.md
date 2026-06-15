---
layout: section
---

# Plusieurs agents en parallèle

Multitask, worktrees et revue multi-modèles

---
layout: default
---

# Multitask & worktrees

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### `/multitask`

<v-clicks>

- Lance des **sous-agents asynchrones** en parallèle
- Découpe les grosses tâches en **sous-tâches**
- Traite la file d'attente en parallèle au lieu d'attendre
- Idéal pour explorer ou modifier plusieurs zones à la fois

</v-clicks>

</div>

<div>

### Worktrees & multi-racine

<v-clicks>

- **Worktrees** : tâches isolées sur différentes branches
- Ramener une branche au premier plan en **un clic**
- **Espaces multi-racine** : frontend + backend + libs partagées
- Une session agent couvre **plusieurs dépôts**

</v-clicks>

</div>

</div>

<div class="mt-6 p-3 bg-blue-50 rounded-xl text-sm text-center">

Réflexe : une grosse feature → `/multitask` pour paralléliser, worktrees pour tester chaque branche isolément.

</div>

<div class="mt-2 text-xs opacity-60 text-center">

Source : [cursor.com/fr/changelog/04-24-26](https://cursor.com/fr/changelog/04-24-26) · Cursor 3.2

</div>

---
layout: default
---

# Revue multi-modèles

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### La skill `/multi-model-review`

<v-clicks>

- Posez une question : `/multi-model-review quel avantage SEO pour mon projet ?`
- Cursor **propose les modèles** adaptés à la tâche
- Lance un **sous-agent de revue** par modèle
- **Synthèse** consolidée à la fin

</v-clicks>

</div>

<div>

### Complémentaire à `/review`

<v-clicks>

- **`/review`** : Bugbot + revue de sécurité avant push
- **Multi-modèles** : plusieurs angles de raisonnement
- Utile pour **architecture**, **SEO**, **accessibilité**…
- Stackez les rôles : génération → revue → vérif

</v-clicks>

</div>

</div>

<div class="mt-6 p-3 bg-amber-50 rounded-xl text-sm text-center">

Exemple concret : « `/multi-model-review` quel impact perf sur ce composant React ? » → 3 modèles analysent, vous recevez une synthèse actionnable.

</div>
