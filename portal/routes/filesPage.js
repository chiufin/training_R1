var express = require('express');
var router = express.Router();
const fs = require('fs');
const s3bucket = require('../config/s3.config.js');


router.get('/', function(req, res, next) {
    if(req.session.name){
        var params = { Bucket: 'stacy-upload-file'};
        s3bucket.listObjects(params, function(err, data) {
            if (err) {
               console.log("Error", err);
            } else {
               res.render('filesPage', {userName: req.session.name, files: data.Contents});  
            }
         });
    }else{
        return res.redirect('/login')
    }
});

module.exports = router;