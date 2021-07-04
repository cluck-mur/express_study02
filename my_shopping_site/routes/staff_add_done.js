var express = require('express');
var router = express.Router();
var staffAddDoneController = require('../controllers/staff_add_done/staff_add_done');

/**
 * POST home page.
 */
router.post('/', staffAddDoneController.staffAddDone);

module.exports = router;
