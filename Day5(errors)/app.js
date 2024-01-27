// Properties of error in Node js

// 1. new Error 
// const err = new Error("This is an error message")

// 2. error.message
// const err = new Error("This is an error message")
// console.error(err.message)

// 3. error.code
const fs = require('fs');

fs.readFileSync('./message.txt', (error, data) => {
    if (error) {
        return console.error(error)
    }
    console.log("Content: ", + data)
})

// completed day 5