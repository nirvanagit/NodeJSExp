var connect = require('connect');
var http = require('http');
var app = connect()
	/*.use(connect.logger('dev'))
	.use(connect.static('public'))*/
	.use(function(req, res){
	res.end('Hello world');
	})

	http.createServer(app).listen(3000);
