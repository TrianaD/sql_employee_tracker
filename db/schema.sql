DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;


-- remove prior tables 
DROP TABLE IF EXISTS department; 
DROP TABLE IF EXISTS position; 
DROP TABLE IF EXISTS employee; 

-- create new tables 
CREATE TABLE department {
    id: INT PRIMARY KEY AUTO_INCREMENT, 
    dpt_name: VARCHAR(30) 
};

CREATE TABLE position {
    id: INT PRIMARY KEY
    title: VARCHAR(30) -- to hold role title
    salary: DECIMAL --to hold role salary
    dpt_id: INT
};

CREATE TABLE employee {
    id: INT PRIMARY KEY
    first_name: VARCHAR(30) -- to hold employee first name
    last_name: VARCHAR(30) -- to hold employee last name
    position_id: INT -- to hold reference to employee role
    manager_id: INT
}
