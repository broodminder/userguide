#!/bin/bash
# docker run -d -p 8000:8000 --name doc -v /mellisphera/test/userguide/fr/:/docs squidfunk/mkdocs-material
# docker container exec -ti doc mkdocs build --clean
# rm -Rrf /var/www/html/doc/*
# cp -Rr /mellisphera/prod/userguide/fr/site/* /var/www/html/doc/
# sudo docker container rm -f doc

# This file shall be saved in VisualStudio Code with an LF end of line sequence

PATH=/home/maxime/.pyenv/versions/userguide/bin/:$PATH

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
