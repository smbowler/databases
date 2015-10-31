CREATE DATABASE chat;

USE chat;

  /* Describe your table here.*/
  CREATE TABLE `Messages` (
   id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
   userID INTEGER(20) NULL DEFAULT NULL,
   roomID  INTEGER(20) NULL DEFAULT NULL,
   message VARCHAR(140) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Users` (
   id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
   userID INTEGER(20) NULL DEFAULT NULL,
   username  INTEGER(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Rooms` (
   id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
   roomID INTEGER(20) NULL DEFAULT NULL,
   roomname  INTEGER(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

