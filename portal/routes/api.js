const express = require('express');
const router = express.Router();
const connection = require('../db.js').connection;
const { check, validationResult } = require('express-validator/check');
const md5 = require("blueimp-md5");
const path = require('path');
const fs = require('fs');
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

const upload = multer({ storage: storage })

//click signIn button
router.post('/login', [
  check('account').isEmail()
],function(req, res){
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  var response = { login: false, sessionName: undefined };
  try{
    connection.query(`SELECT * FROM user WHERE email="${req.body.account}"`, function(err, result, fields) {
      if(result.length > 0 && result[0].psw == md5(req.body.psw)){
          response.sessionName = result[0].name 
          response.login = true;
      }
      res.json(response);
    });
  }catch(err){
    console.err(err);
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
    connection.query( `INSERT INTO user ( name, email, psw) VALUES ( "${req.body.name}", "${req.body.email}", "${md5(req.body.password)}" )`, function(err, results, fields) {
      res.json({updateUser: true})
    });
  }catch(err){
    console.warn(err)
    res.json({updateUser: false})
  }
})

//get certain user
router.get('/users/(:id)', function(req, res){
  try{
    connection.query(`SELECT * FROM user WHERE id="${req.params.id}"`, function(err, result, fields) {
      res.json(result[0]);
    });
  }catch(err){
    console.warn(err)
  }
})

//update certain user
router.put('/users/(:id)', [
  check('name').isLength({ min: 1 }),
  check('email').isEmail()
  ],function(req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    let queryString = ""
    queryString += req.body.name && `name="${req.body.name}"`
    queryString += req.body.email && `,email="${req.body.email}"`
    queryString += req.body.psw && `,psw="${md5(req.body.psw)}"`
    try{
      connection.query(`UPDATE user SET ${queryString},updated_time=CURRENT_TIMESTAMP WHERE id="${req.params.id}"`, function(err, results, fields) {
        res.json({ message: `Successfully updated ${req.params.id}` });
      });
    }catch(err){
      console.warn(err)
      res.json({ message: `Updated user ${req.params.id} failed!`})
    }
    
})

//delete user
router.delete('/users/(:id)', function(req, res){
  try{
    connection.query(`DELETE FROM user WHERE id="${req.params.id}"`, function(err, results, fields) {
      res.json({ message: `Successfully deleted ${req.params.id}` });
    });
  }catch(err){
    console.warn(err)
    res.json({ message: `Deleted user ${req.params.id} failed!` });
  }
  
})

//upload file
router.post('/uploadFile', upload.single('filetoupload'), function (req, res, next) {
  res.json({ message: `Successfully update file` });
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
