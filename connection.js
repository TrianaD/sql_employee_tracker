require("dotenv").config();
const mysql = require ('mysql2');
const start = require ('./server');



// console.log(process.env);

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

});


// afterConnected = () => { 
//     console.log ("------------------------")
//     console.log ("------------------------")
//     console.log ("  EMPLOYEE TRACKER APP  ")
//     console.log ("------------------------")
//     console.log ("------------------------")
//     // start();
// };

start();

module.exports = mysqlConnection; 