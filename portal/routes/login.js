var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Log in' });
});

// send form
router.post('/post', function(req, res){
  console.log('login post api?')
})

//logout
router.get('/logout', function(req, res){
  console.log('logout api?')
})



module.exports = router;
