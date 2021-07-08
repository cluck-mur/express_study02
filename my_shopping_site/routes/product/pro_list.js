var express = require('express');
var router = express.Router();
var ProductListController = require('../../controllers/product/pro_list/pro_list');

/**
 * POST home page.
 */
router.get('/', (new ProductListController).controller);

module.exports = router;
