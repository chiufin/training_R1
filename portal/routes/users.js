var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  // if(req.signedCookies.account && req.signedCookies.password){
  //   res.render('users', {userName:'stacy' ,users: ['ken', 'wilson', 'jacob', 'jake', 'stacy']});  
  // }else{
  //   res.redirect('/login')
  // }
  req.getConnection(function(error, conn) {
      conn.query('SELECT * FROM cats',function(err, rows, fields) {
          //if(err) throw err
          if (err) {
              req.flash('error', err)
              res.render('users', {userName:'stacy' ,users: ['opps']});  
          } else {
              // render to views/user/list.ejs template file
              console.log(rows)
              var list = []
              for(var i = 0 ; i < rows.length ; i++){
                list.push(rows[i].name)
              }
              res.render('users', {userName:'stacy' ,users: list});  
              
          }
      })
  })


});

router.get('/post', function(req, res, next) {
  
});

module.exports = router;