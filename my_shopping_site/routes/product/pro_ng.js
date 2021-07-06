var express = require('express');
var router = express.Router();
var productNgController = require('../../controllers/product/pro_ng/pro_ng');

/**
 * GET home page.
 */
router.get('/', productNgController.productNg);

module.exports = router;
