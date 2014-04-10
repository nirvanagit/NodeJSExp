var gm = require('gm');

gm('/tiger.jpg').size(function(err, size){
	if(!err){
	console.log('Width=' + size.width);
	console.log('Heigth=' + size.height);
	}
	console.log('Check', err);
	});
