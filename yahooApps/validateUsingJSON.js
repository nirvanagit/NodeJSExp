var spahql = require('spahql');
var fs = require('fs');
var async = require('async');

//var data = fs.createReadStream(file);
var file = __dirname + '/testFile.json';
fs.readFile(file, 'utf8', getFile);


function getFile(err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }

  this.data = JSON.parse(data);  
  //console.log(data);

  check1(this.data);
}

	

/*var obj = new validateUsingJSON();
//console.log(obj.closure());
*/
function check1(data){

	async.parallel([
		fn1(data),
		fn2(data)]);
}

function fn1(data){
var db = SpahQL.db(data);
console.log('inside fn1');
var validate = db.select("/values/*[/complies == '']/");

var dbID = SpahQL.db(validate);
var id = dbID.select("/url/*");
console.log('Inside validate:',id.value());

//console.log('DB value:',db.select("/values/*").value());

//var stringFromPerson = JSON.stringify(person);

validate.forEach(function(value){
	console.log('Individual:', value);
});
}

function fn2(data){
var db = SpahQL.db(data);
console.log('inside fn2');
var validate = db.select("/values/*[/complies == '']/");

//console.log('DB value:',db.select("/values/*").value());

//var stringFromPerson = JSON.stringify(person);

validate.forEach(function(value){
	console.log('Individual:', value);
});
}
