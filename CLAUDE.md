# CLAUDE.md

## Rôle du projet

Prototype clickable (sans backend, sans étape de build) de l'application mobile
**Aux trois sentiers**, organisme québécois d'accompagnement en fin de vie.
`prototype-v1-approved` (commit `6c211a1`) est la version de référence approuvée
par le client — voir `README.md` pour la structure des fichiers et les notes
d'implémentation.

## Design system — règles clés

- **Couleurs** : ivoire en fond dominant (jamais de blanc pur en fond
  principal), beige pour les grandes zones/cartes, prune pour la nav/titres/CTA,
  sauge pour tout ce qui touche calme/nature/audio, corail en accent ponctuel
  uniquement. Pas de dégradés saturés — seule exception : overlay sombre-doux
  sur image.
- **Typographie** : Fraunces pour H1/H2/éditorial, Inter pour tout le reste.
  Jamais de graisse fine pour le texte courant.
- **Formes** : coins très arrondis (22–24px cartes, 16–20px boutons/champs,
  pilule pour tags/onglet actif). Ombres très discrètes ou bordure fine 1px,
  jamais de shadow lourde.
- **Interaction** : zones tactiles ≥44×44px, boutons jamais en majuscules,
  jamais d'emoji, animations lentes et facultatives seulement.
- **Composants** : définis dans `_ds/.../_ds_bundle.js` (Button, Card, Input,
  Tag, Header, NavBar, AudioPlayer, InlineNote, FaqItem) et alimentés par les
  tokens dans `_ds/.../tokens/`.

## Lancer et tester

```
python3 -m http.server 8000
```

puis ouvrir `http://localhost:8000`. Aucune étape de build. Tester en
parcourant manuellement les écrans (connexion → accueil → chaque onglet et
leurs sous-écrans → retour) et en vérifiant l'absence d'erreurs console.

## Règles de travail

- **Réutiliser** les composants existants du design system (`_ds_bundle.js`)
  plutôt que d'en créer de nouveaux ou de dupliquer du style inline.
- **Ne pas modifier** les écrans, composants ou fichiers non concernés par la
  demande en cours.
- **Ne jamais reconstruire, migrer** (ex. vers un vrai build React/Vite) **ni
  refactoriser** l'application sans demande explicite du client.
