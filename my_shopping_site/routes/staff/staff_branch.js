var express = require('express');
var router = express.Router();
var StaffBranchController = require('../../controllers/staff/staff_branch/staff_branch');

/**
 * GET home page.
 */
router.post('/', (new StaffBranchController).controller);

module.exports = router;
