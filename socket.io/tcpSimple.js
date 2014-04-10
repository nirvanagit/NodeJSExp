require('net').createServer(function(socket){
socket.end('Hello World~\r\n');
}).listen(3000);
console.log('listening to port 3000');

