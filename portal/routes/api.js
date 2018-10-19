const express = require('express');
const router = express.Router();
const connection = require('../db.js').connection;
const { check, validationResult } = require('express-validator/check');
const md5 = require("blueimp-md5");
const path = require('path');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const fs = require('fs');

//click signIn button
router.post('/login', [
  check('account').isEmail(),
  check('psw').isLength({ min: 5 })
],function(req, res){
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  
  if(req.body.account && req.body.psw){
    try{
      connection.query(`SELECT * FROM user WHERE email=${JSON.stringify(req.body.account)}`, function(err, result, fields) {
        if (err) throw err; 
        console.log(result)
        console.log(result.length > 0)
        console.log(result[0].psw)
        console.log(md5(req.body.psw))
        if(result.length > 0 && result[0].psw == md5(req.body.psw)){
            //set cookie
            // res.cookie('email', req.body.account, { path: '/', signed: true})
            // res.cookie('password', req.body.psw, { path: '/', signed: true})

            req.session.name = result[0].name
            res.json({login: true})
        }else{
            res.json({login: false})
        }
      });
    }catch(err){
      res.json({login: false})
    }
  }else{
    res.json({login: false})
  }
})

//logout
router.get('/logout', function(req, res){
  req.session.destroy();  
  res.json({'logout': true})
})

//create user
router.post('/users', [
  check('email').isEmail(),
  check('password').isLength({ min: 5 })
  ],function(req, res){

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    try{
      var insertQuery = `INSERT INTO user ( name, email, psw) VALUES ( ${JSON.stringify(req.body.name)}, ${JSON.stringify(req.body.email)}, ${JSON.stringify(md5(req.body.password))} )`
      connection.query( insertQuery, function(err, results, fields) {
        if (err) throw err;
        res.json({updateUser: true})
      });
    }catch(err){
      res.json({updateUser: false})
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
router.put('/users/(:id)', [
  check('name').isLength({ min: 1 }),
  check('email').isEmail()
  // check('psw').isLength({ min: 5 })
  ],function(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
      var data = {
        name: JSON.stringify(req.body.name),
        email: JSON.stringify(req.body.email),
        psw: JSON.stringify(md5(req.body.psw)),
        id: JSON.stringify(req.params.id)
      }
      try{
        connection.query(`UPDATE user SET name=${data.name},email=${data.email},psw=${data.psw},updated_time=CURRENT_TIMESTAMP WHERE id=${data.id}`, function(err, results, fields) {
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

//upload file
router.post('/uploadFile', upload.single('filetoupload'), function (req, res, next) {
  console.log('upload File ....')
  var tmp_path = req.file.path;
  console.log(tmp_path)
  var target_path = 'uploads/' + req.file.originalname;
  console.log(target_path)
  var src = fs.createReadStream(tmp_path);
  var dest = fs.createWriteStream(target_path);
  src.pipe(dest);


  src.on('end', function() { res.json({ message: `Successfully upload file` }) });
  src.on('error', function(err) { res.json({ message: `Error upload file` }) });
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})


//download certain file
router.get('/download/:file(*)',(req, res) => {
  var file = req.params.file;
  var fileLocation = path.join('./uploads',file);
  res.download(fileLocation, file); 
});


//delete certain file
router.delete('/deleteFile/:file(*)',(req, res) => {
  fs.unlink(`./uploads/${req.params.file}`, function (err) {
    if (err) throw err;
    res.json({ message: `Successfully deleted file` });
  }); 
});

module.exports = router;
