var express = require('express');
var router = express.Router();
var staffAddController = require('../controllers/staff_add/staff_add');

/**
 * GET home page.
 */
router.get('/', staffAddController.staffAdd);

module.exports = router;
