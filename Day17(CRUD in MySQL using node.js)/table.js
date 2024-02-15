const mysql = require("mysql");

// Creating a connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_db'
});

// Creating a table query
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS details (
    id INT(15) NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) DEFAULT NULL,
    age FLOAT(15) DEFAULT NULL,
    PRIMARY KEY (id)
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1`;

// Establishing connection
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  
  console.log('Connected as id ' + connection.threadId);
  
  // Creating the details table
  connection.query(createTableQuery, function(err, results, fields) {
    if (err) {
      console.error('Error creating table: ' + err.stack);
      return;
    }
    console.log('Table created successfully!');
  });
  
  // Releasing connection
  connection.end(function(err) {
    if (err) {
      console.error('Error releasing connection: ' + err.stack);
      return;
    }
    console.log('Connection released successfully!');
  });
});
