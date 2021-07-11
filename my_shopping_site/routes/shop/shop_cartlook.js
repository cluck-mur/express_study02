var express = require('express');
var router = express.Router();
var ShopCartlookController = require('../../controllers/shop/shop_cartlook/shop_cartlook');

/**
 * POST home page.
 */
 let controller = new ShopCartlookController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
