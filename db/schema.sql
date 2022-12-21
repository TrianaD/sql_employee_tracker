DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;


-- remove prior tables 
DROP TABLE IF EXISTS department; 
DROP TABLE IF EXISTS position; 
DROP TABLE IF EXISTS employee; 


CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    dpt_name VARCHAR(30) 
);

CREATE TABLE position (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) UNIQUE NOT NULL, -- to hold role title,
    salary DECIMAL NOT NULL, -- to hold role salary,
    dpt_id INT NOT NULL
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30), -- to hold employee first name
    last_name VARCHAR(30), -- to hold employee last name
    position_id INT, -- to hold reference to employee role
    manager_id INT
);