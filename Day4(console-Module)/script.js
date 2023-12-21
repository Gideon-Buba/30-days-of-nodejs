/*
// using ' ' to print
console.log('1: Hello, world');

// using " " to print
console.log("2: Hello, world");


const string = 'Gideon';
// printing a string 
console.log(string);

// printing a variable and replacing the value of variable in place of %d using format specifier //
const val = 25
console.log('4: Value of val is : %d' , val);
*/

// const ws = require('fs');
// const { Console } = require('console');
// const { stdout, stderr } = require('process');

// const output = ws.createWriteStream('./stdout.log');
// const errOutput = ws.createWriteStream('./stderr.log');

// const print = new Console(output, errOutput);

// const roll = 1234567;
// print.log('roll: %d', roll);
// print.log('This will be stored in a file');

// console.count('Courage');
// console.count('Gideon');
// console.count('Courage');
// console.count('jude');
// console.count('Gideon');
// console.count('Gideon');
// console.count('Gideon');
// console.count('Gideon');
// console.count('Courage');
// console.count('Courage');
// console.count('Courage');
// console.count('Courage');
// console.count('Courage');
// console.countReset('Courage')
// console.log("---RESTARTED---")
// console.count('Courage');
// console.count('Courage');
// console.count('Courage');
// console.count('Courage');
// console.count('Courage');
// console.count('Courage');
// console.count('Courage');
// console.count('jude');
// console.count('jude');
// console.count('jude');
// console.count('jude');
// console.count('jude');
// console.count('Courage')

// Looking into console.error();

// const x = 10;
// const y = 20;

// let result = x/y;

// if (result === 2) {
//     console.log('result: %d', result);
// } else {
//     console.error("Error: Error in positioning operands")
// }

/* Checking out console.time() and console.timeEnd() */

// console.time('division')
// const x = 10;
// const y = 20;

// let result = x/y;

// if (result === 2) {
//     console.log('result: %d', result);
// } else {
//     console.log('result: ' + result)
// }

// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// console.timeEnd('division')

var x = 10;
var y = 20;
var result = x/y;

if( (result % 2) == 0){
    console.log("Result : %d".result)
}else{
    console.warn("Warning :  Decimal number");
}
