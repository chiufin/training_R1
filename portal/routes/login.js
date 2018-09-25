var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let ifLogin = false
  if(req.signedCookies.account && req.signedCookies.password){
    ifLogin = true
  }
  res.render('login', { ifLogin });
});

// send form
router.post('/post', function(req, res){
  if(req.body.account == '' || req.body.password== ''){
    return res.redirect('/login')
  }else{
    //set cookie
    res.cookie('account', req.body.account, { path: '/', signed: true, maxAge:60000})
    res.cookie('password', req.body.password, { path: '/', signed: true, maxAge:60000})
    return res.redirect('/users')
  }
})

//logout
router.get('/logout', function(req, res){
  res.clearCookie('account',{path:'/'});
  res.clearCookie('password',{path:'/'});
})



module.exports = router;
