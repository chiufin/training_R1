var express = require('express');
var router = express.Router();
var connection = require('../db.js').connection;

router.get('/', function(req, res, next) {
  if(req.signedCookies.account && req.signedCookies.password){
    
    var userList = []
    connection.query('SELECT * FROM user', function(err, rows, fields) {
      if (err) throw err;
      for(var i = 0 ; i< rows.length ; i++){
        console.log(rows[i])
        userList.push(rows[i])
      }
      res.render('users', {userName:'stacy' ,users: userList});  
    });
  }else{
    res.redirect('/login')
  }
  

});

router.get('/post', function(req, res, next) {
  
});

module.exports = router;