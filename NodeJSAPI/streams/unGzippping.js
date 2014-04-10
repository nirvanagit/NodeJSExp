var fs = require('fs');

var zlib = require('zlib');

//Read File

fs.createReadStream('./example.json.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('./outputUnZippedExample.json'));
