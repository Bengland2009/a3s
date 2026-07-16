# Aux trois sentiers — Prototype mobile

Prototype cliquable de l'application mobile pour Aux trois sentiers, un organisme
québécois d'accompagnement en fin de vie. Écrans : connexion, accueil, m'apaiser,
lecteur audio, comprendre, détail d'une question, pensées, partager une pensée,
soutien, profil.

## Lancer le prototype

Aucune étape de build : ouvrez `index.html` avec un petit serveur statique, par exemple :

```
python3 -m http.server 8080
```

puis visitez `http://localhost:8080/index.html`. React, ReactDOM, Babel Standalone
et Lucide sont chargés via CDN (unpkg.com), donc une connexion internet est requise.

## Structure

- `index.html` — point d'entrée, assemble les écrans dans `PhoneFrame`
- `prototype/` — un fichier JSX par écran (transpilé dans le navigateur via Babel)
- `_ds/.../` — design system : tokens (`tokens/`), styles (`styles.css`), composants
  compilés (`_ds_bundle.js`)
- `assets/` — logo et image de sentier forestier

## Notes d'implémentation

Ce prototype a été importé depuis le projet Claude Design correspondant.
Une substitution a été faite car l'outil de synchronisation plafonne le
téléversement de fichiers binaires à 256 Kio :

- **Polices Inter** : le design source auto-hébergeait des fichiers `.ttf`
  (trop volumineux à transférer). `fonts.css` charge maintenant Inter et
  Fraunces depuis Google Fonts — rendu visuel identique.

La photo `forest-path.jpg` (`assets/` et `prototype/assets/`) est la version
allégée fournie directement par l'utilisateur.
