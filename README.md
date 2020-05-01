# userguide

## Install mkdocs
```pip install mkdocs```

```pip install mkdocs-material```

## Using mkdocs
```mkdocs new my-project``` Create new project

```mkdocs serve```  Launch the development server at http://127.0.0.1:8000 (default)

```mkdocs build```  Building the documentation html site


## Utility 
- MKDocs user guide https://www.mkdocs.org/
- converting Word to Markdown https://word2md.com/
- converting to pdf https://github.com/zhaoterryy/mkdocs-pdf-export-plugin This one is still explored, having an issue ongoing

## Configuration file mkdocs.yml
This file allows for multiple options and configuration.
By default we are not changing much in it except site title and theme

```yml
site_name: USER DOCUMENTATION
theme: material
nav:
```
_nav_ would allow to force the site doc structure tree, but the default output is fine too

## Managing multiple languages

We have started building a site with two nav folders EN and FR
In the future separate doc sites can be built for each language. 
When integrated in mybroodminder or mellisphera we'll point to the right lang based on user prefs.

## Deployment on a server with a vhost
1. clonner  repo sur le VPS dans ```/apiwatch/production/userguide```

2. lancer ```sudo ./build.sh```
le site en version html est généré et installé sur un virtual host.

3. vérifier que tout est actualisé à partir du lien ci dessous

4. Visualiser la doc sur : https://doc.mellisphera.com/#user-gude

