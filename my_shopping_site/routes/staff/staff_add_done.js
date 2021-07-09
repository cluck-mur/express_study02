var express = require('express');
var router = express.Router();
var StaffAddDoneController = require('../../controllers/staff/staff_add_done/staff_add_done');

/**
 * POST home page.
 */
 let controller = new StaffAddDoneController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
