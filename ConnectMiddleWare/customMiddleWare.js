function replyText(text) {
	return function(req, res) {
		res.end(text);
	};
}

var connect = require('connect');
var app = connect.createServer(replyText('Hello world'));
app.listen(8080);
