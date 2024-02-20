//Name of the file: non-blocking-code.js
const fs = require("fs");

//For calculating execution time
const date1 = new Date();
const time_start = date1.getTime();
console.log("{Check point 1} starting at: " + time_start);
console.log("Let's start reading file");

//Reading file asynchronously
fs.readFile("output.txt", (err, data) => {
  if (err) throw err;

  console.log("Content :  " + data);
});

//For calculating execution time
const date2 = new Date();
const time_end = date2.getTime();
console.log("{Check point 2} finishing at:  " + time_end);
const execution_time = time_end - time_start;
console.log("Time for execution: " + execution_time);
//Consider it some another task in queue
console.log("Another task to be executed");
