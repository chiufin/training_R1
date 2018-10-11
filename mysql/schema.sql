CREATE TABLE user
(
  id              INT(10) unsigned NOT NULL AUTO_INCREMENT,
  name            VARCHAR(150) NOT NULL,
  email           VARCHAR(320) NOT NULL,
  psw             CHAR(32) NOT NULL,
  -- created_time    TIMESTAMP NULL DEFAULT NULL,
  -- updated_time    TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY     (id)                                 
);


INSERT INTO user ( name, email, psw, login_status ) VALUES
  ( 'Stacy', 'stacy.chen@innovasolutions.com', 'stacy' ),
  ( 'Wilson', 'wilson.chen@innovasolutions.com', 'wilson' ),
  ( 'Jason', 'jason.chen@innvovasolutions.com', 'jason' );