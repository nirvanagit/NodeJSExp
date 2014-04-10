// helper for augmentation
Object.extend = function (destination, source) {
  for (property in source) if (source.hasOwnProperty(property)) {
	console.log('property:' + property);
	console.log(source[property]);
    destination[property] = source[property];
  }
  return destination;
};

var X = {a: 10, b: 20};
var Y = {c: 30, d: 40};

Object.extend(X, Y); // mix Y into X
console.log([X.a, X.b, X.c, X.d]); //10, 20, 30, 40

