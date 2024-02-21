// setImmediate(callback, args*)
function hello() {
  console.log("Hello world, this will run immediately");
}

console.log("This will run first");

setImmediate(hello);
