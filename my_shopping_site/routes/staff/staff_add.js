var express = require('express');
var router = express.Router();
var StaffAddController = require('../../controllers/staff/staff_add/staff_add');

/**
 * GET home page.
 */
 let controller = new StaffAddController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
