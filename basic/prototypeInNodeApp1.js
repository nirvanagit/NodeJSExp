var x = {a:10, b:20};

var y = {c:100, s:20};

y = x;


console.log('x.a:' + x.a);
console.log('y.a:' + y.a);



var z = y;

console.log('y.a:' + y.a);
console.log('z.a:' + z.a);
