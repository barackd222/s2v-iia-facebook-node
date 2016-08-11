module.exports = function(app, config, http, https) {  
  // here we list our individual sets of routes to use
  require('./routes/facebookAPIs')(app, config, http, https);
};