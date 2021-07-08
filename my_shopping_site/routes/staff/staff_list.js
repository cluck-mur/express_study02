var express = require('express');
var router = express.Router();
var StaffListController = require('../../controllers/staff/staff_list/staff_list');

/**
 * POST home page.
 */
router.get('/', (new StaffListController).controller);

module.exports = router;
