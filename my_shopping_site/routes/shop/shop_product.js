var express = require('express');
var router = express.Router();
var ShopProductController = require('../../controllers/shop/shop_product/shop_product');

/**
 * POST home page.
 */
 let controller = new ShopProductController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
