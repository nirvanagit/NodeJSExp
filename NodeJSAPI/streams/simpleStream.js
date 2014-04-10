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



