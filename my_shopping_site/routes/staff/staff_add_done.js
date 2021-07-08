var express = require('express');
var router = express.Router();
var StaffAddDoneController = require('../../controllers/staff/staff_add_done/staff_add_done');

/**
 * POST home page.
 */
router.post('/', (new StaffAddDoneController).controller);

module.exports = router;
