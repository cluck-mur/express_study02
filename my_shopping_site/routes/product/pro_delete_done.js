var express = require('express');
var router = express.Router();
var productDeleteDoneController = require('../../controllers/product/pro_delete_done/pro_delete_done');

/**
 * POST home page.
 */
router.post('/', productDeleteDoneController.productDeleteDone);

module.exports = router;
