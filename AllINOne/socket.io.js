//socket.io
//webchat
//1
//js file
var httpd = require('http').createServer(handler);
var io = require('socket.io').listen(httpd);
var fs = require('fs');

httpd.listen(4000);

function handler(req, res) {
	fs.readFile(__dirname + '/index.html',
		function(err, data) {
			if(err) {
				res.writeHead(500);
				return res.end('Error loading the page index.html');
				}
			res.writeHead(200);
			res.end(data);
		}
		);
}



io.sockets.on('connection', function(socket) {
	setInterval(function(){
		var seconds = new Date();
		socket.emit('time', seconds.getSeconds());
			      }, 1000);
	socket.on('my event', function(content) {
		console.log(content);
	});
});

//html file
<html>
	<head>
		<title>Socket.IO example application</title>
		<script src = 'http://localhost:4000/socket.io/socket.io.js'></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js"></script>
		<script>
		 var socket = io.connect('http://localhost:4000');
		 socket.emit('my event', 'Hello World.');

/*		socket.on('time', function(content) {
                console.log('Lets see');
		        });*/

		</script>
	</head>
	
	<body>
	<script>
		socket.on('time', function(data) {
				document.getElementById("date").innerHTML = data;

				//$('#date').text(data);
				//document.write(data);
                                                 }
                                );
	//document.write('Anubhav');

	</script>
	<b>Realtime Time from server:</b>
	<div id="date"></div>
	</body>

</html>


//piping tcp
//2
var net = require('net');
net.createServer(function (socket) {
console.log('socket connected!');
socket.on('data', function (data) {
console.log('"data" event', data);
});
socket.on('end', function () {
console.log('"end" event');
});
socket.on('close', function () {
console.log('"close" event');
});
socket.on('error', function (e) {
console.log('"error" event', e);
});
socket.pipe(socket);
}).listen(1337);


//giving session id:
//3
var express = require('express');
var app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);

app.configure(function(){
	app.use(express.cookieParser());
	app.use(express.session({secret: 'secret', key: 'express.sid'}));
	app.use(function(req, res) {
		res.end('<h2>Hello, your session id is ' + req.sessionID + '</h2>');
});
});


server.listen(3000);
io.sockets.on('connection', function (socket) {
	console.log('A socket is connected');
});


//4
//giving ssh version
var net = require('net');

var socket = net.connect({host: process.argv[2], port: 22});
socket.setEncoding('utf8');

socket.once('data', function(chunk) {
console.log('SSH server version: %j', chunk.trim());
socket.end();
});


//5
