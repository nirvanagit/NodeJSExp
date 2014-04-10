var asCircle = require('./mixins2.js');
var asButton = function() {
  this.hover = function(bool) {
    bool ? mylib.appendClass('hover') : mylib.removeClass('hover');
  };
  this.press = function(bool) {
    bool ? mylib.appendClass('pressed') : mylib.removeClass('pressed');
  };
  this.fire = function() {
    return this.action();
  };
  return this;
}; 

var RoundButton = function(radius, label, action) {
    this.radius = radius;
    this.label = label;
    this.action = action;
};
 
asButton.call(RoundButton.prototype);
asCircle.call(RoundButton.prototype);
 
var button1 = new RoundButton(4, 'yes!', function() {return 'you said yes!'});
console.log(button1.fire()); //'you said yes!'

var asOval = function(options) {
  this.area = function() {
    console.log('longR:' + this.longRadius);
    console.log('shortR:' + this.shortRadius);
    return Math.PI * this.longRadius * this.shortRadius;
  };
  this.ratio = function() {
    return this.longRadius/this.shortRadius;
  };
  this.grow = function() {
    console.log('This ratio:' + this.ratio());
    this.shortRadius += (options.growBy/this.ratio());
    this.longRadius += options.growBy;
  };
  this.shrink = function() {
    this.shortRadius -= (options.shrinkBy/this.ratio());
    this.longRadius -= options.shrinkBy;
  };
  return this;
}
 
var OvalButton = function(longRadius, shortRadius, label, action) {
  this.longRadius = longRadius;
  this.shortRadius = shortRadius;
  this.label = label;
  this.action = action;
};
 
asButton.call(OvalButton.prototype);
asOval.call(OvalButton.prototype, {growBy: 2, shrinkBy: 2});
 
var button2 = new OvalButton(3, 2, 'send', function() {return 'message sent'});
console.log(button2.area()); //18.84955592153876
console.log(button2.grow());
console.log(button2.area()); //52.35987755982988
console.log(button2.fire()); //'message sent'