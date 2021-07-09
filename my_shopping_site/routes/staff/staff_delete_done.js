var express = require('express');
var router = express.Router();
var StaffDeleteDoneController = require('../../controllers/staff/staff_delete_done/staff_delete_done');

/**
 * POST home page.
 */
 let controller = new StaffDeleteDoneController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
