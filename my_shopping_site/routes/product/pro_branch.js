var express = require('express');
var router = express.Router();
var ProductBranchController = require('../../controllers/product/pro_branch/pro_branch');

/**
 * GET home page.
 */
let controller = new ProductBranchController;
router.post('/', controller.controller.bind(controller));

module.exports = router;
