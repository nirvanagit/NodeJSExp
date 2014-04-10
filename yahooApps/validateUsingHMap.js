//module for emulating Hashmaps in Node.js
var HashMap = require('hashmap').HashMap;
//module for smooth function calls in series/parallel
var async = require('async');
var http = require('http');
//module for retrieving image dimensions when supplied a file or a URL as in this case.
var imagesize = require('imagesize');
var map = new HashMap();

map.set('http://www.mnn.com/sites/default/files/styles/node-gallery-thumbnail/public/sri-lanka-elephants.jpg',null);
map.set('http://www.mnn.com/sites/default/files/styles/node-gallery-thumbnail/public/guyana-kaieteur-falls.jpg',null);
map.set('http://siliconindia.info/travelcity/travel_images/AIKzvP5R.jpeg',null);
map.set('http://webecoist.com/wp-content/uploads/2010/12/film_exotic_thumb.jpg',null);
map.set('http://www.mnn.com/sites/default/files/styles/node-gallery-thumbnail/public/lahaina_maui_humpback.jpg',null);
map.set('http://a4.mzstatic.com/us/r30/Music/33/f3/3a/mzi.gxffwplw.100x100-75.jpg',null);
map.set('http://th00.deviantart.net/fs70/150/f/2011/229/3/7/overlooking_the_ocean_by_exotic_creations-d46ytu1.png',null);
map.set('http://media-1.web.britannica.com/eb-media/92/117392-003-0AE6D4E3.jpg',null);


//The check1 function is one of the parallel functions for checking the value of the HashMap. 
//If the value is null then it will send it for further processing

function check1(){

	map.forEach(function(value, key){
	
	if(value == null) {

   checkIfValid(value,key);
	}
	});
}

function check2(){

  map.forEach(function(value, key){
  
  if(value == null) {
  
  checkIfValid(value,key);

  }
  });
}

//Although they are called in parallel. But there is a mixum here. I have 8 key value pairs in my hashmap. But the hashmap
//is traversed ten times. (2 more than the actual). For this I need to use synchronous function so that any record does 
//not overlap.

async.parallel([
  check1(),
  check2()
]);

function checkIfValid(value, key){

    var request = http.get(key, function (response) {
    imagesize(response, function (err, result) {
    
    if(result){
      if(result.width == 100 && result.height == 100)
      {
        console.log('This is a valid Logo', key);
        map.set(key, 1);
      } 
      else{
        console.log('This is not a valid Logo', key);
      }
    }   
    });
  
  });

}



