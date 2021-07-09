var express = require('express');
var router = express.Router();
var StaffLoginCheckController = require('../../controllers/staff_login/staff_login_check/staff_login_check');

/**
 * POST home page.
 */
 let controller = new StaffLoginCheckController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
