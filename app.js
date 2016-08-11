var express = require('express');
var app = express();
var config = require('./config').config;
var http = require('http');
var https = require('https');


require('./router')(app, config, http, https);

var port = 8081;

app.listen(port, function () {

	console.log("Example app listening on port " +  port);
});

module.exports = app;