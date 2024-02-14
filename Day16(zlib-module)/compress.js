// compressing a file wit zlib module
const zlib = require("zlib");
const fs = require("fs");

const zip = zlib.createGzip()

const read = fs.createReadStream("newFile.txt");
const write = fs.createWriteStream("newFile.txt.gz");

read.pipe(zip).pipe(write);	
console.log("Zipped Successfully");


// Decompressing files with zlib

const unzip = zlib.createUnzip();

const readUnzip = fs.createReadStream("newFile.txt.gz");
const writeUnzip = fs.createWriteStream('unzip.txt');

//Transform stream which is unzipping the zipped file
readUnzip.pipe(unzip).pipe(writeUnzip);	
console.log("unZipped Successfully");

