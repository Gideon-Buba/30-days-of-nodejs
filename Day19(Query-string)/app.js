const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  const name = parsedUrl.query.name;
  const age = parsedUrl.query.age;

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello ${name}! You are ${age} years old.`);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// var value_json = qs.parse(
//   "id=1&name=rj&name=njsera&tutorial=30daysofnode&creator=nodejsera"
// );
// console.log(value_json);

// var value_json_2 = qs.parse(
//   "id%2&name%reij&name%njsera2&tutorial%30daysofnode&creator%nodejsera",
//   "&",
//   "%"
// );
// console.log(
//   "Changing the default 'eq' from '=' to '%'. An example is shown below:"
// );
// console.log(value_json_2);

// var value_json_3 = qs.parse(
//   "id%3#name%emily#name%njsera3#tutorial%30daysofnode#creator%nodejsera",
//   "#",
//   "%"
// );
// console.log(
//   "Changing the default Separator 'sep' from '&' to '#'. An example is shown below:"
// );
// console.log(value_json_3);
