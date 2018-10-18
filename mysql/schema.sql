CREATE TABLE user
(
  id              INT(10) unsigned NOT NULL AUTO_INCREMENT,
  name            VARCHAR(150) NOT NULL,
  email           VARCHAR(320) NOT NULL,
  psw             CHAR(32) NOT NULL,
  created_time    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_time    TIMESTAMP NULL,
  PRIMARY KEY     (id)                                 
);


INSERT INTO user ( name, email, psw ) VALUES
  ( 'Stacy Chen', 'stacy.chen@innovasolutions.com', MD5('stacy') ),
  ( 'Wilson Chen', 'wilson.chen@innovasolutions.com', MD5('wilson') ),
  ( 'Jason Chen', 'jason.chen@innvovasolutions.com', MD5('jason') );