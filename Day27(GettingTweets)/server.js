const express = require("express");
const mysql = require("mysql");
const Twitter = require("twitter");

const PORT = 3000;

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "your_database_name", // Provide your database name here
});

const client = new Twitter({
  /*
  consumer_key: #,
  consumer_secret: #,
  access_token_key: #,
  access_token_secret: #,
  */
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/startStream", (req, res) => {
  const keyword = req.query.keyword;

  const stream = client.stream("statuses/filter", { track: keyword });

  stream.on("data", function (event) {
    const tweet = event.text;
    const user = event.user.name;

    const insertQuery = 'INSERT INTO tweet_repo(keyword, user, tweet) VALUES (?, ?, ?)';
    connection.query(insertQuery, [keyword, user, tweet], function (err, result) {
      if (err) throw err;
      console.log("Tweet added to the database:", result);
    });
  });

  stream.on("error", function (error) {
    console.error("Twitter stream error:", error);
  });

  res.send("Streaming tweets for keyword: " + keyword);
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
