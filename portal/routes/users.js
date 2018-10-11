var express = require('express');
var router = express.Router();
var connection = require('../db.js').connection;

router.get('/', function(req, res, next) {
  if(req.signedCookies.account && req.signedCookies.password){
    connection.query('SELECT * FROM user', function(err, result, fields) {
      if (err) throw err;
      res.render('users', {userName:'stacy' ,users: result});  
    });
  }else{
    return res.redirect('/login')
  }
  

});

router.get('/post', function(req, res, next) {
  
});

module.exports = router;