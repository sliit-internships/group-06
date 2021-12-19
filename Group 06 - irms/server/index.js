//setup express web server
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require('mysql');

//set port, listen for requests
const port = 5000 || process.env.PORT;

//Determining your app's base directory in Node.js
//global.__basedir = __dirname;

//define the database connection
db = mysql.createConnection(
    {
        host: 'localhost',
        //port: 8081,
        user: 'root',
        password: 'password',
        database: 'interndbsliit'
    }
);

//check the database connection
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Connected successfully')
})

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//database creation
app.get('/createdb', (req,res) => {
    let sql = 'CREATE DATABASE group_06_irms';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created successfully')
    })
});

// //users
// app.get('/createuserstable', (req, res) => {
//     let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(500), usertype VARCHAR(300), PRIMARY KEY(id))';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('User table created');
//     });
// })

// //students
// app.get('/createstudentstable', (req, res) => {
//     let sql = 'CREATE TABLE students(sid int(255), studentIdNumber VARCHAR(25), currentYear VARCHAR(25), Year2CompletionYear VARCHAR(10), Year2CompletionPeriod VARCHAR(10), sepcialization VARCHAR(55), name VARCHAR(100), mobile VARCHAR(25), homePhone VARCHAR(25), internshipStartDate DATE, supervisorEmail VARCHAR(100), PRIMARY KEY(sid))';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Students table created');
//     });
// })

// //company
// app.get('/createcompanytable', (req, res) => {
//     let sql = 'CREATE TABLE companies(id int(20), name VARCHAR(255), address VARCHAR(255), size VARCHAR(300), registeredYear VARCHAR(100), registeredCounty VARCHAR(100), PRIMARY KEY(id))';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Companies table created');
//     });
// })

//routes
const users = require('./routes/users');
const students = require('./routes/students');
const internManager = require('./routes/internManager')
const companies = require('./routes/companies');

app.use('/api/users', users);
app.use('/api/students', students);
app.use('/api/intern-manager', internManager);
app.use('/api/companies', companies)

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})