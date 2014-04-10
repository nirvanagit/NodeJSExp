var fs = require('fs');

process.stdin.resume();
process.stdin.pipe(fs.createWriteStream('writeUsingProcessStdin.txt'));
