var express = require('express');
var router = express.Router();
var StaffDispController = require('../../controllers/staff/staff_disp/staff_disp');

/**
 * GET home page.
 */
 let controller = new StaffDispController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
