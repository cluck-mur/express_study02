var express = require('express');
var router = express.Router();
var ProductDeleteDoneController = require('../../controllers/product/pro_delete_done/pro_delete_done');

/**
 * POST home page.
 */
router.post('/', (new ProductDeleteDoneController).controller);

module.exports = router;
