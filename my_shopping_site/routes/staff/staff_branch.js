var express = require('express');
var router = express.Router();
var StaffBranchController = require('../../controllers/staff/staff_branch/staff_branch');

/**
 * GET home page.
 */
 let controller = new StaffBranchController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
