var express = require('express');
var router = express.Router();
var productDispController = require('../../controllers/product/pro_disp/pro_disp');

/**
 * GET home page.
 */
router.post('/', productDispController.productDisp);

module.exports = router;
