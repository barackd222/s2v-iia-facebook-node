

var routes = function (app, config, http, https) {

  app.post('/postToFacebook', function (req, res) {
		res.header("Access-Control-Allow-Origin", "*");

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
			}, function (res) {
				res.setEncoding('utf8');
				res.on('data', function (chunk) {
					console.log('got chunk ' + chunk);
				});
				res.on('end', function () {
					console.log('response end with status ' + res.status);
				});
			});
			req.end('message=' + encodeURIComponent(str)
				+ '&access_token=' + encodeURIComponent(config.facebookToken));
			console.log('sent');
		};
		//
		//
		//
		postToFacebook(mymessage);

    res.status(202).end();
  });

  app.get('/postToFacebook/:mymessage', function (req, res) {
		res.header("Access-Control-Allow-Origin", "*");

		//
		// Usage : http://localhost:8081/postToFacebook/:mymessage='Yet Another Message'
		//		e.g.
		//		http://localhost:8081/postToFacebook/:mymessage='Yet Another Message'
		var mymessage = req.params.mymessage;
		console.log('Input argument is - req.params.mymessage = ' + req.params.mymessage);
		// process.exit(1);
		function postToFacebook(str, cb) {
			var req = https.request({
				host: 'graph.facebook.com',
				path: '/me/feed',
				method: 'POST'
			}, function (res) {
				res.setEncoding('utf8');
				res.on('data', function (chunk) {
					console.log('got chunk ' + chunk);
				});
				res.on('end', function () {
					console.log('response end with status ' + res.status);
				});
			});
			req.end('message=' + encodeURIComponent(str)
				+ '&access_token=' + encodeURIComponent(config.facebookToken));
			console.log('sent');
		};

		postToFacebook(mymessage);

    res.status(202).end();
  });


};

module.exports = routes;  