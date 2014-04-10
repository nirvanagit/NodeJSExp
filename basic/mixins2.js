// creating the mixin function class

var asCircle = function(){
	this.area = function(){
		return Math.PI * this.radius * this.radius;
	}
}

module.exports=asCircle;

var Circle = function(radius){
	this.radius = radius;
}

asCircle.call(Circle.prototype);
var getArea1 = new Circle(5);

console.log('The area of the cirle is:' + getArea1.area());
