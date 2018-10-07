FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD 123  
ENV MYSQL_DATABASE training_r1  
# ENV MYSQL_USER users_service  
# ENV MYSQL_PASSWORD 123


# failed script
# RUN ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123';

ADD schema.sql /docker-entrypoint-initdb.d

EXPOSE 3306