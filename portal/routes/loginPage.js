var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  let ifLogin = false
  if(req.session.name){
    ifLogin = true
  }
  res.render('loginPage', { ifLogin });
});

router.post('/', function(req, res, next){

})

module.exports = router;
