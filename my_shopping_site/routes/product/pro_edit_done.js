var express = require('express');
var router = express.Router();
var ProductEditDoneController = require('../../controllers/product/pro_edit_done/pro_edit_done');

/**
 * POST home page.
 */
 let controller = new ProductEditDoneController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
