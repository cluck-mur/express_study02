var express = require('express');
var router = express.Router();
var staffListController = require('../../controllers/staff/staff_list/staff_list');

/**
 * POST home page.
 */
router.get('/', staffListController.staffList);

module.exports = router;
