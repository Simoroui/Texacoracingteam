# Texaco Racing Team Tunisia - Site Web

Un site web moderne et dynamique pour l'équipe Texaco Racing Team Tunisia, mettant en valeur différentes disciplines de sports mécaniques : Drift, Twin Drift, Course 1.6, Karting, eGaming, Time Attack et Drag Race.

## Caractéristiques

- Design moderne et responsive
- Effets parallax pour une expérience utilisateur immersive
- Animations au défilement
- Navigation fluide avec défilement doux
- Galerie d'images interactive avec lightbox
- Formulaires de contact et d'abonnement à la newsletter
- Compatible avec tous les navigateurs modernes

## Structure du projet

```
texaco-racing-team/
├── index.html              # Page d'accueil principale
├── css/
│   └── style.css           # Styles CSS
├── js/
│   └── main.js             # JavaScript pour les interactions
└── img/                    # Dossier des images
    ├── texaco-logo.png     # Logo Texaco
    ├── hero-bg.jpg         # Image d'arrière-plan de la section hero
    ├── about-bg.jpg        # Image d'arrière-plan de la section à propos
    ├── team-placeholder.jpg # Image placeholder pour l'équipe
    ├── gallery-placeholder.jpg # Image placeholder pour la galerie
    └── sponsor-placeholder.png # Image placeholder pour les sponsors
```

## Technologies utilisées

- HTML5
- CSS3 (animations, flexbox, grid, variables CSS)
- JavaScript (vanilla, sans framework)
- Polices Google Fonts
- Icônes Font Awesome

## Fonctionnalités

- **Préchargeur** : Animation de chargement avant l'affichage complet du site
- **Navigation** : Menu de navigation fixe qui change d'apparence au défilement
- **Navigation mobile** : Menu hamburger pour les appareils mobiles
- **Parallax** : Effet de profondeur sur les sections d'en-tête et "À propos"
- **Cartes des disciplines** : Présentation des différentes disciplines avec animations
- **Événements** : Affichage des événements à venir avec slider sur mobile
- **Équipe** : Présentation des membres de l'équipe avec effets au survol
- **Galerie** : Images avec effet lightbox au clic
- **Formulaire de contact** : Formulaire avec validation côté client
- **Bouton retour en haut** : Retour en haut de page en douceur
- **Responsive** : Adaptation à tous les types d'écrans (mobile, tablette, bureau)

## Installation

1. Téléchargez ou clonez ce dépôt
2. Ouvrez `index.html` dans votre navigateur préféré

## Personnalisation

### Images
Remplacez les images placeholder par vos propres images :
- `texaco-logo.png` : Le logo de Texaco Racing Team
- `hero-bg.jpg` : L'image d'arrière-plan de la section principale
- `about-bg.jpg` : L'image d'arrière-plan de la section à propos
- Ajoutez vos propres images d'équipe et de galerie

### Couleurs
Modifiez les variables CSS dans `style.css` pour changer les couleurs principales :
```css
:root {
    --primary-color: #d00000;    /* Rouge Texaco */
    --secondary-color: #000000;  /* Noir */
    --accent-color: #ffffff;     /* Blanc */
    --text-color: #333333;       /* Texte principal */
    --bg-light: #f8f8f8;         /* Fond clair */
    --bg-dark: #1a1a1a;          /* Fond sombre */
}
```

## Licence

Ce projet est disponible pour une utilisation personnelle et commerciale. 