var express = require('express');
var router = express.Router();
var staffTopController = require('../../controllers/staff_login/staff_top/staff_top');

/**
 * POST home page.
 */
router.get('/', staffTopController.staffTop);

module.exports = router;
