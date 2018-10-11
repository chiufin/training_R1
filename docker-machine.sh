#!/bin/bash

# for window 7 use

# docker-machine start
# docker-machine ls
# docker-machine rm default

# docker-machine create --driver virtualbox default
# docker-machine env default

export DOCKER_TLS_VERIFY=1
export DOCKER_HOST=tcp://192.168.99.100:2376
export DOCKER_CERT_PATH="C:\Users\stacy.chen\.docker\machine\certs"

# docker-machine ls
# docker ps
# docker images

 
# docker exec -it mysql5 mysql -uroot -p