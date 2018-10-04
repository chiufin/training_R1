var express = require('express');
var router = express.Router();

// send form
router.post('/login', function(req, res){
  if(req.body.account == '' || req.body.password== ''){
    return res.redirect('/login')
  }else{
    //set cookie
    res.cookie('account', req.body.account, { path: '/', signed: true})
    res.cookie('password', req.body.password, { path: '/', signed: true})
    return res.redirect('/users')
  }
})

//logout
router.get('/logout', function(req, res){
  res.clearCookie('account', {path:'/'});
  res.clearCookie('password', {path:'/'});
  return res.redirect('/login')
})

//create user
router.post('/users', function(req, res){
  console.log(req.body.email)
  console.log(req.body.password)
  res.json({ message: 'successfully' })
})

//get certain user
router.get('/users/(:id)', function(req, res){
  res.json({ email: 'staccc.chen@innovasolutions.com', password: '12345' });
})

//update certain user
router.put('/users/(:id)', function(req, res){
  console.log(req.body.email)
  console.log(req.body.password)
  res.json({ message: `Successfully updated ${req.params.id}` });
})

//delete user
router.delete('/users/(:id)', function(req, res){
  console.log(req.params.id)
  res.json({ message: `Successfully deleted ${req.params.id}` });
})


module.exports = router;
