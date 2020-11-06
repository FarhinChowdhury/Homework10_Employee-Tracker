DROP DATABASE IF EXISTS cms_db;
CREATE DATABASE cms_db;
USE cms_db;

CREATE TABLE department (
	id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(30) NULL
    );

CREATE TABLE roles (
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL NULL,
    department_id INT
    );
    
CREATE TABLE employees (
	id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NULL,
    manager_id INT NULL
    );


SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;

    
    