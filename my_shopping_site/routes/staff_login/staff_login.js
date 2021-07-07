var express = require('express');
var router = express.Router();
var staffLoginController = require('../../controllers/staff_login/staff_login/staff_login');

/**
 * POST home page.
 */
router.get('/', staffLoginController.staffLogin);

module.exports = router;
