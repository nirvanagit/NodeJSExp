var http = require('http');
var imagesize = require('imagesize');
var HashMap = require('hashmap').HashMap;
var map = new HashMap();

map.set('http://www.mnn.com/sites/default/files/styles/node-gallery-thumbnail/public/sri-lanka-elephants.jpg',null);
map.set('http://www.mnn.com/sites/default/files/styles/node-gallery-thumbnail/public/guyana-kaieteur-falls.jpg',null);
map.set('http://siliconindia.info/travelcity/travel_images/AIKzvP5R.jpeg',null);
map.set('http://webecoist.com/wp-content/uploads/2010/12/film_exotic_thumb.jpg',null);
map.set('http://www.mnn.com/sites/default/files/styles/node-gallery-thumbnail/public/lahaina_maui_humpback.jpg',null);
map.set('http://a4.mzstatic.com/us/r30/Music/33/f3/3a/mzi.gxffwplw.100x100-75.jpg',null);
//map.set('http://th00.deviantart.net/fs70/150/f/2011/229/3/7/overlooking_the_ocean_by_exotic_creations-d46ytu1.png',null);
map.set('http://media-1.web.britannica.com/eb-media/92/117392-003-0AE6D4E3.jpg',null);

map.forEach(function(value, key){

var request = http.get(key, function (response) {
  imagesize(response, function (err, result) {
   console.log(result);
  /* console.log('Width:',result.width);
   console.log('Height:',result.height);*/
	if(result){
		if(result.width == 100) {
		console.log('work is done');
	}
	}
	

    // we don't need more data
    request.abort();
  });
});
});
