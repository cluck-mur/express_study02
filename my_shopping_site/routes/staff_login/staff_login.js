var express = require('express');
var router = express.Router();
var StaffLoginController = require('../../controllers/staff_login/staff_login/staff_login');

/**
 * POST home page.
 */
 let controller = new StaffLoginController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
