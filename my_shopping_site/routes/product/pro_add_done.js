var express = require('express');
var router = express.Router();
var ProductAddDoneController = require('../../controllers/product/pro_add_done/pro_add_done');

/**
 * POST home page.
 */
 let controller = new ProductAddDoneController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
