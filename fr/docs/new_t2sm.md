# 🎉 Nouveau T2 SwarmMinder

Le capteur de température T2 fait un grand bond en avant ce printemps. Le matériel reste inchangé mais le cœur de ce petit capteur est complètement revu. En effet le logiciel embarqué est maintenant capable de détecter les événements au sein de la ruche. 


## Comment convertir un T2 classique en T2-SM?
![](./images/01_T2.png#smallImg) 

Les capteurs T2 classiques sont référencés avec le type 41:xx:yy. Pour les convertir en T2-SwarmMinder il faut mettre à jour le micrologiciel (firmware). Pour cela prenez l'App Apiary et affichez vos capteurs. Lorsqu'elle les retrouve, l'application détecte la version du micro logiciel comme dans l'exemple ci dessous

![](./images/t2sm_apiary_upgrade_version.png#mediumImg)


En tapant dessous, on rentre dans l'écran de configuration du capteur. 

Ici, il faut suivre deux étapes dans l'ordre suivant :

1. Synchroniser le capteur pour récupérer les dernières données. **IMPORTANT - la mise à jour effacera les données de la mémoire**

2. Lancer la mise à jour du micrologiciel

![](./images/t2sm_upgrade.jpeg#mediumImg)

3. Redémarrer le capteur en appuyant sur le bouton plus de 5 secondes. *Il doit flasher 20 fois* 

4. Actualiser la liste des capteurs dans Apiary. Vérifier qu'il s'appelle maintenant 47:xx:yy. Effectivement tous les T2SM changent leur référence de 41 à 47.

5. Une fois le micrologiciel installé, il est également possible de changer la fréquence de mesure de 60 à 15 minutes (Bouton *Rate 15 minutes*). C'est votre choix. Mais ne laissez pas cette configuration toute l'année (elle consomme plus d’énergie). Seulement durant la saison des essaimages.


## Pour ceux qui ont un Hub
Actuellement le Hub transmet les relevés toutes les heures. Pour intégrer les fonctions du T2-SM son micrologiciel évolue. Il continuera à transmettre toutes les heures sauf en cas de détection d'un événement - dans ce cas il le transmettra à l'instant même de la détection. 

Pour que ces fonctions aient effet il faut également actualiser son micrologiciel.

1. Ouvrez l'app **BroodMinder Cell** à proximité de votre boitier

2. lancez la mise à jour qui vous est proposée


![](./images/t2sm_updateCell.png#mediumImg)


## Aller sur MyBroodminder.com
L'association avec la ruche du nouveau capteur 47 se fait automatiquement dans MyBroodMinder.
La seule configuration à réaliser dans vos préférences (*Configurer > Mes Préférences > Alertes email*) est de saisi un email pour les alertes.

