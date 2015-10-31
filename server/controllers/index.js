var models = require('../models');
var bluebird = require('bluebird');

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept,",
  "access-control-max-age": 10 // Seconds.
};

var data = {results: [{username: 'Hercules',text: 'Server is connecting to client successfully'}]};

module.exports = {
  messages: {
    get: function (req, res) {
    	var statusCode = 200;
    	var headers = defaultCorsHeaders;
    	headers['Content-Type'] = "text/plain";
    	res.writeHead(statusCode, headers);
    	//RES.END should point to the model GET request.
    	console.log(models.messages.get);
    	res.end(JSON.stringify(data));
    	console.log('Test');
    }, // a function which handles a get request for all messages
    post: function (req, res) {

    	console.log('Post Message');
    }

    //options:  // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

