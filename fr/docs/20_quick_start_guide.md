# Guide de Démarrage Rapide

<p style='text-align: right;'><a href="http://doc.mybroodminder.com/en/20_quick_start_guide/">🇺🇸 English version</a></p>

Nous avons fait de notre mieux pour rendre l'installation et l'utilisation de vos BroodMinders intuitives et faciles. Suivez le processus ci-dessous pour bien assimiler tous les aspects de la solution (Capteurs, App et Web..) et vous mettrez toutes les chances de votre côté pour réussir. 

Chacune des étapes est décrite en détail plus bas dans ce document.

| A LA MAISON   |  | | | 
| -- | -- | -- | -- |
| 1. | ![image](./20_quick_start_guide.assets/icons/30px/001.png)  | [Installer l'App](#1-installer-broodminder-bees) | 
| 2. | ![image](./20_quick_start_guide.assets/icons/30px/002.png)  | [Créer votre compte](#2-creer-votre-compte) | 
| 3. | ![image](./20_quick_start_guide.assets/icons/30px/003.png)  | [Allumer les capteurs](#3-activer-les-capteurs) | 
| 4. | ![image](./20_quick_start_guide.assets/icons/30px/004.png)  | [Assigner à une ruche](#4-assigner-les-capteurs-aux-ruches) | 
| 5. | ![image](./20_quick_start_guide.assets/icons/30px/005.png)  | [Faire la première synchro](#5-faites-la-premiere-syncro) | 
| 6. | ![image](./20_quick_start_guide.assets/icons/30px/006.png)  | [Activer votre hub](#6-activez-votre-hub) | 

|  AU RUCHER  |  | | |
| -- | -- | -- | -- |
| 7. | ![image](./20_quick_start_guide.assets/icons/30px/007.png)  | [Installer les capteurs](#7-installer-les-capteurs) | 
| 8. | ![image](./20_quick_start_guide.assets/icons/30px/006.png)  | [Installer le Hub](#8-installer-le-hub) | 
| 9. | ![image](./20_quick_start_guide.assets/icons/30px/008.png)  | [Actualiser la date de début](#9-actualiser-la-dateheure-de-depart) | 
| 10. | ![image](./20_quick_start_guide.assets/icons/30px/009.png) | [Explorez et découvrez](#10-explorez-et-decouvrez) | 




## Avant de vous lancer 
Notez les bonnes pratiques suivantes:

!!! info "Préparez tout A LA MAISON"
    Assurez-vous que le système est fonctionnel avant de l'installer dans le rucher. Autrement par la suite tout devient plus compliqué et moins confortable.

!!! info "Etiquetez vos ruches"
    Faites ce qu'il faut pour identifier vos ruches de façon unique. Vous ne le regretterez pas.
    R1, R2, R3  ... A, B, C ... K722, ST023...

!!! info "Utiliser notre bibliothèque de vidéos"
    Regardez la vidéo d'aide [Quick Start with CS Kit](https://youtu.be/6WicH4_l2FQ)

!!! tip "Besoin d'aide ?"
    Vous pouvez toujours nous contacter [Support@BroodMinder.com](mailto:Support@BroodMinder.com)

-----


## 🏠 DEMARREZ A LA MAISON
### ![image](./20_quick_start_guide.assets/icons/30px/001.png) 1. Installer BroodMinder Bees

Téléchargez [Broodminder Bees](https://mybroodminder.com/beesapp) dans le store de votre choix. Scannez ce code QR pour y accéder. :

![image-20230508064200081](./20_quick_start_guide.assets/beesApp_QRcode.png)

### ![image](./20_quick_start_guide.assets/icons/30px/002.png) 2. Créer votre compte

Créez votre compte dans l'application Bees. Un seul compte pour tout : App et Web MyBroodminder.

Dans BeesApp, dans l'onglet `Rucher`, créez votre premier *rucher* et votre première *ruche*, ils seront nécessaires pour les étapes suivantes.

![img](./20_quick_start_guide.assets/beesApp_Welcome300.png)


Dans Bees vous avez plusieurs onglets que nous allons naviguer par la suite

- l'onglet `Capteurs` (Devices)
- l'onglet `Ruchers` (Apiaries)
- l'onglet `Paramètres` (settings)
- l'onglet `Aide` (Help)

![img](./20_quick_start_guide.assets/beesApp_Tabs500.png)



Allez maintenant dans l'onglet **Ruchers** pour créer votre premier Rucher et votre première Ruche :

![img](./20_quick_start_guide.assets/beesApp_1NoApiaries300.png)

Créez votre premier rucher avec `... > Nouveau Rucher`

![img](./20_quick_start_guide.assets/beesApp_2NewApiary300.png)

Créez votre premièrer ruche avec `... > Nouvelle Ruche`

![img](./20_quick_start_guide.assets/beesApp_3NewHive300.png)

Nous pouvons maintenant assigner des capteurs à cette ruche nouvellement créée. Mais d'abord, nous devons allumer les capteurs.

<br>


### ![image](./20_quick_start_guide.assets/icons/30px/003.png) 3. Activer les capteurs
En général, tous nos appareils sont équipés d'une tirette.
Les modèles plus anciens (T2) peuvent avoir un bouton poussoir.

![activateDevices](./20_quick_start_guide.assets/activateDevices600.png)

!!! warning "Faites attention à cela:"
    Avec n'importe quel appareil, le fait de tirer sur la languette doit faire clignoter la carte. Si vous ne voyez pas de clignotement, poussez les piles contre le contact +. Parfois, le support des piles peut être trop rigide et empêcher le ressort de les pousser. (principalement pour les piles AA)

    Ne retirez aucune partie en plastique. Elles assurent la protection.
    
    Vérifiez que tous les joints sont correctement installés sur les boitiers.
    
    Vérifiez que les presse-étoupes sont également bien serrés, le cas échéant.


!!! tip "Comprendre les modèles de capteur"
    Tous les capteurs BroodMinder ont une référence à 6 chiffres de la forme XX:XX:XX. Les deux premières chifres de cette référence définissent le modèle :
  
    - 41, 47 : T2
    - 42, 56 : TH
    - 43, 57 : W 
    - 49 : W3 et W4
    - 52 : SubHub
    - 54 : Hub
    - 58 : DIY
    - 63 : BeeDar

### ![image](./20_quick_start_guide.assets/icons/30px/004.png) 4. Assigner les capteurs aux ruches

D'abord vous devez `Réclamer les capteurs` en cliquant sur le bouton vert `Réclamer` que vous trouverez dans l'onglet `Capteurs`. Cette oppération a pour effet d'associer à votre compte chaque capteur que vous réclamerez. 
Dans la foulée il vous est proposé de rattacher le capteur à une ruche. Vous pouvez procéder ou annule et y revenir plus tard via le menu `...`. 

Rattachez chaque appareil à une ruche. 


![assignDevices](./20_quick_start_guide.assets/beesApp_ClaimDevice300.png)


![assignDevices](./20_quick_start_guide.assets/beesApp_AssignDevice300.png)


Les positions disponibles sont les suivantes :

| Position | Usage typique |
|-- | -- |
| corps | TH ou T dans le corps|
| hausse | TH ou T dans la hausse |
| sous le couvre cadres | TH ou T sous le couvre cadre |
| Balance | balances à poids intégral comme les modèles W3, W4 |
| Balance(AR) | balances à 1/2 poids comme W et W5|
| Compteur | Beedar |
| Extérieur | choix de l'apiculteur |
| Autre | choix de l'apiculteur  |
| Custom [1-7]| pour les chercheurs (multiples capteurs) |


!!! note "La position est importante"
    Sélectionnez soigneusement la position des capteurs internes. Certaines mesures, comme le couvain, ne sont calculées que si l'appareil est assigné à un emplacement hors-couvain.

<br>

Maintenant revenez sur l'onglet **Ruchers** pour faire la première synchro.

### ![image](./20_quick_start_guide.assets/icons/30px/005.png) 5. Faites la première syncro

Avec l'application BroodMinder Bees, il y a plusieurs façons de synchroniser vos données : 

- `Multi-Sync` se trouve en haut de l'écran, dans l'onglet `Ruchers`. Cette fonction synchronise tous les appareils en un seul geste et c'est une fonction Premium.
- `Single-Sync` se trouve dans chacun des menus 3points `...` , que ce soit dans l'onglet `Capteurs` ou dans l'onglet `Ruchers`.

!!! Tip "Conseil" 
    Vous ne pouvez synchroniser que les appareils apparaissant en vert (à portée de Bluetooth).

![firstSync](./20_quick_start_guide.assets/firstSyncA.png)

Maintenant regardez vos premières données `... > Show Graph` ou `... > Show Details`.

![firstSync](./20_quick_start_guide.assets/firstSyncB.png)


!!! info
    Lors de votre première synchronisation, vous ne verrez probablement pas beaucoup de données puisqu'il n'y a qu'un ou deux échantillons.




### ![image](./20_quick_start_guide.assets/icons/30px/006.png) 6. Activez votre Hub

Cette étape est optionnelle : elle n'est destinée qu'à ceux qui possèdent un Hub pour la monitoring en temps réel. Si vous n'avez pas de Hub, sautez directement à la [section suivante](#🐝-passer-maintenant-au-rucher).

Rappelez-vous de la [page Hubs](./60_hubs.md) qu'il existe plusieurs versions de hub : 

- Broodminder-T91 4G [solaire, météo, nu]
- BroodMinder-Wifi
- BroodMinder-SubHub

#### 6.1 Hub 4G version Météo
1. Retirer la protection orange en silicone
2. Allumez le hub à l'aide du petit interrupteur noir (utilisez la pointe d'un stylo pour l'actionner).

![Power On](./20_quick_start_guide.assets/T91_powerOn.png)

3. Les diodes de couleur clignotent en vert, puis en bleu, puis à nouveau en vert.
4. Vérifier sur Bees App que la transmission a été établie. Se rendre sur `Onglet Capteurs > Hub 54:xx:yy > Afficher details > MBM dernier envoi ` doit afficher la date et l'heure actuelles.

![Upload check](./20_quick_start_guide.assets/T91_onBeesApp.jpg)

5. Installer à nouveau la protection orange, en commençant par le côté de la prise USB.

![silicon cover](./20_quick_start_guide.assets/T91_folding.png)

6. Insérez le T91 dans la protection météorologique avec la face USB sur le côté pour éviter le dépôt de condensation sur cette face et sur la face opposée.

![Upload check](./20_quick_start_guide.assets/T91_inweathershield.png)

#### 6.2 Hub 4G version solaire
Suivez le même processus que ci-dessus, à la différence que vous devrez brancher la fiche USB à la batterie (nous expédions la batterie débranchée pour éviter qu'elle ne se décharge pendant le transport).

1. Dévisser le couvercle transparent du boitier.
2. Enfoncer la fiche USB dans la batterie
3. Faire glisser l'interrupteur d'alimentation vers ON

![Upload check](./20_quick_start_guide.assets/T91_solar.png)

4. Le Hub démarre et vous pouvez vérifier la transmission des données à l'aide de l'application Bees comme décrit ci-dessus.




## 🐝 PASSER MAINTENANT AU RUCHER

### ![image](./20_quick_start_guide.assets/icons/30px/007.png) 7. Installer les capteurs

![Install devices](./20_quick_start_guide.assets/installDevicesInHive.png)

#### Sondes de couvain

Installez les BroodMinder-T (modèle 47) et -TH (modèle 56) sur le cadre du milieu (généralement le n°5) en commençant par le côté gauche vu de l'avant de la ruche. L'identifiant qui se trouve au bout de la languette doit dépasser pour être visible en façade de la ruche.

![Install_BRM-T](./20_quick_start_guide.assets/install_BRM-T.png)



#### Balances
Placez votre balance BroodMinder-W de préférence **à l'arrière** de la ruche. Veillez à ce que la ruche soit aussi bien nivelée que possible. 
Les balances BroodMinder-W3 et W4 n’ont pas besoin de nivellement précis.

![Install_BRM-W](./20_quick_start_guide.assets/install_BRM-W.png)


#### Beedar
Le BeeDar se positionne en façade, centré sur l'axe de la ruche. La hauteur par rapport au plancher d'envol est le juste nécessaire pour vous permettre de manipuler sans souci les réducteurs d'entrée. Typiquement 5 à 7 cm au-dessus du plancher.

Beedar a un angle "de vue" horizontal de 85° et vertical de 30°.
Vous pouvez l'accrocher avantageusement avec deux vis de 4mm de diamètre.


### ![image](./20_quick_start_guide.assets/icons/30px/006.png) 8. Installer le Hub

Cette étape concerne uniquement ceux qui possèdent un Hub pour la surveillance en temps réel. 

En règle générale, pour tout type de hub, vous devez savoir que :
- la portée globale pour un Hub <=> sonde interne est de ~ 10 mètres
- la portée globale pour un Hub <=> capteur externe est de ~ 30-40 m

!!! Important 
    - les hubs doivent être placés à au moins 1,5 m du sol (la réception cellulaire ou Wifi est TRES REDUITE lorsque le dispositif est proche du sol)<br>
    - éviter l'exposition directe au soleil

![Install hub](./20_quick_start_guide.assets/hub_install.png)


Il existe plusieurs façons d'installer le hub
- Les versions solaires peuvent être placées sur un poteau, murale ou même sur le toit d'une ruche.

![Install hub](./20_quick_start_guide.assets/hub_install_solar.png)

- les autres versions de 4G et les SubHubs s'installent sans problème dans l'enveloppe météo.

![Install hub](./20_quick_start_guide.assets/hub_weather_shield.jpg)

Vérifiez maintenant la connectivité
- Vérifiez la connectivité du hub avec l'application Bees (dans l'onglet `Capteurs > ID du hub > ... > Afficher les détails`).
- Vous devez avoir un signal réseau supérieur à 20% pour être à l'aise.


### ![image](./20_quick_start_guide.assets/icons/30px/008.png) 9. Actualiser la date/heure de départ

Pour éviter d'avoir des mesures provenant de l'extérieur de la ruche, modifiez la date de début des capteurs.
Pour ce faire allez dans `BeesApp > Ruchers > déplier les ruches pour voir les capteurs > "..." > Changer la position actuelle`. 
Editer la ` date de début`.

### ![image](./20_quick_start_guide.assets/icons/30px/009.png) 10. Explorez et découvrez

Désormais, vous pouvez également vous rendre sur [MyBroodMinder.com](https://mybroodminder.com) et explorer vos données.

Connectez-vous avec le même compte que celui que vous avez créé sur l'application Bees.

![MBM](./20_quick_start_guide.assets/image-20230407155319801.png)


Dans cette interface, vous pourrez suivre les niveaux de couvain, les gains et pertes de poids, configurer vos alertes ou encore la météo passée et prévue ainsi que les indices de flux de nectar et bien plus encore !

!!! info
    Attention : Certaines données sont calculées quotidiennement et vous commencerez à les voir à partir de J+3 (J1 ne compte pas car données partielles, J2 sera le premier jour complet qui sera affiché le jour suivant => J3).











