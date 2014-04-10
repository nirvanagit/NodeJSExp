var Promise = require('bluebird')
var fs = require('fs')
var adb = require('adbkit')
var client = adb.createClient()

client.listDevices()
  .then(function(devices) {
    return Promise.map(devices, function(device) {
	console.log("device loaded is %s", device.id);
      return client.pull(device.id, '/sdcard/DCIM/Camera')
        .then(function(transfer) {
          return new Promise(function(resolve, reject) {
            var fn = '/pulledFiles';
            transfer.on('progress', function(stats) {
              console.log('[%s] Pulled %d bytes so far',
                device.id,
                stats.bytesTransferred)
            })
            transfer.on('end', function() {
              console.log('[%s] Pull complete', device.id)
              resolve(device.id)
            })
            transfer.on('error', reject)
            transfer.pipe(fs.createWriteStream(fn))
          })
        })
    })
  })
  .then(function() {
    console.log('Done pulling /system/build.prop from all connected devices')
  })
  .catch(function(err) {
    console.error('Something went wrong:', err.stack)
  })
