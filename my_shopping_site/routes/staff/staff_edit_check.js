var express = require('express');
var router = express.Router();
var staffEditCheckController = require('../../controllers/staff/staff_edit_check/staff_edit_check');

/**
 * POST home page.
 */
router.post('/', staffEditCheckController.staffEditCheck);

module.exports = router;
