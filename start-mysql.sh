#!/bin/bash


cd mysql
docker build --no-cache -t mysql5 .
docker run -it --rm --publish 3306:3306 --name mysql5 mysql5
