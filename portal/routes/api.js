var express = require('express');
var router = express.Router();
var connection = require('../db.js').connection;

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
  try{
    var insertQuery = `INSERT INTO user ( name, email, psw) VALUES ( ${JSON.stringify(req.body.name)}, ${JSON.stringify(req.body.email)}, ${JSON.stringify(req.body.password)} )`

    connection.query( insertQuery, function(err, results, fields) {
      if (err) throw err;
      return res.redirect('/users')
    });
  }catch(err){
    console.log(err)
  }
})

//get certain user
router.get('/users/(:id)', function(req, res){
  try{
    connection.query(`SELECT * FROM user WHERE id=${JSON.stringify(req.params.id)}`, function(err, result, fields) {
      if (err) throw err;
      res.json(result[0]);
    });
    
  }catch(err){
    console.log(err)
  }
})

//update certain user
router.put('/users/(:id)', function(req, res){
  var data = {
    name: JSON.stringify(req.body.name),
    email: JSON.stringify(req.body.email),
    psw: JSON.stringify(req.body.psw),
    id: JSON.stringify(req.params.id)
  }
  try{
    connection.query(`UPDATE user SET name=${data.name},email=${data.email},psw=${data.psw} WHERE id=${data.id}`, function(err, results, fields) {
      if (err) throw err;
    });
  }catch(err){
    console.log(err)
  }
  res.json({ message: `Successfully updated ${req.params.id}` });
})

//delete user
router.delete('/users/(:id)', function(req, res){
  try{
    connection.query(`DELETE FROM user WHERE id=${req.params.id}`, function(err, results, fields) {
      if (err) throw err;
    });
  }catch(err){
    console.log(err)
  }
  res.json({ message: `Successfully deleted ${req.params.id}` });
})


module.exports = router;
