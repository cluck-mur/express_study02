var express = require('express');
var router = express.Router();
var staffAddCheckController = require('../../controllers/staff/staff_add_check/staff_add_check');

/**
 * POST home page.
 */
router.post('/', staffAddCheckController.staffAddCheck);

module.exports = router;
