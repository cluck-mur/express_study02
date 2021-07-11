var express = require('express');
var router = express.Router();
var ShopListController = require('../../controllers/shop/shop_list/shop_list');

/**
 * POST home page.
 */
 let controller = new ShopListController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
