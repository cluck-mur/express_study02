var express = require('express');
var router = express.Router();
var ProductDeleteController = require('../../controllers/product/pro_delete/pro_delete');

/**
 * GET home page.
 */
 let controller = new ProductDeleteController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
