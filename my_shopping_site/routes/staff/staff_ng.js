var express = require('express');
var router = express.Router();
var staffNgController = require('../../controllers/staff/staff_ng/staff_ng');

/**
 * GET home page.
 */
router.get('/', staffNgController.staffNg);

module.exports = router;
