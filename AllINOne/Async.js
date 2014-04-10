//Async files
//Detect
//1
var async = require('async'),
request = require('request');
var collection = [1, 2, 3, 4, 5];
function done(result) {
console.log('The first element on %j whose square value '+
'is greater than 10: %j', collection, result);
}

function test(value){
	return value > 10;
	}

function detect(item, callback) {
var square = item*item;
//console.log(item*item);
callback(test(square));
//return item > 10;
}
async.detect(collection, detect, done);

//Filter
//2
var async = require('async'),
request = require('request');
var collection = [1, 2, 3, 4, 5];
function done(results) {
console.log('These are the elements of %j whose ' +
'square value is greater than 10: %j', collection, results);
}
function test(value) {
return value > 10;
}
function filter(item, callback) {
var square = item * item;
callback(test(square));
}

async.filter(collection, filter, done);

//Map
//3
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

//Reduce
//4
var async = require('async'),
request = require('request');
var collection = [1, 2, 3, 4];
function done(err, result) {
if (err) {
throw err;
}
console.log('The sum of the squares of %j is %d', collection, result);
}
function iterator(memo, item, callback) {
request.post({

uri: 'http://localhost:8080',
body: JSON.stringify(item)
},
function(err, res, body) {
callback(err, body && (memo + JSON.parse(body)));
});
}
async.reduce(collection, 0, iterator, done);

//5
/*
reduce(arr, memo, iterator, callback)

Aliases: inject, foldl

Reduces arr into a single value using an async iterator to return 
each successive step. memo is the initial state of the reduction.
*/
var async = require('async');

async.reduce([1,2,3], 0, function(memo, item, callback){
    // pointless async:
    process.nextTick(function(){
	console.log('Item:', item);
        callback(null, memo + item)
    });
}, function(err, result){
    console.log('Result:', result);
	    // result is now equal to the last value of memo, which is 6
});


//6
var async = require('async');

var arr = ['1','2'];
async.map(arr, getInfo, function (e, r) {
  console.log(r);
});

function getInfo(name, callback) {
  console.log('name:' + name);
  setTimeout(function() {
    callback(null, name + 'new');
  }, 1000);
}


//q object
//7
// create a queue object with concurrency 2
var async = require('async');
var q = async.queue(function (task, callback) {
    console.log('hello ' + task.name);
    callback();
}, 2);


// assign a callback
q.drain = function() {
    console.log('all items have been processed');
}

// add some items to the queue

q.push({name: 'foo'}, function (err) {
    console.log('finished processing foo');
});
q.push({name: 'bar'}, function (err) {
    console.log('finished processing bar');
});

// add some items to the queue (batch-wise)

q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function (err) {
    console.log('finished processing bar');
});

// add some items to the front of the queue

q.unshift({name: 'bar'}, function (err) {
    console.log('finished processing bar');
});


//Request
//8
var request = require('request');
request('https://www.facebook.com/feeds/notifications.php?id=836200719&viewer=836200719&key=AWjlkvXIS233Ji1c&format=rss20', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})

//parallel
//9
var async = require('async');
function fn1() {
	var data1 = 'This is the first function';
	console.log(data1);
	//next(null, data);
	}

function fn2(data) {
	var data2 = 'Now I have reached the second function';
	console.log(data2);
	//next(null, data);
	}

//Without using this lib it would be something like this:
/*var tasks = [ fn1,
	      fn2
            ];

function next(err, result){
	if(err) throw err;

	var currentTask = tasks.shift();
	
	if(currentTask) {
	currentTask(result);
			}
}
next();*/

async.parallel([
	fn1(),
	fn2()
	]);


//series
//10
var async = require('async');
function fn1() {
	var data1 = 'This is the first function';
	console.log(data1);
	//next(null, data);
	}

function fn2(data) {
	var data2 = 'Now I have reached the second function';
	console.log(data2);
	//next(null, data);
	}

//Without using this lib it would be something like this:
/*var tasks = [ fn1,
	      fn2
            ];

function next(err, result){
	if(err) throw err;

	var currentTask = tasks.shift();
	
	if(currentTask) {
	currentTask(result);
			}
}
next();*/

async.series([
	fn1(),
	fn2()
	]);


//waterfall
//11
var async = require('async');
async.waterfall([
    function(callback){
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback){
      // arg1 now equals 'one' and arg2 now equals 'two'
	console.log('first:', arg1 + ',' +  arg2);
        callback(null, 'three');
    },
    function(arg1, callback){
        // arg1 now equals 'three'
	console.log('second:', arg1);
        callback(null, 'done');
    }
], function (err, result) {
   console.log('third:', result);
   // result now equals 'done'    
});





















