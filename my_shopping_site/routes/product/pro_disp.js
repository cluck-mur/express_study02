var express = require('express');
var router = express.Router();
var ProductDispController = require('../../controllers/product/pro_disp/pro_disp');

/**
 * GET home page.
 */
router.post('/', (new ProductDispController).controller);

module.exports = router;
