var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'training_r1'
});
connection.connect();

// connection.end();
module.exports = {
    connection: connection
}
