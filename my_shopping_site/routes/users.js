var express = require('express');
var router = express.Router();
var UsersController = require('../controllers/users/users');

/* GET users listing. */
router.get('/', UsersController.users);

module.exports = router;
