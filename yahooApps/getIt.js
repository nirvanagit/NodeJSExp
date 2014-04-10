var request = require('request');
var fs = require('fs');

request('http://www.wired.com/wp-content/uploads/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg').pipe(fs.createWriteStream('Image.jpg'));
