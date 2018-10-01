var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let ifLogin = false
  if(req.signedCookies.account && req.signedCookies.password){
    ifLogin = true
  }
  res.render('login', { ifLogin });
});

module.exports = router;
