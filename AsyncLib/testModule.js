var request = require('request');
request('https://www.facebook.com/feeds/notifications.php?id=836200719&viewer=836200719&key=AWjlkvXIS233Ji1c&format=rss20', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})
