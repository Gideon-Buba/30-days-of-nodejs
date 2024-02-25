const { StringDecoder } = require("string_decoder");

// Create a new instance of StringDecoder
const decoder = new StringDecoder("utf8");

// Buffer containing partial UTF-8 encoded data
const buf1 = Buffer.from([0xe2, 0x82]);

// Buffer containing the remaining UTF-8 encoded data
const buf2 = Buffer.from([0xac]);

// Decode the partial buffer
console.log(decoder.write(buf1)); // Output:

// Decode the remaining buffer
console.log(decoder.end(buf2)); // Output: €
