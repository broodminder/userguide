# Application BeesApp

![](./images/BroodMinder_Bees.png#smallImg)

Introduite en 2021, l'application BroodMinder-BEES est l'application Broodminder la plus puissante. Nous vous recommandons vivement de l'utiliser plutôt que l'application BroodMinder-Lite ou l'application BroodMinder-Apiary.

L'application BEES est structurée de la même manière que le site Web MyBroodMinder.com. Nous l'avons retravaillée pour améliorer l'expérience utilisateur.

- Une seule touche pour lire tous les capteurs situés dans le rayon d'action du téléphone ou de la tablette
- Créer et modifier les ruchers, les ruches et l'emplacement des capteurs
- Vue centrée sur les capteurs et vue centrée sur le rucher
- Intégration étroite avec MyBroodMinder.com, avec synchronisation automatique pour les ruchers éloignés qui n'ont pas d'accès à internet (cellulaire).
- Support du SubHub
    - Affichage en temps réel du niveau de signal des capteurs
    - Lecture du journal composite du capteur et affectation des données aux capteurs appropriés.
-   Notes de ruche alimentées par la voix
- Bluetooth amélioré
    - support pour les téléchargements de données simultanés
    - Téléchargement des données du SubHub à grande vitesse 

Les fonctionnalités de base pour un nouvel utilisteur 
- Première fois
    - Téléchargez BroodMinder-Bees depuis votre App Store ou Google Play
    - Lancez l'application et entrez (ou créez) votre nom d'utilisateur et votre mot de passe MyBroodMinder.com.
    - L'onglet CAPTEURS affichera automatiquement tous les capteurs que vous possédez et tous les capteurs qu'il détecte à proximité.
    - Réclamez vos capteurs
    - Créez un rucher et une ruche (onglet RUCHERS)
    - Assignez vos capteurs à un emplacement dans la ruche (onglet CAPTEURS)

- À chaque visite 
    - Choisissez l'onglet RUCHERS et appuyez sur SYNC. Les données stockées seront lues et les bases de données locales et bases de données MyBroodMinder.com seront mises à jour.

## Onglet CAPTEURS

L'onglet CAPTEURS vous donne le contrôle total des capteurs qui sont :
- dans votre inventaire des capteurs sur MyBroodMinder.com
- vus par votre téléphone via Bluetooth.

Cela signifie que lorsque vous visitez un rucher qui contient des capteurs, vous pouvez voir leurs relevés actuels.
Vous pouvez synchroniser des capteurs individuels à partir de cette page en appuyant sur le bouton "..." à côté du capteur.

![](./images/beesApp/devices_tab.png#largeImg)

**Conseil** : Le bouton de filtre est très pratique. Il permet de limiter ce qui est affiché dans cette liste. Par exemple, si vous sélectionnez 'Proches', il n'affichera que les capteurs vus par le téléphone. Ensuite, si vous actualisez l'écran (en tirant vers le bas), il effacera la liste et la remplira à nouveau au fur et à mesure qu'il verra le signal Bluetooth de chaque capteur. C'est une très bonne manière de vérifier que votre BroodMinder fonctionne.

## Onglet RUCHERS

L'onglet RUCHERS est celui que vous utiliserez le plus après la mise en place du système. Vous devez avoir un compte MyBroodMinder (MBM) (gratuit ou premium) car la configuration de votre rucher/ruche y est stockée (faites-le sur l'onglet 'réglages' ou sur MyBroodMinder.com).

![](./images/beesApp/apiaries_tab.png#largeImg)

**Conseil** : il est parfois préférable de synchroniser ruche par ruche si elles sont éloignées les unes des autres. Vous pouvez choisir 'Synchroniser' avec le "..." pour chaque ruche. Commencez par les ruches près du téléphone, vous n'avez pas besoin d'attendre que la synchronisation de chaque ruche se termine avant de commencer la suivante. Puis déplacez le téléphone vers une nouvelle position proche des ruches restantes et synchronisez à nouveau. Si vous appuyez sur l'état de la synchronisation qui apparaît en haut, il affichera plus de détails sur l'état exact du processus de synchronisation.

### Option des ruchers

Vous pouvez maintenant effectuer la configuration du rucher et de la ruche à partir de l'application. Pour y accéder, cliquez sur le bouton "..." en haut de la page.

![](./images/beesApp/apiary_option.png#largeImg)

### Option des ruches

Lorsque vous choisissez le "..." à côté de la ruche, vous avez beaucoup de choix. Toutes ces commandes (telles que Sync) fonctionnent au niveau du ruche. C'est-à-dire qu'elles visent à contrôler ou à modifier le répertoire de stockage, et non l'appareil.
Notez que ces commandes modifieront à la fois les données stockées sur votre téléphone et les données stockées dans Cloud MyBroodMinder.com

![](./images/beesApp/hive_option.png#largeImg)

**Conseil** :   Appuyez sur la ruche pour afficher plus de détails sur les capteurs BroodMinder.
            Appuyez deux fois sur la ruche pour faire apparaître le graphique.
            La fonction note permet d'utiliser votre microphone pour faciliter la transcription.

## Onglet RÉGLAGES

L'onglet "Réglages" vous permet de personnaliser votre application Bees.
 
![](./images/beesApp/settings_tab.png#largeImg)

Conseils :  Dans les réglages, vous trouverez des fonctions avancées telles que la suppression de la base de données locale.
            La connexion rapide modifiera le "ping" publicitaire des capteurs BroodMinder de 5 à 1 seconde. Cela permettra aux capteurs de se connecter plus rapidement, mais réduira également la durée de vie de la batterie à plusieurs mois au lieu de plusieurs années.

## Onglet AIDE

De l'aide, c'est de l'aide, nous espérons.

![](./images/beesApp/help_tab.png#largeImg)

## Mise en place du SUBHUB

Les SubHub sont un peu spéciaux car ils écoutent tous les capteurs à proximité.
Lorsque vous appuyez sur les trois points à côté d'un SubHub, le menu suivant s'affiche.

![](./images/beesApp/subhub_devices.png#largeImg)

### Détails du SubHub

Cette page vous permet de contrôler le SubHub. Vous pouvez synchroniser toutes les données et vous pouvez visualiser les données en direct. Voir les pages suivantes pour plus de détails.

![](./images/beesApp/subhub_details.png#largeImg)

### Le SubHub affiche tous les capteurs

Lorsque vous configurez votre SubHub, vous pouvez utiliser cet affichage pour savoir exactement quels capteurs votre SubHub voit. Tous les capteurs s'annoncent toutes les 5 ou toutes les 1 seconde. Cela signifie que vous devriez les voir tous s'afficher ici si vous êtes assez proche. Il affichera également tout appareil Bluetooth Low Energy (BLE) à portée si vous décochez la case "Capteurs Broodminder uniquement".

![](./images/beesApp/subhub_show.png#largeImg)

**Conseil** : Cette page est particulièrement utile pour optimiser la position de votre SubHub. Elle est pratique même si vous ne synchronisez pas avec votre téléphone. Vous verrez quels dispositifs sont étendus à votre concentrateur de données.





