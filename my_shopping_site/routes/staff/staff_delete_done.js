var express = require('express');
var router = express.Router();
var StaffDeleteDoneController = require('../../controllers/staff/staff_delete_done/staff_delete_done');

/**
 * POST home page.
 */
router.post('/', (new StaffDeleteDoneController).controller);

module.exports = router;
