var twilio = require('twilio');
var client = twilio('ACCOUNT_SID', 'AUTH_TOKEN');
 
client.sendMessage({
    to:'+16518675309',
    from:'+16515556789',
    body:'Jenny! Please give me another chance! <3'
}, function(err, message) {
    if (err) {
        console.error('Text failed because: '+err.message);
    } else {
        console.log('Text sent! Message SID: '+message.sid);
    }
});