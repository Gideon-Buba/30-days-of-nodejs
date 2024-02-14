const zlib = require("zlib");
const fs = require("fs");

const unzip = zlib.createUnzip();

const read = fs.createReadStream("newFile.txt.gz");
const write = fs.createWriteStream('unzip.txt');

// Handle errors
read.on('error', (err) => {
  console.error('Error reading zipped file:', err);
});

write.on('error', (err) => {
  console.error('Error writing unzipped file:', err);
});

unzip.on('error', (err) => {
  console.error('Error during decompression:', err);
});

// Transform stream which is unzipping the zipped file
read.pipe(unzip).pipe(write);  

console.log("unZipped Successfully");
