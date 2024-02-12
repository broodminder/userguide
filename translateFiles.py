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
    print('Translate file %s to %s' % (filePath, lang))
    # Read in the file
    with open(filePath, 'r') as file:
        filedata = file.read()
    
    # Replace what we need
    filedata = re.sub(r'template: en/', 'template: %s/' % lang, filedata)
    # add prefix href is wanted
    if prefix_href is not None:
        filedata = re.sub(r'href="', 'href="%s/' % prefix_href, filedata)
    
    # GPT3.5 has a maximum of 4097 tokens limit...
    totalWORDS = len(re.findall(r'\w+', filedata))
    if (totalWORDS+1462) > 4097:
        part1, part2 = split_markdown(filedata)
        print("%s exceed tokens limits" % filePath)
        # Translate content
        part1 = translateText(part1, "en", lang)
        part2 = translateText(part2, "en", lang)
        filedata = "%s %s" % (part1, part2) 
    else:
        # Translate content
        filedata = translateText(filedata, "en", lang)
    
    # Write the file out again
    with open(filePath, 'w') as file:
        file.write(filedata)
    
    return totalWORDS

def translateText(text, source_language, target_language):
    prompt = f"Translate the following '{source_language}' text (html, markdown, etc) to '{target_language}', couple remarks do not hesitate to translate flag emoji with the correct language also 'apiary' is translate 'rucher' in french: {text}"

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant that translates text."},
            {"role": "user", "content": prompt}
        ]
    )

    translation = response.choices[0].message.content.strip()
    return translation

def split_markdown(text):
    # Trouver la position de coupure en fonction de la longueur totale
    middle_index = len(text) // 2

    # Rechercher le dernier espace avant ou après la position de coupure
    while middle_index < len(text) and text[middle_index] != ' ':
        middle_index += 1
    while middle_index > 0 and text[middle_index] != ' ':
        middle_index -= 1

    # Diviser la chaîne en deux parties
    part1 = text[:middle_index].strip()
    part2 = text[middle_index:].strip()

    return part1, part2

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
    print('Equivalent to %f $' % (totalWORDS*100/750*0.0005))
