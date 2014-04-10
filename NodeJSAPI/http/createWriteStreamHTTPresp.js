var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	console.log('An HTTP client has connected');

	var writeStream = fs.createWriteStream('outputHTTPreq.txt');

	//This pipes the POST data to the file
	console.log(req.url);
	req.url.pipe(writeStream);

	//resp with a form to post more data
	req.on('end', function(){

	res.writeHead(200, {'content-type' : 'text/html'});
	res.end('<form method = "POST"><input name = "test" /><input type = "submit"></form>');
	});

	}).listen(3000);


