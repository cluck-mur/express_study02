var express = require('express');
var router = express.Router();
var ProductNgController = require('../../controllers/product/pro_ng/pro_ng');

/**
 * GET home page.
 */
 let controller = new ProductNgController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
