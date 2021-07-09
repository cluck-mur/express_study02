var express = require('express');
var router = express.Router();
var StaffAddCheckController = require('../../controllers/staff/staff_add_check/staff_add_check');

/**
 * POST home page.
 */
 let controller = new StaffAddCheckController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
