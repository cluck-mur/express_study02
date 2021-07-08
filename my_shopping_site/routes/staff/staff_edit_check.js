var express = require('express');
var router = express.Router();
var StaffEditCheckController = require('../../controllers/staff/staff_edit_check/staff_edit_check');

/**
 * POST home page.
 */
router.post('/', (new StaffEditCheckController).controller);

module.exports = router;
