const fs = require('fs');
const http = require("http");

// Create a readable stream to read from a file

// create Http server 
const server = http.createServer((req, res) => {
	console.log('Request was made: ' + req.url);	
    res.writeHead(200, {'Content-Type': 'text/plain'});
	
	const myReadStream = fs.createReadStream("readme.txt", "utf-8");
    myReadStream.pipe(res);

});

// Listen to the server on port 3000
server.listen(8000, "127.0.0.1", () => {
    console.log('Server is running on http://localhost:8000');
});
