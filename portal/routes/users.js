var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log(req.signedCookies.account)
  console.log(req.signedCookies.password)
  if(req.signedCookies.account && req.signedCookies.password){
    res.render('users', {users: []});  
  }else{
    res.redirect('/login')
  }
});

module.exports = router;