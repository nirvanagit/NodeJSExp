// Require the stuff we need
var express = require("express");
var http = require("http");

// Build the app
var app = express();

// Add some middleware
app.use(function(request, response) {
  //Dont' require the below sentence.
  //response.writeHead(200/*, { "Content-Type": "text/plain" }*/);
  response.end("Hello world!\n");
});

// Start it up!
http.createServer(app).listen(1337);
