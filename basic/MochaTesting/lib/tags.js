exports = module.exports = {}

exports.parse = function(args, defaults){
var options = {};
if(typeof defaults === 'object' &&
	!(defaults instanceof Array)){
	options = defaults;
	console.log('Options:' + options.depth);
}
args.forEach(function(arg){

	//var arg = args[i];
	console.log(arg);
	//Check if long formed tag
	if(arg.substr(0,2) === '--') {
		arg = arg.substr(2);
		console.log(arg);
		//CHeck for equals sign
		if(arg.indexOf('=')!==-1){
			arg = arg.split('=');
			console.log(arg);
			var key = arg.shift();
			console.log('key:' + key);
			console.log('value of args:' + arg);
			value = arg.join('=');
			console.log('value of args after:' + arg);
			console.log(value);
					if (/^[0-9]+$/.test(value)) {
				        value = parseInt(value, 10);
				    }
		options[key] = value;
		}
	}

});

return options;
	
}



