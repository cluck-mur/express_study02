var express = require('express');
var router = express.Router();
var StaffEditCheckController = require('../../controllers/staff/staff_edit_check/staff_edit_check');

/**
 * POST home page.
 */
 let controller = new StaffEditCheckController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
