const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = 3000;

// serving static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "admin.html"));
});

// io.on("connection", (socket) => {
//   console.log("A user connected");

//   socket.on("admin", (data) => {
//     // Broadcast the received color to all connected clients
//     io.emit("color", { color: data.color });
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected");
//   });
// });

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
