var express = require('express');
var router = express.Router();
var ShopFormCheckController = require('../../controllers/shop/shop_form_check/shop_form_check');

/**
 * POST home page.
 */
 let controller = new ShopFormCheckController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
