var express = require('express');
var router = express.Router();
var productEditCheckController = require('../../controllers/product/pro_edit_check/pro_edit_check');
var productUlGazou = require('../../controllers/product/common/pro_ul_gazou');

/**
 * POST home page.
 */
router.post('/', productUlGazou, productEditCheckController.productEditCheck);

module.exports = router;
