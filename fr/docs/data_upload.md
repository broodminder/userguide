# Récupération des données

Tous les capteurs transmettent en Bluetooth. Il existe deux manières de récupérer les données qu'ils enregistrent. 

1. avec votre smartphone et l'application Broodminder Bees.

2. avec un transmetteur automatique que nous appelons Hub.

[![Présentation et mise en route des 3 capteurs](https://img.youtube.com/vi/HFkD4pLsBHU/0.jpg)](https://www.youtube.com/watch?v=HFkD4pLsBHU)


## BroodMinder - BEES
![](./images/Broodminder_Bees.png#smallImg)

Cette application que vous prouverez sur Android et IOS vous permet d'assurer la gestion intégrale des capteurs. De la création de votre premier compte en passant par la création des ruchers et des ruches auxquelles vous allez affecter (ou pas) des capteurs.

L'application permet également de visualiser les données mesurées par les capteurs et aussi d'ajouter des notes d'inspection par exemple.


### Vue d'ensemble

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

### Onglet CAPTEURS

L'onglet CAPTEURS vous donne le contrôle total des capteurs qui sont :
- dans votre inventaire des capteurs sur MyBroodMinder.com
- vus par votre téléphone via Bluetooth.

Cela signifie que lorsque vous visitez un rucher qui contient des capteurs, vous pouvez voir leurs relevés actuels.
Vous pouvez synchroniser des capteurs individuels à partir de cette page en appuyant sur le bouton "..." à côté du capteur.

![](./images/beesApp/devices_tab.png#largeImg)

**Conseil** : Le bouton de filtre est très pratique. Il permet de limiter ce qui est affiché dans cette liste. Par exemple, si vous sélectionnez 'Proches', il n'affichera que les capteurs vus par le téléphone. Ensuite, si vous actualisez l'écran (en tirant vers le bas), il effacera la liste et la remplira à nouveau au fur et à mesure qu'il verra le signal Bluetooth de chaque capteur. C'est une très bonne manière de vérifier que votre BroodMinder fonctionne.

### Onglet RUCHERS

L'onglet RUCHERS est celui que vous utiliserez le plus après la mise en place du système. Vous devez avoir un compte MyBroodMinder (MBM) (gratuit ou premium) car la configuration de votre rucher/ruche y est stockée (faites-le sur l'onglet 'réglages' ou sur MyBroodMinder.com).

![](./images/beesApp/apiaries_tab.png#largeImg)

**Conseil** : il est parfois préférable de synchroniser ruche par ruche si elles sont éloignées les unes des autres. Vous pouvez choisir 'Synchroniser' avec le "..." pour chaque ruche. Commencez par les ruches près du téléphone, vous n'avez pas besoin d'attendre que la synchronisation de chaque ruche se termine avant de commencer la suivante. Puis déplacez le téléphone vers une nouvelle position proche des ruches restantes et synchronisez à nouveau. Si vous appuyez sur l'état de la synchronisation qui apparaît en haut, il affichera plus de détails sur l'état exact du processus de synchronisation.

#### Option des ruchers

Vous pouvez maintenant effectuer la configuration du rucher et de la ruche à partir de l'application. Pour y accéder, cliquez sur le bouton "..." en haut de la page.

![](./images/beesApp/apiary_option.png#largeImg)

#### Option des ruches

Lorsque vous choisissez le "..." à côté de la ruche, vous avez beaucoup de choix. Toutes ces commandes (telles que Sync) fonctionnent au niveau du ruche. C'est-à-dire qu'elles visent à contrôler ou à modifier le répertoire de stockage, et non l'appareil.
Notez que ces commandes modifieront à la fois les données stockées sur votre téléphone et les données stockées dans Cloud MyBroodMinder.com

![](./images/beesApp/hive_option.png#largeImg)

**Conseil** :   Appuyez sur la ruche pour afficher plus de détails sur les capteurs BroodMinder.
            Appuyez deux fois sur la ruche pour faire apparaître le graphique.
            La fonction note permet d'utiliser votre microphone pour faciliter la transcription.

### Onglet RÉGLAGES

L'onglet "Réglages" vous permet de personnaliser votre application Bees.
 
![](./images/beesApp/settings_tab.png#largeImg)

Conseils :  Dans les réglages, vous trouverez des fonctions avancées telles que la suppression de la base de données locale.
            La connexion rapide modifiera le "ping" publicitaire des capteurs BroodMinder de 5 à 1 seconde. Cela permettra aux capteurs de se connecter plus rapidement, mais réduira également la durée de vie de la batterie à plusieurs mois au lieu de plusieurs années.

### Onglet AIDE

De l'aide, c'est de l'aide, nous espérons.

![](./images/beesApp/help_tab.png#largeImg)

### Mise en place du SUBHUB

Les SubHub sont un peu spéciaux car ils écoutent tous les capteurs à proximité.
Lorsque vous appuyez sur les trois points à côté d'un SubHub, le menu suivant s'affiche.

![](./images/beesApp/subhub_devices.png#largeImg)

#### Détails du SubHub

Cette page vous permet de contrôler le SubHub. Vous pouvez synchroniser toutes les données et vous pouvez visualiser les données en direct. Voir les pages suivantes pour plus de détails.

![](./images/beesApp/subhub_details.png#largeImg)

#### Le SubHub affiche tous les capteurs

Lorsque vous configurez votre SubHub, vous pouvez utiliser cet affichage pour savoir exactement quels capteurs votre SubHub voit. Tous les capteurs s'annoncent toutes les 5 ou toutes les 1 seconde. Cela signifie que vous devriez les voir tous s'afficher ici si vous êtes assez proche. Il affichera également tout appareil Bluetooth Low Energy (BLE) à portée si vous décochez la case "Capteurs Broodminder uniquement".

![](./images/beesApp/subhub_show.png#largeImg)

**Conseil** : Cette page est particulièrement utile pour optimiser la position de votre SubHub. Elle est pratique même si vous ne synchronisez pas avec votre téléphone. Vous verrez quels dispositifs sont étendus à votre concentrateur de données.







## Transmetteurs de données - HUB 

A ce jour nous proposons plusieurs types de transmetteurs.
- Le Hub-T91 est un hub cellulaire equipé avec une carte SIM

![](./images/products/T91_solar.jpg#smallImg)


- Il y a également deux modèles de transmetteur Wifi pour les apiculteurs qui ont le rucher dans leur jardin.

![](./images/products/xwifi.jpg#smallImg)

![](./images/products/xwifi_ext.jpg#smallImg)


- Le Subub est un concentrateur de données et assure une extension de portée. Il permet de faire le pont avec un Hub-91 par exemple si le rucher est très étendu ou encore de décharger en un seul geste du smartphone toutes les mesures de tous les capteurs.

![](./images/products/SubHub.jpg#smallImg)


### Installation du Hub

Vous pouvez installer le transmetteur avec de nombreuses configurations différentes selon les circonstances. Le support à l'arrière du boîtier électronique peut être retournée comme on peut le voir sur quelques exemples.

![](./images/14_2_installation.png#largeImg)

Quelques remarques relatives à l'installation :

- Le panneau solaire aura complètement chargé la batterie en 8 heures d'ensoleillement direct

- La batterie devrait tenir 5 à 10 jours sans ensoleillement
- La réception sans fil est entravée par les arbres. L'installer sur un arbre peut s'avérer problématique si votre connexion est instable
- Pour les cas les plus extrêmes, nous vous suggérons d'utiliser une antenne plus sensible (pour le réseau mobile uniquement). Contactez-nous sur [support@Mellisphera.com](mailto:support@Mellisphera.com) pour plus d'informations


# Broodminder Sub-Hub 

## Vue d'ensemble

Le SubHub est à la fois un prolongateur de portée Bluetooth et un coffre-fort de données à haut débit. Il tient dans un boîtier de la taille d'une télécommande de télévision.
- Placez le SubHub près de vos ruches et il recueillera les données de vos capteurs et les retransmettra à plus de 300 mètres, vous permettant de recueillir des données sans avoir à vous tenir directement dans votre rucher. 
- Il est également doté d'un protocole de turbo-transfert, d'un mois de données provenant de 50 appareils en 2 minutes et d'une batterie d'une durée de vie prolongée.

Pour protéger votre Sub-Hub des intempéries, nous vous conseillons de le placer dans une [enveloppe de protection](https://www.mellisphera.com/produit/enveloppe-de-protection/). 


## Scenarios possibles

### Scénario 1 

**Vos ruches équipées de capteurs se trouvent à 150 mètres d'un bâtiment alimenté en électricité et vous avez un vieux téléphone portable.**

Configuration : Placez le SubHub au milieu de vos ruches et le téléphone portable dans le bâtiment. Lancez l'application du rucher en activant dans `Settings > Hub mode` .

Résultat : Les données de votre ruche seront envoyées toutes les 10 minutes. En cas d'essaimage, vous recevrez un e-mail ou un SMS dès qu'il sera détecté, ce qui vous permettra d'agir en conséquence.

### Scénario 2

**Le rucher est éloigné et il n'y a pas d'électricité à proximité. Vous êtes déjà équipé d'un BroodMinder-Hub. Cependant, certaines de vos ruches sont à 200 mètres de distance.**

Configuration : Placez le SubHub près des ruches et il relayera les mesures vers le Hub. Vous pouvez avoir plusieurs SubHubs qui alimentent le hub CELL/WIFI hub si vous le souhaitez.

Résultat : Une plus grande partie de votre rucher peut être surveillée à moindre coût.

### Scénario 3

**Le rucher est isolé et il n'y a pas d'électricité ni de réseau cellulaire à proximité...**

Configuration : Placez le SubHub près des ruches. Il enregistrera les données de tous les capteurs situés à proximité.

Résultat : Lorsque vous visitez votre rucher, vous pouvez décharger toutes les données de toutes les ruches en moins d'une minute. Vous pourrez visualiser ces données avec la prochaine application BroodMinder-Bees, de manière similaire à MyBroodMinder. Bien entendu, vous pourrez ensuite envoyer les données à MyBroodMinder lorsque vous reviendrez à la civilisation.

## Détails techniques

Pour tous ceux qui aiment les détails techniques, voici ce que vous devez savoir : 

Le SubHub utilise le même circuits que la balance W2. Il utilise un module BLE (Bluetooth Low Energy) longue portée de Silicon Labs. Nous avons mesuré la portée du module avec un iPhone 11 à plus de 300 mètres. Nous avons obtenu des données utilisables à 500 mètres.

En utilisant 4 piles AA, nous avons beaucoup plus de puissance disponible. Cela nous permet de recueillir les données des capteurs pendant 20 secondes toutes les dix minutes avec une durée de vie des piles prévue supérieure à un an.

Une mémoire d'un mégaoctet a été ajoutée pour stocker les données du journal. Cela nous permet de stocker 35 000 enregistrements ou à peu près les données de 100 appareils pendant deux semaines (ou moins d'appareils pendant plus longtemps, vous pouvez faire le calcul). Le SubHub a la capacité de garder une trace de 128 appareils BroodMinder en même temps.

Les données seront lues en utilisant le BLE SPP (Serial Port Profile). Nous avons prévu que le transfert de la totalité des 35 000 enregistrements prendrait environ 120 secondes avec iOS et moins que ça pour les nouveaux appareils Android (plus longtemps pour les téléphones de 4 ou 5 ans).

Le dernier point concerne le partage des données du SubHub. Comme mentionné ci-dessus, le SubHub relève les nouvelles données pendant 20 secondes toutes les 10 minutes. Il modifie ensuite son paquet publicitaire BLE pour oublier tous les capteurs qu'il a entendus. Le SubHub annonce un appareil différent toutes les 5 secondes, ce qui permet d'envoyer les données de 12 BroodMinders toutes les minutes, soit plus de 100 appareils en 10 minutes. 

Nous avons établi ces paramètres afin que les piles durent au moins un an. Bien qu'elles puissent être ajustées pour des circonstances particulières, nous pensons que la configuration standard couvrira 99% des cas.

Bien sûr, il y a beaucoup, beaucoup de détails à régler pour que les pièces s'emboîtent parfaitement et qu'elles soient supportées par l'équipement sur le terrain. Et, comme toujours, pendant le déploiement, nous le surveillerons de près.
