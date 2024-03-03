const express = require("express");
// MySQL
const mysql = require("mysql");
// Twitter
const twitter = require("twitter");
const request = require("request");
const path = require("path");
const Twitter = require("twitter");
PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
  });

  const client = new Twitter({
    // consumer_key: #,
    // consumer_secret: #,
    // access_token_key: #,
    // access_token_secret: #,
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
  console.log(`Server is running on port http://localhost:${PORT}`);
});
