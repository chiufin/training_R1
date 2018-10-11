var express = require('express');
var router = express.Router();
var connection = require('../db.js').connection;

router.get('/', function(req, res, next) {
  if(req.signedCookies.account && req.signedCookies.password){
    try{
      connection.query(`SELECT * FROM user WHERE email=${JSON.stringify(req.signedCookies.account)}`, function(err, result, fields) {
        if (err) throw err; 
        if(result.length > 0 && result[0].psw == req.signedCookies.password){
          res.render('login', { ifLogin: true });
        }else{
          res.render('login', { ifLogin: false });
        }
      });
    }catch(err){
      res.render('login', { ifLogin: false });
    }
  }else{
    res.render('login', { ifLogin: false });
  }
});

module.exports = router;
