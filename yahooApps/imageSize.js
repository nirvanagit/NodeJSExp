var http = require('http');
var imagesize = require('imagesize');
var HashMap = require('hashmap').HashMap;
var map = new HashMap();

map.set('http://www.mnn.com/sites/default/files/styles/node-gallery-thumbnail/public/sri-lanka-elephants.jpg',null);


map.forEach(function(value, key){

var url = 'http://nodejs.org/images/logo-light.png';
var request = http.get(key, function (response) {
  imagesize(response, function (err, result) {
   console.log(result);
   console.log(result.width);
	if(result.width == 246) {
		console.log('work is done');
	}

    // we don't need more data
    request.abort();
  });
});
});
