var express = require('express');
var router = express.Router();
var StaffLogoutController = require('../../controllers/staff_login/staff_logout/staff_logout');

/**
 * POST home page.
 */
 let controller = new StaffLogoutController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
