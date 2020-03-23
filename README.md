# userguide

## Pour ajouter un guide:


Dans le dossier docs créer autant de répertoire pour regrouper les guide par catégories 

Pour chaque guide ajouter il faut l'ajouter également dans le fichier de configuration **mkdocs.yml** 
Exemple:
```
nav:
- Home: 'index.md'
- Javascript:
  - 'Manipuler les tableau': javascript/tableaux.md
  - 'Echarts': javascript/echarts/echarts.md
- Docker:
  - 'Docker Introduction': docker/docker.md
```

Ensuite une commande génerera le site en version html qu'il suffira de mettre sur un virtual host.

guide utilisateur pour les clients
