var express = require('express');
var router = express.Router();
var ProductDeleteDoneController = require('../../controllers/product/pro_delete_done/pro_delete_done');

/**
 * POST home page.
 */
 let controller = new ProductDeleteDoneController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
