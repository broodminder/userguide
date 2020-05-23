#!/bin/bash
docker run -d -p 8000:8000 --name doc -v /mellisphera/test/userguide/fr/:/docs squidfunk/mkdocs-material
docker container exec -ti doc mkdocs build --clean
rm -Rrf /var/www/html/doc/*
cp -Rr /mellisphera/test/userguide/fr/site/* /var/www/html/doc/
sudo docker container rm -f doc