const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/admin", (req, res) => {
  res.sendFile(__dirname + "/admin.html");
});

io.on("connection", (socket) => {
  socket.on("update", (msg) => {
    io.emit("update", msg);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
