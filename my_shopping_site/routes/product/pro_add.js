var express = require('express');
var router = express.Router();
var productAddController = require('../../controllers/product/pro_add/pro_add');

/**
 * GET home page.
 */
router.get('/', productAddController.productAdd);

module.exports = router;
