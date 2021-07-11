var express = require('express');
var router = express.Router();
var ClearCartController = require('../../controllers/shop/clear_cart/clear_cart');

/**
 * POST home page.
 */
 let controller = new ClearCartController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
