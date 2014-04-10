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

