var buf = new Buffer('test');
var json = JSON.stringify(buf);

console.log(json);
// '[116,101,115,116]'

var copy = new Buffer(JSON.parse(json));

console.log(copy);
// <Buffer 74 65 73 74>
