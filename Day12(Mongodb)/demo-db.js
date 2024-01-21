
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
//     phone: 12345,
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



const { MongoClient } =  require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "test-db"

MongoClient.connect(url, (err, client) => {
    if (err) {
        console.error("Error connecting to MongoDB:", err);
        return;
    }

    console.log("Connected to Mongodb successfully!!!")

    const db = client.db(dbName)

    const data = {
        firstName: "John",
        lastname: "Doe",
        phone: 12345,
        date: Date()
    }

    const collectionName = "users";

    db.collection(collectionName).insertOne(data, (insertErr, result) => {
        if (insertErr) {
            console.log("Error inserting document", insertErr)
        } else {
            console.log("Document inserted succesfully", result.ops[0]);
        }

        client.close()
    })
})



