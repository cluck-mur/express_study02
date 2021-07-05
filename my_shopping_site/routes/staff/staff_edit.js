var express = require('express');
var router = express.Router();
var staffEditController = require('../../controllers/staff/staff_edit/staff_edit');

/**
 * GET home page.
 */
router.post('/', staffEditController.staffEdit);

module.exports = router;
