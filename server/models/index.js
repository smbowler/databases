var db = require('../db');


/*This model talks to directly to the database, likely in SQL*/
module.exports = {
  messages: {
    get: function () {
    	dbConnection.query('SELECT * from Messages', function(err,rows){
  			if(err) throw err;

  			console.log('Data received from Db:\n');
  			console.log(rows);
			})
    }, // a function which produces all the messages
    post: function () {
		},// a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

