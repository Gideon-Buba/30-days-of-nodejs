// require fs module for file system
const fs = require('fs');
// write data to a file using writeable stream
const wdata = "Hello my name is Gideon";

const myWriteStream = fs.createWriteStream('gideon.txt');

// write data 

myWriteStream.write(wdata);

// done writing
myWriteStream.end();

// write handler for error event 
myWriteStream.on('error', function(err){
   console.log(err);
});

myWriteStream.on('finish', function() {
    console.log("data written successfully using streams.");
	console.log("Now trying to read the same file using read streams ");
	var myReadStream = fs.createReadStream('aboutMe.txt');
	// add handlers for our read stream
	var rContents = '' // to hold the read contents;
	myReadStream.on('data', function(chunk) {
		rContents += chunk;
	});
	myReadStream.on('error', function(err){
		console.log(err);
	});
	myReadStream.on('end',function(){
		console.log('read: ' + rContents);
	});
	console.log('performed write and read using streams');

});		