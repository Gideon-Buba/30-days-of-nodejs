const express = require("express");
const mysql = require("mysql");
PORT = 3000;

const app = express();

app.get("/tweets", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
  });
  connection.connect((err) => {
    if (err) throw err;
    connection.query("SELECT * FROM tweets", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on port https://localhost:${PORT}`);
});
