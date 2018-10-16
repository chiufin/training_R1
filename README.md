# Traning R1 - warm up

## Getting Started
```
cd portal
docker build -t training-r1 .
docker run -p 3000:3000 training-r1 
docker-machine ip default
open [ip]:3000
```

## Docker-machine default reset
windows `. ./docker-machine.sh`
mac `sh ./docker-machine.sh`


## Mysql
enter in mysql
```
docker exec -it training_r1_db_1 mysql -uroot -p
```

`docker build -t single-mysql`
`docker run --name linkedapp -p 3306:3306 -d linkedapp`

`docker run --name linkednode-app --link single_mysql:mysql -d linkednode`







### Useful material 
- [Character Entity Reference Chart](https://dev.w3.org/html5/html-author/charref)
- [DB schema - data type](http://www.tutorialspoint.com/mysql/mysql-data-types.htm)
- [Aws microservice tutorial](https://aws.amazon.com/tw/getting-started/container-microservices-tutorial/)


### Problem tackling
- [MySQL version 8 problem](https://o7planning.org/en/11959/connecting-to-mysql-database-using-nodejs)
  `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';`
- [Clear docker compose volumes](https://github.com/docker-library/mysql/issues/51)
  docker-compose does extra work to preserve volumes between runs (thus preserving the database); you may want to try `docker-compose rm -v` to delete everything and try starting it up again.




# 本地端 連 mysql container 

```
cd mysql

docker build --no-cache -t mysql5 .

docker run -it --rm --publish 3306:3306 --name mysql5 mysql5

docker exec -it mysql5 mysql -uroot -p 
(連進去 MYSQL)
```

!! WINDOWS HOST need to fill in `docker-machine ip`(db.js)


## Enter Mysql in Mac
```
cd /usr/local/mysql/bin/
./mysql -uroot -p
```


##Objective:
Training to get familiar with JQuery/ExpressJS/Pug/Docker

Vagrant + Virtual Box (Use docker for R1P2, ubuntu can use 16.04)
1. Setup vagrant + virtual box or docker with ubuntu 14.04
2. install git
3. ssh into your vagrant/docker linux server

Github
1. initialize a public nodejs training project git repository
2. push your training project to github repository

Mysql
1. install mysql server in vagrant/docker
2. login to mysql server
3. create database
4. create USERS table
5. design table schema of USERS with appropriate data type
6. access mysql database from local


Nodejs
1. setup expressjs in docker & local, development can be in local
2. implement restful api with login/logout with cookie
3. implement restful api for user CRUD operations


UI
1. draw mockup to confirm
2. use PUG to implement the login page
3. use PUG to implement user manager

JQuery
1. implement user login/logout functions
2. display user info in the user manager 

Bonus:
use Mocha to write unit tests

Advanced:
use session to implement login/logout
implement file upload/downlod function with jquery/nodejs