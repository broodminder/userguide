# userguide v1.3.12

## Deployment

!!!note
    The following steps will deploy the userguide in local mode. It means that you will use the *light version* with only english language and no pdf export.

1. Clone the repo on the VPS
`git clone https://github.com/broodminder/userguide /mellisphera/production/userguide`

!!! note
    The path at the end is refered to the vhost VPS, you can choose the one that you want on local.

2. Use a python virtualenv
To manage different librairies version between *userguide*, *hiveminder*, *flowminder*, etc, we need to use a python environment. If you don't have already a python env, please use the following command.

  `pyenv virtualenv 3.11.2 userguide`

  Then activate it
  `pyenv activate userguide`

3. Install all packages
`pip install -r requirements.txt`

4. Create .env file and replace variables
`cp .env.example .env`

In the [.env](.env) file, replace the variable **USERNAME** by your local username from your machine.

5. Export your environment

`export $(grep -v '^#' .env | xargs -0)`

6. Start the server

`mkdocs serve`

7. Verify your site
On localhost:3000 if you use local starter or on the DNS you choose on your apache2 configuration.

!!!note
    But if you want to start the server with an apache2 configuration, you need to use the **build.sh** file which will build the documentation on copy it on the following folder `/var/www/html/doc`.

    `sudo ./build.sh`

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


## Building a PDF file out of it
use the mkdocs-pdf-export-plugin
https://github.com/zhaoterryy/mkdocs-pdf-export-plugin
Note that this plugin is based onto WeasyPrint
https://weasyprint.readthedocs.io/en/latest/install.html

Works on MacOs and Linux.

Note for Mac users : use brew to install ALL packages and dependencies. Sometimes conflicts can arise if not all packages are installed in the same environment (ex Anaconda python or pip conflicting with Brew python3 or pip3)
