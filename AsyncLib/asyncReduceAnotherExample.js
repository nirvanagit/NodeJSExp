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
	console.log('Item:', item + ',' + memo);
        callback(null, memo + item)
    });
}, function(err, result){
    console.log('Result:', result);
	    // result is now equal to the last value of memo, which is 6
});
