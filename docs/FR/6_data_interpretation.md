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

Dans cette partie seront abordés les aspects plus techniques du fonctionnement de Mellisphera. On y présentera les différents modèles BFIT, BFORCE, BWEIGHT ainsi que les sources METEO et les ALERTES.

## Introduction à l'apiculture de Précision

Mellisphera est avant tout un système d'analyse de la santé des ruches. Notre objectif est de tirer le meilleur parti de toutes les données disponibles pour fournir à l'apiculteur simplement, les bonnes informations, au bon moment. L'apiculteur est informé en temps réel de tous les événements de son rucher. Ceux qui se déroulent à l'instant présent, mais aussi ceux à venir. De cette façon, il prévoit ses inspections en amont et sait à l'avance à quoi s'attendre. Le diagnostic est fait avant le déplacement au rucher et est complété par la visite.


![Inspections 15 jours](./images/precision_inspect.png#thumbnail)


Pour atteindre cet objectif, les algorithmes sont nos amis. Des modèles qui analysent les informations récoltées et qui les traduisent en "langage apiculteur". 

Quelques ressources sur l'Apiculture de Précision

- [Wikipedia - Precision Beekeeping](https://en.wikipedia.org/wiki/Precision_beekeeping)
- [Les fondations de l'apiculture de précision](https://www.mellisphera.com/les-fondations-de-apiculture-de-precision/)
- [Au-delà des inspections : suivre son rucher en temps réel](https://www.mellisphera.com/suivre-son-rucher-en-temps-reel/)
- [Comprendre les miellées](https://www.mellisphera.com/comprendre-les-miellees/)
- [Le cas de la ruche 5](https://www.mellisphera.com/le-cas-de-la-ruche-5/)
- [Effet de la prédation du frelon asiatique sur le développement de la ruche](https://www.mellisphera.com/effet-de-la-predation-du-frelon-asiatique-sur-le-developpement-de-la-ruche/)

### Cas d'un rucher

## Etat des ruches - BFit

Informer l’apiculteur du développement de son rucher: voici notre objectif. Avec cet algorithme, nous utilisons des repères comme la période de la saison et l’état des ruches environnantes pour définir un état « nominal ». Ensuite, nous positionnons chaque ruche par rapport à cette référence.

Le rendu est très visuel grâce à des pastilles de couleur (noire, rouge, orange, verte) pour indiquer leur état. C'est tellement simple et accessible que l’on en oublie presque toute la technologie et les compétences qu’il a fallu mobiliser pour le mettre au point. Notre modèle, que nous avons nommé BFit, est en constante évolution en suivant vos retours de près. 

![Pastilles](./images/pastilles.png#thumbnail)

Si votre pastille est blanche, c'est qu'il n'y a pas de données au jour sélectionné, ou que vous n'avez pas accès aux données métérologiques qui sont indispensables pour l'utilisation de notre modèle.

Nous avons prévu d'intégrer un calendrier journalier à moyen terme dans le mode 'Ruche' de la section 'Explorer' de l'application.

### Constat

Notre constat est que l’apiculteur cherche à savoir si ses ruches se développent correctement et nous nous devons de lui fournir cette information. Encore une fois, il doit ouvrir ses ruches une à une pour avoir une idée de l’état de chacune. Ainsi, au sein de Mellisphera, nous avons voulu détecter rapidement les ruches souffrantes afin de s’en préoccuper au plus vite. C’est de là que nous avons eu l’idée de confectionner BFit pour Bee Fitness. 

Le système que nous voulions mettre en place repose sur une dynamique simple. En premier lieu, nous voulions mettre en avant les événements détectés sur le rucher ayant une réelle incidence sur l’état des ruches. Pour cela, il a donc fallu établir une classification des événements. Ensuite, nous voulions lier nos résultats avec notre modèle de dynamique du couvain BForce (voir plus loin) qui fait également état de l’état des ruches. Enfin, nous voulions avoir un système en évolution constante.

### Le modèle BFit

Bee Fitness repose sur nos nombreux algorithmes qui collectent les événements. Les événements sont symptomatiques et répétés dans le temps. L’algorithme ‘Learning’ apprend des événements précédents pour conserver, ou non, les événements futurs. Il y a, par la suite, une classification entre les événements détectés ayant une incidence sur l’état de la ruche et les autres. Comme dit précédemment, nous avons créé un liant avec notre modèle BForce. BFit est capable de déterminer l’écart entre la dynamique actuelle de la ruche et une dynamique du couvain théorique en constante évolution. Cette dynamique théorique est recalculée chaque année sur la base d’un modèle d’exploitation prise sur nos propres recherches et les différentes données récoltées. Il faut savoir qu’il est adaptable en fonction des régions du monde. En résumé, notre modèle exclusif permet principalement de relier de façon autonome les événements détectés avec la nature de la situation précise en y associant ensuite une couleur prédéfinie.

### Résultats

Le fitness de la ruche est indiqué par la couleur des pastilles. Une infobulle plus précise quant à la nature de la situation s’affiche au survol de la pastille associée à la ruche. Nous avons donc les états suivants :

- Noir : Votre ruche est déclarée morte
- Rouge : Votre ruche est en difficulté
- Orange : Votre ruche est perturbée (en déclin ou présente des événements anormaux)
- Vert : Tout va bien pour votre ruche
- Blanc : Pas de données sur votre ruche

Vous aurez un message personnalisé au survol de chaque pastille de ruche.

![Message BFit](./images/message_bfit.png#thumbnail)

### Suivi de l'état de ses ruches

Si vous avez activé le suivi par email, vous recevrez par email un tableau récapitualitf de l'état de l'ensemble de vos ruches à chaque fois.

![Email BFit](./images/bfit_email.png#thumbnail)

## Niveau de couvain - BForce

Une échelle entre 0 et 100% vous indique la quantité de couvain dans la ruche - une information essentielle pour l’apiculteur qui perçoit rapidement la trajectoire de chaque colonie.

En transhumance, cet outil évitera bien des manutentions. Que ce soit pour le choix des colonies à transhumer, leur suivi à distance pendant la miellée ou à leur retour, pour identifier les candidates aux interventions de rattrapage.

### Les préludes d’un tel modèle

Chaque apiculteur se doit d’aller ouvrir ses ruches pour déterminer leur état. Cette tâche peut s’avérer toutefois relativement longue et complexe. On connait l’importance du couvain (oeufs et larves de vos abeilles) dans le développement d’une colonie. Que l’on soit apiculteur professionnel ou apiculteur de loisir, il n’y a pas d’autre choix que d’ouvrir sa ruche pour l’observer.

Au sein de Mellisphera, nous avons mis au point des algorithmes permettant de suivre le développement des colonies en temps réel tout au long de la saison. Il est maintenant possible de connaître le niveau de couvain de chaque ruche sans l’ouvrir. Il est nécessaire pour tout apiculteur de savoir ce qu’il se passe pour pouvoir agir au bon moment. Pour l’apiculteur, c’est un excellent outil d’aide à la décision qui lui permet de quantifier la situation à chaque instant, assurer la santé de ses colonies ainsi qu'une meilleure maitrise de ses risques. Ce système vous permettra de vous attarder uniquement aux ruches dont le couvain est le plus faible.

### Le constat de nos ruchers équipés

![Constat BForce](./images/constat_bforce.png#thumbnail)

Un simple cas d’école. Nous voici en présence de deux ruches du même rucher, placées côte à côte. Deux ruches à quelques mètres seulement l'une de l'autre qui présentent deux états bien différents. La première (en rouge) possède une température interne avoisinant les 25°C/30°C suivant les mêmes fluctuations que la température extérieure, tandis que la seconde (en gris), est constante autour des 35°C dans la fameuse ‘Zone optimale de couvain' ou 'Brood zone'. Cette zone est la zone idéale de la température auprès du couvain.

Ainsi, ici, on voit aisément que la ruche grise aura une grande proportion de couvain au détriment de la ruche rouge qui, elle, n’en aura que peu. Notre idée reposait donc sur l’influence entre les températures internes et externes. C’est ainsi que nous avons pu avoir un suivi du développement des colonies au fil de la saison. Nous avons pu constater que la température interne d’une ruche est également dépendante de tout autre événement interne ou externe à la ruche (météo, essaimage, etc.). De plus, nous avons lié couvain et production. En effet, une ruche produira beaucoup à condition uniquement que son couvain soit assez développé. Nous nous sommes donc penchés sur ces différents phénomènes pouvant amener à modifier l’état d’une ruche.

Pour résumer, la température interne de la ruche est un indicateur de la dynamique du couvain. Nous avons donc essayé de construire un modèle reposant sur ces idées afin d’aider l’apiculteur à :
- Donner l’état le plus précis possible de chaque ruche
- Comprendre l’évolution de la colonie dans le temps
- Identifier des évènements : arrêts ou reprises de ponte, essaimages, etc.
- Classifier chaque ruche et planifier les opérations à réaliser
- Obtenir une information correcte afin d’écourter et simplifier les voyages aux ruchers
- Donner un niveau de production des ruches

### Le modèle BForce

Le couvain est donc calculé à partir de la température interne de la ruche. Plus la température est stable autour de la zone de couvain, plus le pourcentage est élevé. La première étape est donc de récupérer les données de température interne au sein des différentes ruches équipées. Par la suite, nous pouvons décomposer notre série liée avec la température externe en utilisant un modèle naïf additif linéaire puisque les changements au fil du temps sont constamment effectués dans la même mesure (chaque jour). Il s’agit en fait de supprimer la composante saisonnière, on ne conserve que la tendance. Plus précisément, nous éliminons cette composante saisonnière en appliquant un filtre aux données. Cette composante s’apparente aux fluctuations de température extérieure. Ensuite, nous ajoutons un second filtre permettant d’adapter la tendance journalière avec la réalité. Nous affinons également nos résultats en recoupant les valeurs extrêmes journalières. Puis, puisqu’aucun jour n’est indépendant, nous fixons une dépendance par pondération entre les différents jours de données afin d’obtenir une corrélation se rapprochant de la réalité. Enfin, le résultat obtenu subit un lissage permettant d’affiner nos résultats.

Ce système est aussi un outil de renforcement dans la détection d’essaimage puisque lorsqu’un essaimage a déjà été détecté par un autre de nos outils de Machine Learning, le couvain s’en voit impacter par la perte de la reine et donc l’arrêt de la ponte. Cela nous permet donc également de classifier nos différents essaimages détectés. Ce modèle d’intelligence artificielle est donc unique en son genre. 

### Résultats complets

Les calendriers et graphiques du couvain affichent la progression journalière du couvain dans votre ruche. Les valeurs sont graduées de 0% (pas de couvain) à 100% (couvain complet). En règle générale, 10% est un cadre de couvain, 40% 4 cadres, etc. Selon votre pratique et le modèle de ruche utilisé (Langstroth, Dadant) vous devez ajuster ces relations. Ainsi, les ruches dont le niveau de couvain est supérieur à 80% produisent du miel. 

En un coup d’oeil vous avez accès à l’historique de la saison sous forme de calendrier ou de graphique. Les calendriers et graphiques du couvain affichent la progression journalière du couvain dans votre ruche. Vous pouvez également repérer les arrêts et reprise de ponte.

![Calendrier BForce](./images/calendrier_bforce.png#thumbnail2)

![Graphique BForce](./images/graph_bforce.png#thumbnail)

Grâce à ces outils, la comparaison entre ruches et ruchers est aisée.

A force d’utilisation, vous disposerez d’un outil capable de tout analyser d’un simple geste Terminées les inspections où vous ne comprenez pas ce qu’il s’est passé la semaine, vous êtes dorénavant capable de connaitre tous les malheurs de vos abeilles. Vous pourrez donc suivre le développement des colonies au fil d’une saison. 

![Parcours BForce](./images/parcours_bforce.png#thumbnail)

## Productivité - BWeight

Informer l’apiculteur de la production de son rucher: voici notre objectif. Comprendre les miellées est un besoin élémentaire pour chaque apiculteur - ou plutôt tacher de les comprendre, tellement le sujet peut devenir complexe. 

### Constat

Les apiculteurs professionnels développent, au fil des années, ce savoir-faire critique pour leur exploitation. Les apiculteurs de loisir démarrent avec quelques rudiments en essayant de rafiner leur perception au fil des années.
 
Un des attraits de la pratique de l’apiculture, c’est qu’elle vous immerge dans la nature. Vous devenez un observateur averti de l’écosystème car vous et vos abeilles en dépendez. Au bout d’une saison de pratique, vous assimilez aisément le calendrier des floraisons. En mars le cerisier, en avril le pommier et le colza, en mai l’acacia, en juin le châtaignier… Puis en août c’est la disette… Ce suivi attentif de votre milieu naturel vous permet de percevoir des évènements qui passent inaperçues aux non-initiés. Mais comprendre les floraisons ne veut pas dire comprendre les miellées.

Avoir des fleurs n’implique pas nécessairement l’existence de nectar, donc de ressources pour les abeilles. En effet, nombreux facteurs conditionnent l’existence d’une miellée : la température et l'humidité ambiantes, les dernières pluies et leur intensité, la profondeur des racines pour des plantes comme le colza ou le tournesol. La miellée n’est donc pas acquise ni aisée à identifier. 

### Mesurer c’est comprendre

Un capteur de poids installé sous la ruche vous donnera des informations bien plus détaillées. D’un simple coup d’œil, il devient possible de suivre le déroulement des miellées, leur intensité et les périodes de disette. Au-delà de l’aspect ludique, il s’agit d’un réel outil d’aide à la décision qui vous permet de juger du moment opportun pour installer une nouvelle hausse ou, au contraire, de soutenir une colonie en manque de réserves. L’apiculture de précision transforme la pratique de l’apiculture. Comprendre les miellées est un atout pour chaque apiculteur. De cette façon, il peut se rapprocher du milieu environnant pour une pratique plus précise, plus intense.

### Modèle BWeight

Le modèle repose sur un objectif bien précis. Nous ne voulons considérer que les variations de poids provenant d'une production des abeilles. Nous retirons tous les événements extérieurs : nourrissement, essaimage, ajout/retrait de hausse, interventions de l'apiculteur, perte ou augmentation inexpliquée. Notre algorithme d'intelligence artificielle permet de repérer facilement ces événements bien distincts. 

Chaque jour, nous récoltons les apports ou les pertes journalières de poids de vos colonies en éliminant tous ces facteurs, sous forme d'un calendrier. Une graphique en courbe est prévu à moyen terme pour pouvoir suivre d'une autre façon les miellées.

![BWeight](./images/bweight.png#thumbnail)

### Résultats

Vous pouvez intervenir en conséquence lorsque vous voyez des pertes significatives sur vos ruches, ou au contraire, des augmentations soudaines. En fonction de la période, ces relevés de poids sont très importants.

Il est également visuellement facile de relever une miellée, qui n'est la conséquence que d'une suite de bulles vertes. A vous de faire la jointure avec les fleurs de votre environnement. 

![Miellée](./images/miellee.jpg#thumbnail)

### A savoir
 
Il est important de noter qu'une ruche ne sera productive que si son niveau de couvain évalué par BForce est assez élevé et si l'état de la ruche évaluée par BFit est bon. C'est là toute la force de nos modèles: ils travaillent tous ensemble.

## Cycle lunaire

Vous êtes nombreux à vous demander à quoi pourrait servir ces données lunaires.

Premièrement, nous vous donnons accès aux heures de lever et de coucher du soleil. Cela peut vous donner une estimation grossière des heures de sortie de vos abeilles, si la température extérieure le permet.  

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

C'est le vent maximum que nous considérons. Dans certaines régions, nous conseillons d'augmenter le seuil par défaut si vous ne souhaitez pas être averti régulièrement de certains phénomènes jugés normaux. 

**Pluie/Neige**

Le seuil fixé est relativement haut. Cette alerte a été créée pour des cas exceptionnels. 

**Période froide**

Sûrement une des alertes les plus importantes. Elle est déclenchée en pleine saison lorsque l'on envisage une période dite 'froide'. Cela inclue des journées ou des nuits jugées fraiches par rapport aux normales de saison. Nous fixons les paramètres nous-même.

Il est important de prévenir à l'avance ce genre d'événement pour pouvoir anticiper, par exemple, le nourrissement de vos abeilles.

### Couvain 

Nous vous alertons une fois par semaine lorsqu'une ruche a un couvain en-dessous du seuil fixé en pleine saison selon le modèle BForce. Cette ruche est à surveiller car son couvain est anormalement faible. 

### Poids

Nous avons deux types d'alertes de poids. 

Le premier est le repérage d'une perte de poids significative en une journée. Cela peut signifier que vos abeilles ont beaucoup consommé ou qu'un pillage est en cours. Il est donc conseillé d'aller vérifier auprès de vos ruches.

Le second concerne les gains de poids. Les gains journaliers sont signe d'une ruche productive. Nous associons ces gains de poids journaliers à un gain de poids hebdomadaire, signe d'une miellée. En effet, nous calculons l'apport hebdomadaire de chaque ruche lors des 7 derniers jours afin de répérer ce type d'événement. Vous pouvez donc suivre facilement l'avancement d'une miellée en cours. Les seuils sont facilement ajustables. 

### Morte

C'est le résultat de notre algorithme BFit. Vous recevez, en plus de cela, une alerte mentionnant les ruches concernées. 

### Trait. Oxalique

Nous avons développé un algorithme qui analyse le couvain de chacune des ruches d'un même rucher. Lorsque la moyenne de couvain du rucher est en dessous d'un certain seuil en fin de saison, nous envoyons cette alerte pour conseiller de faire le traitement à l'acide oxalique. 
