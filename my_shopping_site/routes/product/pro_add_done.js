var express = require('express');
var router = express.Router();
var ProductAddDoneController = require('../../controllers/product/pro_add_done/pro_add_done');

/**
 * POST home page.
 */
router.post('/', (new ProductAddDoneController).controller);

module.exports = router;
