DROP DATABASE IF EXISTS employeetracker_DB;
CREATE DATABASE employeetracker_DB;

USE employeetracker_DB;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Los Angeles Lakers");

INSERT INTO department (name)
VALUES ("Chicago Bulls");

INSERT INTO department (name)
VALUES ("Denver Nuggets");


CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NULL,
	department_id INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO role (title, salary, department_id)
VALUES ("Head coach", 50000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Player", 1000000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Dancers", 10000, 3);

CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id  INT default 0,
  manager_id INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Frank", "Vogel", 1, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("LeBron", "James", 2, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Vika", "Shika", 3, 1);

SELECT * FROM employees
SELECT * FROM role
SELECT * FROM department