var express = require('express');
var router = express.Router();
var ProductEditDoneController = require('../../controllers/product/pro_edit_done/pro_edit_done');

/**
 * POST home page.
 */
router.post('/', (new ProductEditDoneController).controller);

module.exports = router;
