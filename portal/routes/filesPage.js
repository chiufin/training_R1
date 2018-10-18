var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    if(req.session.name){
        res.render('filesPage', {userName: req.session.name});  
    }else{
        return res.redirect('/login')
    }
});

module.exports = router;