/*require('http').createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'video/mp4'});
	var fs = require('fs');
	var readStream = fs.createReadStream('Eminem_Survival.mp4');
	res.writeHead(200, {'Content-Type': 'video/mp4'});
	readStream.pipe(res);
}).listen(3000);*/

//This example does not use pipe
require('http').createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'video/mp4'});
	var fs = require('fs');
	var readStream = fs.createReadStream('Eminem_Survival.mp4');
	res.writeHead(200, {'Content-Type': 'video/mp4'});

	readStream.on('data', function(chunk){
		res.write(chunk);
	});

}).listen(3000);