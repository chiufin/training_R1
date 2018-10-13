var mysql = require('mysql');
var dbConfig = require('./config').db

var connection = mysql.createConnection(dbConfig);
connection.connect();

// connection.end();
module.exports = {
    connection: connection
}
