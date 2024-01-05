const express = require('express');
const fs = require('fs');

const app =  express();

app.get('/', (req, res) => {
    fs.readFile('./index.html', 'utf8', (err, html) => {
        if (err) {
            res.status(500).send("Sorry, an error has occured")
        } else {
         res.send(html)
        } 
    })
})

app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})
