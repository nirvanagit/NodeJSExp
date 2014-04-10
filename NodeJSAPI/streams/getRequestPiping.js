var request = require('request');

var fs = require('fs');

//HTTP get request
request('http://nodestreams.com/input/people.json').pipe(fs.createWriteStream('people.json'));
