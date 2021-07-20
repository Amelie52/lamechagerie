# La Mechagerie

La messagerie favorite de vos matous.

## À propos

La vue principale est composée d'une liste de discussions à gauche et d'une discussion à droite. La discussion affichée dépend de celle qui a été sélectionnée.

Dans une discussion, vous pouvez envoyer un message, privé ou non. Les messages sont regroupés par date.

<img width="1439" alt="Capture d’écran 2021-07-20 à 04 05 04" src="https://user-images.githubusercontent.com/21146372/126290126-16a96806-8429-4cb9-8956-6b4783acf27a.png">

### Choix technique

Lorsque vous sélectionnez une discussion dans la liste, un appel à l'API est fait afin de charger celle-ci dépendemment de son id. C'est pour cela que lorsque vous envoyez un message puis changez de discussion, votre message n'apparaîtra plus.

Les appels aux API ont été mocké afin d'afficher des discussions de base (core/services/conversations). Différents setTimeout ont été ajouté afin de mocker au plus proche le délais de réponse des requêtes.

Deux context ont été créé :

- `MainContext` qui permet de récupérer toutes les informations concernant les conversations.
- `AuthContext` qui permet de récupérer les informations de notre utilisateur suite à un potentiel login.

## Scripts disponibles

### Prérequis

Il est conseillé d'utiliser la dernière version stable de nodejs.

Dans le répertoire du projet, vous pouvez exécuter :

### `yarn dev`

Exécute l'application en mode développement.
Ouvrez http://localhost:3000 pour l'afficher dans le navigateur.

La page se rechargera si vous apportez des modifications.

### `yarn test`

Lance les différents tests.

### `yarn build`

Construit l'application pour la production.

### `yarn serve`

Afin de prévisualiser localement la version de production.
