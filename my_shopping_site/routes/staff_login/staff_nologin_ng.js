var express = require('express');
var router = express.Router();
var staffNologinNgController = require('../../controllers/staff_login/staff_nologin_ng/staff_nologin_ng');

/**
 * POST home page.
 */
router.get('/', staffNologinNgController.staffNologinNg);

module.exports = router;
