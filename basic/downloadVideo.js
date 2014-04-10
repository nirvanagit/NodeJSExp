var server = require('http').createServer();

var fs = require('fs');
server.on('request', function(req, res) {
res.writeHead(200, {'Content-Type': 'audio/mpeg3;audio/x-mpeg-3;video/mpeg;video/x-mpeg;text/xml'});
//fs.createReadStream('joker_batman.jpg').pipe(res);
fs.createReadStream('https://www.youtube.com/watch?v=JyGO3LN5UJ4').pipe(res);
//var stream = fs.createReadStream('../../../../../Videos/VideoSongs/Tum_hi_ho_Ashiqui.mp4');
});
server.listen(3000);
console.log('Server is listening to :3000');
