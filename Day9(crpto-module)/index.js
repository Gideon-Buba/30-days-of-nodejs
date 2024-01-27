const crypto = require("crypto");
const hash = crypto.createHash("md5");

const data = hash.update("Gideon", "utf-8");

const gen_hash = data.digest('hex');

console.log("hash: " + gen_hash)


// completed day 9