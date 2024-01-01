// const express = require("express");
// const app = express()

// app.get("/", (req, res) => {
//     res.send("Simple example of routes")
// })

// app.get("/about", (req, res) => {
//     res.send("About Page")
// })

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
// app.listen(3000, () => {
//     console.log("Listening on port 3000")
// })


var express = require('express');
var fs = require('fs')

var app = express()

app.get('/', function (req, res) {
  res.send('Simple Example of routes!');
}) 

app.get('/signup', function(req,res){
	// this is how we will receive params from front end 
	
	var name = req.query.name; 
  var email = req.query.email;
  var password = req.query.password;
  //For demo purpose
  console.log(name + '' + email + ' ' + password);

  /**
   * Store this in a database and perform further processing
   */
    res.send("In signup module")
});

app.listen(3000, function () {
  console.log('Server is listening at 3000')
})