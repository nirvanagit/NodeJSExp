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
