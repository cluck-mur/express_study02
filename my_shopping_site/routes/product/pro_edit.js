var express = require('express');
var router = express.Router();
var ProductEditController = require('../../controllers/product/pro_edit/pro_edit');

/**
 * GET home page.
 */
 let controller = new ProductEditController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
