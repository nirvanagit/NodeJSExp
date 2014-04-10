var HashMap = require('hashmap').HashMap;
var async = require('async');
var http = require('http');
var imagesize = require('imagesize');
var map = new HashMap()


map.set('http://www.mnn.com/sites/default/files/styles/node-gallery-thumbnail/public/sri-lanka-elephants.jpg',null);
map.set('http://www.mnn.com/sites/default/files/styles/node-gallery-thumbnail/public/guyana-kaieteur-falls.jpg',null);

map.forEach(function(value, key){
	if(value == null){
		console.log('Before:',map.get(key));
		map.set(key, 1);
		console.log('Key:', key);
		console.log('After:',map.get(key));
	}


});