#!/bin/bash
# docker run -d -p 8000:8000 --name doc -v /mellisphera/test/userguide/fr/:/docs squidfunk/mkdocs-material
# docker container exec -ti doc mkdocs build --clean
# rm -Rrf /var/www/html/doc/*
# cp -Rr /mellisphera/prod/userguide/fr/site/* /var/www/html/doc/
# sudo docker container rm -f doc

echo "build"
cd ./en
 mkdocs build --clean
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
ll  /var/www/html/doc/
