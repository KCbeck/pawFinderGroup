DROP DATABASE IF EXISTS parentInfoDB;
CREATE database parentInfoDB;

USE parentInfoDB;

CREATE TABLE parentInfo (
  fName VARCHAR(30) NOT NULL,
  lName VARCHAR(30) NOT NULL,
  phone INTEGER(10),
  zipcode INTEGER(5),
  PRIMARY KEY(phone)
);