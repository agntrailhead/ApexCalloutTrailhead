var express = require('express');
var router = express.Router();

/* GET books listing. */
router.get('/', function(req, res, next){
  var books = ['The Alchemist', 'Advanced Javascript for web developers'];
  res.json({'Books': books});
});

/* POST new book */
router.post('/', function(req, res, next){
    var books = ['The Alchemist', 'Advanced Javascript for web developers'];
    var newBook = req.body.book.name;
    books.push(newBook);

    res.json(books);
});


module.exports = router;
