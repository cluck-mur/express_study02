var express = require('express');
var router = express.Router();
var ShopCartinController = require('../../controllers/shop/shop_cartin/shop_cartin');

/**
 * POST home page.
 */
 let controller = new ShopCartinController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
