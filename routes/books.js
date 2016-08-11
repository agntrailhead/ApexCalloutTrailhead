var express = require('express');
var router = express.Router();

/* GET books listing. */
router.get('/', function(req, res, next){
  var books = ['The Alchemist', 'Advanced Javascript for web developers'];
  res.json({'Books': books});
});

module.exports = router;
