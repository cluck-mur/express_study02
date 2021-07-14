var express = require('express');
var router = express.Router();
var ShopKantanCheckController = require('../../controllers/shop/shop_kantan_check/shop_kantan_check');

/**
 * POST home page.
 */
 let controller = new ShopKantanCheckController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
