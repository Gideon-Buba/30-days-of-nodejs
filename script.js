const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const User = require('./models/user');
const { format } = require("date-fns");
const path = require("path");

const app = express();
const port = 3000
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

async function connectToDB() {
    try {
        await mongoose.connect("mongodb://localhost/testdb");
        console.log("connected to database")
    } catch (err) {
        console.log("Error connecting to DB")
    }
}

app.post('/signup', async (req, res) => {
    try {
        const user = await User.create({...req.body})
        res.redirect('/login.html')
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });

        if (user) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});


connectToDB().then(() => {
    app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})
})
