var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('filesPage');  
});

module.exports = router;