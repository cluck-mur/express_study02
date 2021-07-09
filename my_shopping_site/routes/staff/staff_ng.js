var express = require('express');
var router = express.Router();
var StaffNgController = require('../../controllers/staff/staff_ng/staff_ng');

/**
 * GET home page.
 */
 let controller = new StaffNgController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
