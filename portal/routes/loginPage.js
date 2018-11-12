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

router.post('/', function(req, res, next){
  axios.post('http://localhost:3000/api/login', req.body)
  .then(function (response) {
    req.session.name = response.data.sessionName
    res.json({login: true})
  })
  .catch(function (error) {
    console.warn(error);
    res.json({login: false})
  });
})

module.exports = router;
