var async = require('async');
var fs = require('fs');
var myfile = __dirname + '/testFile.json';
var imagesize = require('imagesize');
var http = require('http');
var Q = require('q');
fs.readFile(myfile, 'utf-8', function(err, data){

	data = JSON.parse(data);
    fn1(data);
    /*console.log(data);*/
    /*async.parallel([
        fn1(data),
        fn2(data)
        ]);*/

});

function fn1(data){
    console.log(data);
    for(var i = 0; i < 3; i++){
    if(data.values[i].complies == ''){
        console.log('test');
        return Q.all([
            checkIfValid(data.values[i].url)            
        ]);
      
        //console.log('Out Prmoise:',getInputPromise);
   // console.log('For:',data.values[i].url + ', we get:' + checkIfValid(data.values[i].url));
}
}
   /* console.log('After');
    console.log(data)*/
}

function fn2(data){
    /*console.log('Inside fn2', data);
    for(var i = 0; i < 3; i++){
    if(data.values[i].complies == ''){

    checkIfValid(data.values[i].url);
    console.log('does it come here?')
    console.log(data.values[i].url);
    data.values[i].complies = true;
}
}
    console.log('After');
    console.log(data);*/
}


function checkIfValid(url){

    console.log('Inside check method:', url);
    
    var flag = null;
    var request = http.get(url, function (response) {
    imagesize(response, function (err, result) {
    if(result){
      var flag = false;
      if(result.width == 100 && result.height == 100)
      {
        console.log('This is a valid Logo', url);
        flag = true;
        
      } 
      console.log('out if:', flag);
    }   
    });
  
  });

    return flag;


}
