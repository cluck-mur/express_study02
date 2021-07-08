var express = require('express');
var router = express.Router();
var StaffEditDoneController = require('../../controllers/staff/staff_edit_done/staff_edit_done');

/**
 * POST home page.
 */
router.post('/', (new StaffEditDoneController).controller);

module.exports = router;
