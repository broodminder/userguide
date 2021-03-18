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
