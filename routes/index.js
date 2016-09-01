var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , test: 'test string, add more data to front end'});
});

module.exports = router;
