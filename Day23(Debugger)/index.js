// index.js

function add(a, b) {
  const result = a + b;
  return result;
}

function subtract(a, b) {
  const result = a - b;
  return result;
}

function multiply(a, b) {
  const result = a * b;
  return result;
}

function divide(a, b) {
  const result = a / b;
  return result;
}

const x = 10;
const y = 5;

const sum = add(x, y);
console.log(`Sum: ${sum}`);

const difference = subtract(x, y);
console.log(`Difference: ${difference}`);

const product = multiply(x, y);
console.log(`Product: ${product}`);

const quotient = divide(x, y);
console.log(`Quotient: ${quotient}`);

/*
Summary

In this chapter of 30 days of node tutorial series, we learned about the basics of debuggers , how we can invoke node.js debugger , useful debugger commands and lastly command shortcuts.

*/
