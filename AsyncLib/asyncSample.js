var async = require('async');

var arr = ['1','2'];
async.map(arr, getInfo, function (e, r) {
  console.log(r);
});

function getInfo(name, callback) {
  console.log('name:' + name);
  
  //We can also do it without using a setTimeOut.
	callback(null, name + 'new');
  /*setTimeout(function() {
    callback(null, name + 'new');
  }, 1000);*/
}
