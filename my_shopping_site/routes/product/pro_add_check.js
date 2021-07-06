var express = require('express');
var router = express.Router();
var productAddCheckController = require('../../controllers/product/pro_add_check/pro_add_check');

/**
 * POST home page.
 */
router.post('/', productAddCheckController.productAddCheck);

module.exports = router;
