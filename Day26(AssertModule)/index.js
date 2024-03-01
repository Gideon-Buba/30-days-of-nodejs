const assert = require("assert");

function add(a, b, c) {
  return a + b + c;
}

const output = add(1, 2, 3);
console.log("Output : " + output); // Output: 6
assert(output === 6, "The sum of 1, 2, 3 should be 6");
console.log(`Test passed: ${output} === 6`);

// using .deepEqual
const output1 = add(1, 2, 3);
console.log("Output : " + output1); // Output: 6
assert.deepEqual(output1, 6, "The sum of 1, 2, 3 should be 6");
console.log(`Test passed: ${output1} === 6`);

try {
  const output2 = add(1, 2, 3);
  console.log("Output : " + output2); // Output: 6
  assert.notDeepEqual(output2, 6, "The sum of 1, 2, 3 should be 6");
  console.log(`Test passed: ${output2} === 6`);
} catch (error) {
  console.log(error);
}

class Calculator {
  add(a, b, c) {
    return a + b + c;
  }
}

const calculator = new Calculator();
