//Async in basic folder
//1
function async(arg, callback) {
  console.log('do something with \''+arg+'\', return 1 sec later');
  setTimeout(function() { callback(arg * 2); }, 1000);
}
function final() { console.log('Done', results); }

var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];

items.forEach(function(item) {
  async(item, function(result){
    results.push(result);
    if(results.length == items.length) {
      final();
    }
  })
});


//2
//Custom event emitter
var events = require('events');

var eventEmitter = new events.EventEmitter();

function mainLoop(){

console.log('Logging into application');
eventEmitter.emit('loggingin');

console.log('Starting application console');
eventEmitter.emit('ApplicationStarted');

console.log('Stopping Application');
eventEmitter.emit('StopApplication');

}

function onLogging(){
console.log('This is the logging in event');
}

function onApplicationStart(){
console.log('This is application start');
}

function onStopping(){
console.log('This is stopping the application');
}

eventEmitter.on('loggingin', onLogging);
eventEmitter.on('StopApplication', onStopping);
eventEmitter.on('ApplicationStarted', onApplicationStart);
mainLoop();


//3
//iteration
var arg = ['N', 'S'];


arg.forEach(function(arg){

/*var test = arg.next();
console.log('1:' + test);*/
console.log(arg);
});


//4
//streaming video
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

//5
//prototype
var x = {a:10, b:20};

var y = {c:100, s:20};

y = x;


console.log('x.a:' + x.a);
console.log('y.a:' + y.a);



var z = y;

console.log('y.a:' + y.a);
console.log('z.a:' + z.a);


//6
//Shift operator
var fruits = ["Lemon","Apple","Orange","Peach"];

var str var server =var server = require('http').createServer();

var fs = require('fs');
server.on('request', function(req, res) {
res.writeHead(200, {'Content-Type': 'video/mp4'});
//fs.createReadStream('joker_batman.jpg').pipe(res);
fs.createReadStream('test.mp4').pipe(res);
//var stream = fs.createReadStream('../../../../../Videos/VideoSongs/Tum_hi_ho_Ashiqui.mp4');
});
server.listen(3000);
console.log('Server is listening to :3000');
 require('http').createServer();

var fs = require('fs');
server.on('request', function(req, res) {
res.writeHead(200, {'Content-Type': 'video/mp4'});
//fs.createReadStream('joker_batman.jpg').pipe(res);
fs.createReadStream('test.mp4').pipe(res);
//var stream = fs.createReadStream('../../../../../Videos/VideoSongs/Tum_hi_ho_Ashiqui.mp4');
});
server.listen(3000);
console.log('Server is listening to :3000');
var server = require('http').createServer();

var fs = require('fs');
server.on('request', function(req, res) {
res.writeHead(200, {'Content-Type': 'video/mp4'});
//fs.createReadStream('joker_batman.jpg').pipe(res);
fs.createReadStream('test.mp4').pipe(res);
//var stream = fs.createReadStream('../../../../../Videos/VideoSongs/Tum_hi_ho_Ashiqui.mp4');
});
server.listen(3000);
console.log('Server is listening to :3000');
= fruits.join('=');

console.log(str);

//7
//unshift
var fruits = ["Apple", "Orange"]

var apple = fruits.shift() // now we have only ["Orange"] left

console.log('Apple:' + apple);
console.log('fruits' + fruits);
//fruits.unshift("Lemon") // now got ["Lemon", "Orange"]
fruits.unshift('Lemon');
//fruits.shift();
console.log('Unshift:' + fruits);


//8
//Streaming video
var server = require('http').createServer();

var fs = require('fs');
server.on('request', function(req, res) {
res.writeHead(200, {'Content-Type': 'video/mp4'});
//fs.createReadStream('joker_batman.jpg').pipe(res);
fs.createReadStream('test.mp4').pipe(res);
//var stream = fs.createReadStream('../../../../../Videos/VideoSongs/Tum_hi_ho_Ashiqui.mp4');
});
server.listen(3000);
console.log('Server is listening to :3000');


