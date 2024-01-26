const { MongoClient } =  require("mongodb");
const path = require("path")
const express = require("express");


const app = express()

app.get('/', (req, res) => {
    res.sendFile('./index.html')
}) 

const port  = 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})