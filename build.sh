#!/bin/bash
# docker run -d -p 8000:8000 --name doc -v /mellisphera/test/userguide/fr/:/docs squidfunk/mkdocs-material
# docker container exec -ti doc mkdocs build --clean
# rm -Rrf /var/www/html/doc/*
# cp -Rr /mellisphera/prod/userguide/fr/site/* /var/www/html/doc/
# sudo docker container rm -f doc

PATH=/home/msrun/.pyenv/plugins/pyenv-virtualenv/shims:/home/msrun/.pyenv/shims:/home/msrun/.pyenv/bin:/opt/mellisphera/anaconda3/bin:/opt/mellisphera/anaconda3/condabin:/opt/anaconda/anaconda3/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games

echo "build en"
cd ./en
 mkdocs build --clean

echo "build fr"
cd ../fr
 mkdocs build --clean
cd ..

echo "install"
rm -Rrf /var/www/html/doc/*
cp index.html /var/www/html/doc/
cp -r img/ /var/www/html/doc/
cp -r ./en/site/ /var/www/html/doc/en/
cp -r ./fr/site/ /var/www/html/doc/fr/

echo " "
echo "done"
ls -l  /var/www/html/doc/

echo "done"