# userguide

## Installer mkdocs en local sur la machine
```pip install mkdocs```
```mkdocs --version```

## Créer un nouveau projet
```mkdocs new my-project```

## Visualiser le résultat sur serveur de développement
```mkdocs serve```

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
Ceci reste à voir comment peut être fait. Idéalement on doit pouvoir switcher EN, FR, ES, ...
un tour rapide sur Github montre que cette fonctionnalité est encore en cours de reflexion.. ce qui peut être limitant pour notre besoin.


## Déploiement du site:
1- clonner le repo sur le VPS dans ```/apiwatch/production/userguide```

2- lancer ```sudo ./build.sh```
le site en version html est généré et installé sur un virtual host.

3- vérifier que tout est actualisé à partir du lien ci dessous

## Visualiser la doc
https://doc.mellisphera.com/#user-gude

