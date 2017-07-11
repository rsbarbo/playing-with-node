DROP DATABASE IF EXISTS people;
CREATE DATABASE people;

\c people;

CREATE TABLE peeps (
  ID SERIAL PRIMARY KEY,
  firstName VARCHAR,
  lastName VARCHAR,
  age INTEGER,
  sex VARCHAR
);

INSERT INTO peeps (firstName, lastName, age, sex)
  VALUES ('Rapha', 'Barbo', 33, 'M');
