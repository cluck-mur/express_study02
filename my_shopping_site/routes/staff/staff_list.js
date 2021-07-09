var express = require('express');
var router = express.Router();
var StaffListController = require('../../controllers/staff/staff_list/staff_list');

/**
 * POST home page.
 */
 let controller = new StaffListController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
