var express = require('express');
var router = express.Router();
var productAddCheckController = require('../../controllers/product/pro_add_check/pro_add_check');
var productUlGazou = require('../../controllers/product/common/pro_ul_gazou');

/**
 * POST home page.
 */
router.post('/', productUlGazou, productAddCheckController.productAddCheck);

module.exports = router;
