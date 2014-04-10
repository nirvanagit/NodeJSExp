var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res){
res.end('Hi');
	});

server.listen(3000);
