# Traning R1 - warm up

## Getting Started in development

```
sh start-mysql.sh

cd portal
npm run dev (/stg/prod)
```

## Setting ENV
for DB development, staging, production and session secret

create `portal/.env` 
```
SESSION_SECRET=123

DEV_DB=localhost
DEV_DB_WINDOWS=192.168.99.100
STG_DB=staging.example.host
PROD_DB=staging.example.host

DB_USER=root
DB_PASSWORD=password

IAM_USER_KEY=
IAM_USER_SECRET=

```
0. Default Setting

    session secret: `'123'`

    db: `localhost`

    db user: `root`

    db password: `password`

1. Development / Staging / Prodcution

    session secret: `SESSION_SECRET`

    db: `DEV_DB` / `STG_DB` / `PROD_DB` ( /`DEV_DB_WINDOWS` )

    db user: `DB_USER`

    db password: `DB_PASSWORD`


## 本地端 連 mysql container 

```
cd mysql

docker build --no-cache -t mysql5 .

docker run -it --rm --publish 3306:3306 --name mysql5 mysql5

docker exec -it mysql5 mysql -uroot -p 
(連進去 MYSQL)
show databases;
use training_r1;
show tables;
select * from user;
```

#### 連進 Mac local mysql
```
cd /usr/local/mysql/bin/
./mysql -uroot -p
```


### Problem tackling
- Run Docker-machine in windows
    ```
    . ./docker-machine.sh
    docker-machine ip default
    ```
- [MySQL version 8 problem](https://o7planning.org/en/11959/connecting-to-mysql-database-using-nodejs)
  `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';`
- [Clear docker compose volumes](https://github.com/docker-library/mysql/issues/51)
  docker-compose does extra work to preserve volumes between runs (thus preserving the database); you may want to try `docker-compose rm -v` to delete everything and try starting it up again.
- docker unauthorized problem, type `docker login`
- [duplicate uploaded files](https://stackoverflow.com/questions/32045027/multer-callbacks-not-working)


### Useful material 
- [Character Entity Reference Chart](https://dev.w3.org/html5/html-author/charref)
- [DB schema - data type](http://www.tutorialspoint.com/mysql/mysql-data-types.htm)
- [Aws microservice tutorial](https://aws.amazon.com/tw/getting-started/container-microservices-tutorial/)
- `alias dk='docker'`
- [console level](http://jason-wang.logdown.com/posts/422236-chrome-console-api-tips)

# Objective:
Training to get familiar with JQuery/ExpressJS/Pug/Docker

### Vagrant + Virtual Box (Use docker for R1P2, ubuntu can use 16.04)
1. Setup vagrant + virtual box or docker with ubuntu 14.04
2. install git
3. ssh into your vagrant/docker linux server

### Github
1. initialize a public nodejs training project git repository
2. push your training project to github repository

### Mysql
1. install mysql server in vagrant/docker
2. login to mysql server
3. create database
4. create USERS table
5. design table schema of USERS with appropriate data type
6. access mysql database from local


### Nodejs
1. setup expressjs in docker & local, development can be in local
2. implement restful api with login/logout with cookie
3. implement restful api for user CRUD operations


### UI
1. draw mockup to confirm
2. use PUG to implement the login page
3. use PUG to implement user manager

### JQuery
1. implement user login/logout functions
2. display user info in the user manager 

### Bonus:
use Mocha to write unit tests

### Advanced:
use session to implement login/logout
implement file upload/downlod function with jquery/nodejs



## Wrap docker images and run docker container

```
docker build -t training-r1 .
docker run -p 3000:3000 docker run --env VAR1=value1 training-r1 
open localhost:3000
```

## Mysql
enter in mysql
```
docker exec -it training_r1_db_1 mysql -uroot -p
```

`docker build -t single-mysql`
`docker run --name linkedapp -p 3306:3306 -d linkedapp`

`docker run --name linkednode-app --link single_mysql:mysql -d linkednode`

