var express = require('express');
var router = express.Router();
var ProductAddController = require('../../controllers/product/pro_add/pro_add');

/**
 * GET home page.
 */
 let controller = new ProductAddController;
 router.get('/', controller.controller.bind(controller));

module.exports = router;
