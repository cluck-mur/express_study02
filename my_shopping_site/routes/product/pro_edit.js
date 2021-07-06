var express = require('express');
var router = express.Router();
var productEditController = require('../../controllers/product/pro_edit/pro_edit');

/**
 * GET home page.
 */
router.post('/', productEditController.productEdit);

module.exports = router;
