// created my first server

const http = require('http');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('Hello world!!!') // serving a string 
    console.log(`Request received from ${host}:${port}`);
    response.end('');
});

server.listen(port, host, (err) => {
    if (err) {
        return console.log('Error occured:', err);
    }
    console.log(`Listening for requests on http://${host}:${port}`);
});
