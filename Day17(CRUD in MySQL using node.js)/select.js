const mysql = require("mysql");

const con = mysql.createConnection({
  host: 'localhost',									
  user: 'root',
  password: 'password',
  database: 'mydb'
})

con.connect(function(err) {
  if  (err) throw err;

  // selects all customers and returns a result object 
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(fields);
  });
})