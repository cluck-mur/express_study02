var express = require('express');
var router = express.Router();
var staffDeleteController = require('../controllers/staff_delete/staff_delete');

/**
 * GET home page.
 */
router.post('/', staffDeleteController.staffDelete);

module.exports = router;
