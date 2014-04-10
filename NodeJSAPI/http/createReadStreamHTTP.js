var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
	var readStream = fs.createReadStream('readStreamHTTP.txt');
	var imageStream = fs.createReadStream('imageFile.jpg');
	readStream.on('open', function(){
		readStream.pipe(res);
	});
	//OR the below one
	/*imageStream.on('open', function(){
		imageStream.pipe(res);
	});*/

	}).listen(3000);
