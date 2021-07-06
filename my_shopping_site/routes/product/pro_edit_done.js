var express = require('express');
var router = express.Router();
var productEditDoneController = require('../../controllers/product/pro_edit_done/pro_edit_done');

/**
 * POST home page.
 */
router.post('/', productEditDoneController.productEditDone);

module.exports = router;
