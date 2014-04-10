var req = require('request');
var fs = require('fs');

var image = fs.createWriteStream(process.argv[3]);

req(process.argv[2]).pipe(image);
