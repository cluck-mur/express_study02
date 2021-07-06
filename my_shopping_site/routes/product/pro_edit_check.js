var express = require('express');
var router = express.Router();
var productEditCheckController = require('../../controllers/product/pro_edit_check/pro_edit_check');

/**
 * POST home page.
 */
router.post('/', productEditCheckController.productEditCheck);

module.exports = router;
