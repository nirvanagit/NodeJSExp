//middlewares

//connect
//1
function replyText(text) {
	return function(req, res) {
		res.end(text);
	};
}

var connect = require('connect');
var app = connect.createServer(replyText('Hello world'));
app.listen(8080);


//express
//2
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

//connect
//3
var connect = require('connect');
var http = require('http');
var app = connect()
	/*.use(connect.logger('dev'))
	.use(connect.static('public'))*/
	.use(function(req, res){
	res.end('Hello world');
	})

	http.createServer(app).listen(3000);
