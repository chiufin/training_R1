const mysql = require('mysql');

const detectOS = function(){
    if(process.platform === "win32"){
        return '192.168.99.100'
    }else{
        return 'localhost'
    }
}

const connection = mysql.createConnection({
    host     : detectOS(),
    user     : 'root',
    password : 'password',
    database : 'training_r1'
});
connection.connect();

// connection.end();
module.exports = {
    connection: connection
}
