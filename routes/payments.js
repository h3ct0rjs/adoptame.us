var express = require('express');
var router = express.Router();

/* GET payments page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Donaciones' });
});

module.exports = router;