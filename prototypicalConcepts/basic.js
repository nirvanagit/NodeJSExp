function Person(name){
	this.name = name;
	this.lastName = name;
	return this.lastName;
		     }
Person.prototype = {
	greet: function(){
		console.log('Hello world, my name ' + this.name);

			}
		   }

var obj1 = new Person('Wells Fargo');
obj1.greet();
console.log(Person.lastName);


