#!/bin/bash

# docker-machine default reset ...
# for window 7 use

# docker-machine start

# docker-machine env default
# docker-machine ls
# docker-machine start

export DOCKER_TLS_VERIFY=1
export DOCKER_HOST=tcp://localhost:2376
export DOCKER_CERT_PATH="C:\Users\stacy.chen\.docker\machine\certs"

# docker-machine ls
# docker ps
# docker images

 
# docker exec -it mysql5 mysql -uroot -p