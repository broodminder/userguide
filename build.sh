#!/bin/bash
# docker run -d -p 8000:8000 --name doc -v /mellisphera/test/userguide/fr/:/docs squidfunk/mkdocs-material
# docker container exec -ti doc mkdocs build --clean
# rm -Rrf /var/www/html/doc/*
# cp -Rr /mellisphera/prod/userguide/fr/site/* /var/www/html/doc/
# sudo docker container rm -f doc

# This file shall be saved in VisualStudio Code with an LF end of line sequence

PATH=/home/maxime/.pyenv/versions/userguide/bin/:$PATH

# Translation management
git diff d25fb1cb44b916884ddf889408ed9a6006b7ed89 5094257306ef912c9164bbc5b518f8b44be84ec8 --name-only > filesChange.txt

echo "build DOCUMENTATION"
mkdocs build --clean

echo "install"
rm -Rrf /var/www/html/doc/*
#cp index.html /var/www/html/doc/
#cp -r img/ /var/www/html/doc/
cp -r ./site/* /var/www/html/doc/

echo " "
echo "done"
ls -l  /var/www/html/doc/

echo "Doc is deployed"        
