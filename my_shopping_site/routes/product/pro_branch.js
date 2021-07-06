var express = require('express');
var router = express.Router();
var productBranchController = require('../../controllers/product/pro_branch/pro_branch');

/**
 * GET home page.
 */
router.post('/', productBranchController.productBranch);

module.exports = router;
