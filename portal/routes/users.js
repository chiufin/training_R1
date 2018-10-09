var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res, next) {
  if(req.signedCookies.account && req.signedCookies.password){
    
    var userList = []
    var connection = mysql.createConnection({
      host     : '192.168.99.100',
      user     : 'root',
      password : 'password',
      database : 'training_r1'
    });
    connection.connect();
    connection.query('SELECT * FROM user', function(err, rows, fields) {
      if (err) throw err;
      for(var i = 0 ; i< rows.length ; i++){
        console.log(rows[i])
        userList.push(rows[i])
      }
      res.render('users', {userName:'stacy' ,users: userList});  
    });
    connection.end();
  }else{
    res.redirect('/login')
  }
  

});

router.get('/post', function(req, res, next) {
  
});

module.exports = router;