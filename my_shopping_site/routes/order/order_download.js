var express = require('express');
var router = express.Router();
var OrderDownloadController = require('../../controllers/order/order_download/order_download');

/**
 * GET home page.
 */
 let controller = new OrderDownloadController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
