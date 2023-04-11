# Périmètre fonctionnel de la plateforme


## Bees App
- Gestion des capteurs
    - visibilité de tous les capteurs environnants
    - informations sur leur état (battérie, mémoire, version firmware)
    - information sur alertes
    - association d'un capteur vierge à son compte
    - détection propriétaire du capteur
    - selection de la fréquence d'acquisition
    - vue en temps réel (balances)
    - prise en charge SubHub
    - prise en charge DIY
    - information sur Hub
    - mises à jour firmware

- Gestion de configuration au rucher
    - création de ruchers et ruches
    - affectation d'un capteur à une ruche (ajout, edition, suppréssion, déplacer)
    - transfert entre ruchers
    - prise de notes vocale ou écrite

- Récupération des données
    - synchronisation directe avec les capteurs : individuelle et multiple
    - synchro avec le cloud pour récupérer les données transmises via Hub par exemple
    
- Gestion des données
    - mode offline : les données sont transmises vers le cloud une fois la connexion retrouvée
    - mode non connecté (100% local) avec aucune remontée de données
    - multi-usager (deux smartphones par exemple)

- Paramètres régionaux
    - multi-langue : anglais, français, espagnol
    - gestion des unités Métrique/Imperial
    - gestion des zones horaires


- Plateformes
    - iOS et Android
    - mises à jour automatisées


## MyBroodminder

- Gestion de configuration au rucher
    - création de ruchers et ruches
    - affectation d'un capteur à une ruche (ajout, edition, suppréssion, déplacer)
    - transfert entre ruchers

- Visualisation des données
    - valeurs mesurées par les capteurs : poids, température, hygro, batterie...
    - visualisation sur échelle de temps personalisée
    - ajout de notes sur les graphiques

- Météo
    - service météo personalisé sur l'emplacement du rucher (code postal ou lat/lon)
    - affectation capteurs à la météo locale

- Alertes
    - Visualisation des evenements thermiques (SwarmMinder)
    - Envoi par email des evenements thermiques

- Gestion des données
    - visualisation tabulaire des données (samples)
    - edition des données, suppréssion outliers
    - origine des données (hub, app, subHub..)

- Multi-utilisateur
    - partage de ruchers entre utilisateurs (en lecture seule, utilisateur designé par le propriétaire) 

- Gestion des données
    - mode offline : les données sont transmises vers le cloud une fois la connexion retrouvée
    - mode non connecté (100% local) avec aucune remontée de données
    - multi-usager (deux smartphones par exemple)

- Paramètres régionaux
    - multi-langue : anglais, français, espagnol
    - gestion des unités Métrique/Imperial
    - gestion des zones horaires


## Mellisphera

- Intégration avec MyBroodminder / Bees App
    - récupère les configurations de l'utilisateur

- Santé de la ruche
    - niveau de couvain dans la ruche
    - arrets et reprises de ponte
    - fitness code (vert, orange, rouge, noir)
    
- Production de la ruche
    - poids brut horaire
    - poids brut journalier
    - gains et pertes brutes
    - productivité des abeilles

- Météo
    - service météo personalisé sur l'emplacement du rucher (code postal ou lat/lon)
    - prévision à 10 jours
    - capteur météo local
    - indice de miellée
    - indice de butinage
    - vue météo calendaire avec températures et HR Min et Max, pluie, vent, nuages
    - alertes sur conditions présentes et futures

- Inspections
    - ajout d'évenements spécifiques à une ruche
    - ajout d'évenements poru un rucher (toutes les ruches)
    - ajout d'inspections du rucher
    - export pdf de la grille d'inspection
    - pictogrammes explicites pour la saisie rapide d'informations
    - affichage des notes directement sur les courbes de couvain (en contexte)
    
- Alertes
    - Alertes ruche
        - miellée
        - potentiel essaimage
        - surchauffe
        - froid extrème
        - faible couvain
        - perte de poids soudaine
        - gain de poids
        - forte humidité
        - ruche morte
        - traitement oxalique
        - Ajout/retrait de hausse
        - Seuil de poids franchi

    - Alertes météo
        - pluie
        - neige
        - vent
        - froid extrème
        - chaud extrème

    - Alertes capteurs  
        - signal faible
        - batterie faible
        - capteur déconnecté

    - Paramètres d'alertes
        - envoi email récapitulatif
        - choiix de la fréquence email
        - 2 adresses email destinataire

- Paramètres régionaux
    - multi-langue : anglais, français, espagnol
    - gestion des unités Métrique/Imperial
    - gestion des zones horaires
