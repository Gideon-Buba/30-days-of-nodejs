const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"
const client  = new MongoClient(uri);
const databaseName = "demo_db";
const collectionName = "users"

async function connectToDB() {  
    try {
        await client.connect();
        console.log("Connected to the database");

        const db =  client.db(databaseName);
        const collection = db.collection(collectionName)

        // Create/instert

        const insert = await collection.insertOne({
             firstName: "Gideon", lastName: "Buba", age: 22}
             );
        console.log("Document inserted")

        // Read/find

        const read = await collection.find({ firstName: "Gideon" }).toArray();
        console.log(`Found ${read.length} documents`);

        // Update
        const update = await collection.updateOne(
            { firstName: "Gideon" },
            { $set: { middleName: "Ambore" } }
        );
        console.log("Document updated", update.modifiedCount);

        // Delete
        const deleteResult = await collection.deleteOne({
            age : 22
        });
        console.log("Deleted document", deleteResult.deletedCount)

        db.createCollection("students", {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["year", "name", "group"],
                    properties: {
                        year: { bsonType: "number" },
                        name: { bsonType: "string" },
                        group: { bsonType: "string" }
                    }
                }
            }
        });

        console.log("Created collection: students");

        const studentsCollection = db.collection("students");
        const insertStudents = await studentsCollection.insertOne({
            year: 2024,
            name: "Gideon",
            group: "A"
        })

        console.log("Student document inserted:")

    } catch (err) {
        console.error("Error connecting to the database:", err);
    }
} 

connectToDB()