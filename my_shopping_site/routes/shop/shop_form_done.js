var express = require('express');
var router = express.Router();
var ShopFormDoneController = require('../../controllers/shop/shop_form_done/shop_form_done');

/**
 * POST home page.
 */
 let controller = new ShopFormDoneController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
