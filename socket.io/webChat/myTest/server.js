//Server for demonstrating socket.io with realtime updates of server time.

//Task 1: render a HTML file
//Task 2: implement socket.io

var http = require('http').createServer(handler).listen(3000);
var io = require('socket.io').listen(http);
var fs = require('fs');


function handler(req, res){

	fs.readFile(__dirname + '/index.html', function(err, data){
		if(err){
			res.writeHead(500);
			res.end('Error in file');
			}

		res.end(data);
		});
	}

io.sockets.on('connection', function(socket){

	setInterval(function(){
	var seconds = new Date();
	socket.emit('time', seconds.getSeconds());
	}, 1000);
	});
