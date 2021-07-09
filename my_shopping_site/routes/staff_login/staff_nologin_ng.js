var express = require('express');
var router = express.Router();
var StaffNologinNgController = require('../../controllers/staff_login/staff_nologin_ng/staff_nologin_ng');

/**
 * POST home page.
 */
 let controller = new StaffNologinNgController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
