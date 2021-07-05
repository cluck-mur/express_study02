var express = require('express');
var router = express.Router();
var staffBranchController = require('../../controllers/staff/staff_branch/staff_branch');

/**
 * GET home page.
 */
router.post('/', staffBranchController.staffBranch);

module.exports = router;
