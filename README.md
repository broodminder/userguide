# userguide v1.0.15

## Deployment

1. Clone the repo on the VPS
`git clone https://github.com/broodminder/userguide /mellisphera/production/userguide`

!!! note
    The path at the end is refered to the vhost VPS, you can choose the one that you want on local.

2. Use a python virtualenv
To manage different librairies version between *userguide*, *hiveminder*, *flowminder*, etc, we need to use a python environment. If you don't have already a python env, please use the following command.

    ```pyenv virtualenv 3.11.2 userguide```

    Then activate it
    ```pyenv activate userguide```

3. Install all packages
```pip install -r requirements.txt```

4. Start the server
If you only want to work on local, you can use the following command
`mkdocs serve`

    But if you want to start the server with an apache2 configuration, you need to use the **build.sh** file which will build the documentation on copy it on the following folder `/var/www/html/doc`.

    `sudo ./build.sh`

4. Verify your site
On localhost:3000 if you use local starter or on the DNS you choose on your apache2 configuration.


## Configuration file mkdocs.yml
This file allows for multiple options and configuration.
By default we are not changing much in it except site title, theme and new language (be carrefull, the whole translation process is based on the list of langs setted on the yaml file)

```yml
site_name: USER DOCUMENTATION
theme: material
nav:
```
_nav_ would allow to force the site doc structure tree, but the default output is fine too

### Multi-lang management
The documentation has only one lang **en**.
Here is the main folder structure :

```
docs\
    en\*.md
    overrides\en\home.html
    assets\**
mkdocs.yml
.env
translateFiles.py
```

For now we have *en, fr, it, es, nl, jap* languages.
If we want to add a new lang, we need first to add it in the **mkdocs.yml** on the plugin part (i18n).

The easiest way is to copy the 'fr' part, append it at the end and change everything based on the new lang (you can find an example bellow).

```yml
plugins:
  - search
  - i18n:
      docs_structure: folder
      fallback_to_default: true
      reconfigure_material: true
      reconfigure_search: true
      languages:
        - locale: en
          default: true
          name: 🇺🇸 English
          build: true
        - locale: fr
          link: /fr/
          name: 🇫🇷 Français
          build: true
          site_name: "GUIDE D'UTILISATEUR"
          nav_translations:
            Home: Accueil
            Quick start guide 🚀 : Guide de démarrage rapide 🚀
            Sensors: Capteurs
            Product range: Gamme de capteurs
            General aspects:  Aspects général
            Scale Assembly: Assemblage de la balance
            Yolink devices: Capteurs Yolink
            Example setups: Examples de configurations
            Data interpretation: Interprétation des données
            BroodMinder Device Updates: Mise à jour des capteurs BroodMinder
            BroodMinder Hub Updates: Mise à jour des hubs BroodMinder
            Video Library: Bibliothèques de vidéos
            Training Sessions: Sessions de tutoriels
            General: Général
            Tech Stuff and Physics: Tech Stuff and Physics
            Troubleshooting: Troubleshooting
            Repair Guide: Guide de réparation
            Distributors: Distributeurs
            Legacy Devices: Legacy Devices
            About: A propos
        - locale: i18n lang code
            link: /i18n lang code/
            name: 🇫(EMOJI FLAG) NEW LANG
            build: true
            # !!!! Then you need to translate by your self the following part
            site_name: "GUIDE D'UTILISATEUR"
            nav_translations:
                Home: Accueil
                Quick start guide 🚀 : Guide de démarrage rapide 🚀
                Sensors: Capteurs
                Product range: Gamme de capteurs
                General aspects:  Aspects général
                Scale Assembly: Assemblage de la balance
                Yolink devices: Capteurs Yolink
                Example setups: Examples de configurations
                Data interpretation: Interprétation des données
                BroodMinder Device Updates: Mise à jour des capteurs BroodMinder
                BroodMinder Hub Updates: Mise à jour des hubs BroodMinder
                Video Library: Bibliothèques de vidéos
                Training Sessions: Sessions de tutoriels
                General: Général
                Tech Stuff and Physics: Tech Stuff and Physics
                Troubleshooting: Troubleshooting
                Repair Guide: Guide de réparation
                Distributors: Distributeurs
                Legacy Devices: Legacy Devices
                About: A propos
```

After you finish everything, the translation will be done on the server at the end of the pull.
It is based on the chatGPT API (chatCompletions) and it can take time cause we use only the **gpt3.5-turbo** model.




## Annexes
### Using mkdocs

You have different commands to use the mkdocs framework.

**Create new project**
```mkdocs new my-project```

**Launch the development server at http://127.0.0.1:8000 (default)**
```mkdocs serve```

**Building the documentation html site**
```mkdocs build```


#### Utility 
- MKDocs user guide https://www.mkdocs.org/
- converting Word to Markdown https://word2md.com/
- converting to pdf https://github.com/zhaoterryy/mkdocs-pdf-export-plugin This one is still explored, having an issue ongoing
- NOTE : Install all missing libraries with brew (same installer for python and mkdocs) to have everything in the same path

#### Mkdocs-Material reference
This resource details all available plugins and options for Material Theme
https://squidfunk.github.io/mkdocs-material/
https://squidfunk.github.io/mkdocs-material/reference/lists/


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

## Building a PDF file out of it
use the mkdocs-pdf-export-plugin
https://github.com/zhaoterryy/mkdocs-pdf-export-plugin
Note that this plugin is based onto WeasyPrint
https://weasyprint.readthedocs.io/en/latest/install.html

Works on MacOs and Linux.

Note for Mac users : use brew to install ALL packages and dependencies. Sometimes conflicts can arise if not all packages are installed in the same environment (ex Anaconda python or pip conflicting with Brew python3 or pip3)
