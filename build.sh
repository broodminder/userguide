#!/bin/bash
# This file shall be saved in VisualStudio Code with an LF end of line sequence

export $(grep -v '^#' .env | xargs -0)
export PATH=/home/$USER/.pyenv/versions/userguide/bin/:$PATH

# Translation management
echo "Get differrence between the two last commit"
git diff HEAD^ HEAD --name-only > filesChange.txt

echo "Translate files"
/home/$USER/.pyenv/versions/userguide/bin/python userguide_utilities/translateFiles.py

# Build
echo "build DOCUMENTATION"
/home/$USER/.pyenv/versions/userguide/bin/mkdocs build --clean

# Installation
echo "install for apache"
rm -Rrf /var/www/html/doc/*
cp -r ./site/* /var/www/html/doc/
rm -r ./site

echo " "
echo "done"
ls -l  /var/www/html/doc/

echo "Doc is deployed"        
