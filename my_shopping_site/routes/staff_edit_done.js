var express = require('express');
var router = express.Router();
var staffEditDoneController = require('../controllers/staff_edit_done/staff_edit_done');

/**
 * POST home page.
 */
router.post('/', staffEditDoneController.staffEditDone);

module.exports = router;
