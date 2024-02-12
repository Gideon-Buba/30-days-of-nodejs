const fs = require('fs');
const http = require("http");

// Create a readable stream to read from a file
const myReadStream = fs.createReadStream("readme.txt", "utf-8");

// Create a writable stream to write to a file
const myWriteStream = fs.createWriteStream("writeme.txt", { encoding: "utf-8" });

// Pipe the readable stream to the writable stream to write to "writeme.txt"
myReadStream.pipe(myWriteStream);

// Create an HTTP server
const server = http.createServer((req, res) => {
    console.log('Request was made: ' + req.url);

    // Set the response headers
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Pipe the readable stream to the response stream to send the contents of "readme.txt"
    myReadStream.pipe(res);
});

// Listen to the server on port 3000
server.listen(8000, "127.0.0.1", () => {
    console.log('Server is running on http://localhost:8000');
});
