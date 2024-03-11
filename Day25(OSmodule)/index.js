const os = require("os");

// Get information about the computer's operating system:
console.log("Platform: ", os.platform());

// Get information about the computer's architecture:
console.log("Architecture: ", os.arch());

// Get information about the computer's total memory:
console.log("Total memory: ", os.totalmem());

// Get information about how much free memory is available:
console.log("Free memory: ", os.freemem());

// Get a list of all network interfaces:
console.log("Network interfaces: ", os.networkInterfaces());
