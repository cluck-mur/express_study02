var express = require('express');
var router = express.Router();
var StaffTopController = require('../../controllers/staff_login/staff_top/staff_top');

/**
 * POST home page.
 */
 let controller = new StaffTopController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
