var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {pretty: true, items: [{name: "Jack"}]});
});

module.exports = router;