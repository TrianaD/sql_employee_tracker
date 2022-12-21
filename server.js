const mysql = require ('mysql2');
const inquirer = require ('inquirer');
// const cTable = require ('console.table');
// const { Module } = require('module');

require("dotenv").config();


// const mysqlConnection = require('./connection');
// const { response } = require('express');


// initial prompt response and connection to database
const mysqlConnection = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD
    },
    console.log('Connected to the employee tracker database'),
    // afterConnected(),
    console.log ("------------------------"),
    console.log ("------------------------"),
    console.log ("  EMPLOYEE TRACKER APP  "),
    console.log ("------------------------"),
    console.log ("------------------------"),
   
);

mysqlConnection.connect(function (err) {
    if (err) throw err;
    start();
});



 start = () => { 
    inquirer.prompt ([
        {
        message: 'Please select an option from below to get started:',
        name: 'menu',
        type: 'list',
        choices: [
            
            'View all departments',
            'View all jobs',
            'View all employees',
            'Add a department',
            'Add a job',
            'Add an employee',
            'Update employee job',
            'Cancel',
        ],
    }])
    .then (response => {
        switch (response.menu) {
            case 'View all departments': 
                viewDepartment ();
                break;
            case 'Add a department':
                addDepartment ();
                break; 
            case 'View all jobs':
                viewPosition ();
                break; 
            case 'Add a job': 
                addPosition ();
                break;
            case 'View all employees': 
                viewEmployees ();
                break;
            case 'Add an employee':
                addEmployee ();
                break; 
            case 'Update employee job': 
                updateEmployee ();
                break;
            case 'Cancel':
                mysqlConnection.end ();
                break; 
            default: 
                mysqlConnection.end ();
        }
    });
};



viewDepartment = () => {
    mysqlConnection.query('SELECT * FROM department', function (err,res) {
        if (err) throw err;
        console.table(res);
        start();
    });
};

const addDepartment = () => {
    inquirer.prompt( [ 
        {
        name: 'department',
        type: 'input',
        message: 'Which department?',
        },
    ])
    .then(answer => {
        mysqlConnection.query(
            'INSERT INTO department (dpt_name) VALUES (?)',
            [answer.department],
            function (err, res) {
                if (err) throw err;
                console.log('Department added!');
                start();
            }
        );
    });
};

const viewPosition = () => {
    mysqlConnection.query('SELECT * FROM position', function (err,res) {
        if (err) throw err;
        console.table(res);
        start();
    });
};

const addPosition = () => {
    inquirer.prompt( [ 
        {
        name: 'addtitle',
        type: 'input',
        message: 'What is the their job title?',
        },
        {
        name: 'addsalary',
        type: 'input',
        message: 'What is their job salary?',
        },
        {
        name: 'adddpt_id',
        type: 'input',
        message: 'What is their deptartment ID?',
        },
    ])
    .then(answer => {
        mysqlConnection.query(
            'INSERT INTO position (title, salary, dpt_id) VALUES (?,?,?)',
            [answer.addtitle, answer.addsalary, answer.adddpt_id],
            function (err, res) {
                if (err) throw err;
                console.log('Job added!');
                start();
            }
        );
    });
};


const viewEmployees = () => {
    mysqlConnection.query('SELECT employee.id, first_name, last_name, title, salary, dpt_name, manager_id FROM ((department JOIN position ON department.id = position.dpt_id) JOIN employee ON position.id = employee.position_id);', 
        function (err,res) {
        if (err) throw err;
        console.table(res);
        start();
    });
};

const addEmployee = () => {
    inquirer.prompt( [ 
        {
        name: 'f_name',
        type: 'input',
        message: 'What is the employees first name?',
        },
        {
        name: 'l_name',
        type: 'input',
        message: 'What is the employees last name?',
        },
        {
        name: 'position_id',
        type: 'input',
        message: 'What is the employees job id?',
        },
        {
        name: 'mgr_id',
        type: 'input',
        message: 'What is their managers ID?',
        },
    ])
    .then(answer => {
        mysqlConnection.query(
            'INSERT INTO position (first_name, last_name, position_id, manager_id) VALUES (?,?,?,?)',
            [answer.f_name, answer.l_name, answer.position_id, answer.mgr_id],
            function (err, res) {
                if (err) throw err;
                console.log('Employee added!');
                start();
            }
        );
    });
};

const updateEmployee = () => {
    inquirer.prompt( [ 
        {
        name: 'id',
        type: 'input',
        message: 'What is the employee ID number?',
        },
        {
        name: 'positionID',
        type: 'input',
        message: 'What is the new job ID?',
        },
    ])
    .then(answer => {
        mysqlConnection.query(
            'UPDATE employee SET position_id=? WHERE id=?',
            [answer.id, answer.positionID],
            function (err, res) {
                if (err) throw err;
                console.log('Employee position updated!');
                start();
            }
        );
    });
};


