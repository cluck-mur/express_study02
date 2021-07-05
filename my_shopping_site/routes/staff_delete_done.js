var express = require('express');
var router = express.Router();
var staffDeleteDoneController = require('../controllers/staff_delete_done/staff_delete_done');

/**
 * POST home page.
 */
router.post('/', staffDeleteDoneController.staffDeleteDone);

module.exports = router;
