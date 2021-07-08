var express = require('express');
var router = express.Router();
var ProductDeleteController = require('../../controllers/product/pro_delete/pro_delete');

/**
 * GET home page.
 */
router.post('/', (new ProductDeleteController).controller);

module.exports = router;
