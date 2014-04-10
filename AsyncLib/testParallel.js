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
