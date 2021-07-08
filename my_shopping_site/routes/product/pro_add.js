var express = require('express');
var router = express.Router();
var ProductAddController = require('../../controllers/product/pro_add/pro_add');

/**
 * GET home page.
 */
router.get('/', (new ProductAddController).controller);

module.exports = router;
