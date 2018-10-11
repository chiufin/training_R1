var express = require('express');
var router = express.Router();
var usersModal = require('../model/usersModel')

router.get('/', function(req, res, next) {
  // if(req.signedCookies.account && req.signedCookies.password){
    // var cookies = {
    //     account: req.signedCookies.account,
    //     psw: req.signedCookies.password
    // }
  
    // console.log(usersModal.checkLogin(cookies))
  // }else{
    res.render('login', { ifLogin: false });
  // }
});

module.exports = router;
