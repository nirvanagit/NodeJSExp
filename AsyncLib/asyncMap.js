//Produces a new array of values by mapping each value in arr through the iterator function. 
var async = require('async');
var file1 = ['1','2']
var file2 = ['3','4'];
var fs = require('fs');

async.map([file1,file2], getInfo, function(err, results){
	/*results.forEach(function(results)
		{
			console.log(results);
		});*/
});

function getInfo(name, callback) {
  console.log('name:' + name);
  setTimeout(function() {
    callback(null, name + 'new');
  }, 1000);

}

