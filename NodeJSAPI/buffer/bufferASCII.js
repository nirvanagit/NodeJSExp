var str = 'This is awesome';

buf = new Buffer(str.length, 'ascii');

for(var i = 0, len = str.length; i < len; i++){
buf[i] = str.charCodeAt(i);

}

console.log(buf.toString());
console.log(buf);
