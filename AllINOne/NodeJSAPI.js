//NodeJSAPI

//Buffer
//1
var str = 'This is awesome';

buf = new Buffer(str.length, 'ascii');

for(var i = 0, len = str.length; i < len; i++){
buf[i] = str.charCodeAt(i);

}

console.log(buf.toString());
console.log(buf);

//2
buf = new Buffer(256);
len = buf.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + " bytes: " + buf.toString('utf8', 0, len));


//3
var buf = new Buffer('test');
var json = JSON.stringify(buf);

console.log(json);
// '[116,101,115,116]'

var copy = new Buffer(JSON.parse(json));

console.log(copy);
// <Buffer 74 65 73 74>


//Child Process
//4
setInterval(function() {
    process.stdout.write("hi");
}, 1000); // or however else you want to run a timer


//5
require('child_process').fork('./childfile.js');
// fork'd children use the parent's stdio


//6
var childProcess = require('child_process'),
     ls;

 ls = childProcess.exec('ls -l', function (error, stdout, stderr) {
   if (error) {
     console.log(error.stack);
     console.log('Error code: '+error.code);
     console.log('Signal received: '+error.signal);
   }
   console.log('Child Process STDOUT: '+stdout);
   console.log('Child Process STDERR: '+stderr);
 });

 ls.on('exit', function (code) {
   console.log('Child process exited with exit code '+code);
 });


//http
//7 readStream
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


//8
//writeStream
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


//9
//get images
var req = require('request');
var fs = require('fs');

var image = fs.createWriteStream(process.argv[3]);

req(process.argv[2]).pipe(image);


//10
//post data
var http = require('http');
var postHTML = 
  '<html><head><title>Post Example</title></head>' +
  '<body>' +
  '<form method="post">' +
  'Input 1: <input name="input1"><br>' +
  'Input 2: <input name="input2"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    console.log('POSTed: ' + body);
   
  });
   res.writeHead(200);
   res.end(postHTML);
}).listen(8080);


//11
//Simple http
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
var request = require('request');

var fs = require('fs');

//HTTP get request
request('http://nodestreams.com/input/people.json').pipe(fs.createWriteStream('people.json'));


//12
//NET
/*var net = require('net');
var server = net.createServer(function(socket){
	
	//acknowledge new connection
	console.log('New client connection');
	
	//Checking for data input by the client:
	socket.on('data', function(data){
	console.log('Client say:', data.toString());
	socket.write('Hi Client\n');
	});
		
	});

server.listen(3000, function(){
	console.log('Connected to port 3000');
	});*/

//Simple and awesome version of TCP
require('net').createServer(function(socket){
	socket.write('Wassup dude!');
	socket.on('data', function(data){
		console.log('User Says:', data.toString());
	})
}).listen(3000);


//STREAMS
//13
//get requeste piping
var request = require('request');

var fs = require('fs');

//HTTP get request
request('http://nodestreams.com/input/people.json').pipe(fs.createWriteStream('people.json'));


//14
//getVideo
var req = require('request');
var fs = require('fs');

var video = fs.createWriteStream(process.argv[3]);

req(process.argv[2]).pipe(video);


//15
//simple stream
var fs = require('fs');
console.log(process.argv[2], '->', process.argv[3]);

var readStream = fs.createReadStream(process.argv[2]);
var writeStream = fs.createWriteStream(process.argv[3]);
var counter = 0;
readStream.on('data', function(chunk){
	writeStream.write(chunk);
	counter++;
	console.log('Completion:', counter);
	});

readStream.on('end', function(){
	writeStream.end();
	});

readStream.on('error', function(err){
	console.log('Error:', err);
	});

writeStream.on('error', function(err){
	console.log('Error in write file:', err);
	});




//16
//streamProcessInputtoFile
var fs = require('fs');

process.stdin.resume();
process.stdin.pipe(fs.createWriteStream('writeUsingProcessStdin.txt'));


//17
//unGzipping
var fs = require('fs');

var zlib = require('zlib');

//Read File

fs.createReadStream('./example.json.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('./outputUnZippedExample.json'));


//18
//Using pipe for FS
var fs = require('fs');

var readStream = fs.createReadStream(process.argv[2]);
var writeStream = fs.createWriteStream(process.argv[3]);

readStream.pipe(writeStream);



//19
