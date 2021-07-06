var express = require('express');
var router = express.Router();
var productListController = require('../../controllers/product/pro_list/pro_list');

/**
 * POST home page.
 */
router.get('/', productListController.productList);

module.exports = router;
