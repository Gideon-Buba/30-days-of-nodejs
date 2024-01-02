const express = require("express");
const app = express()

app.get("/", (req, res) => {
    res.sendFile('./public/index.html', { root:__dirname });

})

app.get("/about", (req, res) => {
    res.sendFile('./public/about.html', {root:__dirname});
    
})

// app.get("/contact", (req, res) => {
//     res.send("Contact Page")
// })

// app.get("/help", (req, res) => {
//     res.send("Help Page")
// })

// app.get("/signin", (req, res) => {
//     res.send("Signin Page")
// })

// app.get("/signin/dashbaord", (req, res) => {
//     res.send("User has signed in and is now in the dashbaord...")
// })
app.listen(3000, () => {
    console.log("Listening on port 3000")
})
