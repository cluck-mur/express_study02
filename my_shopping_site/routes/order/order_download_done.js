var express = require('express');
var router = express.Router();
var OrderDownloadDoneController = require('../../controllers/order/order_download_done/order_download_done');

/**
 * GET home page.
 */
 let controller = new OrderDownloadDoneController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
