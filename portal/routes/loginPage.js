var express = require('express');
var router = express.Router();
var connection = require('../db.js').connection;

router.get('/', function(req, res, next) {
  if(req.session.name){
    res.render('loginPage', { ifLogin: true });
  }else{
    res.render('loginPage', { ifLogin: false });
  }
});

module.exports = router;
