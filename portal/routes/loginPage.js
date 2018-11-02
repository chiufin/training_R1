const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', function(req, res) {
  let ifLogin = false
  if(req.session.name){
    ifLogin = true
  }
  res.render('loginPage', { ifLogin });
});

module.exports = router;
