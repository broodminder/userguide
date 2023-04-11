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
- NOTE : Install all missing libraries with brew (same installer for python and mkdocs) to have everything in the same path

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
https://squidfunk.github.io/mkdocs-material/reference/lists/

## Deployment on a server with a vhost

1. clone repo on the VPS in ```/mellisphera/prod/userguide```
2. launch ```./build.sh```
le site en version html est généré et installé sur un virtual host dans `/var/www/html/doc`
3. vérifier que tout est actualisé https://doc.mellisphera.com/

### Deployement avec les docs pdf
Pour mkdocs, un diff montre trop de différence entre serveur et local, le sed peut fonctionner mais la ligne est longue, trop facile de se tromper. Ainsi la solution la plus simple que j’ai trouvé est :

Coté serveur
- `./build.sh` qui génére les sites FR et EN à la fois




Côté machine locale
```
cd userguide/en
mkdocs build
cd site
scp -r -v -P 1150 * msrun@51.68.71.91:/var/www/html/doc/en

cd ../../fr
mkdocs build
cd site
scp -r -v -P 1150 * msrun@51.68.71.91:/var/www/html/doc/fr 
```

Cela a pour but d’écraser les fichiers s’il y a des modifications.
- Vérifier sur toutes les pages https://doc.mellisphera.com/ si la disposition est correcte et que le bouton d’export pdf est bien placé. Dans le cas où une page pose problème (ce qui m’est arrivé pour la page ‘Introduction’), il faut répérer puis remplacer la ligne de l’export PDF par le bout de code suivant (avec nano par exemple):
```
<article class="md-content__inner md-typeset"><a class="md-content__button md-icon" download href="intro.pdf" title="PDF Export"><svg style="height: 1.2rem; width: 1.2rem;" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"></path></svg></a>
```


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
