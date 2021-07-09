var express = require('express');
var router = express.Router();
var StaffEditController = require('../../controllers/staff/staff_edit/staff_edit');

/**
 * GET home page.
 */
 let controller = new StaffEditController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
