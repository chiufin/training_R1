var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log(req.signedCookies.account)
  console.log(req.signedCookies.password)
  // if(req.signedCookies.account && req.signedCookies.password){
  //   res.redirect('/login')
  // }else{
    res.render('users', {users: []});
  // }
});

module.exports = router;
