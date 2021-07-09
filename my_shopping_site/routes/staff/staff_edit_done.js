var express = require('express');
var router = express.Router();
var StaffEditDoneController = require('../../controllers/staff/staff_edit_done/staff_edit_done');

/**
 * POST home page.
 */
 let controller = new StaffEditDoneController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
