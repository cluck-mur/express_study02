var express = require('express');
var router = express.Router();
var productAddDoneController = require('../../controllers/product/pro_add_done/pro_add_done');

/**
 * POST home page.
 */
router.post('/', productAddDoneController.productAddDone);

module.exports = router;
