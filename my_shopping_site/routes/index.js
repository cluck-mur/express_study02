var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/index/index');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', IndexController.index);

module.exports = router;
