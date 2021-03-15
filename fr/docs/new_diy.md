# Vue d'ensemble

Le DIY est la carte que nous utilisons dans les autres balances Broodminder. Avec elle, vous pouvez construire votre propre balance et elle fonctionnera avec tous les logiciels standard BroodMinder et Mellisphera. Nous espérons que cette carte permettra à de nombreux artisans de créer, chez eux, de parfaits appareils pour surveiller leurs ruches. N'oubliez pas de partager vos créations avec nous et nous les partagerons avec le reste du monde

- Une conception approuvée, autonomie de 5 ans
- Aucune ligne de code à écrire
- Fonctionne avec la plupart des cellules de charge du marché
- S'intègre dans le vaste écosystème BroodMinder-Mellisphera
- Utilise un circuit intégré de cellule de charge 24 bits à 4 canaux (TI ADS1234)
- Les données sont disponibles par publicité BLE (Bluetooth Low Energy)
- Les données stockées sont lisibles par l'application BroodMinder et Mellisphera

Pour pouvoir utiliser le DIY, vous devrez ajouter une cellule de charge. 
La carte fonctionne avec la plupart des cellules de charge que vous trouverez sur le marché, mais attention de ne pas faire le mauvais choix. Par exemple, si vous essayez d’utiliser des cellules de charge classique pour pèse-personne, vous constaterez d’énormes fluctuations (creep en anglais). 

Sous charge, les valeurs obtenues peuvent changer de 50% du jour au lendemain.

## Modèles

Nos équipes ont créé quelques modèles dont nous vous partageront la conception bientôt.
Voici un aperçu : 

![Image sans style](./images/diy/theo_scale.png)

Le support métallique de la ruche est disponible chez [Lyson](http://lyson.eu/home/3254-bee-hive-stand-zinc-set-2-pcs-5903661513191.html?search_query=hive+stand&results=303).

Voici un autre modèle basé sur balance balance W2, dont la mise en œuvre est minimale et qui utilise des [pieds de 5mm](https://urlz.fr/f1XW). Assurez-vous de protéger l'électronique des intempéries si vous décidez de construire cette balance.

![Image sans style](./images/diy/rich_scale.png)

Il est facile de créer un espace sous le capteur pour la flexion en utilisant les bits de Forstner. (1-1/4” & 5/8”).

La version de gauche a été créée avec 2x4s en une heure environ. Vous pouvez couper des canaux pour les fils et les remplir de silicone. Créez un renfoncement pour y loger la carte et la protéger de la pluie. Il faudra également utiliser un bois traité et peindre le tout puis créer un couvercle pour la carte. 

Nous vous recommandons également de visiter certains sites web open source sur les ruches pour avoir une idée de la conception de votre balance. En voici quelques-uns à consulter, ou inventez la vôtre : 
- https://www.honey-pi.de/
- https://community.hiveeyes.org
- http://www.openhivescale.org/
- http://wiki.hivetool.org/

N'oubliez pas de partager vos idées, nous les rendrons publiques, si vous nous le permettez. 

## Protection et étanchéité

La météo est votre ennemie, vous aurez donc besoin d'un boîtier et de presse-étoupes, nous vous recommandons ceux de chez Digikey.com : 

- Bud Industries PN-1322-CMB 9,22€
- Boîte étanche - Hammond 1554N2GYCL 18,80€
- Pas tout à fait étanche, mais une bonne taille avec des oreilles - Hammond 1591CSFLBK 4,53€
- Presse-étoupe Bud Industries IPG-2227 0,41€

![Image sans style](./images/diy/boitier.png)

Voici la boîte étanche Hammond 1554N2GYCL installée sur le support Lyson.

REMARQUE : Les premières cartes DIY expédiées mesureront 11,43cm x 4,5cm. Celles expédiées en juin seront un peu plus petite (10,92cm x 3,91cm). Il est possible de réduire la carte de  11,43cm x 4,5cm en 10,92cm x 3,91cm sans affecter les opérations mais nous ne le recommandons pas. Procurez-vous une taille de boîte adéquate. Beaucoup sont disponibles sur Digikey.com et Mouser.com. 

NOTEZ AUSSI CECI... Si vous décidez de couper la carte, N'UTILISEZ PAS une scie circulaire classique. Cela risque de déchirer la carte et de vous blesser. J'ai utilisé une scie à carreaux (sans dents), ou les "cisailles à métaux" fonctionnent également assez bien.

Nous avons décidé de ne pas trop travailler sur la protection électrique de la carte car nous avons constaté que c’était très bien dans notre configuration et voulons faire économiser à nos utilisateurs autant de coûts que possible. Vous pourrez avoir besoin ou envie d’ajouter une protection de circuit. C’est à vous de voir. 

Digikey.com (ou Silabs.com ou TI.com) sont une bonne base pour ceux qui veulent consulter des fiches techniques ou creuser un peu plus. 

REMARQUE : Vous trouverez ci-dessous nos circuits. Vous vous demandez peut-être pourquoi nous partageons cela... La vérité est que le circuit ne vous mènera pas très loin. Il faut beaucoup, beaucoup (et beaucoup) de logiciels pour tenir tout cela ensemble.
Nous espérons que le circuit vous aidera si vous en avez besoin ou si vous voulez en savoir plus.

![Image sans style](./images/diy/carte1.png)
![Image sans style](./images/diy/carte_2.png)

## Cellules de charge 

![Image sans style](./images/diy/cellule.png)

Voici deux types de cellules de charge (également appelées jauges de contrainte). Nous sommes ravis de pouvoir vous fournir l'une ou l'autre. Si vous vous procurez les vôtres, assurez-vous qu'elles sont compensées en température et qu'elles ont un très faible fluage (creep). La résistance de la cellule de charge de 200KG est d'environ 300 ohms par jambe (leg. Pour la charge de 50KG il est d'environ 750 ohms.

![Image sans style](./images/diy/fil1.png)

La plupart des cellules de charge semblent utiliser ce schéma de couleurs pour les fils. Si c'est le cas, alors câblez-les comme ceci.
Noir, vert, blanc, rouge (de haut en bas).
Les sorties se trouvent au milieu. Si les choses sont mélangées, elles seront généralement corrigées pendant l’étalonnage. 

![Image sans style](./images/diy/schema_cellule.png)

Le trou central de la cellule de charge de 50KG a un diamètre de 5mm.

# Étalonnage

Cette partie est en cours de construction et sera disponible très prochainement. 



