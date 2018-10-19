var express = require('express');
var router = express.Router();
const fs = require('fs');


router.get('/', function(req, res, next) {
    if(req.session.name){
        fs.readdir('./uploads/', (err, files) => {
            res.render('filesPage', {userName: req.session.name, files});  
        })
    }else{
        return res.redirect('/login')
    }
});

module.exports = router;