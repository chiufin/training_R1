var express = require('express');
var router = express.Router();
var mysql = require('mysql');

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

//get user 
// router.get('/users', function(req, res){
//   var userList = []
//     var connection = mysql.createConnection({
//       host     : '192.168.99.100',
//       user     : 'root',
//       password : 'password',
//       database : 'training_r1'
//     });
//     connection.connect();
//     connection.query('SELECT * FROM user', function(err, users, fields) {
//       if (err) throw err;

//       res.json(users)
//     });
//     connection.end();
// })



//create user
router.post('/users', function(req, res){
  console.log(req.body.name)
  console.log(req.body.email)
  console.log(req.body.password)
  try{
    var connection = mysql.createConnection({
      host     : '192.168.99.100',
      user     : 'root',
      password : 'password',
      database : 'training_r1'
    });
    connection.connect();
    // var insertQuery = `INSERT INTO user ( name, email, psw) VALUES ( 'staccccy',  'staccccy.chen@innova.comm',  'staccccy' )`
    var insertQuery = `INSERT INTO user ( name, email, psw) VALUES ( ${JSON.stringify(req.body.name)}, ${JSON.stringify(req.body.email)}, ${JSON.stringify(req.body.password)} )`

    connection.query( insertQuery, function(err, results, fields) {
      if (err) throw err;
      console.log('create ' + results);
    });
  }catch(err){
    console.log(err)
  }

  res.json( req.body );
  //return res.redirect('/users')
})

//get certain user
router.get('/users/(:id)', function(req, res){
  res.json({ email: 'staccc.chen@innovasolutions.com', password: '12345' });
})

//update certain user
router.put('/users/(:id)', function(req, res){
  console.log(req.body.email)
  console.log(req.body.password)
 
  
})

//delete user
router.delete('/users/(:id)', function(req, res){
  console.log('delete'+ req.params.id)
  try{
    var connection = mysql.createConnection({
      host     : '192.168.99.100',
      user     : 'root',
      password : 'password',
      database : 'training_r1'
    });
    connection.connect();
    connection.query(`DELETE FROM user WHERE id=${req.params.id}`, function(err, results, fields) {
      if (err) throw err;
      console.log('deleted ' + results);
    });
  }catch(err){
    console.log(err)
  }
  res.json({ message: `Successfully deleted ${req.params.id}` });
})


module.exports = router;
