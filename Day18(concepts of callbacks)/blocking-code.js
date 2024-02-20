const fs = require("fs");

const date1 = new Date();
const time_start = date1.getTime();

console.log("starting at: " + time_start);
console.log("Let's start reading file");

//Name of the file to be read
const filename = "output.txt";
//Reading file synchronously
const content = fs.readFileSync(filename);
console.log("Content : " + content);

//For calculating execution time
const date2 = new Date();
const time_end = date2.getTime();
console.log("finishing at: " + time_end);
const execution_time = time_end - time_start;
console.log("Time for execution: " + execution_time);

//Consider it some another task in queue
console.log("Another task to be executed");
