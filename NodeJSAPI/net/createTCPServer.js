/*var net = require('net');
var server = net.createServer(function(socket){
	
	//acknowledge new connection
	console.log('New client connection');
	
	//Checking for data input by the client:
	socket.on('data', function(data){
	console.log('Client say:', data.toString());
	socket.write('Hi Client\n');
	});
		
	});

server.listen(3000, function(){
	console.log('Connected to port 3000');
	});*/

//Simple and awesome version of TCP
require('net').createServer(function(socket){
	socket.write('Wassup dude!');
	socket.on('data', function(data){
		console.log('User Says:', data.toString());
	})
}).listen(3000);
