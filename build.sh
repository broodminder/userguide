#!/bin/bash
# docker run -d -p 8000:8000 --name doc -v /mellisphera/test/userguide/fr/:/docs squidfunk/mkdocs-material
# docker container exec -ti doc mkdocs build --clean
# rm -Rrf /var/www/html/doc/*
# cp -Rr /mellisphera/prod/userguide/fr/site/* /var/www/html/doc/
# sudo docker container rm -f doc

# This file shall be saved in VisualStudio Code with an LF end of line sequence

PATH=/home/$USER/.pyenv/versions/userguide/bin/:$PATH

# Translation management
echo "Get differrence between the two last commit"
git diff HEAD^ HEAD --name-only > filesChange.txt

echo "Activate environment python"
pyenv activate userguide
pip install -r requirements.txt

echo "Translate files"
python translateFiles.py

# Build
echo "build DOCUMENTATION"
mkdocs build --clean

# Installation
echo "install for apache"
rm -Rrf /var/www/html/doc/*
cp -r ./site/* /var/www/html/doc/

echo " "
echo "done"
ls -l  /var/www/html/doc/

echo "Doc is deployed"        
