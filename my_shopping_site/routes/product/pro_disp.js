var express = require('express');
var router = express.Router();
var ProductDispController = require('../../controllers/product/pro_disp/pro_disp');

/**
 * GET home page.
 */
 let controller = new ProductDispController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
