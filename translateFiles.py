import re
import os
import shutil
import yaml
from yaml.loader import SafeLoader
from openai import OpenAI
from dotenv import load_dotenv
from pathlib import Path

# ENV
load_dotenv(dotenv_path = Path(".env"), override=True)
client = OpenAI()

totalWORDS = 0
def translateFolder(parent_folder, lang, **kwargs):
    totalWORDS = 0
    files = os.listdir(parent_folder)
    for file in files:
        if file.endswith('.md') or file.endswith('.html'):
            totalWORDS += translateFile(parent_folder + '/%s' % (file), lang, **kwargs)
    
    return totalWORDS

def translateFile(filePath, lang, prefix_href = None):
    # Read in the file
    with open(filePath, 'r') as file:
        filedata = file.read()
    
    # Replace what we need
    filedata = re.sub(r'template: en/', 'template: %s/' % lang, filedata)
    # add prefix href is wanted
    if prefix_href is not None:
        filedata = re.sub(r'href="', 'href="%s/' % prefix_href, filedata)

    # Write the file out again
    with open(filePath, 'w') as file:
        file.write(filedata)
    
    # Manage content
    totalWORDS = len(re.findall(r'\w+', filedata))
    return totalWORDS

# Read filesChange.txt
CHANGE = open('./filesChange.txt')
listOfFiles = CHANGE.read().split('\n')
CHANGE.close()

# Language management
with open('mkdocs.yml') as f:
    mkdocsConfig = yaml.load(f, Loader=SafeLoader)
# Search for the plugins i18n
if 'plugins' in mkdocsConfig:
    langPlugin = [plugin for plugin in mkdocsConfig['plugins'] if (type(plugin) is dict and 'i18n' in plugin.keys())]
    if len(langPlugin) == 1:
        langPlugin = langPlugin[0]['i18n']['languages']
        LANGS = [{'lang': lang['locale'], 'new': False} for lang in langPlugin if lang['locale'] != 'en']
    else:
        raise NameError('Too muck plugin i18n founded in the mkdocs.yml, cannot find the correct one.')

    # Now, be sure that each LANGS folder exist
    for lang in LANGS:
        # In docs -> means totally new folder to create -> translate everything
        if not os.path.isdir('./docs/%s' % lang['lang']):
            lang['new'] = True
            shutil.copytree('./docs/en', './docs/%s' % lang['lang'])
            # Should then translate all files
            parent_folder = './docs/%s' % lang['lang']
            totalWORDS += translateFolder(parent_folder, lang['lang'])
            # Should have only one file -> home.html
            shutil.copytree('./docs/overrides/en', './docs/overrides/%s' % lang['lang'], dirs_exist_ok=True)
            parent_folder = './docs/overrides/%s' % lang['lang']
            totalWORDS += translateFolder(parent_folder, lang['lang'])


    # Loop over each file, found it, if yes -> translate, if no (maybe deleted, moved, etc)
    for file in listOfFiles:
        # We should treat only files where there is a subfolder /en/ (overrides/en/ or docs/en/)
        if os.path.isfile(file) and (file.endswith('.md') or file.endswith('.html')) and '/en/' in file:
            # Copy the file into each LANG folders then translate it
            for lang in LANGS:
                if lang['new'] == False:
                    NEW_NAME = file.replace('/en/', '/%s/' % lang['lang'])
                    shutil.copy(file, NEW_NAME)
                    # Then translate
                    # TODO: for now count the price
                    totalWORDS += translateFile(NEW_NAME, lang['lang'])
    
    # Print
    print('Total Number of words: %i' % totalWORDS)
    print('Equivalent to %f $' % (totalWORDS*100/750*0.01))
