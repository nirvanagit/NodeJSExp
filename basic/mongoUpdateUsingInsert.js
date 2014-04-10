var db = require('./mongojsInsert.js');

db.UserDetails.update({name:'ThisHappened'}, {name: 'Test'}), function(err, docs){
console.log('readhed here');

};
