#!/bin/bash
docker run -d -p 8000:8000 --name doc -v /apiwatch/production/userguide/:/docs squidfunk/mkdocs-material
docker container exec -ti doc mkdocs build --clean
rm -Rrfv /var/www/html/doc/*
cp -Rrv /apiwatch/production/userguide/site/* /var/www/html/doc/
sudo docker container rm -f doc