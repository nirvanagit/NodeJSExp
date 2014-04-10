var sizeOf = require('image-size');
sizeOf('Image.jpg', function(err, dimensions){
	console.log(dimensions.width, dimensions.height);
	});
