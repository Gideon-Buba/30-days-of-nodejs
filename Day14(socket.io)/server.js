const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT || 3000; // Allow dynamic port binding for deployment

// Serving static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html")); // Adjusted path for index.html
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html")); // Adjusted path for admin.html
});

io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle admin events
  socket.on("admin", (data) => {
    io.emit("color", { color: data.color });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
