var express = require('express');
var app = express();
var config = require('./config').config;
var http = require('http');
var https = require('https');
var mymessage = 'tester';

app.post('/postToFacebook', function (req, res) {
  //
  // Usage : http://localhost:8081/postToFacebook?mymessage="my message post"
  // Usage : http://localhost:8081/postToFacebook?mymessage=my message post
  //
  var mymessage = req.query.mymessage;
  console.log('Input argument is ' + mymessage);
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
   //
   //
   //
   postToFacebook(mymessage);
})

app.get('/postToFacebook/:mymessage', function (req, res) {
  //
  // Usage : http://localhost:8081/postToFacebook/:mymessage='Yet Another Message'
  //
  var mymessage = req.params.mymessage;
  console.log('Input argument is - req.params.mymessage = ' + req.params.mymessage);
  // process.exit(1);
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

   postToFacebook(mymessage);
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

console.log("Example app listening at http://%s:%s", host, port)

})
