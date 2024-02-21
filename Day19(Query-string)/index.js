const qs = require("querystring");

const query = "name=Gideon&age=20";
const parsedQuery = qs.parse(query);

console.log(parsedQuery);

const data = {
  name: "Alice",
  age: 25,
  city: "Los Angeles",
};
const formattedQuery = qs.stringify(data);
console.log(formattedQuery);
