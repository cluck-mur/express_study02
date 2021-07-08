var express = require('express');
var router = express.Router();
var ProductEditController = require('../../controllers/product/pro_edit/pro_edit');

/**
 * GET home page.
 */
router.post('/', (new ProductEditController).controller);

module.exports = router;
