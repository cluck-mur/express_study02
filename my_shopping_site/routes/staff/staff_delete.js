var express = require('express');
var router = express.Router();
var StaffDeleteController = require('../../controllers/staff/staff_delete/staff_delete');

/**
 * GET home page.
 */
 let controller = new StaffDeleteController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
