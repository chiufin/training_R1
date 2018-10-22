const mysql = require('mysql');
require('dotenv').config()

const detectOS = function(){
    if(process.platform === "win32"){
        return process.env.DEV_DB_WINDOW7
    }else{
        return process.env.DEV_DB_MAC
    }
}

const detectENV = function(){
    switch(process.env.NODE_ENV){
        case 'dev':
            return detectOS()
        case 'stg':
            return process.env.STG_DB
        case 'prd':
            return process.env.PROD_DB
        default:
            return;
    }
}

const connection = mysql.createConnection({
    host     : detectENV(),
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : 'training_r1'
});
connection.connect();

// connection.end();
module.exports = {
    connection: connection
}
