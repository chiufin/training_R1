var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '192.168.99.100',
    user     : 'root',
    password : 'password',
    database : 'training_r1'
});
connection.connect();

// connection.end();
module.exports = {
    connection: connection
}
