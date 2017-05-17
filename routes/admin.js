var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome administration' });
});

module.exports = router;