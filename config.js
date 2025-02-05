const mysql = require('mysql');
const chalk = require('chalk');
require('dotenv').config();

const database = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'beginwise',
    
});

database.connect((err) => {
    if (err) {
        console.log(chalk.red('ERROR WHILE CONNECTING TO DATABASE'));
    } else {
        console.log(chalk.green.inverse('CONNECTED TO DATABASE'));
    }
});

module.exports = database;
