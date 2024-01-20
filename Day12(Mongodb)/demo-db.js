
// const { MongoClient, ServerApiVersion } = require("mongodb");

// app.get('/', (req, res) => {
//     fs.readFile('./index.html', 'utf8', (err, html) => {
//         if (err) {
//             res.status(500).send("Sorry, an error has occured")
//         } else {
//          res.send(html)
//         } 
//     })
// })

// app.get('/favicon.ico', (req, res) => res.status(204));


// const dbConnectionString = "mongodb://localhost:27017/demo_db";

// const client = new MongoClient(dbConnectionString);

// client.connect().then(() => {
//     app.listen(3000, () => {
    
//         console.log('Server is listening on port 3000');
//     });
// })


// Create

// const { MongoClient } = require("mongodb");

// const url = "mongodb://localhost:27017";
// const dbName = "demo-db";

// const data = {
//     firstName: "Gideon",
//     secondName: "Buba",
//     email: "bubaambore@gmail.com",
//     password: "123four",
//     age: 21,
// };

// (async () => {
//     const client = await MongoClient.connect(url);
//     console.log('here');

//     const db = client.db(dbName);
//     const collection = db.collection("users");

//     const result = await collection.insertOne(data);

//     console.log("Document created:", result);
//     client.close();
// })();


const { MongoClient } = require('mongodb')
 
// Read
const url = 'mongodb://localhost:27017';
const dbName = 'demo-db';

MongoClient.connect(url, (err, client) => {
    console.log('hello')
  if (err) throw err;

  const db = client.db(dbName);
  const collection = db.collection('yourCollection');

  // Find documents
  collection.find({ key1: 'value1' }).toArray((err, documents) => {
    if (err) throw err;
    console.log('Found documents:', documents);
    client.close();
  });
});


// Used terminal for most of the things I'm learning 

// Learning queries from w3schools


