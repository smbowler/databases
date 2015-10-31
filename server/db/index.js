var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

/*Create the db Connection*/

var dbConnection = mysql.createConnection({
	user: "root",
  password: "",
  database: "chat"
});

/*Connect database */
dbConnection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established Punkass');
});


/*Test query to see if database was connected to server */
dbConnection.query('SELECT * from Messages', function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});


/*Sample data to send to Database */
// var test = { id: 16, userID: 12, roomID: 10, message: 'Hey this is a fifth est' }; 
// /*Insert test message into Message table on DB */
// dbConnection.query('INSERT INTO Messages SET ?', test, function(err,res){
//   if(err) throw err;

//   console.log('Last insert ID:', res.insertId);
// });


/*End the connection */
dbConnection.end(function(err) {
});

/*Export database connection */
module.exports = dbConnection;


/*Questions 
1. Which file is using our exected dbConnection?
*/

