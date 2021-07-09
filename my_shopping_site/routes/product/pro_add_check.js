var express = require('express');
var router = express.Router();
var ProductAddCheckController = require('../../controllers/product/pro_add_check/pro_add_check');
var productUlGazou = require('../../controllers/product/common/pro_ul_gazou');

/**
 * POST home page.
 */
let controller = new ProductAddCheckController;
router.post('/', productUlGazou, controller.controller.bind(controller));

module.exports = router;
