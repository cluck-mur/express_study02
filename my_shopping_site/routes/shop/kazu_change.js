var express = require('express');
var router = express.Router();
var KazuChangeController = require('../../controllers/shop/kazu_change/kazu_change');

/**
 * POST home page.
 */
 let controller = new KazuChangeController;
 router.post('/', controller.controller.bind(controller));

module.exports = router;
