const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  var app = express();
  var io = socketIO(server);
  var server = http.createServer(app);
  server.listen(3000, () => {
    console.log("Server started on port 3000");
});
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
  });