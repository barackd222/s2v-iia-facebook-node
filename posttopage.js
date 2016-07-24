var https = require('https'),
    config = require('./config').config;
    
function postToFacebook(str, cb) {
  var req = https.request({
    host: 'graph.facebook.com',
    path: '/me/feed',
    method: 'POST'
  }, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      console.log('got chunk '+chunk);
    });
    res.on('end', function() {
      console.log('response end with status '+res.status);
    });
  });
  req.end('message='+encodeURIComponent(str)
    +'&access_token='+encodeURIComponent(config.facebookToken));
  console.log('sent');
};

postToFacebook('Hi Barack, Adam says hello !');
