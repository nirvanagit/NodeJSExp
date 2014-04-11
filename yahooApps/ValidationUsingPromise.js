var FS = require('fs'),
    Q = require('q'),
    request = require('request');

function getResults(pathToFile) {   
    return Q.nfcall(FS.readFile, pathToFile, "utf-8")
    .then(function(data) {
	for(var i = 0; i < 3; i++){
	if(data.values[i].complies == ''){

	var options = data.values[i].url;	

	}
	}
        
        return Q.fcall(checkURL(options))
	       })
    
    .spread(function(validOrNot) {        
        return [validOrNot];  // return the response body
    })
    .fail(function(err) {
        console.error(err)
        return err;
    });
}

// actual call
getResults('testFile.json').then(function(responses) {
	console.log('Responses:', responses);  
  // do something with the responses
});

function checkURL(url){

    var flag = false;
    var request = http.get(url, function (response) {
    imagesize(response, function (err, result) {
    if(result){
      flag = false;
      if(result.width == 100 && result.height == 100)
      {
        console.log('This is a valid Logo', url);
        flag = true;
        
      } 
      console.log('out if:', flag);
    }   
    });
  
  });
	
}
