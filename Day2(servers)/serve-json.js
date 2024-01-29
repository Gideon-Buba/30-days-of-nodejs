const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = 3000;

console.log(`Server will listen at: ${host}:${port}`);

http.createServer(function (req, res) {
    //change the MIME type to 'application/json' 
    res.writeHead(200, {'Content-Type': 'application/json'});
    //Create a JSON
	let json_response = {
		status : 200 , 
		message : 'succssful' , 
        name : 'Gideon',
        date : new Date(),
		result : [ 'sunday' , 'monday' , 'tuesday' , 'wednesday' ] , 
		code : 2000
	}
	console.log('Server Running');
	res.end( JSON.stringify(json_response) ); 
}).listen(3000);

