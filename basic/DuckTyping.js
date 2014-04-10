var Duck = function(){
    this.quack = function(){console.log('Quaaaaaack!');};
    this.feathers = function(){console.log('The duck has white and gray feathers.');};
    this.name = function(){console.log('Duck Tales');};

     _test = 'Smack';

     this.getA = function(){
     return _test;     
		
	};

    return this;
};
 
var Person = function(){
    this.quack = function(){console.log('The person imitates a duck.');};
    this.feathers = function(){console.log('The person takes a feather from the ground and shows it.');};
    this.name = function(){console.log('John Smith');};

};
 
var in_the_forest = function(duck){
    duck.quack();
    duck.feathers();
    duck.name();
//    this._local = duck.getA();
//    console.log(_local);

};
 
var game = function(){
    var donald = new Duck();
    var john = new Person();
    in_the_forest(donald);
    in_the_forest(john);
};
 
game();
