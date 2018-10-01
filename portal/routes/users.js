var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if(req.signedCookies.account && req.signedCookies.password){
    res.render('users', {userName:'stacy' ,users: ['ken', 'wilson', 'jacob', 'jake', 'stacy']});  
  }else{
    res.redirect('/login')
  }
});

router.get('/post', function(req, res, next) {
  
});

module.exports = router;