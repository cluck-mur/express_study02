var express = require('express');
var router = express.Router();
var ProductNgController = require('../../controllers/product/pro_ng/pro_ng');

/**
 * GET home page.
 */
router.get('/', (new ProductNgController).controller);

module.exports = router;
