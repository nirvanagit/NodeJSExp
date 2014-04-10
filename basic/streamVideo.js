var server = require('http').createServer();

var fs = require('fs');
server.on('request', function(req, res) {
res.writeHead(200, {'Content-Type': 'video/mp4'});
//fs.createReadStream('joker_batman.jpg').pipe(res);
fs.createReadStream('test.mp4').pipe(res);
//var stream = fs.createReadStream('../../../../../Videos/VideoSongs/Tum_hi_ho_Ashiqui.mp4');
});
server.listen(3000);
console.log('Server is listening to :3000');
