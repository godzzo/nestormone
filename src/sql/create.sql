
CREATE DATABASE nestormone CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

CREATE DATABASE sakila CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

CREATE USER 'godzzo'@'localhost' IDENTIFIED BY 'abc123';
GRANT ALL PRIVILEGES ON * . * TO 'godzzo'@'localhost';
FLUSH PRIVILEGES;

