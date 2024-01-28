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
mongoose.connect("mongodb://localhost/testdb");

app.use(express.static(path.join(__dirname, 'public')));

app.post('/signup', async (req, res) => {
    try {
        const { fullName, email, phone, password } = req.body;

        const user = new User({ fullName, email, phone, password });

        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
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

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})





// (async function() {
//     try{
//         const currentDate = new Date();
//         const formattedDate = format(currentDate, "dd/MM/yyyy");

//         const info = await user.create({
//             name: "Gideon",
//             age: 22,
//             email: "bubaambore@gmail.com",
//             createdAt: formattedDate,
//             hobbies: ["Reading", "Coding", "Sports"],
//             address: {
//                 street: "Gudu",
//                 city: "Abuja"
//             }
//         })
        
//         await info.save()
//         console.log(info)
//     } catch(error) {
//         console.error(error.message)
//     } finally {
//         mongoose.disconnect()
//     } 
// }) ();