const express = require("express");
const { readFile } = require("fs/promises");
const path = require("path")
const { MongoClient }= require("mongodb");
const bcrypt = require("bcrypt")
const app = express()
const uri = "mongodb://localhost:27017"
const client  = new MongoClient(uri);
const databaseName = "demo_db";
const collectionName = "user"

const saltRounds = 10;


let DB;



app.set("view-engine", "ejs")
app.use('/', express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/sign_up', async (req, res) => {

    await DB.collection(collectionName).insertOne({
        ...req.body,
        password: await bcrypt.hash(req.body.password, saltRounds)
    });

    res.redirect('/success.html');
});

async function connectToDb() {
    try {
        await client.connect();
        console.log("connected to database")
        DB =  client.db(databaseName);
    } catch (err) {
        console.error("Error connecting to the database:", err);
    }

}

async function getHash(password) {
    new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) reject(err);

            bcrypt.hash(password, salt, (err, hashedPassword) => {
                if(err) reject(err);

                resolve(hashedPassword);
            })
        })
    })
}
    





const port  = 3000;
connectToDb().then(() => {
    app.listen(port, () => {
        console.log(`server is running on port http://localhost:${port}`);   
    })
})

