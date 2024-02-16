const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost',									
  user: 'root',
  password: 'password',
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL server!");

  // Creating a database
  connection.query("CREATE DATABASE mydb", (err, result) => {
    if (err) throw err;
    console.log("Database 'mydb' created!");
  });
});
