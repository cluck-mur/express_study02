var express = require('express');
var router = express.Router();
var ProductEditCheckController = require('../../controllers/product/pro_edit_check/pro_edit_check');
var productUlGazou = require('../../controllers/product/common/pro_ul_gazou');

/**
 * POST home page.
 */
 let controller = new ProductEditCheckController;
 router.post('/', productUlGazou, controller.controller.bind(controller));

module.exports = router;
