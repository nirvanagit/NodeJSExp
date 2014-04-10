/*var http = require('http');
var requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!\n');
}

var server = http.createServer(requestListener);
server.listen(8080);
*/

//Small and awesome version below:
require('http').createServer(function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!\n');
}).listen(3000);
