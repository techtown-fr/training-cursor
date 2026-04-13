# Configuration Firebase & CI/CD

Ce guide explique comment configurer le déploiement Firebase pour une nouvelle formation TechTown.

## Prérequis

- Accès à la console Firebase TechTown
- Accès aux paramètres GitHub du repo
- `firebase-tools` installé : `npm install -g firebase-tools`

## 1. Créer le projet Firebase

1. Aller sur [console.firebase.google.com](https://console.firebase.google.com)
2. Créer un nouveau projet : `techtown-training-[NOM]`
3. Activer **Firebase Hosting**
4. Noter le **Project ID**

## 2. Mettre à jour `.firebaserc`

```json
{
  "projects": {
    "default": "techtown-training-[NOM]"
  }
}
```

## 3. Configurer Workload Identity Federation (WIF)

Au lieu de stocker une clé de compte de service, on utilise la fédération d'identité de charge de travail (WIF) pour une auth sécurisée depuis GitHub Actions.

### Créer le pool d'identités

```bash
gcloud iam workload-identity-pools create "github-actions" \
  --project="techtown-training-[NOM]" \
  --location="global" \
  --display-name="GitHub Actions"
```

### Créer le provider

```bash
gcloud iam workload-identity-pools providers create-oidc "github" \
  --project="techtown-training-[NOM]" \
  --location="global" \
  --workload-identity-pool="github-actions" \
  --display-name="GitHub" \
  --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository" \
  --issuer-uri="https://token.actions.githubusercontent.com"
```

### Créer le compte de service

```bash
gcloud iam service-accounts create "firebase-deploy" \
  --project="techtown-training-[NOM]" \
  --display-name="Firebase Deploy"
```

### Accorder les rôles nécessaires

```bash
# Rôle Firebase Hosting
gcloud projects add-iam-policy-binding "techtown-training-[NOM]" \
  --member="serviceAccount:firebase-deploy@techtown-training-[NOM].iam.gserviceaccount.com" \
  --role="roles/firebasehosting.admin"
```

### Lier le compte de service au pool WIF

```bash
gcloud iam service-accounts add-iam-policy-binding \
  "firebase-deploy@techtown-training-[NOM].iam.gserviceaccount.com" \
  --project="techtown-training-[NOM]" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/github-actions/attribute.repository/techtown-fr/training-[NOM]"
```

## 4. Configurer les secrets GitHub

Dans **Settings → Secrets and variables → Actions** du repo GitHub :

### Secrets

| Nom | Valeur |
|-----|--------|
| `GCP_WORKLOAD_IDENTITY_PROVIDER` | `projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/github-actions/providers/github` |
| `GCP_SERVICE_ACCOUNT` | `firebase-deploy@techtown-training-[NOM].iam.gserviceaccount.com` |

### Variables

| Nom | Valeur |
|-----|--------|
| `FIREBASE_PROJECT_ID` | `techtown-training-[NOM]` |

## 5. Premier déploiement manuel

```bash
# Se connecter
firebase login

# Déployer
npm run build
firebase deploy --only hosting --project techtown-training-[NOM]
```

## 6. Vérification

- URL de production : `https://techtown-training-[NOM].web.app`
- URL custom (si configurée) : `https://formations.techtown.fr/[NOM]`

## URLs des formations existantes

| Formation | Firebase Project | URL |
|-----------|-----------------|-----|
| Claude Code | `techtown-training-cc` | https://techtown-training-cc.web.app |

## Troubleshooting

### Erreur WIF : `PERMISSION_DENIED`

Vérifier que le `PROJECT_NUMBER` (pas le project ID) est correct dans le workload identity provider.

```bash
gcloud projects describe techtown-training-[NOM] --format="value(projectNumber)"
```

### Build qui échoue sur le thème

Le thème `slidev-theme-techtown` est installé depuis GitHub. Vérifier que le repo `techtown-fr/slidev-theme` est public.

### Preview URL vide

Le parsing JSON de firebase-tools peut varier. Le script dans `ci.yml` utilise deux stratégies de fallback pour extraire l'URL.
