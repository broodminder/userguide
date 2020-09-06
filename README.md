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

## Mkdocs-Material reference
This resource details all available plugins and options for Material Theme
https://squidfunk.github.io/mkdocs-material/


## Deployment on a server with a vhost

1. clone repo on the VPS in ```/mellisphera/prod/userguide```
2. launch ```./build.sh```
le site en version html est généré et installé sur un virtual host dans `/var/www/html/doc`
3. vérifier que tout est actualisé https://doc.mellisphera.com/

## Multi-lang management
There is one MkDocs repo for each lang. This will build a separate site per language. And allows using the "search" tool properly
When multiple langs where managed on a single MKDocs repo, the search was searching all of them together 
When integrated in mybroodminder or mellisphera we'll point to the right lang based on user prefs.

## Building a PDF file out of it
use the mkdocs-pdf-export-plugin
https://github.com/zhaoterryy/mkdocs-pdf-export-plugin
Note that this plugin is based onto WeasyPrint
https://weasyprint.readthedocs.io/en/latest/install.html

Works on MacOs and Linux.

Note for Mac users : use brew to install ALL packages and dependencies. Sometimes conflicts can arise if not all packages are installed in the same environment (ex Anaconda python or pip conflicting with Brew python3 or pip3)
