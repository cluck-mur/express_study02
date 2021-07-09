var express = require('express');
var router = express.Router();
var ProductListController = require('../../controllers/product/pro_list/pro_list');

/**
 * POST home page.
 */
 let controller = new ProductListController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
