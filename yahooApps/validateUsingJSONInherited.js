var validateUsingJSON = require('./validateUsingJSON');

var obj_inheritedObject = new validateUsingJSON();
	var data = obj_inheritedObject.closure();
console.log(data);

function check1(){

	
var db = SpahQL.db(data);

var validate = db.select("/values/*[/complies == '']/");

//console.log('DB value:',db.select("/values/*").value());

//var stringFromPerson = JSON.stringify(person);

validate.forEach(function(value){
	console.log('Individual:', value);
});


}

check1();