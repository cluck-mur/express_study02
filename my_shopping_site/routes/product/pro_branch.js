var express = require('express');
var router = express.Router();
var ProductBranchController = require('../../controllers/product/pro_branch/pro_branch');

/**
 * GET home page.
 */
router.post('/', (new ProductBranchController).controller);

module.exports = router;
