# Interprétation des données

<style>
img[src*="#thumbnail"] {
   margin: 10px auto 20px;
   display: block;
   width:550px;
}</style>

<style>
img[src*="#thumbnail2"] {
   margin: 10px auto 20px;
   display: block;
   width:250px;
}</style>

##	Hive Weight Profiles    
## Swarm Detection with a BroodMinder TH Device in a Top Bar Hive  
## Avoiding Excessive Heat in the Hive During Summer Months 
## Detection of Cluster/Queen Movement and Spring Brood Buildup 
## Pull the Supers When the Dearth Hits 
## Promising Citizen Science Project Observations 
## Using BroodMinder Data to Optimize Hive Preparation for Winter 


##

Dans cette partie sont abordés les aspects plus techniques du fonctionnement de Mellisphera. On y présente les différents modèles BFIT, BFORCE, BWEIGHT ainsi que les sources METEO et les ALERTES.

## Etat des ruches - BFit
BFIT comme _Bee Fitness_ est l'algorithme qui informe l’apiculteur de l'état de chaque ruche. Nous utilisons des repères comme la période de la saison et l’état des ruches environnantes pour définir un état « nominal » de la ruche. Ensuite, nous positionnons chaque ruche par rapport à cette référence.

Le rendu est très visuel avec des pastilles de couleurs (noir, rouge, orange, vert) pour indiquer leur état. Pour compléter l'information une infobulle précise la nature de la situation.
 

![Pastilles](./images/pastilles.png#thumbnail2)

Le code couleur est le suivant :

| couleur | signification|
|---|---|
| Noir | Votre ruche est déclarée morte|
|Rouge | Votre ruche est en difficulté |
|Orange | Votre ruche est perturbée (en déclin ou présente des événements anormaux) |
|Vert | Tout va bien pour votre ruche |
|Blanc | Pas de données sur votre ruche (ou pas de météo) |

![Message BFit](./images/message_bfit.png#thumbnail2)

En activant l'envoi d'alertes dans Mellisphera vous recevrez par email un tableau récapitulatif avec l'ensemble des informations :

![Email BFit](./images/bfit_email.png)

BFit repose sur les algorithmes qui collectent les événements. L’algorithme ‘Learning’ apprend des événements précédents pour conserver, ou non, les événements futurs. Il y a, par la suite, une classification entre les événements détectés ayant une incidence sur l’état de la ruche et les autres. 

BFit prend aussi en compte les résultats fournis par BForce. De cette façon il est capable de déterminer l’écart entre la dynamique actuelle de la ruche et une dynamique du couvain théorique en constante évolution. Cette dynamique théorique est régulièrement actualisée. Elle prend également en compte les diférentes régions du monde pour fournir des informations pertinentes selon la latitude ou le climat. 

## Niveau de couvain - BForce

Le développement du couvain est un facteur clé pour les colonies d'abeilles. L'objectif de BForce est de fournir une indication du niveau de couvain dans la ruche sur une échelle de 0 à 100%. 

Lorsque la colonie est à plein régime elle atteint un état stable à 35°C. Cet état est associé au 100% de couvain. La ruche est forte. 
Au contraire lorsqu'elle n'a pas de couvain, les abeilles n'ont pas besoin de réguler la température de la grappe. Dans ce cas la température interne de la ruche suivra peu ou prou la température ambiante. Dans ce cas on aura 0% de couvain.

Entre ces deux points extrèmes on peut imaginer toutes les situations intermédiaires. 

![Constat BForce](./images/constat_bforce.png)

Pour illustrer ces propos, voici les mesures horaires sur deux ruches du même rucher. La première est représentée en rouge et la deuxième en gris. Chacune présente un état bien différent. La rouge possède une température interne avoisinant les 25°C/30°C suivant les mêmes fluctuations que la température extérieure (en pointillés), tandis que la grise, est constante autour des 35°C dans la fameuse ‘Zone optimale de couvain' ou 'Brood zone'.

Dans cet exemple la ruche grise a une grande proportion de couvain alors que la rouge n’en a que très peu. **BForce met en équation cete caractéristique des colonies et traduit la mesure brute de température en une information standardisée et compréhensible**. Le modèle prend en compte un certain nombre de paramètres pour estimer au mieux le niveau de couvain.

- température interne de la ruche
- température ambiante
- évolution des colonies voisines
- saison, latitude et climat
- autres évenements identifiés dans la ruche
- type de ruche

BForce est également un **outil de renforcement dans la détection d’essaimage** puisque lorsqu’un essaimage a déjà été détecté par un autre de nos outils de Machine Learning, le couvain s’en voit impacté par la perte de la reine et donc l’arrêt de la ponte. Cela nous permet donc également de classifier nos différents essaimages détectés. 

**Résultats complets**

Les calendriers et graphiques du couvain affichent la progression journalière du couvain de chaque ruche. Les valeurs sont graduées de 0% (pas de couvain) à 100% (couvain complet). En règle générale, 10% est un cadre de couvain, 40% 4 cadres, etc. Selon votre pratique et le modèle de ruche utilisé (Langstroth, Dadant) vous devez ajuster ces relations. Ainsi, **en général les ruches dont le niveau de couvain est supérieur à 80% produisent du miel**. 

En un coup d’oeil il est possible de visualiser l’historique de la saison. Les arrêts et reprise de ponte étant clairement repérables.

![Calendrier BForce](./images/calendrier_bforce.png#thumbnail2)
<div align="center" ><i>Calendrier de couvain</i></div>

Il est également possible de comparer plusieurs ruches entre elles, quel que soit leur rucher.

![Graphique BForce](./images/graph_bforce.png#thumbnail)
<div align="center" ><i>La même ruche avec le couvain annuel comparée à deux autres ruches</i></div>


Avec l'habitude on arrive à lire plusieurs évenements sur ces courbes. Il est possible de repérer débuts et arrets de ponte certes, mais aussi essaimages, périodes de mauvaise météo qui ont impacté la production de couvain, effet des frelons asiatiques, etc etc. 

![Parcours BForce](./images/parcours_bforce.png#thumbnail)
<div align="center" ><i>Trajectoire de deux ruches sur une saison avec quelques evenements</i></div>



## Productivité - BWeight
Avoir des fleurs n’implique pas nécessairement l’existence de nectar, donc de ressources pour les abeilles. En effet, nombreux facteurs conditionnent l’existence d’une miellée : la température et l'humidité ambiantes, les dernières pluies et leur intensité, la profondeur des racines pour des plantes comme le colza ou le tournesol. La miellée n’est donc pas acquise ni aisée à identifier. Pourtant comprendre les miellées est un besoin élémentaire pour chaque apiculteur 

Un capteur de poids installé sous la ruche fournit des informations détaillées de gain et perte de poids. Toutefois ces informations prennent en compte plusieurs aspects qui ne sont pas en lien avec la productivité.

En premier lieu, dans la journée les variations de poids dépendent des ressources apportées ou consommées, mais aussi du déplacement des abeilles qui, en journée, sortent butiner plus ou moins nombreuses. 


![Sortie abeilles](./images/sortie_abeilles.png#thumbnail)
<div align="center" ><i>Sortie des abeilles butineuses et retour avec du nectar</i></div>

C'est pour cette raison que les courbes de poids de la ruche présentent des "bosses". Une chaque jour comme dans le graphique ci dessous. Sur le graphique on voit également des variations soudaines de poids qui sont liées aux interventions de l'apiculteur.

![Historique Poids Brut](./images/historique_poids_brut.png#thumbnail)
<div align="center" ><i>Historique de poids avec interventions de l'apiculteur</i></div>


Avec ces constats on voit que pour bien évaluer la productivité il faut **considérer uniquement les variations de poids provenant d'une production des abeilles**. De cette façon il faut négliger les événements extérieurs : nourrissement, essaimage, ajout/retrait de hausse, interventions de l'apiculteur, perte ou augmentation inexpliquée. L'algorithme BWeight permet de repérer facilement ces événements bien distincts et de les écarter du calcul de productivité. 

Le résultat est une information journalière de gain ou perte de poids. La représentation graphique sur le calendrier permet de suivre les miellées et leur intensité.

![BWeight](./images/bweight.png#thumbnail2)
<div align="center" ><i>Excellente miellée fin juin !</i></div>
ICI MANQUE LE POP UP sur l'image pour voir les 3kg !  


POURSUIVRE A CE NIVEAU

### Résultats

Vous pouvez intervenir en conséquence lorsque vous voyez des pertes significatives sur vos ruches, ou au contraire, des augmentations soudaines. En fonction de la période, ces relevés de poids sont très importants.

Il est également visuellement facile de relever une miellée, qui n'est la conséquence que d'une suite de bulles vertes. A vous de faire la jointure avec les fleurs de votre environnement. 

![Miellée](./images/miellee.jpg#thumbnail)

### A savoir
 
Il est important de noter qu'une ruche ne sera productive que si son niveau de couvain évalué par BForce est assez élevé et si l'état de la ruche évaluée par BFit est bon. C'est là toute la force de nos modèles: ils travaillent tous ensemble.

## Cycle lunaire

Vous êtes nombreux à vous demander à quoi pourrait servir ces données lunaires.

Premièrement, nous vous donnons accès aux heures de lever et coucher du soleil. Cela peut vous donner une estimation grossière des heures de sortie de vos abeilles, si la température extérieure le permet.  

Ensuite la lune, couplée à une météo favorable, peut être un vecteur de grande miellée. En effet, on dit que la lune rousse du printemps nuit aux cultures et que les cycles de l'astre de la nuit donnent le tempo à la croissance des plantes. A bon entendeur...

Ce calendrier a été demandé par certains apiculteurs qui utilisent ce calendrier lunaire pour regarder les périodes 'ascendantes', où la croissance des plantes serait au plus fort. Ces périodes sont bleutées sur le calendrier.

![Cycle lunaire](./images/lune_calendrier.png#thumbnail)

## Données météorologiques et environnement des colonies

La météo est le facteur environnemental le plus déterminant. Une météo propice permet un bon développement des colonies. Le climat est déterminant pour leur développement.

Il est également important de connaître la météo en avance pour prévoir ses interventions aux ruchers. Voilà le double intérêt de l'analyse des données météorologiques. 

Prenons le cas de deux de nos ruchers instrumentés: le rucher A et le rucher B. Le rucher A est dans un environnement plus frais que le rucher B. La température maximale moyenne d’avril 2019 était de 18,2°C pour le premier et 21,2°C pour le second. Trois degrés d’écart qui semblent faire toute la différence puisque le ruche B a produit deux fois plus ce mois-ci. Effectivement, il se trouve que le rucher A se situe dans un bois, sous une couverture végétale d’acacias, alors que le rucher B est également en zone boisée mais au milieu d’une clairière.

Si l'on compare les données du même rucher A l'année précédente, on retrouve une différence notable de 2°C et une production trois fois supérieure l'année passée. L’exposition du rucher et l'environnement sont donc des facteurs clés à l’origine des faibles niveaux de production.

Parfois, les abeilles sont présentes, les ressources aussi, mais pas l’ensoleillement. Il a suffit d’une année un peu plus fraîche que la précédente, 2°C d’écart en température maximale mensuelle, pour limiter la production. 

## Données brutes

Terminées les données brutes. Avec nos différents systèmes, vous n'avez plus besoin de vous casser la tête à déchiffrer vos courbes ! Nous le faisons pour vous... Nous vous laissons la possiblité de faire votre propre analyse de vos courbes.

## Système d'alertes

Les apiculteurs ont énormément à faire et nous voulons leur alléger leur charge de travail. L’objectif est de leur apporter l’information pertinente en temps utile. C’est le rôle du système d’alertes. Pleinement configurable, il parle à l’apiculteur dans le langage métier : essaimage, vol de ruche, pillage, zéro couvain. Ces alertes concernent les événements à l’instant T, mais aussi les risques identifiés à 3 jours - en particulier pour ce qui concerne les prévisions météorologiques.

Voici l'interprétation et l'analyse des alertes qui méritent davantage de détails :

### Essaimage 

Nous pouvons vous prévenir à 3 jours un risque d'essaimage fort, dépendant de plusieurs facteurs (poids de la ruche, météo annoncé, essaimage récent, etc.). 

Nous vous alertons également des essaimages en temps réel ou passés avec notre algorithme de détection liant la température interne de votre ruche et le cas échéant son poids.

Nous pouvons ajuster les essaimages détectés en fonction de vos retours, n'hésitez pas à nous signaler des incohérences ou des oublis. 

### Ruche volée

Les capteurs ne disposent pas d'une géolocalisation. Cependant, pour les ruches disposant d'un capteur de poids, nous vous alertons lorsqu'une ruche a un poids anormalement faible, déclencheur possible d'un vol.

### Météo 

L'ensemble des alertes météo ne sont que des alertes de prédiction à J+3 maximum. Elles sont évolutives. Si nous détectons un événement à J+3 et que le lendemain cet événement n'a plus lieu d'être, nous l'effaçons. 

**Vent**

C'est le vent maximum que nous considérons. Dans certaines régions, nous conseillons d'augmenter le seuil par défaut si vous ne soiuhaitez pas être averti régulièrement de certains phénomènes jugés normaux. 

**Pluie/Neige**

Le seuil fixé est relativement haut. C'est pour des cas exceptionnels que cette alerte existe. 

**Période froide**

Sûrement une des alertes les plus importantes. Elle est déclenchée en pleine saison lorsque l'on envisage une période dite 'froide'. Cela inclue des journées ou des nuits jugées fraiches par rapport aux normales de saison. Nous fixons les paramètres nous-même.

Il est important de prévenir à l'avance de ce genre d'événement pour anticiper, par exemple, le nourrissement de vos abeilles.

### Couvain 

Nous alertons une fois par semaine lorsqu'une ruche a un couvain, suivant le modèle BForce, en dessous du seuil fixé en pleine saison. Cette ruche est à surveiller car son couvain est anormalement faible. 

### Poids

Nous avons deux types d'alertes de poids. 

Le premier est le repérage d'une perte de poids significative en une journée. Cela peut signifier que vos abeilles ont beaucoup consommé ou qu'un pillage est en cours. Il est donc conseillé d'aller vérifier auprès de ses ruches.

Le second concerne les gains de poids. Les gains journaliers sont signe d'une ruche productive. Nous associons ces gains de poids journaliers à un gain de poids hebdomadaire, signe d'une miellée. En effet, nous calculons l'apport hebdomadaire de chaque ruche lors des 7 derniers jours afin de répérer ce type d'événement. Vous pouvez donc suivre facilement l'avancement d'une miellée en cours. Les seuils sont facilement ajustables. 

### Morte

C'est le résultat de notre algorithme BFit. Vous avez en plus de cela une alerte mentionnant les ruches concernées. 

### Trait. Oxalique

Nous avons développé un algorithme qui analyse le couvain de chacune des ruches d'un même rucher. Lorsque la moyenne de couvain du rucher est en dessous d'un certain seuil en fin de saison, nous envoyons cette alerte pour conseiller de faire le traitement à l'acide oxalique. 
