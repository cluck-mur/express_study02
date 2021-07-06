var express = require('express');
var router = express.Router();
var productDeleteController = require('../../controllers/product/pro_delete/pro_delete');

/**
 * GET home page.
 */
router.post('/', productDeleteController.productDelete);

module.exports = router;
