var express = require('express');
var router = express.Router();
var connection = require('../db.js').connection;

router.get('/', function(req, res, next) {
  if(req.signedCookies.account && req.signedCookies.password){
    try{
      connection.query(`SELECT * FROM user WHERE email=${JSON.stringify(req.signedCookies.account)}`, function(err, result, fields) {
        if (err) throw err; 
        if(result[0].psw == req.signedCookies.password){
          res.render('login', { ifLogin: true });
        }
      });
    }catch(err){
      console.log(err)
    }
  }else{
    res.render('login', { ifLogin: false });
  }
});

module.exports = router;
