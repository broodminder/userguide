import re
import os
import shutil
import yaml
from yaml.loader import SafeLoader
from openai import OpenAI
from dotenv import load_dotenv
from pathlib import Path
import tiktoken

# ENV
load_dotenv(dotenv_path = Path(".env"), override=True)
GPT_MODEL = "gpt-3.5-turbo"
client = OpenAI()
encoding = tiktoken.encoding_for_model(GPT_MODEL)

token_count = 0
def translateFolder(parent_folder, lang, **kwargs):
    token_count = 0
    files = os.listdir(parent_folder)
    for file in files:
        if file.endswith('.md') or file.endswith('.html'):
            token_count += translateFile(parent_folder + '/%s' % (file), lang, **kwargs)
    
    return token_count

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
    
    if not filePath.endswith('index.md'):
        # Translate content
        token_count = len(encoding.encode(filedata))
        filedata = translateText(filedata, "en", lang)
    
    # Write the file out again
    with open(filePath, 'w') as file:
        file.write(filedata)
    
    return token_count

def translateText(text, source_language, target_language):
    # Token management
    token_count = len(encoding.encode(text))
    # GPT3.5 has a maximum of 4097 tokens limit...
    if token_count > 2000:
        part1, part2 = split_markdown(text)
        # Translate the two part
        part1Translated = translateText(part1, source_language, target_language)
        part2Translated = translateText(part2, source_language, target_language)
        translation = "%s %s" % (part1Translated, part2Translated)
    else:
        response = client.chat.completions.create(
            model=GPT_MODEL,
            messages=[
                {"role": "system", "content": f"You are a helpful assistant that translates '{source_language}' text (html, markdown, etc) '{target_language}'. Couple remarks 'apiary' is translate 'rucher' in french, there is some javascript part, do not translate 'function()' and variables names. Sometimes there is also images tag on markdown title"},
                {"role": "user", "content": text}
            ]
        )

        if response.choices[0].finish_reason == 'lenght':
            # No finished
            print('ok')
            
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
            token_count += translateFolder(parent_folder, lang['lang'])
            # Should have only one file -> home.html
            shutil.copytree('./docs/overrides/en', './docs/overrides/%s' % lang['lang'], dirs_exist_ok=True)
            parent_folder = './docs/overrides/%s' % lang['lang']
            token_count += translateFolder(parent_folder, lang['lang'])


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
                    token_count += translateFile(NEW_NAME, lang['lang'])
    
    # Print
    print('Total token: %i' % token_count)
    print('Equivalent to %f $' % (token_count*100/750*0.0005))
