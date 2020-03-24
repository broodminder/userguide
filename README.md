# userguide

## Mode d'emploi de MKDOCS:
https://www.mkdocs.org/

Dans le dossier docs créer autant de répertoires pour regrouper les pages par catégories (chapitres)

Ecrire les pages en MarkDown à l'aide d'un éditeur comme Visual Studio Code. 

L'arborescence finale du site web se configure dans le fichier de configuration **mkdocs.yml** 
Exemple:
```
nav:
- Home: 'index.md'
- Capteurs:
  - 'Poids': capteurs/poids.md
  - 'Température': capteurs/temperature.md
- Apiary App:
  - 'Configurer l'App': app/configure.md
- MyBroodminder:
  - 'Prise en main': mbm/configure.md
- Mellisphera:
  - 'Prise en main': ms/configure.md
- Interpretation des données


```

## Gestion de plusieurs langues:
ceci reste à voir comment peut être fait. Idéalement on doit pouvoir switcher EN, FR, ES, ...
un tour rapide sur Github montre que cette fonctionnalité est encore en cours de reflexion.. ce qui peut être limitant pour notre besoin.


## Déploiement du site:

A COMPLETER AVEC LE MODE OPERATOIRE

Ensuite une commande génerera le site en version html qu'il suffira de mettre sur un virtual host.

## Visualiser
https://doc.mellisphera.com/#user-gude

