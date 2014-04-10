var mongojs = require('mongojs');
var db = mongojs('marketRoute', ['UserDetails']);

console.log(db.UserDetails.update({name:'Test'}, {name: 'AnubhavAeron'}), function(err, docs){
console.log('readhed here');

});

module.exports = db;
