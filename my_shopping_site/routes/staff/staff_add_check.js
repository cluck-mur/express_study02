var express = require('express');
var router = express.Router();
var StaffAddCheckController = require('../../controllers/staff/staff_add_check/staff_add_check');

/**
 * POST home page.
 */
router.post('/', (new StaffAddCheckController).controller);

module.exports = router;
