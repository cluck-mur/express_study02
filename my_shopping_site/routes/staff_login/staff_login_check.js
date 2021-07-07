var express = require('express');
var router = express.Router();
var staffLoginCheckController = require('../../controllers/staff_login/staff_login_check/staff_login_check');

/**
 * POST home page.
 */
router.post('/', staffLoginCheckController.staffLoginCheck);

module.exports = router;
