var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Acerca de' });
});

module.exports = router;
