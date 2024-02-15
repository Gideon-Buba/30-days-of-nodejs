const mysql = require("mysql");

const connection  = mysql.createConnection({
  host     : 'localhost',									
  user     : 'root',
  password : '',
  database : 'my_db'
})