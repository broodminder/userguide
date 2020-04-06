#!/usr/bin/bash
docker container exec -ti doc mkdocs build --clean
rm -Rrv /var/www/html/doc/*
cp -Rrv /apiwatch/production/userguide/site/* /var/www/html/doc/
