const mysql = require("mysql");

const con = mysql.createConnection({
  host: 'localhost',									
  user: 'root',
  password: 'password',
  database: 'mydb'
})

con.connect((err) => {
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address = 'Park Lane 38' ", (err, result) => {
        if (err)  throw err;
        console.log(result)
    })
})
