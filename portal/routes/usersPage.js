var express = require('express');
var router = express.Router();
var connection = require('../db.js').connection;

router.get('/', function(req, res, next) {
  if(req.session.name){
    connection.query('SELECT * FROM user', function(err, result, fields) {
      if (err) throw err;
      res.render('usersPage', {userName: req.session.name ,users: result});  
    });
  }else{
    return res.redirect('/login')
  }
  

});

router.get('/post', function(req, res, next) {
  
});

module.exports = router;