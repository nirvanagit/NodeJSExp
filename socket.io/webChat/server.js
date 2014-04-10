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
